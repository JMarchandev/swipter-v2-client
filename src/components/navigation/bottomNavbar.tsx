import { MdHome, MdMessage, MdOutlineSwipe } from "react-icons/md";
import { useEffect, useRef } from "react";

import { Link } from "react-router-dom";

type Props = {
  path: string;
  onComponentLoad: (height: number) => void;
};

export const BottomNavbar = ({ path, onComponentLoad }: Props) => {
  const ref = useRef(null);

  useEffect(() => {
    // @ts-ignore
    onComponentLoad(ref.current.clientHeight);
  }, [onComponentLoad]);
  return (
    <nav
      ref={ref}
      className="fixed shadow bottom-0 inset-x-0 bg-white flex justify-around items-center border text-sm uppercase p-1"
    >
      <div className={`${path === "PLAY" ? "text-[#FA6650]" : ""} m-2 pr-10`}>
        <Link to="/play">
          <MdOutlineSwipe size={"2rem"} />
        </Link>
      </div>
      <div
        className={`${
          path === "HOME" ? "text-[#FA6650]" : ""
        } bg-white border shadow absolute bottom-0 p-3 rounded-full`}
      >
        <Link to="/home">
          <MdHome size={"3rem"} />
        </Link>
      </div>
      <div
        className={`${path === "MESSAGES" ? "text-[#FA6650]" : ""} m-2 pl-10`}
      >
        <Link to="/messages">
          <MdMessage size={"2rem"} />
        </Link>
      </div>
    </nav>
  );
};

export default BottomNavbar;
