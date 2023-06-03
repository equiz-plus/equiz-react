function LandingPage() {
  return (
    <>
      <main>
        {/* <!-- Hero --> */}
        <section className="section-header overflow-hidden pt-7 pt-lg-8 pb-9 pb-lg-12 bg-primary text-white">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <img
                  className="navbar-brand-dark mb-4"
                  src="../public/assets/images/equizlogo.png"
                  height="120"
                  alt="Logo light"
                />
                <h1 className="display-1">EQUIZ+</h1>
                <div className="mb-5">
                  <h2 className="h3 text-muted mr-3">
                    Unlock Your Potential with Seamless Online Testing!
                  </h2>
                </div>

                <div className="d-flex justify-content-center align-items-end flex-wrap mb-6">
                  <a
                    href="./pages/dashboard/dashboard.html"
                    className="btn btn-secondary text-dark mr-4 mb-3 mb-lg-0"
                  >
                    {" "}
                    Go to dashboard
                  </a>
                  <a
                    href="https://themesberg.com/docs/volt-bootstrap-5-dashboard/getting-started/quick-start/"
                    className="btn btn-outline-white mr-4 mb-3 mx-2 mb-lg-0"
                  >
                    Login to your account
                  </a>
                </div>
              </div>
            </div>
          </div>
          <figure className="position-absolute bottom-0 left-0 w-100 d-none d-md-block mb-n2">
            <svg
              className="home-pattern"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 3000 185.4"
            >
              <path d="M3000,0v185.4H0V0c496.4,115.6,996.4,173.4,1500,173.4S2503.6,115.6,3000,0z"></path>
            </svg>
          </figure>
        </section>
        <div className="section pt-0">
          <div className="container mt-n10 mt-lg-n12 z-2">
            <div className="row justify-content-center">
              <div className="col-12">
                <img
                  src="https://www.sampoernaacademy.sch.id/wp-content/uploads/2020/11/SA-Image-Online-Exam.png"
                  alt="Online Exam Plus"
                />
              </div>
            </div>
          </div>
        </div>
        <section className="section section-lg bg-soft pt-0">
          <div className="container">
            <div className="row justify-content-center mb-5 mb-lg-6">
              <div className="col-6 col-md-3 text-center mb-4">
                <div className="icon icon-shape bg-white shadow-lg rounded mb-4">
                  <svg
                    className="icon icon-md text-secondary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path>
                  </svg>
                </div>
                <h3 className="fw-bolder">100+</h3>
                <p className="text-gray">Exam Category</p>
              </div>
              <div className="col-6 col-md-3 text-center mb-4">
                <div className="icon icon-shape bg-white shadow-lg rounded mb-4">
                  <svg
                    className="icon icon-md text-secondary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z"></path>
                  </svg>
                </div>
                <h3 className="fw-bolder">1000+</h3>
                <p className="text-gray">Questions</p>
              </div>
              <div className="col-6 col-md-3 text-center">
                <div className="icon icon-shape bg-white shadow-lg rounded mb-4">
                  <svg
                    className="icon icon-md text-secondary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"></path>
                  </svg>
                </div>
                <h3 className="fw-bolder">TTS</h3>
                <p className="text-gray">Text to speech</p>
              </div>
              <div className="col-6 col-md-3 text-center">
                <div className="icon icon-shape bg-white shadow-lg rounded mb-4">
                  <svg
                    className="icon icon-md text-secondary"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="js-square"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM243.8 381.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"
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
                  src="https://goteleport.com/blog/_next/image/?url=%2Fblog%2F_next%2Fstatic%2Fmedia%2Fshort-lived-certificates%402x.ce0bdc66.png&w=3840&q=75"
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
        <section className="section section-sm pt-0">
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
                  You get all Bootstrap components fully customized. Besides,
                  you receive numerous plugins out of the box and ready to use.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="card bg-white shadow-soft text-primary rounded mb-4">
                  <div className="px-3 px-lg-4 py-5 text-center">
                    <svg
                      className="icon icon-md mb-3"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="bootstrap"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="currentColor"
                        d="M292.3 311.93c0 42.41-39.72 41.43-43.92 41.43h-80.89v-81.69h80.89c42.56 0 43.92 31.9 43.92 40.26zm-50.15-73.13c.67 0 38.44 1 38.44-36.31 0-15.52-3.51-35.87-38.44-35.87h-74.66v72.18h74.66zM448 106.67v298.66A74.89 74.89 0 0 1 373.33 480H74.67A74.89 74.89 0 0 1 0 405.33V106.67A74.89 74.89 0 0 1 74.67 32h298.66A74.89 74.89 0 0 1 448 106.67zM338.05 317.86c0-21.57-6.65-58.29-49.05-67.35v-.73c22.91-9.78 37.34-28.25 37.34-55.64 0-7 2-64.78-77.6-64.78h-127v261.33c128.23 0 139.87 1.68 163.6-5.71 14.21-4.42 52.71-17.98 52.71-67.12z"
                      ></path>
                    </svg>
                    <h5 className="fw-bold text-primary">Bootstrap 5</h5>
                    <p className="mb-0 text-gray-600">
                      Built with the most popular CSS Framework
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="card bg-white shadow-soft text-primary rounded mb-4">
                  <div className="px-3 px-lg-4 py-5 text-center">
                    <svg
                      className="icon icon-md mb-3"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="sass"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                    >
                      <path
                        fill="currentColor"
                        d="M301.84 378.92c-.3.6-.6 1.08 0 0zm249.13-87a131.16 131.16 0 0 0-58 13.5c-5.9-11.9-12-22.3-13-30.1-1.2-9.1-2.5-14.5-1.1-25.3s7.7-26.1 7.6-27.2-1.4-6.6-14.3-6.7-24 2.5-25.29 5.9a122.83 122.83 0 0 0-5.3 19.1c-2.3 11.7-25.79 53.5-39.09 75.3-4.4-8.5-8.1-16-8.9-22-1.2-9.1-2.5-14.5-1.1-25.3s7.7-26.1 7.6-27.2-1.4-6.6-14.29-6.7-24 2.5-25.3 5.9-2.7 11.4-5.3 19.1-33.89 77.3-42.08 95.4c-4.2 9.2-7.8 16.6-10.4 21.6-.4.8-.7 1.3-.9 1.7.3-.5.5-1 .5-.8-2.2 4.3-3.5 6.7-3.5 6.7v.1c-1.7 3.2-3.6 6.1-4.5 6.1-.6 0-1.9-8.4.3-19.9 4.7-24.2 15.8-61.8 15.7-63.1-.1-.7 2.1-7.2-7.3-10.7-9.1-3.3-12.4 2.2-13.2 2.2s-1.4 2-1.4 2 10.1-42.4-19.39-42.4c-18.4 0-44 20.2-56.58 38.5-7.9 4.3-25 13.6-43 23.5-6.9 3.8-14 7.7-20.7 11.4-.5-.5-.9-1-1.4-1.5-35.79-38.2-101.87-65.2-99.07-116.5 1-18.7 7.5-67.8 127.07-127.4 98-48.8 176.35-35.4 189.84-5.6 19.4 42.5-41.89 121.6-143.66 133-38.79 4.3-59.18-10.7-64.28-16.3-5.3-5.9-6.1-6.2-8.1-5.1-3.3 1.8-1.2 7 0 10.1 3 7.9 15.5 21.9 36.79 28.9 18.7 6.1 64.18 9.5 119.17-11.8 61.78-23.8 109.87-90.1 95.77-145.6C386.52 18.32 293-.18 204.57 31.22c-52.69 18.7-109.67 48.1-150.66 86.4-48.69 45.6-56.48 85.3-53.28 101.9 11.39 58.9 92.57 97.3 125.06 125.7-1.6.9-3.1 1.7-4.5 2.5-16.29 8.1-78.18 40.5-93.67 74.7-17.5 38.8 2.9 66.6 16.29 70.4 41.79 11.6 84.58-9.3 107.57-43.6s20.2-79.1 9.6-99.5c-.1-.3-.3-.5-.4-.8 4.2-2.5 8.5-5 12.8-7.5 8.29-4.9 16.39-9.4 23.49-13.3-4 10.8-6.9 23.8-8.4 42.6-1.8 22 7.3 50.5 19.1 61.7 5.2 4.9 11.49 5 15.39 5 13.8 0 20-11.4 26.89-25 8.5-16.6 16-35.9 16-35.9s-9.4 52.2 16.3 52.2c9.39 0 18.79-12.1 23-18.3v.1s.2-.4.7-1.2c1-1.5 1.5-2.4 1.5-2.4v-.3c3.8-6.5 12.1-21.4 24.59-46 16.2-31.8 31.69-71.5 31.69-71.5a201.24 201.24 0 0 0 6.2 25.8c2.8 9.5 8.7 19.9 13.4 30-3.8 5.2-6.1 8.2-6.1 8.2a.31.31 0 0 0 .1.2c-3 4-6.4 8.3-9.9 12.5-12.79 15.2-28 32.6-30 37.6-2.4 5.9-1.8 10.3 2.8 13.7 3.4 2.6 9.4 3 15.69 2.5 11.5-.8 19.6-3.6 23.5-5.4a82.2 82.2 0 0 0 20.19-10.6c12.5-9.2 20.1-22.4 19.4-39.8-.4-9.6-3.5-19.2-7.3-28.2 1.1-1.6 2.3-3.3 3.4-5C434.8 301.72 450.1 270 450.1 270a201.24 201.24 0 0 0 6.2 25.8c2.4 8.1 7.09 17 11.39 25.7-18.59 15.1-30.09 32.6-34.09 44.1-7.4 21.3-1.6 30.9 9.3 33.1 4.9 1 11.9-1.3 17.1-3.5a79.46 79.46 0 0 0 21.59-11.1c12.5-9.2 24.59-22.1 23.79-39.6-.3-7.9-2.5-15.8-5.4-23.4 15.7-6.6 36.09-10.2 62.09-7.2 55.68 6.5 66.58 41.3 64.48 55.8s-13.8 22.6-17.7 25-5.1 3.3-4.8 5.1c.5 2.6 2.3 2.5 5.6 1.9 4.6-.8 29.19-11.8 30.29-38.7 1.6-34-31.09-71.4-89-71.1zm-429.18 144.7c-18.39 20.1-44.19 27.7-55.28 21.3C54.61 451 59.31 421.42 82 400c13.8-13 31.59-25 43.39-32.4 2.7-1.6 6.6-4 11.4-6.9.8-.5 1.2-.7 1.2-.7.9-.6 1.9-1.1 2.9-1.7 8.29 30.4.3 57.2-19.1 78.3zm134.36-91.4c-6.4 15.7-19.89 55.7-28.09 53.6-7-1.8-11.3-32.3-1.4-62.3 5-15.1 15.6-33.1 21.9-40.1 10.09-11.3 21.19-14.9 23.79-10.4 3.5 5.9-12.2 49.4-16.2 59.2zm111 53c-2.7 1.4-5.2 2.3-6.4 1.6-.9-.5 1.1-2.4 1.1-2.4s13.9-14.9 19.4-21.7c3.2-4 6.9-8.7 10.89-13.9 0 .5.1 1 .1 1.6-.13 17.9-17.32 30-25.12 34.8zm85.58-19.5c-2-1.4-1.7-6.1 5-20.7 2.6-5.7 8.59-15.3 19-24.5a36.18 36.18 0 0 1 1.9 10.8c-.1 22.5-16.2 30.9-25.89 34.4z"
                      ></path>
                    </svg>
                    <h5 className="fw-bold text-primary">Sass</h5>
                    <p className="mb-0 text-gray-600">
                      Variables and mixins to empower development
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
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                      ></path>
                    </svg>
                    <h5 className="fw-bold text-primary">Responsive</h5>
                    <p className="mb-0 text-gray-600">
                      All pages and components are 100% responsive
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="card bg-white shadow-soft text-primary rounded mb-4">
                  <div className="px-3 px-lg-4 py-5 text-center">
                    <svg
                      className="icon icon-md mb-3"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="gulp"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 512"
                    >
                      <path
                        fill="currentColor"
                        d="M209.8 391.1l-14.1 24.6-4.6 80.2c0 8.9-28.3 16.1-63.1 16.1s-63.1-7.2-63.1-16.1l-5.8-79.4-14.9-25.4c41.2 17.3 126 16.7 165.6 0zm-196-253.3l13.6 125.5c5.9-20 20.8-47 40-55.2 6.3-2.7 12.7-2.7 18.7.9 5.2 3 9.6 9.3 10.1 11.8 1.2 6.5-2 9.1-4.5 9.1-3 0-5.3-4.6-6.8-7.3-4.1-7.3-10.3-7.6-16.9-2.8-6.9 5-12.9 13.4-17.1 20.7-5.1 8.8-9.4 18.5-12 28.2-1.5 5.6-2.9 14.6-.6 19.9 1 2.2 2.5 3.6 4.9 3.6 5 0 12.3-6.6 15.8-10.1 4.5-4.5 10.3-11.5 12.5-16l5.2-15.5c2.6-6.8 9.9-5.6 9.9 0 0 10.2-3.7 13.6-10 34.7-5.8 19.5-7.6 25.8-7.6 25.8-.7 2.8-3.4 7.5-6.3 7.5-1.2 0-2.1-.4-2.6-1.2-1-1.4-.9-5.3-.8-6.3.2-3.2 6.3-22.2 7.3-25.2-2 2.2-4.1 4.4-6.4 6.6-5.4 5.1-14.1 11.8-21.5 11.8-3.4 0-5.6-.9-7.7-2.4l7.6 79.6c2 5 39.2 17.1 88.2 17.1 49.1 0 86.3-12.2 88.2-17.1l10.9-94.6c-5.7 5.2-12.3 11.6-19.6 14.8-5.4 2.3-17.4 3.8-17.4-5.7 0-5.2 9.1-14.8 14.4-21.5 1.4-1.7 4.7-5.9 4.7-8.1 0-2.9-6-2.2-11.7 2.5-3.2 2.7-6.2 6.3-8.7 9.7-4.3 6-6.6 11.2-8.5 15.5-6.2 14.2-4.1 8.6-9.1 22-5 13.3-4.2 11.8-5.2 14-.9 1.9-2.2 3.5-4 4.5-1.9 1-4.5.9-6.1-.3-.9-.6-1.3-1.9-1.3-3.7 0-.9.1-1.8.3-2.7 1.5-6.1 7.8-18.1 15-34.3 1.6-3.7 1-2.6.8-2.3-6.2 6-10.9 8.9-14.4 10.5-5.8 2.6-13 2.6-14.5-4.1-.1-.4-.1-.8-.2-1.2-11.8 9.2-24.3 11.7-20-8.1-4.6 8.2-12.6 14.9-22.4 14.9-4.1 0-7.1-1.4-8.6-5.1-2.3-5.5 1.3-14.9 4.6-23.8 1.7-4.5 4-9.9 7.1-16.2 1.6-3.4 4.2-5.4 7.6-4.5.6.2 1.1.4 1.6.7 2.6 1.8 1.6 4.5.3 7.2-3.8 7.5-7.1 13-9.3 20.8-.9 3.3-2 9 1.5 9 2.4 0 4.7-.8 6.9-2.4 4.6-3.4 8.3-8.5 11.1-13.5 2-3.6 4.4-8.3 5.6-12.3.5-1.7 1.1-3.3 1.8-4.8 1.1-2.5 2.6-5.1 5.2-5.1 1.3 0 2.4.5 3.2 1.5 1.7 2.2 1.3 4.5.4 6.9-2 5.6-4.7 10.6-6.9 16.7-1.3 3.5-2.7 8-2.7 11.7 0 3.4 3.7 2.6 6.8 1.2 2.4-1.1 4.8-2.8 6.8-4.5 1.2-4.9.9-3.8 26.4-68.2 1.3-3.3 3.7-4.7 6.1-4.7 1.2 0 2.2.4 3.2 1.1 1.7 1.3 1.7 4.1 1 6.2-.7 1.9-.6 1.3-4.5 10.5-5.2 12.1-8.6 20.8-13.2 31.9-1.9 4.6-7.7 18.9-8.7 22.3-.6 2.2-1.3 5.8 1 5.8 5.4 0 19.3-13.1 23.1-17 .2-.3.5-.4.9-.6.6-1.9 1.2-3.7 1.7-5.5 1.4-3.8 2.7-8.2 5.3-11.3.8-1 1.7-1.6 2.7-1.6 2.8 0 4.2 1.2 4.2 4 0 1.1-.7 5.1-1.1 6.2 1.4-1.5 2.9-3 4.5-4.5 15-13.9 25.7-6.8 25.7.2 0 7.4-8.9 17.7-13.8 23.4-1.6 1.9-4.9 5.4-5 6.4 0 1.3.9 1.8 2.2 1.8 2 0 6.4-3.5 8-4.7 5-3.9 11.8-9.9 16.6-14.1l14.8-136.8c-30.5 17.1-197.6 17.2-228.3.2zm229.7-8.5c0 21-231.2 21-231.2 0 0-8.8 51.8-15.9 115.6-15.9 9 0 17.8.1 26.3.4l12.6-48.7L228.1.6c1.4-1.4 5.8-.2 9.9 3.5s6.6 7.9 5.3 9.3l-.1.1L185.9 74l-10 40.7c39.9 2.6 67.6 8.1 67.6 14.6zm-69.4 4.6c0-.8-.9-1.5-2.5-2.1l-.2.8c0 1.3-5 2.4-11.1 2.4s-11.1-1.1-11.1-2.4c0-.1 0-.2.1-.3l.2-.7c-1.8.6-3 1.4-3 2.3 0 2.1 6.2 3.7 13.7 3.7 7.7.1 13.9-1.6 13.9-3.7z"
                      ></path>
                    </svg>
                    <h5 className="fw-bold text-primary">Gulp</h5>
                    <p className="mb-0 text-gray-600">
                      Gulp & BrowserSync for a flawless workflow
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="card bg-white shadow-soft text-primary rounded mb-4">
                  <div className="px-3 px-lg-4 py-5 text-center">
                    <svg
                      className="icon icon-md mb-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <h5 className="fw-bold text-primary">Creative rights</h5>
                    <p className="mb-0 text-gray-600">
                      All images and fonts are licensed & free to use
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="card bg-white shadow-soft text-primary rounded mb-4">
                  <div className="px-3 px-lg-4 py-5 text-center">
                    <svg
                      className="icon icon-md mb-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path>
                    </svg>
                    <h5 className="fw-bold text-primary">Documentation</h5>
                    <p className="mb-0 text-gray-600">
                      Everything that comes is well documented
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="card bg-white shadow-soft text-primary rounded mb-4">
                  <div className="px-3 px-lg-4 py-5 text-center">
                    <svg
                      className="icon icon-md mb-3"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="accessible-icon"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="currentColor"
                        d="M423.9 255.8L411 413.1c-3.3 40.7-63.9 35.1-60.6-4.9l10-122.5-41.1 2.3c10.1 20.7 15.8 43.9 15.8 68.5 0 41.2-16.1 78.7-42.3 106.5l-39.3-39.3c57.9-63.7 13.1-167.2-74-167.2-25.9 0-49.5 9.9-67.2 26L73 243.2c22-20.7 50.1-35.1 81.4-40.2l75.3-85.7-42.6-24.8-51.6 46c-30 26.8-70.6-18.5-40.5-45.4l68-60.7c9.8-8.8 24.1-10.2 35.5-3.6 0 0 139.3 80.9 139.5 81.1 16.2 10.1 20.7 36 6.1 52.6L285.7 229l106.1-5.9c18.5-1.1 33.6 14.4 32.1 32.7zm-64.9-154c28.1 0 50.9-22.8 50.9-50.9C409.9 22.8 387.1 0 359 0c-28.1 0-50.9 22.8-50.9 50.9 0 28.1 22.8 50.9 50.9 50.9zM179.6 456.5c-80.6 0-127.4-90.6-82.7-156.1l-39.7-39.7C36.4 287 24 320.3 24 356.4c0 130.7 150.7 201.4 251.4 122.5l-39.7-39.7c-16 10.9-35.3 17.3-56.1 17.3z"
                      ></path>
                    </svg>
                    <h5 className="fw-bold text-primary">WCAG Accessibility</h5>
                    <p className="mb-0 text-gray-600">
                      Accessibility oriented design and functionality
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="card bg-white shadow-soft text-primary rounded mb-4">
                  <div className="px-3 px-lg-4 py-5 text-center">
                    <svg
                      className="icon icon-md mb-3"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="html5"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                    >
                      <path
                        fill="currentColor"
                        d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"
                      ></path>
                    </svg>
                    <h5 className="fw-bold text-primary">W3C Validated</h5>
                    <p className="mb-0 text-gray-600">
                      HTML pages are all valid by W3C Standards
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="card bg-white shadow-soft text-primary rounded mb-4">
                  <div className="px-3 px-lg-4 py-5 text-center">
                    <svg
                      className="icon icon-md mb-3"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="js-square"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="currentColor"
                        d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM243.8 381.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"
                      ></path>
                    </svg>
                    <h5 className="fw-bold text-primary">Vanilla JS</h5>
                    <p className="mb-0 text-gray-600">
                      jQuery is not a required dependency for Volt
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="card bg-white shadow-soft text-primary rounded mb-4">
                  <div className="px-3 px-lg-4 py-5 text-center">
                    <svg
                      className="icon icon-md mb-3"
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
                    <h5 className="fw-bold text-primary">Calendar</h5>
                    <p className="mb-0 text-gray-600">
                      Advanced integration with FullCalendar.js
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="card bg-white shadow-soft text-primary rounded mb-4">
                  <div className="px-3 px-lg-4 py-5 text-center">
                    <svg
                      className="icon icon-md mb-3"
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
                    <h5 className="fw-bold text-primary">MapBox</h5>
                    <p className="mb-0 text-gray-600">
                      Custom integration with markers and cards
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="card bg-white shadow-soft text-primary rounded mb-4">
                  <div className="px-3 px-lg-4 py-5 text-center">
                    <svg
                      className="icon icon-md mb-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"></path>
                    </svg>
                    <h5 className="fw-bold text-primary">Design</h5>
                    <p className="mb-0 text-gray-600">
                      Crafted by professional UI/UX designers
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
                  <a href="/" className="btn btn-gray-800 me-4">
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
                    <ul className="list-group list-group-flush price-list">
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
                    <ul className="list-group list-group-flush price-list">
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
        <section className="section bg-gray-800">
          <div className="container">
            <div className="row justify-content-center text-white mb-6">
              <div className="col-12 col-lg-9 text-center">
                <h2 className="display-3 fw-light mb-4">
                  Choose the right plan for your business
                </h2>
                <p className="lead">
                  You have 3 days to{" "}
                  <span className="fw-bold text-secondary">
                    request a refund
                  </span>{" "}
                  if{" "}
                  <span className="fw-bold text-secondary">
                    youre not happy
                  </span>{" "}
                  with your purchase.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-lg-6 col-xl-4 mb-5">
                <div className="card border-light rounded-md mb-3 px-2">
                  <div className="card-header bg-white border-light p-4">
                    <div className="d-flex mb-3">
                      {" "}
                      <span className="h5 text-gray-600 me-2 mb-0">$</span>{" "}
                      <span className="display-2 mb-0 fw-extrabold text-primary">
                        10
                      </span>{" "}
                    </div>
                    <h3 className="h4 mb-3">Monthly</h3>
                    <p className="fw-normal font-small mb-0">
                      Great for personal use and for your side projects.
                    </p>
                  </div>
                  <div className="card-body py-4">
                    <ul className="list-group simple-list">
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
                        Full documentation
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
                        Domains: <strong>1</strong>
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
                        Team size: <strong>1 developer</strong>
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
                        Premium support: <strong>6 months</strong>
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
                        Free updates: <strong>6 months</strong>
                      </li>
                    </ul>
                  </div>
                  <div className="card-footer d-grid bg-white border-0 pt-0 px-4 pb-4">
                    <a
                      href="/product/admin-dashboard/volt-premium-bootstrap-5-dashboard#pricing"
                      className="btn btn-secondary text-dark rounded"
                    >
                      {" "}
                      Buy now <span className="icon icon-xs ms-3"></span>{" "}
                    </a>{" "}
                  </div>
                </div>
                <a
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
                </a>
              </div>
              <div className="col-12 col-lg-6 col-xl-4 mb-5">
                <div className="card border-light rounded-md mb-3 px-2">
                  <div className="card-header bg-white border-light p-4">
                    <div className="d-flex mb-3">
                      {" "}
                      <span className="h5 text-gray-600 me-2 mb-0">$</span>{" "}
                      <span className="display-2 mb-0 fw-extrabold text-primary">
                        50
                      </span>{" "}
                    </div>
                    <h3 className="h4 mb-3">Half-yearly</h3>
                    <p className="fw-normal font-small mb-0">Save $10</p>
                  </div>
                  <div className="card-body py-4">
                    <ul className="list-group simple-list">
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
                        Full documentation
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
                        Domains: <strong>Unlimited</strong>
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
                        Team size: <strong>1-5 developers</strong>
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
                        Premium support: <strong>12 months</strong>
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
                        Free updates: <strong>lifetime</strong>
                      </li>
                    </ul>
                  </div>
                  <div className="card-footer d-grid bg-white border-0 pt-0 px-4 pb-4">
                    <a
                      href="/product/admin-dashboard/volt-premium-bootstrap-5-dashboard#pricing"
                      className="btn btn-gray-800 rounded"
                    >
                      {" "}
                      Buy now <span className="icon icon-xs ms-3"></span>{" "}
                    </a>{" "}
                  </div>
                </div>
                <a
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
                </a>
              </div>
              <div className="col-12 col-lg-6 col-xl-4 mb-5">
                <div className="card border-light rounded-md mb-3 px-2">
                  <div className="card-header bg-white border-light p-4">
                    <div className="d-flex mb-3">
                      {" "}
                      <span className="h5 text-gray-600 me-2 mb-0">$</span>{" "}
                      <span className="display-2 mb-0 fw-extrabold text-primary">
                        799
                      </span>{" "}
                    </div>
                    <h3 className="h4 mb-3">Enterprise</h3>
                    <p className="fw-normal font-small mb-0">
                      Best for large scale uses and extended redistribution
                      rights.
                    </p>
                  </div>
                  <div className="card-body py-4">
                    <ul className="list-group simple-list">
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
                        Full documentation
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
                        Domains: <strong>Unlimited</strong>
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
                        Team size: <strong>Unlimited</strong>
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
                        Premium support: <strong>24 months</strong>
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
                        Free updates: <strong>lifetime</strong>
                      </li>
                    </ul>
                  </div>
                  <div className="card-footer d-grid bg-white border-0 pt-0 px-4 pb-4">
                    <a
                      href="/product/admin-dashboard/volt-premium-bootstrap-5-dashboard#pricing"
                      className="btn btn-gray-800 rounded"
                    >
                      {" "}
                      Buy now <span className="icon icon-xs ms-3"></span>{" "}
                    </a>{" "}
                  </div>
                </div>
                <a
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
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="section section-lg bg-soft">
          <div className="container">
            <h2 className="border-bottom border-gray-300 mb-5 pb-3">
              Got questions?
            </h2>
            <div className="row faq-section">
              <div className="col-12 col-md-6">
                <div className="mb-5">
                  <h4 className="h5">
                    How do I use the license that I got with my purchase?
                  </h4>
                  <p>
                    You will receive a code in your order receipt. You do not
                    need to insert it anywhere. Please keep it in your records
                    for any future inquiry from us. If you create a client
                    project, you can either keep this code or you can send us an
                    email using our{" "}
                    <a
                      className="text-dark fw-bold text-underline"
                      href="/contact"
                    >
                      contact page
                    </a>
                    , and we will transfer the license to your client, provided
                    that they have an account on our website.
                  </p>
                </div>
                <div className="mb-5">
                  <h4 className="h5">
                    What is the difference between the
                    Freelancer/Company/Enterprise licenses?
                  </h4>
                  <p>
                    The Freelancer license is aimed at people who work on their
                    own. It grants you the right to use the purchased product
                    only for one project (either yours or for a client).
                  </p>
                  <p>
                    The Company license is aimed at agencies or larger teams. It
                    grants you the right to create other licensed products base
                    on the template that you purchase from us.
                  </p>
                  <p>
                    The Enterprise license is aimed at large companies with
                    multiple projects. It grants you the right to create any
                    kind of software, SaaS, digital products and sell them.
                  </p>
                  <p>
                    All the differences between the types of licenses are{" "}
                    <a
                      className="text-dark fw-bold text-underline"
                      href="/licensing"
                    >
                      available here
                    </a>
                    .
                  </p>
                </div>
                <div className="mb-5">
                  <h4 className="h5">
                    Will I get an update to Bootstrap 5 for the Bootstrap 4
                    themes?
                  </h4>
                  <p>
                    Although two of the products (Pixel Pro and Volt Pro) are
                    already available in Bootstrap 5, we will update all of the
                    themes in this Cyber Monday promotion to Bootstrap 5 in the
                    next 6 months for free.
                  </p>
                </div>
                <div className="mb-5">
                  <h4 className="h5">
                    Are the themes available with only classic CSS and without
                    Sass as well?
                  </h4>
                  <p>
                    Yes, they are. Each theme has a{" "}
                    <code className="text-dark fw-bold">html&amp;css</code>
                    folder which contains the theme with classic HTML, CSS, and
                    Javascript files.
                  </p>
                </div>
                <div className="mb-5">
                  <h4 className="h5">Do these themes work with Wordpress?</h4>
                  <p>
                    These products are not Wordpress themes, however, they can
                    be integrated in Wordpress by an experienced web developer.
                  </p>
                </div>
                <div className="mb-5">
                  <h4 className="h5">
                    Are the images, fonts, and icons free to use?
                  </h4>
                  <p>
                    The images, fonts, icons and every other creative element
                    for each theme can be freely used in your project under our
                    licensing terms.
                  </p>
                </div>
                <div className="mb-5">
                  <h4 className="h5">
                    If I purchased a Freelancer/Company License, how can I
                    upgrade to the Company/Enterprise License?
                  </h4>
                  <p>
                    In case you have already purchased a license, but you want
                    to upgrade, you can just send us a message using the{" "}
                    <a
                      className="text-dark fw-bold text-underline"
                      href="/contact"
                    >
                      contact page
                    </a>{" "}
                    and we will send you a discount code so you will only pay
                    the difference for the upgrade.
                  </p>
                </div>
                <div className="mb-5">
                  <h4 className="h5">
                    What does the Included Documentation feature refer to?
                  </h4>
                  <p>
                    It means that each theme within the Cyber Monday promotion
                    has a thorough and up to date documentation on how to get
                    started with the product and each components and plugin is
                    properly explained.
                  </p>
                </div>
                <div className="mb-5">
                  <h4 className="h5">
                    What happens after the 6/12/24 months of Free Updates
                    expires? Can I download the new updates after this period?
                  </h4>
                  <p>
                    At the end of this period, you will need to renew your
                    license (purchase the product again) to get Support.
                  </p>
                </div>
                <div>
                  <h4 className="h5">
                    Can I remove the copyright notice from the files?
                  </h4>
                  <p>
                    You can remove the copyright notice (if its a premium item),
                    but then you will need to create a separate{" "}
                    <code className="text-dark fw-bold">.txt</code> file called{" "}
                    <code className="text-dark fw-bold">LICENSE.txt</code>, and
                    copy paste the copyright text in there. This file should be
                    added to the root folder of your project.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="mb-5">
                  <h4 className="h5">
                    What does the full code feature refer to?
                  </h4>
                  <p>
                    It refers to the fact that you will get all of the Sass,
                    HTML, Javascript, and CSS files of the template.
                  </p>
                </div>
                <div className="mb-5">
                  <h4 className="h5">What does the Domains number refer to?</h4>
                  <p>
                    Depending on the license you purchase, you can use our
                    products to either code a website/web application for you,
                    for a client, or for multiple clients, which will be hosted
                    on one or multiple domains:
                  </p>
                  <p>
                    For example, if you purchased the Freelancer License, you
                    can create only one website (for you or a client). If you
                    want to create multiple websites, you will need a bigger
                    license (like Company or Enterprise). Same, if you have
                    multiple subdomains, like test.yoursite.com
                    (http://test.yoursite.com/) or dev.yoursite.com
                    (http://dev.yoursite.com/), you can use the Freelancer or
                    Startup License.
                  </p>
                  <p>
                    If you have a complex application like a SaaS and have
                    client1.yoursite.com (http://client1.yoursite.com/) and
                    client2.yoursite.com (http://client2.yoursite.com/) and
                    clientx.yoursite.com, (http://clientx.yoursite.com/) you
                    will need a multi-domain license like Company or Enterprise.
                  </p>
                  <p>
                    For more information about our licenses, you can{" "}
                    <a
                      className="text-dark fw-bold text-underline"
                      href="/licensing"
                    >
                      check it here
                    </a>
                    .
                  </p>
                </div>
                <div className="mb-5">
                  <h4 className="h5">What does the Team Size refer to?</h4>
                  <p>
                    The Team size for each license reflects the number of people
                    who can access the product.
                  </p>
                  <p>
                    For example, if you buy the Freelancer license, only one
                    person can use the product. If you have a team of 6-10
                    people, you will need the Company license.
                  </p>
                  <p>
                    For bigger teams of 5 developers, you will need to purchase
                    an Enterprise License.
                  </p>
                </div>
                <div className="mb-5">
                  <h4 className="h5">What does the Tech Support refer to?</h4>
                  <p>
                    Depending on your license type, you have a fixed period when
                    you can submit any ticket to us regarding product
                    functionalities and bug fixes (learning and tutorials
                    related requests are not included). You will get responses
                    directly from the products creators in 24 hours (during
                    business days):
                  </p>
                  <p>
                    If you purchase the Freelancer license, you will receive
                    Support from us for 6 months. If you need 12 months of
                    Support, you will need the Company license.
                  </p>
                  <p>
                    If you purchase the Enterprise license, you will benefit
                    from 24 months of Support. At the end of this period, you
                    will need to renew your license (purchase the product again)
                    to get Support.
                  </p>
                </div>
                <div className="mb-5">
                  <h4 className="h5">What does the Free Updates refer to?</h4>
                  <p>
                    Depending on your license type, you have a determined period
                    when you receive product Updates that include bug fixes and
                    new features:
                  </p>
                  <p>
                    Freelancer: You will receive Free Updates for 6 months.
                    Company: You will receive Free Updates for 12 months.
                    Enterprise: You will benefit from 24 months of Free Updates.
                  </p>
                </div>
                <div>
                  <h4 className="h5">Do you have a question?</h4>
                  <p className="mb-0">
                    Feel free to send us a message using the{" "}
                    <a
                      className="text-dark fw-bold text-underline"
                      href="/contact"
                    >
                      contact page
                    </a>{" "}
                    and one of our team members will get back to you in the
                    shortest time possible.
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
                src="../public/assets/images/logo-white.png"
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
                  src="./public/assets/images/logo-white.png"
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
