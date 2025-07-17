import React from 'react';
import { useNavigate } from 'react-router';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/map');
  };

  return (
    <div className="landing-page">
      <div className="hero-section">
        <h1>Singing Through the City</h1>
        <p className="subtitle">
          Explore Hong Kong's cultural geography through Cantonese pop music
        </p>

        <div className="hero-description">
          <p>
            Discover how Canto-pop songs reference specific neighborhoods, landmarks,
            and streets across Hong Kong. Each pin on the map represents a lyrical
            reference, creating a dynamic storytelling experience of the city's
            musical landscape.
          </p>
        </div>

        <button
          className="cta-button"
          onClick={handleGetStarted}
        >
          Start Exploring
        </button>
      </div>

      <div className="features-preview">
        <h2>What You'll Discover</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>🎵 Song Stories</h3>
            <p>Lyrics in Chinese and English with song details</p>
          </div>
          <div className="feature-card">
            <h3>🗺️ Interactive Map</h3>
            <p>Click pins to explore Hong Kong's musical geography</p>
          </div>

          <div className="feature-card">
            <h3>📖 Cultural Context</h3>
            <p>Historical notes about each location's significance</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;