import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Listing from "./pages/Listing";
import Error from "./pages/Error";
import Header from "./components/Header";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import SingleListing from "./pages/SingleListing";

export default function App() {
  function PageLayout() {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    );
  }
  const pageRoutes = createBrowserRouter([
    {
      path: "/",
      element: <PageLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/listing",
          element: <Listing />,
        },
        {
          path: "/listing/:id",
          element: <SingleListing />,
        },
      ],
    },

    {
      path: "*",
      element: <Error />,
    },
  ]);
  return (
    <div className="bg-primary">
      <RouterProvider router={pageRoutes}></RouterProvider>
    </div>
  );
}
