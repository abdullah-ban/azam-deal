import { Backdrop, CircularProgress } from "@mui/material";
import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoArrowForward, IoReturnUpBackOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Layout from "../../Layout/Layout";
import InputArea from "../Pages/Form/InputArea";

const AddAddress = () => {
  let Navigate = useNavigate();

  // Create Address

  const [address, setAdress] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [country, setCountry] = useState();
  const [pincode, setPincode] = useState();
  const [label, setLabel] = useState();
  const [fName, setFName] = useState();
  const [lName, setLName] = useState();
  const [mobile, setMobile] = useState();
  const [email, setEmail] = useState();

  const [load, setLoad] = useState(false);

  const [fNameError, setFNameError] = useState()

  const handleAddAddress = async (e) => {
    e.preventDefault();
    let msg = "this feild is required";
    if (fName === "") {
      setFNameError(msg);
    } else {
      // setLoad(true);
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        address_line: address,
        city: city,
        state: state,
        country: country,
        pincode: pincode,
        label: label,
        customer_id: localStorage.getItem("customer_id"),
        first_name: fName,
        last_name: lName,
        mobile_number: mobile,
        email: email,
      });
      console.log(raw);

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch(
        "https://team.flymingotech.in/azamDeals/public/api/add_address",
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          if (result.status === 200) {
            toast.success("Address Added Successfully", {
              theme: "light",
              autoClose: "2000",
            });
            setLoad(false);
            Navigate("/address");
          } else {
            toast.error("Something went wrong", {
              theme: "light",
              autoClose: "2000",
            });
            setLoad(false);
          }
        })
        .catch((error) => console.log("error", error));
    }
  };

  const handleBack = (e) => {
    e.preventDefault();
    Navigate(-1);
  };

  return (
    <div>
      <Layout>
        <div className="bg-slate-100 flex justify-center rounded-md">
          <div className="flex items-center m-10 p-5 font-bold text-2xl text-gray-800">
            <FaMapMarkerAlt />
            <span className="text-gray-800">Add a new address</span>
          </div>
        </div>
        <div className="mx-2 md:mx-20 lg:mx-72 m-10">
          <div>
            <form className="mt-10">
              <div className="form-group">
                <h2 className="font-semibold font-serif text-base text-gray-700 pb-3">
                  01. Recievers Details
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                  <div className="">
                    <InputArea
                      label="First Name"
                      name="firstName"
                      type="text"
                      placeholder="first name"
                      value={fName}
                      onChange={(e) => setFName(e.target.value)}
                      autoComplete="off"
                    />
                    {fNameError && (
                      <div className="text-xs text-red-500 font-semibold ml-2">
                        {fNameError}
                      </div>
                    )}
                  </div>

                  <div className="">
                    <InputArea
                      label="Last name"
                      name="lastName"
                      type="text"
                      placeholder="last name"
                      value={lName || ""}
                      onChange={(e) => setLName(e.target.value)}
                      autoComplete="off"
                    />
                  </div>

                  <div className="">
                    <InputArea
                      label="Email address"
                      name="email"
                      type="email"
                      placeholder="youremail@gmail.com"
                      value={email || ""}
                      onChange={(e) => setEmail(e.target.value)}
                      autoComplete="off"
                    />
                  </div>

                  <div className="">
                    <InputArea
                      label="Phone number"
                      name="contact"
                      type="number"
                      placeholder="+062-123456789"
                      value={mobile || ""}
                      onChange={(e) => setMobile(e.target.value)}
                      autoComplete="off"
                    />
                  </div>
                </div>
              </div>

              <div className="form-group mt-12">
                <h2 className="font-semibold font-serif text-base text-gray-700 pb-3">
                  02. Shipping Details
                </h2>

                <div className="col-span-6">
                  <InputArea
                    label="Street address"
                    name="address"
                    type="text"
                    placeholder="address"
                    value={address || ""}
                    onChange={(e) => setAdress(e.target.value)}
                    autoComplete="off"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-4">
                  <div>
                    <InputArea
                      label="City"
                      name="city"
                      type="text"
                      placeholder="Mumbai"
                      value={city || ""}
                      onChange={(e) => setCity(e.target.value)}
                      autoComplete="off"
                    />
                  </div>

                  <div>
                    <InputArea
                      label="State"
                      name="country"
                      type="text"
                      placeholder="Maharashtra"
                      value={state || ""}
                      onChange={(e) => setState(e.target.value)}
                      autoComplete="off"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-4">
                  <div>
                    <InputArea
                      label="Country"
                      name="country"
                      type="text"
                      placeholder="India"
                      value={country || ""}
                      onChange={(e) => setCountry(e.target.value)}
                      autoComplete="off"
                    />
                  </div>
                  <div>
                    <InputArea
                      label="Pin Code"
                      name="zipCode"
                      type="text"
                      placeholder="123456"
                      maxLength={6}
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value)}
                      autoComplete="off"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group mt-12">
                <h2 className="font-semibold font-serif text-base text-gray-700">
                  03. Address Label
                </h2>
                <label
                  htmlFor="countries"
                  className="block text-gray-500 font-medium text-sm leading-none mt-5 mb-2"
                >
                  Select an option
                </label>
                <select
                  id="countries"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5"
                  onChange={(e) => setLabel(e.target.value)}
                  autoComplete="off"
                >
                  <option value="Home" defaultValue>
                    Home
                  </option>
                  <option value="Office">Office</option>
                  <option value="Others">Others</option>
                </select>
              </div>

              <div className="flex flex-col md:flex-row lg:flex-row justify-end mt-10">
                <div className="w-full md:w-60 lg:w-60">
                  <button
                    className="bg-indigo-50 border border-indigo-100 rounded py-3 text-center text-sm font-medium text-gray-700 hover:text-gray-800 hover:border-gray-300 transition-all flex justify-center font-serif w-full"
                    onClick={handleBack}
                  >
                    <span className="text-xl mr-2">
                      <IoReturnUpBackOutline />
                    </span>
                    Continue Shopping
                  </button>
                </div>
                <div className="ml-0 mt-4 md:mt-0 lg:mt-0 md:ml-5 lg:ml-5 w-full md:w-52 lg:w-52">
                  <button
                    onClick={handleAddAddress}
                    type="submit"
                    className="bg-emerald-500 hover:bg-emerald-600 border border-emerald-500 transition-all rounded py-3 text-center text-sm font-serif font-medium text-white flex justify-center w-full"
                  >
                    <span className="flex justify-center text-center">
                      Confirm
                      <span className="text-xl ml-2">
                        <IoArrowForward />
                      </span>
                    </span>
                  </button>
                </div>
              </div>
            </form>
            <ToastContainer />
            <Backdrop
              sx={{
                color: "#fff",
                zIndex: (theme) => theme.zIndex.drawer + 1,
              }}
              open={load}
            >
              <CircularProgress color="inherit" />
            </Backdrop>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default AddAddress;
