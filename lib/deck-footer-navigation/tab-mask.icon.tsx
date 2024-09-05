import React from "react";

export const TabMaskIcon: React.FC<{}> = () => (
  <svg width={0} height={0}>
    <defs>
      <mask id="mask-tab">
        <svg width="5rem" height="1.5rem" viewBox="0.5 0 3 1" xmlns="http://www.w3.org/2000/svg">
          <path d="M 0.5 -0.5 A 1.5 1.5 0 0 1 1.5 0.15 A 1.5 1.5 0 0 0 2 0.25 L 2 -0.5 Z" fill="none" stroke="black" />

          <path d="M 3.5 -0.5 A 1.5 1.5 0 0 0 2.5 0.15 A 1.5 1.5 0 0 1 2 0.25 L 2 -0.5 Z" fill="none" stroke="black" />
          <circle r="1" cx="2" />
        </svg>
      </mask>
      <mask id="mask-outer" maskContentUnits="objectBoundingBox">
        <rect x="0" y="0" width="1" height="1"></rect>
      </mask>
    </defs>
  </svg>
);
