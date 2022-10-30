import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

import { Colors } from "../Theme";

export const Nav = styled.nav`
  background: ${Colors.Brand.Blue};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: fixed;

  width: 100vw;
  top: 0;
  z-index: 10;

  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  /* margin-top: -80px; */

  /* @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  } */
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
  padding: 0 24px;
`;

export const NavLogo = styled(LinkR)`
  color: ${Colors.Default.White};
  /* justify-self: flex-start; */
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const LeftPart = styled.span`
  display: flex;
  column-gap: 1rem;
`;
export const RightPart = styled.span`
  display: flex;
  column-gap: 1rem;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: ${Colors.Default.White};
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkR)`
  color: ${Colors.Default.White};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  border-bottom: 3px solid transparent;
  &:hover {
    border-bottom: 3px solid ${Colors.Brand.Green};
    transition: all 0.2s ease-in-out;
  }
`;

export const NavIcon = styled.nav`
  display: flex;
  align-items: center;

  font-size: 1.8rem;
  cursor: pointer;
  color: ${Colors.Default.White};
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

// export const NavBtnLink = styled(LinkR)`
//   border-radius: 50px;
//   background: ${Colors.Brand.Green};
//   white-space: nowrap;
//   padding: 10px 22px;
//   color: ${Colors.Default.Black};
//   font-size: 1rem;
//   outline: none;
//   border: none;
//   cursor: pointer;
//   transition: all 0.2s ease-in-out;
//   text-decoration: none;

//   &:hover {
//     transition: all 0.2s ease-in-out;
//     background: ${Colors.Default.White};
//     color: ${Colors.Default.Black};
//   }
// `;
