import Box from './components/Box';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <div className="container">
        <Box 
        text="im box 1"
        background="red"
        color="black"
        />
        
        <Box 
        text="im box 2"
        background="blue"
        color="orange"
        />

        <Box 
        text="im box 3"
        background="green"
        color="margenta"
        />
       </div> 
      </header>
    </div>
  );
}

export default App;
