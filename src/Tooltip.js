import React, { useState } from "react";
import "./Tooltip.css";

const Tooltip = (props) => {
  let timeout;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, props.opendelay);
  };

  const hideTip = () => {
    clearInterval(timeout);
    timeout = setTimeout(() => {
      setActive(false);
    }, props.closedelay);
  };

  return (
    <div
      className="Tooltip-Wrapper"
      // When to show the tooltip
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {/* Wrapping */}
      {props.children}
      {active && (
        <div 
          className={`Tooltip-Tip ${props.direction || "top"} ` + (props.animate ? "Tooltip-Animate" : "")}
          style={{backgroundColor:props.background}}
        >
          {/* Content */}
          {props.content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
