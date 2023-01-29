import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import AboutUsPage from "./pages/AboutUsPage";
import CarFleetPage from "./pages/CarFleetPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import ReservationPage from "./pages/ReservationPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/home", exact: true, name: "Home", element: <HomePage /> },
        {
          path: "/fleet",
          exact: true,
          name: "Fleet",
          element: <CarFleetPage />,
        },
        {
          path: "/contact",
          exact: true,
          name: "Contact",
          element: <ContactPage />,
        },
        {
          path: "/about",
          exact: true,
          name: "AboutUs",
          element: <AboutUsPage />,
        },
        {
          path: "/reservation",
          exact: true,
          name: "Reservation",
          element: <ReservationPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
