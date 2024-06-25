import React from "react";
import { useNavigate } from "react-router-dom";

const Layout = ({ img, head, desc, btntext, link }) => {
  const navigate = useNavigate();

  return (
    <main className="h-screen w-full overflow-hidden p-10">
      {/* Banner */}
      <div className="h-96 relative w-full ">
        <img className="h-full w-full object-cover" src={img} alt="" />
        <div className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-3xl font-bold text-white">{head}</h1>
        </div>
        <div className="h-full z-10 w-full bg-black/30 absolute top-0 left-0"></div>
      </div>

      {/* Text */}

      <h3 className="text-2xl mt-10 font-semibold text-center">{desc}</h3>

      <button
        onClick={() => navigate(link)}
        className="bg-red-500 px-5 py-3 text-white font-semibold mx-auto block mt-4"
      >
        {btntext}
      </button>
    </main>
  );
};

export default Layout;
