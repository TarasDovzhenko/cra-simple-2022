import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import FilterNoneIcon from "@mui/icons-material/FilterNone";

import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function Header(props) {
  return (
    <header>
      <AppBar
        position="static"
        color="primary"
        sx={{ maxWidth: 1440, mx: "auto", borderRadius: 2 }}
      >
        <Toolbar>
          <Typography variant="h5" component="span" sx={{ flexGrow: 1, mx: 1 }}>
            Palazzo
          </Typography>
          <Search sx={{ mx: 2 }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          <IconButton color="inherit" sx={{ mr: 1 }}>
            <FilterNoneIcon />
          </IconButton>
          <IconButton color="inherit" sx={{ mr: 1 }}>
            <ShoppingCartIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </header>
  );
}

export default Header;
