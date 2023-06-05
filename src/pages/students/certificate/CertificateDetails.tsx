import React, { useRef } from "react";
const CertificateDetails = () => {
    const name = "Christian Zheng"
    const score = 95
    const exam = "Math 101"
    const date = "10/10/10"
    const serial = "CERT/0001/HACK/06/2023"
    const cardStyle = {
        backgroundImage: "url('/assets/images/bg-certificate.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        margin: "15px"
    };



    return (
        <>
            <div style={cardStyle}>
                <div style={{ width: "95%" }}>
                    <div style={{ display: "flex", justifyContent: "space-between" }} id="header">
                        <img src={"/public/assets/images/equizlogo.png"} alt="" style={{ margin: "45px", width: "70pt", height: "70pt" }} />
                        <div>
                            <h1
                                className="text-center"
                                style={{ fontSize: "50px", marginTop: "45px", }}
                            >
                                Certificate
                            </h1>
                            <h1 className="text-center"
                                style={{ fontSize: "20px" }}>{serial}</h1>
                        </div>
                        <img src={"/public/assets/images/sample-logo.png"} alt="" style={{ margin: "45px", width: "70pt", height: "70pt" }} />
                    </div>

                    <h5
                        className="text-center pt-3"
                        style={{ fontSize: "15pt" }}
                    >
                        This certificate is proudly presented to:
                    </h5>
                    <h1
                        className="text-center"
                        style={{ fontSize: "35pt" }}
                    >
                        <b><u>{name}</u></b>
                    </h1>
                    <h5
                        className="text-center pt-5"
                        style={{ fontSize: "20pt" }}
                    >
                        for scoring {score}/100 on
                    </h5>
                    <h4
                        className="text-center"
                        style={{ fontSize: "30pt" }}
                    >
                        {exam}
                    </h4>
                    <h6
                        className="text-center"
                        style={{ fontSize: "20pt" }}
                    >
                        on {date}
                    </h6>


                    <div style={{ display: "flex", justifyContent: "center", alignItems: 'end', marginBottom: "40px", }}>


                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                            <img src="/public/assets/images/TandaTanganLiu.png" alt="" style={{ width: "466px", height: "198px", marginLeft: "-75px" }} />

                            <u>
                                <h5 style={{ justifyContent: "center", fontSize: "25px" }}>Liu Purnomo</h5>
                            </u>
                        </div>



                        <div>
                            <u>
                                <h5 style={{ justifyContent: "center", fontSize: "25px", marginLeft: "270px" }}>pleb</h5>
                            </u>
                        </div>
                    </div>
                </div>
            </div>
            <a href="" onClick={() => window.print()}>
                <button id="no-print" className="button">
                    Save or Print PDF
                </button>
            </a>
        </>
    );
};



export default CertificateDetails