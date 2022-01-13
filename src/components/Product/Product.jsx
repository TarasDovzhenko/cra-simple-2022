import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CardProduct from "../Card/Card";
import { Container } from "@mui/material";

function Product(props) {
  return (
    <main>
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
    </main>
  );
}

export default Product;
