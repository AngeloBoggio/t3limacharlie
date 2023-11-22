import React from "react";

type ServiceItem = {
  title: string;
  description: string;
  imageUrl: string;
};

const servicesData: ServiceItem[] = [
  {
    title: "Wherever you are",
    description:
      "We offer a large catalog of housing solutions, in all shapes and sizes, in most major cities. Our team of experts are eager to assist you wherever you are.",
    imageUrl: "images/profHousing1.jpg",
  },
  {
    title: "Feel at home",
    description:
      "We provide our costumers with comfortable and functional livable spaces. We want you to enjoy your stay at all times and enjoy hearing how we can add more value to you.",
    imageUrl: "/images/profHousing2.jpg",
  },
  {
    title: "Enjoy yourself",
    description:
      "Our units are equipped with amenities such as smart TVs, gift and toiletry baskets, as well as suggestions for the local area to meet your mood for the day or night.",
    imageUrl: "images/profHousing3.jpg",
  },
  {
    title: "Special Requests",
    description:
      "If there is something we can do for you during your stay, let us know! Cribs, strollers, wheelchairs, high chairs, or anything else you might need during your stay, we will work with you to make sure you get it.",
    imageUrl: "/images/profHousing4.jpg",
  },
];

const ServiceCard: React.FC<ServiceItem> = ({
  title,
  description,
  imageUrl,
}) => {
  return (
    <div className="flex flex-col items-center bg-white">
      <img
        src={imageUrl}
        alt={title}
        className="mb-4 h-48 w-full object-cover"
      />
      <h2 className="mb-2 flex justify-center text-xl font-bold text-red-600">
        {title}
      </h2>
      <p className="text-center">{description}</p>
    </div>
  );
};

const ServicesGrid: React.FC = () => {
  return (
    <div className="container mx-auto bg-gray-100 p-6">
      <div className="grid grid-cols-4 gap-4 md:grid-cols-4">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default ServicesGrid;
