import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import { Community, GenerateIcons, Home } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "community",
        element: <Community />,
      },
      {
        path: "generate-icons",
        element: <GenerateIcons />,
      },
    ],
  },
]);
