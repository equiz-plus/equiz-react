import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/LayoutPage";
import LoginPage from "../pages/LoginPage";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
]);

export default router;
