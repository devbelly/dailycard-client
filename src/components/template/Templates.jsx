import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/Inbox";
import { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { useTemplates } from "./hooks/useTemplates";
import CreateTemplateFab from "./fab/CreateTemplateFab";
import DeleteTemplateFab from "./fab/DeleteTemplateFab";
import UpdateTemplateFab from "./fab/UpdateTemplateFab";

/**
 * No template이 빠르게 보였다가 사라지는 문제발생
 * - prefetch로 해결
 */

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    maxWidth: 360,
    bgcolor: "background.paper",
    borderRadius: 5,
  },
}));

export default function Templates() {
  const [selectedIndex, setSelectedIndex] = useState(1);
  const classes = useStyles();
  const templates = useTemplates();

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  if (templates.length === 0) {
    return (
      <>
        <div>No Templates. please create your template!</div>
        <CreateTemplateFab />
      </>
    );
  }
  return (
    <>
      <Box className={classes.container}>
        <List component="nav" centered>
          {templates.map((item, idx) => (
            <ListItemButton
              key={idx}
              selected={selectedIndex === item.id}
              onClick={(event) => handleListItemClick(event, item.id)}
            >
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={item.templateName} />
            </ListItemButton>
          ))}
        </List>
      </Box>
      <CreateTemplateFab />
      <DeleteTemplateFab selectedIndex={selectedIndex} />
      <UpdateTemplateFab selectedIndex={selectedIndex} />
    </>
  );
}
