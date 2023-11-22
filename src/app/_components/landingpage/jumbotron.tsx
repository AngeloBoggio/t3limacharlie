import React from "react";

export default function Jumbotron() {
  return (
    <section className="bg-gray-600 bg-[url('/images/realestate.png')] bg-center bg-no-repeat bg-blend-multiply">
      <div className="mx-auto flex flex-col justify-center  px-4 py-24 text-center lg:py-56">
        <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
          SAFE-EFECTIVE HOUSING… WHEN NEEDED!
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-300 sm:px-16 lg:px-48 lg:text-xl">
          We combine amazing 24 hour customer service with an award winning
          network to bring you an unforgettable housing experience.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-lg bg-red-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            Get Housing
            <svg
              className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
