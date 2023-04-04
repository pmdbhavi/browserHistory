import './index.css'

const HistoryItem = props => {
  const {details, deleteItem} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = details
  const deleteHistory = () => {
    deleteItem(id)
  }

  return (
    <li className="list">
      <div className="url">
        <p className="time">{timeAccessed}</p>
        <div className="urlContainer">
          <img src={logoUrl} alt="domain logo" className="image" />
          <div className="titleContainer">
            <p className="title">{title}</p>
            <p className="domain">{domainUrl}</p>
          </div>
        </div>
      </div>
      <button
        className="button"
        type="button"
        data-testid="delete"
        onClick={deleteHistory}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItem
