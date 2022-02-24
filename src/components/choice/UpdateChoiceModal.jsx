import * as React from "react";
import Box from "@mui/material/Box";
import { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { Button, Container, Modal, TextField } from "@mui/material";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useUpdateChoice } from "./hooks/useUpdateChoice";
import { useChoice } from "./hooks/useChoice";
import { useEffect } from "react";

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

const initialValues = {
  description: "",
  word: false,
  mean: false,
  back: {
    description: "",
    word: false,
    mean: false,
    back: { empty: "" },
  },
};

const UpdateChoiceModal = ({ open, setOpen, template, selectedIndex }) => {
  const classes = useStyles();
  const updateChoice = useUpdateChoice();
  const { data: choice, isFetching } = useChoice(selectedIndex);

  const [values, setValues] = useState(initialValues);

  useEffect(() => {
    setValues(choice);
  }, [choice]);

  const handleCheckedChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.checked,
    });
  };

  const handleBackCheckedChange = (event) => {
    const newValues = {
      ...values,
      back: {
        ...values.back,
        [event.target.name]: event.target.checked,
      },
    };

    setValues(newValues);
  };

  const handleDescriptionChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = () => {
    const backRequest = {
      word: values.back.word,
      mean: values.back.mean,
      description: values.back.description,
      choiceRequest: values.back.back,
    };

    const choiceRequest = {
      word: values.word,
      mean: values.mean,
      choiceRequest: backRequest,
      description: values.description,
    };

    updateChoice({ choiceRequest: choiceRequest, id: selectedIndex });
    setOpen(false);
  };

  if (isFetching) {
    return <div></div>;
  }

  return (
    <div>
      <Modal open={open}>
        <Container className={classes.modalContainer}>
          <TextField
            sx={{ marginTop: 3 }}
            name="description"
            value={values?.description}
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
                      checked={values?.word}
                      onChange={handleCheckedChange}
                      name="word"
                    />
                  }
                  label="word"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={values?.mean}
                      onChange={handleCheckedChange}
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
                      checked={values?.back.word}
                      onChange={handleBackCheckedChange}
                      name="word"
                    />
                  }
                  label="word"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={values?.back.mean}
                      onChange={handleBackCheckedChange}
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

export default UpdateChoiceModal;
