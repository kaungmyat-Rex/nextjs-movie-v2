import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";
const SearchInput = () => {
  const router = useRouter();
  // const [searchinput, setSearchInput] = useState("");
  const { register, watch } = useForm();
  const watchedValues = watch();
  // const onSubmit = (data) => {
  //   router.push(`search/${data.Search}/1`, undefined, { shallow: true });
  // };
  // console.log(watchedValues.Search);

  return (
    <form
      className="flex flex-col justify-center items-center max-w-xs w-full pt-10"
      // onSubmit={handleSubmit(onSubmit)}
    >
      <input
        className="bg-transparent border border-zinc-500 rounded-md w-full h-11 text-white indent-3 font-mont outline-none focus:border-t-0 focus:border-r-0 focus:border-l-0 focus:border-pink-500 placeholder:text-center placeholder:text-zinc-600"
        placeholder="search your movie name"
        {...register("Search")}
      />

      <Link href={`search/[${watchedValues.Search}]/1`}>
        {" "}
        <input
          className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block rounded-md pl-6 pr-6 pt-2 pb-2 font-mont font-semibold text-base border border-white mt-5 cursor-pointer hover:bg-gradient-to-r hover:from-indigo-500 hover:text-white transition-all"
          type="submit"
          value="SEARCH"
        />
      </Link>
    </form>
  );
};

export default SearchInput;
