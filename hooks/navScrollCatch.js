import { useEffect, useState } from "react";

const navScrollCatch = () => {
  const [current, setcurrent] = useState(0);
  const [scroll, getscroll] = useState(false);
  const [prev, setprev] = useState(200);

  const scrollEffect = () => {
    useEffect(() => {
      window.onscroll = function () {
        setcurrent(Math.floor(window.pageYOffset));
        if (prev > current) {
          getscroll(false);
        } else {
          getscroll(true);
        }
      };
    }, [current]);
  };

  return [scroll, scrollEffect];
};

export default navScrollCatch;
