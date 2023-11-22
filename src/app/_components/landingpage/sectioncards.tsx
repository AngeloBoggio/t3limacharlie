import React from "react";

interface ServiceSectionProps {
  title: string;
  description: string;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({
  title,
  description,
}) => {
  return (
    <div className="flex justify-center">
      <div className="flex max-w-3xl flex-col">
        <h2 className="flex justify-center text-2xl font-bold text-red-600">
          {title}
        </h2>
        <p className="mb-10 mt-2 flex justify-center text-xl text-gray-600">
          {description}
        </p>
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
    },
    {
      title: "Hotel Accommodations",
      description:
        "Based on our extensive network, we provide economical and luxurious hotel rooms that are based worldwide.",
    },
    {
      title: "Emergency Response",
      description:
        "When it comes to an emergency, we always attempt to be the 1st to respond, bringing fast and effective solutions for displaced individuals and companies.",
    },
    {
      title: "Facility Management",
      description:
        "Whether it’s a residential property or an industrial site, we have the capability to mantain and manage the property so you won’t have to.",
    },

    // ... other services
  ];

  return (
    <div className="container mx-auto mb-10 flex flex-col justify-center">
      <h1 className="mb-10 flex justify-center text-5xl font-bold">
        What We Provide
      </h1>
      {services.map((service, index) => (
        <ServiceSection key={index} {...service} />
      ))}
    </div>
  );
};

export default ServicesList;
