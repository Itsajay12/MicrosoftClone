import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Drawer } from "flowbite";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between md:justify-around items-center m-3">
        <div className="left flex gap-4 md:order-3">
          <button
            class="focus:ring-4 md:hidden focus:ring-blue-300 font-medium rounded-lg text-sm  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            type="button"
            data-drawer-target="drawer-disable-body-scrolling"
            data-drawer-show="drawer-disable-body-scrolling"
            data-drawer-body-scrolling="false"
            aria-controls="drawer-disable-body-scrolling"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
         <div className="inline-block">
         <span className="hidden md:inline-block md:mr-4">Search</span>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
         </div>
        </div>
        <div className="logo  md:order-first flex gap-14">
          <img
            src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31"
            alt=""
            className="w-32"
          />
          <div className="md:flex hidden">
            <h5 className=" text- ml-3 hover:underline">Microsoft 365</h5>
            <h5 className=" text- ml-3 hover:underline">Teams</h5>
            <h5 className=" text- ml-3 hover:underline">Copilot</h5>
            <h5 className=" text- ml-3 hover:underline">Windows</h5>
            <h5 className=" text- ml-3 hover:underline">Surface</h5>
            <h5 className=" text- ml-3 hover:underline">Xbox</h5>
            <h5 className=" text- ml-3 hover:underline">Support</h5>
          </div>
        </div>
        <div className="div md:order-2 ">
          <select
            name=""
            id=""
            className=" text-sm decoration-transparent hidden md:inline-block"
          >
            <option value="">All Microsoft</option>
          </select>
        </div>
        <div className="right flex gap-7 md:order-4 md:inline-block ">
         <span className="hidden md:inline-block">Cart</span>
          <FontAwesomeIcon className="md:ml-4" icon={faCartShopping} />
          <span className="hidden md:inline-block md:ml-4">Signin</span>
          <FontAwesomeIcon className="md:ml-4" icon={faCircleUser} />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
