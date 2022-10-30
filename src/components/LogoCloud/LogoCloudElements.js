import styled from "styled-components";
import { Colors } from "../Theme";

export const LogoCloudContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3rem 0;
  row-gap: 2rem;
`;

export const Divider = styled.span`
  background: linear-gradient(
    90deg,
    rgba(192, 204, 218, 0.1) 0%,
    rgba(192, 204, 218, 0.6) 50.38%,
    rgba(192, 204, 218, 0.1) 100%
  );
  width: 90%;
  height: 0.15rem;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 2rem;
`;

export const Img = styled.img`
  width: ${(p) => (p.width ? p.width : "")};
  height: ${(p) => (p.height ? p.height : "")};
`;
