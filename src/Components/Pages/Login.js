import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ImGoogle } from "react-icons/im";
import { AiFillEye } from "react-icons/ai";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { Backdrop, CircularProgress } from "@mui/material";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [load, setLoad] = useState(false);

  // Error Hooks
  const [inputError, setInputError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");

  let Navigate = useNavigate();
  const handleLogin = (e) => {
    setLoad(true);
    setInputError("");
    e.preventDefault();

    if (email === "") {
      setInputError("Please fill all information");
      setLoad(false);
    }
    if (pass === "") {
      setInputError("Please fill all information");
      setLoad(false);
    }

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      email: email,
      password: pass,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://team.flymingotech.in/azamDeals/public/api/loginapi",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.status === 200) {
          localStorage.setItem("customer_id", result.Customer_id);
          localStorage.setItem("Token", result.token);
          localStorage.setItem("isLogin", "Yes");
          Navigate("/");
        } else if (result.status === 401) {
          setPassError(result.message);
          setLoad(false);
        } else if (result.status === 404) {
          setEmailError(result.message);
          setLoad(false);
        } else {
          setLoad(false);
        }
      })
      .catch((error) => console.log("error", error));
  };
  const handleRegister = () => {
    setLoad(true);
    Navigate("/register");
  };

  return (
    <div>
      <section className="bg-gray-50 min-h-screen flex items-center justify-center">
        {/* login container */}
        <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl items-center p-5 md:p-0 lg:p-0">
          {/* form */}
          <div className="md:w-1/2 px-8 md:px-12">
            <h2 className="font-bold text-2xl text-[#002D74]">Login</h2>
            <p className="text-xs mt-4 text-[#002D74]">
              If you are already a member, easily log in
            </p>
            {inputError && (
              <div className="text-xs mt-3 border p-3 rounded-md bg-red-50 border-red-500 text-red-500">
                {inputError}
              </div>
            )}
            {emailError && (
              <div className="text-xs mt-3 border p-3 rounded-md bg-red-50 border-red-500 text-red-500">
                {emailError}
              </div>
            )}
            {passError && (
              <div className="text-xs mt-3 border p-3 rounded-md bg-red-50 border-red-500 text-red-500">
                {passError}
              </div>
            )}
            <form action="" className="flex flex-col gap-4">
              <input
                className="p-2 mt-8 rounded-xl border focus:outline-emerald-500"
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="relative">
                <input
                  className="p-2 rounded-xl border w-full focus:outline-emerald-500"
                  type="password"
                  name="password"
                  value={pass}
                  placeholder="Password"
                  onChange={(e) => setPass(e.target.value)}
                />
                <AiFillEye className="absolute top-1/2 right-3 -translate-y-1/2" />
              </div>
              <button
                onClick={handleLogin}
                className="bg-emerald-500 rounded-xl text-white py-2 hover:scale-105 duration-300"
              >
                Login
              </button>
            </form>
            <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
              <hr className="border-gray-400" />
              <p className="text-center text-sm">OR</p>
              <hr className="border-gray-400" />
            </div>
            <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]">
              <ImGoogle className="mx-1" />
              Login with Google
            </button>
            <div className="mt-5 text-xs border-b border-[#002D74] py-4 text-[#002D74]">
              <a href="#">Forgot your password?</a>
            </div>
            <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
              <p>Don`t have an account?</p>
              <button
                className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300"
                onClick={handleRegister}
              >
                Register
              </button>
            </div>
          </div>
          {/* image */}
          <div className="hidden md:block lg:block w-1/2 p-2">
            <img className="rounded-2xl" src="/login-pic.jpeg" />
          </div>
        </div>
      </section>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={load}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};

export default Login;
