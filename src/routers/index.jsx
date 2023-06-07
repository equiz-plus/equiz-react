/* eslint-disable no-unused-vars */
import { createBrowserRouter, redirect } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import StudentLayout from "../layouts/StudentLayout";
import LandingPage from "../pages/LandingPage";
import Dashboard from "../pages/admin/Dashboard";
import CategoryCreate from "../pages/admin/categories/CategoryCreate";
import CategoryIndex from "../pages/admin/categories/CategoryIndex";
import ExamCreate from "../pages/admin/exams/ExamCreate";
import ExamEdit from "../pages/admin/exams/ExamEdit";
import ExamIndex from "../pages/admin/exams/ExamIndex";
import ExamSchedule from "../pages/admin/exams/ExamSchedule";
import ExamScheduleCreate from "../pages/admin/exams/ExamScheduleCreate";
import ExamScheduleEdit from "../pages/admin/exams/ExamScheduleEdit";
import GradeIndex from "../pages/admin/grades/GradeIndex";
import OrganizationCreate from "../pages/admin/organizations/OrganizationCreate";
import OrganizationEdit from "../pages/admin/organizations/OrganizationEdit";
import OrganizationIndex from "../pages/admin/organizations/OrganizationIndex";
import QuestionCreate from "../pages/admin/questions/QuestionCreate";
import QuestionIndex from "../pages/admin/questions/QuestionIndex";
import StudentCreate from "../pages/admin/students/StudentCreate";
import StudentIndex from "../pages/admin/students/StudentIndex";
import ConfirmPage from "../pages/auth/ConfirmPage";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import StudentDashboard from "../pages/students/Dashboard";
import CertificateDetails from "../pages/students/certificate/CertificateDetails";
import CertificateIndex from "../pages/students/certificate/CertificateIndex";
import ExamComfirmation from "../pages/students/exams/Comfirmation";
import Session from "../pages/students/exams/Session";
import ProfileEdit from "../pages/students/profiles/ProfileEdit";
import AdminProfileEdit from "../pages/admin/profile/AdminProfileEdit";

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
          {
            path: "edit/:id",
            element: <ExamEdit />,
          },
          {
            path: "schedule",
            element: <ExamSchedule />,
          },
          {
            path: "create-schedule",
            element: <ExamScheduleCreate />,
          },
          {
            path: "edit-schedule/:id",
            element: <ExamScheduleEdit />,
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
      {
        path: "organizations",
        children: [
          {
            path: "",
            element: <OrganizationIndex />,
          },
          {
            path: "create",
            element: <OrganizationCreate />,
          },
          {
            path: "edit/:id",
            element: <OrganizationEdit />,
          },
        ],
      },
      {
        path: "questions",
        children: [
          {
            path: "",
            element: <QuestionIndex />,
          },
          {
            path: "create",
            element: <QuestionCreate />,
          },
        ],
      },
      {
        path: "grades",
        children: [
          {
            path: "",
            element: <GradeIndex />,
          },
          {
            path: "create",
            element: <QuestionCreate />,
          },
        ],
      },
      {
        path: "profile",
        element: <AdminProfileEdit />,
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
            path: ":id/start",
            element: <ExamComfirmation />,
          },
          {
            path: "session/:no",
            element: <Session />,
          },
        ],
      },
      {
        path: "certificates",
        children: [
          {
            path: "",
            element: <CertificateIndex />,
          },
        ],
      },
      {
        path: "profile",
        children: [
          {
            path: "",
            element: <ProfileEdit />,
          },
          {
            path: "edit",
            element: <ProfileEdit />,
          },
        ],
      },
    ],
  },
  {
    path: "/certificates/details",
    element: <CertificateDetails />,
  },
]);

export default router;
