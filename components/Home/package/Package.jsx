import React from 'react';

export default function Package() {
  return (
    <div className="  ">
      <h2 className=" text-4xl text-center font-bold my-5   mt-28">
        {' '}
        Our Package{' '}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3   gap-4 my-4 py-4  justify-items-center ">
        {[1, 2, 3].map((x, index) => (
          <div
            className="w-80  border-2 p-4 rounded flex items-center"
            key={index}
          >
            <div>
              <h2 className="text-3xl">Basic</h2>
              <p className=" text-gray-500 py-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                ipsam vel quas?
              </p>

              <h2 className="text-2xl font-bold mb-4 ">
                $14<span className="text-gray-300">/mo</span>
              </h2>

              <button className="btn btn-primary uppercase mb-6">
                purchase
              </button>

              <hr className="text-gray-500" />

              <h3 className="text-xl my-3 font-semibold">
                What&lsquo;s included?
              </h3>

              <div>
                <ul>
                  {['lorem', 'torem', 'horem', 'gorme'].map((x) => (
                    <li className="  text-sm py-2 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-green-400 mr-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Lorem ipsum dolor sit amet consectetur
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
