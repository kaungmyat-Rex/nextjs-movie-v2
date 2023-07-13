import { Seriesgeneres } from "../../../constants/commonObj";
import { IoIosArrowForward } from "react-icons/io";
import { useRouter } from "next/router";
import Link from "next/link";
const SeriesGenreList = ({ genereRoutes }) => {
  return (
    <div className="flex flex-wrap gap-2 justify-start items-center mt-2">
      {Seriesgeneres.map((e) => (
        <Link href={`/series/${encodeURIComponent(e.type)}`} key={e.id}>
          <p
            key={e.id}
            className={`flex justify-around items-center border  rounded-lg text-sm gap-2 pr-3 pl-4 pt-1 pb-1 font-mont ${
              e.type === genereRoutes
                ? "bg-gradient-to-r from-indigo-500 text-white border-white"
                : "text-zinc-500 border-zinc-600"
            }`}
          >
            {e.type}
            <IoIosArrowForward />
          </p>
        </Link>
      ))}
    </div>
  );
};

export default SeriesGenreList;
