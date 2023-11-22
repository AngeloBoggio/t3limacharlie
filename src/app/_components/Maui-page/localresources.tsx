import React, { ReactNode } from "react";

type ResourceCardProps = {
  title: string;
  children: ReactNode; // ReactNode is a type that can represent any valid React child, such as HTML elements, strings, or other React components.
};

const ResourceCard: React.FC<ResourceCardProps> = ({ title, children }) => (
  <div className="rounded-lg bg-red-800 p-4 text-center text-white shadow">
    <h3 className="mb-2 text-lg font-bold">{title}</h3>
    {children}
  </div>
);

const LocalResourcesSection = () => {
  return (
    <section className="bg-primary p-6">
      <h2 className="mb-6 text-center text-3xl font-bold">Local Resources</h2>
      <p className="mb-6 text-center">
        In Solidarity with Lahaina: Resources for Support
      </p>
      <p>
        If you are a local or a survivor of the Lahaina fires, our hearts go out
        to you during this challenging time, and we sincerely hope that you and
        your loved ones are safe and supported. If you find yourself in need of
        housing assistance or any other form of support, please refer to the
        resources below. We are here to assist you in navigating the available
        avenues for help and stand united in facing the aftermath of the Lahaina
        fires. Your well-being is our priority, and we extend our hand to help
        you rebuild and recover.
      </p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <ResourceCard title="FEMA">
          <p>
            Click here to Register for FEMA Assistance and find out more about
            the Housing Programs Available
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
            Get help or offer support for those impacted by the Maui wildfires
          </p>
        </ResourceCard>
        <ResourceCard title="Maui Hale Match">
          <p>
            Connecting Hawaiʻi homeowners to displaced Maui locals, A community
            resource for long-term housing
          </p>
        </ResourceCard>
        <ResourceCard title="Maui Food Bank">
          <p>
            With every $1 donated, the Maui Food Bank can provide 4 meals to the
            hungry living in the community
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
          <p>Donate through Hawaii Community Foundation’s Maui Strong Fund</p>
        </ResourceCard>
        <ResourceCard title="Kokau Maui Trees">
          <p>
            100% of Kokua Maui Tess proceeds will be donated to Maui disater
            relief
          </p>
        </ResourceCard>
        <ResourceCard title="Hawaii News Now">
          <p>
            Updated information about the Maui Wildfires Disaster and ways to
            help
          </p>
        </ResourceCard>
        <ResourceCard title="Maui Humane Society">
          <p>
            Excess funds not needed for wildfire victims will be used for future
            lifesaving efforts for Maui’s homeless animals
          </p>
        </ResourceCard>
        <ResourceCard title="Maui United Way">
          <p>Donate through Maui United Way’s Fire and Disaster Relief</p>
        </ResourceCard>
      </div>
    </section>
  );
};

export default LocalResourcesSection;
