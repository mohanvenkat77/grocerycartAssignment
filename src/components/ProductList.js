// ProductList.js
import React, { useState } from "react";

import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useDispatch } from "react-redux";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import { decrement, increment } from "../redux/reducers/cartReducers";
const ProductList = () => {
  const [cart, setCart] = useState([]);
  const dispatch = useDispatch();
  const groceryItems = [
    {
      id: 1,
      name: "Apples",
      price: 1.99,
      image:
        "https://thumbs.dreamstime.com/z/one-apple-closeup-white-background-45309896.jpg?w=768",
    },
    {
      id: 2,
      name: "Bananas",
      price: 0.99,
      image:
        "https://thumbs.dreamstime.com/z/one-apple-closeup-white-background-45309896.jpg?w=768",
    },
    {
      id: 3,
      name: "Oranges",
      price: 2.49,
      image:
        "https://thumbs.dreamstime.com/z/one-apple-closeup-white-background-45309896.jpg?w=768",
    },
    {
      id: 4,
      name: "Strawberries",
      price: 3.99,
      image:
        "https://thumbs.dreamstime.com/z/one-apple-closeup-white-background-45309896.jpg?w=768",
    },
    {
      id: 5,
      name: "Grapes",
      price: 2.79,
      image:
        "https://thumbs.dreamstime.com/z/one-apple-closeup-white-background-45309896.jpg?w=768",
    },
    {
      id: 6,
      name: "Milk",
      price: 2.29,
      image:
        "https://thumbs.dreamstime.com/z/one-apple-closeup-white-background-45309896.jpg?w=768",
    },
    {
      id: 7,
      name: "Bread",
      price: 1.49,
      image:
        "https://thumbs.dreamstime.com/z/one-apple-closeup-white-background-45309896.jpg?w=768",
    },
    {
      id: 8,
      name: "Eggs",
      price: 2.99,
      image:
        "https://thumbs.dreamstime.com/z/one-apple-closeup-white-background-45309896.jpg?w=768",
    },
    {
      id: 9,
      name: "Potatoes",
      price: 1.19,
      image:
        "https://thumbs.dreamstime.com/z/one-apple-closeup-white-background-45309896.jpg?w=768",
    },
    {
      id: 10,
      name: "Tomatoes",
      price: 1.69,
      image:
        "https://thumbs.dreamstime.com/z/one-apple-closeup-white-background-45309896.jpg?w=768",
    },
    {
      id: 11,
      name: "Cucumbers",
      price: 0.89,
      image:
        "https://thumbs.dreamstime.com/z/one-apple-closeup-white-background-45309896.jpg?w=768",
    },
    {
      id: 12,
      name: "Carrots",
      price: 1.29,
      image:
        "https://thumbs.dreamstime.com/z/one-apple-closeup-white-background-45309896.jpg?w=768",
    },
    {
      id: 13,
      name: "Lettuce",
      price: 1.49,
      image:
        "https://thumbs.dreamstime.com/z/one-apple-closeup-white-background-45309896.jpg?w=768",
    },
    {
      id: 14,
      name: "Chicken",
      price: 5.99,
      image:
        "https://thumbs.dreamstime.com/z/one-apple-closeup-white-background-45309896.jpg?w=768",
    },
    {
      id: 15,
      name: "Salmon",
      price: 8.99,
      image:
        "https://thumbs.dreamstime.com/z/one-apple-closeup-white-background-45309896.jpg?w=768",
    },
    {
      id: 16,
      name: "Pasta",
      price: 1.79,
      image:
        "https://thumbs.dreamstime.com/z/one-apple-closeup-white-background-45309896.jpg?w=768",
    },
    {
      id: 17,
      name: "Rice",
      price: 2.39,
      image:
        "https://thumbs.dreamstime.com/z/one-apple-closeup-white-background-45309896.jpg?w=768",
    },
    {
      id: 18,
      name: "Olive Oil",
      price: 4.49,
      image:
        "https://thumbs.dreamstime.com/z/one-apple-closeup-white-background-45309896.jpg?w=768",
    },
    {
      id: 19,
      name: "Coffee",
      price: 4.99,
      image:
        "https://thumbs.dreamstime.com/z/one-apple-closeup-white-background-45309896.jpg?w=768",
    },
    {
      id: 20,
      name: "Tea",
      price: 2.99,
      image:
        "https://thumbs.dreamstime.com/z/one-apple-closeup-white-background-45309896.jpg?w=768",
    },
  ];

  const handleAddToCart = (item) => {
    dispatch(
      increment({
        name: item.name,
        price: item.price,
        image: item.image,
      })
    );
  };

  const handleRemoveFromCart = (item) => {
    dispatch(
      decrement({
        name: item.name,
        price: item.price,
        image: item.image,
      })
    );
  };

  return (
    <Box sx={{ backgroundColor: "white", width: "100%", overflow: "hidden" }}>
      <br />
      <Stack
        direction={{ xs: "column", sm: "row" }}
        sx={{
       
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        {groceryItems.map((item) => (
          <item>
            <Box key={item.id} className="product">
              <Card sx={{ mt: "10px", ml: "10px" }}>
                <CardHeader
                  avatar={
                    <Avatar
                      sx={{ bgcolor: red[500] }}
                      aria-label="recipe"
                    ></Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="Shrimp and Chorizo Paella"
                  subheader="September 14, 2016"
                />
                <CardMedia
                  component="img"
                  height="194"
                  src={item.image}
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {item.name}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <Button variant="contained" onClick={()=>handleAddToCart(item)}>
                    ADD
                  </Button>
                  <Button variant="contained" style={{ margin: "5px" }} onClick={()=>handleRemoveFromCart(item)}>
                    Remove
                  </Button>
                </CardActions>
              </Card>
            </Box>
          </item>
        ))}
      </Stack>
    </Box>
  );
};

export default ProductList;
