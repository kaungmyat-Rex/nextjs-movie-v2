import { AiOutlineClose } from "react-icons/ai";
import { useForm } from "react-hook-form";
import Link from "next/link";
const Inputmodel = ({ setInputmodel }) => {
  const { register, watch } = useForm();
  const watchedValues = watch();
  return (
    <div className="fixed w-full h-full left-0 top-0 bg-inputmodelbg text-white z-40 flex flex-col items-center">
      <AiOutlineClose
        className="absolute right-5 top-5 cursor-pointer text-4xl"
        onClick={() => setInputmodel(false)}
      />
      <h4 className="mt-24 font-dela bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  inline-block bg-clip-text text-transparent text-3xl">
        SEARCH YOUR MOVIES & SERIES
      </h4>
      <div className="w-full mt-10">
        <div className="flex flex-row items-center justify-center gap-4 md:pr-16 md:pl-16">
          <input
            className="bg-transparent border-b border-indigo-500 w-full h-16 text-white indent-3 font-mont outline-none focus:border-t-0 focus:border-r-0 focus:border-l-0 focus:border-pink-500 text-xl placeholder:indent-3 placeholder:text-zinc-600 placeholder:text-sm md:placeholder:text-xl"
            type="text"
            placeholder="Search Your Movies and Series"
            {...register("Search")}
          />
          <Link href={`search/[${watchedValues.Search}]/1`}>
            <input
              className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block rounded-md pl-6 pr-6 pt-2 pb-2 font-mont font-semibold text-base border border-white cursor-pointer hover:bg-gradient-to-r hover:from-indigo-500 hover:text-white transition-all"
              type="submit"
              value="SEARCH"
              onClick={() => setInputmodel(false)}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Inputmodel;
