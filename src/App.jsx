import React, { useState,useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skill/Skill';

import './App.css';
import Contact from './components/Contact/Contact';
import Connect from './components/Connect/Connect';


const App = () => {
   const [darkMode, setDarkMode] = useState(false);
    useEffect(() => {
    // Apply theme class to the body element
    document.body.className = darkMode ? 'dark' : 'light';
  }, [darkMode]);
  return (
    <>
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skill">
        <Skills />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Connect></Connect>
    
    </>
  );
}

export default App;