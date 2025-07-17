import React from 'react';
import { useAudio } from '../contexts';

const AudioPreview = ({ song, onPlay, onStop }) => {
  const { isPlaying, currentAudio } = useAudio();

  const handleMouseEnter = () => {
    if (song?.previewUrl && onPlay) {
      onPlay();
    }
  };

  const handleMouseLeave = () => {
    if (onStop) {
      onStop();
    }
  };

  const isCurrentSongPlaying = currentAudio?.title === song?.title && isPlaying;

  return (
    <div className="audio-preview">
      <div className="preview-controls">
        <button
          className={`preview-btn ${isCurrentSongPlaying ? 'playing' : ''}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          disabled={!song?.previewUrl}
        >
          {isCurrentSongPlaying ? '🔊 Playing...' : '🔊 Preview'}
        </button>
      </div>
    </div>
  );
};

export default AudioPreview;