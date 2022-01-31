import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

function CardProduct() {
  return (
    <Badge badgeContent={"New"} color="primary">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="https://www.velodrive.ru/upload/medialibrary/fce/khardteyl.jpg"
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography mb={2} variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
          </Typography>
          <Badge mt={4} badgeContent={"Sale"} color="success">
            <Typography mt={1} variant="body1" color="primary">
              Price: 100 USD
            </Typography>
          </Badge>

          <Stack
            sx={{ flexWrap: "wrap", alignContent: "center", marginTop: 1 }}
            spacing={1}
          >
            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
          </Stack>
        </CardContent>

        <CardActions>
          <Button size="small">Add</Button>
        </CardActions>
      </Card>
    </Badge>
  );
}

export default CardProduct;
