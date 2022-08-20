import React from 'react';

export default function Products() {
  return (
    <div className="mt-5 mb-5">
      <h1 className="md:text-xl text-sm px-4  border-2 border-l-amber-400 md:w-1/6 w-1/3 ">
        Our Products
      </h1>

      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8 mb-10 justify-items-center">
        {[
          'iitem',
          'sailte',
          'raia',
          'haer',
          'raia',
          'haer',
          'raia',
          'haer',
          'raia',
          'haer',
          'raia',
          'haer',
        ]
          .slice(0, 8)
          .map((x, index) => (
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://placeimg.com/400/225/arch"
                  className=" cursor-pointer"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title cursor-pointer">
                  Shoes!
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions  justify-between items-center">
                  <span className=" font-bold text-yellow-700 text-xl">
                    ${1500}
                  </span>
                  <button className="btn btn-primary">Book Now</button>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className=" flex justify-center">
        <button className="btn btn-secondary">more product</button>
      </div>
    </div>
  );
}
