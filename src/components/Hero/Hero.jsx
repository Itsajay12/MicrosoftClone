import React from "react";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row">
        <div className=" md:container bg-white md:bg-blue-200 px-3 pt-3 shadow-lg mx-2 pb-3 md:flex md:flex-col md:justify-center md:w-5/6    ">
          <h3 className="text-lg font-bold md:text-3xl w-[40rem] ">
            Maximise the everyday with Microsoft 365
          </h3>
          <p className="text-sm pt-3 md:text-sm md:break-words">
            Get online protection, secure cloud storage and innovative apps
            designed to fit your needs – all in one plan.
          </p>
          <div className="flex items-center gap-4 mt-3 ">
            <button className="bg-blue-800 text-white p-2">
              For one person
            </button>
            <a href="" className="">
              <h6 className="hover:border-b-2 flex hover:border-b-blue-500">
                For up to six people
                <div className="hover:translate-x-1 mx-4 text-2xl">
                  <span className="">→</span>
                </div>
              </h6>
            </a>
          </div>
        </div>
        <div>
          <img
            src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-Slim-Multi-Canvas-M365-Anthem-Attract-Image-Create:VP2-859x540"
            alt=""
            className=" w-[98vw] mx-2 md:h-96 md:w-6/6"
          />
        </div>
      </div>
      {/* promo */}
      <div className="flex flex-wrap mt-10 justify-center items-center gap-4 lg:gap-0 ">
  <div className="flex flex-col justify-center items-center md:w-1/2 lg:w-1/4">
    <img
      src="https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Link-List-Icons-Microsoft-365?wid=40&hei=40"
      alt=""
      className="w-10 cursor-pointer"
    />
    <span className="text-blue-400 cursor-pointer underline">Choose your Microsoft 365</span>
  </div>
  <div className="flex flex-col justify-center items-center md:w-1/2  lg:w-1/4">
    <img
      src="https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Link-List-Icons-Xbox-Games-Consoles?wid=40&hei=40"
      alt=""
      className="w-10 cursor-pointer"
    />
    <span className="text-blue-400 cursor-pointer underline">Shop Xbox games and consoles</span>
  </div>
  <div className="flex flex-col justify-center items-center md:w-1/2 lg:w-1/4">
    <img
      src="https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Link-List-Icons-Microsoft-365?wid=40&hei=40"
      alt=""
      className="w-10 cursor-pointer"
    />
    <span className="text-blue-400 cursor-pointer underline">Get Windows 11</span>
  </div>
  <div className="flex flex-col justify-center items-center md:w-1/2 lg:w-1/4">
    <img
      src="https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Link-List-Icons-Surface-Devices?wid=40&hei=40"
      alt=""
      className="w-10 cursor-pointer"
    />
    <span className="text-blue-400 cursor-pointer underline">Explore Surface devices</span>
  </div>
  
</div>

    </>
  );
};

export default Hero;
