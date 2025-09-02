import React from "react";
import Sidebar from "./Sidebar";
import { Route, Routes } from "react-router-dom";
import HomePage from "../page/HomePage";
import LoginPage from "../page/LoginPage";
import WatchPage from "../page/WatchPage";
import Navigations from "./Navigations";
import SearchPage from "../page/SearchPage";

const RenderAll = () => {
  return (
    <section className="flex w-screen">
      <Sidebar />
      <div className="w-full">
        <Navigations />
        <div className="bg-white h-[90vh] w-full">
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/watch" element={<WatchPage />} />
            <Route path="/browse" element={<SearchPage />} />
          </Routes>
        </div>
      </div>
    </section>
  );
};

export default RenderAll;
