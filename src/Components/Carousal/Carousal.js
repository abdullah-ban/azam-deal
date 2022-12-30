import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const Carousal = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="h-full relative rounded-lg overflow-hidden">
          <div className="text-sm text-gray-600 hover:text-emerald-dark">
            <img
              src="/banner1-home1.jpg"
              alt="Herbal"
              className="object-cover w-full h-[250px] md:h-auto lg:h-auto"
            />
          </div>
          <div className="absolute top-0 left-0 z-10 p-r-16 flex-col flex w-full h-full place-items-start justify-center">
            <div className="pl-4 pr-12 sm:pl-10 sm:pr-16 w-10/12 lg:w-8/12 xl:w-7/12">
              <h1 className="mb-2 font-serif text-xl sm:text-lg md:text-2xl line-clamp-1 md:line-clamp-none  lg:line-clamp-none  lg:text-3xl font-bold text-gray-800">
                Herbals
              </h1>
              <p className="text-base leading-6 text-gray-600 font-sans line-clamp-1  md:line-clamp-none lg:line-clamp-none w-32 lg:w-auto">
                India`s Best Herbals You`ll Find Here
              </p>
              <Link to="/">
                <p className="hidden sm:inline-block lg:inline-block text-sm leading-6 font-serif font-medium mt-6 px-6 py-2 bg-emerald-500 text-center rounded-md text-white hover:bg-emerald-600">
                  Shop Now
                </p>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousal;
