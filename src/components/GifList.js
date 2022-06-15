import React from 'react'
import Gif from './Gif';
import "../styles/cards.css"

const GifList = ({gifs, setSelectedGifId }) => {
  return (
    <div className='cards'>
      {gifs && gifs.map(gif => {
        return <Gif key={gif.id} gif={gif} setSelectedGifId={setSelectedGifId} />
      })
    }
    </div>
  )
}

export default GifList
