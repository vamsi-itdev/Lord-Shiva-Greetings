import React, { useState } from "react";
import "./App.css";
import shivaImage from "./shiva.png"; // Shiva image from src

function App() {
  const [flowers, setFlowers] = useState([]);
  const [words, setWords] = useState([]);
  const [showFullWish, setShowFullWish] = useState(false);
  const [selectedWish, setSelectedWish] = useState("");

  const wishesList = [
    "Wishing you a blissful Maha Shivaratri!",
    "May Lord Shiva bless you with happiness!",
    "Har Har Mahadev! Shambo Shankara. The lord shiva May your life be peaceful!",
    "Celebrate Shivaratri with love and devotion!",
    "Om Namah Shivaya! Stay blessed!",
  ];

  const senderText = "From Your Vamsi Krishna"; // Your name

  // Function to create falling flowers
  const dropFlowers = () => {
    let newFlowers = [];
    for (let i = 0; i < 15; i++) {
      newFlowers.push({
        id: i,
        left: Math.random() * window.innerWidth, // Random horizontal position
        animationDuration: 3 + Math.random() * 2, // Random fall speed
      });
    }
    setFlowers(newFlowers);

    setTimeout(() => {
      setFlowers([]);
    }, 5000);
  };

  // Function to drop words and form full sentence
  const startWishes = () => {
    setShowFullWish(false);
    
    // Pick a random wish from the list
    const randomWish = wishesList[Math.floor(Math.random() * wishesList.length)];
    setSelectedWish(randomWish);

    let newWords = randomWish.split(" ").map((word, index) => ({
      id: index,
      text: word,
      left: Math.random() * window.innerWidth, // Random horizontal position
      animationDuration: 3 + Math.random() * 2, // Random speed
    }));

    setWords(newWords);

    // After animation, show full wish text
    setTimeout(() => {
      setShowFullWish(true);
    }, 3000);
  };

  return (
    <div className="App">
      <h1 className="title">🌸 Om Namah Shivaya 🌸</h1>
      <div className="shiva-container">
        <img src={shivaImage} alt="Lord Shiva" className="shiva-image" />
      </div>

      {/* Buttons */}
      <div className="button-container">
        <button onClick={dropFlowers}>🌼 Pour Flowers 🌼</button>
        <button onClick={startWishes}>💖 Show Wishes 💖</button>
      </div>

      {/* Falling Flowers */}
      {flowers.map((flower) => (
        <img
          key={flower.id}
          src="/flower.png" // Flower image from public folder
          className="flower"
          style={{
            left: `${flower.left}px`,
            animationDuration: `${flower.animationDuration}s`,
          }}
          alt="Flower"
        />
      ))}

      {/* Falling Wish Words */}
      {words.map((word) => (
        <span
          key={word.id}
          className="falling-word"
          style={{
            left: `${word.left}px`,
            animationDuration: `${word.animationDuration}s`,
          }}
        >
          {word.text}
        </span>
      ))}

      {/* Full Wish Sentence Appears Here After Falling Animation */}
      {showFullWish && <div className="full-wish">{selectedWish}</div>}

      {/* Your Name (Always Visible) */}
      <div className="sender-name">{senderText}</div>
    </div>
  );
}

export default App;
