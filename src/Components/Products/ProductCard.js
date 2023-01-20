import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import { IoBagAddSharp, IoAdd, IoRemove } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { Backdrop, Box, CircularProgress, Skeleton } from "@mui/material";

const ProductCard = ({ product }) => {
  const { items, addItem, updateItemQuantity, inCart } = useCart();

  let Navigate = useNavigate();

  const [productList, setProductList] = useState([]);
  const [load, setLoad] = useState(false);

  const getAllProducts = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      col_name: "product_name",
      order: "ASC",
      limit: "150",
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://team.flymingotech.in/azamDeals/public/api/getAllProducts",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        // console.log(result);
        setProductList(result.data);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const handleDetailPage = (el) => {
    setLoad(true);
    localStorage.setItem("Product ID", el.id);
    Navigate("/product-detail");
  };

  return (
    <>
      {productList &&
        productList.map((el, index) => {
          return (
            <div
              className="group box-border overflow-hidden flex rounded-md shadow-sm pe-0 flex-col items-center bg-white relative border"
              key={index}
            >
              <div
                onClick={() => handleDetailPage(el)}
                className="relative flex justify-center w-full cursor-pointer border-b"
              >
                <img
                  // unoptimized
                  // layout="responsive"
                  src={
                    el.product_images
                  }
                  width={160}
                  height={130}
                  alt="Tea"
                  className="object-scale-down transition duration-150 ease-linear transform group-hover:scale-105 h-52 w-full"
                />
              </div>
              <div className="w-full px-3 lg:px-4 pb-4 overflow-hidden">
                <div className="relative mb-1">
                  <span className="text-gray-400 font-medium text-xs d-block mb-1">
                    {el.id}
                  </span>
                  <h2 className="text-heading truncate mb-0 block text-sm font-medium text-gray-600">
                    <span className="line-clamp-2">{el.product_name}</span>
                  </h2>
                </div>

                <div className="flex justify-between items-center text-heading text-sm sm:text-base space-s-2 md:text-base lg:text-xl">
                  {"₹" + el.base_price}
                  <Link to="/product-detail">
                    <button
                      aria-label="cart"
                      className="h-9 w-9 flex items-center justify-center border border-gray-200 rounded text-[#008000] hover:border-emerald-500 hover:bg-emerald-500 hover:text-white transition-all"
                    >
                      {" "}
                      <span className="text-xl">
                        <IoBagAddSharp />
                      </span>{" "}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={load}
      >
        <CircularProgress color="success" />
      </Backdrop>
    </>
  );
};

export default ProductCard;
