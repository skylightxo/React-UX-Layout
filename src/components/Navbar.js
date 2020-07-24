import React, { useEffect, useRef } from "react";
import { NavLink, useHistory } from "react-router-dom";

const Navbar = () => {
  const history = useHistory();
  const navbar = useRef(null);

  const adjustUnderlinePosition = (activeLink, navNode, show) => {
    if (!activeLink) {
      return;
    }

    // calculate new width
    const width = activeLink.offsetWidth;

    // calculate new position
    const { left: navOffset } = navNode.getBoundingClientRect();
    const { left: linkOffset } = activeLink.getBoundingClientRect();
    const offset = linkOffset - navOffset + width / 2;

    // change styles
    navNode.style.setProperty("--underline-offset", `${offset}px`);
    navNode.style.setProperty("--underline-width", `${width}px`);

    if (show) {
      navNode.style.setProperty("--underline-display", `block`);
    }
  };

  useEffect(() => {
    if (navbar.current) {
      const { current: navNode } = navbar;
      adjustUnderlinePosition(
        navNode.querySelector("a.nav-item--active"),
        navNode,
        true
      );
    }
  }, [navbar]);

  useEffect(() => {
    let unlisten;

    if (navbar.current) {
      const { current: navNode } = navbar;
      // get all navbar links
      const links = Array.from(navNode.children).map(
        (child) => child.children[0]
      );

      unlisten = history.listen((location) => {
        // get link that just became active
        const activeLink = links.find(
          (l) => l.getAttribute("href") === location.pathname
        );
        adjustUnderlinePosition(activeLink, navNode);
      });
    }

    return unlisten;
  }, [history, navbar]);

  return (
    <nav className="navbar">
      <ul className="navbar-nav" ref={navbar}>
        <li>
          <NavLink
            activeClassName="nav-item--active"
            className="nav-item"
            to="/project/home"
            exact
          >
            <span style={{ lineHeight: "100%" }}>Project Home</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            activeClassName="nav-item--active"
            className="nav-item"
            to="/project/quality"
          >
            <span>Quality</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            activeClassName="nav-item--active"
            className="nav-item"
            to="/project/enrichment"
          >
            <span>Enrichment</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            activeClassName="nav-item--active"
            className="nav-item"
            to="/project/model"
          >
            <span>Model Execution</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            activeClassName="nav-item--active"
            className="nav-item"
            to="/project/business"
          >
            <span>Business Case</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            activeClassName="nav-item--active"
            className="nav-item"
            to="/project/simulation"
          >
            <span>Simulation</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
