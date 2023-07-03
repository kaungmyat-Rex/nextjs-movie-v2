import { LuLaugh } from "react-icons/lu";
import { TbPumpkinScary } from "react-icons/tb";
import { GiPistolGun } from "react-icons/gi";
import { LiaHeartbeatSolid } from "react-icons/lia";
import { TbUfo } from "react-icons/tb";
import { MdOutlineAnimation } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
const GenereList = () => {
  return (
    <>
      <h4 className="relative flex items-center text-white font-dela text-lg left-0">
        TOP GENERES
        <IoIosArrowForward />
      </h4>
      <div className="flex flex-row flex-wrap justify-center gap-4 pt-4 pb-10 md:gap-3 lg:gap-4 lg:pt-14">
        <div className="flex flex-col items-center w-24 h-28 md:w-28 md:h-32 lg:w-36 lg:h-40 rounded-xl border border-zinc-500 bg-gradient-to-r from-purple-900 from-10 hover:bg-purple-900 hover:transition-all cursor-pointer">
          <h4 className="text-white font-mont pt-3 text-sm lg:text-lg">
            Comedy
          </h4>
          <LuLaugh className="text-white text-5xl md:text-6xl lg:text-7xl font-thin mt-2" />
        </div>
        <div className="flex flex-col items-center w-24 h-28 md:w-28 md:h-32 lg:w-36 lg:h-40 rounded-xl border border-zinc-500 bg-gradient-to-r from-purple-900 from-10 hover:bg-purple-900 hover:transition-all cursor-pointer">
          <h4 className="text-white font-mont pt-3 text-sm lg:text-lg">
            Horror
          </h4>
          <TbPumpkinScary className="text-white text-5xl md:text-6xl lg:text-7xl font-thin mt-2" />
        </div>
        <div className="flex flex-col items-center w-24 h-28 md:w-28 md:h-32 lg:w-36 lg:h-40 rounded-xl border border-zinc-500 bg-gradient-to-r from-purple-900 from-10 hover:bg-purple-900 hover:transition-all cursor-pointer">
          <h4 className="text-white font-mont pt-3 text-sm lg:text-lg">
            Action
          </h4>
          <GiPistolGun className="text-white text-5xl md:text-6xl lg:text-7xl font-thin mt-2" />
        </div>
        <div className="flex flex-col items-center w-24 h-28 md:w-28 md:h-32 lg:w-36 lg:h-40 rounded-xl border border-zinc-500 bg-gradient-to-r from-purple-900 from-10 hover:bg-purple-900 hover:transition-all cursor-pointer">
          <h4 className="text-white font-mont pt-3 text-sm lg:text-lg">
            Romance
          </h4>
          <LiaHeartbeatSolid className="text-white text-5xl md:text-6xl lg:text-7xl font-thin mt-2" />
        </div>
        <div className="flex flex-col items-center w-24 h-28 md:w-28 md:h-32 lg:w-36 lg:h-40 rounded-xl border border-zinc-500 bg-gradient-to-r from-purple-900 from-10 hover:bg-purple-900 hover:transition-all cursor-pointer">
          <h4 className="text-white font-mont pt-3 text-sm lg:text-lg">
            Sci-fi
          </h4>
          <TbUfo className="text-white text-5xl md:text-6xl lg:text-7xl font-thin mt-2" />
        </div>
        <div className="flex flex-col items-center w-24 h-28 md:w-28 md:h-32 lg:w-36 lg:h-40 rounded-xl border border-zinc-500 bg-gradient-to-r from-purple-900 from-10 hover:bg-purple-900 hover:transition-all cursor-pointer">
          <h4 className="text-white font-mont pt-3 text-sm lg:text-lg">
            Animation
          </h4>
          <MdOutlineAnimation className="text-white text-5xl md:text-6xl lg:text-7xl font-thin mt-2" />
        </div>
      </div>
    </>
  );
};

export default GenereList;
