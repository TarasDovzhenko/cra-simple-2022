import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import {
  BottomNavigation,
  BottomNavigationAction,
  Card,
  Container,
} from "@mui/material";
import CardProduct from "../../components/Card/Card";
import ModelTrainingIcon from "@mui/icons-material/ModelTraining";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BackupTableIcon from "@mui/icons-material/BackupTable";

function Home(props) {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h5" component="span" sx={{ flexGrow: 1, ml: 1 }}>
            Palazzo shop
          </Typography>

          <Typography variant="h6" component="span" sx={{ mr: 1 }}>
            Serch
          </Typography>
          <IconButton color="inherit" sx={{ mr: 1 }}>
            <ShoppingCartIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container>
        <Box sx={{ width: "100%", my: 2 }}>
          <Grid
            container
            columns={{ xs: 2, sm: 6, md: 10 }}
            rowSpacing={1}
            columnSpacing={{ xs: 12, sm: 8, md: 4 }}
          >
            <Grid item xs={2}>
              <CardProduct />
            </Grid>
            <Grid item xs={2}>
              <CardProduct />
            </Grid>
            <Grid item xs={2}>
              <CardProduct />
            </Grid>
            <Grid item xs={2}>
              <CardProduct />
            </Grid>
            <Grid item xs={2}>
              <CardProduct />
            </Grid>
            <Grid item xs={2}>
              <CardProduct />
            </Grid>
            <Grid item xs={2}>
              <CardProduct />
            </Grid>
            <Grid item xs={2}>
              <CardProduct />
            </Grid>
            <Grid item xs={2}>
              <CardProduct />
            </Grid>
          </Grid>
        </Box>
      </Container>
      <footer>
        <Typography variant="h6" align="center" gutterBottom>
          Palazzo
        </Typography>
        <BottomNavigation value={value} onChange={handleChange}>
          <BottomNavigationAction
            label="Recents"
            value="recents"
            icon={<ModelTrainingIcon />}
          ></BottomNavigationAction>
          <BottomNavigationAction
            label="Favorites"
            value="favorites"
            icon={<FavoriteBorderIcon />}
          ></BottomNavigationAction>
          <BottomNavigationAction
            label="Nearby"
            value="nearby"
            icon={<LocationOnIcon />}
          ></BottomNavigationAction>
          <BottomNavigationAction
            label="Folder"
            value="folder"
            icon={<BackupTableIcon />}
          ></BottomNavigationAction>
        </BottomNavigation>
      </footer>
    </>
  );
}

export default Home;
