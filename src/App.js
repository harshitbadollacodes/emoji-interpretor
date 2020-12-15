import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const emojiDictionary = {
    "🍕": "Pizza",
    "🍔": "Burger",
    "🌭": "Hot Dog",
    "🍿": "Pop Corn",
    "🥞": "Pancakes",
    "🧇": "Waffles",
    "🌮": "Tacos",
    "🍦": "Ice Cream",
    "🍰": "Cake",
    "☕": "Hot Chocolate",
    "🍻": "Couple of Beers"
  };

  // To convert the object to array
  let emojiWeKnow = Object.keys(emojiDictionary);

  const [meaning, setMeaning] = useState("");

  function newInput(e) {
    let meaning = emojiDictionary[e.target.value];

    if (meaning === undefined) {
      setMeaning("We don't have the meaning");
    } else {
      setMeaning(`${e.target.value}${meaning}`);
    }
  }

  function emojiClickHandler(emoji) {
    let emo = emojiDictionary[emoji];
    setMeaning(`${emoji} ${emo}`);
  }

  return (
    <div className="App">
      <h1>What would be your last meal?</h1>
      <input onChange={newInput} placeholder="Enter any food or drink emoji" />

      <h2
        style={{
          margin: "0.5rem auto",
          backgroundColor: "#4267B2",
          color: "#fff",
          padding: "0.5rem ",
          borderRadius: "10px",
          width: "80%",
          minHeight: "2rem"
        }}
      >
        {meaning}
      </h2>

      <h3>Here's the menu to choose from</h3>

      {emojiWeKnow.map((emoji) => {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            key={emoji}
            style={{
              padding: "0.5rem",
              fontSize: "2rem",
              cursor: "pointer"
            }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
