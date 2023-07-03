import { useForm } from "react-hook-form";

const SearchInput = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data.Search);
  };
  return (
    <form
      className="flex flex-col justify-center items-center max-w-xs w-full pt-10"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        className="bg-transparent border border-zinc-500 rounded-md w-full h-11 text-white indent-3 font-mont outline-none focus:border-t-0 focus:border-r-0 focus:border-l-0 focus:border-pink-500 placeholder:text-center placeholder:text-zinc-600"
        placeholder="search your movie name"
        {...register("Search")}
      />

      <input
        className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block rounded-md pl-6 pr-6 pt-2 pb-2 font-mont font-semibold text-base border border-white mt-5"
        type="submit"
        value="SEARCH"
      />
    </form>
  );
};

export default SearchInput;
