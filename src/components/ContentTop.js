import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";

import Notifications from "../components/Notifications";

const projectHeading = (
  <h1 className="content__heading" style={{ fontSize: "30px" }}>
    <Link to="/projects">
      <span>Projects</span>
    </Link>
    <span style={{ margin: "0 10px" }}>></span>
    Project number 1
  </h1>
);
// Text can be generated later, when routing will be linked to logic
const content = {
  "/home": (
    <h1 className="content__heading">
      Home<span style={{ opacity: "0.3" }}> sweet home</span>
    </h1>
  ),
  "/projects": <h1 className="content__heading">Projects</h1>,
  "/upload": <h1 className="content__heading">Project number 1</h1>,
  "/dragdrop": projectHeading,
  "/done": projectHeading,
  "/admin": <h1 className="content__heading">Admin page</h1>,
  "/billing": <h1 className="content__heading">Billing page</h1>,
  "/support": <h1 className="content__heading">Support page</h1>,
  "/project/home": projectHeading,
  "/project/quality": projectHeading,
  "/project/enrichment": projectHeading,
  "/project/model": projectHeading,
  "/project/business": projectHeading,
  "/project/simulation": projectHeading,
};

const ContentTop = () => {
  const [notification, setNotification] = useState(false);
  const { pathname } = useLocation();

  return (
    <div className="content__top">
      {content[pathname]}
      <div className="content__item">
        <img
          onClick={() => setNotification(!notification)}
          className="content__notification"
          src="/icons/bell-icon.svg"
          alt="bell icon"
        />
        {notification && <Notifications setNotification={setNotification} />}
        <div className="content__avatar"></div>
      </div>
    </div>
  );
};

export default ContentTop;
