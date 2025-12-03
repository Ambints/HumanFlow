import React, { useState } from 'react';
import { Menu, X, Users, Calendar, DollarSign, CheckCircle, ArrowRight } from 'lucide-react';
import '../assets/css/accueil.css';

// Composant Principal
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="app-container">
      {/* Navigation */}
      <header>
        <div className="nav-container flex justify-between items-center">
          <div className="logo">Human<span style={{color: 'var(--c-secondary)'}}>Flow</span></div>
          
          <ul className="nav-links items-center">
            <li><a href="#solution" onClick={(e) => { e.preventDefault(); scrollToSection('solution'); }}>Produit</a></li>
            <li><a href="#">Entreprise</a></li>
            <li><a href="#tarifs" onClick={(e) => { e.preventDefault(); scrollToSection('tarifs'); }}>Tarifs</a></li>
            <li><a className="btn btn-primary" href="#login">Connexion</a></li>
          </ul>

          <button className="mobile-menu-btn" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} color="#052659"/> : <Menu size={24} color="#052659"/>}
          </button>
        </div>
        
        <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
          <a href="#solution" onClick={(e) => { e.preventDefault(); scrollToSection('solution'); }}>Produit</a>
          <a href="#tarifs" onClick={(e) => { e.preventDefault(); scrollToSection('tarifs'); }}>Tarifs</a>
          <a href="#">Entreprise</a>
          <a href="#login" onClick={() => setIsMenuOpen(false)}>Connexion</a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div>
          <h1>L'humain au cœur de votre performance</h1>
          <p>Une suite complète pour gérer vos équipes, du recrutement à la paie, avec une interface conçue pour la clarté et l'efficacité.</p>
        </div>
        
        <div className="hero-img-box">
          {/* Éléments décoratifs simulés */}
          <div style={{position: 'absolute', bottom: 0, left: '10%', width: '80%', height: '80%', background: 'white', borderTopLeftRadius: '20px', borderTopRightRadius: '20px', boxShadow: '0 -10px 40px rgba(0,0,0,0.05)'}}>
             <div style={{padding: '20px', borderBottom: '1px solid #eee', fontWeight: 'bold', color: 'var(--c-primary)'}}>Tableau de bord</div>
             <div style={{padding: '20px'}}>
               <div style={{height: '20px', width: '60%', background: 'var(--c-light)', borderRadius: '4px', marginBottom: '10px'}}></div>
               <div style={{height: '20px', width: '40%', background: '#eee', borderRadius: '4px'}}></div>
               <div style={{marginTop: '30px', display: 'flex', gap: '10px'}}>
                  <div style={{height: '80px', flex: 1, background: '#f4f9ff', borderRadius: '8px'}}></div>
                  <div style={{height: '80px', flex: 1, background: '#f4f9ff', borderRadius: '8px'}}></div>
               </div>
             </div>
          </div>
          
          <div className="card-float" style={{top: '20%', right: '10%'}}>
            <CheckCircle size={20} color="var(--c-secondary)" /> Paie validée
          </div>
          <div className="card-float" style={{top: '50%', left: '5%'}}>
            <Users size={20} color="var(--c-secondary)" /> +12 Recrutements
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="solution">
        <div className="container">
          <div className="section-header">
            <h2>Une solution tout-en-un</h2>
            <p style={{color: 'var(--c-accent)'}}>Oubliez les fichiers Excel. Passez à la vitesse supérieure.</p>
          </div>
          
          <div className="grid-3">
            <FeatureCard 
              icon={<Users />} 
              title="Portail Employé" 
              desc="Donnez de l'autonomie à vos équipes. Accès aux fiches de paie, demandes de congés et annuaire interne."
            />
            <FeatureCard 
              icon={<Calendar />} 
              title="Gestion des Temps" 
              desc="Suivi des heures, plannings dynamiques et validation des absences en quelques clics."
            />
            <FeatureCard 
              icon={<DollarSign />} 
              title="Paie Automatisée" 
              desc="Générez vos variables de paie automatiquement et évitez les erreurs de saisie manuelles."
            />
          </div>
        </div>
      </section>

      {/* Tarifs Section */}
      <section className="pricing" id="tarifs">
        <div className="container">
          <div className="section-header">
            <h2>Tarifs</h2>
            <p style={{color: 'var(--c-accent)'}}>Choisissez le plan adapté à votre structure.</p>
          </div>

          <div className="grid-3">
            <div className="pricing-card">
              <div className="plan-name">Starter</div>
              <div className="price">€29<span>/mois</span></div>
              <div className="price-desc">Pour les petites équipes qui commencent</div>
              <ul className="pricing-features">
                <li>Gestion des employés</li>
                <li>Suivi des temps de base</li>
                <li>Support par e-mail</li>
              </ul>
              <button className="btn btn-primary">Choisir</button>
            </div>

            <div className="pricing-card popular">
              <div className="popular-badge">Populaire</div>
              <div className="plan-name">Business</div>
              <div className="price">€79<span>/mois</span></div>
              <div className="price-desc">Pour les équipes en croissance</div>
              <ul className="pricing-features">
                <li>Tout le Starter</li>
                <li>Paie automatisée</li>
                <li>Intégrations SIRH</li>
              </ul>
              <button className="btn btn-primary">Choisir</button>
            </div>

            <div className="pricing-card">
              <div className="plan-name">Enterprise</div>
              <div className="price">Sur-mesure</div>
              <div className="price-desc">Solutions avancées pour grandes structures</div>
              <ul className="pricing-features">
                <li>Support dédié</li>
                <li>Personnalisation & API</li>
                <li>Formation</li>
              </ul>
              <button className="btn btn-secondary">Contactez-nous</button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2>Prêt à transformer vos RH ?</h2>
          <p style={{marginBottom: '2rem', color: 'var(--c-secondary)'}}>Rejoignez plus de 1000 entreprises innovantes.</p>
          <button className="btn btn-primary" style={{padding: '16px 40px', fontSize: '1.2rem'}}>
            Créer un compte gratuit
          </button>
          <button className="btn btn-tertiary" style={{padding: '16px 40px', fontSize: '1.2rem'}}>
            Se connecter <ArrowRight size={16}/>
          </button>
        </div>
      </section>

      {/* Footer simple */}
      <footer style={{background: 'var(--c-darkest)', color: 'var(--c-accent)', padding: '2rem', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.1)'}}>
        <p>© 2024 HumanFlow. Tous droits réservés.</p>
      </footer>
    </div>
  );
};

// Composant Carte Fonctionnalité
const FeatureCard = ({ icon, title, desc }) => (
  <div className="feature-card">
    <div className="icon-wrapper">
      {icon}
    </div>
    <h3 style={{fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--c-light)'}}>{title}</h3>
    <p style={{color: '#a0bce0', lineHeight: '1.6'}}>{desc}</p>
  </div>
);

export default App;