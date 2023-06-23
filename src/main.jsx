import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./Pages/login.jsx";
import RegisterPage from "./Pages/register.jsx";
import ErrorPage from "./Pages/404.jsx";
import HomePage from "./Pages/summarize.jsx";
import FakeNewsPage from "./Pages/fakenews.jsx";
import SummarizePage from "./Pages/summarize.jsx";
import FindTopicNewsPage from "./Pages/findtopic.jsx";
import { Provider } from "react-redux";
import store from "./app/store.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FakeNewsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/detection-fake-news",
    element: <FakeNewsPage />,
  },
  {
    path: "/summarize-text",
    element: <SummarizePage />,
  },
  {
    path: "/find-topic-news",
    element: <FindTopicNewsPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
