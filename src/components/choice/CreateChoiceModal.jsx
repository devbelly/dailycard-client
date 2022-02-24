import * as React from "react";
import Box from "@mui/material/Box";

import { useState } from "react";

import { makeStyles } from "@material-ui/core";
import { Button, Container, Modal, TextField } from "@mui/material";

import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useCreateChoice } from "./hooks/useCreateChoice";
import Checkbox from "@mui/material/Checkbox";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    maxWidth: 360,
    bgcolor: "background.paper",
    borderRadius: 5,
  },
  modalContainer: {
    width: "500px !important",
    height: 500,

    backgroundColor: "white",
    position: "relative",
    top: 100,
    bottom: 0,
    left: 0,
    right: 0,
    margin: "auto",
    borderRadius: 5,
  },
  buttons: {
    position: "absolute",
    bottom: 10,
    right: 10,
  },
}));

const CreateChoiceModal = ({ open, setOpen, idx }) => {
  const classes = useStyles();
  const createChoice = useCreateChoice();
  const [description, setDescription] = useState("");
  const [front, setFront] = useState({
    word: false,
    mean: false,
  });

  const [back, setBack] = useState({
    word: false,
    mean: false,
  });

  const handleFrontChange = (event) => {
    setFront({
      ...front,
      [event.target.name]: event.target.checked,
    });
  };

  const handleBackChange = (event) => {
    setBack({
      ...back,
      [event.target.name]: event.target.checked,
    });
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const backCard = {
      word: back.word,
      mean: back.mean,
      choiceRequest: null,
    };

    const choiceRequest = {
      description: description,
      word: front.word,
      mean: front.mean,
      choiceRequest: backCard,
    };

    createChoice({ id: idx, choiceRequest: choiceRequest });
    setOpen(false);
  };

  return (
    <div>
      <Modal open={open}>
        <Container className={classes.modalContainer}>
          <TextField
            sx={{ marginTop: 3 }}
            name="description"
            value={description}
            onChange={handleDescriptionChange}
            required
            fullWidth
            id="description"
            label="choice name"
            autoFocus
          />

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
              <FormLabel component="legend">Front Card</FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={front.word}
                      onChange={handleFrontChange}
                      name="word"
                    />
                  }
                  label="word"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={front.mean}
                      onChange={handleFrontChange}
                      name="mean"
                    />
                  }
                  label="mean"
                />
              </FormGroup>
              {/* <FormHelperText>Be careful</FormHelperText> */}
            </FormControl>
            <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
              <FormLabel component="legend">Back Card</FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={back.word}
                      onChange={handleBackChange}
                      name="word"
                    />
                  }
                  label="word"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={back.mean}
                      onChange={handleBackChange}
                      name="mean"
                    />
                  }
                  label="mean"
                />
              </FormGroup>
              {/* <FormHelperText>You can display an error</FormHelperText> */}
            </FormControl>
          </Box>
          <div className={classes.buttons}>
            <Button
              onClick={handleSubmit}
              type="button"
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
        </Container>
      </Modal>
    </div>
  );
};

export default CreateChoiceModal;
