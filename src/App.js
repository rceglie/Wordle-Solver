import './App.css';
import React from 'react'
//import LetterRow from './components/Letters'

function App() {

  var letterIsOpen

  const rows = [0,1,2,3,4]

  var guessnum = 0
  var letternum = 0

  const updateColors = () => {
    for (var i = 0; i < 5; i++){
      var btn = document.getElementsByClassName(`row-${guessnum} letter-${i}`).item(0)
      btn.style.backgroundColor = btn.getAttribute("data-color");
      btn.style.color = "white"
      btn.disabled=false
    }
  }

  function guess () {
    updateColors()
  }

  function letterPressed () {
    console.log("button pressed")
  }

  document.addEventListener('keydown', function(event) {
    if (/^[A-Za-z]$/.test(event.key) && letternum < 5){
      document.getElementsByClassName(`row-${guessnum} letter-${letternum}`).item(0).textContent = event.key
      letternum++
    }
    if (letternum > 0 && event.key === "Backspace"){
      document.getElementsByClassName(`row-${guessnum} letter-${letternum-1}`).item(0).textContent = ""
      letternum--
    }
  })

  return (
    <div className="App">
      <div className="letter-area">
        {rows.map((row) => LetterRow(row))}
        <div className="guess-area">
          <button className="guess-btn" onClick={guess}>Guess</button>
        </div>
      </div>
    </div>
    // Initialize stuff
  );
}


function LetterRow (row) {

  const letters = [0,1,2,3,4]

  return(
      <div className="letter-row">
          {letters.map((letter) => <button 
              className={`letter row-${row} letter-${letter}`}
              data-color="grey"
              disabled
              ></button>)}
      </div>
  )
}

export default App;
