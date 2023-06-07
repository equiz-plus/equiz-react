import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { actionReadCertificateId } from "../../../actions/actionCreators";

const CertificateDetails = () => {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const { certificateById } = useSelector((state) => state.readCertificatesId);

  useEffect(() => {
    dispatch(actionReadCertificateId(slug));
    setTimeout(() => {
      window.print();
    }, 1500);
  }, []);

  const cardStyle = {
    backgroundImage: "url('/assets/images/bg-certificate.png')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    margin: "15px",
  };

  console.log(certificateById);

  return (
    <>
      <div style={cardStyle}>
        <div style={{ width: "95%" }}>
          <div
            style={{ display: "flex", justifyContent: "space-between" }}
            id="header"
          >
            <img
              src={"/assets/images/equizlogo.png"}
              alt=""
              style={{ margin: "45px", width: "70pt", height: "70pt" }}
            />
            <div>
              <h1
                className="text-center"
                style={{ fontSize: "50px", marginTop: "45px" }}
              >
                Certificate
              </h1>
              <h1 className="text-center" style={{ fontSize: "20px" }}>
                {certificateById?.certificateNo}
              </h1>
            </div>
            <img
              src={certificateById?.Exam?.Organization?.logo}
              alt=""
              style={{ margin: "45px", height: "70pt" }}
            />
          </div>

          <h5 className="text-center pt-3" style={{ fontSize: "15pt" }}>
            This certificate is proudly presented to:
          </h5>
          <h1 className="text-center" style={{ fontSize: "35pt" }}>
            <b>
              <u>{certificateById?.User?.name}</u>
            </b>
          </h1>
          <h5 className="text-center pt-5" style={{ fontSize: "20pt" }}>
            for scoring {certificateById?.Grade?.grade}/100 on
          </h5>
          <h4 className="text-center" style={{ fontSize: "30pt" }}>
            {certificateById?.Exam?.title}
          </h4>
          <h6 className="text-center" style={{ fontSize: "20pt" }}>
            on {new Date(certificateById?.publishedDate).toLocaleDateString()}
          </h6>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "end",
              marginBottom: "40px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <img
                src="/assets/images/TandaTanganLiu.png"
                alt=""
                style={{ width: "466px", height: "198px", marginLeft: "-75px" }}
              />

              <u>
                <h5 style={{ justifyContent: "center", fontSize: "25px" }}>
                  Liu Purnomo
                </h5>
              </u>
            </div>

            <div>
              <img
                src={certificateById?.Exam?.Organization?.sign}
                alt=""
                style={{
                  height: "198px",
                  marginRight: "-75px",
                }}
              />
              <u>
                <h5
                  style={{
                    justifyContent: "center",
                    fontSize: "25px",
                    marginLeft: "150px",
                  }}
                >
                  {certificateById?.Exam?.Organization?.pic}
                </h5>
              </u>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CertificateDetails;
