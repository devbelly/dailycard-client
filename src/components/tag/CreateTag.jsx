import {
  Button,
  Container,
  makeStyles,
  Modal,
  TextField,
} from "@material-ui/core";
import { Add } from "@mui/icons-material";
import { Fab } from "@mui/material";
import React, { useState } from "react";
import { useCreateTag } from "./hooks/useCreateTag";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed !important",
    bottom: 20,
    right: 20,
  },
  container: {
    width: "500px !important",
    backgroundColor: "white",
    height: 200,
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: "auto",
  },
  field: {
    width: "100%",
  },
  item: {
    margin: "auto",
  },
  sel: {
    marginTop: theme.spacing(2),
    float: "right",
  },
  form: {
    marginTop: theme.spacing(5),
  },
}));

const CreateTag = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const createTag = useCreateTag();

  const handleCreateTagSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const tagRequest = {
      name: data.get("tag"),
    };

    createTag(tagRequest);
  };

  return (
    <div>
      <Fab
        className={classes.fab}
        color="primary"
        onClick={() => {
          setOpen(true);
        }}
      >
        <Add></Add>
      </Fab>
      <Modal open={open}>
        <Container className={classes.container}>
          <form
            onSubmit={handleCreateTagSubmit}
            className={classes.form}
            autoComplete="off"
          >
            <div className={classes.item}>
              <TextField
                id="standard-basic"
                label="Tag"
                name="tag"
                size="small"
                className={classes.field}
              ></TextField>
            </div>
            <div className={classes.sel}>
              <Button
                type="submit"
                variant="outlined"
                color="primary"
                style={{ marginRight: 20 }}
              >
                Create
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => {
                  setOpen(false);
                }}
              >
                Close
              </Button>
            </div>
          </form>
        </Container>
      </Modal>
    </div>
  );
};

export default CreateTag;
