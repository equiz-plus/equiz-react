import { Link } from "react-router-dom";

function ExamCreate() {
  return (
    <>
      <div className="container-fluid mb-5 mt-5">
        <div className="row">
          <div className="col-md-12">
            <Link
              to="/admin/exams"
              className="btn btn-md btn-primary border-0 shadow mb-3"
              type="button"
            >
              <i className="fa fa-long-arrow-alt-left me-2"></i> Kembali
            </Link>
            <div className="card border-0 shadow">
              <div className="card-body">
                <h5>
                  <svg
                    className="icon icon-md-3 me-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      clipRule="evenodd"
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
                    ></path>
                  </svg>
                  Tambah Ujian
                </h5>
                <hr />
                <form method="post">
                  <div className="mb-4">
                    <label>Nama Ujian</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Masukkan Nama Ujian"
                    />
                    <div className="alert alert-danger mt-2">error title</div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-4">
                        <label>Kategory</label>
                        <select className="form-select">
                          <option>Kategory1</option>
                        </select>
                        <div className="alert alert-danger mt-2">
                          Error kategory
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-4">
                        <label>Company Name</label>
                        <select className="form-select">
                          <option>Hacktiv8</option>
                        </select>
                        <div className="alert alert-danger mt-2">
                          Error kategory
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="my-4">
                    <label>Exam Description</label>
                    <textarea
                      className="form-control"
                      placeholder="Enter your message..."
                      id="textarea"
                      rows="4"
                    ></textarea>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-4">
                        <label>Durasi (Menit)</label>
                        <input
                          type="number"
                          min="1"
                          className="form-control"
                          placeholder="Masukkan Durasi Ujian (Menit)"
                        />
                        <div className="alert alert-danger mt-2">
                          Error Durasi
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-4">
                        <label>Jumlah Soal</label>
                        <input
                          type="number"
                          min="1"
                          className="form-control"
                          placeholder="Masukkan Jumlah Soal"
                        />
                        <div className="alert alert-danger mt-2">
                          Error Jumlah Soal
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-md btn-primary border-0 shadow me-2"
                  >
                    Simpan
                  </button>
                  <button
                    type="reset"
                    className="btn btn-md btn-warning border-0 shadow"
                  >
                    Reset
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExamCreate;
