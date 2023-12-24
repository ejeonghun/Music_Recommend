import React from 'react';

const SelectedSongSection = ({ selectedSong, handleGetRecommendations }) => (
  <div className="selected-container">
    <div className="selected-card">
      <img src={selectedSong.album.images[0].url} alt="Album Art" />
      <div className="song-info">
        <p>{selectedSong.name}</p>
        <p className="artist-name">{selectedSong.artists[0].name}</p>
        <button className="get-recommendations-button" onClick={handleGetRecommendations}>
          Get Recommendations
        </button>
      </div>
    </div>
  </div>
);

export default SelectedSongSection;