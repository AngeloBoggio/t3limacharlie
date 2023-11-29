import React, { useRef } from "react";

type ResourceCardProps = {
  title: string;
  children: React.ReactNode; // ReactNode is a type that can represent any valid React child, such as HTML elements, strings, or other React components.
};

const ResourceCard: React.FC<ResourceCardProps> = ({ title, children }) => (
  <div className="mr-4 w-60 flex-none rounded-lg bg-red-800 p-4 text-center text-white shadow-lg">
    <h3 className="mb-2 text-lg font-bold">{title}</h3>
    {children}
  </div>
);

const LocalResourcesSection = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (scrollOffset: number) => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += scrollOffset;
    }
  };

  return (
    <section className="bg-primary">
      <div className="flex justify-center p-20">
        <div className="max-w-9xl rounded-lg bg-red-200 p-10">
          <h2 className="mb-6 text-center text-7xl font-bold">
            Local Resources
          </h2>
          <p className="mb-8 text-center text-xl">
            In Solidarity with Lahaina: Resources for Support
          </p>
          <div className="flex justify-center">
            <div className="max-w-3xl text-xl">
              <p>
                If you are a local or a survivor of the Lahaina fires, our
                hearts go out to you during this challenging time, and we
                sincerely hope that you and your loved ones are safe and
                supported...
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="max-w-8xl relative flex items-center">
          <button
            onClick={() => scroll(-200)}
            className="absolute left-0 z-10 rounded-r bg-black px-4 py-2 font-bold text-white hover:bg-gray-600"
          >
            &#10094;
          </button>
          <div
            ref={carouselRef}
            className="scrollbar-hide flex space-x-4 overflow-x-scroll"
          >
            <ResourceCard title="FEMA">
              <p>
                Click here to Register for FEMA Assistance and find out more
                about the Housing Programs Available
              </p>
            </ResourceCard>
            <ResourceCard title="Red Cross">
              <p>
                American Red Cross of Hawaii - Red Cross Response in Hawaii
                Wildfires
              </p>
            </ResourceCard>
            <ResourceCard title="Maui Rapid Response">
              <p>
                Get help or offer support for those impacted by the Maui
                wildfires
              </p>
            </ResourceCard>
            <ResourceCard title="Maui Hale Match">
              <p>
                Connecting Hawaiʻi homeowners to displaced Maui locals, A
                community resource for long-term housing
              </p>
            </ResourceCard>
            <ResourceCard title="Maui Food Bank">
              <p>
                With every $1 donated, the Maui Food Bank can provide 4 meals to
                the hungry living in the community
              </p>
            </ResourceCard>
            <ResourceCard title="Fire Relief Housing">
              <p>
                For Hawaii homeowners willing to assist by offering unoccupied
                rooms, units or houses on a temporary basis
              </p>
            </ResourceCard>
            <ResourceCard title="People's Fund of Maui">
              <p>Donate directly to those who have lost their home</p>
            </ResourceCard>
            <ResourceCard title="Maui Strong Fund">
              <p>
                Donate through Hawaii Community Foundation’s Maui Strong Fund
              </p>
            </ResourceCard>
            <ResourceCard title="Kokau Maui Trees">
              <p>
                100% of Kokua Maui Tess proceeds will be donated to Maui disater
                relief
              </p>
            </ResourceCard>
            <ResourceCard title="Hawaii News Now">
              <p>
                Updated information about the Maui Wildfires Disaster and ways
                to help
              </p>
            </ResourceCard>
            <ResourceCard title="Maui Humane Society">
              <p>
                Excess funds not needed for wildfire victims will be used for
                future lifesaving efforts for Maui’s homeless animals
              </p>
            </ResourceCard>
            <ResourceCard title="Maui United Way">
              <p>Donate through Maui United Way’s Fire and Disaster Relief</p>
            </ResourceCard>

            {/* Repeat for each ResourceCard */}
          </div>
          <button
            onClick={() => scroll(200)}
            className="absolute right-0 z-10 rounded-l bg-black px-4 py-2 font-bold text-white hover:bg-gray-600"
          >
            &#10095;
          </button>
        </div>
      </div>
    </section>
  );
};

export default LocalResourcesSection;
