import React from "react";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { router } from "./routers/MainRouter";

import { AppWrapperStyled } from "./appStyles";
import { GlobalStyles } from "./GlobalStyles";
import "react-toastify/dist/ReactToastify.css";

export const App: React.FC = () => (
  <>
    <GlobalStyles />
    <AppWrapperStyled>
      <ToastContainer />
      <RouterProvider router={router} future={{ v7_startTransition: true }} />
    </AppWrapperStyled>
  </>
);
