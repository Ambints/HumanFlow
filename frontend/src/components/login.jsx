import React from 'react';
import '../assets/css/login.css';

const Login = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    alert('Connexion simulée');

  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Connexion</h2>
        <p className="login-subtitle">Connectez-vous à votre compte HumanFlow</p>
        
        <form onSubmit={onSubmit} className="login-form">
          <div className="input-group">
            <label className="login-label">Email</label>
            <input 
              type="email" 
              required 
              placeholder="votre@entreprise.com"
              className="login-input"
            />
          </div>

          <div className="input-group">
            <label className="login-label">Mot de passe</label>
            <input 
              type="password" 
              required 
              placeholder="••••••••"
              className="login-input"
            />
          </div>

          <button type="submit" className="login-button">
            Se connecter
          </button>
        </form>

        <p className="login-footer">
          Pas encore de compte ? 
          <a href="#create-account" className="login-link">
            Créer un compte
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;