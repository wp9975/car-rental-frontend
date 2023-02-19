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
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <HomeLayout />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/car-rental-frontend/", exact: true, name: "Home", element: <HomePage /> },
        {
          path: "/car-rental-frontend/fleet",
          exact: true,
          name: "Fleet",
          element: <CarListPage />,
        },
        {
          path: "/car-rental-frontend/contact",
          exact: true,
          name: "Contact",
          element: <ContactPage />,
        },
        {
          path: "/car-rental-frontend/about",
          exact: true,
          name: "AboutUs",
          element: <AboutUsPage />,
        },
        {
          path: "/car-rental-frontend/reservation",
          exact: true,
          name: "Reservation",
          element: <ChooseCar />,
        },
        {
          path: "/car-rental-frontend/reservation/:carSlug",
          exact: true,
          name: "ReservationCar",
          element: <ReservationPage />,
        },
        {
          path: "/car-rental-frontend/privacypolicy",
          exact: true,
          name: "PrivacyPolicy",
          element: <PrivacyPolicyPage />,
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
