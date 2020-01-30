import React from 'react';
import logo from './logo.svg';
import './App.css';

const collection = [
  { name: 'Bodhi' },
  { name: 'Mary' },
  { name: 'Marie' }
];

function HelloComponent({ name, ...props }) {
  return <h1 {...props}>Hello {name}!</h1>;
}

function App() {
  let [index, setIndex] = React.useState(0);
  let person = collection[index];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button type="button" onClick={() => setIndex(index + 1)}>Next</button>
        {
          person ? (
            <HelloComponent name={person.name} />
          ) : (
            <h1>Nobody</h1>
          )
        }
        
      </header>
    </div>
  );
}

export default App;
