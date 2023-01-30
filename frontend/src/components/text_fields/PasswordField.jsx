import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@material-ui/core";

import { makeStyles } from "@mui/styles";

import { Visibility, VisibilityOff } from "@material-ui/icons";

const useStyles = makeStyles(() => ({
  radius: {
    [`& fieldset`]: {
      borderRadius: 50,
    },
  },
}));

const PasswordField = ({ label, className, id, onChange }) => {
  const classes = useStyles();

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className={className}>
      <FormControl variant="outlined" fullWidth>
        <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
        <OutlinedInput
          className={classes.radius}
          name={label.toLowerCase()}
          type={showPassword ? "text" : "password"}
          inputProps={{ "data-testid": `id-input-${id}` }}
          onChange={onChange}
          endAdornment={
            <InputAdornment position="end" className="iconButton">
              <IconButton
                className="iconButton"
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? (
                  <VisibilityOff className="iconButton" />
                ) : (
                  <Visibility className="iconButton" />
                )}
              </IconButton>
            </InputAdornment>
          }
          label={label}
        />
      </FormControl>
    </div>
  );
};

export default PasswordField;
