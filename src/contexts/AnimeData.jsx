import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AnimeDataContext = createContext();

export const AnimeDataProvider = ({ children }) => {
  const [animeData, setAnimeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    GetData();
  }, []);

const GetData = async () => {
    // lets fetch from myanimelist api

    try {
      const { data } = await axios.get(
        "https://api.jikan.moe/v3/top/anime/1/bypopularity"
      );
      setAnimeData(data.top);
      setLoading(false);
      
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };
  
  const animeDataContextValues = {
    animeData,
    loading,
    error,
  };

  return (
    <AnimeDataContext.Provider value={animeDataContextValues}>
      {children}
    </AnimeDataContext.Provider>
  );
};
