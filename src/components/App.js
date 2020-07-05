import React from 'react';
import './App.css';

import flowerlogo from "../images/flowerlogo.png";
import beaver from '../images/beaver.jpg';
import bluejays from "../images/bluejays.jpg";
import covids from "../images/covids.jpg";
import fish from "../images/fish.jpg";
import flower from "../images/flower.jpg";
import fox from "../images/fox.jpg";
import parrots from "../images/parrots.jpg";

const App = () => {

  return (
    <div className="App">
      <div className="header">
        {/* <div className="logo-container">
          <img className="logo" src={flowerlogo} alt="img-one" />
        </div> */}
        <div className="header-text">
          Lo<b>rem</b> Ipsum
        </div>
        <button className="button4">Login</button>
      </div>

      <div className="images-container">
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

      <div className="images-container">
        <div className="img-container">
          <img className="img-two" src={beaver} alt="img-two" />

        </div>
        <div className="img-container">
          <img className="img-two" src={fox} alt="img-two" />
  
        </div>
      </div>
    </div>
  );
}

export default App;
