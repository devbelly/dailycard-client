import { Button, Divider } from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import StudyCard from "./../components/card/StudyCard";
import { useCard } from "./../components/tag/hooks/useCard";
import { Grid } from "@material-ui/core";

const Study = () => {
  const { id } = useParams();
  const cards = useCard(parseInt(id));
  const last = cards.length;
  const [index, setIndex] = useState(0);
  const [showBack, setShowBack] = useState(false);

  const handleBack = () => {
    const newIndex = index === 0 ? 0 : index - 1;
    setShowBack(false);
    setIndex(newIndex);
  };

  const handleFront = () => {
    const newIndex = index + 1;
    setShowBack(false);
    setIndex(newIndex);
  };

  if (index === last) {
    return <div>공부 끝</div>;
  }

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12}>
        <StudyCard card={cards[index]} />
      </Grid>

      <Divider variant="middle" />
      {showBack && (
        <Grid item xs={12}>
          <StudyCard card={cards[index].back} />
        </Grid>
      )}

      {!showBack && (
        <Button
          variant="contained"
          onClick={() => {
            setShowBack(!showBack);
          }}
        >
          확인
        </Button>
      )}

      {showBack && (
        <>
          <Button onClick={handleBack}>이전</Button>
          <Button
            variant="contained"
            onClick={() => {
              setShowBack(!showBack);
            }}
          >
            다시
          </Button>
          <Button onClick={handleFront}>다음</Button>
        </>
      )}
    </Grid>
  );
};

export default Study;
