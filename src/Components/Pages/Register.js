import React, { useEffect } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import { ImGoogle } from "react-icons/im";
import { AiFillEye } from "react-icons/ai";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Backdrop, CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";
import { click } from "@testing-library/user-event/dist/click";
import { BsFillEyeSlashFill } from "react-icons/bs";

const Login = () => {
  // Hooks
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [isActive, setIsActive] = useState("1");

  // Error Hooks
  const [nError, setNError] = useState();
  const [eError, setEError] = useState();
  const [cError, setCError] = useState();
  const [pError, setPError] = useState();
  const [emailExist, setEmailExist] = useState();
  const [phoneExist, setPhoneExist] = useState();

  // Loader
  const [load, setLoad] = useState(false);

  // Navigate
  let Navigate = useNavigate();

  // API
  const handleRegister = (e) => {
    e.preventDefault();
    setNError("");
    setEError("");
    setCError("");
    setPError("");
    setEmailExist("");
    setPhoneExist("");
    if (name === "") {
      setNError("Enter Your Name");
    } else if (email === "") {
      setEError("This feild is required");
    } else if (contact === "") {
      setCError("This feild is required");
    } else if (password === "") {
      setPError("This feild is required");
    } else {
      setLoad(true);
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        name: name,
        email: email,
        contact: contact,
        password: password,
        is_active: isActive,
      });
      {
        console.log(raw);
      }
      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch(
        "https://team.flymingotech.in/azamDeals/public/api/customerreg",
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          if (result.status === 201) {
            Navigate({
              pathname: "/login",
              search: createSearchParams({
                Registered: true,
              }).toString(),
            });
          } else if (result.status === 401) {
            setEmailExist("email already exists");
            setLoad(false);
          } else if (result.status === 402) {
            setPhoneExist("Phone Number already exists :(");
            setLoad(false);
          } else {
            toast.error("Something went wrong!", {
              theme: "light",
              autoClose: "2000",
            });
            setLoad(false);
          }
        })
        .catch((error) => console.log("error", error));
    }
  };

  const [passLength, setPassLength] = useState();

  const [passwordType, setPasswordType] = useState("password");

  const handleChangePasswordType = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const togglePassword = (e) => {
    e.preventDefault();
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  return (
    <>
      <section className="bg-gray-50 min-h-screen flex items-center justify-center">
        {/* login container */}
        <div className="bg-gray-100 h-screen md:h-auto lg:h-auto flex rounded-2xl shadow-lg max-w-3xl items-center p-5 md:p-0 lg:p-0">
          {/* form */}
          <div className="md:w-1/2 px-8 md:px-12">
            <h2 className="font-bold text-2xl text-[#002D74]">Register</h2>
            <p className="text-xs mt-4 text-[#002D74]">
              If you are already a member, easily log in
            </p>
            <form action="" className="flex flex-col">
              <input
                className={`mt-8 p-2  rounded-xl border focus:outline-emerald-500`}
                type="text"
                name="name"
                placeholder="Name"
                defaultValue={name}
                onChange={(e) => setName(e.target.value)}
              />
              {nError && (
                <figcaption className="text-xs font-semibold text-red-500 ml-2">
                  {nError}
                </figcaption>
              )}
              <input
                className="mt-2 p-2 rounded-xl border focus:outline-emerald-500"
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="text-xs font-semibold text-red-500 ml-2">
                {eError}
              </div>
              <div className="text-xs font-semibold text-red-500 ml-2">
                {emailExist}
              </div>
              <input
                className="mt-2 p-2 rounded-xl border focus:outline-emerald-500"
                type="number"
                maxLength="10"
                name="email"
                placeholder="Phone Number"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
              <div className="text-xs font-semibold text-red-500 ml-2">
                {cError}
              </div>
              <div className="text-xs font-semibold text-red-500 ml-2">
                {phoneExist}
              </div>
              <div className="relative">
                <input
                  className="mt-2 p-2 rounded-xl border w-full focus:outline-emerald-500"
                  type={passwordType}
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={handleChangePasswordType}
                />
                <button onClick={togglePassword}>
                  {passwordType === "password" ? (
                    <AiFillEye className="cursor-pointer text-xl mt-1 absolute top-1/2 right-3 -translate-y-1/2" />
                  ) : (
                    <BsFillEyeSlashFill className="cursor-pointer mt-1 text-lg absolute top-1/2 right-3 -translate-y-1/2" />
                  )}
                </button>
                <div className="text-xs font-semibold text-red-500 ml-2">
                  {pError}
                </div>
                <input
                  type="hidden"
                  name=""
                  value="1"
                  onChange={(e) => setIsActive(e.target.value)}
                />
              </div>
              {passLength && (
                <p
                  className={`${
                    password < 4 ? "text-emerald-600" : "text-gray-500"
                  } text-xs font-semibold ml-5 mt-1 duration-300 scale-110`}
                >
                  {passLength}
                </p>
              )}
              <figcaption className="text-xs text-gray-500 ml-5 mt-1 duration-300 scale-110">
                Password must have 8 charachter & have special characters.
              </figcaption>
              <button
                onClick={handleRegister}
                className="bg-emerald-500 rounded-xl mt-5 text-white py-2 hover:scale-105 duration-300"
                id={"1"}
              >
                Register
              </button>
            </form>
            <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
              <hr className="border-gray-400" />
              <p className="text-center text-sm">OR</p>
              <hr className="border-gray-400" />
            </div>
            <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]">
              <ImGoogle className="mx-1" />
              Register with Google
            </button>
            <div>
              <p className="text-xs text-center mt-2">
                already have account.?{" "}
                <Link to="/login" className="underline text-emerald-500">
                  Login
                </Link>
              </p>
            </div>
          </div>
          {/* image */}
          <div className="hidden md:block lg:block w-1/2 p-2">
            <img className="rounded-2xl" src="/login-pic.jpeg" />
          </div>
        </div>
      </section>
      <ToastContainer position="top-center" className="mt-16" />
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={load}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
};

export default Login;
