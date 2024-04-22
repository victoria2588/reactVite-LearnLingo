import propTypes from "prop-types";

import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Header } from "./Header/Header";
import { Wrap } from "./Layout.styled";
import Loader from "./Loader/Loader";

export const Layout = ({ setNamePopUp }) => {
  return (
    <>
      <Header setNamePopUp={setNamePopUp} />
      <Wrap>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Wrap>
    </>
  );
};

Layout.propTypes = {
  setNamePopUp: propTypes.func.isRequired,
};
