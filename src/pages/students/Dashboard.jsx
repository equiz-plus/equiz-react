function StudentDashboard() {
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="alert alert-success border-0 shadow">
            Welcome <strong>Nama Murid</strong>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="card border-0 shadow">
            <div className="card-body">
              <h5>Judul Ujian</h5>
              <hr />
              <div className="table-responsive">
                <table className="table table-centered table-nowrap mb-0 rounded">
                  <thead>
                    <tr>
                      <td className="fw-bold">Category</td>
                      <td>Mata Pelajaran</td>
                    </tr>
                    <tr>
                      <td className="fw-bold">Class</td>
                      <td>Kelasanyya</td>
                    </tr>
                    <tr>
                      <td className="fw-bold">Session</td>
                      <td>Exam Sesi</td>
                    </tr>
                    <tr>
                      <td className="fw-bold">Start</td>
                      <td>Waktu Mulai</td>
                    </tr>
                    <tr>
                      <td className="fw-bold">End</td>
                      <td>Waktu Selesai</td>
                    </tr>
                  </thead>
                </table>
              </div>

              <div>
                {/* cek apakah ujian sudah dimulai, tapi waktu masih ada */}
                <div>
                  <div>
                    <a
                      href="/student/exam-confirmation/"
                      className="btn btn-md btn-success border-0 shadow w-100 mt-2 text-white"
                    >
                      Take Exam
                    </a>
                  </div>

                  <div>
                    <a
                      href="/student/exam/`"
                      className="btn btn-md btn-info border-0 shadow w-100 mt-2"
                    >
                      Continue
                    </a>
                  </div>
                </div>

                <div>
                  {/* ujian belum mulai */}
                  <div>
                    <button
                      className="btn btn-md btn-gray-700 border-0 shadow w-100 mt-2"
                      disabled
                    >
                      Exam has not been started
                    </button>
                  </div>

                  {/* ujian terlewat */}
                  <div>
                    <button
                      className="btn btn-md btn-danger border-0 shadow w-100 mt-2"
                      disabled
                    >
                      Missed the exam
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <button
                  className="btn btn-md btn-danger border-0 shadow w-100 mt-2"
                  disabled
                >
                  Already took this exam
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="alert alert-danger border-0 shadow">
            <i className="fa fa-info-circle"></i> There is no available exam yet
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentDashboard;
