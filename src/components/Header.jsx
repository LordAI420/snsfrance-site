import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <div>
        <img src="/SNSFrance_Logo.png" alt="SNSFrance Logo" className="logo" />
      </div>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/schedule">Planning</Link>
        <Link to="/documentation">Documentation</Link>
      </nav>
    </header>
  );
}
