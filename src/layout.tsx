import BottomNavbar from "./components/navigation/bottomNavbar";
import TopNavbar from "./components/navigation/topNavbar";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const innerHeight = window.innerHeight;
const innerWidth = window.innerWidth;

type Props = {
  children: JSX.Element | JSX.Element[];
};

export const Layout = ({ children }: Props) => {
  const [bottomNavHeight, setBottomNavHeight] = useState(0);
  const { pathname } = useLocation();
  const actualPage = pathname.split("/")[1].toUpperCase();

  return (
    <div
      className="bg-white"
      style={{
        minHeight: `${innerHeight}px`,
        minWidth: `${innerWidth}px`,
        maxWidth: `${innerWidth}px`,
      }}
    >
      <TopNavbar />
      <div style={{ marginBottom: bottomNavHeight }}>{children}</div>
      <BottomNavbar
        onComponentLoad={(height) => setBottomNavHeight(height)}
        path={actualPage}
      />
    </div>
  );
};

export default Layout;
