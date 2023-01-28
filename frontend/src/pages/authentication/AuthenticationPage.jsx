import React, { useEffect, useState } from "react";

import { LogInForm, SignUpForm } from "~/features/authentication/";
import { useLocalStorage } from "~/hooks/";
import { useAppGeneralStateContext } from "~/contexts/AppGeneralContextProvider";

import Card from "./components/Card";
import useCardAnimation from "./animations/useCardAnimation";

const LoginPage = () => {
  const { screenSize } = useAppGeneralStateContext();

  const [authMode, setAuthMode] = useLocalStorage(
    "authenticationMethode",
    "logIn"
  );

  const [cardAnimationRef, startCardAnimation] = useCardAnimation(
    authMode == "logIn" ? 0 : 1
  );

  function switchAuthMode() {
    startCardAnimation(() => {
      setAuthMode(authMode === "logIn" ? "signUp" : "logIn");
    });
  }

  return (
    <div className=" flex min-h-[100vh] items-center justify-center">
      <div className="h-[600px] rounded-2xl shadow-2xl shadow-gray-700">
        <div className="relative top-[50%] left-[50%] flex h-[95%] w-[97%] translate-x-[-50%] translate-y-[-50%] items-center justify-around  rounded-2xl   border-1 border-gray-200 bg-white shadow-xl ">
          {screenSize > 900 || authMode === "signUp" ? (
            <SignUpForm switchAuthMode={switchAuthMode} />
          ) : null}
          {screenSize > 900 ? (
            <Card
              cardAnimationRef={cardAnimationRef}
              startingPos={authMode == "logIn" ? 0 : 1}
            />
          ) : null}

          {screenSize > 900 || authMode === "logIn" ? (
            <LogInForm switchAuthMode={switchAuthMode} />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
