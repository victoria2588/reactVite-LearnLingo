import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./Redux/store.jsx";
import { PersistGate } from "redux-persist/integration/react";
import { App } from "./App.jsx";
import { GlobalStyle } from "./GlobalStyle.js";
// import MyStyleSheetManager from "./component/TeachersListCards/TeachersReadMore.styled.js";
import "./firebase.js";
import MyStyleSheetManager from "./component/TeachersListCards/TeachersReadMore.styled.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename="/reactVite-LearnLingo/">
        <Provider store={store}>
          <MyStyleSheetManager>
            <App />
            <GlobalStyle />
          </MyStyleSheetManager>
        </Provider>
      </BrowserRouter>
    </PersistGate>
  </React.StrictMode>
);
