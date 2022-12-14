import React from "react";
import Layout from "../../Layout/Layout";
import { MdRemoveShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

const UnlogCart = () => {
  return (
    <div>
      <Layout>
        <div className="bg-slate-100 p-10">
          <div className="bg-white p-5 rounded-2xl w-full md:w-2/3 lg:w-2/3">
            <div className="flex flex-col md:flex-row lg:flex-row justify-around items-center">
              <div>
                <MdRemoveShoppingCart className="text-9xl text-gray-500" />
              </div>
              <div>
                <p className="text-center text-md md:text-lg lg:text-lg font-semibold text-gray-700 underline mt-16 lg:mt-0 md:mt-0">
                  Please Login First To See Cart's Item...!
                </p>
                <div className="flex mt-5 justify-center">
                  <div>
                    <Link to="/login">
                      <button className="p-1 md:p-2 lg:p-2 bg-emerald-500 rounded-md text-white font-semibold hover:bg-white hover:text-gray-700 transition ease-in-out border hover:border-emerald-500 text-sm md:text-md lg:text-md">
                        Sign In
                      </button>
                    </Link>
                  </div>
                  <div>
                    <Link to="/register">
                      <button className="p-1 md:p-2 lg:p-2 border border-emerald-500 text-gray-700 font-semibold rounded-md ml-2 md:ml-5 lg:ml-5 hover:bg-emerald-500 hover:text-white transition ease-in-out text-sm md:text-md lg:text-md ">
                        Sign Up Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-5 w-full md:w-2/3 lg:w-2/3 mt-8 rounded-md">
            <p className="hidden p-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
              nulla officia. Magnam esse, dolor culpa ea pariatur fuga
              necessitatibus labore. Veritatis, qui quisquam.
            </p>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default UnlogCart;
