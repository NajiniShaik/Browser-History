import './index.css'

const SearchItem = props => {
  const {searchDetails, onDeleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = searchDetails
  const onDelete = () => {
    onDeleteHistory(id)
  }
  return (
    <li className="search-history-details">
      <div className="cards-container">
        <p className="time">{timeAccessed}</p>
        <div className="domain-detailed-card">
          <img src={logoUrl} className="logo" alt="domain logo" />
          <div className="domain-details">
            <p className="domain-title">{title}</p>
            <p className="domain-url">{domainUrl}</p>
          </div>
        </div>
      </div>
      <button
        className="button"
        type="button"
        onClick={onDelete}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-img"
        />
      </button>
    </li>
  )
}

export default SearchItem
