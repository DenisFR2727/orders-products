import React, { ReactNode } from "react";
import NavigationMenu from "../Nav/NavigationMenu";
import Main from "./Main";

import classes from "./Layout.module.scss";

export interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={classes.navMain}>
      <NavigationMenu />
      <Main>
        {children}
        <div id="overlays-root"></div>
      </Main>
    </div>
  );
};
export default Layout;
