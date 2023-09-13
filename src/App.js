
import './App.css';
import ProductList from './components/ProductList';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
import { Badge } from '@mui/material';
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'
import Cart from './components/Cart';
import NavBar from './components/NavBar';
import Order from './components/Order';
import Sucess from './components/Sucess';
function App() {
  const cartcount=useSelector((state)=> state.cartReducers.cart.length)
  return (
    <div className="App">
      
      <BrowserRouter>
      {/* <ToastContainer/> */}
      <NavBar/>
      <Routes>
        <Route path="/" element={<ProductList/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/orders' element={<Order/>}/>
        <Route path='/sucess' element={<Sucess/>}/>
      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
