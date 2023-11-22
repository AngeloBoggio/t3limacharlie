export default function Body() {
  return (
    <div className="bg-gray-100 p-10">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
        {/* Service Block 1 */}
        <div className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-lg">
          <h3 className="text-lg font-semibold">High-Quality Housing</h3>
          <p className="text-gray-600">
            Our team has a proven track record of success in providing
            high-quality housing solutions.
          </p>
        </div>

        {/* Service Block 2 */}
        <div className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-lg">
          <h3 className="mb-2 text-lg font-semibold">
            Excellent Customer Service
          </h3>
          <p className="text-gray-600">
            We provide excellent customer service and are responsive to your
            needs and the needs of your clients.
          </p>
        </div>

        {/* Service Block 3 */}
        <div className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-lg">
          <h3 className="mb-2 text-lg font-semibold">Timely Delivery</h3>
          <p className="text-gray-600">
            With a proven track record of completing contracts on time and
            within budget, we always deliver high-quality solutions.
          </p>
        </div>
      </div>
    </div>
  );
}
