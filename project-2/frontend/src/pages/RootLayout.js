import React from "react";
import MainNavigation from "../components/MainNavigation";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <MainNavigation>RootLayout</MainNavigation>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
