import React from "react";

const UploadPageContent = ({ datasetName, setDatasetName, setStep }) => {
  return (
    <div className="upload__content-inner upload__upload-page">
      <input
        className="upload__dataset-name-input"
        placeholder="Enter dataset name"
        value={datasetName}
        onChange={({ target }) => setDatasetName(target.value)}
      />

      <p>Give it a name which identifies the dataset.</p>
      <p>It will help you in the future to find it.</p>

      <div className="upload__buttons">
        <button
          className="upload__button upload__button--bordered"
          type="button"
        >
          Cancel upload
        </button>

        <button
          className="upload__button upload__button--emphasised"
          type="button"
          onClick={() => setStep(2)}
        >
          Save name &amp; continue
        </button>
      </div>
    </div>
  );
};

export default UploadPageContent;
