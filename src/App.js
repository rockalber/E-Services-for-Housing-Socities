"use client"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import Users from "./components/Admin/Users/Users";
import Services from "./components/Admin/Services/Services";
import Home from "./components/Admin/Home/Home";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "",
          element: <Home />
        },
        {
          path: "/users",
          element: <Users />
        },
        {
          path: "/services",
          element: <Services />
        },
        {
          path: "/admin",
          element: <Home />
        },
      ],
    },
  ]);
  return (
    <RouterProvider router={router}/>

  );
}
