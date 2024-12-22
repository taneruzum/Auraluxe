const Footer = () => {
  return (
    <>
      <svg
        className="h-auto max-h-40 w-full translate-y-[1px]"
        preserveAspectRatio="none"
        viewBox="0 0 2160 263"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="Wave"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2160 262.5H0V0C360 80 720 120 1080 120C1440 120 1800 80 2160 0V262.5Z"
          fill="#1F2937"
        />
      </svg>

      <footer className="bg-[#1F2937] py-16 text-white">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Upper Section */}
          <div className="grid grid-cols-1 place-items-center text-center gap-12 md:grid-cols-2 md:place-items-start md:text-start  lg:grid-cols-4">
            {/* Logo and Description */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="mb-2 text-4xl font-extrabold">Auraluxe Jewelry</h3>
              <p className="text-sm text-gray-400">
                Discover timeless elegance with our exquisite collection.
              </p>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col space-y-4">
              <h4 className="mb-2 text-lg font-semibold uppercase">About</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 transition duration-200 hover:text-white"
                  >
                    Our Company
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 transition duration-200 hover:text-white"
                  >
                    Values
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 transition duration-200 hover:text-white"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* Customer Service Links */}
            <div className="flex flex-col space-y-4">
              <h4 className="mb-2 text-lg font-semibold uppercase">Help</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 transition duration-200 hover:text-white"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 transition duration-200 hover:text-white"
                  >
                    Track Orders
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 transition duration-200 hover:text-white"
                  >
                    Returns
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Media Links */}
            <div className="flex flex-col space-y-4">
              <h4 className="mb-2 text-lg font-semibold uppercase">
                Follow Us
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 transition duration-200 hover:text-white"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 transition duration-200 hover:text-white"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 transition duration-200 hover:text-white"
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="my-8 border-t border-gray-700"></div>

          {/* Lower Section */}
          <div className="flex flex-col items-center md:flex-row md:justify-between">
            <p className="text-sm text-gray-400">
              © 2024 Auraluxe Jewelry. All rights reserved.
            </p>
            <ul className="mt-4 flex items-center space-x-6 md:mt-0 *:text-xs *:xs:text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-300 transition duration-200 hover:text-white"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 transition duration-200 hover:text-white"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 transition duration-200 hover:text-white"
                >
                  Cookie Preferences
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
