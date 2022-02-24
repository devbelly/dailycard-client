import * as React from "react";

import { useState } from "react";

import { makeStyles } from "@material-ui/core";
import { Button, Container, Fab, Modal, TextField } from "@mui/material";
import { Add } from "@mui/icons-material";
import { useCreateTemplate } from "../hooks/useCreateTemplate";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    maxWidth: 360,
    bgcolor: "background.paper",
    borderRadius: 5,
  },
  modalContainer: {
    width: "500px !important",
    height: 200,
    backgroundColor: "white",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
      height: "100vh",
    },
  },
  addFab: {
    position: "absolute !important",
    bottom: 16,
    right: 16,
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

const CreateTemplateFab = () => {
  const classes = useStyles();
  const createTemplate = useCreateTemplate();
  const [open, setOpen] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const templateRequest = {
      templateName: data.get("templateName"),
      choices: [],
    };
    createTemplate(templateRequest);
  };

  return (
    <div>
      <Fab
        className={classes.addFab}
        open={open}
        color="primary"
        onClick={() => {
          setOpen(true);
        }}
      >
        <Add></Add>
      </Fab>
      <Modal open={open}>
        <Container className={classes.modalContainer}>
          <form
            className={classes.form}
            autoComplete="off"
            onSubmit={(event) => {
              setOpen(false);
              handleSubmit(event);
            }}
          >
            <div className={classes.item}>
              <TextField
                id="standard-basic"
                name="templateName"
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

export default CreateTemplateFab;
