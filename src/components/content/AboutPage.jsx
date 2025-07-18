import React from 'react';

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-content">
        <h1>About Singing Through the City</h1>

        <section className="project-overview">
          <h2>Project Overview</h2>
          <p>
            This interactive web map explores the cultural geography of Hong Kong
            through the lens of Cantonese pop music. Many Canto-pop songs reference
            specific neighborhoods, landmarks, and streets—this project visualizes
            those lyrical references as a dynamic, map-based storytelling experience.
          </p>
        </section>

        <section className="cultural-significance">
          <h2>Cultural Significance</h2>
          <p>
            Cantonese pop music has long been a reflection of Hong Kong's urban
            identity and social changes. Songs often reference specific locations
            that hold cultural, historical, or personal significance to both
            artists and listeners.
          </p>
        </section>

        <section className="technical-details">
          <h2>Technical Details</h2>
          <ul>
            <li><strong>Frontend:</strong> React with modern hooks and context</li>
            <li><strong>Mapping:</strong> Mapbox GL JS for interactive maps</li>
            <li><strong>Styling:</strong> Bootstrap 5 for responsive design</li>
            <li><strong>Data:</strong> Curated database of 20+ songs (scalable)</li>
          </ul>
        </section>

        <section className="data-sources">
          <h2>Data Sources</h2>
          <p>
            Song data includes lyrics in both Chinese and English, artist information,
            album covers, YouTube links, and historical context for each referenced
            location. The database is designed to grow over time as more songs
            are discovered and added.
          </p>
        </section>

        <section className="contributing">
          <h2>Contributing</h2>
          <p>
            We welcome contributions and suggestions! If you know of a Canto-pop
            song that references a specific Hong Kong location, or if you'd like
            to help improve the project, please get in touch.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;