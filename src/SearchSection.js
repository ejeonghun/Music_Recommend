import React, { useState } from 'react';
import icon from './icon.png';

const SearchSection = ({ searchQuery, setSearchQuery, handleSearch, searchResults, handleSelectSong }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    handleSearch();
  };

  return (
    <div>
        <div style={{display:'flex', alignItems:'center'}}>
        <img src={icon} style={{width:'32px',height:'32px'}} alt="mainlogo"/>
        <a href='/'><p style={{margin:'0'}}>음악 추천 봇</p></a>
        </div>
    <br/>
      <div className="search-section">
        <div className="search-bar">
          <input
            type="text"
            placeholder="가수 혹은 곡명"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={handleClick}>Search</button>
        </div>
      </div>

      {isClicked ? (
        <div className="search-container">
          <ul className="song-list">
            {searchResults.map((track) => (
              <li key={track.id} onClick={() => handleSelectSong(track)}>
                <div className="song-card">
                  <img src={track.album.images[0].url} alt="Album Art" />
                  <div className="song-info">
                    <p className="song-title">{track.name}</p>
                    <p className="artist-name">{track.artists[0].name}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="floating-text">
          
        </p>
      )}
    </div>
  );
};

export default SearchSection;