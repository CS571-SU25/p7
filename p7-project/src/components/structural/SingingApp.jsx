import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';

import SingingLayout from './SingingLayout';
import LandingPage from '../content/LandingPage';
import MapPage from '../content/MapPage';
import AboutPage from '../content/AboutPage';

function SingingApp() {
  return (
    <BrowserRouter basename="/p7">
      <Routes>
        <Route path="/" element={<SingingLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default SingingApp;