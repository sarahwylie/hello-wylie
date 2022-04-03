import React from 'react';
import  { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
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
      <Router>
      <Nav></Nav>
      <div className="content">
                <Routes>
                    <Route path="/" component={About}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/portfolio" component={Portfolio}/>
                    <Route path="/resume" component={Resume}/>
                </Routes>
            </div>
        </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
