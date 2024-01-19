import './index.css'

const Countries = props => {
  const {countiesDetails, onClickVisit} = props
  const {name, isVisited, id} = countiesDetails

  const visitedText = isVisited ? 'Visited' : 'Visit'

  const onClickVisitButton = () => {
    onClickVisit(id)
  }

  return (
    <li className="countriesList">
      <p className="name">{name}</p>
      {isVisited === true ? (
        <p className="visit">{visitedText}</p>
      ) : (
        <button
          className="visitButton"
          type="button"
          onClick={onClickVisitButton}
        >
          {visitedText}
        </button>
      )}
    </li>
  )
}

export default Countries
