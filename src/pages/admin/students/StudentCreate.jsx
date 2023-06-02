function StudentCreate() {
  return (
    <>
      <div className="container-fluid mb-5 mt-5">
        <div className="row">
          <div className="col-md-12">
            <a
              href="/admin/students"
              className="btn btn-md btn-primary border-0 shadow mb-3"
              type="button"
            >
              <i className="fa fa-long-arrow-alt-left me-2"></i> Kembali
            </a>
            <div className="card border-0 shadow">
              <div className="card-body">
                <h5>
                  <i className="fa fa-user"></i> Tambah Siswa
                </h5>
                <hr />
                <form>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-4">
                        <label>Nisn</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Masukkan Nisn Siswa"
                        />
                        <div className="alert alert-danger mt-2">12131</div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-4">
                        <label>Nama Lengkap</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Masukkan Nama Siswa"
                        />
                        <div className="alert alert-danger mt-2">Mike</div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-4">
                        <label>Kelas</label>
                        <select className="form-select">
                          <option>Okekeke</option>
                        </select>
                        <div className="alert alert-danger mt-2">12131</div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-4">
                        <label>Jenis Kelamin</label>
                        <select className="form-select">
                          <option value="L">Laki - Laki</option>
                          <option value="P">Perempuan</option>
                        </select>
                        <div className="alert alert-danger mt-2">Laki</div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-4">
                        <label>Password</label>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Masukkan Password"
                        />
                        <div className="alert alert-danger mt-2">
                          Password Error Message
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-4">
                        <label>Konfirmasi Password</label>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Masukkan Konfirmasi Password"
                        />
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

export default StudentCreate;
