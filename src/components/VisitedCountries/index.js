import './index.css'

const VisitedCountries = props => {
  const {visitedCountriesDetails, onClickRemove} = props
  const {imageUrl, name, id} = visitedCountriesDetails

  const onClickRemoveButton = () => {
    onClickRemove(id)
  }

  return (
    <li className="visitedCountriesListDetails">
      <img src={imageUrl} alt="thumbnail" className="image" />
      <div className="details-container">
        <p className="name">{name}</p>
        <button
          className="removeButton"
          type="button"
          onClick={onClickRemoveButton}
        >
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCountries
