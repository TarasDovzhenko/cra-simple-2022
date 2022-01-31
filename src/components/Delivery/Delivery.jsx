import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function Delivery(props) {
  return (
    <>
      <Container>
        <Box sx={{ width: "100%", my: 2 }}>
          <Grid
            align="center"
            container
            columns={{ xs: 2, sm: 8, md: 10 }}
            rowSpacing={1}
            columnSpacing={{ xs: 2, sm: 3, md: 4 }}
          >
            <Grid item xs={2} sm={6} md={8}>
              <Box
                component="img"
                sx={{
                  maxWidth: "100%",
                }}
                alt="Delivery."
                src="https://guidesgame.ru/wp-content/uploads/2021/06/delivery-simulator-codes-1-1260x710.jpg"
              />
            </Grid>
            <Grid item xs={2}>
              <Typography align="center" variant="h4" color="primary">
                Delivery
              </Typography>
              <Typography align="left" mt={1} variant="body1">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Praesentium facere repellendus, est sequi exercitationem cumque
                deserunt dolor voluptatem iste, magni dignissimos vel totam
                quasi, explicabo obcaecati? Minus nobis odio autem veniam.
                Repellendus accusantium deleniti voluptates consequuntur at
                esse, similique quos facere beatae eveniet cupiditate molestiae
                quibusdam hic voluptatem dicta asperiores harum.
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography align="center" variant="h4" color="primary">
                Payment
              </Typography>
              <Typography align="left" mt={1} variant="body1">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur magnam quae, dolores praesentium ullam quis maiores
                consequatur sed optio in quas recusandae repellendus, accusamus
                mollitia distinctio alias nulla, impedit magni?
              </Typography>
            </Grid>
            <Grid item xs={2} sm={6} md={8}>
              <Box
                component="img"
                sx={{
                  maxWidth: "100%",
                }}
                alt="Payment."
                src="https://www.apaservices.org/images/title-payment-platform_tcm9-282170.jpg"
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default Delivery;
