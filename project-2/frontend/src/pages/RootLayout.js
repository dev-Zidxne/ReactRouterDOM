import React from "react";
import MainNavigation from "../components/MainNavigation";
import { Outlet, useNavigation } from "react-router-dom";

function RootLayout() {
  // const naviagtion = useNavigation();

  return (
    <>
      <MainNavigation />
      <main>
        {/* {naviagtion.state === "loading" && <p>Laoding </p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
