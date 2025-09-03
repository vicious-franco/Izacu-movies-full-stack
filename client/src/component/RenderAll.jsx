import React, { useContext } from "react";
import Sidebar from "./Sidebar";
import { Route, Routes } from "react-router-dom";
import HomePage from "../page/HomePage";
import LoginPage from "../page/LoginPage";
import WatchPage from "../page/WatchPage";
import Navigations from "./Navigations";
import SearchPage from "../page/SearchPage";
import { MyContext } from "../context/Context";

const RenderAll = () => {
  const { pathname } = useContext(MyContext);
  return (
    <section className="flex w-screen">
      <Sidebar />
      <div className="w-full">
        <div className={pathname.startsWith("/browse") ? "relative" : ""}>
          <Navigations />
        </div>
        <div className="bg-white h-[90vh] w-full">
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/watch" element={<WatchPage />} />
            <Route path="/browse-movies" element={<SearchPage />} />
          </Routes>
        </div>
      </div>
    </section>
  );
};

export default RenderAll;
