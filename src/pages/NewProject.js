import React from "react";
import { NavLink } from "react-router-dom";

import PreHeader from "../components/PreHeader";
import NewProjectTable from "../components/NewProjectTable";

const newProject = () => {
  return (
    <>
      <PreHeader />
      <div className="projects newproject">
        <div className="bordered">
          <div className="bordered__heading">
            Datasets in this project
            <NavLink to="/upload">
              <button
                className="shorttable__button newprojectbutton"
                type="button"
              >
                Upload dataset
              </button>
            </NavLink>
          </div>

          <NewProjectTable />
        </div>
      </div>
    </>
  );
};

export default newProject;
