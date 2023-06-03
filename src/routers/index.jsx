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
import RegisterPage from "../pages/auth/RegisterPage";
import ConfirmPage from "../pages/auth/ConfirmPage";
import { redirect } from "react-router-dom";
import ExamIndex from "../pages/admin/exams/ExamIndex";
import ExamCreate from "../pages/admin/exams/ExamCreate";
import CategoryIndex from "../pages/admin/categories/CategoryIndex";
import CategoryCreate from "../pages/admin/categories/CategoryCreate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/auth",
    loader: () => {
      if (localStorage.getItem("role") === "admin") {
        throw redirect("/admin");
      } else if (localStorage.getItem("role") === "user") {
        throw redirect("/students");
      }
      return null;
    },
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "confirm",
        element: <ConfirmPage />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    loader: () => {
      if (!localStorage.getItem("access_token")) {
        throw redirect("/auth/login");
      } else if (localStorage.getItem("role") !== "admin") {
        throw redirect("/students");
      }
      return null;
    },
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
      {
        path: "exams",
        children: [
          {
            path: "",
            element: <ExamIndex />,
          },
          {
            path: "create",
            element: <ExamCreate />,
          },
        ],
      },
      {
        path: "categories",
        children: [
          {
            path: "",
            element: <CategoryIndex />,
          },
          {
            path: "create",
            element: <CategoryCreate />,
          },
        ],
      },
    ],
  },
  {
    path: "/students",
    element: <StudentLayout />,
    loader: () => {
      if (!localStorage.getItem("access_token")) {
        throw redirect("/auth/login");
      } else if (localStorage.getItem("role") !== "user") {
        throw redirect("/admin");
      }
      return null;
    },
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
