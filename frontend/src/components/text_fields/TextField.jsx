import React from "react";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@material-ui/core";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  radius: {
    [`& fieldset`]: {
      borderRadius: 50,
    },
  },
}));

const TextField = ({ label, className, onChange }) => {
  const classes = useStyles();

  return (
    <div className={className}>
      <FormControl sx={{ m: 1, width: 100 }} variant="outlined" fullWidth>
        <InputLabel
          htmlFor="outlined-adornment-password"
          className={classes.label}
        >
          {label}
        </InputLabel>
        <OutlinedInput
          className={classes.radius}
          type="text"
          label={label}
          onChange={onChange}
        />
      </FormControl>
    </div>
  );
};

export default TextField;
