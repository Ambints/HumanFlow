import React from 'react';
import '../assets/css/accueil.css';


export default function HumanFlow() {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container">
          <nav className="navbar">
            <div className="logo">
              <h1>Human<span>Flow</span></h1>
            </div>
            <ul className="nav-links">
              {['Accueil', 'Fonctionnalités', 'Tarifs', 'À propos', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h2>Simplifiez votre gestion RH avec HumanFlow</h2>
              <p>
                Une plateforme tout-en-un pour gérer vos employés, les congés, les paies et bien plus encore. 
                Optimisez vos processus RH et concentrez-vous sur ce qui compte vraiment.
              </p>
              <div className="hero-buttons">
                <a href="#" className="primary-btn">Commencer maintenant</a>
              </div>
            </div>
            <div className="hero-image">
              <div className="image-placeholder">Interface HumanFlow</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="section-title">
            <h2>Fonctionnalités principales</h2>
            <p>Découvrez comment HumanFlow peut transformer votre gestion des ressources humaines</p>
          </div>
          <div className="features-grid">
            {[
              { icon: '👥', title: 'Gestion des employés', desc: 'Centralisez toutes les informations de vos collaborateurs dans une base de données sécurisée et accessible.' },
              { icon: '📅', title: 'Gestion des congés', desc: 'Simplifiez la gestion des absences avec un système de demande et d\'approbation entièrement digitalisé.' },
              { icon: '💰', title: 'Paie automatisée', desc: 'Générez les bulletins de paie en quelques clics et respectez toutes les obligations légales.' },
              { icon: '📊', title: 'Tableaux de bord', desc: 'Visualisez vos indicateurs RH clés et prenez des décisions éclairées grâce à nos rapports détaillés.' },
              { icon: '✅', title: 'Recrutement', desc: 'Optimisez votre processus de recrutement du dépôt de l\'offre à l\'intégration du nouvel employé.' },
              { icon: '🔒', title: 'Sécurité des données', desc: 'Vos données sont protégées avec les normes de sécurité les plus strictes et hébergées en France.' }
            ].map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits">
        <div className="container">
          <div className="benefits-content">
            <div className="benefits-text">
              <h2>Pourquoi choisir HumanFlow ?</h2>
              <p>
                Notre solution a été conçue pour répondre aux besoins spécifiques des professionnels RH, 
                quelle que soit la taille de votre entreprise.
              </p>
              <ul className="benefits-list">
                {[
                  { title: 'Gain de temps significatif', desc: 'Automatisez vos tâches répétitives et gagnez jusqu\'à 8 heures par semaine.' },
                  { title: 'Conforme à la législation', desc: 'Mises à jour automatiques pour rester conforme aux dernières réglementations.' },
                  { title: 'Interface intuitive', desc: 'Une prise en main immédiate, même pour les moins technophiles.' },
                  { title: 'Support réactif', desc: 'Notre équipe d\'experts vous accompagne dans votre transition digitale.' }
                ].map((benefit, index) => (
                  <li key={index}>
                    <span className="check-icon">✓</span>
                    <div>
                      <h4>{benefit.title}</h4>
                      <p>{benefit.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="benefits-image">
              <div className="image-placeholder benefits-placeholder">Interface avantages</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Prêt à transformer votre gestion RH ?</h2>
          <p>
            Rejoignez les centaines d'entreprises qui font confiance à HumanFlow pour simplifier leurs processus RH.
          </p>
          <a href="#" className="primary-btn">Inscrivez-vous dès maintenant</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-column">
              <h3>HumanFlow</h3>
              <p>La solution de gestion RH moderne et intuitive pour les entreprises de toutes tailles.</p>
            </div>
            {[
              { title: 'Produit', links: ['Fonctionnalités', 'Tarifs', 'Cas clients', 'Nouveautés'] },
              { title: 'Ressources', links: ['Blog', 'Centre d\'aide', 'Webinaires', 'Documentation'] },
              { title: 'Entreprise', links: ['À propos', 'Carrières', 'Contact', 'Presse'] },
              { title: 'Légal', links: ['Mentions légales', 'Confidentialité', 'CGU', 'Cookies'] }
            ].map((column, index) => (
              <div key={index} className="footer-column">
                <h3>{column.title}</h3>
                <ul>
                  {column.links.map((link, i) => (
                    <li key={i}>
                      <a href="#">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="copyright">
            <p>&copy; 2025 HumanFlow. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}