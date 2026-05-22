import React from "react";
import { Route, Routes } from "react-router-dom";
import Rooms from "../components/Rooms";
import Room from "../components/Room";
import Add from "../components/Add";

const RoomsPage = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Rooms />
              <Add />
            </>
          }
        ></Route>
        <Route path=":id" element={<Room />}></Route>
      </Routes>
    </>
  );
};

export default RoomsPage;
