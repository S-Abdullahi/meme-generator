import React, { useState } from "react";

export default function Main(props) {
    console.log(props)
  return (
    <main className="main">
      <div>
        <input type="text" placeholder="top text" />
        <input type="text" placeholder="buttom text" />
        <button onClick={props.handleClick}>Get a new meme image 🖼️</button>
      </div>
      <div className="container">
        <img src={props.memeImg} className="memepic" />
        <p className="text top">top text</p>
        <p className="text bottom">bottom text</p>
      </div>
    </main>
  );
}
