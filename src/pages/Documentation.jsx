import React, { useEffect, useState } from 'react';
import { marked } from 'marked';

export default function Documentation() {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('/docs/docs.md')
      .then(res => res.text())
      .then(text => setContent(marked.parse(text)))
      .catch(() => setContent("Erreur de chargement de la documentation."));
  }, []);

  return (
    <div>
      <h2>Documentation</h2>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
