import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FiChevronRight, FiMinus, FiPlus } from "react-icons/fi";
import { Pagination, Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  RedditIcon,
  RedditShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import { useEffect, useState } from "react";
import Layout from "../../Layout/Layout";
import ProductSideCard from "./ProductSideCard";
import {
  Backdrop,
  CircularProgress,
  getListItemSecondaryActionClassesUtilityClass,
} from "@mui/material";
import { toast, ToastContainer } from "react-toastify";

const ProductDetail = () => {
  const Navigate = useNavigate();
  const [item, setItem] = useState(1);

  // lOader Hooks
  const [load, setLoad] = useState(true);
  const [defaultLoading, setDefaultLoading] = useState(false);

  // Product Detail Integration
  const [getProductData, setGetProductData] = useState("");
  const [category, setCategory] = useState("");
  const [variation, setVariation] = useState([]);

  // Local Storage
  const [isLogin, setIsLogin] = useState();

  const getProductDetails = async () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    await fetch(
      `https://team.flymingotech.in/azamDeals/public/api/readByID/${localStorage.getItem(
        "Product ID"
      )}/read`,
      requestOptions
    )
      .then((response) => response.json())
      .then(async (result) => {
        // console.log(result);
        setGetProductData(result[0].data);
        setVariation(result[0].data?.variations);
        setSelectedVariations(result[0].data?.variations[0]);
        setCategory(result[0].category_name);
        if (result.status === 200) {
          setLoad(false);
        } else {
          setLoad(false);
        }
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getProductDetails();
    setIsLogin(localStorage.getItem("isLogin"));
  }, []);

  const [variationId, setVariationId] = useState();
  const handleAddToCart = async () => {
    if (isLogin !== "Yes") {
      Navigate("/login");
    } else {
      setDefaultLoading(true);
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        product_id: getProductData.id,
        item_qty: item,
        item_price: selectedVariations.variation_price,
        total_price: selectedVariations.variation_price * item,
        c_id: localStorage.getItem("customer_id"),
        variation_id: variationId ? variationId : selectedVariations.id,
      });
      console.log(raw);

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      await fetch(
        "https://team.flymingotech.in/azamDeals/public/api/new_cart",
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          if (result.status === 1) {
            toast.success("Added Successfully", {
              theme: "light",
              autoClose: "2000",
            });
            setDefaultLoading(false);
          }
        })
        .catch((error) => console.log("error", error));
    }
  };

  // Variartion
  const [selectedVariations, setSelectedVariations] = useState([]);
  const handleGetByVariation = async (id) => {
    // setLoad(true);
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    // console.log(id);
    await fetch(
      `https://team.flymingotech.in/azamDeals/public/api/getdataByV_id/${id}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        // console.log(result);
        setSelectedVariations(result.variation[0]);
      })
      .catch((error) => console.log("error", error));
    setLoad(false);
  };

  useEffect(() => {
    const defaultVariation = async () => {
      await setVariationId(selectedVariations.id);
    };
    defaultVariation();
  }, []);

  return (
    <>
      {load ? (
        <div className="h-screen bg-white"></div>
      ) : (
        <Layout>
          <div className="px-0 py-10 lg:py-10 font-sans">
            <div className="mx-auto px-3 lg:px-10 max-w-screen-2xl">
              <div className="flex items-center pb-4">
                <ol className="flex items-center w-full overflow-hidden font-serif">
                  <li className="text-sm pr-1 transition duration-200 ease-in cursor-pointer hover:text-emerald-500 font-semibold">
                    <Link to="/">
                      <span>Home</span>
                    </Link>
                  </li>
                  <li className="text-sm mt-[1px]">
                    {" "}
                    <FiChevronRight />{" "}
                  </li>
                  <li className="text-sm pl-1 transition duration-200 ease-in cursor-pointer hover:text-emerald-500 font-semibold ">
                    <Link to="/">
                      {/* <a>{product.children}</a> */}Products
                    </Link>
                  </li>
                  <li className="text-sm mt-[1px]">
                    {" "}
                    <FiChevronRight />{" "}
                  </li>
                  <li className="text-sm px-1 transition duration-200 ease-in ">
                    {getProductData && getProductData.product_name}
                  </li>
                </ol>
              </div>
              <div className="w-full rounded-lg p-3 lg:p-12 bg-white">
                <h1 className="block md:block lg:hidden leading-7 text-xl mb-5 md:text-xl lg:text-2xl font-semibold font-serif text-gray-800">
                  {getProductData && getProductData.product_name}
                </h1>
                <div className="flex flex-col xl:flex-row">
                  <div className="flex-shrink-0 xl:pr-10 lg:block w-full mx-auto md:w-6/12 lg:w-5/12 xl:w-4/12">
                    {/* <Discount product={product} slug={true} /> */}
                    <Swiper
                      spaceBetween={30}
                      centeredSlides={true}
                      autoplay={{
                        delay: 8000,
                        disableOnInteraction: false,
                      }}
                      loop={true}
                      pagination={{
                        clickable: true,
                      }}
                      modules={[Autoplay, Pagination, Navigation]}
                      className="mySwiper"
                    >
                      <SwiperSlide className="h-full relative rounded-lg overflow-hidden">
                        <img
                          src={
                            "https://team.flymingotech.in/azamDeals/public/" +
                            getProductData.product_images
                          }
                          alt="herbal"
                          layout="responsive"
                          width={650}
                          height={650}
                        ></img>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                  <div className="w-full mt-10 md:mt-10 lg:mt-0">
                    <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row">
                      <div className="w-full md:w-7/12 md:pr-4 lg:pr-4 xl:pr-12">
                        <div className="mb-6">
                          <h1 className="hidden md:block lg:block leading-7 text-lg md:text-xl lg:text-2xl mb-1 font-semibold font-serif text-gray-800">
                            {getProductData && getProductData.product_name}
                          </h1>
                          <p className="uppercase font-serif font-medium text-gray-500 text-sm">
                            SKU :{" "}
                            <span className="font-sans font-bold text-gray-600">
                              9AF4F1
                            </span>
                          </p>
                          <div className="uppercase font-serif font-medium text-gray-500 text-sm">
                            {getProductData.in_stock === 1 ? (
                              <button
                                disabled
                                className="font-sans text-xs bg-emerald-100 text-gray-700 p-1 rounded-md"
                              >
                                Instock
                              </button>
                            ) : (
                              <button
                                disabled
                                className="font-sans text-xs bg-red-100 text-red-700 p-1 rounded-md"
                              >
                                Out of Stock
                              </button>
                            )}
                          </div>
                        </div>
                        {/* <Price product={product} /> */}
                        <div className="product-price font-bold text-3xl text-emerald-500">
                          {selectedVariations &&
                            selectedVariations.variation_price + "/-"}
                        </div>
                        <div>
                          <p className="text-sm leading-6 text-gray-500 md:leading-7">
                            {selectedVariations &&
                              selectedVariations.variation_desc}
                          </p>

                          <div className="flex items-center mt-4">
                            <div className="flex items-center justify-between space-s-3 sm:space-s-4 w-full">
                              <div className="group flex items-center justify-between rounded-md overflow-hidden flex-shrink-0 border h-11 md:h-12 border-gray-300">
                                <button
                                  onClick={() => setItem(item - 1)}
                                  disabled={item === 1}
                                  className="flex items-center justify-center flex-shrink-0 h-full transition ease-in-out duration-300 focus:outline-none w-8 md:w-12 text-heading border-e border-gray-300 hover:text-gray-500"
                                >
                                  <span className="text-dark text-base">
                                    <FiMinus />
                                  </span>
                                </button>
                                <p className="font-semibold flex items-center justify-center h-full  transition-colors duration-250 ease-in-out cursor-default flex-shrink-0 text-base text-heading w-8  md:w-20 xl:w-24">
                                  {item}
                                </p>
                                <button
                                  onClick={() => setItem(item + 1)}
                                  disabled={
                                    item === getProductData.available_qty
                                  }
                                  className="flex items-center justify-center h-full flex-shrink-0 transition ease-in-out duration-300 focus:outline-none w-8 md:w-12 text-heading border-s border-gray-300 hover:text-gray-500"
                                >
                                  <span className="text-dark text-base">
                                    <FiPlus />
                                  </span>
                                </button>
                              </div>
                              <button
                                onClick={() => handleAddToCart(getProductData)}
                                className="text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-serif text-center justify-center border-0 border-transparent rounded-md focus-visible:outline-none focus:outline-none text-white px-4 ml-4 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white bg-emerald-500 hover:bg-emerald-600 w-full h-12"
                              >
                                Add To Cart
                              </button>
                            </div>
                          </div>
                          <div className="flex flex-col mt-4">
                            <span className="font-serif font-semibold py-1 text-sm d-block">
                              <span className="text-gray-700">Category:</span>
                              <span className="bg-emerald-100 p-[5px] ml-2 rounded-md">
                                {category && category}
                              </span>
                            </span>
                          </div>

                          {/* Variation */}
                          <div className="font-serif font-semibold py-1 text-sm d-block text-gray-700 mt-5">
                            Variations:
                          </div>

                          <div className="grid list-none grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mt-2 gap-2">
                            {variation &&
                              variation.map((el, index) => {
                                return (
                                  <li key={index}>
                                    {/* {console.log(variation)} */}
                                    <input
                                      type="radio"
                                      id={el.id}
                                      name="hosting"
                                      defaultValue={el.id}
                                      className="hidden peer"
                                      defaultChecked={index === 0}
                                      required
                                      onChange={(e) =>
                                        setVariationId(e.target.value)
                                      }
                                    />
                                    <label
                                      htmlFor={el.id}
                                      className="inline-flex justify-between items-center p-1 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer  dark:peer-checked:text-emerald-500 peer-checked:border-emerald-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100"
                                      onClick={() =>
                                        handleGetByVariation(el.id)
                                      }
                                    >
                                      <div className="block">
                                        <div className="w-full text-lg font-semibold"></div>
                                        <div className="w-full text-sm font-bold capitalize">
                                          {el.variation_label}
                                        </div>
                                        <div className="w-full text-sm">
                                          {el.variation_desc}
                                        </div>
                                        <div className="w-full text-sm">
                                          <span className="font-bold capitalize">
                                            weigth:
                                          </span>
                                          {el.variation_weight}
                                        </div>
                                        <div className="w-full text-sm">
                                          <span className="font-bold">
                                            Price:
                                          </span>
                                          {el.variation_price}
                                        </div>
                                      </div>
                                    </label>
                                  </li>
                                );
                              })}
                          </div>

                          {/* social share */}
                          <div className="mt-8">
                            <h3 className="text-base font-semibold mb-1 font-serif">
                              Share your social network
                            </h3>
                            <p className="font-sans text-sm text-gray-500">
                              For get lots of traffic from social network share
                              this product
                            </p>
                            <ul className="flex mt-4">
                              <li className="flex items-center text-center border border-gray-100 rounded-full hover:bg-emerald-500  mr-2 transition ease-in-out duration-500">
                                <FacebookShareButton>
                                  <FacebookIcon size={32} round />
                                </FacebookShareButton>
                              </li>
                              <li className="flex items-center text-center border border-gray-100 rounded-full hover:bg-emerald-500  mr-2 transition ease-in-out duration-500">
                                <TwitterShareButton>
                                  <TwitterIcon size={32} round />
                                </TwitterShareButton>
                              </li>
                              <li className="flex items-center text-center border border-gray-100 rounded-full hover:bg-emerald-500  mr-2 transition ease-in-out duration-500">
                                <RedditShareButton>
                                  <RedditIcon size={32} round />
                                </RedditShareButton>
                              </li>
                              <li className="flex items-center text-center border border-gray-100 rounded-full hover:bg-emerald-500  mr-2 transition ease-in-out duration-500">
                                <WhatsappShareButton>
                                  <WhatsappIcon size={32} round />
                                </WhatsappShareButton>
                              </li>
                              <li className="flex items-center text-center border border-gray-100 rounded-full hover:bg-emerald-500  mr-2 transition ease-in-out duration-500">
                                <LinkedinShareButton>
                                  <LinkedinIcon size={32} round />
                                </LinkedinShareButton>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="w-full xl:w-5/12 lg:w-6/12 md:w-5/12">
                        <div className="mt-6 md:mt-0 lg:mt-0 bg-gray-50 border border-gray-100 p-4 lg:p-8 rounded-lg">
                          <ProductSideCard />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* related products */}
              <div className="pt-10 lg:pt-20 lg:pb-10">
                <h3 className="leading-7 text-lg lg:text-xl mb-3 font-semibold font-serif hover:text-gray-600">
                  Related Products
                </h3>
                <div className="flex">
                  <div className="w-full">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 gap-2 md:gap-3 lg:gap-3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      )}
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={load}
      >
        <CircularProgress color="success" />
      </Backdrop>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={defaultLoading}
      >
        <CircularProgress color="success" />
      </Backdrop>
      <ToastContainer />
    </>
  );
};

export default ProductDetail;
