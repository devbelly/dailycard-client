import React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export default function TagTabs({ value, setValue, tags }) {
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <Tabs value={value} onChange={handleChange} centered="true">
        {tags.map((tag, idx) => (
          <Tab key={idx} label={tag.name} />
        ))}
      </Tabs>
    </Box>
  );
}
