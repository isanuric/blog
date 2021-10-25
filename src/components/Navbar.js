import React, { Component } from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Home from "../Home";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { AppBar, Tab, Tabs } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import About from "../About";

function Navbar() {
  const [value, setValue] = React.useState(0);
  const routers = ["/about", "/contact"];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <BrowserRouter>
        <CssBaseline />
        <Route path="/">
          <AppBar position="static">
            <Tabs>
              <Tab label="Home" component={Link} to="/">
                Home
              </Tab>
              <Tab label="About" component={Link} to={routers[0]}>
                About
              </Tab>
              <Tab label="Contact" component={Link} to={routers[1]}>
                Contact
              </Tab>
            </Tabs>
          </AppBar>
        </Route>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path={routers[0]} component={About} />
          <Route exact path={routers[1]} component={About} />
        </Switch>
      </BrowserRouter>
    </div>
    // {value === 1 && <Home/>}
  );
}

export default Navbar;
