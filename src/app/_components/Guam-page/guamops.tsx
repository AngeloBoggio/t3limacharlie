// ... other resources
import React, { useRef, useEffect } from "react";

interface ResourceProps {
  image: string;
  title: string;
  description: string;
}

const ResourceCard: React.FC<ResourceProps> = ({
  image,
  title,
  description,
}) => {
  // Adjust the card width here to ensure they fit nicely within the container
  return (
    <div
      className="mx-2 mb-2 flex-none overflow-hidden rounded-lg bg-white shadow"
      style={{ width: "calc(100% / 3 - 1rem)" }}
    >
      <img src={image} alt={title} className="h-56 w-full object-cover" />
      <div className="p-4">
        <h2 className="mb-2 text-xl font-semibold">{title}</h2>
        <p className="text-base">{description}</p>
      </div>
    </div>
  );
};

const ResourceSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const resources = [
    {
      image:
        "https://via.placeholder.com/360x200.png?text=Community+Rebuilding",
      title: "Unwavering Commitment to Helping Communities Rebuild",
      description:
        "At Lima Charlie Inc, our mission is not bound by geography or circumstance. We stand resolute in our dedication to aiding communities in their path to recovery after natural disasters. Our commitment to providing safe, secure housing remains steadfast.",
    },
    {
      image: "https://via.placeholder.com/360x200.png?text=Market+Rate+Leases",
      title: "Win-Win Collaboration: 12–24 Month Leases at Market Rates",
      description:
        "Lima Charlie Inc offers a win-win partnership that not only preserves your rental income but also allows you to be a part of community rebuilding. Enjoy the benefits of stable, long-term income with our flexible leasing options.",
    },
    {
      image: "https://via.placeholder.com/360x200.png?text=FEMA+Backed",
      title: "We are backed by FEMA",
      description:
        "We've stood as a reliable housing solutions provider to FEMA and communities nationwide for years. Our association with FEMA empowers us to respond swiftly and effectively to natural disasters, providing valuable resources and expertise.",
    },
    {
      image: "https://via.placeholder.com/360x200.png?text=Safe+Housing",
      title: "Ensuring Safe and Secure Housing Solutions",
      description:
        "Our properties are more than just assets; they are a beacon of hope. We ensure that each home is not only a structure but also a secure and welcoming space for those who need it most.",
    },
    {
      image: "https://via.placeholder.com/360x200.png?text=Infrastructure",
      title: "Infrastructure Development and Support",
      description:
        "We go beyond housing; our projects also encompass infrastructure development, supporting the foundation for community growth and prosperity.",
    },
  ];
  const clonedResources = [...resources, ...resources];

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const totalWidth = scrollContainer?.scrollWidth;
    let requestAnimationId: number;

    // Helper function to scroll
    const scroll = () => {
      if (scrollContainer) {
        // If we've reached the end of the container, reset to start
        if (scrollContainer.scrollLeft >= totalWidth! / 2) {
          scrollContainer.scrollLeft = 0;
        }
        // Otherwise, continue scrolling
        scrollContainer.scrollLeft += 1;
      }
      requestAnimationId = requestAnimationFrame(scroll);
    };

    // Start scrolling
    requestAnimationId = requestAnimationFrame(scroll);

    return () => {
      // Cancel the animation frame on cleanup
      cancelAnimationFrame(requestAnimationId);
    };
  }, []);

  return (
    <div className="container mx-auto mb-20 max-w-full">
      <h1 className="mb-7 text-center text-5xl font-bold">What We Provide</h1>
      <div
        ref={scrollContainerRef}
        className="scrollbar-hide flex overflow-x-auto"
      >
        {/* Duplicate the resources twice for a seamless transition */}
        {[...resources, ...resources].map((resource, index) => (
          <ResourceCard key={index} {...resource} />
        ))}
      </div>
    </div>
  );
};

export default ResourceSection;
