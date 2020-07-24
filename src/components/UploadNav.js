import React from "react";
import cn from "classnames";

const UploadNav = ({ step }) => {
  const steps = ["Upload", "Name", "Name"];

  const Circle = ({ visited }) => (
    <svg
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      className={visited ? "visited" : ""}
    >
      <defs>
        <linearGradient id="paint_linear">
          <stop stopColor="#fdd226" />
          <stop offset="1" stopColor="#ff5753" />
        </linearGradient>
      </defs>

      <circle className="outer" cx="10" cy="10" r="8" />
      <circle className="inner" cx="10" cy="10" r={visited ? "5" : "2"} />
    </svg>
  );

  return (
    <div className="uploadnav">
      <div className="uploadnav__links">
        {steps.map((s, i) => (
          <div
            key={i}
            className={cn("uploadnav__link", {
              "uploadnav__link--active": step === i,
            })}
          >
            <Circle visited={step > i} />
          </div>
        ))}
      </div>

      <span className="uploadnav__text">
        {steps[step]} | Step {step + 1} of {steps.length}
      </span>
    </div>
  );
};

export default UploadNav;
