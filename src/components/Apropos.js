import React from 'react';
import apropos from '../assets/images/apropos.png';

const Apropos = () => {
  return (
    <section id="apropos">
      <div className="apropos-container">
        <h2>Présentation</h2>
        <div className="apropos-content">
          <img src={apropos} alt="Image Présentation" className="apropos-image" />
          <p>
            Jeune développeuse web débutante et passionnée, je m'intéresse à la création 
            d'applications web simples et efficaces. 
            J'aime explorer et apprendre de nouvelles technologies tout en progressant étape par étape dans ce domaine. 
            Mon objectif est de continuer à développer mes compétences tout en contribuant à des projets qui me 
            permettent de grandir en tant que développeuse.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Apropos;
