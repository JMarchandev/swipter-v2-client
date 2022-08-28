import { BiMenu } from "react-icons/bi";
import { IoNotifications } from "react-icons/io5";

type Props = {
  onClickBurger: () => void;
};

export const TopNavbar = ({ onClickBurger }: Props) => {
  return (
    <nav className="sticky flex justify-between items-center top-0 bg-white inset-x-0 shadow p-1 px-3">
      <div className={`m-2`} onClick={onClickBurger}>
        <BiMenu size={"2rem"} />
      </div>
      <div>
        <h2 className="text-[#FA6650] text-2xl font-bold">Swipet</h2>
      </div>
      <div className={`m-2`}>
        <IoNotifications size={"1.8rem"} />
      </div>
    </nav>
  );
};

export default TopNavbar;
