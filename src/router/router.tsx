import { createHashRouter } from "react-router-dom";
import App from "../App";
import Homepage from "../pages/home/Homepage";
import Destinations from "../pages/destinations/Destinations";
import Register from "../pages/register/Register";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "destinations", element: <Destinations /> },
      { path: "register", element: <Register /> },
    ],
  },
]);

export default router;
