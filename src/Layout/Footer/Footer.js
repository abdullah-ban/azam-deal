import React from "react";
import { Link } from "react-router-dom";
import {
  FacebookIcon,
  LinkedinIcon,
  PinterestIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

const Footer = () => {
  return (
    <div>
      <div className="pb-16 lg:pb-0 xl:pb-0 bg-white">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-10">
          <div className="grid grid-cols-2 md:grid-cols-7 xl:grid-cols-12 gap-5 sm:gap-9 lg:gap-11 xl:gap-7 py-10 lg:py-16 justify-between">
            <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3">
              <h3 className="text-md lg:leading-7 font-medium mb-4 sm:mb-5 lg:mb-6 pb-0.5">
                Company
              </h3>
              <ul className="text-sm flex flex-col space-y-3">
                <li className="flex items-baseline">
                  <Link to="/about-us">
                    <p className="text-gray-600 inline-block w-full hover:text-emerald-500">
                      About Us
                    </p>
                  </Link>
                </li>
                <li className="flex items-baseline">
                  <Link to="/contact-us">
                    <p className="text-gray-600 inline-block w-full hover:text-emerald-500">
                      Contact us
                    </p>
                  </Link>
                </li>
                <li className="flex items-baseline">
                  <Link to="#">
                    <p className="text-gray-600 inline-block w-full hover:text-emerald-500">
                      Careers
                    </p>
                  </Link>
                </li>
                <li className="flex items-baseline">
                  <Link to="#">
                    <p className="text-gray-600 inline-block w-full hover:text-emerald-500">
                      Latest news
                    </p>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3">
              <h3 className="text-md lg:leading-7 font-medium mb-4 sm:mb-5 lg:mb-6 pb-0.5">
                Top Category
              </h3>
              <ul className="text-sm lg:text-15px flex flex-col space-y-3">
                <li className="flex items-baseline">
                  <Link to="/search?Category=fish--meat">
                    <p className="text-gray-600 inline-block w-full hover:text-emerald-500">
                      Fish & Meat
                    </p>
                  </Link>
                </li>

                <li className="flex items-baseline">
                  <Link to="/search?Category=drinks">
                    <p className="text-gray-600 inline-block w-full hover:text-emerald-500">
                      Soft Drinks
                    </p>
                  </Link>
                </li>
                <li className="flex items-baseline">
                  <Link to="search?Category=baby-care">
                    <p className="text-gray-600 inline-block w-full hover:text-emerald-500">
                      Baby Care
                    </p>
                  </Link>
                </li>
                <li className="flex items-baseline">
                  <Link to="search?Category=beauty--health">
                    <p className="text-gray-600 inline-block w-full hover:text-emerald-500">
                      Beauty & Health
                    </p>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3">
              <h3 className="text-md lg:leading-7 font-medium mb-4 sm:mb-5 lg:mb-6 pb-0.5">
                My Account
              </h3>
              <ul className="text-sm lg:text-15px flex flex-col space-y-3">
                <li className="flex items-baseline">
                  <Link to="/">
                    <p className="text-gray-600 inline-block w-full hover:text-emerald-500">
                      Dashboard
                    </p>
                  </Link>
                </li>
                <li className="flex items-baseline">
                  <Link to="/">
                    <p className="text-gray-600 inline-block w-full hover:text-emerald-500">
                      My Orders
                    </p>
                  </Link>
                </li>
                <li className="flex items-baseline">
                  <Link to="/">
                    <p className="text-gray-600 inline-block w-full hover:text-emerald-500">
                      Recent Orders
                    </p>
                  </Link>
                </li>
                <li className="flex items-baseline">
                  <Link to="/">
                    <p className="text-gray-600 inline-block w-full hover:text-emerald-500">
                      Updated Profile
                    </p>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3">
              <Link to="/">
                <p className="mr-3 lg:mr-12 xl:mr-12" rel="noreferrer">
                  <img width={110} height={40} src="/azamlogo.jpg" alt="logo" />
                </p>
              </Link>
              <p className="leading-7 font-sans text-sm text-gray-600 mt-3">
                <span>
                  987 Andre Plain Suite High Street 838, <br /> Lake Hestertown,
                  USA
                </span>
                <br />
                <span>Tell: 02.356.1666</span>
                <br />
                <span>Email: ccruidk@test.com</span>
              </p>
            </div>
          </div>

          <hr className="hr-line"></hr>

          <div className="mx-auto max-w-screen-2xl px-4 sm:px-10 bg-gray-50 shadow-sm border border-gray-50 rounded-lg">
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-5 sm:gap-9 lg:gap-11 xl:gap-7 py-8 items-center justify-between">
              <div className="col-span-1">
                <span className="text-base leading-7 font-medium block mb-2 pb-0.5">
                  Follow Us
                </span>
                <ul className="text-sm flex">
                  <li className="flex items-center mr-3 transition ease-in-out duration-500">
                    <Link to="https://www.facebook.com">
                      <p
                        aria-label="Social Link"
                        rel="noreferrer"
                        target="_blank"
                        className="block text-center mx-auto text-gray-500 hover:text-white"
                      >
                        <FacebookIcon size={34} round />
                      </p>
                    </Link>
                  </li>
                  <li className="flex items-center  mr-3 transition ease-in-out duration-500">
                    <Link to="https://twitter.com">
                      <p
                        aria-label="Social Link"
                        rel="noreferrer"
                        target="_blank"
                        className="block text-center mx-auto text-gray-500 hover:text-white"
                      >
                        <TwitterIcon size={34} round />
                      </p>
                    </Link>
                  </li>
                  <li className="flex items-center mr-3 transition ease-in-out duration-500">
                    <Link to="https://www.pinterest.com">
                      <p
                        aria-label="Social Link"
                        rel="noreferrer"
                        target="_blank"
                        className="block text-center mx-auto text-gray-500 hover:text-white"
                      >
                        <PinterestIcon size={34} round />
                      </p>
                    </Link>
                  </li>
                  <li className="flex items-center  mr-3 transition ease-in-out duration-500">
                    <Link to="https://www.linkedin.com">
                      <p
                        aria-label="Social Link"
                        rel="noreferrer"
                        target="_blank"
                        className="block text-center mx-auto text-gray-500 hover:text-white"
                      >
                        <LinkedinIcon size={34} round />
                      </p>
                    </Link>
                  </li>
                  <li className="flex items-center  mr-3 transition ease-in-out duration-500">
                    <Link to="https://www.whatsapp.com">
                      <p
                        aria-label="Social Link"
                        rel="noreferrer"
                        target="_blank"
                        className="block text-center mx-auto text-gray-500 hover:text-white"
                      >
                        <WhatsappIcon size={34} round />
                      </p>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-span-1 text-center hidden lg:block md:block">
                <p className="text-base leading-7 font-medium block">
                  Call Us Today!
                </p>
                <h5 className="text-2xl font-bold text-emerald-500 leading-7">
                  +012345-67900
                </h5>
              </div>
              <div className="col-span-1 hidden lg:block md:block">
                <ul className="lg:text-right">
                  <li className="px-1 mb-2 md:mb-0 transition hover:opacity-80 inline-flex">
                    <img
                      width="100px"
                      height={85}
                      className="w-full"
                      src="/payment-logo.png"
                      alt="payment method"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-screen-2xl px-3 sm:px-10 flex justify-center py-4">
          <h2 className="text-sm text-gray-500 leading-6">
            Copyright 2022 @{" "}
            <Link to="https://themeforest.net/user/htmllover">
              <span
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-500"
              >
                AzamDeal
              </span>
            </Link>
            , All rights reserved.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
