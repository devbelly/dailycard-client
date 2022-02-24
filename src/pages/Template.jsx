import { Grid } from "@material-ui/core";
import React from "react";
import { Outlet } from "react-router-dom";

const Template = () => {
  return (
    <div>
      <Grid container justifyContent="center">
        <Outlet></Outlet>
      </Grid>
    </div>
  );
};

export default Template;
