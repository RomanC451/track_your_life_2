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

/**
 * A functional component for text input field with label and change event handling.
 * @param {Object} props - The properties of the component.
 * @param {string} props.label - The label of the text input field.
 * @param {string} props.className - The className to be applied to the outer div.
 * @param {(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void} props.onChange - The function to be called on change event of the input field.
 * @returns {JSX.Element} - Returns a text input field with label and change event handling.
 */
const TextField = ({ label, className, onChange }) => {
  const classes = useStyles();

  return (
    <div className={className}>
      <FormControl variant="outlined" fullWidth>
        <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
        <OutlinedInput
          className={classes.radius}
          type="text"
          label={label}
          name={label.toLowerCase()}
          onChange={onChange}
        />
      </FormControl>
    </div>
  );
};

export default TextField;
