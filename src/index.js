import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import WatchPage from "./Components/WatchPage";
import MainContainer from "./Components/MainContainer";
import Results from "./Components/Results";
import Body from "./Components/Body";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
        children: [
          {
            path: "/",
            element: <MainContainer />,
          },
          {
            path: "watch",
            element: <WatchPage />,
          },
          {
            path: "results",
            element: <Results />,
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
