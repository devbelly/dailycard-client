import React from "react";
import ReactQueryLogo from "../../images/logoCloud/react-query.svg";
import ReactLogo from "../../images/logoCloud/react-js.svg";
import SpringLogo from "../../images/logoCloud/springboot.png";
import {
  Divider,
  Img,
  LogoCloudContainer,
  LogoContainer,
} from "./LogoCloudElements";
const LogoCloud = () => {
  return (
    <LogoCloudContainer>
      <Divider />
      <LogoContainer>
        <Img width="50" height="50" src={ReactQueryLogo} />
        <Img width="50" height="50" src={ReactLogo} />
        <Img width="50" height="50" src={SpringLogo} />
      </LogoContainer>
      <Divider />
    </LogoCloudContainer>
  );
};

export default LogoCloud;
