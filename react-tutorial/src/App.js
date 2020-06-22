import React from 'react';
import Navbar from './Navbar';
import Greeter from './Greeter';
import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Greeter name="Jacob" age="21"/>
    </div>
  );
}

export default App;
