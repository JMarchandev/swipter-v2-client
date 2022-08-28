import { BsSuitHeartFill } from "react-icons/bs";
import { ImCross } from "react-icons/im";

export const ActionButtons = () => {
  return (
    <div className="flex justify-around">
      <div className="w-15 h-15 border-2 border-red-400 m-3 rounded-full">
        <ImCross size={"2rem"} className="m-3 p-1 text-red-400" />
      </div>
      <div className="w-15 h-15 border-2 border-green-400 m-3 rounded-full">
        <BsSuitHeartFill size={"2rem"} className="m-3 p-1 text-green-400" />
      </div>
    </div>
  );
};

export default ActionButtons;
