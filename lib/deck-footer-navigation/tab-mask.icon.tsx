import React from "react";

export const TabMaskIcon: React.FC<{}> = () => (
  <svg width={"4rem"} height={"1.5rem"}>
    <defs>
      <mask id="mask-tab">
        <svg viewBox="0 0 40 15" xmlns="http://www.w3.org/2000/svg">
          <path d="M 0 0 C 5 0 5 2 6 5 A 15 15 0 0 0 34 5 C 35 2 35 0 40 0 Z" fill="black" />
        </svg>
      </mask>
      <mask id="mask-outer" maskContentUnits="objectBoundingBox">
        <rect x="0" y="0" width="1" height="1"></rect>
      </mask>
    </defs>
  </svg>
);
