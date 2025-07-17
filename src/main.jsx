import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppProvider, MapProvider, AudioProvider } from './contexts';
import SingingApp from './components/structural/SingingApp.jsx';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppProvider>
    <MapProvider>
      <AudioProvider>
        <SingingApp />
      </AudioProvider>
    </MapProvider>
  </AppProvider>
);
