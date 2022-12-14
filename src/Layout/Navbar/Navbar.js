import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { FiBell } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { LinkedinIcon } from "react-share";

const Navbar = () => {
  const [isLogin, setIsLogin] = useState();
  const [customerData, setCustomerData] = useState([]);
  const [cartItem, setCartItem] = useState();

  useEffect(() => {
    const getCustomerData = async () => {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      await fetch(
        `https://team.flymingotech.in/azamDeals/public/api/customer_address/${localStorage.getItem(
          "customer_id"
        )}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          setCustomerData(result.data);
        })
        .catch((error) => console.log("error", error));
    };
    getCustomerData();
  }, []);

  useEffect(() => {
    setIsLogin(localStorage.getItem("isLogin"));
  }, []);

  // Total Cart Amount
  const getTotalCartItems = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://team.flymingotech.in/azamDeals/public/api/countCartItems/${localStorage.getItem(
        "customer_id"
      )}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setCartItem(result);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getTotalCartItems();
  }, []);

  return (
    <div>
      <div className="bg-emerald-500 sticky top-0 z-20">
        <div className="max-w-screen-2xl mx-auto px-3 sm:px-10">
          <div className="top-bar h-16 lg:h-auto flex items-center justify-between py-4 mx-auto">
            <Link to="/">
              <div
                className="mr-3 lg:mr-12 xl:mr-12 hidden md:hidden lg:block"
                onClick={() => {}}
              >
                <img width={150} height={40} src="/azamlogo.jpg" alt="logo" />
              </div>
            </Link>
            <div className="w-full transition-all duration-200 ease-in-out lg:flex lg:max-w-[520px] xl:max-w-[750px] 2xl:max-w-[900px] md:mx-12 lg:mx-4 xl:mx-0">
              <div className="w-full flex flex-col justify-center flex-shrink-0 relative z-30">
                <div className="flex flex-col mx-auto w-full">
                  <form
                    // onSubmit={handleSubmit}
                    className="relative pr-12 md:pr-14 bg-white overflow-hidden shadow-sm rounded-md w-full"
                  >
                    <div className="flex items-center py-0.5">
                      <input
                        // onChange={(e) => setSearchText(e.target.value)}
                        // value={searchText}
                        className="form-input w-full pl-5 appearance-none transition ease-in-out border text-input text-sm font-sans rounded-md min-h-10 h-10 duration-200 bg-white focus:ring-0 outline-none border-none focus:outline-none placeholder-gray-500 placeholder-opacity-75"
                        placeholder="Search for products (e.g. fish, apple, oil)"
                      />
                    </div>
                    <button
                      aria-label="Search"
                      type="submit"
                      className="outline-none text-xl text-gray-400 absolute top-0 right-0 end-0 w-12 md:w-14 h-full flex items-center justify-center transition duration-200 ease-in-out hover:text-heading focus:outline-none"
                    >
                      <BiSearch />
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="hidden md:hidden md:items-center lg:flex xl:block absolute inset-y-0 right-0 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                className="pr-5 text-white text-2xl font-bold"
                aria-label="Alert"
              >
                <FiBell className="w-6 h-6 drop-shadow-xl" />
              </button>
              {isLogin === "Yes" ? (
                <Link to="/cart-page">
                  <button
                    aria-label="Total"
                    onClick={() => Navigate("/cart-page")}
                    className="relative px-5 text-white text-2xl font-bold"
                  >
                    <span className="absolute z-10 top-0 right-0 inline-flex items-center justify-center p-1 h-5 w-5 text-xs font-medium leading-none text-red-100 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
                      {cartItem === undefined ? "0" : cartItem.data}
                    </span>
                    <FiShoppingCart className="w-6 h-6 drop-shadow-xl" />
                  </button>
                </Link>
              ) : (
                <Link to="/log-cart">
                  <button
                    aria-label="Total"
                    className="relative px-5 text-white text-2xl font-bold"
                  >
                    {" "}
                    <FiShoppingCart className="w-6 h-6 drop-shadow-xl" />
                  </button>
                </Link>
              )}
              {/* Profile dropdown */}
              {/* {console.log(cartTotal)} */}
              <button
                className="pl-5 text-white text-3xl font-bold"
                aria-label="Login"
              >
                <Link href="/components/Login/Login">
                  {isLogin === "Yes" ? (
                    <p className="capitalize">
                      {customerData.length > 0 &&
                        customerData[0]["name"].slice(0, 1)}
                    </p>
                  ) : (
                    <Link to="/login">
                      <FiUser className="w-6 h-6 drop-shadow-xl" />
                    </Link>
                  )}
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* second header */}
      {/* <div className="grid grid-cols-10">
        <NavbarCategories />
      </div> */}
    </div>
  );
};

export default Navbar;
