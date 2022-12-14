import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import { IoBagAddSharp, IoAdd, IoRemove } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { Backdrop, Box, CircularProgress, Skeleton } from "@mui/material";

const ProductCard = ({ product }) => {
  const { items, addItem, updateItemQuantity, inCart } = useCart();

  // const handleAddItem = (p) => {
  //   const newItem = {
  //     ...p,
  //     id: p._id,
  //   };
  //   addItem(newItem);
  // };

  let Navigate = useNavigate();

  const [productList, setProductList] = useState([]);
  const [load, setLoad] = useState(false);

  const getAllProducts = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      col_name: "product_name",
      order: "ASC",
      limit: "10",
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
        console.log(result);
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
              className="group box-border overflow-hidden flex rounded-md shadow-sm pe-0 flex-col items-center bg-white relative hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              key={index}
            >
              <div
                onClick={() => handleDetailPage(el)}
                className="relative flex justify-center w-full cursor-pointer"
              >
                {/* <span className="absolute inline-flex items-center justify-center px-2 py-1 bg-red-100 text-red-600 border-0 rounded-full text-xs font-semibold font-serif z-10 left-4 top-4">
            Stock Out
          </span>
          58% */}
                <img
                  // unoptimized
                  // layout="responsive"
                  src="/ADProduct.webp"
                  width={160}
                  height={130}
                  alt="Tea"
                  className="object-cover transition duration-150 ease-linear transform group-hover:scale-105"
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
                  {/* <div>
                    <div className="h-9 w-auto flex flex-wrap items-center justify-evenly py-1 px-2 bg-emerald-500 text-white rounded">
                      <button>
                        <span className="text-dark text-base">
                          <IoRemove />
                        </span>
                      </button>
                      <p className="text-sm text-dark px-1 font-serif font-semibold">
                        10
                      </p>
                      <button>
                        <span className="text-dark text-base">
                          <IoAdd />
                        </span>
                      </button>
                    </div>
                  </div> */}
                  <Link to="/product-detail">
                    <button
                      // onClick={() => router.push("Components/Product/ProductDetail")}
                      // disabled={product.quantity < 1}
                      aria-label="cart"
                      className="h-9 w-9 flex items-center justify-center border border-gray-200 rounded text-emerald-500 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white transition-all"
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
