import React, { useRef } from 'react';

const RecommendationsSection = ({ recommendations }) => {
  const audioRef = useRef();

  const handlePreview = (previewUrl) => {
    // Stop the currently playing audio
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    // Play the selected preview
    const audio = new Audio(previewUrl);
    audioRef.current = audio;
    audio.play();
  };

  return (
    <div className="recommendations-container">
      <h3>Recommendations</h3>
      <ul className="song-list">
        {recommendations.map((track) => (
          <li key={track.id}>
            <div className="song-card">
              <img src={track.album.images[0].url} alt="Album Art" />
              <div className="song-info">
                <p>{track.name}</p>
                <p className="artist-name">{track.artists[0].name}</p>
              </div>
              <button>
                <a href={track.album.external_urls.spotify} style={{ textDecoration: 'none', color: 'black' }}>
                  바로가기
                </a>
              </button>
              {track.preview_url && <button onClick={() => handlePreview(track.preview_url)}>재생</button>
              }
              
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecommendationsSection;
