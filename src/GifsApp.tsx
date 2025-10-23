import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { mockGifs } from "./mock-data/gifs.mock"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"

export const GifsApp = () => {
  return (
    <>
    <CustomHeader title= "Buscador de Gifs" description="Descubre y comparte el gif" />
    <SearchBar/>
    <PreviousSearches/>



    {/* Gifs */}
    <div className="gifs-continer">
        {
            mockGifs.map(gif => (
                <div key={gif.id} className="gif-card">
                    <img src={gif.url} alt={gif.title} />
                    <h3>{ gif.title }</h3>
                    <p>
                        { gif.width }x{ gif.height } (1.5mb)
                    </p>
                </div>
            ))
        }
    </div>
    </>
)
}
