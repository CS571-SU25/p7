import React from 'react'
import './App.css'
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
  const { currentPage } = useApp()

  const handleGetStarted = () => {
    // This will be handled by the AppContext
  }

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'landing':
        return <LandingPage onGetStarted={handleGetStarted} />
      case 'map':
        return (
          <div className="map-page">
            <div className="map-container">
              <Map />
            </div>
            <div className="sidebar">
              <FilterControls />
              <InformationCard />
            </div>
          </div>
        )
      case 'about':
        return <AboutPage />
      default:
        return <LandingPage onGetStarted={handleGetStarted} />
    }
  }

  return (
    <Layout>
      {renderCurrentPage()}
    </Layout>
  )
}

export default App
