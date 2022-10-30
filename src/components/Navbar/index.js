import React from "react";
import { FaBars } from "react-icons/fa";
import { BiLogIn, BiLogOut } from "react-icons/bi";
import {
  LeftPart,
  MobileIcon,
  Nav,
  NavbarContainer,
  NavIcon,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
  RightPart,
} from "./NavbarElements";

import { useUser } from "../user/hooks/useUser";
import { useAuth } from "../../auth/useAuth";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user } = useUser();
  const { signout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    signout();
    navigate("/");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <Nav>
      <NavbarContainer>
        <MobileIcon>
          <FaBars />
        </MobileIcon>
        <LeftPart>
          <NavLogo to="/">dailycard</NavLogo>

          <NavMenu>
            <NavItem>
              <NavLinks to="/tag">태그</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/template">템플릿</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/create">생성</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/field">필드</NavLinks>
            </NavItem>
          </NavMenu>
        </LeftPart>
        <RightPart>
          <NavIcon>
            {user ? (
              <BiLogOut onClick={handleLogout} />
            ) : (
              <BiLogIn onClick={handleLogin} />
            )}
          </NavIcon>
        </RightPart>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
