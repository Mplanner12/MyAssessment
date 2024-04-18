// import SubFilter from "./SubFilter";
import { HiOutlineXMark } from "react-icons/hi2";

const Subscription = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className=" text-center mb-[2rem] font-semibold text-black">
          Limited Time Offer
        </p>
        <div className="text-center mb-[6rem]">
          <h2 className="text-4xl font-extrabold text-black sm:text-5xl">
            Save <span className="underline decoration-orange-900">50%</span>{" "}
            for 12 Months
          </h2>
        </div>
        <div className="flex justify-center relative -top-10 my-[2rem] mt-[4rem]">
          {/* <SubFilter /> */}
        </div>

        <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-4">
          {/* <!-- Free Plan --> */}
          <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-black">Premium</h3>
              <p className="mt-4 text-black">
                Scale fast with dedicated onboarding, unlimited contacts, and
                priority support; built for teams.
              </p>
            </div>
            <div className="mb-8 flex flex-col">
              <div>
                <p className="text-md text-black font-normal"> Starts at</p>
                <span className="text-5xl font-extrabold text-black">
                  <span className="text-xs relative -top-5">$</span>
                  143
                  <span className="text-xs relative -top-5">.16</span>
                </span>
              </div>
              <span className="text-md font-medium text-black">
                /mont for 12 months*
              </span>
            </div>
            <ul className="mb-8 space-y-4 text-black">
              <li className="flex items-center py-3 border-b-2 border-gray-400">
                <svg
                  className="h-6 w-6 text-black mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-xs underline decoration-dotted">
                  Phone & Priority Support
                </span>
              </li>
              <li className="flex items-center py-3 border-b-2 border-gray-400">
                <svg
                  className="h-6 w-6 text-black mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-xs underline decoration-dotted">
                  Custom-Coded and Pre-built Email Templates
                </span>
              </li>
              <li className="flex items-center py-3 border-b-2 border-gray-400">
                <svg
                  className="h-6 w-6 text-black mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-xs underline decoration-dotted">
                  Multivariate and A/B Monitoring
                </span>
              </li>
              <li className="flex items-center py-3 border-b-2 border-gray-400">
                <svg
                  className="h-6 w-6 text-black mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-xs underline decoration-dotted">
                  Enhanced Automated Customer Journeys
                </span>
              </li>
              <li className="flex items-center py-3 border-b-2 border-gray-400">
                <svg
                  className="h-6 w-6 text-black mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-xs underline decoration-dotted">
                  Dedicated Personalized Onboarding
                </span>
              </li>
              <li className="flex items-center py-3 border-b-2 border-gray-400">
                <svg
                  className="h-6 w-6 text-black mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-xs underline decoration-dotted">
                  Predictive Segmentation
                </span>
              </li>
              <li className="flex items-center py-3 border-b-2 border-gray-400">
                <svg
                  className="h-6 w-6 text-black mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-xs underline decoration-dotted">
                  Campaign Manager
                </span>
              </li>
            </ul>
            <a
              href="#"
              className="border-black border-2 block w-full py-2 px-6 text-center rounded-full text-black hover:text-orange-700 font-medium bg-inherit "
            >
              Buy Now
            </a>
          </div>

          {/* <!-- Starter Plan --> */}
          <div className="z-10 mt-14 md:mt-0">
            <div className="p-[0.45rem] w-full h-fit relative -top-[2.25rem] bg-blue-300">
              <p className="text-black text-center text-xs underline decoration-dotted decoration-sky-900">
                Best Value
              </p>
            </div>
            <div className="relative -top-4 bg-white shadow-lg p-6 transform scale-105 transition duration-300">
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-black">Standard</h3>
                <p className="mt-4 text-black">
                  Sell even more with personalization, optimization tools, and
                  enhanced automations
                </p>
              </div>
              <div className="mb-8 flex flex-col">
                <div>
                  <p className="text-md text-black font-normal"> Starts at</p>
                  <span className="text-5xl font-extrabold text-black">
                    <span className="text-xs relative -top-5">$</span>
                    67
                    <span className="text-xs relative -top-5">.29</span>
                  </span>
                </div>
                <span className="text-md font-medium text-black">
                  /mont for 12 months*
                </span>
              </div>
              <ul className="mb-8 space-y-4 text-black">
                <li className="flex items-center py-3 border-b-2 border-gray-400">
                  <svg
                    className="h-6 w-6 text-black mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-xs underline decoration-dotted">
                    24/7 Email & Chat Sipport
                  </span>
                </li>
                <li className="flex items-center py-3 border-b-2 border-gray-400">
                  <svg
                    className="h-6 w-6 text-black mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-xs underline decoration-dotted">
                    Custom-coded and Pre-built Alert Email Templates
                  </span>
                </li>
                <li className="flex items-center py-3 border-b-2 border-gray-400">
                  <svg
                    className="h-6 w-6 text-black mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-xs underline decoration-dotted">
                    Multivariate & Monitoring
                  </span>
                </li>
                <li className="flex items-center py-3 border-b-2 border-gray-400">
                  <svg
                    className="h-6 w-6 text-black mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-xs underline decoration-dotted">
                    Enhanced Automated Customer Journeys
                  </span>
                </li>
                <li className="flex items-center py-3 border-b-2 border-gray-400">
                  <svg
                    className="h-6 w-6 text-black mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-xs underline decoration-dotted">
                    Personalized Onboarding
                  </span>
                </li>
                <li className="flex items-center py-3 border-b-2 border-gray-400">
                  <svg
                    className="h-6 w-6 text-black mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-xs underline decoration-dotted">
                    Predictive Segmentation
                  </span>
                </li>
                <li className="flex items-center py-3 border-b-2 border-gray-400">
                  <svg
                    className="h-6 w-6 text-black mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-xs underline decoration-dotted">
                    Campaign Manager
                  </span>
                </li>
              </ul>
              <a
                href="#"
                className="border-black border-2 block w-full py-2 px-6 text-center rounded-full text-white hover:text-gray-900 font-medium bg-orange-700"
              >
                Buy Now
              </a>
            </div>
          </div>

          {/* <!-- Pro Plan --> */}
          <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-black">Essentials</h3>
              <p className="mt-4 text-black">
                Send the right alert content at the right time with testing and
                scheduling features
              </p>
            </div>
            <div className="mb-8 flex flex-col">
              <div>
                <p className="text-md text-black font-normal"> Starts at</p>
                <span className="text-5xl font-extrabold text-black">
                  <span className="text-xs relative -top-5">$</span>
                  49
                  <span className="text-xs relative -top-5">.95</span>
                </span>
              </div>
              <span className="text-md font-medium text-black">
                /mont for 12 months*
              </span>
            </div>
            <ul className="mb-8 space-y-4 text-black">
              <li className="flex items-center py-3 border-b-2 border-gray-400">
                <svg
                  className="h-6 w-6 text-black mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-xs underline decoration-dotted">
                  24/7 Email & Chat Support
                </span>
              </li>
              <li className="flex items-center py-3 border-b-2 border-gray-400">
                <svg
                  className="h-6 w-6 text-black mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-xs underline decoration-dotted">
                  Pre-built Email Templates
                </span>
              </li>
              <li className="flex items-center py-3 border-b-2 border-gray-400">
                <svg
                  className="h-6 w-6 text-black mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-xs underline decoration-dotted">
                  Alert Monitoring
                </span>
              </li>
              <li className="flex items-center py-3 border-b-2 border-gray-400">
                <svg
                  className="h-6 w-6 text-black mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-xs underline decoration-dotted">
                  Basic Automated Customer Journeys
                </span>
              </li>
              <li className="flex items-center py-3 border-b-2 border-gray-400">
                <div className="text-gray-500">
                  <HiOutlineXMark size={25} />
                </div>
                <span className="text-xs text-gray-500">
                  Personalized Onboarding
                </span>
              </li>
              <li className="flex items-center py-3 border-b-2 border-gray-400">
                <div className="text-gray-500">
                  <HiOutlineXMark size={25} />
                </div>
                <span className="text-xs text-gray-500">
                  Predictive Segmentation
                </span>
              </li>
              <li className="flex items-center py-3 border-b-2 border-gray-400">
                <div className="text-gray-500">
                  <HiOutlineXMark size={25} />
                </div>
                <span className="text-xs text-gray-500">Campaign Manager</span>
              </li>
            </ul>
            <a
              href="#"
              className="border-black border-2 block w-full py-2 px-6 text-center rounded-full text-black hover:text-orange-700 font-medium bg-inherit "
            >
              Buy Now
            </a>
          </div>

          {/* <!-- Enterprise Plan --> */}
          <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-black">Free</h3>
              <p className="mt-4 text-black">
                Easily create 10 Alert and learn more about your customers
              </p>
            </div>
            <div className="mb-8 flex flex-col">
              <div>
                <span className="text-5xl font-extrabold text-black">
                  <span className="text-xs relative -top-5">$</span>0
                  {/* <span className="text-xs relative -top-5">
                                        .16
                                    </span> */}
                </span>
              </div>
              <span className="text-md font-medium text-black">
                /mont for 12 months*
              </span>
            </div>
            <ul className="mb-8 space-y-4 text-black">
              <li className="flex items-center py-3 border-b-2 border-gray-400">
                <svg
                  className="h-6 w-6 text-black mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-xs underline decoration-dotted">
                  Email Support for first 30 days
                </span>
              </li>
              <li className="flex items-center py-3 border-b-2 border-gray-400">
                <svg
                  className="h-6 w-6 text-black mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-xs">Pre-built Email Templates</span>
              </li>
              <li className="flex items-center py-3 border-b-2 border-gray-400">
                <div className="text-gray-500">
                  <HiOutlineXMark size={25} />
                </div>
                <span className="text-xs text-gray-700 ">Monitoring</span>
              </li>
              <li className="flex items-center py-3 border-b-2 border-gray-400">
                <div className="text-gray-500">
                  <HiOutlineXMark size={25} />
                </div>
                <span className="text-xs text-gray-700 ">
                  Basic Automated Customer Journeys
                </span>
              </li>
              <li className="flex items-center py-3 border-b-2 border-gray-400">
                <div className="text-gray-500">
                  <HiOutlineXMark size={25} />
                </div>
                <span className="text-xs text-gray-700">Onboarding</span>
              </li>
              <li className="flex items-center py-3 border-b-2 border-gray-400">
                <div className="text-gray-500">
                  <HiOutlineXMark size={25} />
                </div>
                <span className="text-xs text-gray-700">
                  Predictive Segmentation
                </span>
              </li>
              <li className="flex items-center py-3 border-b-2 border-gray-400">
                <div className="text-gray-500">
                  <HiOutlineXMark size={25} />
                </div>
                <span className="text-xs text-gray-700 underline decoration-dotted">
                  Campaign Manager
                </span>
              </li>
            </ul>
            <a
              href="#"
              className="border-black border-2 block w-full py-2 px-6 text-center rounded-full text-black hover:text-orange-700 font-medium bg-inherit "
            >
              Sign Up Free
            </a>
          </div>
        </div>
        <div className="p-[2.5rem] pb-[1rem]">
          <p className="text-sm text-center text-black">
            *See{" "}
            <span className="underline decoration-dotted decoration-gray-500">
              Offer Terms.
            </span>{" "}
            <span className="text-sky-500">Overages </span>apply if contact or
            email send limit is exceeded. Free plan sending bwill be paused if
            contact or email send limit is exceeded.{" "}
            <span className="underline decoration-dotted decoration-sky-500">
              Learn more
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Subscription;
