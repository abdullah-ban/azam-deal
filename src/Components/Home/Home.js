import React, { useEffect } from "react";
import Layout from "../../Layout/Layout";
import Banner from "../Banner/Banner";
import Carousal from "../Carousal/Carousal";
import ProductCard from "../Products/ProductCard";
import Testimonials from "../Testimonial/Testimonials";

const Home = () => {
  useEffect(() => {
    localStorage.removeItem("Value");
  }, []);

  return (
    <div>
      <Layout>
        <div className="">
          <div className="bg-white">
            <div className="mx-auto py-5 max-w-screen-2xl px-3 sm:px-10">
              <div className="flex w-full">
                <div className="flex-shrink-0 xl:pr-6 lg:block w-full">
                  <Carousal />
                </div>
              </div>
              <div className="bg-orange-100 px-10 py-6 rounded-lg mt-6 hidden lg:block">
                <Banner />
              </div>
            </div>
          </div>
        </div>
        {/* Head Section */}

        {/* Products */}
        <div className="bg-gray-50 lg:py-16 py-10 mx-auto max-w-screen-2xl px-3 sm:px-10">
          <div className="mb-10 flex justify-center">
            <div className="text-center w-full lg:w-2/5">
              <h2 className="text-xl lg:text-2xl mb-2 font-serif font-semibold">
                Popular Products for Daily Shopping
              </h2>
              <p className="text-base font-sans text-gray-600 leading-6">
                See all our popular products in this week. You can choose your
                daily needs products from this list and get some special offer
                with free shipping.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="w-full">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-5 gap-2 md:gap-3 lg:gap-3">
                <ProductCard />
              </div>
            </div>
          </div>
          <div className="bg-white mt-20">
            <Testimonials />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Home;
