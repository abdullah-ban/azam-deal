import React from "react";
import InputArea from "../Pages/Form/InputArea";
import Dashboard from "./Dashboard";

const UpdateProfile = () => {
  return (
    <Dashboard title="Update-Profile" description="This is edit profile page">
      <div className="max-w-screen-2xl">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h2 className="text-xl font-serif font-semibold mb-5">
                Update Profile
              </h2>
            </div>
          </div>
        </div>
        <form>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <div className="mt-10 sm:mt-0">
              <div className="md:grid-cols-6 md:gap-6">
                <div className="mt-5 md:mt-0 md:col-span-2">
                  <div className="lg:mt-6 mt-4 bg-white">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <InputArea
                          label="Full Name"
                          name="name"
                          type="text"
                          placeholder="Full Name"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <InputArea
                          label="Your Address"
                          name="address"
                          type="text"
                          placeholder="Your Address"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <InputArea
                          label="Phone/Mobile"
                          name="phone"
                          type="tel"
                          placeholder="Your Mobile Number"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <InputArea
                          label="Email Address"
                          name="email"
                          type="email"
                          placeholder="Your Email"
                        />
                      </div>
                    </div>
                    <div className="col-span-6 sm:col-span-3 mt-5 text-right">
                      <button
                        type="submit"
                        className="md:text-sm leading-5 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-medium text-center justify-center border-0 border-transparent rounded-md placeholder-white focus-visible:outline-none focus:outline-none bg-emerald-500 text-white px-5 md:px-6 lg:px-8 py-2 md:py-3 lg:py-3 hover:text-white hover:bg-emerald-600 h-12 mt-1 text-sm lg:text-sm w-full sm:w-auto"
                      >
                        Update Profile
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Dashboard>
  );
};

export default UpdateProfile;
