import { useEffect, useRef } from "react";

import DrawerTopNavbar from "./drawerTopNavbar";

type Props = {
  open: boolean;
  onClickBack: () => void;
  height: number;
};

export const NotificationsDrawer = ({ open, onClickBack, height }: Props) => {
  const drawerRef = useRef(null);

  useEffect(() => {
    // @ts-ignore
    drawerRef.current.checked = open;
  }, [open]);
  return (
    <div className={`drawer z-20 drawer-end absolute h-full ${!open ? '-z-10' : ""}`}>
      <input
        ref={drawerRef}
        id="notification-drawer"
        type="checkbox"
        className="drawer-toggle"
      />
      <div className="drawer-side">
        <label htmlFor="notification-drawer" className="drawer-overlay"></label>
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
                  Notifications
                </h2>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationsDrawer;
