import React from 'react';
import mapboxgl from 'mapbox-gl';

// Global variable to track the currently open popup
let currentPopup = null;

const MusicMarker = ({ data, map }) => {
  return null; // This component doesn't render anything, it's just for organization
};

// Static method to add marker to map
MusicMarker.addToMap = (data, map, parseLocation) => {
  if (!data || !map) return null;

  const coordinates = parseLocation(data.location_x, data.location_y);
  if (!coordinates) {
    console.log(`Skipping marker for ${data.song}: invalid coordinates`);
    return null;
  }

  // Create marker element
  const markerEl = document.createElement('div');
  markerEl.className = 'music-marker';
  markerEl.innerHTML = `
    <div class="marker-icon">🎵</div>
    <div class="marker-pulse"></div>
  `;
  markerEl.style.cursor = 'pointer';

  // Create popup content
  const popupContent = `
    <div class="marker-popup">
      <div class="popup-header">
        <div class="popup-title">
          <h4><a href="#" class="song-link">${data.song || 'Unknown Song'}</a></h4>
          <span class="popup-subtitle"><a href="#" class="artist-link">${data.Singer || 'Unknown Artist'}</a></span>
        </div>
      </div>

      <div class="popup-content">
        <div class="info-row">
          <div class="info-text">
            <span class="info-label">Location</span>
            <span class="info-value">${data.location_name_en || 'Unknown Location'}</span>
          </div>
        </div>

        <div class="info-row">
          <div class="info-text">
            <span class="info-label">Year</span>
            <span class="info-value">${data.year || 'Unknown Year'}</span>
          </div>
        </div>

        ${data.lyrics ? `
        <div class="lyrics-section">
          <div class="lyrics-header">
            <div class="info-icon">💭</div>
            <span class="info-label">Lyrics Preview</span>
          </div>
          <div class="lyrics-text">
            ${data.lyrics.substring(0, 120)}${data.lyrics.length > 120 ? '...' : ''}
          </div>
        </div>
        ` : ''}
      </div>
    </div>
  `;

  // Create popup
  const popup = new mapboxgl.Popup({
    offset: 25,
    closeButton: true,
    closeOnClick: false,
    className: 'music-popup'
  }).setHTML(popupContent);

  // Create Mapbox marker
  const marker = new mapboxgl.Marker(markerEl)
    .setLngLat(coordinates)
    .addTo(map);

  // Add click handler with popup management
  markerEl.addEventListener('click', () => {
    // If this popup is already open, close it
    if (currentPopup === popup && currentPopup.isOpen()) {
      currentPopup.remove();
      currentPopup = null;
      return;
    }

    // Close any existing popup
    if (currentPopup && currentPopup.isOpen()) {
      currentPopup.remove();
    }

    // Open new popup
    popup.setLngLat(coordinates).addTo(map);
    currentPopup = popup;

    // Set up popup close event to clear current popup reference
    popup.on('close', () => {
      if (currentPopup === popup) {
        currentPopup = null;
      }
    });
  });

  // Store cleanup function
  marker.cleanup = () => {
    // Close popup if it's the current one
    if (currentPopup && currentPopup.isOpen()) {
      currentPopup.remove();
      currentPopup = null;
    }

    // Remove the marker from the map
    if (marker && marker.remove) {
      marker.remove();
    }

    // Also remove the marker element from DOM if it still exists
    if (markerEl && markerEl.parentNode) {
      markerEl.parentNode.removeChild(markerEl);
    }
  };

  return marker;
};

export default MusicMarker;