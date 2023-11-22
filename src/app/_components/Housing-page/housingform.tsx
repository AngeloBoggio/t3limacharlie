import React from "react";

export default function HousingForm() {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // You would handle your form submission here.
    console.log("Form submitted");
  };
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2">
        <h2 className="mb-4 text-4xl font-bold">Are we the ones for you?</h2>
        <p className="mb-4">
          Please leave your information and one of our experts will get in touch
          with you shortly.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="service"
              className="block text-sm font-medium text-gray-700"
            >
              Select (required)
            </label>
            <select
              id="service"
              name="service"
              required
              className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            >
              {/* Add options here */}
            </select>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input
              type="text"
              name="firstName"
              id="firstName"
              required
              placeholder="First Name"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
            <input
              type="text"
              name="lastName"
              id="lastName"
              required
              placeholder="Last Name"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="Email"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
          <input
            type="tel"
            name="phone"
            id="phone"
            required
            placeholder="Phone Number"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            placeholder="Message"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          ></textarea>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Request Information
          </button>
        </form>
      </div>
      <div className="relative md:w-1/2">
        <img
          src="/images/mover.jpg"
          alt="A person moving a plant"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      </div>
    </div>
  );
}
