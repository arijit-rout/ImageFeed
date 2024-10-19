import React, { useEffect, useState } from 'react';
import { fetchEpisodes } from '../../services/api.ts';
import './EpisodeList.css';

interface Episode {
  id: number;
  name: string;
}

interface EpisodeListProps {
  onSelectEpisode: (id: any) => void;
}

const EpisodeList: React.FC<EpisodeListProps> = ({ onSelectEpisode }) => {
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [selectedEpisodeId, setSelectedEpisodeId] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchEpisodes();
      setEpisodes(data.results);
    };
    fetchData();
  }, []);

  const handleEpisodeClick = (id: number) => {
    if(id==selectedEpisodeId){
        setSelectedEpisodeId(null);
        onSelectEpisode(null);
        return;
    }
    setSelectedEpisodeId(id);
    onSelectEpisode(id);
  };

  return (
    <ul className="episode-list">
      {episodes.map((episode) => (
        <li
          key={episode.id}
          className={`episode-item ${selectedEpisodeId === episode.id ? 'selected' : ''}`}
          onClick={() => handleEpisodeClick(episode.id)}
        >
          {episode.name}
        </li>
      ))}
    </ul>
  );
};

export default EpisodeList;
