import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUp from "../../pages/SignUp";
import Login from "./../../pages/Login";
import Home from "./../../pages/Home";
import Template from "./../../pages/Template";
import Templates from "./../template/Templates";
import Choice from "./../../pages/Choice";

import Create from "../../pages/Create";
import Tag from "./../../pages/Tag";
import Field from "../../pages/Field";
import { Container } from "@mui/material";
import FieldUpdate from "../../pages/FieldUpdate";

import Study from "../../pages/Study";
import { useUser } from "./../user/hooks/useUser";
import PrivateRoute from "./PrivateRoute";

const CustomRoutes = () => {
  const { user } = useUser();
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route element={<PrivateRoute user={user} />}>
          <Route path="/tag" element={<Tag />} />
          <Route path="/create" element={<Create />} />
          <Route path="/field" element={<Field />} />
          <Route path="/field/:id" element={<FieldUpdate />} />
          <Route path="/study/:id" element={<Study />} />
          <Route path="/template/*" element={<Template />}>
            <Route path="" element={<Templates />} />
            <Route path=":id" element={<Choice />} />
          </Route>
        </Route>
      </Routes>
    </Container>
  );
};

export default CustomRoutes;
