import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import homePage from "./images/homePage.jpg";

const App = () => {
  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">
          TeachMathEasy.com
        </Typography>
        <img src={homePage} alt="icon" height="600" />
      </AppBar>
    </Container>
  );
};

export default App;
