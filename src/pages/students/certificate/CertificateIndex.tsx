import { Link } from "react-router-dom"
import React from "react"
const CertificateIndex = () => {
    return (
        <>
            <div className="container-fluid mb-5 mt-5">
                <div className="row mt-1">
                    <div className="col-md-12">
                        <div className="card border-0 shadow">
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-bordered table-centered table-nowrap mb-0 rounded">
                                        <thead className="thead-dark">
                                            <tr className="border-0">
                                                <th
                                                    className="border-0 rounded-start"
                                                    style={{ width: 5 + "%" }}
                                                >
                                                    No.
                                                </th>
                                                <th className="border-0">Certificate Number</th>
                                                <th className="border-0">Student Name</th>
                                                <th className="border-0">Release Date</th>
                                                <th className="border-0">Company</th>
                                                <th
                                                    className="border-0 rounded-end"
                                                    style={{ width: 15 + "%" }}
                                                >
                                                    Aksi
                                                </th>
                                            </tr>
                                        </thead>
                                        <div className="mt-2"></div>
                                        <tbody>

                                            <tr>
                                                <td className="fw-bold text-center">1</td>
                                                <td>081310637703</td>
                                                <td>yyyyyy</td>
                                                <td>11/09/01</td>
                                                <td>CIA</td>
                                                <td className="text-center">
                                                    <Link to={"/certificates/details"}

                                                        className="btn btn-sm btn-info border-0 shadow me-2"
                                                        type="button"
                                                    >
                                                        Details
                                                    </Link>
                                                </td>

                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default CertificateIndex