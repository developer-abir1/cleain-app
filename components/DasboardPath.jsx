import React from 'react';
import Link from 'next/link';
import PathHooks from './PagePath';
export default function DasboardPath({ children }) {
  const [pageTitle] = PathHooks(null);
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content flex flex-col 	">
        <div className="flex   justify-between bg-white h-14 items-center">
          <h2 className=" text-xl ml-4">{pageTitle}</h2>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button  w-14 lg:hidden    "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
        </div>

        <div>{children}</div>
      </div>

      <div className="drawer-side    ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80  text-base-content  bg-gradient-to-r from-cyan-400 to-blue-300 ">
          <li>
            <Link href={'/'}>
              <a className="text-xl">Home</a>
            </Link>
          </li>
          <li>
            <Link href={'/dashboard'}>
              <a className="text-xl">Dashboard</a>
            </Link>
          </li>
          <li>
            <Link href={'/dashboard/addproduct'}>
              <a className="text-xl">Add Product</a>
            </Link>
          </li>
          <li>
            <Link href={'/dashboard/manageproduct'}>
              <a className="text-xl">Manage Products</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
