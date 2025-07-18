import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppProvider, MapProvider, AudioProvider } from './contexts';
import SingingApp from './components/structural/SingingApp.jsx';

import './index.css';

console.log('Starting React app...');

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log('Root element:', document.getElementById('root'));

root.render(
  <AppProvider>
    <MapProvider>
      <AudioProvider>
        <SingingApp />
      </AudioProvider>
    </MapProvider>
  </AppProvider>
);

console.log('React app rendered');
