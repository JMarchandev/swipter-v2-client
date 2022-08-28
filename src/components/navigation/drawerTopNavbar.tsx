import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

import { BiArrowBack } from "react-icons/bi";

type Props = {
  onClickBack: () => void;
};

export const DrawerTopNavbar = ({ onClickBack }: Props) => {
  return (
    <nav className="sticky flex justify-between items-center top-0 bg-white inset-x-0 shadow p-1 px-3">
      <div className={`m-2`} onClick={onClickBack}>
        <BiArrowBack size={"2rem"} />
      </div>
      <div className={`m-2`}>
        <label className="swap swap-rotate">
          <input type="checkbox" />
          <MdDarkMode size={"2rem"} className="swap-on fill-current text-black" />
          <MdOutlineLightMode size={"2rem"} className="swap-off fill-current text-black" />
        </label>
      </div>
    </nav>
  );
};

export default DrawerTopNavbar;
