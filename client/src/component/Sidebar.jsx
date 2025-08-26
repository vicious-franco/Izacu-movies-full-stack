import React, { useContext } from "react";
import { motion } from "framer-motion";
import { sidebarIcons } from "../assets/data";
import { typeOfMovies } from "../assets/data";
import { IoIosArrowDown } from "react-icons/io";
import { BiSolidCameraMovie } from "react-icons/bi";
import { MyContext } from "../context/Context";

const Sidebar = () => {
  const { showSidebar } = useContext(MyContext);

  return (
    <motion.div
      initial={{ width: "80px", opacity: 0 }}
      animate={{ width: showSidebar ? "220px" : "", opacity: 1 }}
      transition={{ duration: 0.4, type: "tween" }}
      className={`hidden md:flex border bg-[#010103] border-white/10 text-white h-screen ${
        showSidebar ? null : " justify-between items-center"
      } flex-col overflow-auto `}
    >
      <div className="flex items-center gap-2  mt-4">
        <span
          className={`font-bold text-3xl text-red-800 inline-block ${
            showSidebar ? "" : "m-auto"
          }`}
        >
          <BiSolidCameraMovie />
        </span>
        <div
          className={`${
            showSidebar ? "flex " : "hidden "
          } text-sm lg:text-lg gap-1 `}
        >
          <span className="font-semibold capitalize">Izacu</span>
          <span className="font-semibold text-red-800 uppercase">Movies</span>
        </div>
      </div>
      <div className="flex flex-col  border-b border-gray-600/35 pb-5">
        <p
          className={`text-gray-300/40 text-sm font-semibold mt-8   ${
            showSidebar ? "block px-3" : "hidden"
          }`}
        >
          News Feed
        </p>
        <div
          className={`flex   flex-col gap-1 mt-3 overflow-hidden ${
            showSidebar ? "px-5" : null
          }`}
        >
          {sidebarIcons.map(({ name, Icon, id }) => {
            return (
              <div
                key={id}
                className="flex  items-center gap-2 cursor-pointer hover:bg-red-800 px-2 active:bg-red-800  rounded-2xl py-3 capitalize  "
              >
                <span className="text-xl">
                  <Icon />
                </span>
                <h1
                  className={` ${
                    showSidebar ? "block" : "hidden"
                  } text-sm font-semibold text-gray-200 `}
                >
                  {name}
                </h1>
              </div>
            );
          })}
        </div>
      </div>
      <p
        className={`${
          showSidebar ? "block" : "hidden"
        } text-gray-300/40 text-sm font-semibold mt-6 mx-3`}
      >
        Filters
      </p>

      <div
        className={`flex  flex-col gap-1 mt-3 overflow-y-scroll scroll-style-one ${
          showSidebar ? "px-5" : null
        }`}
      >
        {typeOfMovies.map(({ name, Icon, id }) => {
          return (
            <div
              key={id}
              className="flex items-center gap-2 cursor-pointer hover:bg-red-800 rounded-2xl px-2 py-3 capitalize  "
            >
              <span className="text-xl">
                <Icon />
              </span>
              <h1
                className={` ${
                  showSidebar ? "block" : "hidden"
                } text-sm font-semibold text-gray-200 `}
              >
                {name}
              </h1>
            </div>
          );
        })}
      </div>
      <div
        className={`mx-6 flex items-center gap-2 mt-7 border-b border-gray-600/50 pb-6 ${
          showSidebar ? "block" : "hidden"
        }`}
      >
        <span className="flex cursor-pointer hover:bg-red-700 duration-300 h-9 w-9 bg-red-800 rounded-full items-center justify-center ">
          <IoIosArrowDown />
        </span>
        <span className="text-sm text-gray-400 font-semibold">Load more</span>
      </div>
      <div className="mt-4 pb-4">
        <h1 className="text-gray-500 text-center font-light">ATLAS Dev</h1>
      </div>
    </motion.div>
  );
};

export default Sidebar;
