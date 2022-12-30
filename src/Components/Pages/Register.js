import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ImGoogle } from "react-icons/im";
import { AiFillEye } from "react-icons/ai";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Backdrop, CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";
import { click } from "@testing-library/user-event/dist/click";

const Login = () => {
  // Hooks
  const [name, setName] = useState("");
  const [email, setEmail] = useState();
  const [contact, setContact] = useState();
  const [password, setPassword] = useState();
  const [isActive, setIsActive] = useState("1");

  // Error Hooks
  const [nError, setNError] = useState();
  const [eError, setEError] = useState();
  const [cError, setCError] = useState();
  const [pError, setPError] = useState();

  // Loader
  const [load, setLoad] = useState(false);

  // Navigate
  let Navigate = useNavigate();

  // API
  const handleRegister = (e) => {
    e.preventDefault();
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
            Navigate("/login");
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
  useEffect(() => {
    console.log(isActive);
  }, []);

  return (
    <>
      <section className="bg-gray-50 min-h-screen flex items-center justify-center">
        {/* login container */}
        <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl items-center p-5 md:p-0 lg:p-0">
          {/* form */}
          <div className="md:w-1/2 px-8 md:px-12">
            <h2 className="font-bold text-2xl text-[#002D74]">Register</h2>
            <p className="text-xs mt-4 text-[#002D74]">
              If you are already a member, easily log in
            </p>
            <form action="" className="flex flex-col gap-4">
              {nError && <div className="text-xs text-red-500">{nError}</div>}
              <input
                className={`p-2 mt-8 rounded-xl border focus:outline-emerald-500 ${
                  name !== null ? "border-red-500" : "bodrer"
                } `}
                type="text"
                name="name"
                placeholder="Name"
                defaultValue={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="p-2 rounded-xl border focus:outline-emerald-500"
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="p-2 rounded-xl border focus:outline-emerald-500"
                type="number"
                maxLength="10"
                name="email"
                placeholder="Phone Number"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
              <div className="relative">
                <input
                  className="p-2 rounded-xl border w-full focus:outline-emerald-500"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <AiFillEye className="absolute top-1/2 right-3 -translate-y-1/2" />
                <input
                  type="hidden"
                  name=""
                  value="1"
                  onChange={(e) => setIsActive(e.target.value)}
                />
              </div>
              <button
                onClick={handleRegister}
                className="bg-emerald-500 rounded-xl text-white py-2 hover:scale-105 duration-300"
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
