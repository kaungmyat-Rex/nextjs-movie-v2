import { useForm } from "react-hook-form";
import Link from "next/link";
const InputGlo = () => {
  const { register, watch } = useForm();
  const watchedValues = watch();
  return (
    <form
      className="flex flex-row justify-center items-center w-full pr-2 pl-2 gap-2 md:pr-16 md:pl-16 md:gap-4"
      // onSubmit={handleSubmit(onSubmit)}
    >
      <input
        className="bg-transparent border border-zinc-500 rounded-lg w-full h-11 text-white indent-3 font-mont outline-none focus:border-t-0 focus:border-r-0 focus:border-l-0 focus:border-pink-500 placeholder:indent-3 placeholder:text-zinc-600 placeholder:text-sm md:placeholder:text-lg"
        type="text"
        placeholder="Search Your Movies and Series"
        {...register("Search")}
      />
      <Link href={`/search/[${watchedValues.Search}]/1`}>
        <input
          className="pl-4 pr-4 pt-2 pb-2 font-mont font-semibold text-sm md:text-base border border-white text-white rounded-md hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block cursor-pointer"
          type="submit"
          value="SEARCH"
        />
      </Link>
    </form>
  );
};

export default InputGlo;
