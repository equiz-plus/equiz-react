function ExamQuestion() {
  return (
    <>
      <div className="row mb-5">
        <div className="col-md-7">
          <div className="card border-0 shadow">
            <div className="card-header">
              <div className="d-flex justify-content-between">
                <div>
                  <h5 className="mb-0">
                    Soal No. <strong className="fw-bold">2</strong>
                  </h5>
                </div>
                <div>
                  <div>
                    <span className="badge bg-info p-2">
                      {" "}
                      <i className="fa fa-clock"></i> 0 jam, 20 menit, 30 detik.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div>
                <div>
                  <p> INi Adalah pertanyaannya</p>
                </div>

                <table>
                  <tbody>
                    <tr>
                      <td width="50" style={{ padding: "10px" }}>
                        <button className="btn btn-info btn-sm w-100 shdaow">
                          A
                        </button>
                        <button className="btn btn-outline-info btn-sm w-100 shdaow">
                          A
                        </button>
                      </td>
                      <td style={{ padding: "10px" }}>
                        <p>Pilihahhannnanya</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div>
                <div className="alert alert-danger border-0 shadow">
                  <i className="fa fa-exclamation-triangle"></i> Soal Tidak
                  Ditemukan!.
                </div>
              </div>
            </div>
            <div className="card-footer">
              <div className="d-flex justify-content-between">
                <div className="text-start">
                  <button
                    type="button"
                    className="btn btn-gray-400 btn-sm btn-block mb-2"
                  >
                    Sebelumnya
                  </button>
                </div>
                <div className="text-end">
                  <button type="button" className="btn btn-gray-400 btn-sm">
                    Selanjutnya
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <div className="card border-0 shadow">
            <div className="card-header text-center">
              <div className="badge bg-success p-2"> 20 dikerjakan</div>
            </div>
            <div
              className="card-body"
              style={{ height: "330px", overflowY: "auto" }}
            >
              <div>
                <div width="20%" style={{ width: 20 + "%", float: "left" }}>
                  <div style={{ padding: "5px" }}>
                    <button className="btn btn-gray-400 btn-sm w-100">
                      Next
                    </button>

                    <button className="btn btn-outline-info btn-sm w-100">
                      Next
                    </button>

                    <button className="btn btn-info btn-sm w-100">Next</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <button className="btn btn-danger btn-md border-0 shadow w-100">
                Akhiri Ujian
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- modal akhiri ujian --> */}
      <div
        className="showModalEndExam modal fade"
        tabIndex="-1"
        aria-hidden="true"
        style={{ display: "block" }}
        role="dialog"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Akhiri Ujian ?</h5>
            </div>
            <div className="modal-body">
              Setelah mengakhiri ujian, Anda tidak dapat kembali ke ujian ini
              lagi. Yakin akan mengakhiri ujian?
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">
                Ya, Akhiri
              </button>
              <button type="button" className="btn btn-secondary">
                Tutup
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- modal waktu ujian berakhir --> */}
      <div
        className="modal fade showModalEndTimeExam"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-hidden="true"
        style={{ display: "block" }}
        role="dialog"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Waktu Habis !</h5>
            </div>
            <div className="modal-body">
              Waktu ujian sudah berakhir!. Klik{" "}
              <strong className="fw-bold">Ya</strong> untuk mengakhiri ujian.
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">
                {" "}
                Ya
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExamQuestion;
