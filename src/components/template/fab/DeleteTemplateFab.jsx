import * as React from "react";
import { makeStyles } from "@material-ui/core";
import { Delete } from "@mui/icons-material";
import { Fab } from "@mui/material";
import { useDeleteTemplate } from "../hooks/useDeleteTemplate";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    maxWidth: 360,
    bgcolor: "background.paper",
    borderRadius: 5,
  },
  delFab: {
    position: "absolute !important",
    bottom: 76,
    right: 16,
  },
}));

const DeleteTemplateFab = ({ selectedIndex }) => {
  const classes = useStyles();
  const deleteTemplate = useDeleteTemplate();
  const handleDelete = () => {
    deleteTemplate(selectedIndex);
  };
  return (
    <div>
      <Fab
        className={classes.delFab}
        color="primary"
        onClick={() => {
          handleDelete(selectedIndex);
        }}
      >
        <Delete />
      </Fab>
    </div>
  );
};

export default DeleteTemplateFab;
