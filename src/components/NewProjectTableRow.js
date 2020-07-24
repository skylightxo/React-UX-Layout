import React, { useState } from "react";

import DeleteNotifications from "./DeleteNotifications";

const ProjectsTableRow = ({ project }) => {
  const [notification, setNotification] = useState(false);

  const colors = ["orange", "blue", "purple"];

  return (
    <>
      {project.datasets.map((dataset, index) => (
        <tr key={dataset.name}>
          <td>
            <div
              className={`dataset__colorlabel dataset__colorlabel--${colors[index]}`}
            ></div>
            {dataset.name}
          </td>
          <td>{dataset.date}</td>
          <td>{dataset.records}</td>
          <td>{dataset.status}</td>
          <td>{dataset.businessCase}</td>
          <td>{dataset.client}</td>
          <td className="projectstable__dropdown-image">
            <img
              className="icon icon--orange"
              src="/icons/trash-icon.svg"
              alt="trash icon"
              onClick={() => setNotification(true)}
            />

            {notification && (
              <DeleteNotifications setNotification={setNotification} />
            )}
          </td>
        </tr>
      ))}

      <tr style={{ height: "20px" }}></tr>
    </>
  );
};

export default ProjectsTableRow;
