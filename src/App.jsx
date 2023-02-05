import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import AboutUsPage from "./pages/AboutUsPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import ReservationPage from "./pages/ReservationPage";
import CarListPage from "./pages/CarListPage";
import ChooseCar from "./components/Reservation/ChooseCar";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <HomeLayout />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", exact: true, name: "Home", element: <HomePage /> },
        {
          path: "/fleet",
          exact: true,
          name: "Fleet",
          element: <CarListPage />,
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
          element: <ChooseCar />,
        },
        {
          path: "/reservation/:carSlug",
          exact: true,
          name: "ReservationCar",
          element: <ReservationPage />,
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
