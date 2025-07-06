import React from 'react';

export default function UtilityGuide() {
  return (
    <div style={{ maxWidth: 500, margin: '0 auto', padding: 24 }}>
      <h2>Tailwind Utility Reference</h2>
      <ul>
        <li><b>bg-blue-500</b>: background-color: #3b82f6;</li>
        <li><b>text-white</b>: color: #fff;</li>
        <li><b>p-4</b>: padding: 1rem;</li>
        {/* Add more utilities */}
      </ul>
    </div>
  );
}
