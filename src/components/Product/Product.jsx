import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CardProduct from "../Card/Card";
import { Container } from "@mui/material";
import Filters from "../Filters/Filters";

function Product(props) {
  return (
    <main>
      <Container>
        <Box sx={{ width: "100%", my: 2 }}>
          <Grid
            align="center"
            container
            columns={{ xs: 2, sm: 6, md: 10 }}
            rowSpacing={1}
            columnSpacing={{ xs: 2, sm: 4, md: 6 }}
          >
            <Grid item xs={2}>
              <Filters />
            </Grid>
            <Grid item xs={8}>
              <Box sx={{ width: "100%", my: 2 }}>
                <Grid
                  align="center"
                  container
                  columns={{ xs: 2, sm: 6, md: 8 }}
                  rowSpacing={1}
                  columnSpacing={{ xs: 2, sm: 3, md: 4 }}
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
            </Grid>
          </Grid>
        </Box>
      </Container>
    </main>
  );
}

export default Product;
