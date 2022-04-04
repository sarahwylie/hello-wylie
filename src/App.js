import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css'
import About from './components/About'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'

function App() {

  return (
    <div>
      <h1 id="about">Sarah Wylie</h1>
      <Router>
        <Nav />
        <div>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>
      </Router>
      {/* <ImageEffect url={backgroundImage}
        effect="airbrush"
        className='my-5'
        style={{ width: '100%' }}
        alt='background' /> */}
        <Footer></Footer>
    </div>
  );
}

export default App;
