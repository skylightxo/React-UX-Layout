import React, { useState } from "react";

import Navbar from "../components/Navbar";
import UploadNav from "../components/UploadNav";
import UploadInput from "../components/UploadInput";

import DragdropPageContent from "../components/upload/Dragdrop";
import UploadPageContent from "../components/upload/Upload";
import DonePageContent from "../components/upload/Done";

const steps = [DragdropPageContent, UploadPageContent, DonePageContent];

const Upload = () => {
  const [step, setStep] = useState(0);
  const [datasetName, setDatasetName] = useState("");

  const StepComponent = steps[step];

  const onLoadingStart = () => {
    if (step === 0) {
      setStep(1);
    }
  };

  const props = {
    step,
    setStep,
    datasetName,
    setDatasetName,
  };

  return (
    <div className="content upload__content">
      <div className="upload content__inner">
        <Navbar />

        <div className="content__scrollable upload__content-body">
          <UploadInput onLoadingStart={onLoadingStart} />

          <StepComponent {...props} />

          <div className="upload__footer">
            <UploadNav step={step} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
