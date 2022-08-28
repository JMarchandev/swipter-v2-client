import { useEffect, useRef } from "react";

import { BiChevronRight } from "react-icons/bi";
import DrawerTopNavbar from "./drawerTopNavbar";
import { Link } from "react-router-dom";

type Props = {
  open: boolean;
  onClickBack: () => void;
  height: number;
};

const menuList = [
  {
    displayName: "Mon profile",
    icon: <BiChevronRight size={"1.5rem"} className="text-gray" />,
  },
  {
    displayName: "Mon compte",
    icon: <BiChevronRight size={"1.5rem"} className="text-gray" />,
  },
  {
    displayName: "Notifications",
    icon: <BiChevronRight size={"1.5rem"} className="text-gray" />,
  },
  {
    displayName: "Aide et contact",
    icon: <BiChevronRight size={"1.5rem"} className="text-gray" />,
  },
  {
    displayName: "About Swipet",
    icon: (
      <div className="flex items-center">
        <p className="text-sm">v0.1.0&nbsp;&nbsp;</p>
        <BiChevronRight size={"1.5rem"} className="text-gray" />
      </div>
    ),
  },
];

export const Drawer = ({ open, onClickBack, height }: Props) => {
  const drawerRef = useRef(null);

  useEffect(() => {
    // @ts-ignore
    drawerRef.current.checked = open;
  }, [open]);

  return (
    <div className="drawer absolute h-full">
      <input
        ref={drawerRef}
        id="my-drawer"
        type="checkbox"
        className="drawer-toggle"
      />
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <div
          style={{
            maxHeight: `${height}px`,
          }}
          className="menu w-full text-base-content bg-white"
        >
          <DrawerTopNavbar onClickBack={onClickBack} />
          <div className="flex flex-col h-full justify-between">
            <div>
              <div className="py-3">
                <h2 className="text-[#FA6650] px-5 text-2xl font-bold">
                  Reglages
                </h2>
              </div>
              {menuList.map((item, i) => (
                <div
                  key={item.displayName + i}
                  className="py-3 px-5 text-black flex items-center justify-between"
                >
                  <p>
                    <Link to="#">{item.displayName}</Link>
                  </p>
                  {item.icon}
                </div>
              ))}
            </div>
            <p className="text-[#FA6650] py-5 px-5 text-center">
              <Link to="/auth">Déconnexion</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
