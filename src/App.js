import Home from "./Home";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { AppBar, Tab, Tabs } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import About from "./About";
import Navbar from "./components/Navbar";

function App() {
  const routers = ["/about", "/contact"];
  return (
    <div>
      <Navbar />
    </div>
  );
}

export default App;
