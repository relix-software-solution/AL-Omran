import { createHashRouter } from "react-router-dom";
import App from "../App";
import Homepage from "../pages/home/Homepage";
import Destinations from "../pages/destinations/Destinations";
import Register from "../pages/register/Register";
import Commercial from "../pages/register/Commercial";
import Residential from "../pages/register/Residential";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "destinations", element: <Destinations /> },
      { path: "register", element: <Register /> },
      { path: "commercial", element: <Commercial /> },
      { path: "residential", element: <Residential /> },
    ],
  },
]);

export default router;
