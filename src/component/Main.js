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
      <img src={props.memeImg} className="memepic" />
    </main>
  );
}
