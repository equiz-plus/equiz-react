/* eslint-disable no-unused-vars */

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { actionMidtransPayment } from "../actions/actionCreators";

function LandingPage() {
  const notify = (msg) => toast.error(msg);

  const { isSuccess, isLoading, isError, errorMessage, paymentData } =
    useSelector((state) => state.midtransPayment);

  const dispacth = useDispatch();
  const navigate = useNavigate();

  const doPayment = (event, lenght) => {
    if (!localStorage.getItem("access_token")) {
      navigate("/auth/login");
    } else {
      dispacth(actionMidtransPayment(lenght));
    }
  };

  useEffect(() => {
    if (isError) {
      notify(errorMessage);
    } else if (isSuccess && paymentData) {
      window.location.href = paymentData.paymentUrl;
    }
  }, [isError, isLoading, isSuccess, paymentData]);

  return (
    <>
      <main>
        {/* <!-- Hero --> */}
        <section className="section-header pt-7 pt-lg-8 pb-2 mb-2 pb-lg-8 bg-dark text-dark">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <img
                  className="navbar-brand-dark mb-4"
                  src="../assets/images/equizlogo.png"
                  height="120"
                  alt="Logo light"
                />
                <div className="mb-5">
                  <h2 className="display-1">
                    Unlock Your{" "}
                    <span className="text-primary" style={{ color: "blue" }}>
                      Potential
                    </span>{" "}
                    with Seamless Online Testing!
                  </h2>
                </div>
                <div className="d-flex justify-content-center align-items-end flex-wrap mb-0">
                  <Link to={"/students"}>
                    <div className="btn btn-secondary text-dark mr-4 mb-3 mb-lg-0">
                      Go to dashboard
                    </div>
                  </Link>

                  <Link to={"auth/login"}>
                    <div className="btn btn-outline-primary mr-4 mb-3 mx-2 mb-lg-0">
                      Login to your account
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section section-lg bg-white mt-4 pb-5 pt-5">
          <div className="container">
            <div className="row justify-content-center mb-5 mt-5 mb-lg-6">
              <div className="col-6 col-md-3 text-center mb-4">
                <div className="icon icon-shape bg-white shadow-lg rounded mb-4">
                  <svg
                    className="icon icon-md text-primary"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776"
                    ></path>
                  </svg>
                </div>
                <h3 className="fw-bolder">100+</h3>
                <p className="text-gray">Exam Category</p>
              </div>
              <div className="col-6 col-md-3 text-center mb-4">
                <div className="icon icon-shape bg-white shadow-lg rounded mb-4">
                  <svg
                    className="icon icon-md text-primary"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                    ></path>
                  </svg>
                </div>
                <h3 className="fw-bolder">1000+</h3>
                <p className="text-gray">Questions</p>
              </div>
              <div className="col-6 col-md-3 text-center">
                <div className="icon icon-shape bg-white shadow-lg rounded mb-4">
                  <svg
                    className="icon icon-md text-primary"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
                    ></path>
                  </svg>
                </div>
                <h3 className="fw-bolder">TTS</h3>
                <p className="text-gray">Text to speech</p>
              </div>
              <div className="col-6 col-md-3 text-center">
                <div className="icon icon-shape bg-white shadow-lg rounded mb-4">
                  <svg
                    className="icon icon-md text-primary"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
                    ></path>
                  </svg>
                </div>
                <h3 className="fw-bolder">STT</h3>
                <p className="text-gray">Speech To Text</p>
              </div>
            </div>
            <div className="row justify-content-between align-items-center mb-5 mb-lg-7">
              <div className="col-lg-5 mb-5 mb-lg-0">
                <h2 className="h1">Speech to text</h2>
                <p className="mb-4 lead fw-bold">
                  Interactive exam with speech to text
                </p>
                <p className="mb-4">
                  Youll get a fully interactive exam with speech to text
                  technologies.
                </p>
                <a
                  href="./pages/kanban.html"
                  className="btn btn-secondary d-inline-flex align-items-center me-3"
                >
                  <svg
                    className="icon icon-xs me-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                  </svg>
                  Get Started
                </a>
                {/* <!-- <a href="/docs/volt-bootstrap-5-dashboard/plugins/kanban/"  className="btn btn-outline-primary"> Guide</a> --> */}
              </div>
              <div className="col-lg-6">
                <img
                  src="https://nordicapis.com/wp-content/uploads/5-Best-Speech-to-Text-APIs-in-2021-1024x576.png"
                  alt="Ujian Online Preview"
                />
              </div>
            </div>

            <div className="row justify-content-between align-items-center mb-5 mb-lg-7">
              <div className="col-lg-5 order-lg-2 mb-5 mb-lg-0">
                <h2 className="h1">Certificate</h2>
                <p className="mb-4 lead fw-bold">
                  E-certificate with credentials number
                </p>
                <p className="mb-4">
                  This certificate recognizes the recipient&apos;s credentials
                  and achievements, validating their expertise and commitment in
                  a specific field or area of study.
                </p>
                <a
                  href="./pages/map.html"
                  className="btn btn-secondary d-inline-flex align-items-center me-3"
                >
                  <svg
                    className="icon icon-xs me-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Certificate Validator
                </a>

                <a
                  href="/"
                  className="btn btn-outline-gray-600 d-inline-flex align-items-center"
                >
                  <svg
                    className="icon icon-xs me-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Guide
                </a>
              </div>
              <div className="col-lg-6 order-lg-1">
                <img
                  src="../../assets/images/ecertificate.png"
                  alt="E Certificate"
                />
              </div>
            </div>
            <div className="row justify-content-between align-items-center mb-5 mb-lg-7">
              <div className="col-lg-5 mb-5 mb-lg-0">
                <h2 className="h1">Exam Notification</h2>
                <p className="mb-4 lead fw-bold">
                  Receive email notifications for exams.
                </p>
                <p className="mb-4">
                  Stay informed and never miss a new exam with our email
                  notification service. Receive timely updates and announcements
                  directly in your inbox, ensuring that you are always aware of
                  upcoming exams and have ample time to prepare.
                </p>
                <a
                  href="./pages/calendar.html"
                  className="btn btn-secondary d-inline-flex align-items-center me-3"
                >
                  <svg
                    className="icon icon-xs me-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Get Started
                </a>
              </div>
              <div className="col-lg-6">
                <img
                  src="https://d24oheizjk2k1o.cloudfront.net/wp-content/uploads/2017/09/17232921/The-Difference-Between-Email-and-Web-Push-Notifications.jpg"
                  alt="Calendar Preview"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="section section-sm pt-8">
          <div className="container">
            <div className="row justify-content-center mb-5 mb-lg-6">
              <div className="col-12 text-center">
                <h2 className="h1 px-lg-5">High-quality Questions</h2>
                <p className="lead px-lg-10">
                  We offer high-quality questions that accurately test your
                  knowledge. Our carefully crafted questions are designed to
                  challenge your understanding and provide an accurate
                  assessment of your expertise in a particular subject area.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="section section-lg bg-gray-800 text-white">
          <div className="container">
            <div className="row justify-content-center mb-5 mb-lg-6">
              <div className="col-12 text-center">
                <h2 className="h1 px-lg-5">Awesome Features</h2>
                <p className="lead px-lg-8">
                  You get to access all the question with grading system
                  included
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="card bg-white shadow-soft text-primary rounded mb-4">
                  <div className="px-3 px-lg-4 py-5 text-center">
                    <svg
                      className="icon icon-md mb-3"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
                      ></path>
                    </svg>
                    <h5 className="fw-bold text-primary">Text-to-Speech</h5>
                    <p className="mb-0 text-gray-600">
                      Listen to the question with built-in text-to-speech
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="card bg-white shadow-soft text-primary rounded mb-4">
                  <div className="px-3 px-lg-4 py-5 text-center">
                    <svg
                      className="icon icon-md mb-3"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
                      ></path>
                    </svg>
                    <h5 className="fw-bold text-primary">Speech-to-Text</h5>
                    <p className="mb-0 text-gray-600">
                      Simply speak your answers into a microphone
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="card bg-white shadow-soft text-primary rounded mb-4">
                  <div className="px-3 px-lg-4 py-5 text-center">
                    <svg
                      className="icon icon-md mb-3"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                      ></path>
                    </svg>
                    <h5 className="fw-bold text-primary">Organization</h5>
                    <p className="mb-0 text-gray-600">
                      Create your own exam as an organization
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="card bg-white shadow-soft text-primary rounded mb-4">
                  <div className="px-3 px-lg-4 py-5 text-center">
                    <svg
                      className="icon icon-md mb-3"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12"
                      ></path>
                    </svg>
                    <h5 className="fw-bold text-primary">Certification</h5>
                    <p className="mb-0 text-gray-600">
                      Design custom certificates for exam participants
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="card bg-white shadow-soft text-primary rounded mb-4">
                  <div className="px-3 px-lg-4 py-5 text-center">
                    <svg
                      className="icon icon-md mb-3"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                      ></path>
                    </svg>
                    <h5 className="fw-bold text-primary">Responsive Website</h5>
                    <p className="mb-0 text-gray-600">
                      Take exam from you mobile device
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="card bg-white shadow-soft text-primary rounded mb-4">
                  <div className="px-3 px-lg-4 py-5 text-center">
                    <svg
                      className="icon icon-md mb-3"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                      ></path>
                    </svg>
                    <h5 className="fw-bold text-primary">Subscription</h5>
                    <p className="mb-0 text-gray-600">
                      Experience all the perks by subscribing to Premium
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="card bg-white shadow-soft text-primary rounded mb-4">
                  <div className="px-3 px-lg-4 py-5 text-center">
                    <svg
                      className="icon icon-md mb-3 "
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                      ></path>
                    </svg>
                    <h5 className="fw-bold text-primary">Payment Methods</h5>
                    <p className="mb-0 text-gray-600">
                      Pay subscription with any methods
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="card bg-white shadow-soft text-primary rounded mb-4">
                  <div className="px-3 px-lg-4 py-5 text-center">
                    <svg
                      className="icon icon-md mb-3"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                      ></path>
                    </svg>
                    <h5 className="fw-bold text-primary">Scheduled Exam</h5>
                    <p className="mb-0 text-gray-600">
                      Plan the exam schedule ahead of time
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-lg bg-white">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-8">
                <h2 className="h1 fw-bold mb-3">Premium Version</h2>
                <p className="lead mb-4">
                  Unlock a multitude of benefits by subscribing to our premium
                  version. Gain access to exclusive features, comprehensive
                  resources, and advanced tools that will enhance your learning
                  experience. With the premium subscription, you can enjoy an
                  ad-free environment, personalized recommendations, in-depth
                  analysis, and much more, empowering you to maximize your
                  educational journey.
                </p>
                <div className="d-flex align-items-center">
                  <a href="#pricing-section" className="btn btn-gray-800 me-4">
                    Pricing List
                  </a>
                  {/* <!-- Place this tag where you want the button to render. --> */}
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div className="github-big-icon">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="github"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 496 512"
                  >
                    <path
                      fill="currentColor"
                      d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="row mt-6">
              <div className="col-12 col-md-6 col-lg-4 mb-5 mb-lg-0">
                <div className="card shadow border-0 p-4">
                  {/* <!-- Header --> */}
                  <div className="card-header bg-white border-0 pb-0">
                    <span className="d-block">
                      <span className="h2 text-primary fw-bold align-top">
                        Free Version
                      </span>
                    </span>
                  </div>
                  {/* <!-- End Header --> */}
                  {/* <!-- Content --> */}
                  <div className="card-body">
                    <ul className="list-group list-group-flush priceList">
                      <li className="list-group-item border-0 ps-0">
                        <strong>10</strong> Exams / month
                      </li>
                      <li className="list-group-item border-0 ps-0">
                        <strong>10</strong> Certificate
                      </li>
                      <li className="list-group-item d-flex align-items-center border-0 ps-0">
                        <svg
                          className="icon icon-xs text-danger me-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                            clipRule="evenodd"
                          ></path>
                        </svg>{" "}
                        Text to speech
                      </li>
                      <li className="list-group-item d-flex align-items-center border-0 ps-0">
                        <svg
                          className="icon icon-xs text-danger me-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                            clipRule="evenodd"
                          ></path>
                        </svg>{" "}
                        Speech to text
                      </li>
                      <li className="list-group-item d-flex align-items-center border-0 ps-0">
                        <svg
                          className="icon icon-xs text-danger me-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                            clipRule="evenodd"
                          ></path>
                        </svg>{" "}
                        E-Certificate
                      </li>
                      <li className="list-group-item d-flex align-items-center border-0 ps-0">
                        <svg
                          className="icon icon-xs text-danger me-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                            clipRule="evenodd"
                          ></path>
                        </svg>{" "}
                        Explanation
                      </li>
                      <li className="list-group-item d-flex align-items-center border-0 ps-0 pb-0">
                        <svg
                          className="icon icon-xs text-danger me-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                            clipRule="evenodd"
                          ></path>
                        </svg>{" "}
                        Premium Support
                      </li>
                    </ul>
                  </div>
                  {/* <!-- End Content --> */}
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 mb-5 mb-lg-0">
                <div className="card shadow border-0 p-4 py-5 mt-lg-n5">
                  {/* <!-- Header --> */}
                  <div className="card-header bg-white border-0 pb-0">
                    <span className="d-block">
                      <span className="h2 text-primary fw-bold align-top">
                        Pro Version
                      </span>
                    </span>
                  </div>
                  {/* <!-- End Header --> */}
                  {/* <!-- Content --> */}
                  <div className="card-body">
                    <ul className="list-group list-group-flush priceList">
                      <li className="list-group-item bg-white border-0 ps-0">
                        <strong>Unlimited</strong> exams
                      </li>
                      <li className="list-group-item bg-white border-0 ps-0">
                        <strong>Unlimited</strong> e certificates
                      </li>
                      <li className="list-group-item d-flex align-items-center border-0 ps-0">
                        <svg
                          className="icon icon-xs text-success me-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          ></path>
                        </svg>{" "}
                        Speech To Text
                      </li>
                      <li className="list-group-item d-flex align-items-center border-0 ps-0">
                        <svg
                          className="icon icon-xs text-success me-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          ></path>
                        </svg>{" "}
                        Text to speech
                      </li>
                      <li className="list-group-item d-flex align-items-center border-0 ps-0">
                        <svg
                          className="icon icon-xs text-success me-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          ></path>
                        </svg>{" "}
                        E-Certificate
                      </li>
                      <li className="list-group-item d-flex align-items-center border-0 ps-0">
                        <svg
                          className="icon icon-xs text-success me-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          ></path>
                        </svg>{" "}
                        Explanation
                      </li>

                      <li className="list-group-item d-flex align-items-center border-0 border-0 ps-0 pb-0">
                        <svg
                          className="icon icon-xs text-success me-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          ></path>
                        </svg>{" "}
                        Premium Support
                      </li>
                    </ul>
                  </div>
                  {/* <!-- End Content --> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-gray-800" id="pricing-section">
          <div className="container">
            <div className="row justify-content-center text-white mb-6">
              <div className="col-12 col-lg-9 text-center">
                <h2 className="display-3 fw-light mb-4">
                  Choose the right plan for your business
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-lg-6 col-xl-4 mb-5">
                <div className="card border-light rounded-md mb-3 px-2">
                  <div className="card-header bg-white border-light p-4">
                    <div className="d-flex mb-3">
                      {" "}
                      <span className="h5 text-gray-600 me-2 mb-0">
                        IDR
                      </span>{" "}
                      <span className="display-2 mb-0 fw-extrabold text-primary">
                        300K
                      </span>{" "}
                    </div>
                    <h3 className="h4 mb-3">Monthly</h3>
                    <p className="fw-normal font-small mb-0">
                      Great for personal use and a small organization.
                    </p>
                  </div>
                  <div className="card-body py-4">
                    <ul className="list-group simpleList">
                      <li className="list-group-item fw-normal d-inline-flex align-items-center border-0">
                        <svg
                          className="icon icon-xxs text-success me-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        Text-to-Speech : <strong> 30 days</strong>
                      </li>
                      <li className="list-group-item fw-normal d-inline-flex align-items-center border-0">
                        <svg
                          className="icon icon-xxs text-success me-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        Speech-to-Text: <strong>30 days</strong>
                      </li>
                      <li className="list-group-item fw-normal d-inline-flex align-items-center border-0">
                        <svg
                          className="icon icon-xxs text-success me-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        E-Certificate : <strong>Unlimited</strong>
                      </li>
                    </ul>
                  </div>
                  <div className="card-footer d-grid bg-white border-0 pt-0 px-4 pb-4">
                    <button
                      onClick={(event) => doPayment(event, "30")}
                      className="btn btn-secondary text-dark rounded"
                    >
                      {" "}
                      Buy now <span className="icon icon-xs ms-3"></span>{" "}
                    </button>{" "}
                  </div>
                </div>
                {/* <a
                  href="/licensing#freelancer"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Something unclear? Click to read the full Freelancer license."
                  className="font-small text-white text-center d-flex align-items-center justify-content-center mt-4"
                >
                  <svg
                    className="icon icon-xs me-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1zm-5 8.274l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L5 10.274zm10 0l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L15 10.274z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Freelancer License
                </a> */}
              </div>
              <div className="col-12 col-lg-6 col-xl-4 mb-5">
                <div className="card border-light rounded-md mb-3 px-2">
                  <div className="card-header bg-white border-light p-4">
                    <div className="d-flex mb-3">
                      {" "}
                      <span className="h5 text-gray-600 me-2 mb-0">
                        IDR
                      </span>{" "}
                      <span className="display-2 mb-0 fw-extrabold text-primary">
                        1.200K
                      </span>{" "}
                    </div>
                    <h3 className="h4 mb-3">Half-yearly</h3>
                    <p className="fw-normal font-small mb-0">
                      Great for semi-large organization with large number of
                      members. Also save $10
                    </p>
                  </div>
                  <div className="card-body py-4">
                    <ul className="list-group simpleList">
                      <li className="list-group-item fw-normal d-inline-flex align-items-center border-0">
                        <svg
                          className="icon icon-xxs text-success me-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        Text-to-Speech : <strong> 6 months</strong>
                      </li>
                      <li className="list-group-item fw-normal d-inline-flex align-items-center border-0">
                        <svg
                          className="icon icon-xxs text-success me-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        Speech-to-Text: <strong>6 months</strong>
                      </li>
                      <li className="list-group-item fw-normal d-inline-flex align-items-center border-0">
                        <svg
                          className="icon icon-xxs text-success me-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        E-Certificate : <strong>Unlimited</strong>
                      </li>
                    </ul>
                  </div>
                  <div className="card-footer d-grid bg-white border-0 pt-0 px-4 pb-4">
                    <button
                      onClick={(event) => doPayment(event, "180")}
                      className="btn btn-gray-800 rounded"
                    >
                      {" "}
                      Buy now <span className="icon icon-xs ms-3"></span>{" "}
                    </button>{" "}
                  </div>
                </div>
                {/* <a
                  href="/licensing#company"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Something unclear? Click to read the full Company license."
                  className="font-small text-white text-center d-flex align-items-center justify-content-center mt-4"
                >
                  <svg
                    className="icon icon-xs me-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1zm-5 8.274l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L5 10.274zm10 0l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L15 10.274z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Company License
                </a> */}
              </div>
              <div className="col-12 col-lg-6 col-xl-4 mb-5">
                <div className="card border-light rounded-md mb-3 px-2">
                  <div className="card-header bg-white border-light p-4">
                    <div className="d-flex mb-3">
                      {" "}
                      <span className="h5 text-gray-600 me-2 mb-0">
                        IDR
                      </span>{" "}
                      <span className="display-2 mb-0 fw-extrabold text-primary">
                        2.000K
                      </span>{" "}
                    </div>
                    <h3 className="h4 mb-3">Yearly</h3>
                    <p className="fw-normal font-small mb-0">
                      Best for corporations that want to establish a certain
                      standard for their employees.
                    </p>
                  </div>
                  <div className="card-body py-4">
                    <ul className="list-group simpleList">
                      <li className="list-group-item fw-normal d-inline-flex align-items-center border-0">
                        <svg
                          className="icon icon-xxs text-success me-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        Text-to-Speech : <strong> 12 months</strong>
                      </li>
                      <li className="list-group-item fw-normal d-inline-flex align-items-center border-0">
                        <svg
                          className="icon icon-xxs text-success me-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        Speech-to-Text: <strong>12 months</strong>
                      </li>
                      <li className="list-group-item fw-normal d-inline-flex align-items-center border-0">
                        <svg
                          className="icon icon-xxs text-success me-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        E-Certificate : <strong>Unlimited</strong>
                      </li>
                    </ul>
                  </div>
                  <div className="card-footer d-grid bg-white border-0 pt-0 px-4 pb-4">
                    <button
                      onClick={(event) => doPayment(event, "365")}
                      className="btn btn-gray-800 rounded"
                    >
                      {" "}
                      Buy now <span className="icon icon-xs ms-3"></span>{" "}
                    </button>{" "}
                  </div>
                </div>
                {/* <a
                  href="/licensing#enterprise"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Something unclear? Click to read the full Enterprise license."
                  className="font-small text-white text-center d-flex align-items-center justify-content-center mt-4"
                >
                  <svg
                    className="icon icon-xs me-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1zm-5 8.274l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L5 10.274zm10 0l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L15 10.274z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Enterprise License
                </a> */}
              </div>
            </div>
          </div>
        </section>
        <section className="section section-lg bg-soft">
          <div className="container">
            <h2 className="border-bottom border-gray-300 mb-5 pb-3">
              Frequently Asked Question
            </h2>
            <div className="row faq-section">
              <div className="col-12 col-md-6">
                <div className="mb-5">
                  <h4 className="h5">
                    How does the text-to-speech and speech-to-text integration
                    work on your online exam platform?
                  </h4>
                  <p>
                    In each question section, you have the option to activate
                    text-to-speech, allowing you to listen to the questions
                    instead of reading them.
                  </p>
                </div>
                <div className="mb-5">
                  <h4 className="h5">
                    What is the difference between the Free and Premium version?
                  </h4>
                  <p>
                    The text-to-speech and speech-to-text features are available
                    exclusively for premium users. With the free version, you
                    have access to creating up to 10 custom certificates for
                    your organization.
                  </p>
                </div>
                <div className="mb-5">
                  <h4 className="h5">How does the exam scheduling work?</h4>
                  <p>
                    As a user, you have the ability to set the start and end
                    schedule for your exam. Participants are only allowed to
                    start the exam within the specified schedule, and any
                    attempts outside of the scheduled timeframe will not be
                    permitted.
                  </p>
                </div>
                <div className="mb-5">
                  <h4 className="h5">
                    What types of questions will participants encounter during
                    the exam?
                  </h4>
                  <p>
                    We offer a wide range of question categories, including
                    Mathematics, Science, Technology, and more. Each category
                    consists of numerous questions related to the respective
                    subject.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="mb-5">
                  <h4 className="h5">What previlage do organization have?</h4>
                  <p>
                    Organizations have access to personalized e-certificates.
                    Free users are only allowed to create 10 personalized
                    certificates for their members. Additionally, organizations
                    have the ability to create exams consisting of specific
                    subject types for the questions.
                  </p>
                </div>
                <div className="mb-5">
                  <h4 className="h5">
                    What are the available payment methods for subscribing to
                    the premium version?
                  </h4>
                  <p>
                    You can use various payment methods to subscribe to the
                    premium version, including credit cards, bank transfers,
                    eWallets, and more. Our platform integrates with Midtrans, a
                    trusted payment gateway, to ensure secure and convenient
                    transactions. Simply choose the payment method that suits
                    you best during the subscription process.
                  </p>
                </div>
                <div className="mb-5">
                  <h4 className="h5">
                    Can i create my own question to be on the exam?
                  </h4>
                  <p>
                    Regrettably, all the questions provided on our platform are
                    created exclusively by the administrator. Users have the
                    ability to create exams using the questions available in our
                    question bank. We curate and maintain a comprehensive
                    collection of high-quality questions across various subjects
                    to ensure the reliability and accuracy of the exams. This
                    approach helps us maintain the integrity and standardization
                    of the assessment process, ensuring fair and consistent
                    evaluations for all participants.
                  </p>
                </div>
              </div>
            </div>
            <div className="row mt-lg-5 mt-5">
              <div className="col text-center">
                <p className="text-italic">
                  Didnt find what you were looking for? No biggie!
                </p>
                <a href="/contact" className="btn btn-sm btn-secondary">
                  Contact us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer py-6 bg-gray-800 text-white">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img
                className="navbar-brand-dark mb-4"
                height="50"
                src="../assets/images/logo-white.png"
                alt="Logo light"
              />
              <p className="text-gray-300">
                Equiz+ is online exam platform with certificates,
                speech-to-text, and no ads.
              </p>
              <ul className="social-buttons mb-5 mb-lg-0">
                <li>
                  <a
                    href="https://twitter.com"
                    aria-label="twitter social link"
                    className="d-flex align-item-center"
                  >
                    <svg
                      className="icon icon-xs text-white"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="twitter"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/"
                    className="d-flex align-item-center"
                    aria-label="facebook social link"
                  >
                    <svg
                      className="icon icon-xs text-white"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="facebook-f"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path
                        fill="currentColor"
                        d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com"
                    aria-label="github social link"
                    className="d-flex align-item-center"
                  >
                    <svg
                      className="icon icon-xs text-white"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="github"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 496 512"
                    >
                      <path
                        fill="currentColor"
                        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                      ></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-2 mb-5 mb-lg-0">
              <span className="h5">EQUIZ+</span>
              <ul className="links-vertical mt-2">
                <li>
                  <a href="/blog">Blog</a>
                </li>
                <li>
                  <a href="/products">Products</a>
                </li>
                <li>
                  <a href="/about">About Us</a>
                </li>
                <li>
                  <a href="/contact">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-2 mb-5 mb-lg-0">
              <span className="h5">Other</span>
              <ul className="links-vertical mt-2">
                <li>
                  <a href="/docs/quick-start/">
                    Docs
                    <span className="badge badge-sm bg-secondary text-dark ms-2">
                      v1.4
                    </span>
                  </a>
                </li>
                <li>
                  <a href="/docs/changelog/">Changelog</a>
                </li>
                <li>
                  <a href="/licensing">License</a>
                </li>
                <li>
                  <a href="/contact">Support</a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-4 mb-5 mb-lg-0">
              <span className="h5 mb-3 d-block">Subscribe</span>
              <form action="#">
                <div className="form-row mb-2">
                  <div className="col-12">
                    <input
                      type="email"
                      className="form-control mb-2"
                      placeholder="example@company.com"
                      name="email"
                      aria-label="Subscribe form"
                      required
                    />
                  </div>
                  <div className="col-12 d-grid">
                    <button
                      type="submit"
                      className="btn btn-secondary"
                      data-loading-text="Sending"
                    >
                      <span>Subscribe</span>
                    </button>
                  </div>
                </div>
              </form>
              <p className="text-muted font-small m-0">
                Well never share your details. See our{" "}
                <a className="text-white" href="#">
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
          <hr className="bg-gray-700 my-5" />
          <div className="row">
            <div className="col mb-md-0">
              <a href="" className="d-flex justify-content-center">
                <img
                  src="./assets/images/logo-white.png"
                  height="50"
                  className="mb-4"
                  alt="Equiz+ Logo"
                />
              </a>
              <div
                className="d-flex text-center justify-content-center align-items-center"
                role="contentinfo"
              >
                <p className="fw-normal font-small mb-0">
                  Copyright © Equiz+ 2023. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default LandingPage;
