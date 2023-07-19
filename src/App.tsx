// Compontents
import OverlayLeft from './components/OverlayLeft';
import OverlayRight from './components/OverlayRight'
import Nav from './components/Nav'
import Header from './components/Header';
import Code from './components/Code';
import Projects from './components/Projects';
import Footer from './components/Footer';
//
import React from 'react';
import './stylesheets/App.scss';
import './stylesheets/typography.scss';


function App() {
  return (
    <div className="App">
      <div className='wrapper'>
        <OverlayLeft/>
        <main>
          <Nav />
          <Header />
          <Code />
          <Projects/>
        </main>
        <OverlayRight/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
