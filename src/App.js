import React, { useState } from 'react';
import axios from 'axios';
import SearchSection from './SearchSection';
import SelectedSongSection from './SelectedSongSection';
import RecommendationsSection from './RecommendationsSection';
import './styles.css';

const API_URL = 'https://spotify.wjdgns4019.workers.dev';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedSong, setSelectedSong] = useState(null);
  const [recommendations, setRecommendations] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`${API_URL}/search?query=${encodeURIComponent(searchQuery)}`);
      setSearchResults(response.data.tracks.items);
      setSelectedSong(null);
      setRecommendations([]);
    } catch (error) {
      console.error('Error searching for songs:', error);
    }
  };

  const handleSelectSong = (track) => {
    setSelectedSong(track);
    setRecommendations([]);
    setSearchResults([]);
  };

  const handleGetRecommendations = async () => {
    try {
      const response = await axios.get(`${API_URL}/recommendations?seed_track=${selectedSong.id}`);
      setRecommendations(response.data.tracks);
    } catch (error) {
      console.error('Error getting recommendations:', error);
    }
  };

  const handlePreview = (previewUrl) => {
    const audio = new Audio(previewUrl);
    audio.play();
  };

  return (
    <div className="app-container">
      <SearchSection
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
        searchResults={searchResults}
        handleSelectSong={handleSelectSong}
      />

      {selectedSong && (
        <SelectedSongSection
          selectedSong={selectedSong}
          handleGetRecommendations={handleGetRecommendations}
        />
      )}

      {recommendations.length > 0 && (
        <RecommendationsSection recommendations={recommendations} />
      )}
    </div>
  );
}

export default App;