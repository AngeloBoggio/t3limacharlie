import React from "react";
import assistanceData from "/Users/gelo/Developer/t3limacharlie/src/assistance_data.json";

type AssistanceItem = {
  imageUrl: string;
  title: string;
  description: string;
  state: string;
};

const DisasterAssistance: React.FC = () => {
  return (
    <div className="bg-white p-5">
      <h1 className="mb-10 text-center text-4xl font-bold">
        It's an Honor to Be of Service
      </h1>
      {assistanceData.map((item, index) => (
        <div
          key={index}
          className={`flex ${
            index % 2 === 0 ? "flex-row" : "flex-row-reverse"
          } mb-8`}
        >
          <div className="relative w-full md:w-7/12">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="h-full w-full object-cover"
              style={{ minHeight: "400px" }}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-4">
              <h2 className="text-3xl font-bold text-white">{item.title}</h2>
              <span className="text-lg text-white">{item.state}</span>
            </div>
          </div>
          <div className="flex w-full items-center bg-white p-4 text-black md:w-5/12">
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisasterAssistance;
