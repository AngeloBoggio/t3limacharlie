import React from "react";

const BenefitsSection = () => {
  return (
    <section className="bg-black py-8 text-white">
      <h2 className="mb-6 text-center text-2xl font-bold md:text-3xl lg:text-4xl">
        Three Key Benefits of Partnering with Mauii Relief Housing
      </h2>
      <div className="flex flex-col items-stretch justify-center gap-4 px-4 md:flex-row">
        <div className="benefit-item bg-primary flex-1 rounded-lg p-4 shadow-md">
          <h3 className="mb-2 text-xl font-semibold">
            Market Rent, No Loss of Rental Income
          </h3>
          <p>
            When you collaborate with Maui Relief Housing, you can expect to
            lease your property at fair market rent. We understand that there's
            no room for charity when it comes to managing your investments. Rest
            assured that you won't experience any income loss in this
            partnership. It's a straightforward business arrangement that
            benefits both parties.
          </p>
        </div>
        <div className="benefit-item bg-primary flex-1 rounded-lg p-4 shadow-md">
          <h3 className="mb-2 text-xl font-semibold">Support your Community</h3>
          <p>
            By offering your property to Maui Relief Housing, you are not only
            ensuring financial stability but also playing a vital role in
            helping your community recover and thrive. Your property becomes a
            beacon of hope for those in need, making a real difference and
            contributing to the well-being of Maui residents. Join us in
            supporting our community on the journey to recovery.
          </p>
        </div>
        <div className="benefit-item bg-primary flex-1 rounded-lg p-4 shadow-md">
          <h3 className="mb-2 text-xl font-semibold">
            No Hidden Agendas, Your Property Returns to You
          </h3>
          <p>
            We want to emphasize that we have no hidden agendas, and we do not
            seek to purchase your property. At the end of our leasing contract,
            your property will be returned to you in the same condition as when
            it was leased. This commitment to transparency and clarity ensures
            that your investment is protected, and you can have peace of mind
            throughout the partnership.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
