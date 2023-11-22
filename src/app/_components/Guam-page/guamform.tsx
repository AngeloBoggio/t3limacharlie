import React from "react";

const GuamContactForm = () => {
  // Function to handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Process form submission here
    // You'll need to implement this logic
  };

  return (
    <section className="bg-primary py-8">
      <div className="container mx-auto px-4">
        <h2 className="mb-6 text-center text-2xl font-bold">
          Ready to get started?
        </h2>

        {/* Contact Details */}
        <div className="mb-6 flex justify-around">
          <div className="text-center">
            <p className="font-bold">Call us</p>
            <p>(808) 123-4567</p>
          </div>
          <div className="text-center">
            <p className="font-bold">Email us</p>
            <p>operations@limacharlie.com</p>
          </div>
          <div className="text-center">
            <p className="font-bold">Or fill out the form below</p>
            <p>And someone from our team will get in touch soon.</p>
          </div>
        </div>

        {/* Property Submission Form */}
        <form
          onSubmit={handleSubmit}
          className="mx-auto max-w-lg rounded bg-white p-6 shadow-lg"
        >
          <h3 className="mb-4 text-center text-xl font-semibold">
            Property Submission Form
          </h3>
          <p className="mb-4 text-sm">
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
              {/* Options */}
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
              {/* Options */}
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

          <div className="mb-4">
            <label htmlFor="propertyType" className="mb-2 block">
              Email (Required)
            </label>
            <select
              id="propertyType"
              className="w-full rounded border-gray-300"
            >
              {/* Options */}
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="propertyType" className="mb-2 block">
              Phone Number (Required)
            </label>
            <select
              id="propertyType"
              className="w-full rounded border-gray-300"
            >
              {/* Options */}
            </select>
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
        </form>
      </div>
    </section>
  );
};

export default GuamContactForm;
