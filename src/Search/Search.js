import {
  Backdrop,
  Box,
  CircularProgress,
  circularProgressClasses,
  Skeleton,
} from "@mui/material";
import { Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { CgDanger } from "react-icons/cg";
import { FiBell, FiShoppingCart, FiUser } from "react-icons/fi";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import AllCatList from "../Categories/AllCatList";
import Navbar from "../Layout/Navbar/Navbar";
import NavbarTop from "../Layout/Navbar/NavbarTop";

const Search = () => {
  const [isLogin, setIsLogin] = useState();
  const [customerData, setCustomerData] = useState([]);
  const [cartItem, setCartItem] = useState();

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
        console.log(result);
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

  //
  //
  //
  //
  //
  //

  //
  //

  //

  //
  //
  //

  //
  //
  //
  //

  //
  //
  //
  //
  //

  let [SearchParams] = useSearchParams();

  const [NavigatedText, setNavigatedText] = useState(
    SearchParams.get("searchText")
  );

  const [spinner, setSpinner] = useState(true);

  const [searchText, setSearchText] = useState("");
  const [load, setLoad] = useState(false);
  const [searchData, setSearchData] = useState();
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    handleSearchHere();
  }, []);

  const handleSearchHere = async (e) => {
    if (e) {
      e.preventDefault();
    }
    setApiLoader(true);
    console.log(searchText);
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    await fetch(
      `https://team.flymingotech.in/azamDeals/public/api/search/${NavigatedText}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setSearchData(result.data);
        if (result.status === 200) {
          setApiLoader(false);
        } else if (result.status === 404) {
          setNotFound(true);
          setApiLoader(false);
        } else {
          setApiLoader(false);
        }
      })
      .catch((error) => console.log("error", error));
  };
  //
  //

  //
  //
  //
  //
  //
  //
  //
  //
  //

  //
  //
  //
  //
  //
  //

  //
  //
  //
  function FacebookCircularProgress(props) {
    return (
      <Box sx={{ position: "relative" }}>
        <CircularProgress
          variant="determinate"
          sx={{
            color: (theme) =>
              theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
          }}
          size={40}
          thickness={4}
          {...props}
          value={100}
        />
        <CircularProgress
          variant="indeterminate"
          disableShrink
          sx={{
            color: (theme) =>
              theme.palette.mode === "light" ? "#008000" : "#308fe8",
            animationDuration: "550ms",
            position: "absolute",
            left: 0,
            [`& .${circularProgressClasses.circle}`]: {
              strokeLinecap: "round",
            },
          }}
          size={40}
          thickness={4}
          {...props}
        />
      </Box>
    );
  }

  const [apiLoader, setApiLoader] = useState(true);

  const handleNavigateProductDetail = (el) => {
    console.warn(el);
    localStorage.setItem("Product ID", el.id);
    Navigate("/product-detail");
  };

  return (
    <div>
      <>
        {console.log(NavigatedText)}
        <NavbarTop />
        <div className="sticky top-0 z-100">
          {/* {console.log("Navbar=>", props)} */}
          <div className="block md:block lg:hidden bg-[#008000] bg-gradient-to-b from-[#008000] to-[#16b216]">
            <div className="flex items-center justify-between">
              <Link to="/" className="p-2 ml-2">
                <img
                  width={150}
                  height={40}
                  src="/azamlogo.jpg"
                  alt="logo"
                  className="mt-2 rounded-md"
                />
              </Link>
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
                    <img
                      width={150}
                      height={40}
                      src="/azamlogo.jpg"
                      alt="logo"
                    />
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
                            onChange={(e) => setNavigatedText(e.target.value)}
                            defaultValue={NavigatedText}
                            // value={}
                            className="form-input w-full pl-5 appearance-none transition ease-in-out border text-input text-sm font-sans rounded-md min-h-10 h-10 duration-200 bg-white focus:ring-0 outline-none border-none focus:outline-none placeholder-gray-500 placeholder-opacity-75"
                            placeholder="Search for products (e.g. fish, apple, oil)"
                          />
                        </div>
                        <button
                          onClick={handleSearchHere}
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
        </div>
        <div className="flex gap-10  mt-5 md:mt-10 lg:mt-10 bg-white">
          <div className="border-r h-full w-1/4 hidden md:block lg:block">
            {/* First Flex */}
            <div className="sticky top-0 z-100 p-5">
              <h1 className="font-bold text-2xl mb-5">Categories</h1>
              <hr className="w-full border border-[#008000]" />
              <div className="mb-5">
                <AllCatList />
              </div>
            </div>
          </div>

          <div className="p-2 md:p-3 lg:p-5 w-full">
            {apiLoader && (
              <div className="h-screen bg-white">
                <Box
                  sx={{ flexGrow: 1 }}
                  className="flex justify-center items-center pt-64"
                >
                  <FacebookCircularProgress />
                </Box>
              </div>
            )}
            {apiLoader ? (
              <div className="h-screen bg-white"></div>
            ) : (
              <>
                <div className="mb-5">
                  <h1 className="font-bold text-xl md:text-2xl lg:text-3xl">
                    Result Based On Search ({searchData ? searchData.length : 0}{" "}
                    items)
                  </h1>
                </div>
                <hr className="w-full border border-[#008000]" />
                <div>
                  <div className="bg-white rounded-2xl w-full">
                    {searchData &&
                      searchData.map((el, index) => {
                        return (
                          <div
                            key={index}
                            onClick={() => handleNavigateProductDetail(el)}
                          >
                            <div className="flex p-1">
                              <div className="ml-2 md:ml-5 lg:ml-5  md:mt-4 lg:mt-4">
                                <img
                                  src={el.product_base_image}
                                  alt="azamDeal"
                                  className="object-contain h-[190px] w-[150px] md:h-[185px] lg:h-[170px] rounded"
                                />
                              </div>

                              {/* Second Flex */}
                              <div className="w-2/3  p-5">
                                <div className="font-bold text-lg">
                                  <p>{el.product_name.slice(0, 15) + "..."}</p>
                                </div>
                                <div className="font-semibold text-sm">
                                  <p>{el.product_desc}</p>
                                </div>
                                <div className="flex justify-between items-center">
                                  <div className="font-semibold text-sm">
                                    {el.in_stock === 1 ? (
                                      <p className="text-[#008000] font-bold">
                                        In Stock
                                      </p>
                                    ) : (
                                      <p className="text-red-500">
                                        Out of Stock
                                      </p>
                                    )}
                                  </div>
                                  <div className="flex justify-between items-center">
                                    <div className="font-bold text-sm block md:hidden lg:hidden mt-2">
                                      <p>
                                        <span className="text-[#008000] text-xl">
                                          ₹{el.base_price}
                                        </span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* Third Flex */}
                              <div className="justify-end hidden md:block lg:block font-bold text-sm mt-2">
                                <p>
                                  <span className="text-[#008000] text-xl">
                                    ₹{el.base_price}
                                  </span>
                                </p>
                              </div>
                            </div>
                            <hr className="border-[0.5px] border-gray-200 mx-5" />
                          </div>
                        );
                      })}
                    {notFound && (
                      <div>
                        <div className="text-center font-bold text-[#008000] mt-20 mb-20">
                          <div className="flex justify-center">
                            <CgDanger className="font-bold text-5xl" />
                          </div>
                          Product Related To Search Not found
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </>

      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={load}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};

export default Search;
