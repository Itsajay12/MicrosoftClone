import React from "react";

const Banner = () => {
  return (
    <div className="mx-20 flex  items-center mt-20 mb-10   ">
      {/* large */}
      <img
        className="hidden md:block"
        src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-Slim-Multi-Canvas-AEM-Game-Pass-Ultimate:VP5-1596x600"
        alt=""
      />
      <div className="left  text-white hidden md:block absolute mx-40">
        <h3 className="text-lg">Xbox Game Pass Ultimate</h3>
        <p className="font-bold text-sm w-60">
          Play new games on day one. Plus, enjoy hundreds of high-quality games
          with friends on console and PC.
        </p>
        <button className="bg-blue-600 text-white p-2 mt-2 hover:bg-blue-700">
          Join now
        </button>
      </div>
      {/* small */}
      <div className="flex flex-col md:hidden">
        <d-flex></d-flex>
        <img
          src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-Slim-Multi-Canvas-AEM-Game-Pass-Ultimate:VP2-859x540"
          alt=""
        className="cursor-pointer" />
           <div className="left  text-black md:hidden block  mt-10">
        <h3 className="text-lg">Xbox Game Pass Ultimate</h3>
        <p className="font-bold text-sm ">
          Play new games on day one. Plus, enjoy hundreds of high-quality games
          with friends on console and PC.
        </p>
        <button className="bg-blue-600 text-white p-2 mt-2 hover:bg-blue-700">
          Join now
        </button>
      </div>
      </div>
    </div>
  );
};

export default Banner;
