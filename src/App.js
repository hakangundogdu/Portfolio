//import React from "react";
import './App.css';
import { Header } from './Components';
import Nav from './Components/Nav';
import About from './Components/About';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Header title="Hakan Gundogdu" />
      <About />
      <Footer />
    </div>
  );
};

export default App;
