import React from "react";
import Sidebar from "./Sidebar";
import { Route, Routes } from "react-router-dom";
import HomePage from "../page/HomePage";
import LoginPage from "../page/LoginPage";
import WatchPage from "../page/WatchPage";
import Navigations from "./Navigations";

const RenderAll = () => {
  return (
    <section className="flex w-screen">
      <Sidebar />
      <div className="w-full">
        <Navigations />
        <div className="bg-white h-[90vh]">
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="watch" element={<WatchPage />} />
          </Routes>
        </div>
      </div>
    </section>
  );
};

export default RenderAll;
