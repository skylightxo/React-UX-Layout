import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import Download from "../images/Download.png";
import Vector from "../images/Vector.png";
import Drag from "../images/Drag.png";
import Process from "../images/Process.png";
import DeleteNotifications from "../components/DeleteNotifications";

const DragDrop = () => {
  const [notification, setNotification] = useState(false);

  return (
    <div className="content drag__drop__content">
      <div className="drag__drop content__inner">
        <Navbar />

        <div className="content__scrollable">
          <NavLink to="/upload">
            <img className="drag__drop_img" src={Drag} alt="" />
          </NavLink>
          <h1 className="dd">Drag & Drop</h1>
          <p>
            Drop your .csv file anywhere or{" "}
            <a href="/upload">select it from your computer.</a>
          </p>

          <div className="block">
            <div className="block__text">
              <div className="first textblock">
                <p>
                  <img src={Download} alt="con" />
                  Download <a href="/upload">here </a>our .csv template to speed
                  up the process.
                </p>
                <p>
                  <img className="simg" src={Vector} alt="icon" />
                  Files requirements. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit.
                </p>
              </div>
              <div className="second textblock">
                <p>
                  <img src={Vector} alt="icon" />
                  Template requirements. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit
                </p>
                <p>
                  <img className="simg" src={Vector} alt="icon" />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>

          <div className="cancel__button">
            <button
              className="shorttable__button newprojectbutton cancel"
              style={{ cursor: "pointer" }}
              onClick={() => setNotification(true)}
            >
              Cancel upload
            </button>
            {notification && (
              <DeleteNotifications setNotification={setNotification} />
            )}
          </div>
        </div>

        <div className="footer">
          <img className="rop_img" src={Process} alt="" />
        </div>
      </div>
    </div>
  );
};

export default DragDrop;
