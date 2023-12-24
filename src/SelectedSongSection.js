import React, { useRef } from 'react';

const SelectedSongSection = ({ selectedSong, handleGetRecommendations }) => {
  const songListRef = useRef(null);

  const scrollToSongList = () => { // 추천 버튼 클릭 시 추천 곡 리스트 쪽으로 자동 스크롤
    if (songListRef.current) {
      songListRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="selected-container">
      <div className="selected-card">
        <img src={selectedSong.album.images[0].url} alt="Album Art" />
        <div className="song-info">
          <p>{selectedSong.name}</p>
          <p className="artist-name">{selectedSong.artists[0].name}</p>
          <button
            className="get-recommendations-button"
            onClick={() => {
              handleGetRecommendations();
              scrollToSongList();
            }}
          >
            추천 받기
          </button>
        </div>
      </div>
      <div ref={songListRef}></div>
    </div>
  );
};

export default SelectedSongSection;