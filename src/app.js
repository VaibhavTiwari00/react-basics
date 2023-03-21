import React from "react";
import ReactDOM from "react-dom/client";
import BodyLayout from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About.js";
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <BodyLayout />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

root.render(<RouterProvider router={router} />);

// obj = {
//   fn1: function () {
//     console.log(this.title);
//   },
//   fn2: () => {
//     console.log(this.title);
//   },
//   title: "vaibhav",
// };
// obj.fn1();
// obj.fn2();
