import React from "react";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black/30 via-violet-600 to-black/50 p-4">
      <Outlet />
      <div className="relative mt-24 flex items-center justify-center">
        <div className="relative border border-white/30 rounded-md w-full md:max-w-[70vw] lg:max-w-[50em] h-60 overflow-hidden">
          {/* Rotating background */}
          <div className="absolute inset-0 animate-rotate">
            <div className="w-[200%] h-[200%] -left-1/2 -top-1/2 absolute bg-gradient-to-r from-white  to-violet-800 rounded-full blur-3xl opacity-70" />
          </div>

          {/* Foreground form */}
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <form className="w-full h-full bg-violet-950/90 backdrop-blur-3xl p-4 rounded-lg flex flex-col gap-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 rounded bg-black/20 text-white outline-none"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-2 rounded bg-black/20 text-white outline-none"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
