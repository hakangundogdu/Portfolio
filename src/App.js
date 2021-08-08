//import React from "react";
import './App.css';
import { Header } from './components';
import { Nav } from './components/navigation';
import About from './components/About';
import Work from './components/Work';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';

import Footer from './components/Footer';

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
