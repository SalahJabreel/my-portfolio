import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Languages from './components/Languages';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Certifications />
        <Languages />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;