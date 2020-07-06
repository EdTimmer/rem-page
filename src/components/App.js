import React from 'react';
import './App.css';
import { LoremIpsum } from "lorem-ipsum";

import flowerlogo from "../images/flowerlogo.png";
import beaver from '../images/beaver.jpg';
import bluejays from "../images/bluejays.jpg";
import covids from "../images/covids.jpg";
import fish from "../images/fish.jpg";
import flower from "../images/flower.jpg";
import fox from "../images/fox.jpg";
import parrots from "../images/parrots.jpg";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

const App = () => {

  return (
    <div className="App">
      <div className="header">
        <div className="header-text">
          Lo<b>rem</b> Ipsum
        </div>
        <button className="button4">Join</button>
      </div>

      <div className="row-container">
        <div className="img-container">
          <img className="img-one" src={bluejays} alt="img-one" />
        </div>
        <div className="img-container">
          <img className="img-one" src={flower} alt="img-one" />
        </div>
        <div className="img-container">
          <img className="img-one" src={fish} alt="img-one" />
        </div>
      </div>

      <div className="row-container">
        <div className="border-box">
          <div className="img-container">
            <img className="img-two" src={fox} alt="img-two" />
          </div>
          <div className="text-box">{lorem.generateSentences(4)}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
