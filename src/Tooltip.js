import React, { useState } from "react";
import "./Tooltip.css";

const Tooltip = (props) => {
  return (
    <div
      className="Tooltip-Wrapper"
      // When to show the tooltip
    >
      {/* Wrapping */}
      {props.children}
      {(
        <div className={`Tooltip-Tip ${props.direction || "top"}`}>
          {/* Content */}
          {props.content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
