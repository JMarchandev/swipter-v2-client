import { useEffect, useReducer, useState } from "react";

import BottomNavbar from "./components/navigation/bottomNavbar";
import Drawer from "./components/navigation/drawer";
import TopNavbar from "./components/navigation/topNavbar";
import { useLocation } from "react-router-dom";

type Props = {
  children: JSX.Element | JSX.Element[];
};

export const Layout = ({ children }: Props) => {
  const innerHeight = window.innerHeight;
  const innerWidth = window.innerWidth;

  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [bottomNavHeight, setBottomNavHeight] = useState<number>(0);

  const { pathname } = useLocation();
  const actualPage = pathname.split("/")[1].toUpperCase();

  const childrenDynamicStyle = drawerOpen ? { display: "none" } : "";
  
  return (
    <div
      className="bg-white"
      style={{
        minHeight: `${innerHeight}px`,
        minWidth: `${innerWidth}px`,
        maxWidth: `${innerWidth}px`,
      }}
    >
      <Drawer
        height={innerHeight}
        open={drawerOpen}
        onClickBack={() => setDrawerOpen(false)}
      />
      <TopNavbar onClickBurger={() => setDrawerOpen(true)} />
      <div style={{ marginBottom: bottomNavHeight, ...childrenDynamicStyle }}>
        {children}
      </div>
      <BottomNavbar
        onComponentLoad={(height) => setBottomNavHeight(height)}
        path={actualPage}
      />
    </div>
  );
};

export default Layout;
