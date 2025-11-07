import { useEffect, useState } from "react";

interface Props {
    placeholder?: string;
    onQuery: (query: string) => void;
}

export const SearchBar = ({placeholder = "Buscar", onQuery}: Props) => {

  const [query, setQuery] = useState('')


  useEffect(() => {

    const timeoutId = setTimeout(() => {
      onQuery(query)
    },700)

    // onQuery(query);

    return() => {
      clearTimeout(timeoutId); //? Esto se disapara cuando el componente se desmonta y cuando el useEffect se vulve a ejecutar. Explicame mejor esto.
    }

  },[query, onQuery]); //? Aqui le pasamos el onQuery porque React dise que este puede cambiar, en que momento puede una funcion cambiar?, lo entenderia de un estado, pero cuando pasamos una funcion que significa?.


  const handleSearch = () => {
    onQuery(query)
    // setQuery('')
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if( event.key === 'Enter'){
            handleSearch();
      }
  }

  return (
    <div className="search-container">
       <input 
        type="text" 
        placeholder={placeholder} 
        value={ query }
        onChange={(event) => setQuery(event.target.value)}

        onKeyDown={handleKeyDown}
        />
        <button onClick={handleSearch}>Buscar</button>
    </div>
  )
}
