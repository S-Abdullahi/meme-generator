import React, { useState } from "react";

export default function Main(props) {
    
console.log(props)
  return (
    <main className="main">
      <div>
        <input type="text" placeholder="top text" name="toptext" value={props.formData.toptext} onChange={props.handleChange}/>
        <input type="text" placeholder="buttom text" name="bottomtext" value={props.formData.bottomtext} onChange={props.handleChange}/>
        <button onClick={props.handleClick}>Get a new meme image 🖼️</button>
      </div>
      <div className="container">
        <img src={props.memeImg} className="memepic" />
        <p className="text top">{props.formData.toptext}</p>
        <p className="text bottom">{props.formData.bottomtext}</p>
      </div>
    </main>
  );
}
