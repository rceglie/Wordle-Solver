import './App.css';
import Hello from './components/Letters'

function App() {

  var letterIsOpen

  fun (() => {
    letterIsOpen = false
  })



  return (
    <div className="App">
      <h3>Hi</h3>
      <Hello
        isOpen={letterIsOpen}
        />
    </div>
    // Initialize stuff
  );
}

export default App;
