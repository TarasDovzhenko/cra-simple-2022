import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Container, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

// function valuetext(value) {
//   return `${value}°C`;
// }

export default function Filters() {
  const [valuePrice, setValuePrice] = React.useState([20, 37]);
  const [valueRating, setValueRating] = React.useState([20, 50]);

  const handleChangePrice = (event, newValue) => {
    setValuePrice(newValue);
  };

  const handleChangeRating = (event, newValue) => {
    setValueRating(newValue);
  };

  return (
    <>
      <Container>
        <Box
          align="left"
          component="form"
          sx={{
            "& > :not(style)": { width: "19ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="standard-basic" label="Search" variant="standard" />
        </Box>

        <Box sx={{ width: 152 }}>
          <Typography sx={{ mt: 1 }} align="left" id="input-price">
            Price
          </Typography>
          <Slider
            getAriaLabel={() => "Price"}
            value={valuePrice}
            onChange={handleChangePrice}
            valueLabelDisplay="auto"
            // getAriaValueText={valuetext}
            id="input-price"
            max={1000}
          />
        </Box>
        <Box sx={{ width: 152 }}>
          <Typography align="left" id="input-rating">
            Rating
          </Typography>
          <Slider
            getAriaLabel={() => "Rating"}
            value={valueRating}
            onChange={handleChangeRating}
            valueLabelDisplay="auto"
            // getAriaValueText={valuetext}
            id="input-rating"
          />
        </Box>
        <FormGroup>
          <FormControlLabel
            control={<Switch defaultChecked />}
            label="Novelty"
          />
        </FormGroup>
        <FormGroup>
          <FormControlLabel control={<Switch defaultChecked />} label="Sale" />
        </FormGroup>
        <FormGroup>
          <FormControlLabel control={<Switch defaultChecked />} label="Stock" />
        </FormGroup>
      </Container>
    </>
  );
}
