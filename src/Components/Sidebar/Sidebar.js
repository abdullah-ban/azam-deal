import React, { useEffect, useState } from "react";
import { BiCategoryAlt } from "react-icons/bi";
import { GiCancel } from "react-icons/gi";

const Sidebar = () => {
  const [getVar, setGetVar] = useState([]);

  useEffect(() => {
    var requestOptions = {
      method: "POST",
      redirect: "follow",
    };

    fetch(
      "https://team.flymingotech.in/azamDeals/public/api/readall/categories",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setGetVar(result.data);
      })
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <div>
      {console.log(getVar)}
      <div>
        <div className="text-lg text-black p-5">
          <div className="flex items-center justify-between font-extrabold font-sans text-start text-2xl  pb-3 text-emerald-500">
            <p className="">Azam Deal</p>
            <button className="text-gray-500">
              <GiCancel />
            </button>
          </div>
          <hr className="border border-gray-500" />
          <div>
            <h1 className="flex items-center font-extrabold text-xl text-gray-700 mt-1 p-1">
              <BiCategoryAlt />
              <span className="ml-2 p-2">Categories</span>
            </h1>
            <hr />
            {getVar &&
              getVar.map((el, index) => {
                return (
                  <div  key={index}>
                    <div className="p-4">
                      <li className="font-bold text-lg text-black list-disc">
                        {el.name}
                      </li>
                    </div>
                    <hr />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
