import { BiArrowBack } from "react-icons/bi";
import { MdDarkMode } from "react-icons/md";

type Props = {
  onClickBack: () => void;
};

export const DrawerTopNavbar = ({ onClickBack }: Props) => {
  return (
    <nav className="sticky flex justify-between items-center top-0 bg-white inset-x-0 shadow p-1 px-3">
      <div className={`m-2`} onClick={onClickBack}>
        <BiArrowBack size={"2rem"} />
      </div>
      <div></div>
      <div className={`m-2`}>
        <MdDarkMode size={"1.8rem"} className="text-black" />
      </div>
    </nav>
  );
};

export default DrawerTopNavbar;
