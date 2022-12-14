import React from "react";
import Layout from "../../Layout/Layout";
import Link from "next/link";
import { BsFillCartXFill, BsFillCheckCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { useState } from "react";
import { useEffect } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import UnlogCart from "./UnlogCart";
import { MdRemoveShoppingCart } from "react-icons/md";

const Cart = () => {
  const [cartItem, setCartItem] = useState([]);

  const GetAllCartItems = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://team.flymingotech.in/azamDeals/public/api/getby_customer_id/${localStorage.getItem(
        "customer_id"
      )}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        // console.log(result);
        setCartItem(result.data);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    GetAllCartItems();
  }, []);

  return (
    <Layout>
      <div>
        {/* Mobile */}
        <div className="block md:block lg:hidden p-10 bg-white h-64 rounded-2xl mt-2">
          <BsFillCheckCircleFill className="text-sm text-emerald-500" />
          <span className="text-center text-sm text-emerald-500">
            Your order is eligible for FREE Delivery. Select this option at
            checkout. Details.
          </span>
          <p className="text-xl font-semibold mt-2">
            Subtotal: <span>(6 {""} Items): ₹4999/-</span>
          </p>
          <input className="mt-1" type="checkbox" name="" id="" />
          <span className="mx-2 font-semibold text-sm">
            This Order Contains a Gift.
          </span>
          <div className="mt-5">
            <button
              type="submit"
              className="w-full p-2 bg-emerald-500 text-white rounded-md font-semibold"
            >
              Proceed to Buy
            </button>
          </div>
        </div>
        {/* Mobile */}
        <div className="flex flex-col md:flex-col lg:flex-row p-1 md:p-10 lg:p-10">
          <div className="bg-white rounded-2xl shadow-2xl w-full">
            <div className="p-10 font-bold text-3xl">Shopping Cart</div>
            <hr className="border-[1px] mx-5 border-emerald-500" />
            {cartItem.length > 0 ? (
              cartItem.map((el, index) => {
                return (
                  <div key={index}>
                    <div className="flex p-1">
                      <div className="ml-2 md:ml-5 lg:ml-5 mt-7 md:mt-4 lg:mt-4">
                        <img
                          src={
                            "https://team.flymingotech.in/azamDeals/public/" +
                            el.products.product_images
                          }
                          alt="azamDeal"
                          className="h-[190px] w-[150px] md:h-[185px] lg:h-[170px] rounded"
                        />
                      </div>

                      {/* Second Flex */}
                      <div className="w-2/3  p-5">
                        <div className="font-bold text-lg">
                          <p>{el.products.product_name}</p>
                        </div>
                        <div className="font-semibold text-sm">
                          <p>{el.products.product_desc.slice(0, 100)}</p>
                        </div>
                        <div className="font-semibold text-sm">
                          {el.products.in_stock === 1 ? (
                            <p className="text-emerald-500 font-bold">
                              In Stock
                            </p>
                          ) : (
                            <p className="text-red-500">Out of Stock</p>
                          )}
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center font-bold text-sm mt-3">
                            <p className="mr-2 hidden md:block lg:block">
                              Qty:{" "}
                            </p>
                            <div className="flex items-center border text-emerald-500 border-emerald-200 rounded-md p-1">
                              <button>
                                <AiOutlinePlus className="text-lg md:text-2xl lg:text-2xl font-semibold mx-2" />
                              </button>
                              <span className="text-center text-black px-5 border border-t-white border-b-white border-x-emerald-500">
                                {el.item_qty}
                              </span>
                              <button>
                                <AiOutlineMinus className="text-lg md:text-2xl lg:text-2xl font-semibold mx-2" />
                              </button>
                            </div>
                          </div>
                          <div className="font-bold text-sm block md:hidden lg:hidden mt-2">
                            <p>
                              <span className="text-emerald-500 text-xl">
                                ₹{el.products.base_price}.00
                              </span>
                            </p>
                          </div>
                        </div>
                        <div>
                          <button className="p-2 w-full bg-red-500 md:bg-white lg:bg-white md:text-red-500 lg:text-red-500 outline md:outline-red-500 lg:outline-red-500 text-white font-semibold mt-2 rounded-md">
                            Remove
                          </button>
                        </div>
                      </div>
                      {/* Third Flex */}
                      <div className="justify-end hidden md:block lg:block font-bold text-sm mt-2">
                        <p>
                          <span className="text-emerald-500 text-xl">
                            ₹{el.products.base_price}.00
                          </span>
                        </p>
                      </div>
                    </div>
                    <hr className="border-[0.5px] border-gray-200 mx-5" />
                  </div>
                );
              })
            ) : (
              <div className="bg-white p-5 rounded-2xl w-full md:w-2/3 lg:w-2/3">
                <div className="flex justify-around items-center">
                  <div>
                    <MdRemoveShoppingCart className="text-9xl text-gray-500 " />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-gray-700">
                      <span className="font-bold">No..! Items Available</span>
                      <br /> Please Add items to carts...!
                    </p>
                    <div className="flex mt-5 justify-center"></div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="hidden md:hidden lg:block sticky top-20 z-50 p-10 bg-white ml-10 h-64 rounded-2xl shadow-xl">
            <BsFillCheckCircleFill className="text-sm text-emerald-500" />
            <span className="text-center text-sm text-emerald-500">
              Your order is eligible for FREE Delivery. Select this option at
              checkout. Details.
            </span>
            <p className="text-xl font-semibold mt-2">
              Subtotal: <span>(6 {""} Items): ₹4999/-</span>
            </p>
            <input className="mt-1" type="checkbox" name="" id="" />
            <span className="mx-2 font-semibold text-sm">
              This Order Contains a Gift.
            </span>
            <div className="mt-5">
              <button
                type="submit"
                className="w-full p-2 bg-emerald-500 text-white hover:bg-emerald-600 rounded-md font-semibold"
              >
                Proceed to Buy
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
