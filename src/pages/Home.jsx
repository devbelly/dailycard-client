import React from "react";

import Typography from "@mui/material/Typography";
import { Box } from "@material-ui/core";

// const useStyles = makeStyles((theme) => ({}));

const Home = () => {
  return (
    <Box>
      <Typography variant="h2">DAILY CARD</Typography>

      <Box>
        <Typography variant="h3" paragraph={true}>
          STUDY WITH DAILY CARD APPLICATION
        </Typography>
        <Typography variant="body1" paragraph={true}>
          THIS IS MAIN PAGE.
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
