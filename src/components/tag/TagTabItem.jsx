import React from "react";

import Card from "@mui/material/Card";
import { CardContent } from "@mui/material";
import { Typography } from "@material-ui/core";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const TagTabItem = ({ cards, id }) => {
  const navigate = useNavigate();
  return (
    <Box sx={{ width: 500 }}>
      <Card>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            생성된 카드 수
          </Typography>
          <Typography variant="h5" component="div">
            {cards.length}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            onClick={() => {
              navigate(`/study/${id}`);
            }}
            size="small"
          >
            STUDY
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default TagTabItem;
