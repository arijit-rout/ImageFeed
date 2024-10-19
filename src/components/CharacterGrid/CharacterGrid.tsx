import React, { useEffect, useState } from 'react';
import { fetchCharactersByEpisode } from '../../services/api';
import { fetchAllCharacters } from '../../services/api';
import "./CharacterGrid.css";

interface Character {
  id: number;
  name: string;
  image: string;
}

interface CharacterGridProps {
  episodeId: number | null;
}

const CharacterGrid: React.FC<CharacterGridProps> = ({ episodeId }) => {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (episodeId) {
        const data = await fetchCharactersByEpisode(episodeId);
        setCharacters(data);
      } else {
        const data = await fetchAllCharacters();
        setCharacters(data);
        // Optionally load first page of characters for initial view
      }
    };
    fetchData();
  }, [episodeId]);

  return (
    <div className="row">
      {characters.map((character) => (
        <div key={character.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
          <div className="card">
            <div className='image-box'>
            <img src={character.image} alt={character.name} className="card-img-top" />

            </div>
            <div className="card-body">
              <h5 className="card-title">{character.name}</h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CharacterGrid;
