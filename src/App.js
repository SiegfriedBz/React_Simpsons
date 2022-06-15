import { useState } from 'react';
import NavBar from './components/NavBar';
import Gif from './components/Gif';
import GifList from './components/GifList';
import { v4 as uuidv4 } from 'uuid';
import "../src/styles/index.css";

function App() {
  const initGifs = [
    {id: uuidv4(), title: 'Booty', url: 'https://media.giphy.com/media/s6EYTqTRqujIY/giphy.gif'},
    {id: uuidv4(), title: 'DamnIt', url: 'https://media.giphy.com/media/RSOUOj8H9A3Xq/giphy.gif'},
    {id: uuidv4(), title: 'RockIt', url: 'https://media.giphy.com/media/4oMoIbIQrvCjm/giphy.gif'},
    {id: uuidv4(), title: 'Lust', url: 'https://media.giphy.com/media/18ANhgTABn04M/giphy.gif'},
    {id: uuidv4(), title: 'Russ', url: 'https://media.giphy.com/media/AUL9fRYuuJQoE/giphy.gif'},
    {id: uuidv4(), title: 'Ripper', url: 'https://media.giphy.com/media/asusCNrppiAuc/giphy.gif'},
    {id: uuidv4(), title: 'Gatsby', url: 'https://media.giphy.com/media/ZJh42VKmeQ2yY/giphy.gif'},
    {id: uuidv4(), title: '66', url: 'https://media.giphy.com/media/f1Gpa9nYrXLfa/giphy.gif'},
  ]

  const [gifs, setGifs] = useState(initGifs);
  const [selectedGifid, setSelectedGifId] = useState(undefined);

  const selectedGif = () => {
    if(selectedGifid === undefined) {
      return gifs.find(gif => gif.title === "DamnIt")
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
