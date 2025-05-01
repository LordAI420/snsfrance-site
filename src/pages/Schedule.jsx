import React, { useEffect, useState } from 'react';

export default function Schedule() {
  const [spaces, setSpaces] = useState([]);

  useEffect(() => {
    fetch('/data/spaces.json')
      .then((res) => res.json())
      .then(setSpaces)
      .catch(() => setSpaces([]));
  }, []);

  return (
    <div>
      <h2>Planning des Spaces</h2>
      {spaces.length === 0 ? <p>Aucun Space prévu.</p> : (
        <ul>
          {spaces.map((space, idx) => (
            <li key={idx} style={{ margin: "1rem 0" }}>
              <a href={space.link} target="_blank" rel="noopener noreferrer" style={{ color: "#61dafb" }}>
                {space.date} – {space.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
