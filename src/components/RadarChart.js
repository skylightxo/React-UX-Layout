import React, { useEffect, useState, useRef } from "react";
import RadarChart from "react-svg-radar-chart";
import "react-svg-radar-chart/build/css/index.css";

const Radar = () => {
  const [tooltip, setTooltip] = useState(null);
  const radar = useRef(null);

  // position will be calculated relative to radar container
  const mousePosition = useRef(null);

  useEffect(() => {
    if (!radar.current) {
      return;
    }

    const handleMouseMove = ({ pageX, pageY }) => {
      const { top, left } = radar.current.getBoundingClientRect();
      mousePosition.current = {
        x: pageX - left,
        y: pageY - top,
      };
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mousePosition, radar]);

  const noSmoothing = (points) => {
    var SVGPath = "";
    points.push(points[0]);

    for (var i = 0; i < points.length; i++) {
      if (i === 0) {
        SVGPath += "M" + points[i][0] + " " + points[i][1];
      } else {
        var current, previous, next;
        current = points[i];
        previous = points[i - 1];
        if (i < points.length - 1) {
          next = points[i + 1];
        } else {
          next = points[0];
        }
        var quota = 0.1;
        var median = [
          (-current[0] * quota) / (1 + quota),
          (-previous[1] * quota) / (1 + quota),
        ];
        SVGPath += "C" + previous[0] + " " + previous[1];
        SVGPath += " " + median[0] + " " + median[1];
        SVGPath += " " + current[0] + " " + current[1];
      }
      SVGPath += " ";
    }
    return SVGPath + "z";
  };

  const data = [
    {
      data: {
        idCheck: 0.7,
        geoCheck: 0.8,
        emailValidation: 0.9,
        phoneValidation: 0.67,
        phoneVerification: 0.4,
      },
      meta: { color: "orange" },
    },
  ];

  const captions = {
    idCheck: "Id check",
    geoCheck: "Geo check",
    emailValidation: "EmailValidation",
    phoneValidation: "Phone Validation",
    phoneVerification: "Phone Verification",
  };

  const Tooltip = ({ x, y }) => {
    return (
      <div
        className="enrichment__radar__tooltip"
        style={{ left: `${x - 30}px`, top: `${y - 60}px` }}
      >
        {tooltip.value}
      </div>
    );
  };

  const options = {
    zoomDistance: 1.5,
    scales: 1,
    axes: true,
    dots: true,
    smoothing: noSmoothing,
    dotProps: () => ({
      className: "dot",
      mouseEnter: (dot) => {
        setTooltip(dot);
      },
      mouseLeave: (dot) => {
        setTooltip(null);
      },
    }),
  };

  return (
    <div className="enrichment__radar" ref={radar}>
      {tooltip ? <Tooltip {...mousePosition.current} /> : null}
      <RadarChart
        options={options}
        captions={captions}
        data={data}
        size={320}
      />
    </div>
  );
};

export default Radar;
