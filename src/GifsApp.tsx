import { useState } from "react"
import { GifList } from "./gifs/components/GifList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { mockGifs } from "./mock-data/gifs.mock"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.action"


export const GifsApp = () => {
    const [previousTems, setPreviousTerms] = useState(['dragon ball z']);

    const handleTermClicked = ( term: string,) => {
        console.log({term});
    }

    const handleSearch = async(query: string) => {

      const queryCustom = query.toLowerCase().trim();
      if( queryCustom.length > 0 && !previousTems.includes(queryCustom) && previousTems.length < 8){
        setPreviousTerms([
          queryCustom,
          ...previousTems
        ])
      }else{
        return;
      }

      const gifs = await getGifsByQuery(queryCustom)

      console.log({gifs});

    }

  return (
    <>
    <CustomHeader title= "Buscador de Gifs" description="Descubre y comparte el gif" />

    <SearchBar 
    placeholder="Busca lo que quieras" 
    onQuery={ handleSearch }
    />

    <PreviousSearches searches={previousTems} onLabelClick={(term: string) => handleTermClicked(term)} />

    <GifList gifs={mockGifs}/>
    </>
)
}
