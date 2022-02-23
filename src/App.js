import './App.css';
import React from 'react'
//import LetterRow from './components/Letters'

function App() {

  const rows = [0,1,2,3,4]

  var guessnum = 0
  var letternum = 0

  const updateColors = () => {
    for (var i = 0; i < 5; i++){
      var btn = document.getElementsByClassName(`row-${guessnum} letter-${i}`).item(0)
      btn.style.backgroundColor = btn.getAttribute("data-color");
      btn.style.color = "white"
    }
  }

  function guess () {
    updateColors()
  }

  function letterClick (row, letter) {
    console.log(row, letter)
    /*btn = ""
    if (btn.style.color = "grey"){
      btn.style.color = "yellow"
    } else if (btn.style.color = "yellow"){
      btn.style.color = "green"
    } else {
      btn.style.backgroundColor = "grey"
    }*/
  }

  document.addEventListener('keydown', function(event) {
    if (/^[A-Za-z]$/.test(event.key) && letternum < 5){
      var btn = document.getElementsByClassName(`row-${guessnum} letter-${letternum}`).item(0)
      btn.textContent = event.key
      btn.removeAttribute("disabled")
      letternum++
    }
    if (letternum > 0 && event.key === "Backspace"){
      var btn = document.getElementsByClassName(`row-${guessnum} letter-${letternum-1}`).item(0)
      btn.textContent = ""
      btn.setAttribute("disabled", "")
      letternum--
    }
  })

  const LetterRow  = (row)  => {

    var letters = [0,1,2,3,4]

    return(
      <div className="letter-row">
        {letters.map((letter) => <button 
          className={`letter row-${row} letter-${letter}`}
          data-color="grey"
          onClick={()=>letterClick.call(row, letter)}
        ></button>)}
      </div>
    )
  }

  return (
    <div className="App">
      <div className="letter-area">
        {rows.map((row) => LetterRow(row))}
        <div className="guess-area">
          <button className="guess-btn" onClick={guess}>Find Words</button>
        </div>
      </div>
    </div>
  );
}

export default App;
