import React, { useEffect, useState } from "react";
import { LoginBackgroundImage, LoginBackgroundImageSm } from "../assets";
import { Button } from "../components/buttons";

import { useAppGeneralStateContext } from "~/contexts/AppGeneralContextProvider";

import "./login.css";

const LoginPage = () => {
  const { screenSize } = useAppGeneralStateContext();
  console.log("render");
  return (
    <div className="absolute left-0 top-[-10%] h-[110%] w-full bg-black overflow-hidden">
      <div className="text-center ml ">
        {screenSize > 700 ? (
          <img
            src={LoginBackgroundImage}
            className="absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] max-w-none ml-auto mr-auto"
          />
        ) : (
          <img
            src={LoginBackgroundImageSm}
            className="absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] max-w-none ml-auto mr-auto scale-[0.6]"
          />
        )}

        <div className="absolute text-white top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex justify-center flex-wrap border border-red-200 w-[478px] h-[540px]">
          <div className="mt-[80px] h-[40px]">
            <div className="w-full neon text-3xl text-black translate-x-[3px]">
              LOG IN{" "}
            </div>
            <div className="relative top-[-39px] w-full neon text-3xl">
              LOG IN
            </div>
          </div>
          <div className="w-full mt-[-50px] neon text-[9px]">
            Take control of your life
          </div>
          <div className="w-full mt-[-50px] ">
            <input
              type="text"
              id="lname"
              name="lname"
              className=" w-[70%] custom-input"
            />
          </div>
          <div className="w-full ">
            <input
              type="text"
              id="lname"
              name="lname"
              className=" w-[70%] custom-input"
            />
          </div>
          <Button text={"Log in"} classNames="w-full" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
