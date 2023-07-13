import Link from "next/link";
import { useRouter } from "next/router";
const SideNav = ({ setOpen }) => {
  return (
    <div className="fixed left-0 top-0 w-full h-full z-20 bg-gradient-to-r from-mirage via-charcol to-black text-zinc-200 flex justify-center">
      <div className="mt-20 w-11/12">
        <div className="flex flex-col">
          <Link href="/">
            {" "}
            <p
              onClick={() => setOpen(false)}
              className="font-dela text-xl border-b pb-5 pt-10 border-purple-900"
            >
              Home
            </p>
          </Link>
          <Link href="/movies/popular">
            {" "}
            <p
              onClick={() => setOpen(false)}
              className="font-dela text-xl border-b pb-5 pt-10 border-purple-900"
            >
              Movies
            </p>
          </Link>
          <Link href="/series/popular">
            {" "}
            <p
              onClick={() => setOpen(false)}
              className="font-dela text-xl border-b pb-5 pt-10 border-purple-900"
            >
              Series
            </p>
          </Link>
          <Link href="/peoples">
            {" "}
            <p className="font-dela text-xl border-b pb-5 pt-10 border-purple-900">
              People
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
