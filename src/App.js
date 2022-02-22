import './App.css';
import LetterRow from './components/Letters'

function App() {

  var letterIsOpen

  const rows = [0,1,2,3,4]

  var state = 0

  var keydown = false;
  document.addEventListener('keydown', function(event) {
    if (/^[A-Za-z]$/.test(event.key)){
      console.log(event.key)
      console.log(document.getElementsByClassName("row-3 letter-2").textContent)
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
