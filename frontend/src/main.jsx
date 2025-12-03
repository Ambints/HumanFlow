import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Accueil from './components/accueil.jsx'
import Login from './components/login.jsx'
import CreateAccount from './components/createaccount.jsx'

const RouterApp = () => {
  const getRoute = () => {
    const hash = (window.location.hash || '').replace('#', '');
    return hash;
  };

  const [route, setRoute] = useState(getRoute());

  useEffect(() => {
    const handler = () => setRoute(getRoute());
    window.addEventListener('hashchange', handler);
    return () => window.removeEventListener('hashchange', handler);
  }, []);

  if (route === 'login') return <Login />;
  if (route === 'create-account') return <CreateAccount />;
  return <Accueil />;
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterApp />
  </StrictMode>,
)
