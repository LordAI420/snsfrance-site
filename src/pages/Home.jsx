import React, { useState } from 'react';

export default function Home() {
  const [input, setInput] = useState('');
  const [status, setStatus] = useState(null);

  const checkAvailability = async () => {
    setStatus(null);
    const name = input.toLowerCase().replace('.sol', '').trim();
    if (!name) return;

    setStatus('checking');

    try {
      const res = await fetch('https://sns-api.bonfida.com/v2/domains/bulk-search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ domains: [name] })
      });

      const data = await res.json();
      if (!Array.isArray(data) || data.length === 0) {
        setStatus('available');
      } else {
        setStatus('taken');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  const mintUrl = `https://www.sns.id/search/single?search=${input.toLowerCase().replace('.sol','')}`;

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Bienvenue sur SNSFrance</h2>
      <p>Recherchez un nom .sol disponible dans l'écosystème SNS</p>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '2rem'
      }}>
        <input
          type="text"
          placeholder="Start .sol searching"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{
            padding: '0.8rem 1rem',
            fontSize: '1rem',
            borderRadius: '8px 0 0 8px',
            border: '1px solid #ccc',
            width: '300px',
            outline: 'none'
          }}
        />
        <button onClick={checkAvailability} style={{
          padding: '0.8rem 1rem',
          backgroundColor: '#3B82F6',
          border: 'none',
          color: 'white',
          fontSize: '1rem',
          borderRadius: '0 8px 8px 0',
          cursor: 'pointer'
        }}>
          🔍
        </button>
      </div>
      <div style={{ marginTop: '1.5rem' }}>
        {status === 'checking' && <p>🔍 Vérification en cours...</p>}
        {status === 'available' && (
          <div>
            <p style={{ color: 'lightgreen' }}>✅ Nom disponible !</p>
            <a href={mintUrl} target="_blank" rel="noopener noreferrer" style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#3B82F6',
              color: 'white',
              borderRadius: '6px',
              textDecoration: 'none',
              display: 'inline-block',
              marginTop: '0.5rem'
            }}>
              Mint sur SNS.id
            </a>
          </div>
        )}
        {status === 'taken' && <p style={{ color: 'orange' }}>❌ Ce nom est déjà pris.</p>}
        {status === 'error' && <p style={{ color: 'red' }}>Erreur de connexion à l'API Bonfida.</p>}
      </div>
    </div>
  );
}