import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "./components/LoginPage.jsx";
import SignUpPage from "./components/SignUpPage.jsx";
import Home from "./components/Home.jsx";
import Blogs from "./components/Blogs.jsx";
import Create_Blogs from "./components/Create_Blogs.jsx";
import Edit_Blogs from "./components/Edit_Blogs.jsx";
import ReadBlog from "./components/ReadBlog.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/LoginPage",
        element: <LoginPage />,
      },
      {
        path: "/SignUpPage",
        element: <SignUpPage />,
      },
      {
        path: "/Blogs",
        element: <Blogs />,
      },
      {
        path: "/Create_Blogs",
        element: <Create_Blogs />,
      },
      {
        path: "/Edit_Blogs/:_id",
        element: <Edit_Blogs />,
      },
      {
        path: "/ReadBlog",
        element: <ReadBlog />
      }
    ],
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);