import { useState } from "react"
import './App.css'
import QuoteBox from './components/QuoteBox';
import db from './db/quote.json'

const arrayColors = ["#00c6ab", "#c8ad8d", "#f86f6f", "#6aa3b4", "#15ab92", "#1e91ed", "#525558", "#68da3e", "#416864", "#5c5e36", "#3f8880"];

function App() {
  const getRandom = (arrayElements) => {
      const quantityValues = arrayElements.length
      const randomIndex = Math.floor(Math.random() * quantityValues);
      return arrayElements[randomIndex];

  };

  const [quote, setQuote] = useState(getRandom(db));

  const [color, setColor] = useState(getRandom(arrayColors))

  const newQuote = () => {
    setQuote(getRandom(db))
    setColor(getRandom(arrayColors))
  }
  
  console.log(getRandom(db));
  return (
    <div className="App" style={{backgroundColor: color}}>
      <QuoteBox 
      quote={quote} 
      newQuote={newQuote} 
      color={color}
      />
    </div>
  )
}

export default App
