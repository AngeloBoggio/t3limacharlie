import React, { ReactComponentElement } from "react";

interface BenefitSectionProps {
  title: string;
  description: string;
  imageUrl: string; // New property for background image URL
}

const BenefitSection: React.FC<BenefitSectionProps> = ({
  title,
  description,
  imageUrl,
}) => {
  return (
    <div
      className="relative transform overflow-hidden shadow-lg transition duration-300 ease-in-out hover:shadow-none"
      style={{
        height: "400px",
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
          <p className="text-lg text-white">{description}</p>
        </div>
      </div>
    </div>
  );
};

const BenefitsSection = () => {
  const services = [
    {
      title: "Market Rent, No Loss of Rental Income",
      description:
        "When you collaborate with Maui Relief Housing, you can expect to lease your property at fair market rent. We understand that there's no room for charity when it comes to managing your investments. Rest assured that you won't experience any income loss in this partnership. It's a straightforward business arrangement that benefits both parties.",
      imageUrl: "images/profHousing2.jpg",
    },
    {
      title: "Support your Community",
      description:
        "By offering your property to Maui Relief Housing, you are not only ensuring financial stability but also playing a vital role in helping your community recover and thrive. Your property becomes a beacon of hope for those in need, making a real difference and contributing to the well-being of Maui residents. Join us in supporting our community on the journey to recovery.",
      imageUrl: "images/concierge.jpg",
    },
    {
      title: "No Hidden Agendas, Your Property Returns to You",
      description:
        "We want to emphasize that we have no hidden agendas, and we do not seek to purchase your property. At the end of our leasing contract, your property will be returned to you in the same condition as when it was leased. This commitment to transparency and clarity ensures that your investment is protected, and you can have peace of mind throughout the partnership.",
      imageUrl: "images/emergency.jpg",
    },

    // ... other services
  ];
  return (
    <section className="mb-10 mt-10 py-8 text-black">
      <div className="">
        <div className="container mx-auto mb-10 flex flex-col justify-center">
          <div className="flex justify-center">
            <div className="max-w-9xl">
              <h1 className="mb-10 text-5xl font-bold">
                Three Key Benefits of Parterning with Mauii Relief Housing
              </h1>
            </div>
          </div>
          <div className="flex-col-4 flex justify-center gap-20">
            {services.map((service, index) => (
              <BenefitSection key={index} {...service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
