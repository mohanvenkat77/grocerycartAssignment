import React, { useState } from 'react';
import { TextField, Button, Grid, Container, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

function App() {
    const navigate=useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    mobileNumber: '',
    pincode: '',
    address: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    const newErrors = {};
    if (!formData.name) {
      newErrors.name = 'Name is required';
    }
    if (!formData.mobileNumber) {
      newErrors.mobileNumber = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(formData.mobileNumber)) {
      newErrors.mobileNumber = 'Mobile number must be 10 digits';
    }
    if (!formData.pincode) {
      newErrors.pincode = 'Pincode is required';
    } else if (!/^\d{6}$/.test(formData.pincode)) {
      newErrors.pincode = 'Pincode must be 6 digits';
    }
    if (!formData.address) {
      newErrors.address = 'Address is required';
    }
    
    if (Object.keys(newErrors).length === 0) {
      // No errors, continue with form submission
      alert('Form submitted successfully');
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Form
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          required
          error={!!errors.name}
          helperText={errors.name}
          sx={{mt:"15px"}}
        />
        <TextField
          label="Mobile Number"
          name="mobileNumber"
          value={formData.mobileNumber}
          onChange={handleChange}
          fullWidth
          required
          error={!!errors.mobileNumber}
          helperText={errors.mobileNumber}
          sx={{mt:"15px"}}
        />
        <TextField
          label="Pincode"
          name="pincode"
          value={formData.pincode}
          onChange={handleChange}
          fullWidth
          required
          error={!!errors.pincode}
          helperText={errors.pincode}
          sx={{mt:"15px"}}
        />
        <TextField
          label="Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          fullWidth
          multiline
          required
          error={!!errors.address}
          helperText={errors.address}
          sx={{mt:"15px"}}
        />

        <Grid container justifyContent="center">
          <Button variant="contained" color="primary" type="submit"   sx={{mt:"15px"}} onClick={()=>{
            navigate("/sucess")
          }}>
            Continue
          </Button>
        </Grid>
      </form>
    </Container>
  );
}

export default App;
