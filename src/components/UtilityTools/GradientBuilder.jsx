import React, { useState } from 'react';

export default function GradientBuilder() {
  const [from, setFrom] = useState('#ff7e5f');
  const [to, setTo] = useState('#feb47b');
  return (
    <div style={{ maxWidth: 400, margin: '0 auto', padding: 24 }}>
      <h2>Gradient Builder</h2>
      <input type="color" value={from} onChange={e => setFrom(e.target.value)} />
      <input type="color" value={to} onChange={e => setTo(e.target.value)} style={{ marginLeft: 8 }} />
      <div style={{ marginTop: 16, height: 60, borderRadius: 8, background: `linear-gradient(90deg, ${from}, ${to})` }} />
      <pre style={{ marginTop: 8 }}>{`background: linear-gradient(90deg, ${from}, ${to});`}</pre>
    </div>
  );
}
