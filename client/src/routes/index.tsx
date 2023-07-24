import { createHashRouter } from "react-router-dom";
import { HomePage } from "../pages";

import RootLayout from "./../Components/RootLayout";

const router = createHashRouter([
  {
    // path: ":routeType",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      }
    ],
  },
]);

export default router;
