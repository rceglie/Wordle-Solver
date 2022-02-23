import './App.css';
import React from 'react'
import {Calculate} from './Calculate.mjs'
//import LetterRow from './components/Letters'

function App() {

  const rows = [0,1,2,3,4]

  const guess = ['','','','','']
  const guessdata = ["","","","",""]

  var guessnum = 0
  var letternum = 0

  const updateData = () => {
    for (var i = 0; i < 5; i++){
      var btn = document.getElementsByClassName(`row-${guessnum} letter-${i}`).item(0)
      guess[i] = btn.textContent
      if (btn.style.backgroundColor == "rgb(58, 58, 60)"){
        guessdata[i] = "gray"
      } else if (btn.style.backgroundColor == "rgb(181, 159, 59)"){
        guessdata[i] = "yellow"
      } else if (btn.style.backgroundColor == "rgbrgb(83, 141, 78)"){
        guessdata[i] = "green"
      }
      btn.setAttribute("disabled", "")
      
    }
  }

  function findWords () {
    updateData()
    console.log(guess)
    console.log(guessdata)
    console.log(Calculate(1, guess, guessdata, 0))
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
      letternum--
    }
    if (letternum == 5 && event.key == "Enter"){
      findWords()
    }
  })

  const LetterRow  = (row)  => {

    function letterClick (r, letter) {
      
      var btn = document.getElementsByClassName(`row-${r} letter-${letter}`).item(0)
      btn.style.color = "white"
      console.log(btn.style.backgroundColor)
      if (btn.style.backgroundColor == "rgb(58, 58, 60)"){
        btn.style.backgroundColor = "rgb(181, 159, 59)"
        btn.setAttribute("data-color", "yellow")
      } else if (btn.style.backgroundColor == "rgb(181, 159, 59)"){
        btn.style.backgroundColor = "rgb(83,141,78)"
        btn.setAttribute("data-color", "green")
      } else {
        btn.style.backgroundColor = "rgb(58, 58, 60)"
        btn.setAttribute("data-color", "gray")
      }
    }

    return(
      <div className="letter-row">
        <button className={`letter row-${row} letter-0`} data-color="grey" onClick={()=>{letterClick(row,0)}}></button>
        <button className={`letter row-${row} letter-1`} data-color="grey" onClick={()=>{letterClick(row,1)}}></button>
        <button className={`letter row-${row} letter-2`} data-color="grey" onClick={()=>{letterClick(row,2)}}></button>
        <button className={`letter row-${row} letter-3`} data-color="grey" onClick={()=>{letterClick(row,3)}}></button>
        <button className={`letter row-${row} letter-4`} data-color="grey" onClick={()=>{letterClick(row,4)}}></button>
      </div>
    )
  }

  return (
    <div className="App">
      <div className="letter-area">
        {rows.map((row) => LetterRow(row))}
        <div className="guess-area">
          <button className="guess-btn" onClick={findWords}>Find Words</button>
        </div>
      </div>
    </div>
  );
}

export default App;