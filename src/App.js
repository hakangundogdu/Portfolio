//import React from "react";
import './App.css';
import { Header } from './components';
import { Nav } from './components/navigation';
import About from './components/About';
import Work from './components/Work';
import Skills from './components/Skills';
import Testimonials2 from './components/Testimonials2';
import Footer from './components/Footer';
import './style/normalize.css';

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Header title="Hakan Gundogdu" />
      <About />
      <Work />
      <Skills />
      <Testimonials2 />
      <Footer />
    </div>
  );
};

export default App;
