import React from "react";

const LogInInput = ({ className }) => {
  return (
    <div className={` ${className} w-full text-center`}>
      <div className="relative w-full text-center">
        <input
          type="text"
          placeholder="Email address"
          className=" input:focus:placeholder:text-transparent bg-transparent text-center text-white placeholder:text-white focus:outline-none"
        />
        <div className="absolute top-0 left-9 h-[25px] w-[25px] rounded-full border-[2px]"></div>
      </div>
      <div className="ml-[8%] mt-[12px] h-[1px] w-[84%] bg-white"></div>
    </div>
  );
};

export default LogInInput;
