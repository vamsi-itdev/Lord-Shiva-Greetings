import React, { useState, useEffect } from "react";
import "./App.css";

const wishText = "Wishing you Happy Maha Shivaratri to You & Your Family";
const senderText = "From Your Vamsi Krishna"; // Your name

const App = () => {
  const [fallingWords, setFallingWords] = useState([]);
  const [flowers, setFlowers] = useState([]);
  const [showFinalWish, setShowFinalWish] = useState(false);

  const startAnimation = () => {
    const wordsArray = wishText.split(" ");
    setFallingWords(wordsArray.map((word, index) => ({
      id: index,
      text: word,
      left: Math.random() * 80 + 10,
      animationDuration: Math.random() * 2 + 3,
    })));

    setTimeout(() => {
      setShowFinalWish(true);
      setFallingWords([]);
    }, 4000); // After 4 seconds, show final wish

    // Falling Flowers Animation
    const flowerCount = 10;
    setFlowers(Array.from({ length: flowerCount }, (_, index) => ({
      id: index,
      left: Math.random() * 100,
      animationDuration: Math.random() * 3 + 2,
    })));
  };

  return (
    <div className="App">
      {/* Lord Shiva Image (Always on top) */}
      <div className="shiva-container">
        <img src={`${process.env.PUBLIC_URL}/shiva.png`} className="shiva-image" alt="Lord Shiva" />
      </div>

      {/* Tap for Blessings Button */}
      <button onClick={startAnimation}>Tap for Blessings</button>

      {/* Falling Words Animation */}
      {fallingWords.map((word) => (
        <span
          key={word.id}
          className="falling-word"
          style={{ left: `${word.left}%`, animationDuration: `${word.animationDuration}s` }}
        >
          {word.text}
        </span>
      ))}

      {/* Final Wish (Appears after animation) */}
      {showFinalWish && <div className="word-container">{wishText}</div>}

      

      {/* Falling Flowers Animation */}
      {flowers.map((flower) => (
        <img
          key={flower.id}
          src={`${process.env.PUBLIC_URL}/flower.png`} // GitHub Pages-friendly path
          className="flower"
          style={{
            left: `${flower.left}%`,
            animationDuration: `${flower.animationDuration}s`,
          }}
          alt="Flower"
        />
      ))}
      {/* Your Name (At the bottom) */}
      <h1 className="static-wish">{senderText}</h1>
    </div>
  );
};

export default App;
