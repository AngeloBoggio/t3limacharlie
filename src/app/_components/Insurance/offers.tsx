import React, { ReactElement } from "react";

interface ServiceCardProps {
  icon: ReactElement;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className="flex flex-col items-center rounded-lg  p-4">
      <div className="text-3xl">{icon}</div>
      <h2 className="mb-4 mt-2 text-lg font-semibold">{title}</h2>
      <p className="text-center text-sm">{description}</p>
    </div>
  );
};

const ServicesLayout = () => {
  const services = [
    {
      icon: <img src="images/services1.png" alt="Real Estate Icon" />, // Use an img element for the icon
      title: "Leave the heavy lifting to us",
      description:
        "We will work together with the insurance agency to make the housing process a breeze. Dealing with insurance can be overwhelming, let us take care of it.",
    },
    {
      icon: <img src="images/services2.png" alt="Real Estate Icon" />, // Use an img element for the icon
      title: "Nationwide Database",
      description:
        "We offer a large catalog of housing solutions, in all shapes and sizes. Our team of experts are eager to assist you wherever you are. We constantly work with insurance carriers to integrate with their systems. ",
    },
    {
      icon: <img src="images/services3.png" alt="Real Estate Icon" />, // Use an img element for the icon
      title: "No Surprise Fees",
      description:
        "We have your best interest in mind. We are a company that is straight forward and do not hide any of our fees.  Let us show you the difference. ",
    },
    {
      icon: <img src="images/services4.png" alt="Real Estate Icon" />, // Use an img element for the icon
      title: "We Love Pets!",
      description:
        "We understand pets are a part of the family too and we are happy to accommodate. We will do our best to find the right place for all your family, including your pets.",
    },
  ];

  return (
    <div className="col-4 flex items-center justify-around">
      {services.map((service, index) => (
        <ServiceCard key={service.title} {...service} /> // Use unique title as key if possible
      ))}
    </div>
  );
};

export default ServicesLayout;
