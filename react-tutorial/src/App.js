import React from 'react';
//import logo from './logo.svg';
import './App.css';
import HelloWorld from "./Components/HelloWorld"
import Header from './Components/Header'

function App() {
  return (
    <div>
      <Header />

      <HelloWorld name="Jacob"/>
    </div>
  );
}

export default App;
