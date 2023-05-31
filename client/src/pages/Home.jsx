import { FiArrowRightCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="relative w-full">
      <div className="relative isolate z-0 bg-gray-950 px-6 pt-14 lg:px-8">
        <div className="relative mx-auto max-w-2xl py-24">
          <div className="absolute inset-x-0 -top-[4rem] -z-10 transform-gpu overflow-hidden blur-3xl md:-top-[10rem]">
            <svg
              className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
              viewBox="0 0 1155 678"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
                fillOpacity=".3"
                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
              />
              <defs>
                <linearGradient
                  id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                  x1="1155.49"
                  x2="-78.208"
                  y1=".177"
                  y2="474.645"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#9089FC" />
                  <stop offset={1} stopColor="#FF80B5" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="text-center">
            <h1 className="main_text_gradient">
              Unleash Iconic Creativity with AI.
            </h1>
            <p className="mt-6 text-[12px] lg:text-[15px] leading-6 text-gray-400">
              Experience a design revolution with AI-powered icon generator that
              effortlessly create extraordinary icons, revolutionizing your
              creative process and unlocking infinite possibilities.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-2">
              <Link
                to="/generate-icons"
                type="button"
                className="rounded-[8px] border-2 border-gray-100 px-4 lg:px-6 py-3 text-xs lg:text-sm font-medium text-gray-900 hover:bg-transparent bg-gray-100 transition hover:text-gray-100 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black flex items-center gap-1.5"
              >
                Embrace the sorcery
                <FiArrowRightCircle className="text-base lg:text-lg" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
