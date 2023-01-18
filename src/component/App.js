import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import Main from "./Main";
import Data from "../memedata";

export default function App() {
  let url;
  const [allMemes, setAllMeme] = useState("");
  const [meme, setMeme] = useState("https://i.imgflip.com/1ur9b0.jpg");

  const [formData, setFormData] = useState({ toptext: "", bottomtext: "" });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        setAllMeme(data.data.memes);
      });
  }, []);

  function getMeme() {
    const memeRan = Math.floor(Math.random() * allMemes.length);
    url = allMemes[memeRan].url;
    setMeme(url);
  }

  return (
    <>
      <Nav />
      <Main
        memeImg={meme}
        handleClick={getMeme}
        formData={formData}
        handleChange={handleChange}
      />
    </>
  );
}
