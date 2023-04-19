import React from 'react';
import './App.css';
import Menu from './components/menu/Menu.js';

function App() {
  return (
    <div className="App">
      <header className="App-header w-full shadow-none">
        <Menu/>
      </header>
    </div>
  );
}

export default App;
