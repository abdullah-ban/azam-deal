import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../Layout/Layout";
import PageHeader from "../Pages/PageHeader";
import InputArea from "./Form/InputArea";
import Label from "./Form/Label";
import { FiMail, FiMapPin, FiPhoneCall } from "react-icons/fi";

const ContactUs = () => {
  return (
    <div>
      <Layout title="Contact Us" description="This is contact us page">
        <PageHeader title="Contact Us" />

        <div className="bg-white">
          <div className="max-w-screen-2xl mx-auto lg:py-20 py-10 px-4 sm:px-10">
            {/* contact promo */}
            <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-3 xl:gap-8 font-serif">
              <div className="border p-10 rounded-lg text-center">
                <span className="flex justify-center text-4xl text-emerald-500 mb-4">
                  <FiMail />
                </span>
                <h5 className="text-xl mb-2 font-bold">Email Us</h5>
                <p className="mb-0 text-base opacity-90 leading-7">
                  <Link to="/" className="text-emerald-500">
                    kachabazar@gmail.com
                  </Link>{" "}
                  Interactively grow empowered for process-centric total
                  linkage.
                </p>
              </div>
              <div className="border p-10 rounded-lg text-center">
                <span className="flex justify-center text-4xl text-emerald-500 mb-4">
                  <FiPhoneCall />
                </span>
                <h5 className="text-xl mb-2 font-bold">Call Us</h5>
                <p className="mb-0 text-base opacity-90 leading-7">
                  <Link to="/" className="text-emerald-500">
                    029-00124667
                  </Link>{" "}
                  Distinctively disseminate focused solutions clicks-and-mortar
                  ministate.
                </p>
              </div>
              <div className="border p-10 rounded-lg text-center">
                <span className="flex justify-center text-4xl text-emerald-500 mb-4">
                  <FiMapPin />
                </span>
                <h5 className="text-xl mb-2 font-bold">Location</h5>
                <p className="mb-0 text-base opacity-90 leading-7">
                  <Link to="/" className="text-emerald-500"></Link> Cecilia
                  Chapman, 561-4535 Nulla LA, United States 96522
                </p>
              </div>
            </div>

            {/* contact form */}
            <div className="px-0 pt-24 mx-auto items-center flex flex-col md:flex-row w-full justify-between">
              <div className="hidden md:w-full lg:w-5/12 lg:flex flex-col h-full">
                <img
                  width={874}
                  height={874}
                  src="/contact-us.png"
                  alt="logo"
                  className="block w-auto"
                />
              </div>
              <div className="px-0 pb-2 lg:w-5/12 flex flex-col md:flex-row">
                <form
                  onSubmit={() => {}}
                  className="w-full mx-auto flex flex-col justify-center"
                >
                  <div className="mb-12">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold font-serif mb-3">
                      For any suppoort just send your query
                    </h3>
                    <p className="text-base opacity-90 leading-7">
                      Collaboratively promote client-focused convergence
                      vis-a-vis customer directed alignments via plagiarize
                      strategic users and standardized infrastructures.
                    </p>
                  </div>

                  <div className="flex flex-col space-y-5">
                    <div className="flex flex-col md:flex-row space-y-5 md:space-y-0">
                      <div className="w-full md:w-1/2 ">
                        <InputArea
                          //   register={register}
                          label="Your Name"
                          name="name"
                          type="text"
                          placeholder="Inter Your Name"
                        />
                        {/* <Error errorName={errors.name} /> */}
                      </div>
                      <div className="w-full md:w-1/2 md:ml-2.5 lg:ml-5 mt-2 md:mt-0">
                        <InputArea
                          // //   register={register}
                          label="Your Email"
                          name="email"
                          type="email"
                          placeholder="Inter Your Email"
                        />
                        {/* <Error errorName={errors.email} /> */}
                      </div>
                    </div>
                    <div className="relative">
                      <InputArea
                        // register={register}
                        label="Subject"
                        name="subject"
                        type="text"
                        placeholder="Inter Your Subject"
                      />
                      {/* <Error errorName={errors.subject} /> */}
                    </div>
                    <div className="relative mb-4">
                      <Label label="Message" />
                      <textarea
                        name="message"
                        className="px-4 py-3 flex items-center w-full rounded appearance-none opacity-75 transition duration-300 ease-in-out text-sm focus:ring-0 bg-white border border-gray-300 focus:shadow-none focus:outline-none focus:border-gray-500 placeholder-body"
                        autoComplete="off"
                        spellCheck="false"
                        rows="4"
                        placeholder="Write your message here"
                      ></textarea>
                      {/* <Error errorName={errors.message} /> */}
                    </div>
                    <div className="relative">
                      <button
                        data-variant="flat"
                        className="md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold text-center justify-center border-0 border-transparent rounded-md placeholder-white focus-visible:outline-none focus:outline-none bg-emerald-500 text-white px-5 md:px-6 lg:px-8 py-3 md:py-3.5 lg:py-3 hover:text-white hover:bg-emerald-600 h-12 mt-1 text-sm lg:text-base w-full sm:w-auto"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default ContactUs;
