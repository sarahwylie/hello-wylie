import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css'
import FadeIn from 'react-fade-in';
import About from './components/About'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'

function App() {

  const [bio, setBio] = useState("")

  useEffect(() => {
      const url = "https://api.github.com/users/sarahwylie";

      const fetchData = async () => {
          try {
              const response = await fetch(url);
              const json = await response.json();
              setBio(json.bio);
          } catch (error) {
              console.log("error", error);
          }
      };

      fetchData();
  }, []);

  return (
    <FadeIn>
      <div>
        <h1 id="about">Sarah Wylie</h1>
        <h2 className='bio'>{bio}</h2>
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
    </FadeIn>
  );
}

export default App;
