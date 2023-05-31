import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { MdOutlineClose } from "react-icons/md";
import { GiPointyHat } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function Navbar() {
  const menuItems = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Generate",
      href: "/generate-icons",
    },
    {
      name: "Community",
      href: "/community",
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="z-50 py-6">
      <div className="w-full bg-gray-950">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <Link
            className="inline-flex items-center space-x-2 cursor-pointer"
            to="/"
          >
            <span>
              <GiPointyHat className="text-4xl lg:text-3xl" />
            </span>
            <span className="font-bold text-lg hidden md:block md:text-xl">
              iconverseai
            </span>
          </Link>
          <div className="hidden lg:block">
            <ul className="ml-12 inline-flex space-x-8">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="inline-flex items-center text-sm font-medium text-gray-100 hover:text-gray-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/*  <div className="flex grow justify-end">
        <input
          className="flex h-10 w-[250px] rounded-md bg-gray-800 px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-700/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
          type="text"
          placeholder="Serach"
        ></input>
      </div> */}
          {/*  <div className="ml-2 mt-2 hidden lg:block">
        <span className="relative inline-block">
          <img
            className="h-10 w-10 rounded-full"
            src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
            alt="Dan_Abromov"
          />
          <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-600 ring-2 ring-white"></span>
        </span>
      </div> */}
          <div className="ml-2 lg:hidden">
            <BiMenu onClick={toggleMenu} className="text-2xl cursor-pointer" />
          </div>
          {isMenuOpen && (
            <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
              <div className="divide-y-2 divide-gray-50 rounded-lg border border-gray-700 border-opacity-50 bg-gray-950 shadow-lg ring-1 ring-gray-600 ring-opacity-5">
                <div className="px-5 pb-6 pt-5">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center space-x-2">
                      <span>
                        <GiPointyHat />
                      </span>
                      <span className="font-bold">iconverseai</span>
                    </div>
                    <div className="-mr-2">
                      <button
                        type="button"
                        onClick={toggleMenu}
                        className="inline-flex items-center justify-center rounded-md p-2 text-gray-100 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      >
                        <span className="sr-only">Close menu</span>
                        <MdOutlineClose
                          className="text-xl"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-6">
                      {menuItems.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="-m-3 flex items-center rounded-md px-3 py-4 text-sm font-medium hover:bg-gray-900 transition"
                        >
                          <span className="ml-3 text-sm font-medium text-gray-100">
                            {item.name}
                          </span>
                        </Link>
                      ))}
                    </nav>
                  </div>
                  {/* <div className="ml-3 mt-4 flex items-center space-x-2">
                <img
                  className="inline-block h-10 w-10 rounded-full"
                  src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
                  alt="Dan_Abromov"
                />
                <span className="flex flex-col">
                  <span className="text-sm font-medium text-gray-900">
                    Dan Abromov
                  </span>
                  <span className="text-sm font-medium text-gray-500">
                    @dan_abromov
                  </span>
                </span>
              </div> */}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
