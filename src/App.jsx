import React from 'react'
import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { useApp } from './contexts'
import {
  Layout,
  LandingPage,
  Map,
  AboutPage,
  SongPopup,
  FilterControls,
  InformationCard
} from './components'

function App() {
  const { setCurrentPage } = useApp()

  const handleGetStarted = () => {
    setCurrentPage('map')
  }

  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage onGetStarted={handleGetStarted} />} />
          <Route path="/map" element={
            <div className="map-page">
              <div className="map-container">
                <Map />
              </div>
              <div className="sidebar">
                <FilterControls />
                <InformationCard />
              </div>
            </div>
          } />
          <Route path="/about-us" element={<AboutPage />} />
        </Routes>
      </Layout>
    </HashRouter>
  )
}

export default App
