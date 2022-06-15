import React from 'react'
import "../styles/cards.css"

const Gif = ({gif, setSelectedGifId}) => {

  return (

    <button
    className="bg-white card"
    style={{border: 0}}
    onClick={() => setSelectedGifId(gif.id)}
    >
      <div className="card my-card">
        <div className="d-flex flex-column justify-content-end">
          <img src={gif.url} className="card-img-top my-card-image" alt="gif" />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title text-center">{gif.title}</h5>
          </div>
        </div>
      </div>
    </button>
  )
}

export default Gif
