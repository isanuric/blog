import React from "react";
import Navbar from "./components/Navbar";
import { Grid } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";

const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Grid container>
        <Grid item xs={12} sm={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={12} sm={7}>
          <Content />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
