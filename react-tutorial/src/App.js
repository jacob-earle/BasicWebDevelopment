import React from 'react';
//import logo from './logo.svg';
import HelloWorld from "./Components/HelloWorld"
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {
  return (
    <div>
      <Header />

      <HelloWorld name="Jacob"/>

      <Footer />
    </div>
  );
}

export default App;
