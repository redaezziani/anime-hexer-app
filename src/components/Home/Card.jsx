const Card = ({...Movies}) => {
    const {id, title, poster_path, overview, vote_average, release_date} = Movies
  return (
      <div
    key={Movies.id}
    className="w-full relative h-72  flex flex-col justify-center items-center gap-2"
  >
    <div className="rounded-md absolute border bg-gray-800 p-2 min-h-[20rem] min-w-[20rem] top-5 -right-20 z-10">

    </div>
    <img
      className="w-full   h-full  object-cover rounded-md"
      src={`https://image.tmdb.org/t/p/original${Movies.poster_path}`}
      alt={Movies.title}
    />

    
  </div>
  )
}

export default Card