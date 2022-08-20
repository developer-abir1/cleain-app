import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper';

export default function Review() {
  return (
    <div>
      <h2 className=" text-4xl text-center font-bold my-5">Happy Client</h2>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        freeMode={true}
        modules={[FreeMode, Pagination]}
        className="mySwiper "
      >
        {['1 ', '2', '3', '5', '8', '9'].map((x, index) => (
          <SwiperSlide>
            <div key={index}>
              <div>
                <img
                  className="w-24 h-24  mt-5   rounded-full mx-auto"
                  src="https://placeimg.com/80/80/people"
                  alt=""
                  width="384"
                  height="512"
                />
              </div>
              <div>
                <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                  <blockquote>
                    <p className="text-lg font-medium">
                      “Tailwind CSS is {x} the only framework that ve seen scale
                      on large teams. Its easy to customize, adapts to any
                      design, and the build size is tiny.”
                    </p>
                  </blockquote>
                  <figcaption className="font-medium ">
                    <div className=" flex justify-between items-center">
                      <div>
                        <div className="text-sky-500 dark:text-sky-400">
                          Sarah Dayan
                        </div>
                        <div className="text-slate-700 dark:text-slate-500">
                          Staff Engineer, Algolia
                        </div>
                      </div>
                      <div className="rating">
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                          onChange
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                      </div>
                    </div>
                  </figcaption>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
