import ModelTrainingIcon from "@mui/icons-material/ModelTraining";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BackupTableIcon from "@mui/icons-material/BackupTable";
import React from "react";
import Typography from "@mui/material/Typography";
import {
  BottomNavigation,
  BottomNavigationAction,
  Container,
} from "@mui/material";

function Footer(props) {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <footer>
      <Typography variant="subtitle1" align="center" gutterBottom>
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
  );
}

export default Footer;
