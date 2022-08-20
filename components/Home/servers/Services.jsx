import React, { useState } from 'react';

export default function Services() {
  return (
    <div className="  ">
      <div className=" grid grid-cols-2 md:grid-cols-4 gap-4 justify-center py-4">
        {['Shat Wash', 'Complete Shot', 'Female Dress ', 'Male Dress'].map(
          (item, index) => (
            <div key={index} className={`  services  h-11 text-xl  `}>
              <h1 className="">{item}</h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 services-icon   "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </div>
          )
        )}
      </div>
    </div>
  );
}
