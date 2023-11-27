import React, { ReactComponentElement } from "react";

interface ServiceSectionProps {
  title: string;
  description: string;
  imageUrl: string; // New property for background image URL
}

const ServiceSection: React.FC<ServiceSectionProps> = ({
  title,
  description,
  imageUrl,
}) => {
  return (
    <div
      className="relative transform overflow-hidden shadow-lg transition duration-300 ease-in-out hover:shadow-none"
      style={{
        height: "300px",
        width: "100%",
      }}
    >
      {/* Background image with hover effect to clear up */}
      <div
        className="hover:blur-xs absolute inset-0 scale-105 bg-cover bg-center bg-no-repeat blur-sm filter transition duration-300 ease-in-out hover:scale-100"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>

      {/* Initially visible text overlay */}
      <div className="absolute inset-0 flex flex-col justify-end bg-gray-900 bg-opacity-50 p-4 transition duration-300 ease-in-out hover:bg-opacity-0">
        <h2 className="text-4xl font-bold text-white">{title}</h2>
        <div className="mt-5 max-w-2xl">
          <p className="text-xl text-white">{description}</p>
        </div>
      </div>
    </div>
  );
};

const ServicesList: React.FC = () => {
  const services = [
    {
      title: "Temporary Housing",
      description:
        "We provide short, medium and long term housing solutions based on the individual needs of our clients.",
      imageUrl: "images/profHousing2.jpg",
    },
    {
      title: "Hotel Accommodations",
      description:
        "Based on our extensive network, we provide economical and luxurious hotel rooms that are based worldwide.",
      imageUrl: "images/concierge.jpg",
    },
    {
      title: "Emergency Response",
      description:
        "When it comes to an emergency, we always attempt to be the 1st to respond, bringing fast and effective solutions for displaced individuals and companies.",
      imageUrl: "images/emergency.jpg",
    },
    {
      title: "Facility Management",
      description:
        "Whether it’s a residential property or an industrial site, we have the capability to mantain and manage the property so you won’t have to.",
      imageUrl: "images/signaway.png",
    },

    // ... other services
  ];

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto mb-10 flex flex-col justify-center">
        <div className="flex justify-center">
          <div className="max-w-2xl">
            <h1 className="mb-10 text-5xl font-bold">What We Provide</h1>
          </div>
        </div>
        <div className="flex-col-4 flex justify-center gap-20">
          {services.map((service, index) => (
            <ServiceSection key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesList;
