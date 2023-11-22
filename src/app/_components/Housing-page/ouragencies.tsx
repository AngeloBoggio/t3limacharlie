import React from "react";

export default function Agencies() {
  const logos = [
    "images/fem.png",
    "images/noaa.png",
    "images/DHLS.png",
    "images/DOD.png",
  ];
  return (
    <div className="mb-10">
      <h1 className=" flex justify-center text-4xl">
        Our Top Awarding Agencies
      </h1>
      <div className="grid grid-cols-4 gap-4 p-4">
        {logos.map((logo, index) => (
          <div key={index} className="flex items-center justify-center">
            <img
              src={logo}
              alt={`Logo ${index + 1}`}
              className="h-auto max-w-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
