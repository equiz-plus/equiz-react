function ExamComfirmation() {
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <a
            href="/student/dashboard"
            className="btn btn-md btn-primary border-0 shadow mb-3"
            type="button"
          >
            <i className="fa fa-long-arrow-alt-left me-2"></i> Kembali
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="card border-0 shadow">
            <div className="card-body">
              <h5>
                {" "}
                <i className="fa fa-file"></i> Deskripsi Ujian
              </h5>
              <hr />
              <div>Diskripsi</div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card border-0 shadow">
            <div className="card-body">
              <h5>
                {" "}
                <i className="fa fa-list-ul"></i> Detail Peserta
              </h5>
              <hr />
              <div className="table-responsive">
                <table className="table table-centered table-nowrap mb-0 rounded">
                  <thead>
                    <tr>
                      <td className="fw-bold">Nisn</td>
                      <td>1212121</td>
                    </tr>
                    <tr>
                      <td className="fw-bold">Nama Lengkap</td>
                      <td>Mike</td>
                    </tr>
                    <tr>
                      <td className="fw-bold">Kelas</td>
                      <td>Category</td>
                    </tr>
                    <tr>
                      <td className="fw-bold">Ujian</td>
                      <td>Judul exam</td>
                    </tr>
                    <tr>
                      <td className="fw-bold">Mata Pelajaran</td>
                      <td>Sesion Title</td>
                    </tr>
                    <tr>
                      <td className="fw-bold">Durasi</td>
                      <td>20 Menit</td>
                    </tr>
                  </thead>
                </table>
              </div>
              <div>
                <a
                  href="/student/exam-start"
                  className="btn btn-md btn-success border-0 shadow w-100 mt-2 text-white"
                >
                  Mulai
                </a>
              </div>
              <div>
                <button
                  className="btn btn-md btn-primary border-0 shadow w-100 mt-2"
                  disabled
                >
                  Sudah Mengerjakan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExamComfirmation;
