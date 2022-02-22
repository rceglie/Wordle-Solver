import './App.css';
import LetterRow from './components/Letters'

function App() {

  var letterIsOpen

  const rows = [0,1,2,3,4]

  var guess = 0
  var letternum = 0

  document.addEventListener('keydown', function(event) {
    if (/^[A-Za-z]$/.test(event.key) && letternum < 5){
      document.getElementsByClassName(`row-${guess} letter-${letternum}`).item(0).textContent = event.key
      letternum++
    }
    if (letternum > 0 && event.key === "Backspace"){
      document.getElementsByClassName(`row-${guess} letter-${letternum-1}`).item(0).textContent = ""
      letternum--
    }
  })

  return (
    <div className="App">
      <div className="title">
        <h3 className="title">Title</h3>
      </div>
      <div className="letter-area">
        {rows.map((row) => <LetterRow row={`${row}`}/>)}
      </div>
    </div>
    // Initialize stuff
  );
}

export default App;
