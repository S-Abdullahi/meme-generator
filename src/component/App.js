import React, {useState} from "react";
import Nav from './Nav'
import Main from './Main'
import Data from '../memedata'

export default function App() {

    let url
    const [meme, setMeme] = useState('https://i.imgflip.com/1ur9b0.jpg')
    function getMeme(){
        const memeRan = Math.floor(Math.random()*Data.data.memes.length)
        url = Data.data.memes[memeRan].url
        setMeme(url)
    }

  return (
    <>
      <Nav/>
      <Main memeImg={meme} handleClick={getMeme}/>
    </>
  );
}
