import React, { useEffect, useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import CategorySidebarLG from "../Sidebar/CategorySidebarLG";

const CategoryBar = () => {
  let Navigate = useNavigate();

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

  const handleGoToCategoryPage = (el) => {
    Navigate({
      pathname: "/category-page",
      search: createSearchParams({
        id: el.id,
        name: el.name,
      }).toString(),
    });
  };

  return (
    <div>
      <div className="hidden md:hidden lg:block bg-slate-200 px-16 h-7">
        <div className="flex items-center">
          <div className="flex items-center">
            <h1 className="font-bold text-black hover:border-b-4">
              Categories:
            </h1>
          </div>
          <div className="grid grid-cols-8 gap-24 p-1 text-sm text-[#008000]">
            {data &&
              data.slice(0, 8).map((el, index) => {
                return (
                  <div key={index}>
                    <div
                      className="cursor-pointer font-semibold hover:border-b-4 hover:border-[#008000] list-none text-center ml-2"
                      onClick={() => handleGoToCategoryPage(el)}
                    >
                      {el.name.slice(0, 6)}..
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="text-black absolute right-5">
            <CategorySidebarLG />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryBar;
