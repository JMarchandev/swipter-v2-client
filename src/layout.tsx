import BottomNavbar from "./components/navigation/bottomNavbar";
import TopNavbar from "./components/navigation/topNavbar";
import { useLocation } from "react-router-dom";

const innerHeight = window.innerHeight;
const innerWidth = window.innerWidth;

type Props = {
  children: JSX.Element | JSX.Element[];
};

export const Layout = ({ children }: Props) => {
  const { pathname } = useLocation();
  const actualPage = pathname.split("/")[1].toUpperCase();

  return (
    <div
      style={{
        minHeight: `${innerHeight}px`,
        maxHeight: `${innerHeight}px`,
        minWidth: `${innerWidth}px`,
        maxWidth: `${innerWidth}px`,
      }}
    >
      <TopNavbar />
      {children}
      <BottomNavbar path={actualPage} />
    </div>
  );
};

export default Layout;
