import {
  FormControl,
  Grid,
  Paper,
  TextField,
  Button,
  Select,
  MenuItem,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core";

import { useNavigate } from "react-router-dom";
import { useTemplates } from "../components/template/hooks/useTemplates";
import { useTags } from "../components/tag/hooks/useTags";
import { InputLabel } from "@material-ui/core";
import { useCreateField } from "./../components/field/hooks/useCreateField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "80%",
      margin: theme.spacing(1),
    },
  },
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
  button: {
    position: "relative",
    bottom: 0,
    right: 0,
  },
}));

const initialValues = {
  templateNumber: 1,
  tag: "",
  word: "",
  mean: "",
};

const Create = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [values, setValues] = useState(initialValues);
  const templates = useTemplates();
  const tags = useTags();
  const createField = useCreateField();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleClick = (event) => {
    event.preventDefault();
    createField(values);
    navigate("/");
  };

  return (
    <>
      <Paper className={classes.pageContent}>
        <form className={classes.root}>
          <Grid container>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                label="word"
                name="word"
                value={values.word}
                onChange={handleInputChange}
                autoFocus
              ></TextField>
              <TextField
                autoFocus
                variant="outlined"
                label="mean"
                name="mean"
                value={values.mean}
                onChange={handleInputChange}
              ></TextField>
            </Grid>
            <Grid item xs={6}>
              <FormControl variant="outlined">
                <InputLabel>template</InputLabel>
                <Select
                  name="templateNumber"
                  value={values.templateNumber}
                  onChange={handleInputChange}
                >
                  {templates.map((template, idx) => (
                    <MenuItem key={template.id} value={template.id}>
                      {template.templateName}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl variant="outlined">
                <InputLabel>tag</InputLabel>
                <Select
                  name="tag"
                  value={values.tag}
                  onChange={handleInputChange}
                >
                  {tags.map((tag, idx) => (
                    <MenuItem key={tag.id} value={tag.name}>
                      {tag.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <div>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={handleClick}
                >
                  Submit
                </Button>
              </div>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </>
  );
};

export default Create;
