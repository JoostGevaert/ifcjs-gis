"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

import DarkMode from "./DarkMode";
import IfcjsLogo from "./IfcjsLogo";

export default function Navbar() {
  const pathname = usePathname();
  // const pathname = usePathname().replace(/^\/bim-gis/, "");

  const routes = [
    { name: "Home", url: "/" },
    { name: "Map", url: "/map" },
    { name: "Building", url: "/building" },
    { name: "About", url: "/about" },
    { name: "React", url: "/react" },
  ];

  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center">
          <IfcjsLogo className="h-6 w-6 hover:scale-125" />
        </Link>
        <button
          type="button"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="inline-flex items-center p-1 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isCollapsed}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          className={`${isCollapsed ? "hidden" : "w-full"} md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {routes.map((route, i) =>
              route.url === pathname ? (
                <li key={`${i}: ${route.name}`}>
                  <Link
                    href={route.url}
                    className="block py-2 pl-3 pr-4 text-white bg-myteal-500 rounded md:bg-transparent md:text-myteal-500 md:p-0"
                    aria-current="page"
                  >
                    {route.name}
                  </Link>
                </li>
              ) : (
                <li key={`${i}: ${route.name}`}>
                  <Link
                    href={route.url}
                    onClick={() => setIsCollapsed(true)}
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 md:hover:underline md:hover:text-myteal-500 md:dark:hover:text-myteal-500 md:dark:hover:bg-transparent dark:text-white dark:hover:bg-gray-700"
                  >
                    {route.name}
                  </Link>
                </li>
              )
            )}
            <li key="DarkMode">
              <DarkMode />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
