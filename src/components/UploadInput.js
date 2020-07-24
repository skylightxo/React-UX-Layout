import React, { useState } from "react";
import cn from "classnames";

import UploadImg from "../images/upload.svg";

const UploadInput = ({ onLoadingStart }) => {
  const [inputState, setInputState] = useState({
    draggingOver: false,
    loading: false,
    done: false,
  });

  const start = () => {
    setInputState({ ...inputState, draggingOver: false, loading: true });
    onLoadingStart();

    setTimeout(() => {
      setInputState({ ...inputState, done: true });
    }, 3000);
  };

  return (
    <div
      className={cn("upload__file-input", {
        "upload__file-input--drag": inputState.draggingOver,
        "upload__file-input--loading": inputState.loading,
        "upload__file-input--done": inputState.done,
      })}
      onDragOver={() => {
        setInputState({ draggingOver: true, loading: false, done: false });
      }}
      onDragLeave={() => {
        setInputState({ ...inputState, draggingOver: false });
      }}
      onDrop={start}
      onChange={start}
    >
      <input
        type="file"
        title=""
        className="upload__drop-here"
        id="upload-dataset-input"
      />
      <div className="upload__text upload__text--drop">
        <img src={UploadImg} alt="upload" />
      </div>
      <div className="upload__text upload__text--upload">uploading</div>
      <svg className="upload__progress" width="200" height="200">
        <circle
          className="upload__progress-indicator"
          r="95"
          cx="100"
          cy="100"
        />
      </svg>
      <svg className="upload__check" width="130" height="130">
        <polyline
          className="upload__check-indicator"
          points="100.2,40.2 51.5,88.8 29.8,67.5 "
        />
      </svg>
      <div className="upload__shadow"></div>
    </div>
  );
};

export default UploadInput;
