import React from 'react'
import "../styles/cards.css"

const Gif = ({gif, setSelectedGifId}) => {

  return (
    <div className="card my-card">
      <div className="d-flex flex-column justify-content-end">
        <img src={gif.url} className="card-img-top my-card-image" alt="gif" />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{gif.title}</h5>
          <button
            className="btn btn-primary"
            onClick={() => setSelectedGifId(gif.id)}
            >Select
          </button>
        </div>
      </div>
    </div>
  )
}

export default Gif
