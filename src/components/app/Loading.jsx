import { CircularProgress } from "@mui/material";
import React from "react";
import { useIsFetching, useIsMutating } from "react-query";

const Loading = () => {
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();
  const display = isFetching || isMutating ? "indeterminate" : "determinate";

  return (
    <CircularProgress
      sx={{
        position: "fixed",
        left: "50%",
        top: "35%",
        zIndex: "1000",
        height: "31px",
        width: "31px",
      }}
      variant={display}
    />
  );
};

export default Loading;
