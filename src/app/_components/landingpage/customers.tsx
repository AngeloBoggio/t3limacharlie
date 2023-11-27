import React from "react";

interface TestimonialProps {
  quote: string;
  author: string;
  title: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, title }) => {
  return (
    <div className="m-2 rounded border bg-white p-4 text-lg shadow-lg">
      <p className="italic text-gray-600">"{quote}"</p>
      <p className="mt-4 font-bold text-gray-800">{author}</p>
      <p className="text-sm text-gray-500">{title}</p>
    </div>
  );
};

const testimonials: TestimonialProps[] = [
  {
    quote:
      "Great company, I worked with them after hurricane Ida along with FEMA. Andrea has been so helpful in making the process as smooth and safe as possible for not only me but the tenants as well. I have had zero issues dealing with Lima Charlie, every time I call or text I get a quick response in a timely fashion. All payments have been received on time thus far. I would recommend this company to any other property owner/landlord for assistance.” Thanks -Percy",
    author: "Percy Hollins",
    title: "Property Manager at Cambridge Place Apartments, Laplace, Louisiana",
  },
  {
    quote:
      "Such an efficient operation. Berenice with Lima Charlie was fantastic. Her efficiency and professionalism are rarely found in my industry. She handled all aspects of the leasing process remotely without a single glitch. From handling all paperwork, furnishings, utilities, lawn care and occupancy the process was seamless. I highly recommend them for your housing needs. Thanks Berenice for making my job so easy.” - Sand",
    author: "Sand Fradella",
    title: "LREC LICENSED Realtor at Windsor Realty, New Orleans, Louisiana",
  },
  {
    quote:
      "Lima Charlie Inc is a very professional relocation company to work with to lease apartments. You are going to want to work with this company to get either your clients placed or apartments leased. Andrea is intuitive and knows ahead all the items needed to make the process go smoothly. I have been in property management for over 20 years. I would have to say Lima Charlie has been one of the easiest and most knowledgeable relocation companies I have worked with",
    author: "Debbie Johnston",
    title: "Property Manager at Tangi Lakes Townhomes, Hammond, Louisiana ",
  },
  {
    quote:
      "It has been an absolute pleasure partnering with Lima Charlie Inc. Andrea & David are both so easy to work with and very professional. They are also very flexible to ensure that our needs & their needs were reciprocally met in order to house as many displaced Hurricane Ida victims as we both could. I would definitely recommend working with Lima Charlie Inc to help in any area that may be able to accommodate temporary housing solutions",
    author: "Gretchen Van Vrancken",
    title: "Property Manager at LaPlaza Apartments, Metairie, Louisiana",
  },
  // ... other testimonials
];

const CustomerTestimonials: React.FC = () => {
  const logos = [
    "images/fem.png",
    "images/noaa.png",
    "images/DHLS.png",
    "images/DOD.png",
  ];

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto mt-20 px-4 py-8">
        <h2 className="mb-6 text-center text-5xl font-bold">
          OUR CUSTOMERS AND WHAT THEY ARE SAYING
        </h2>
        <div className="mb-6 text-center text-2xl">
          <p>
            We are providing and managing hundreds of units and homes each year,
            for clients such as...
          </p>
        </div>
        <div className="mb-10 grid grid-cols-4 gap-4 p-4">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center">
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
                className="h-auto max-w-full"
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerTestimonials;
