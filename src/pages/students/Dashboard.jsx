function StudentDashboard() {
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="alert alert-success border-0 shadow">
            Selamat Datang <strong>Nama Murid</strong>
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
                      <td className="fw-bold">Kelas</td>
                      <td>Kelasanyya</td>
                    </tr>
                    <tr>
                      <td className="fw-bold">Sesi</td>
                      <td>Exam Sesi</td>
                    </tr>
                    <tr>
                      <td className="fw-bold">Mulai</td>
                      <td>Waktu Mulai</td>
                    </tr>
                    <tr>
                      <td className="fw-bold">Selesai</td>
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
                      Kerjakan
                    </a>
                  </div>

                  <div>
                    <a
                      href="/student/exam/`"
                      className="btn btn-md btn-info border-0 shadow w-100 mt-2"
                    >
                      Lanjut Kerjakan
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
                      Belum Mulai
                    </button>
                  </div>

                  {/* ujian terlewat */}
                  <div>
                    <button
                      className="btn btn-md btn-danger border-0 shadow w-100 mt-2"
                      disabled
                    >
                      Waktu Terlewat
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <button
                  className="btn btn-md btn-danger border-0 shadow w-100 mt-2"
                  disabled
                >
                  Sudah Dikerjakan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="alert alert-danger border-0 shadow">
            <i className="fa fa-info-circle"></i> Tidak ada ujian yang tersedia
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentDashboard;
