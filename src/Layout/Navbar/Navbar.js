import React, { useEffect, useState } from "react";
import { createSearchParams, Link, useNavigate } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { FiBell } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { LinkedinIcon } from "react-share";
import { Backdrop, CircularProgress, Skeleton } from "@mui/material";
import { Stack } from "@mui/system";

const Navbar = (props) => {
  const [isLogin, setIsLogin] = useState();
  const [customerData, setCustomerData] = useState([]);
  const [cartItem, setCartItem] = useState();

  // Loader Hooks
  const [load, setLoad] = useState(false);
  const [sLoading, setSLoading] = useState(false);

  useEffect(() => {
    const getCustomerData = async () => {
      setSLoading(true);
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
          // console.log(result);
          setCustomerData(result.data);
        })
        .catch((error) => console.log("error", error));
      setSLoading(false);
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
        // console.log(result);
        setCartItem(result);
      })
      .catch(
        (error) => {}
        // console.log("error", error)
      );
  };

  useEffect(() => {
    getTotalCartItems();
    if (isLogin === null) {
      setSLoading(false);
    }
  }, []);

  let Navigate = useNavigate();

  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    setLoad(true);
    Navigate({
      pathname: "/search",
      search: createSearchParams({
        searchText: searchText,
      }).toString(),
    });
  };

  return (
    <div>
      {/* {console.log("Navbar=>", props)} */}
      <div className="block md:block lg:hidden bg-[#008000] bg-gradient-to-b from-[#008000] to-[#16b216]">
        <div className="flex items-center justify-between">
          <div className="p-2 ml-2">
            <img
              width={150}
              height={40}
              src="/azamlogo.jpg"
              alt="logo"
              className="mt-2 rounded-md"
            />
          </div>
          <div>
            <div className="mr-2">
              {isLogin === "Yes" ? (
                <h1 className="text-white font-bold font-serif capitalize">
                  <span className="font-semibold font-sans mr-[2px]">
                    Welcome,{" "}
                  </span>
                  {sLoading && (
                    <Stack>
                      <Skeleton
                        animation="wave"
                        variant="text"
                        sx={{ fontSize: "1rem" }}
                      />
                    </Stack>
                  )}
                  {customerData.length > 0 &&
                    customerData[0]["name"].slice(0, 10) + ".."}
                </h1>
              ) : (
                <p className="text-white font-bold">Welcome to AD</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-gradient-to-t from-[#008000] to-[#16b216] md:bg-gradient-to-l md:from-[#008000] md:to-[#16b216] lg:bg-gradient-to-l lg:from-[#008000] lg:to-[#16b216] sticky top-0 z-20 rounded-b-lg md:rounded-b-none lg:rounded-b-none">
        <div className="max-w-screen-2xl mx-auto px-3 sm:px-10">
          <div className="top-bar h-16 lg:h-auto flex items-center justify-between py-4 mx-auto">
            <Link to="/">
              <div
                className="mr-3 lg:mr-12 xl:mr-12 hidden md:hidden lg:block cursor-pointer"
                onClick={() => Navigate("/")}
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
                        onChange={(e) => setSearchText(e.target.value)}
                        // value={}
                        className="form-input w-full pl-5 appearance-none transition ease-in-out border text-input text-sm font-sans rounded-md min-h-10 h-10 duration-200 bg-white focus:ring-0 outline-none border-none focus:outline-none placeholder-gray-500 placeholder-opacity-75"
                        placeholder="Search for products (e.g. fish, apple, oil)"
                      />
                    </div>
                    <button
                      onClick={handleSearch}
                      // disabled={searchText === ""}
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
                    onClick={() => setLoad(true)}
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
                <div>
                  {sLoading && (
                    <Stack>
                      <Skeleton
                        animation="wave"
                        variant="circular"
                        width={40}
                        height={40}
                      />
                    </Stack>
                  )}
                  {isLogin === "Yes" ? (
                    <Link to="/dashboard" className="capitalize">
                      {customerData.length > 0 &&
                        customerData[0]["name"].slice(0, 1)}
                    </Link>
                  ) : (
                    <Link to="/login">
                      <FiUser className="w-6 h-6 drop-shadow-xl" />
                    </Link>
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* second header */}
      {/* <div className="grid grid-cols-10">
        <NavbarCategories />
      </div> */}
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={load}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};

export default Navbar;
