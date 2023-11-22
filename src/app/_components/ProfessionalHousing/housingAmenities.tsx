import React, { useState } from "react";
import Accordion from "./accordian";
import ContactForm from "../landingpage/customform";

type AmenityItem = {
  section: string;
  imageUrl: string;
  dropdowns: {
    title: string;
    content: string;
  }[];
};

const AmenityCard: React.FC<AmenityItem> = ({
  section,
  imageUrl,
  dropdowns,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center rounded-lg bg-white p-4 shadow-lg">
      <img
        src={imageUrl}
        alt={section}
        className="mb-4 h-48 w-full rounded-lg object-cover"
      />
      <h3 className="mb-4 text-xl font-semibold">{section}</h3>
      {dropdowns.map((dropdown, index) => (
        <React.Fragment key={index}>
          <div className="w-full">
            <button
              type="button"
              className="flex w-full items-center justify-between rounded-t-xl border border-b-0 border-gray-200 p-5 text-left font-medium text-gray-500 hover:bg-blue-100 focus:ring-4 focus:ring-blue-200 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:focus:ring-blue-800"
              onClick={() => toggleDropdown(index)}
              aria-expanded={openIndex === index}
              aria-controls={`section-content-${index}`}
            >
              <span>{dropdown.title}</span>
              <svg
                data-accordion-icon
                className={`h-6 w-6 transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              id={`section-content-${index}`}
              className={`transition-max-height overflow-hidden duration-500 ease-in-out ${
                openIndex === index ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="border border-t-0 border-gray-200 p-5 dark:border-gray-700">
                <p className="text-gray-500 dark:text-gray-400">
                  {dropdown.content}
                </p>
              </div>
            </div>
          </div>
          {index < dropdowns.length - 1 && (
            <hr className="w-full border-gray-200" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

const AmenitiesGrid: React.FC = () => {
  const amenitiesData: AmenityItem[] = [
    {
      section: "Kitchen",
      imageUrl: "path-to-your-kitchen-image.jpg", // Replace with your image path
      dropdowns: [
        {
          title: "Fully Equipped Kitchen",
          content:
            "Kitchens ready to use with all modern appliances and cookware.",
        },
        {
          title: "Grocery Store Locating",
          content:
            "Helping you find the nearest grocery stores for your convenience.",
        },
      ],
    },
    {
      section: "Living Spaces",
      imageUrl: "path-to-your-living-room-image.jpg", // Replace with your image path
      dropdowns: [
        {
          title: "Streaming Services",
          content:
            "Smart TVs with subscriptions to leading streaming services.",
        },
        {
          title: "Our Treat!",
          content:
            "Complimentary welcome basket with treats and local delicacies.",
        },
      ],
    },
    // Add more amenities as needed
  ];

  return (
    <div className="container mx-auto p-6">
      <h2 className="mb-10 text-center text-3xl font-bold">OUR AMENITIES</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div>
          <img src="images/kitchen.jpg"></img>
          <div>
            <h1 className="flex justify-center">Kitchen</h1>
            <Accordion
              title="Fully Equiped Kitchen"
              children="The kitchens in our units are ready to use. We provide a fridge, microwave, toaster, blender and coffee machines. Also, you will be provided with  kitchenware, cutlery, and a cleaning kit."
            />
            <Accordion
              title="Grocery Store Locating"
              children="Looking for the closest store from your location? Let us help you locate it and even call them to get your questions answered."
            />
          </div>
        </div>
        <div>
          <img src="images/livingspaces.jpg"></img>
          <div>
            <h1 className="flex justify-center">Living Spaces</h1>
            <Accordion
              title="Streaming Services"
              children="Enjoy a cozy night watching your favorite shows and films. We always provide smart TVs in our homes so you can never miss your favorite shows while away."
            />
            <Accordion
              title="Our Treat!"
              children="Enjoy the welcome basket included in your stay with some treats from our family to yours!"
            />
          </div>
        </div>
        <div>
          <img src="images/otherservices.jpg"></img>
          <div>
            <h1 className="flex justify-center">Other Services</h1>
            <Accordion
              title="Don't worry about cleaning"
              children="We can have someone over in no time and at no additional cost to you. And don’t worry, we won’t have you clean on your way out either. "
            />
            <Accordion
              title="Laundry and Dry Cleaning"
              children="All our units are equipped with their own washer and dryer units. If you require any additional dry cleaning services, get in touch with us and we will help you locate our preferred vendors for you. "
            />
          </div>
        </div>
      </div>
      <ContactForm />
    </div>
  );
};

export default AmenitiesGrid;
