// import { useEffect, useState } from "react";

// const navScrollCatch = () => {
//   const [current, setcurrent] = useState(0);
//   const [scroll, getscroll] = useState(false);
//   const [prev, setprev] = useState(200);

//   const scrollEffect = () => {
//     useEffect(() => {
//       window.onscroll = function () {
//         setcurrent(Math.floor(window.pageYOffset));
//         if (prev > current) {
//           getscroll(false);
//         } else {
//           getscroll(true);
//         }
//       };
//     }, [current]);
//   };

//   return [scroll, scrollEffect];
// };

// export default navScrollCatch;

import { useEffect, useState } from "react";

const navScrollCatch = () => {
  const [current, setCurrent] = useState(0);
  const [scroll, setScroll] = useState(false);
  const [prev, setPrev] = useState(200);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = Math.floor(window.pageYOffset);
      setCurrent(currentPosition);

      if (prev > currentPosition) {
        setScroll(false);
      } else {
        setScroll(true);
      }

      setPrev(currentPosition);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return [scroll];
};

export default navScrollCatch;
