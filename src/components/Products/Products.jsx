import React from "react";

const Products = () => {
  return (
    <div className="mt-4 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-10">
      <div className="card  w-80   ">
        <img
          className="h-auto max-w-xs mx-auto sm:w-72 "
          src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Surface-Laptop-5-M1-Platinum-01-1?wid=406&hei=230&fit=crop"
          alt=""
        />
        <div className="">
          <h4 className="font-bold text-lg">Surface Laptop 5</h4>
          <p>
            Sophisticated style and multitasking speed powered by 12th Gen
            Intel® Core, with Windows 11.
          </p>
          <div className="hover:translate-x-1 mx-4 text-2xl flex items-center text-blue-500">
            <span className=" text-lg hover:underline"> Learn more</span>
            <span className="">→</span>
          </div>
        </div>
      </div>

      <div className="card  w-80  ">
        <img
          className="h-auto max-w-xs mx-auto sm:w-72"
          src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-XSX-CP-Xbox-Series-X?wid=380&hei=213&fit=crop"
          alt=""
        />
        <div className="">
          <h4 className="font-bold text-lg">Xbox Series X</h4>
          <p>The fastest, most powerful Xbox ever.</p>

          <div className="hover:translate-x-1 mx-4 text-2xl flex items-center text-blue-500">
            <span className=" text-lg hover:underline">Shop Xbox series X</span>
            <span className="">→</span>
          </div>
        </div>
      </div>

      <div className="card    w-80 ">
        <img
          className="h-auto max-w-xs mx-auto sm:w-72"
          src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-XSS-CP-Xbox-Series-S-Evergreen?wid=380&hei=213&fit=crop"
          alt=""
        />
        <div className="">
          <h4 className="font-bold text-lg">Xbox Series S</h4>
          <p>Next-gen performance in the smallest Xbox ever.</p>
          <div className="hover:translate-x-1 mx-4 text-2xl flex items-center text-blue-500">
            <span className=" text-lg hover:underline">Shop Xbox series S</span>
            <span className="">→</span>
          </div>
        </div>
      </div>

      <div className="card  w-80 ">
        <img
          className="h-auto  sm:w-72"
          src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Studio-01-CP?wid=380&hei=213&fit=crop"
          alt=""
        />
        <div className="">
          <h4 className="font-bold text-lg" >Surface Laptop 5</h4>
          <p>
            Flex your creative muscle on the most powerful Surface Laptop. Now
            available with Windows 11.
          </p>
          <div className="hover:translate-x-1 mx-4 text-2xl flex items-center text-blue-500">
            <span className=" text-lg hover:underline"> Learn more</span>
            <span className="">→</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
