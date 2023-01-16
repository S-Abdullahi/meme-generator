import React, { useState } from "react";
import Data from "../memedata";

export default function Main() {
  let url;
  const [genMeme, setGenMeme] = useState("https://i.imgflip.com/1g8my4.jpg");
  function handleClick() {
    const randomNumber = Math.floor(Math.random() * Data.data.memes.length);
    url = Data.data.memes[randomNumber].url;
    setGenMeme(url);
  }

  return (
    <main className="main">
      <div>
        <input type="text" placeholder="top text" />
        <input type="text" placeholder="buttom text" />
        <button onClick={handleClick}>Get a new meme image 🖼️</button>
      </div>
      <img src={genMeme} className="memepic" />
    </main>
  );
}
