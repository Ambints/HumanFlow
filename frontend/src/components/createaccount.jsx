import React from 'react';
import '../assets/css/createaccount.css';

const CreateAccount = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    alert('Compte créé avec succès');
    window.location.hash = '';
  };

  return (
    <div className="create-account-container">
      <div className="create-account-card">
        <h2 className="create-account-title">Créer un compte</h2>
        <p className="create-account-subtitle">
          Inscrivez votre entreprise et commencez votre essai gratuit
        </p>
        
        <form onSubmit={onSubmit} className="create-account-form">
          <div className="input-group">
            <label className="create-account-label">Nom de l'entreprise</label>
            <input 
              type="text" 
              required 
              placeholder="Nom de votre entreprise"
              className="create-account-input"
            />
          </div>

          <div className="input-group">
            <label className="create-account-label">Adresse e-mail</label>
            <input 
              type="email" 
              required 
              placeholder="contact@entreprise.com"
              className="create-account-input"
            />
          </div>

          <div className="input-group">
            <label className="create-account-label">Mot de passe</label>
            <input 
              type="password" 
              required 
              placeholder="••••••••"
              className="create-account-input"
              minLength="8"
            />
          </div>

          <button type="submit" className="create-account-button">
            Créer un compte gratuit
          </button>
        </form>

        <p className="create-account-footer">
          Vous avez déjà un compte ? 
          <a href="#login" className="create-account-link">
            Se connecter
          </a>
        </p>
      </div>
    </div>
  );
};

export default CreateAccount;