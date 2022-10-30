import React from "react";
import {
  Bg,
  BtnWrapper,
  Column1,
  Column2,
  Heading,
  Img,
  ImgWrap,
  InfoContainer,
  InfoRow,
  Subtitle,
  TextWrapper,
  TopLine,
} from "./InfoElements";
import { Button } from "./../ButtonElements";

const Info = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  img,
  primary,
}) => {
  return (
    <>
      <Bg lightBg={lightBg}>
        <InfoContainer id={id}>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrapper>
                  <Button
                    smooth={true}
                    duration={500}
                    offset={-80}
                    primary={primary ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrapper>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img}></Img>
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoContainer>
      </Bg>
    </>
  );
};

export default Info;
