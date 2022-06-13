import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {
const [text, setText] = useState('');
const[wordCount, setWordCount] = useState(0);
const[charCount, setCharCount] = useState(0);
const[increase, setIncrease] = useState(16);
const[charLimit, setCharLimit] = useState(50);

const setCharacterLimit = (event)=>{
  setCharLimit(event.target.value);
}

const setChange = (event) =>{
setIncrease(event.target.value);
}

  const handleOnChange =(event) =>{
  let value = event.target.value;
  setText(value);
 setWordCount(text.split(" ").length);
 setCharCount(text.length);
  }
  return (
    <div id="main">
      <h2>Font size picker</h2>
      <input type="range" id='fontSize-input' min="16" max="32" onChange={setChange}/>
      <h3>word Limit input</h3>
      <input type="number" id='char-limit-input' max={charLimit} onChange={setCharacterLimit}/><br/>
      <textarea rows="4" cols="40" onChange={handleOnChange} style={{fontSize:`${increase}px`}} maxLength={charLimit}/>
      <div id='word-counter'>Total number of words written: {wordCount} </div>
      <div id='char-counter'>Total number of characters used: {charCount}</div>
    </div>
  )
}


export default App;
