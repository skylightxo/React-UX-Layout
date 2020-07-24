import React from "react";
import { NavLink } from "react-router-dom";

const DonePageContent = ({ datasetName }) => {
  return (
    <>
      <div>
        <h2 className="upload__dataset-name">
          {datasetName || "No name selected"}
        </h2>
      </div>
      <p>Give it a name which identifies the dataset.</p>

      <NavLink to="/project/home">
        <button
          className="upload__button upload__button--emphasised"
          type="button"
        >
          <span>Continue</span>
        </button>
      </NavLink>
    </>
  );
};

export default DonePageContent;
