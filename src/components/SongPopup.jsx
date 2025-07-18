import React from 'react';
import { useAudio } from '../contexts';
import AudioPreview from './AudioPreview';

const SongPopup = ({ song, place, onClose }) => {
  const { playPreview, stopAudio } = useAudio();

  const handleAudioPreview = () => {
    if (song?.previewUrl) {
      playPreview({
        url: song.previewUrl,
        title: song.title,
        artist: song.artist
      });
    }
  };

  return (
    <div className="song-popup">
      <div className="popup-header">
        <h4>{song?.title || 'Song Title'}</h4>
        <button onClick={onClose} className="close-btn">×</button>
      </div>
      <div className="popup-content">
        <div className="song-info">
          <p><strong>Lyric:</strong> {song?.lyric || 'Lyric text here'}</p>
          <p><strong>Artist:</strong> {song?.artist || 'Artist name'}</p>
          <p><strong>Location:</strong> {place?.name || 'Location name'}</p>
          <p><strong>Year:</strong> {song?.year || 'Unknown'}</p>
        </div>

        {/* Audio Preview */}
        <AudioPreview
          song={song}
          onPlay={handleAudioPreview}
          onStop={stopAudio}
        />

        {/* YouTube Link */}
        {song?.youtubeUrl && (
          <div className="youtube-link">
            <a
              href={song.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="youtube-btn"
            >
              🎵 Listen on YouTube
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default SongPopup;