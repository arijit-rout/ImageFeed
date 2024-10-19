import React, { useState } from 'react';
import EpisodeList from './components/EpisodeList/EposodeList';
import CharacterGrid from './components/CharacterGrid/CharacterGrid';
import Header from './components/Header/Header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const App: React.FC = () => {
  const [selectedEpisodeId, setSelectedEpisodeId] = useState<number | null>(null);

  return (
    <div className="app-container">
      <Header />
      <div className="app-content">
        <div className="sidebar">
          <h3 >Episodes</h3>
          <EpisodeList onSelectEpisode={(id: number) => setSelectedEpisodeId(id)} />
        </div>
        <div className="main-view">
          <CharacterGrid episodeId={selectedEpisodeId} />
        </div>
      </div>
    </div>
  );
};

export default App;
