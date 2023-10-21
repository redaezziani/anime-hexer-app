import { BsArrowRightShort } from "react-icons/bs";
import {AnimeDataContext } from "../contexts/AnimeData.jsx";
import { useContext } from "react";
import Card from "../components/Home/Card.jsx";
const Home = () => {
  const { FisrtSix, loading, error } = useContext(AnimeDataContext);
  return (
    <div className=" w-full mt-20 sm:w-[60%] flex justify-center items-start flex-col gap-2">
      <div className="w-full mt-20 flex gap-2 justify-end items-center">
        <p className=" text-sky-500 transition-all ease-in-out duration-300 hover:text-sky-600 flex gap-2 items-center cursor-pointer">
          See More Movies <BsArrowRightShort />
        </p>
      </div>
      <div className="w-full mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-2 ">
        {FisrtSix.map((Movies) => (
          <Card
          key={Movies.id}
          {...Movies} />
        ))}
      </div>
    </div>
  );
};

export default Home;
