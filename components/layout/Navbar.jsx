import { CiSearch } from "react-icons/ci";
import { Twirl as Hamburger } from "hamburger-react";
import Link from "next/link";
import SideNav from "../common/reUse.UI/SideNav";
import { useState } from "react";
import Inputmodel from "../common/reUse.UI/Inputmodel";
const Navbar = ({ scroll }) => {
  const [isOpen, setOpen] = useState(false);
  const [openInputmodel, setInputmodel] = useState(false);

  return (
    <>
      <div
        className={`fixed left-0 top-0 w-full flex flex-col justify-center items-center text-white z-30 transition-colors ${
          scroll
            ? "bg-gradient-to-r from-mirage via-charcol to-black transition-colors duration-300 "
            : ""
        }`}
      >
        {/* <div className="absolute left-0 bottom-0 bg-gradient-to-b from-black from-50 w-full h-full opacity-80 lg:bg-gradient-to-b lg:from-black lg:from-20 lg:opacity-80"></div> */}
        <div className="flex justify-between items-center pt-2 pb-2 w-11/12 lg:w-10/12 z-30">
          <h4 className="font-dela bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  inline-block bg-clip-text text-transparent text-3xl">
            MRML
          </h4>
          <div className="hidden lg:block">
            <div className="flex font-mont font-extralight">
              <p className="mr-9 ml-9 cursor-pointer hover:underline underline-offset-8 decoration-pink-500 ease-in duration-500">
                <Link href={"/"}>Home</Link>
              </p>
              <p className="mr-9 ml-9 cursor-pointer hover:underline underline-offset-8 decoration-pink-500 ease-in duration-500">
                <Link href={"/movies"}>Movies</Link>
              </p>
              <p className="mr-9 ml-9 cursor-pointer hover:underline underline-offset-8 decoration-pink-500 ease-in duration-500">
                <Link href={"/"}>Series</Link>
              </p>
              <p className="mr-9 ml-9 cursor-pointer hover:underline underline-offset-8 decoration-pink-500 ease-in duration-500">
                <Link href={"/"}>People</Link>
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-2">
            <CiSearch
              className="text-2xl hidden sm:block cursor-pointer"
              onClick={() => setInputmodel(true)}
            />
            <p className="border pr-2 pl-2 rounded-md text-sm">EN</p>
            <div className="lg:hidden">
              <Hamburger size={25} toggled={isOpen} toggle={setOpen} />
            </div>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? "block" : "hidden"}`}>
        <SideNav setOpen={setOpen} />{" "}
      </div>
      <div className={`${openInputmodel ? "block" : "hidden"}`}>
        <Inputmodel setInputmodel={setInputmodel} />
      </div>
    </>
  );
};

export default Navbar;
