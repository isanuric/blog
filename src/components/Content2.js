import { Container } from "@mui/material";
import React from "react";
import FetchTest from "./FetchTest";
import Post from "./Post";

function Content2() {
  return (
    <Container>
      {/* <Post text={fetch("./text1.text")} /> */}
      <Post text={<FetchTest />} />
      <Post />
      <Post />
    </Container>
  );
}
export default Content2;
