import React from "react";

export const TabMaskIcon: React.FC<{}> = () => (
  <svg width={"4rem"} height={"1.5rem"}>
    <defs>
      <mask id="mask-tab">
        <svg viewBox="0.25 0 3.5 1.5" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M 0 -0.5 A 1 1 0 0 1 1 0 A 1 1 0 0 0 3 0 A 1 1 0 0 1 4 -0.5 V -1 H 0 V -0.5 Z"
            fill="black"
            stroke="black"
          />
        </svg>
      </mask>
      <mask id="mask-outer" maskContentUnits="objectBoundingBox">
        <rect x="0" y="0" width="1" height="1"></rect>
      </mask>
    </defs>
  </svg>
);
