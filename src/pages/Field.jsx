import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FieldList from "../components/field/FieldList";
import UpdateFieldFab from "../components/field/fab/UpdateFieldFab";

const Field = () => {
  const [selectedId, setSeletedId] = useState(0);
  return (
    <Box>
      <Typography variant="h2" paragraph={true}>
        Field
      </Typography>
      <FieldList selectedId={selectedId} setSelectedId={setSeletedId} />
      <UpdateFieldFab selectedId={selectedId} />
    </Box>
  );
};

export default Field;
