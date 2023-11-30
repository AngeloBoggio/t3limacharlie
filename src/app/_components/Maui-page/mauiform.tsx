import React from "react";
import GetStarted from "./getstarted";

const MauiContactForm = () => {
  // Function to handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Process form submission here
    // You'll need to implement this logic
  };

  return (
    <section className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-center text-center">
          <h2 className="text-6xl font-bold">Ready to get started?</h2>
        </div>
        <GetStarted />

        <div className="flex justify-center">
          <div className="flex max-w-3xl justify-center">
            <form
              onSubmit={handleSubmit}
              className=" mx-auto mt-10 rounded bg-gray-200 p-20  shadow-2xl"
            >
              <h3 className="mb-4 text-center text-7xl font-semibold">
                Property Submission Form
              </h3>
              <p className="mb-4 flex justify-center text-lg">
                Please leave your information and one of our experts will get in
                touch with you shortly.
              </p>
              {/* Form fields */}
              <div className="mb-4">
                <label htmlFor="propertyType" className="mb-2 block">
                  Property Type (Required)
                </label>
                <select
                  id="propertyType"
                  className="w-full rounded border-gray-300"
                >
                  <option value=""></option>
                  <option value="apartment">Apartment</option>
                  <option value="house">House</option>
                  <option value="studio">Studio</option>
                  <option value="hotel">Hotel</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="propertyType" className="mb-2 block">
                  Number of Units (Required)
                </label>
                <select
                  id="propertyType"
                  className="w-full rounded border-gray-300"
                >
                  <option value="1">1</option>
                  <option value="2-5">2-5</option>
                  <option value="10-20">10-20</option>
                  <option value="morethan20">More Than 20</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="propertyType" className="mb-2 block">
                  Location (Required)
                </label>
                <select
                  id="propertyType"
                  className="w-full rounded border-gray-300"
                >
                  <option value="maui">Maui Island</option>
                  <option value="mauicounty">Maui County</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="firstName" className="mb-2 block">
                  Name (required)
                </label>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    id="firstName"
                    placeholder="First Name"
                    className="flex-1 rounded border-gray-300"
                    required
                  />
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Last Name"
                    className="flex-1 rounded border-gray-300"
                    required
                  />
                </div>
              </div>

              <div className="flex-col-3 flex gap-10">
                <div className="mb-4">
                  <label htmlFor="propertyType" className="mb-2 block">
                    Email (Required)
                  </label>
                  <input
                    type="text"
                    id="email"
                    placeholder="Email"
                    className="flex-1 rounded border-gray-300"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="propertyType" className="mb-2 block">
                    Phone Number (Required)
                  </label>
                  <input
                    type="text"
                    id="phone"
                    placeholder="Phone Number"
                    className="flex-1 rounded border-gray-300"
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="mb-2 block">
                  Message (Required)
                </label>
                <textarea
                  id="message"
                  className="w-full rounded border-gray-300"
                  required
                >
                  {/* User message goes here */}
                </textarea>
              </div>
              {/* Add more form fields as per the design */}
              <button
                type="submit"
                className="w-full rounded bg-red-600 px-4 py-2 text-white transition-colors hover:bg-red-700"
              >
                Submit
              </button>
              <div className="font-italic mt-20 flex justify-center">
                <div className="max-w-md">
                  <h1>Lima charlie inc is endorsed by MauiHaleMatch.org</h1>
                  <div className="mt-2">
                    <h1>
                      If the FEMA Housing Mission isn’t for you but you still
                      want to support your community, please visit
                      MauiHaleMatch.org
                    </h1>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MauiContactForm;
