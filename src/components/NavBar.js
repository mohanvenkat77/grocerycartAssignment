import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {IconButton} from '@mui/material/IconButton';
import {MenuIcon }from '@mui/icons-material/Menu';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
import { Badge } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
const NavBar = () => {
    const navigate=useNavigate()
    const cartcount=useSelector((state)=> state.cartReducers.cart.length)
  return (
    <div>
      
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
         <Link to="/" style={{color:'white',textDecoration:'none'}}>Home</Link>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Grocery Products
          </Typography>
          <Button color="inherit">
          <Box sx={{ mx: "auto" }} onClick={(e) => {
                    console.log("Click")
                  navigate("/cart");
                }}>
            <Badge
              badgeContent={cartcount}
              color="error"
              sx={{ cursor: "pointer", flexGrow: "1" }}
            >
              <ShoppingBasketIcon
                sx={{ cursor: "pointer", flexGrow: "1" }}
                
              />
            </Badge>
          </Box >
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default NavBar
