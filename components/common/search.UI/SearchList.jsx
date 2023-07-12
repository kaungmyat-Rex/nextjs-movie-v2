import imagenotFound from "../../../assets/inf.png";
const SearchList = ({ data }) => {
  return (
    <div className="flex flex-wrap justify-center mt-7 gap-5 lg:gap-8 lg:w-11/12 lg:justify-start">
      {data?.map((e) => (
        <div
          key={e.id}
          className="relative w-40 flex flex-col cursor-pointer mt-6 hover:scale-105 transition-all"
        >
          {/* <img
            src={`${
              e.poster_path === null
                ? imagenotFound.src
                : `https://image.tmdb.org/t/p/w500${e.poster_path}`
            }`}
            alt="casual"
            className="rounded-2xl w-full relative border border-purple-500"
          /> */}
          {e.poster_path === null ? (
            <img
              className="rounded-2xl w-full h-45 object-cover relative border border-indigo-500 hover:border-2"
              src={imagenotFound.src}
              alt=""
            />
          ) : (
            <img
              className="rounded-2xl w-full relative border border-indigo-500 hover:border-2 hover:border-purple-500 transition-all"
              src={`https://image.tmdb.org/t/p/w500${e.poster_path}`}
              alt="poster"
            />
          )}

          <span className=" absolute bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-base rounded-full pl-1 pr-1 pt-1 pb-1 font-bold -top-2 -right-2 text-white">
            {e.vote_average.toFixed(1)}
          </span>
          <p className="font-mont text-white text-sm font-bold mt-2">
            {e.name}
            {e.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SearchList;
