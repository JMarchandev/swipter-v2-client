import { MdHome, MdMessage, MdOutlineSwipe } from "react-icons/md";

import { Link } from "react-router-dom";

type Props = {
  path: string;
};

export const BottomNavbar = ({ path }: Props) => {
  return (
    <nav className="fixed shadow bottom-0 inset-x-0 bg-white flex justify-around items-center text-sm uppercase p-1">
      <div className={`${path === "PLAY" ? "text-[#FA6650]" : ""} m-2 pr-10`}>
        <Link to="/play">
          <MdOutlineSwipe size={"2rem"} />
        </Link>
      </div>
      <div
        className={`${
          path === "HOME" ? "text-[#FA6650]" : ""
        } bg-white shadow absolute bottom-0 p-3 rounded-full`}
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
