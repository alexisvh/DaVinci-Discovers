import React from "react";
import { TextField } from '@mui/material';
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from "@material-ui/icons/Search";
import "../Navbar/style.css";

// import { redirect } from "react-router-dom";

const Searchbar = () => {
  return (
    <form className="search-bar">
      <TextField fullWidth
        className="search-bar"
        variant="filled"
        size="small"
        label="Search"
        placeholder="What are you looking for?"
        required={true}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton type="submit">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          )
        }} 
      />
    </form>
  );
}


export default Searchbar;