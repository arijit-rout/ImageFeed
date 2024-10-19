import axios from 'axios';

const API_BASE_URL = 'https://rickandmortyapi.com/api';

// Fetch episodes
export const fetchEpisodes = async () => {
  const response = await axios.get(`${API_BASE_URL}/episode`);
  return response.data;
};

// Fetch characters by episode ID
export const fetchCharactersByEpisode = async (episodeId: number) => {
  const response = await axios.get(`${API_BASE_URL}/episode/${episodeId}`);
  console.log(response);
  
  const characterUrls = response.data.characters;
  console.log(characterUrls);
  
  const characterData = await Promise.all(characterUrls.map((url: string) => axios.get(url)));
  return characterData.map((char) => char.data);
};
// Fetch all characters
export const fetchAllCharacters = async () => {
  const response = await axios.get(`${API_BASE_URL}/character`);
  console.log(response);
  
  const characterUrls = response.data.results.map((item:any)=>{
    return item.url
  });
  console.log(characterUrls);
  
  const characterData = await Promise.all(characterUrls.map((url: string) => axios.get(url)));
  return characterData.map((char) => char.data);
};
