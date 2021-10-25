import { Home } from "@mui/icons-material";
import { Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles({
  container: {
    // height: "100vh",
    // backgroundColor: "secondary.main",
    // backgroundColor: "secondary",
    backgroundColor: "primary",
    // color: (props) => props.color,
    bgcolor: "primary.main",

    margin: 15,
  },
  item: {
    display: "flex",
    alignItems: "center",
    margin: 4,
  },
});

function Sidebar(props) {
  const classes = useStyles(props);
  return (
    <Container
      sx={{
        bgcolor: "primary.main",
        color: "primary.contrastText",
        p: 2,
        height: "100vh",
        marginTop: 1,
      }}
    >
      <div className={classes.item}>
        <Home />
        <Typography>Home</Typography>
      </div>
      <div className={classes.item}>
        <Home />
        <Typography>Home</Typography>
      </div>
      <div className={classes.item}>
        <Home />
        <Typography>Home</Typography>
      </div>
    </Container>
  );
}

export default Sidebar;
