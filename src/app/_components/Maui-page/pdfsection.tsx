import React from "react";

const TaxBenefitsSection = () => {
  // Corrected path to the PDF file
  const pdfFile = "/LTR-Publication.pdf"; // Now correctly relative to the public directory

  return (
    <section className="bg-white p-6">
      <h2 className="mb-4 text-center text-5xl font-bold">Did you know?</h2>
      <p className="mb-5 text-center text-xl">
        Long Term Rentals offer Homeowners incredible{" "}
        <span className="font-bold">tax benefits</span> of up to $200,000?
      </p>
      <div className="flex flex-col items-center">
        <object
          data={pdfFile}
          type="application/pdf"
          className="h-96 w-full md:w-2/3"
          aria-label="PDF Preview"
        >
          <p>
            Your browser does not support PDFs. Please download the PDF to view
            it:
          </p>
          <a
            href={pdfFile}
            download
            className="text-blue-600 underline hover:text-blue-800"
          >
            Download PDF
          </a>
        </object>
        <a
          href={pdfFile}
          download
          className="mt-4 rounded bg-green-600 px-4 py-2 font-semibold text-white transition-colors hover:bg-green-700"
        >
          Download PDF
        </a>
      </div>
    </section>
  );
};

export default TaxBenefitsSection;
