import { Box, Button, ButtonGroup, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { clearcart, decrement, getToatl } from '../redux/reducers/cartReducers';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const Cart = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const items=useSelector((state)=> state.cartReducers.cart)
  const total=useSelector((state)=> state.cartReducers.total)

  useEffect(() => {
    dispatch(getToatl())
  }, [items])

  const handleRemoveFromCart = (item) => {
    dispatch(
      decrement({
        name: item.name,
        price: item.price,
        image: item.image,
      })
    );
  };


  const clearCa=() => {
    console.log("clear");
    dispatch(clearcart())
  }


  return (
    <div>
      <Typography variant='h4' textAlign={'center'} mt={10}>Shopping Cart</Typography>
      <Box mx={10}>
      <TableContainer component={Paper} >
        <Table stickyHeader>
          <TableHead >
            <TableRow >
              <TableCell>PRODUCT</TableCell>
              <TableCell >PRICE</TableCell>
         
            </TableRow>
          </TableHead>

          <TableBody >
            {items.map((x) => (
              <TableRow key={x._id} sx={{height:'200px'}}>
                <TableCell>
                <Box>
                  <Stack spacing={2} direction='row'>
                  <Link to={`/product/${x._id}`}>
                  <img src={x.image} alt={x.name} className='object-fit-cover' height={'150px'} width='150px'/>
                  </Link>
                    <Box>
                      <Typography variant='h6'>{x.name}</Typography>
                      {/* <Typography>{x.desc}</Typography> */}
                      <Button variant='text' color='secondary' size='small' sx={{mt:'5px'}} onClick={()=> handleRemoveFromCart(x)}>Remove</Button>
                    </Box>
                  </Stack>
                </Box>

                </TableCell>
                <TableCell><Typography variant='h4'><AttachMoneyIcon fontSize='large'/>{x.price}</Typography></TableCell>
            
              </TableRow>
             
            ))}
          </TableBody>
        </Table>
      </TableContainer>
     <Box mt={5}>
     <Stack justifyContent={'space-between'} direction='row'>
        <Button variant='outlined' sx={{height:'7vh'}} onClick={clearCa} >Clear cart</Button>
        <Box sx={{mr:'200px'}}>
          <Box display={'flex'} justifyContent="space-between" width={'10vw'} >
            <Typography variant='h5'>Total : </Typography>
            <Typography variant='h5'>${Math.ceil(total)}</Typography>
          </Box>
          <Box mt={2}>
            <Typography variant='body2' >Taxes and shipping charges  at checkout</Typography>
          </Box>
                <Box>
               {
                

               }
                </Box>
                <Box display={'flex'} justifyContent='center' alignItems={'center'}>
               
                    <Button onClick={()=>{
                      navigate("/orders")
                    }}><IconButton><ArrowForwardIcon sx={{color:'blue'}}/></IconButton>Continue Order</Button>
      
                </Box>
        </Box>
      </Stack>
     </Box>
      </Box>
    </div>
  )
}

export default Cart
