import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SidebarToggle from "../../Components/Sidebar/SidebarToggle";
import { FiHome, FiUser, FiShoppingCart, FiAlignLeft } from "react-icons/fi";

const MobileFooter = () => {
  const [isLogin, setIsLogin] = useState();
  const [customerData, setCustomerData] = useState([]);

  useEffect(() => {
    const getCustomerData = () => {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      fetch(
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

  return (
    <>
      <div className="flex flex-col h-full justify-between align-middle bg-white rounded cursor-pointer overflow-y-scroll flex-grow scrollbar-hide w-full">
        {/* <CategoryDrawer className="w-6 h-6 drop-shadow-xl" /> */}
      </div>
      <div className="lg:hidden fixed z-30 bottom-0 bg-emerald-500 flex items-center justify-between w-full h-16 px-3 sm:px-10">
        <div
          aria-label="Bar"
          className="flex items-center justify-center flex-shrink-0 h-auto relative focus:outline-none"
        >
          <span className="text-xl text-white">
            <SidebarToggle />
          </span>
        </div>
        <Link to="/">
          <a className="text-xl text-white" rel="noreferrer" aria-label="Home">
            {" "}
            <FiHome className="w-6 h-6 drop-shadow-xl" />
          </a>
        </Link>

        <Link
          to="/components/Cart/Cart"
          className="h-9 w-9 relative whitespace-nowrap inline-flex items-center justify-center text-white text-lg"
        >
          <span className="absolute z-10 top-0 right-0 inline-flex items-center justify-center p-1 h-5 w-5 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 bg-red-500 rounded-full">
            5
          </span>
          <FiShoppingCart className="w-6 h-6 drop-shadow-xl" />
        </Link>
        <button
          aria-label="User"
          type="button"
          className="text-xl text-white indicator justify-center"
          //   onClick={() => history.push("/components/Login/Login")}
        >
          <Link to="/components/Login/Login">
            {isLogin === "Yes" ? (
              <p className="capitalize pr-2 font-bold text-2xl">
                {customerData.length > 0 && customerData[0]["name"].slice(0, 1)}
              </p>
            ) : (
              <Link to="/components/Login/Login">
                <FiUser className="w-6 h-6 drop-shadow-xl" />
              </Link>
            )}
          </Link>
        </button>
      </div>
    </>
  );
};

export default MobileFooter;
