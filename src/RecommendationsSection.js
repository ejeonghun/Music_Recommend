import React, { useRef } from 'react';

const RecommendationsSection = ({ recommendations, selectedSong }) => {
  const audioRef = useRef();

  const handlePreview = (previewUrl) => {
    if (audioRef.current) { // 만약 재싱 중인 곡이 있으면 정지
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    // Play the selected preview
    const audio = new Audio(previewUrl);
    audioRef.current = audio;
    audio.volume = 0.5;  // 음량을 50%로 설정
    audio.play();
  };

  return (
    <div className="recommendations-container">
      <h3>'{selectedSong.name}' 와 비슷한 노래</h3>
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
