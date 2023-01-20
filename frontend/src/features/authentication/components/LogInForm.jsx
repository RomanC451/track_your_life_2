import React from "react";

import { PasswordField, TextField } from "~/components/text_fields";
import { AuthenticationButton } from "~/components/buttons";

const LogInForm = ({ switchAuthMode }) => {
  return (
    <div className="mt-2 ml-4 mr-4 flex h-[500px] w-[370px]  flex-col  flex-wrap items-center justify-start rounded-lg">
      <div className="mt-[10%] w-full text-center text-2xl font-bold">
        LOG IN
      </div>
      <div className="mt-[5%] w-full text-center text-xs font-bold text-gray-400">
        Take control of your life
      </div>
      <div className="mt-[5%] h-[1px] w-[80%] bg-gray-400"></div>
      <TextField label="Email" className="mt-8 w-[80%]" />
      <PasswordField label="Password" className="mt-8 w-[80%]" />
      <AuthenticationButton className="mt-12" text="Log In" />
      <div className="mt-8">
        <button
          type="button"
          className="hover:underline"
          onClick={() => switchAuthMode()}
        >
          I don't have an account.
        </button>
      </div>
    </div>
  );
};

export default LogInForm;
