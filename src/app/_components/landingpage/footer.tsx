export default function Message() {
  return (
    <footer className="m-4 rounded-lg bg-black shadow dark:bg-gray-800">
      <div className="mx-auto w-full max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-md text-white dark:text-gray-400 sm:text-center">
          <a href="https://flowbite.com/" className="hover:underline">
            Lima Charlie Inc
          </a>
        </span>
        <ul className="mt-3 flex flex-wrap items-center text-sm font-medium text-white dark:text-gray-400 sm:mt-0">
          <li>
            <a href="#" className="me-4 hover:underline md:me-6">
              About
            </a>
          </li>
          <li>
            <a href="#" className="me-4 hover:underline md:me-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="me-4 hover:underline md:me-6">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
