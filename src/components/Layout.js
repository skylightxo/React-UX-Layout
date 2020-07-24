import React, { useState } from "react";

import SideNav from "./SideNav";

const Layout = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      {isActive && <div className="cover-layer black-layer"></div>}
      <SideNav setIsActive={setIsActive} isActive={isActive} />
      {children}
    </>
  );
};

export default Layout;
