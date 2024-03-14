import React, { useEffect, useState } from "react";
import { HiMiniBars2 } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { navLinks } from "../data/navLinks";

export default function Header() {
  const [navShow, setNavShow] = useState(false);

  useEffect(() => {
    document.title = `Airspace :: Home`;
  }, []);

  return (
    <header className="relative p-4 flex justify-between gap-4 items-center bg-white">
      <div className="flex items-center gap-2">
        <div className="h-5 w-5 md:h-8 md:w-8 rounded-full bg-orange-500 flex-shrink-0"></div>
        <h1 className="text-gray-600 font-semibold text-small md:text-large">
          AirSpace
        </h1>
      </div>
      <nav
        className={`flex z-50 flex-col md:flex-row md:gap-4 md:justify-center absolute md:static ${
          navShow ? "left-0" : "left-full"
        } top-full w-full bg-orange-100 md:bg-transparent`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.id}
            to={link.url}
            className=" text-gray-600 text-sm sm:text-base py-2 px-4 hover:bg-orange-500 hover:text-white md:border-b-2 md:hover:border-orange-500  md:hover:bg-transparent md:hover:text-gray-600 md:border-transparent z-50"
          >
            {link.text}
          </Link>
        ))}
      </nav>
      <div
        onClick={() => setNavShow(!navShow)}
        className="flex p-2 border border-gray-200 rounded-md cursor-pointer hover:bg-gray-200 md:hidden"
      >
        <HiMiniBars2 className="text-gray-600 font-bold text-lg " />
      </div>
    </header>
  );
}
