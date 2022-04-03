import React, { useState } from 'react';
import './index.css'
import About from './components/About'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Contact from './components/Contact'

function App() {

  const [contactSelected, setContactSelected] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  
  return (
    <div>
      <Nav categories={categories}
      setCurrentCategory={setCurrentCategory}
      currentCategory={currentCategory}
      contactSelected={contactSelected}
      setContactSelected={setContactSelected}></Nav>
      <main>
        {!contactSelected ? (
          <>
            <About></About>
          </>
        ) : (
          <Contact></Contact>
        )}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
