import styled from "styled-components";
import { Colors } from "../Theme";

export const Bg = styled.div`
  color: ${Colors.Default.White};
  background-color: ${({ lightBg }) =>
    lightBg ? `${Colors.Default.White}` : `${Colors.Brand.Blue}`};
`;

export const InfoContainer = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
    height: 1100px;
  }
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: "col1" "col2";
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.div`
  color: ${Colors.Brand.Green};
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1.%;
  font-weight: 600;
  color: ${({ lightText }) =>
    lightText ? `${Colors.Text.Gray100}` : `${Colors.Text.Gray900}`};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;

  color: ${({ darkText }) =>
    darkText ? `${Colors.Text.Gray900}` : `${Colors.Text.Gray100}`};
`;

export const BtnWrapper = styled.div`
  display: flex;
`;

export const ImgWrap = styled.div`
  max-width: 555px;

  @media screen and (max-width: 768px) {
    max-width: 500px;
  }
`;

export const Img = styled.img`
  width: 100%;
`;
