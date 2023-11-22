export default function NavBar() {
  return (
    <nav className="sticky top-0 z-50 border-gray-200 bg-white dark:bg-gray-900">
      <div className="max-w-screen-3xl mx-auto flex flex-wrap items-center justify-between p-4">
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src="/images/limacharlie.png" style={{ height: "80px" }} />
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-5 w-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 text-xl font-medium rtl:space-x-reverse dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900">
            <li>
              <a
                href="/"
                className="block rounded px-3 py-2 text-white dark:text-white md:bg-transparent md:p-0 md:text-red-700 md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                className="flex w-full items-center justify-between rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:text-white md:w-auto md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-red-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
              >
                Our Missions{" "}
                <svg
                  className="ms-2.5 h-2.5 w-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              <div
                id="dropdownNavbar"
                className="z-10 hidden w-44 divide-y divide-gray-100 rounded-lg bg-white font-normal shadow dark:divide-gray-600 dark:bg-gray-700"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <a
                      href="maui-relief-housing"
                      className="block px-4 py-2 hover:bg-red-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Maui Relief Housing
                    </a>
                  </li>
                  <li>
                    <a
                      href="guam-relief"
                      className="block px-4 py-2 hover:bg-red-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Guam Relief Housing
                    </a>
                  </li>
                  <li>
                    <a
                      href="housing-mission"
                      className="block px-4 py-2 hover:bg-red-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Housing Missions
                    </a>
                  </li>
                  <li>
                    <a
                      href="traveling-professionals"
                      className="block px-4 py-2 hover:bg-red-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Traveling Professionals
                    </a>
                  </li>
                  <li>
                    <a
                      href="insurance"
                      className="block px-4 py-2 hover:bg-red-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Insurance
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a
                href="#"
                className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:md:text-red-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
