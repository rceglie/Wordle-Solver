import './App.css';
import React from 'react'
import {Calculate} from './Calculate.mjs'
//import LetterRow from './components/Letters'

function App() {

  const rows = [0,1,2,3,4,5]
  var guess = ['','','','','']
  var guessdata = ["x","x","x","x","x"]
  var guessnum = 0
  var letternum = 0
  var guesses = []

  const freezeRow = (r) => {
    for (var i = 0; i < 5; i++){
      var btn = document.getElementsByClassName(`row-${r} letter-${i}`).item(0)
      btn.setAttribute("data-active", "false")
    }
  }

  const updateData = () => {
    for (var i = 0; i < 5; i++){
      var btn = document.getElementsByClassName(`row-${guessnum} letter-${i}`).item(0)
      guess[i] = btn.textContent
      console.log(btn.style.backgroundColor)
      if (btn.style.backgroundColor == "rgb(58, 58, 60)"){
        guessdata[i] = "gray"
      } else if (btn.style.backgroundColor == "rgb(181, 159, 59)"){
        guessdata[i] = "yellow"
      } else if (btn.style.backgroundColor == "rgb(83, 141, 78)"){
        guessdata[i] = "green"
      }
      
    }
  }

  function findWords () {
    updateData()
    if (!guessdata.includes("x")){
      freezeRow(guessnum)
      guesses[guessnum] = Calculate((guessnum == 0 ? 1 : guesses[guessnum-1]), guess, guessdata, 0)
      document.getElementsByClassName("guesses").item(0).textContent = ""
      for (var i = 0; i < guesses[guessnum].length; i++){
        document.getElementsByClassName("guesses").item(0).textContent = 
          document.getElementsByClassName("guesses").item(0).textContent + guesses[guessnum][i] +
          " "
      }
      document.getElementsByClassName("guess-count").item(0).textContent = "Possible words: " + guesses[guessnum].length
      guessnum++
      letternum=0
      guessdata = ["x","x","x","x","x"]
    } else{
      document.getElementsByClassName("guesses").item(0).textContent = "Make sure all letters are filled in before pressing \"Find Words\""
    }
  }

  function reset () {
    guess = ['','','','','']
    guessdata = ["x","x","x","x","x"]
    guessnum = 0
    letternum = 0
    guesses = []
    for (var i = 0; i < 5; i++){
      for (var j = 0; j < 5; j++){
        var btn = document.getElementsByClassName(`row-${i} letter-${j}`).item(0)
        btn.style.backgroundColor="rgb(58, 58, 60)"
        btn.textContent=""
        if (i != 0){
          btn.setAttribute("data-active", "false")
        }
      }
    }

  }


  document.addEventListener('keydown', function(event) {
    if (/^[A-Za-z]$/.test(event.key) && letternum < 5){
      var btn = document.getElementsByClassName(`row-${guessnum} letter-${letternum}`).item(0)
      btn.textContent = event.key
      btn.style.backgroundColor = "rgb(58, 58, 60)"
      btn.setAttribute("data-active", "true")
      letternum++
    }
    if (letternum > 0 && event.key == "Backspace"){
      var btn = document.getElementsByClassName(`row-${guessnum} letter-${letternum-1}`).item(0)
      btn.textContent = ""
      btn.style.backgroundColor = "rgb(58, 58, 60)"
      btn.setAttribute("data-active", "false")
      letternum--
    }
    if (letternum == 5 && event.key == "Enter"){
      findWords()
    }
  })

  const LetterRow  = (row)  => {

    function letterClick (r, letter) {
      var btn = document.getElementsByClassName(`row-${r} letter-${letter}`).item(0)

      if (btn.getAttribute("data-active") == "false"){
        return
      }

      btn.style.color = "white"
      console.log(btn.style.backgroundColor)
      if (btn.style.backgroundColor == "rgb(58, 58, 60)"){ // Is gray
        btn.style.backgroundColor = "rgb(181, 159, 59)" // Make yellow
      } else if (btn.style.backgroundColor == "rgb(181, 159, 59)"){ // Is yellow
        btn.style.backgroundColor = "rgb(83,141,78)" // Make green
      } else {
        btn.style.backgroundColor = "rgb(58, 58, 60)" // Make gray
      }
    }

    return(
      <div className="letter-row">
        <button className={`letter row-${row} letter-0`} onClick={()=>{letterClick(row,0)}} data-active="false"></button>
        <button className={`letter row-${row} letter-1`} onClick={()=>{letterClick(row,1)}} data-active="false"></button>
        <button className={`letter row-${row} letter-2`} onClick={()=>{letterClick(row,2)}} data-active="false"></button>
        <button className={`letter row-${row} letter-3`} onClick={()=>{letterClick(row,3)}} data-active="false"></button>
        <button className={`letter row-${row} letter-4`} onClick={()=>{letterClick(row,4)}} data-active="false"></button>
      </div>
    )
  }

  return (
    <div className="App">
      <div className="letter-area">
        {rows.map((row) => LetterRow(row))}
        <div className="btn-area">
          <button className="guess-btn" onClick={findWords}>Find Words</button>
          <button className="reset-btn" onClick={reset}>Reset</button>
        </div>
      </div>
      <div className="results-area">
        <h2>Guesses</h2>
        <h2 className="guess-count"></h2>
        <p className="guesses">
          Welcome to the Wordle Solver!<br />
          To start, type in your guess.<br />
          Click on each letter to change its color based on the result<br />
          When all letters have been assigned colors, click "Find Words"<br />
          The words which fit your guesses will show up here!
        </p>
      </div>
    </div>
  );
}

export default App;