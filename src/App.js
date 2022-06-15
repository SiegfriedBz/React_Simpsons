import { useState } from 'react';
import NavBar from './components/NavBar';
import Gif from './components/Gif';
import GifList from './components/GifList';
import { v4 as uuidv4 } from 'uuid';
import "../src/styles/index.css";

function App() {
  const initGifs = [
    {id: uuidv4(), title: 'Twisty', url: 'https://media.giphy.com/media/s6EYTqTRqujIY/giphy.gif'},
    {id: uuidv4(), title: 'Bang', url: 'https://media.giphy.com/media/RSOUOj8H9A3Xq/giphy.gif'},
    {id: uuidv4(), title: 'Rock', url: 'https://media.giphy.com/media/4oMoIbIQrvCjm/giphy.gif'},
    {id: uuidv4(), title: 'Love', url: 'https://media.giphy.com/media/18ANhgTABn04M/giphy.gif'},
  ]

  const [gifs, setGifs] = useState(initGifs);
  const [selectedGifid, setSelectedGifId] = useState(undefined);

  const selectedGif = () => {
    console.log(selectedGifid)
    if(selectedGifid === undefined) {
      return gifs.find(gif => gif.title === "Bang")
    }
    return gifs.find(gif => gif.id === selectedGifid)
  }

  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <Gif gif={selectedGif()}  />
          </div>
          <div className="col-sm-12 col-md-6">
            <GifList gifs={gifs} setSelectedGifId={setSelectedGifId}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
