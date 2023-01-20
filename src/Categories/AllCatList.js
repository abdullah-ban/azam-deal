import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllCatList = () => {
  const [data, setData] = useState([]);

  const getAllCategories = () => {
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
        setData(result.data);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <div>
      <div className="flex flex-col gap-4 p-5">
        {data &&
          data.map((el, index) => {
            return (
              <div key={index} className="w-full ">
                <Link>
                  <p className="p-1 rounded-md text-lg font-bold hover:bg-gray-300 text-gray-700">
                    {el.name}
                  </p>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default AllCatList;
