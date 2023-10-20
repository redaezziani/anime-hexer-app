import { BsArrowRightShort } from "react-icons/bs";
import {AnimeDataContext } from "../contexts/AnimeData.jsx";
import { useContext } from "react";
const Home = () => {
  const { animeData, loading, error } = useContext(AnimeDataContext);
  return (
    <div className=" w-full mt-20 sm:w-[80%] flex justify-center items-start flex-col gap-2">
      <div className="w-full mt-20 flex gap-2 justify-end items-center">
        <p className=" text-sky-500 transition-all ease-in-out duration-300 hover:text-sky-600 flex gap-2 items-center cursor-pointer">
          See More Anime <BsArrowRightShort />
        </p>
      </div>
      <div className="w-full mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 place-items-center">
        {animeData.map((anime) => (
          <div
            key={anime.id}
            className="w-full h-60 sm:h-72 md:h-80 lg:h-96 flex flex-col justify-center items-center gap-2"
          >
            <img
              className="w-full h-full object-cover rounded-md"
              src={`https://image.tmdb.org/t/p/original${anime.poster_path}`}
              alt={anime.title}
            />
            <p className="text-white text-sm sm:text-md font-medium">
              {anime.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
