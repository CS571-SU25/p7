import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppProvider, MapProvider, AudioProvider } from './contexts';
import SingingApp from './components/structural/SingingApp.jsx';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

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
