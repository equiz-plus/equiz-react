import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import StudentLayout from "../layouts/StudentLayout";
import LandingPage from "../pages/LandingPage";
import Dashboard from "../pages/admin/Dashboard";
import StudentCreate from "../pages/admin/students/StudentCreate";
import StudentIndex from "../pages/admin/students/StudentIndex";
import LoginPage from "../pages/auth/LoginPage";
import StudentDashboard from "../pages/students/Dashboard";
import ExamComfirmation from "../pages/students/exams/Comfirmation";
import ExamQuestion from "../pages/students/exams/Questions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/auth",
    children: [
      {
        path: "login",
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
