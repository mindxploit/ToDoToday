import React from "react";
import { Typography } from "@material-ui/core";

export default function Welcome() {
  return (
    <div className="App">
      <Typography align="center" variant="h2">
        Hello,
      </Typography>
      <Typography style={{ fontWeight: "300" }} variant="h5">
        What do you have to do today?
      </Typography>
    </div>
  );
}
