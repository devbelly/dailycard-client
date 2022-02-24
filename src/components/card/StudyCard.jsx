import React from "react";

const StudyCard = ({ card }) => {
  return (
    <div
      style={{
        fontFamily: "arial",
        fontSize: "20px",
        textAlign: "center",
        color: "black",
      }}
    >
      <div>{card.word && <div>{card.word}</div>}</div>
      <div>{card.mean && <div>{card.mean}</div>}</div>
    </div>
  );
};

export default StudyCard;
