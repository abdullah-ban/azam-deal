import Cookies from "js-cookie";
import dynamic from "next/dynamic";
import { Link, useNavigate } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import {
  IoGridOutline,
  IoListOutline,
  IoLockOpenOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { FiCheck, FiRefreshCw, FiShoppingCart, FiTruck } from "react-icons/fi";

//internal import
import Layout from "../../Layout/Layout";
import Card from "./Card";
import { HiOutlineDocumentText } from "react-icons/hi";
import RecentOrders from "./RecentOrders";
// import { userSidebar } from '@utils/data';
// import Card from '@component/order-card/Card';
// import { UserContext } from '@context/UserContext';
// import OrderServices from '@services/OrderServices';
// import RecentOrder from '@pages/user/recent-order';
// import { SidebarContext } from '@context/SidebarContext';
// import Loading from '@component/preloader/Loading';

const Dashboard = ({ children }) => {
  const Navigate = useNavigate();
  //   const {
  //     dispatch,
  //     state: { userInfo },
  //   } = useContext(UserContext);
  //   const { isLoading, setIsLoading, currentPage } = useContext(SidebarContext);

  //   const [data, setData] = useState({});
  //   const [error, setError] = useState('');
  //   const [loading, setLoading] = useState(true);

  //   useEffect(() => {
  //     OrderServices.getOrderByUser({
  //       page: currentPage,
  //       limit: 8,
  //     })
  //       .then((res) => {
  //         setData(res);
  //         setLoading(false);
  //       })
  //       .catch((err) => {
  //         setLoading(false);
  //         setError(err.message);
  //       });
  //   }, [currentPage]);

  //   const handleLogOut = () => {
  //     dispatch({ type: 'USER_LOGOUT' });
  //     Cookies.remove('userInfo');
  //     Cookies.remove('couponInfo');
  //     Navigate('/');
  //   };

  //   useEffect(() => {
  //     setIsLoading(false);
  //     if (!userInfo) {
  //       Navigate('/');
  //     }
  //   }, [userInfo]);

  //   console.log('dashbaord');
  const handleLogout = () => {
    localStorage.removeItem("isLogin");
    localStorage.removeItem("Token");
    localStorage.removeItem("customer_id");
    localStorage.removeItem("Product ID");
    localStorage.removeItem("CouponID");
    localStorage.removeItem("Address ID");
    Navigate("/");
  };

  const handleClickScroll = () => {
    const element = document.getElementById("section-1");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Layout>
        <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
          <div className="py-10 lg:py-12 flex flex-col lg:flex-row w-full">
            <div className="flex-shrink-0 w-full lg:w-80 mr-7 lg:mr-10  xl:mr-10 ">
              <div className="bg-white p-4 sm:p-5 lg:p-8 rounded-md sticky top-32">
                <span className="p-2 my-2 flex font-serif items-center rounded-md hover:bg-gray-50 w-full hover:text-emerald-600">
                  <IoGridOutline
                    className="flex-shrink-0 h-4 w-4"
                    aria-hidden="true"
                  />
                  <Link to="">
                    <p className="inline-flex items-center justify-between ml-2 text-sm font-medium w-full hover:text-emerald-600 font-sans">
                      Dashboard
                    </p>
                  </Link>
                </span>
                <span className="p-2 my-2 flex items-center rounded-md hover:bg-gray-50 w-full hover:text-emerald-600 font-sans">
                  <IoListOutline
                    className="flex-shrink-0 h-4 w-4"
                    aria-hidden="true"
                  />
                  <Link to="">
                    <p className="inline-flex items-center justify-between ml-2 text-sm font-medium w-full hover:text-emerald-600 font-sans">
                      My Orders
                    </p>
                  </Link>
                </span>
                <span className="p-2 my-2 flex items-center rounded-md hover:bg-gray-50 w-full hover:text-emerald-600 font-sans">
                  <IoSettingsOutline
                    className="flex-shrink-0 h-4 w-4"
                    aria-hidden="true"
                  />
                  <Link to="/update-profile">
                    <p className="inline-flex items-center justify-between ml-2 text-sm font-medium w-full hover:text-emerald-600">
                      Update Profile
                    </p>
                  </Link>
                </span>
                <span className="p-2 my-2 flex items-center rounded-md hover:bg-gray-50 w-full hover:text-emerald-600 font-sans">
                  <HiOutlineDocumentText
                    className="flex-shrink-0 h-4 w-4"
                    aria-hidden="true"
                  />
                  <Link to="">
                    <p className="inline-flex items-center justify-between ml-2 text-sm font-medium w-full hover:text-emerald-600">
                      Change Password
                    </p>
                  </Link>
                </span>
                <span className="p-2 flex font-serif items-center rounded-md hover:bg-gray-50 w-full hover:text-emerald-600">
                  <span className="mr-2">
                    <IoLockOpenOutline />
                  </span>{" "}
                  <button
                    className="inline-flex items-center justify-between text-sm font-medium w-full hover:text-emerald-600 font-sans"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </span>
              </div>
            </div>
            <div className="w-full bg-white mt-4 lg:mt-0 p-4 sm:p-5 lg:p-8 rounded-md overflow-hidden">
              <div className="overflow-hidden">
                <h2 className="text-xl font-serif font-semibold mb-5">
                  Dashboard
                </h2>
                <div className="grid gap-4 mb-8 md:grid-cols-2 xl:grid-cols-4">
                  <div onClick={handleClickScroll}>
                    <Card
                      title="Total Order"
                      Icon={FiShoppingCart}
                      quantity="144"
                      className="text-red-600  bg-red-200 font-sans"
                    />
                  </div>
                  <Card
                    title="Pending Order"
                    Icon={FiRefreshCw}
                    quantity="24"
                    className="text-orange-600 bg-orange-200 font-sans"
                  />
                  <Card
                    title="Processing Order"
                    Icon={FiTruck}
                    quantity="20"
                    className="text-indigo-600 bg-indigo-200 font-sans"
                  />
                  <Card
                    title="Complete Order"
                    Icon={FiCheck}
                    quantity="100"
                    className="text-emerald-600 bg-emerald-200 font-sans"
                  />
                </div>
                <RecentOrders id="section-1" />
              </div>
              {children}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default dynamic(() => Promise.resolve(Dashboard), { ssr: false });
