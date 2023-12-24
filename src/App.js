import React, { useState } from 'react';
import axios from 'axios';
import SearchSection from './SearchSection';
import SelectedSongSection from './SelectedSongSection';
import RecommendationsSection from './RecommendationsSection';
import './styles.css';
import FadeIn from './FadeIn'

const API_URL = process.env.REACT_APP_API_URL;

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
      console.error(error);
      alert("해당 곡을 찾을 수 없습니다.");
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
      console.error(error);
      alert("추천 API 오류");
      return;
    }
  };



  return (
    <div>
    <div className="app-container">
      <FadeIn>
      <SearchSection
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
        searchResults={searchResults}
        handleSelectSong={handleSelectSong}
      />
      </FadeIn>

      {selectedSong && (
        <FadeIn>
        <SelectedSongSection
          selectedSong={selectedSong}
          handleGetRecommendations={handleGetRecommendations}
        />
        </FadeIn>
      )}


      {recommendations.length > 0 && (
        <FadeIn>
        <RecommendationsSection recommendations={recommendations} selectedSong={selectedSong} />
        </FadeIn>
      )}
    </div>
      {/* <div className="footer">
        <p style={{margin:0}}>[Luna] [Spotify]</p>
      </div> */}
    </div>
  );
}

export default App;