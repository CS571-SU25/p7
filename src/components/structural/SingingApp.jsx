import React from 'react';
import { HashRouter, Route, Routes } from 'react-router';

import SingingLayout from './SingingLayout';
import LandingPage from '../content/LandingPage';
import MapPage from '../content/MapPage';
import AboutPage from '../content/AboutPage';

function SingingApp() {
  return (
    <HashRouter basename="">
      <Routes>
        <Route path="/" element={<SingingLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default SingingApp;