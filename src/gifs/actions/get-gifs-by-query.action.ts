import axios from "axios";
import type { GiphyResponse } from "../intearfaces/giphy.responce";
import type { Gif } from "../intearfaces/gif.interface";


export const getGifsByQuery = async(query: string): Promise<Gif[]> => {

    const response = await axios.get<GiphyResponse>('/search',{
        params: {
            q: query,
            limit: 10,
            lang: 'es',
            api_key: import.meta.env.VITE_GIPHY_API_KEY
        }
    })

    return response.data.data.map( gif => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.original.url,
        width: +gif.images.original.width,
        height: +gif.images.original.height,
    }))

    // fetch(
    //     `https://api.giphy.com/v1/gifs/search?api_key=nAj8a48sXLWNOGzUtvICKb5RVN232yok&q=${query}&limit=10&lang=es`
    // );

};