
import React from 'react';
import { createRoot } from 'react-dom/client';
import AppWrapper from './App.jsx';
import './index.css';

// Mount the app
const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<AppWrapper />);
}


