import * as React from "react";

import { makeStyles } from "@material-ui/core";
import { Fab } from "@mui/material";

import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";

const useStyles = makeStyles((theme) => ({
  updateFab: {
    position: "absolute !important",
    bottom: 136,
    right: 16,
  },
}));

const UpdateTemplateFab = ({ selectedIndex }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <div>
      <Fab
        className={classes.updateFab}
        color="primary"
        onClick={() => {
          navigate(`./${selectedIndex}`);
        }}
      >
        <EditIcon />
      </Fab>
    </div>
  );
};

export default UpdateTemplateFab;
