import BottomNavbar from "./components/navigation/bottomNavbar";
import MenuDrawer from "./components/navigation/menuDrawer";
import NotificationsDrawer from "./components/navigation/notificationsDrawer";
import TopNavbar from "./components/navigation/topNavbar";
import { useLocation } from "react-router-dom";
import { useState } from "react";

type Props = {
  children: JSX.Element | JSX.Element[];
};

export const Layout = ({ children }: Props) => {
  const innerHeight = window.innerHeight;
  const innerWidth = window.innerWidth;

  const [menuDrawerOpen, setMenuDrawerOpen] = useState<boolean>(false);
  const [notificationsDrawerOpen, setNotificationsDrawerOpen] =
    useState<boolean>(false);
  const [bottomNavHeight, setBottomNavHeight] = useState<number>(0);

  const { pathname } = useLocation();
  const actualPage = pathname.split("/")[1].toUpperCase();

  const childrenDynamicStyle = menuDrawerOpen ? { display: "none" } : "";

  return (
    <div
      className="bg-white"
      style={{
        minHeight: `${innerHeight}px`,
        minWidth: `${innerWidth}px`,
        maxWidth: `${innerWidth}px`,
      }}
    >
      <MenuDrawer
        height={innerHeight}
        open={menuDrawerOpen}
        onClickBack={() => setMenuDrawerOpen(false)}
      />
      <NotificationsDrawer
        height={innerHeight}
        open={notificationsDrawerOpen}
        onClickBack={() => setNotificationsDrawerOpen(false)}
      />
      <TopNavbar
        onClickNotifications={() => setNotificationsDrawerOpen(true)}
        onClickBurger={() => setMenuDrawerOpen(true)}
      />
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
