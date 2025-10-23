import { useState } from "react"
import { GifList } from "./gifs/components/GifList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { mockGifs } from "./mock-data/gifs.mock"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"


export const GifsApp = () => {
    const [previousTems, setPreviousTerms] = useState(['dragon ball z']);

    const handleTermClicked = ( term: string ) => {
        console.log({term});
    }
  return (
    <>
    <CustomHeader title= "Buscador de Gifs" description="Descubre y comparte el gif" />
    <SearchBar placeholder="Busca lo que quieras" />
    <PreviousSearches searches={previousTems} onLabelClick={handleTermClicked} />
    <GifList gifs={mockGifs}/>
    </>
)
}
