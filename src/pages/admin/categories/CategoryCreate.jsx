function CategoryCreate() {
  return (
    <>
      <div className="container-fluid mb-5 mt-5">
        <div className="row">
          <div className="col-md-12">
            <a
              href="/admin/lessons"
              className="btn btn-md btn-primary border-0 shadow mb-3"
              type="button"
            >
              <i className="fa fa-long-arrow-alt-left me-2"></i> Kembali
            </a>
            <div className="card border-0 shadow">
              <div className="card-body">
                <h5>
                  <i className="fa fa-bookmark"></i> Tambah Category
                </h5>
                <hr />
                <form>
                  <div className="mb-4">
                    <label>Category name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Masukkan Nama Pelajaran"
                    />

                    <div className="alert alert-danger mt-2">error message</div>
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

export default CategoryCreate;
