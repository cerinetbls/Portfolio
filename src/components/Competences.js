import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faReact } from '@fortawesome/free-brands-svg-icons'; 
import { faDatabase, faWrench } from '@fortawesome/free-solid-svg-icons'; 

const Competences = () => {
  return (
    <section id="competences">
      <h2>Mes Compétences</h2>
      <div className="competences"> 
        <div className="competence">
          {/* Couleur douce rouge pour HTML */}
          <FontAwesomeIcon icon={faHtml5} style={{ color: '#E57373' }} className='icon' /> 
          <h3>Front-end</h3>
          <p><strong>Langages :</strong> HTML, CSS, JavaScript</p>
          <p><strong>Frameworks :</strong> React</p>
          <p><strong>Création d'interfaces :</strong> Responsive, structuration avec balises HTML sémantiques</p>
          <p><strong>Routing :</strong> React Router</p>
        </div>

        <div className="competence">
          {/* Couleur douce bleue pour bases de données */}
          <FontAwesomeIcon icon={faDatabase} style={{ color: '#B7B7B7' }} className='icon' /> 
          <h3>Back-end</h3>
          <p><strong>Langages :</strong> Node.js</p>
          <p><strong>Bases de données :</strong> MongoDB</p>
          <p><strong>Opérations CRUD :</strong> Mise en œuvre sécurisée</p>
          <p><strong>Frameworks :</strong> Express.js</p>
          <p><strong>Sécurité :</strong> Stockage des données sécurisé</p>
        </div>

        <div className="competence">
          {/* Couleur douce jaune pour les outils */}
          <FontAwesomeIcon icon={faWrench} style={{ color: '#FADFA1' }} className='icon' /> 
          <h3>Outils</h3>
          <p><strong>Gestion de projet :</strong> Suivi avec Git, GitHub</p>
          <p><strong>Environnements de Développement :</strong> VSCode</p>
          <p><strong>Débogage :</strong> Chrome DevTools</p>
          <p><strong>Versioning :</strong> Git et GitHub</p>
        </div>
      </div>
      <div className="formation">
          <p><strong>Formation suivie :</strong> Formation en développement web chez 
            <a href="https://openclassrooms.com/fr/" target="_blank" rel="noopener noreferrer"> OpenClassrooms</a>.
          </p>
        </div>
    </section>
  );
}

export default Competences;





