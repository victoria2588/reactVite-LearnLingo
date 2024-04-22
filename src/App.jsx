import { Route, Routes } from "react-router-dom";
import { Layout } from "./component/Layout";
import { SelectorPopUp } from "./component/SelectorPopUp";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { lazy, useEffect, useState } from "react";
import { refreshUser } from "./Redux/Auth/operations";
import { PrivateRoute } from "./component/PrivateRoute";
import "./App.css";

const Home = lazy(() => import("./Pages/Home/Home"));
const Teachers = lazy(() => import("./Pages/Teachers/Teachers"));
const Favorites = lazy(() => import("./Pages/Favorites/Favorite"));

export const App = () => {
  const [namePopUp, setNamePopUp] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout setNamePopUp={setNamePopUp} />}>
          <Route index element={<Home />} />
          <Route
            path="/teachers"
            element={<Teachers setNamePopUp={setNamePopUp} />}
          />
          <Route
            path="favorites"
            element={
              <PrivateRoute>
                <Favorites setNamePopUp={setNamePopUp} />
              </PrivateRoute>
            }
          />
        </Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>

      <SelectorPopUp namePopUp={namePopUp} onClose={() => setNamePopUp("")} />
      <Toaster />
    </>
  );
};
