
interface Props {
  searches: string[];

  onLabelClick: (term: string) => void;
}

export const PreviousSearches = ({searches, onLabelClick}: Props) => {
  return (
        <div className="previous-searches">
            <h2>Busquedas previas</h2>
            <ul className="previous-searches-list">
              {
                searches.map(search => (
                    <li onClick={() => onLabelClick(search)} key={search}>{search}</li>
                ))
              }
            </ul>
        </div>
  )
}
