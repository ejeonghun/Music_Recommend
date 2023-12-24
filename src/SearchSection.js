import React from 'react';

const SearchSection = ({ searchQuery, setSearchQuery, handleSearch, searchResults, handleSelectSong }) => (
  <div className="search-section">
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter a song"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>

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
);

export default SearchSection;