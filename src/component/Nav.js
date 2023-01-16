import React from "react";
import MemeIcon from "../images/trollface.svg";

export default function Nav() {
  return (
    <nav className="nav">
      <div>
        <img src={MemeIcon} className="nav__icon"/>
        <h1 className="nav__title">meme generator</h1>
      </div>
      <p>react course - project 3</p>
    </nav>
  );
}
