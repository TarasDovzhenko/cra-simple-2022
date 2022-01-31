import React from "react";
import Box from "@mui/material/Box";
import { Container, Typography } from "@mui/material";

function Hero(props) {
  return (
    <>
      <Container>
        <Typography color="primary" my={2} align="center" variant="h2">
          Palazzo Shop
        </Typography>
        <Box
          component="img"
          my={2}
          sx={{
            maxWidth: "100%",
          }}
          alt="Palazzo shop."
          src="https://api.djomi.uz/storage/uploads/posts/images/21127/main_page/HZPgUBzOmi.jpg"
        />{" "}
        <Typography align="center" my={2} component="p" variant="h5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          dicta asperiores ipsa error nihil placeat deserunt hic. Odio facere
          possimus quod, cupiditate dolorum rem sequi aut neque inventore
          delectus. Natus fugiat nesciunt, consectetur dolorem quisquam nobis
          ipsum dolor recusandae dolores ratione, at delectus sapiente ipsa
          cumque vel omnis atque assumenda. Asperiores corporis iure numquam
          aliquid inventore cupiditate doloribus repellendus architecto quae qui
          quo totam eligendi adipisci expedita reiciendis eos, rerum, sunt
          consequatur atque error. Nihil voluptatum repellat voluptatibus velit
          architecto reprehenderit molestias ea modi odio, totam quasi quidem!
          Laborum porro eius odio vero amet fuga dolore iusto veritatis
          reiciendis doloremque!
        </Typography>
      </Container>
    </>
  );
}

export default Hero;
