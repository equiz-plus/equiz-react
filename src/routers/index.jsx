import { createBrowserRouter } from "react-router-dom";
import Layout from "../../pages/LayoutPage";
import LoginPage from "../../pages/LoginPage";
import AdminLayout from "../layouts/AdminLayout";
import StudentLayout from "../layouts/StudentLayout";
import Dashboard from "../pages/admin/Dashboard";
import StudentCreate from "../pages/admin/students/StudentCreate";
import StudentIndex from "../pages/admin/students/StudentIndex";
import StudentDashboard from "../pages/students/Dashboard";
import ExamComfirmation from "../pages/students/exams/Comfirmation";
import ExamQuestion from "../pages/students/exams/Questions";

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
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "students",
        children: [
          {
            path: "",
            element: <StudentIndex />,
          },
          {
            path: "create",
            element: <StudentCreate />,
          },
        ],
      },
    ],
  },
  {
    path: "/students",
    element: <StudentLayout />,
    children: [
      {
        path: "",
        element: <StudentDashboard />,
      },
      {
        path: "exams",
        children: [
          {
            path: "start",
            element: <ExamComfirmation />,
          },
          {
            path: "question",
            element: <ExamQuestion />,
          },
        ],
      },
    ],
  },
]);

export default router;
