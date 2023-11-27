import React from "react";

const ContactForm = () => {
  // Function to handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // You would handle your form submission here.
    console.log("Form submitted");
  };

  return (
    <div className="col-2 mt-20 flex h-full gap-20">
      <div className="ml-28 flex max-w-7xl justify-center">
        <div className="flex max-w-3xl flex-col justify-center gap-10">
          <h2 className=" text-6xl font-bold">Are we the ones for you?</h2>
          <div className="max-w-5xl">
            <p className="text-2xl text-gray-600">
              Please leave your information and one of our experts will get in
              touch with you shortly.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="mb-40 h-1/2 space-y-10">
            <div className="">
              <label
                htmlFor="service"
                className="block text-xl font-medium text-gray-700"
              >
                Select (required)
              </label>
              <select
                id="service"
                name="service"
                required
                className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              >
                <option value=""></option>
                <option value="apartments">Apartments</option>
                <option value="residential">Residential</option>
                <option value="travelprof">Travel Professionals</option>
                <option value="hotels">Hotels</option>
                <option value="governmetn">Government</option>
                <option value="insurance">Insurance</option>
                {/* Add more options as needed */}
              </select>
            </div>

            <div className="grid grid-cols-1  gap-4 sm:grid-cols-2">
              <input
                type="text"
                name="firstName"
                id="firstName"
                required
                placeholder="First Name"
                className="block w-full rounded-md  border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-xl"
              />
              <input
                type="text"
                name="lastName"
                id="lastName"
                required
                placeholder="Last Name"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-xl"
              />
            </div>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="Email"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-xl"
            />
            <input
              type="tel"
              name="phone"
              id="phone"
              required
              placeholder="Phone Number"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-xl"
            />
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              placeholder="Message"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-xl"
            ></textarea>
            <button
              type="submit"
              className="max-w-9xl flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-xl font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Request Information
            </button>
          </form>
        </div>
      </div>

      <div className="relative mr-8 flex w-1/2 justify-center">
        <img
          src="/images/mover.jpg"
          alt="A person moving a plant"
          className="w-full max-w-3xl rounded-lg object-cover object-center shadow-lg"
        />
      </div>
    </div>
  );
};

export default ContactForm;
