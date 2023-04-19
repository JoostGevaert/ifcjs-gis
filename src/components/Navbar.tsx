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
    { name: "Firebase", url: "/firebase" },
  ];

  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <nav className="border-gray-200 bg-white dark:bg-gray-900">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <Link href="/" className="flex items-center">
          <IfcjsLogo className="h-6 w-6 hover:scale-125" />
        </Link>
        <button
          type="button"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="ml-3 inline-flex items-center rounded-lg p-1 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
          aria-controls="navbar-default"
          aria-expanded={isCollapsed}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5"
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
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900">
            {routes.map((route, i) =>
              route.url === pathname ? (
                <li key={`${i}: ${route.name}`}>
                  <Link
                    href={route.url}
                    className="block rounded bg-myteal-500 py-2 pl-3 pr-4 text-white md:bg-transparent md:p-0 md:text-myteal-500"
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
                    className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-myteal-500 md:hover:underline md:dark:hover:bg-transparent md:dark:hover:text-myteal-500"
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
