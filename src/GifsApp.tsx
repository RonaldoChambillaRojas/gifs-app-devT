import { mockGifs } from "./mock-data/gifs.mock"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"

export const GifsApp = () => {
  return (
    <>
    <CustomHeader title= "Buscador de Gifs" description="Descubre y comparte el gif" />
    <SearchBar/>

    {/* Busquedas previas */}
    <div className="previous-searches">
        <h2>Busquedas previas</h2>
        <ul className="previous-searches-list">
            <li>Goku</li>
            <li>Saitama</li>
            <li>Elden Ring</li>
        </ul>
    </div>

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
