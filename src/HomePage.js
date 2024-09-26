import React from 'react';
import Header from './components/Header';
import Apropos from './components/Apropos';
import Competences from './components/Competences';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';


const HomePage = () => {
  return (
    <>
      <Header />
      <Apropos />
      <Competences />
      <Portfolio />
      <Contact />
    </>
  );
}

export default HomePage;
