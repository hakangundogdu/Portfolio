//import React from "react";
import './App.css';
import { Header } from './Components';
import Nav from './Components/Nav';
import About from './Components/About';
import Work from './Components/Work';
import Skills from './Components/Skills';
import Testimonials from './Components/Testimonials';

import Footer from './Components/Footer';

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Header title="Hakan Gundogdu" />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
