import * as React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@material-ui/core";
import { useTemplate } from "../components/template/hooks/useTemplate";
import ChoiceTab from "../components/choice/ChoiceTab";
import Choices from "../components/choice/Choices";
import CreateChoiceModal from "../components/choice/CreateChoiceModal";
import UpdateChoiceModal from "./../components/choice/UpdateChoiceModal";

export default function Choice() {
  const { id } = useParams();

  const { data: template, isFetching } = useTemplate(id);

  const [selectedIndex, setSelectedIndex] = useState(1);

  const [addOpen, setAddOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);

  if (isFetching) {
    return <div></div>;
  }

  return (
    <Box sx={{ height: 1, width: "80%" }}>
      <Typography variant="h2" paragraph={true}>
        {template.templateName}
      </Typography>
      <ChoiceTab
        add={() => setAddOpen(true)}
        edit={() => setEditOpen(true)}
        delIdx={selectedIndex}
      />

      <Choices
        template={template}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
      {addOpen && (
        <CreateChoiceModal open={addOpen} setOpen={setAddOpen} idx={id} />
      )}
      {editOpen && (
        <UpdateChoiceModal
          open={editOpen}
          setOpen={setEditOpen}
          template={template}
          selectedIndex={selectedIndex}
        />
      )}
    </Box>
  );
}
