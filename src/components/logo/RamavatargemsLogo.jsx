import React from "react";

const RamavatargemsLogo = ({ width = 300, height = 300, className = "" }) => {
  // Calculate aspect ratio to maintain proportions
  const aspectRatio = 1; // Square aspect ratio for the logo
  const calculatedHeight = height || width / aspectRatio;

  return (
    <img
      src="/images/ramavatargems-logo.svg"
      alt="Ramavatargems Logo"
      width={width}
      height={calculatedHeight}
      className={className}
      style={{ objectFit: "contain" }}
    />
  );
};

export default RamavatargemsLogo;
