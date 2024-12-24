import React from "react";
import { Container, Typography, Grid, Paper } from "@mui/material";

const About = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} textAlign="center">
          <Typography variant="h3" gutterBottom>
            About Us
          </Typography>
          <Typography variant="h6" paragraph>
            Our company is dedicated to delivering high-quality products and
            services. We are driven by innovation and the desire to create
            solutions that make a difference.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ padding: 3 }}>
            <Typography variant="h5">Our Mission</Typography>
            <Typography variant="body1" paragraph>
              Our mission is to empower individuals and businesses by providing
              top-notch technology solutions. We aim to help you succeed with
              our comprehensive approach to problem-solving and innovation.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
