import { SlSettings } from "react-icons/sl";

const People = () => {
  return (
    <div className="flex justify-center items-center pr-10 pl-10">
      <div className="w-full h-528 flex justify-center">
        <h4 className="flex justify-center items-center gap-3 ">
          <SlSettings className="text-zinc-300 text-7xl animate-spin lg:text-5xl" />
          <div className="w-px h-16 bg-pink-500"></div>
          <span className="font-dela bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  inline-block bg-clip-text text-transparent text-xl">
            Comming Soon , working on progress{" "}
          </span>
        </h4>
      </div>
    </div>
  );
};

export default People;
