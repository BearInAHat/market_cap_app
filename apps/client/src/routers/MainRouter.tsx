import React from "react";
import { createBrowserRouter } from "react-router-dom";

import { MainPage } from "Pages/MainPage";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainPage />,
    },
  ],
  {
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);
