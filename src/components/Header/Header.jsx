import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Container } from "@mui/material";

function Header(props) {
  return (
    <header>
      <Container>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography
              variant="h5"
              component="span"
              sx={{ flexGrow: 1, mx: 1 }}
            >
              Palazzo
            </Typography>

            <Typography variant="h6" component="span" sx={{ mr: 1 }}>
              Serch
            </Typography>
            <IconButton color="inherit" sx={{ mr: 1 }}>
              <ShoppingCartIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Container>
    </header>
  );
}

export default Header;
