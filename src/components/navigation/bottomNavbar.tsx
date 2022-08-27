import { MdHome, MdMessage, MdOutlineSwipe } from "react-icons/md";

type Props = {
  path: string;
};

export const BottomNavbar = ({ path }: Props) => {
  return (
    <nav className="fixed shadow bottom-0 inset-x-0 bg-white flex justify-around items-center text-sm uppercase p-1">
      <div className={`${path === "PLAY" ? "text-[#FA6650]" : ""} m-2 pr-10`}>
        <MdOutlineSwipe size={"2rem"} />
      </div>
      <div
        className={`${
          path === "HOME" ? "text-[#FA6650]" : ""
        } bg-white shadow absolute bottom-0 p-3 rounded-full`}
      >
        <MdHome size={"3rem"} />
      </div>
      <div
        className={`${path === "MESSAGE" ? "text-[#FA6650]" : ""} m-2 pl-10`}
      >
        <MdMessage size={"2rem"} />
      </div>
    </nav>
  );
};

export default BottomNavbar;