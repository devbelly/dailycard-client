import * as React from "react";

import AppBar from "@mui/material/AppBar";

import Toolbar from "@mui/material/Toolbar";

import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "@mui/material";

import { useUser } from "./../user/hooks/useUser";
import { useAuth } from "../../auth/useAuth";
import Snackbars from "../../common/Snackbars";
import { makeStyles } from "@material-ui/core/styles";

export default function Navbar() {
  const navigate = useNavigate();

  const { user } = useUser();
  const { signout } = useAuth();

  const [anchorEl, setAnchorEl] = useState(null);
  let element = [];

  const title = () => {
    return (
      <Button
        sx={{
          fontSize: "20px",
          fontWeight: "bolder",
        }}
        color="inherit"
        onClick={() => navigate("/")}
      >
        dailyCard
      </Button>
    );
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
    signout();
  };

  const userMenu = () => {
    if (!user) {
      return [
        <Button
          sx={{ ml: "auto", mr: 0.2 }}
          color="inherit"
          onClick={() => navigate("/signup")}
        >
          Register
        </Button>,
        <Button color="inherit" onClick={() => navigate("/login")}>
          Login
        </Button>,
      ];
    }
    return [
      <Button
        sx={{ ml: "auto", mr: 0.2 }}
        color="inherit"
        onClick={handleClick}
      >
        {user.username}
      </Button>,
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem>
          <Link to="/." variant="h6">
            hi
          </Link>
        </MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>,
    ];
  };

  element.push(title());

  element.push(
    <Button
      onClick={() => {
        navigate("/tag");
      }}
      color="inherit"
    >
      TAG
    </Button>
  );

  element.push(
    <Button
      onClick={() => {
        navigate("/template");
      }}
      color="inherit"
    >
      TEMPLATE
    </Button>
  );
  element.push(
    <Button
      onClick={() => {
        navigate("/create");
      }}
      color="inherit"
    >
      CREATE
    </Button>
  );
  element.push(
    <Button
      onClick={() => {
        navigate("/field");
      }}
      color="inherit"
    >
      FIELD
    </Button>
  );
  element.push(userMenu());
  return (
    <>
      <AppBar position="static">
        <Toolbar>{element}</Toolbar>
        <div>
          <Snackbars />
        </div>
      </AppBar>
      <Toolbar></Toolbar>
    </>
  );
}
