import React, { useContext } from "react";
import person from "../assets/images/slide4.jpg";
import { CgProfile } from "react-icons/cg";
import { MdOutlineAccountTree } from "react-icons/md";
import { MyContext } from "../context/Context";
import { motion } from "framer-motion";

const Profile = () => {
  const { setshowSettings } = useContext(MyContext);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{opacity:0,duration:0.3}}
      transition={{ duration: 0.2 }}
      onMouseLeave={() => setshowSettings(false)}
      className="absolute top-20 right-5 bg-blue-950 border border-white/40  z-100 rounded-md p-4 "
    >
      <div className="flex flex-col text-gray-300">
        <div className="flex  items-center gap-3 ">
          <span className="w-8 h-8  inline-block hover:cursor-pointer   overflow-hidden object-fit rounded-full">
            <img src={person} className="w-ful h-full" alt="profile image" />
          </span>
          <p className=" text-sm">Irakaramale@gmail.com</p>
        </div>
        <div className="capitalize mt-5 text-gray-100">
          <div className="flex items-center text-red-800 gap-1">
            <span className="text-xl">
              <CgProfile />
            </span>
            <h1 className=" font-semibold inline-block ">profile</h1>
          </div>
          <div className="ml-3 mt-2">
            <p className="hover:text-gray-400 cursor-pointer">Username</p>
            <p className="hover:text-gray-400 cursor-pointer">
              profile picture
            </p>
          </div>
        </div>
        <div className=" text-gray-100  capitalize  my-3">
          <div className="flex items-center text-red-800 gap-1">
            <span className="text-xl">
              <MdOutlineAccountTree />
            </span>
            <h1 className=" font-semibold ">Account</h1>
          </div>
          <div className="ml-3 mt-2">
            <p className="hover:text-gray-400 cursor-pointer">
              Change password
            </p>
            <p className="hover:text-gray-400 cursor-pointer">LogOut</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Profile;
