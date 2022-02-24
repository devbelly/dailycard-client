import React, { useEffect } from "react";
import {
  FormControl,
  Grid,
  Paper,
  TextField,
  Button,
  Select,
  MenuItem,
} from "@mui/material";

import { useState } from "react";
import { makeStyles } from "@material-ui/core";

import { useNavigate, useParams } from "react-router-dom";
import { useTemplates } from "../components/template/hooks/useTemplates";
import { useTags } from "../components/tag/hooks/useTags";
import { InputLabel } from "@material-ui/core";
import { useField } from "./../components/field/hooks/useField";
import { useUpdateField } from "./../components/field/hooks/useUpdateField";

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

const FieldUpdate = () => {
  const classes = useStyles();
  const { id } = useParams();

  const [values, setValues] = useState(initialValues);
  const templates = useTemplates();
  const tags = useTags();
  const { data: field, isFetching } = useField(parseInt(id));
  const updateField = useUpdateField();
  const navigate = useNavigate();

  useEffect(() => {
    setValues({
      ...field,
    });
  }, [field]);

  if (isFetching) {
    return <div></div>;
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateField({ fieldRequest: values, id: id });
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
                  onClick={handleSubmit}
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

export default FieldUpdate;
