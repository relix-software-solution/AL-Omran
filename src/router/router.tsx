import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Homepage from "../pages/home/Homepage";
import Destinations from "../pages/destinations/Destinations";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "destinations", element: <Destinations /> },
    ],
  },
]);

export default router;
