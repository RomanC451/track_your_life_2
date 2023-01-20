import React, { useState } from "react";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";

import { AuthenticationButton } from "~/components/buttons";

import SignUpSlider from "./SignUpSlider";

const SignUpForm = ({ switchAuthMode }) => {
  return (
    <div className="mt-2 ml-4 mr-4 flex h-[500px] w-[370px]  flex-col  flex-wrap items-center justify-start rounded-lg">
      <div className="mt-[5%] w-full text-center text-2xl font-bold">
        SIGN UP
      </div>
      <div className="mt-[3%] w-full text-center text-xs font-bold text-gray-400">
        Take control of your life
      </div>
      <div className="mt-[5%] h-[1px] w-[80%] bg-gray-400"></div>
      <SignUpSlider />
      {/* <div className=" relative h-[225px] w-full overflow-hidden ">
        <motion.div
          className="absolute top-0 float-left flex w-full flex-col items-center "
          initial={{ x: 0 }}
        >
          <TextField label="Email" className="mt-4  w-[80%]" />
          <PasswordField label="Password" className="mt-4 w-[80%]" />
          <PasswordField label="Confirm password" className="mt-4 w-[80%]" />
        </motion.div>
        <motion.div
          className="absolute top-0 float-left flex w-full flex-col items-center "
          initial={{ x: 350 }}
        >
          <TextField label="Email" className="mt-4  w-[80%]" />
          <PasswordField label="Password" className="mt-4 w-[80%]" />
          <PasswordField label="Confirm password" className="mt-4 w-[80%]" />
        </motion.div>
      </div> */}
      <AuthenticationButton className="mt-4" text="Sign Up" />
      <div className="mt-8">
        <button
          type="button"
          className="hover:underline"
          onClick={() => switchAuthMode()}
        >
          I already have an account.
        </button>
      </div>
    </div>
  );
};

export default SignUpForm;
