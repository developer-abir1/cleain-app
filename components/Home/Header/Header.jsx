import React from 'react';

export default function Header() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 h-1/2">
        <div className="flex items-center">
          <div>
            <h2 className="text-5xl font-bold ">
              Lorem, ipsum dolor{' '}
              <span className=" text-yellow-700">consectetur </span>
            </h2>
            <p className=" text-gray-400 text-justify font-mono  py-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem,
              consectetur voluptas? Architecto nam delectus veritatis,
              recusandae suscipit totam perspiciatis voluptatum eaque natus!
            </p>
            <button className="btn btn-primary ">Get booking</button>
          </div>
        </div>
        <div>
          <img
            src="image/clening.png"
            className="h-100 w-100     mask mask-decagon"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
