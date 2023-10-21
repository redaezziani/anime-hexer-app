import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AnimeDataContext = createContext();

export const AnimeDataProvider = ({ children }) => {
  const [FisrtSix, setFisrtSix ] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    GetData();
  }, []);

const GetData = async () => {
    try {
      const  response = await axios.get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=`
      );
      setFisrtSix(response.data.results.slice(0, 8));
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };
  
  const animeDataContextValues = {
    FisrtSix,
    loading,
    error,
  };

  return (
    <AnimeDataContext.Provider value={animeDataContextValues}>
      {children}
    </AnimeDataContext.Provider>
  );
};
