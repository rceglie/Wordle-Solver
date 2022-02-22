import './App.css';
import Hello from './components/Letters'

function App() {

  var letterIsOpen

  const rows = [0,1,2,3,4]



  return (
    <div className="App">
      <div className="title">
        <h3 className="title">Title</h3>
      </div>
      <div className="letter-area">
        {rows.map(() => <Hello/>)}
      </div>
    </div>
    // Initialize stuff
  );
}

export default App;
