import React from "react";
import { Button, Container, Typography, Grid } from "@mui/material";

const Home = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} textAlign="center">
          <Typography variant="h3" gutterBottom>
            Welcome to Our Website
          </Typography>
          <Typography variant="h6" paragraph>
            We provide the best services to help you achieve your goals.
          </Typography>
          <Button variant="contained" color="primary" size="large">
            Get Started
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
