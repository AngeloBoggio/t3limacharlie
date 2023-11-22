import React from "react";

interface GuamServicesProps {
  title: string;
  description: string;
  subdescription: string;
}

const ServiceSection: React.FC<GuamServicesProps> = ({
  title,
  description,
  subdescription,
}) => {
  return (
    <div className="my-6">
      <h2 className="text-xl font-bold text-red-600">{title}</h2>
      <p className="mt-2 text-base text-gray-600">{description}</p>
      <p className="mt-2 text-base text-gray-600">{subdescription}</p>
    </div>
  );
};

const GuamOps: React.FC = () => {
  const services = [
    {
      title: "Support Your Community",
      description:
        "Our partnership goes beyond the financial aspect. By leasing to us, you actively contribute to the larger mission of community rebuilding. Your property becomes a safe haven for families and individuals striving to regain stability in the face of disaster. It's a unique Opportunity to make a lasting impact while maintaing the financial health of your property.",
      subdescription:
        "Join us in this win-win collaboration that combines financial security with the satisfaction of knowing that you are playing a vital role in helping communities rebuild and thrive. Your properties can be more than just assets; they can be a beacon of hope for those who need it most.",
    },
    {
      title: "Unwavering Commitment to helping communities rebuild",
      description:
        "At Lima Charlie Inc, our mission is not bound by geography or circumstance. We stand resolute in our dedication to aiding communities in their path to recory after natural disasters.",
      subdescription:
        "From the heart of Hawaii to the shores of Guam and beyond, our commitment to providing safe, secure housing remains steadfast. No disaster is too great, no location is too remote; we are there, side by side with FEMA, ready to assist, house, and rebuild communities in their time of need.",
    },
    {
      title: "Win-Win Collaboration: 12-24 Month Leases at Market Rates",
      description:
        "Lima Charlie Inc offers a win-win partnership that not only preserves your rental income but also allows you to be a part of community rebuilding.",
      subdescription:
        "When you lease your properties to us, you can enjoy the benefits of stable, long-term income. Rest Assured, your rental income remains intact, ensuring a steady cash flow for your property.",
    },
    {
      title: "We are backed by FEMA",
      description:
        "We've stood as a reliable housing solutions provider to FEMA and communities nationwide for years. Our portfolio of successful projects span across six states, including Hawaii, where we've played a pivotal role in restoring normalcy to disaster-affected areas.",
      subdescription:
        "Our association with FEMA empowers us to respond swiftly and effectively to natural disasters, wherever they may occur. It provides us with valuable resources, expertise, and a coordinated approach that ensures seamless assistance to those in need. This partnership not only amplifies our reach but also magnifies our impact. Together, we create a formidable force.",
    },
    {
      title: "Our Successful Ventures",
      description:
        "Since our inception, Lima Charlie Inc has been at the forefront of disaster recory housing, driven by our unwavering commitment to helping communiteis in their most vulnerable moments. Our history is a tale of continuous growth, experience, and a deep sense of purpose",
      subdescription:
        "Our extensive experience in managing hundreds of properties showcases our competence in navigating the complexities of disaster recovery house. Every project has been a unique opportunity to make a difference, and every community we've touched has been a testament to our ability to rebuild, restore, and renew.",
    },

    // ... other services
  ];

  return (
    <div className="container mx-auto px-4">
      <h1 className="flex justify-center text-3xl">Why Lima Charlie</h1>
      {services.map((service, index) => (
        <ServiceSection key={index} {...service} />
      ))}
    </div>
  );
};

export default GuamOps;
