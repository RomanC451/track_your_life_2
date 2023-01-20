import React from "react";

import { Slider, SliderComponent } from "~/animations/Slider";
import { PasswordField, TextField } from "~/components/text_fields";

const SignUpSlider = () => {
  function renderComponent() {}

  return (
    <Slider
      className="h-[260px] w-[100%]"
      width={358}
      sliderComponents={[
        <div className="flex w-full flex-col items-center">
          <TextField label="Email" className="mt-4  w-[80%]" />
          <PasswordField label="Password" className="mt-4 w-[80%]" />
          <PasswordField label="Confirm password" className="mt-4 w-[80%]" />
        </div>,
        <div className="flex w-full flex-col items-center">
          <TextField label="Nume" className="mt-4  w-[80%]" />
          <PasswordField label="Prenume" className="mt-4 w-[80%]" />
          <PasswordField label="Adresa" className="mt-4 w-[80%]" />
        </div>,
        <div className="flex w-full flex-col items-center">
          <TextField label="Casa" className="mt-4  w-[80%]" />
          <PasswordField label="Masa" className="mt-4 w-[80%]" />
        </div>,
      ]}
      showedComponentIndex={0}
    />
  );
};

export default SignUpSlider;
