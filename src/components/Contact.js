import React from 'react';

const Contact = () => {
  return (
    <footer id="contact">
      <h2>Contact</h2>
      <p>N'hésitez pas à me contacter pour toute question ou opportunité !</p>
      
      {/* Informations contact */}
      <ul>
        <li>Email : <a href="mailto:cerine.tbls@gmail.com">cerine.tbls@gmail.com</a></li>
        <li>GitHub : <a href="https://github.com/cerinetbls" target="_blank" rel="noopener noreferrer">Mon GitHub</a></li>
      </ul>

      {/* Formulaire de contact */}
      <form action="https://formsubmit.co/cerine.tbls@gmail.com" method="POST">
        <label htmlFor="name">Nom</label>
        <input type="text" id="name" name="name" required />
        
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
        
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="4" required></textarea>
        
        <button type="submit">Envoyer</button>
      </form>

      {/* Avis de copyright */}
      <div className="copyright">
        &copy; 2024 Trabelsi Cérine. Tous droits réservés.
      </div>
    </footer>
  );
}

export default Contact;

