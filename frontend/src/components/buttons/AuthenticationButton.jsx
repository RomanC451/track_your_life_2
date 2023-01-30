import React from "react";

import "./AuthenticationButton.css";

const AuthenticationButton = ({ className, text, onClick }) => {
  return (
    <button
      type="button "
      className={`${className} button-background  h-[50px] w-[80%] rounded-3xl text-white shadow-lg hover:shadow-2xl`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default AuthenticationButton;
