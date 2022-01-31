import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";

import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@mui/material";

import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

import Badge from "@mui/material/Badge";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

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
  let navigateInfo = useNavigate();
  let navigateHome = useNavigate();
  let navigateDelivery = useNavigate();
  let navigateCatalog = useNavigate();
  let location = useLocation();

  return (
    <header>
      <AppBar
        position="static"
        color="primary"
        sx={{ maxWidth: 1440, mx: "auto", borderRadius: 2 }}
      >
        <Toolbar>
          <Typography
            variant="h5"
            component="span"
            sx={{ flexGrow: 1, mx: 0 }}
            onClick={() => {
              navigateHome("/");
            }}
          >
            <Button sx={{ fontSize: 19 }} color="inherit">
              Palazzo
            </Button>
          </Typography>
          <Button
            onClick={() => {
              location.pathname === "/"
                ? navigateCatalog("/Catalog")
                : navigateCatalog("/");
            }}
            sx={{ fontSize: 14, mr: 0.5 }}
            color="inherit"
          >
            Catalog
          </Button>
          <IconButton
            onClick={() => {
              location.pathname === "/"
                ? navigateDelivery("/delivery")
                : navigateDelivery("/");
            }}
            color="inherit"
            sx={{ mr: 0.5 }}
          >
            <LocalShippingIcon />
          </IconButton>

          <IconButton
            onClick={() => {
              location.pathname === "/"
                ? navigateInfo("/info")
                : navigateInfo("/");
            }}
            color="inherit"
          >
            <HelpOutlineIcon sx={{ fontSize: 28 }} />
          </IconButton>

          <IconButton aria-label="cart">
            <StyledBadge sx={{ mr: 0.5 }} badgeContent={2} color="primary">
              <ShoppingCartIcon sx={{ color: "#fff" }} />
            </StyledBadge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </header>
  );
}

export default Header;
