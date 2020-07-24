import React, { useState } from "react";

import Download from "../../images/Download.png";
import Vector from "../../images/Vector.png";
import DeleteNotifications from "../DeleteNotifications";

const DragdropPageContent = () => {
  const [notification, setNotification] = useState(false);

  return (
    <div className="upload__content-inner upload__dragdrop-page">
      <h1 className="upload__heading">Drag & Drop</h1>
      <p className="upload__subheading">
        Drop your .csv file anywhere or{" "}
        <label htmlFor="upload-dataset-input">
          select it from your computer
        </label>
        .
      </p>

      <div className="upload__textblock">
        <div>
          <p>
            <img src={Download} alt="con" />
            Download <a href="/upload">here</a> our .csv template to speed up
            the process.
          </p>
          <p>
            <img src={Vector} alt="icon" />
            Files requirements. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </p>
        </div>
        <div>
          <p>
            <img src={Vector} alt="icon" />
            Template requirements. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit
          </p>
          <p>
            <img src={Vector} alt="icon" />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>

      <button
        className="upload__button upload__button--bordered"
        onClick={() => setNotification(true)}
      >
        Cancel upload
      </button>
      {notification && (
        <DeleteNotifications setNotification={setNotification} />
      )}
    </div>
  );
};

export default DragdropPageContent;
