import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Schedule from './pages/Schedule';
import Documentation from './pages/Documentation';
import Header from './components/Header';
import Footer from './components/Footer';
import './style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/documentation" element={<Documentation />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  </React.StrictMode>
);
