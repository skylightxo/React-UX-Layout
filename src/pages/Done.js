import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";

import Icon from "../images/Icon.png";
import Process2 from "../images/Process2.png";

const DragDrop = () => {
  return (
    <div className="content drag__drop__content">
      <div className="drag__drop content__inner">
        <Navbar />
        <div className="content__scrollable">
          <NavLink to="/home">
            <img className="drag__drop_img" src={Icon} alt="" />
          </NavLink>
          <div>
            <h2 className="dataset">Dataset lorem ipsum 01</h2>
          </div>
          <p className="last">Give it a name which identifies the dataset.</p>

          <NavLink to="/done">
            <button className="shorttable__button upload" type="button">
              <span>Continue</span>
            </button>
          </NavLink>
        </div>
        <div className="footer">
          <img className="rop_img" src={Process2} alt="" />
        </div>
      </div>

      {/* <div className="block">
        <div className="block__text"></div>
      </div> */}
    </div>
  );
};

export default DragDrop;
