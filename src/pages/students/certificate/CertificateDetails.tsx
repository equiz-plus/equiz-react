import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const CertificateDetails = () => {
    const templateRef = useRef(null);
    const name = "Aria";

    const handleGeneratePdf = async () => {
        const input = templateRef.current;

        const inchesToPixels = (inches) => {
            return inches * 96; // Assuming 1 inch = 96 pixels
        };

        const options = {
            useCORS: true,
            allowTaint: true,
            scale: 2,
        };

        const canvas = await html2canvas(input, options);
        const imgData = canvas.toDataURL("image/png");

        const pdfWidth = inchesToPixels(11); // Convert width from inches to pixels
        const pdfHeight = inchesToPixels(8); // Convert height from inches to pixels

        const doc = new jsPDF({
            orientation: "landscape", // Set the orientation to landscape
            unit: "px",
            format: [pdfWidth, pdfHeight],
        });

        doc.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        doc.save(`certificate-${name}.pdf`);
    };

    return (
        <>
            <button className="button" onClick={handleGeneratePdf}>
                Generate PDF
            </button>
            <div ref={templateRef}>
                <div className="d-flex justify-content-center align-items-center">
                    <div className="row" style={{ width: "11in", height: "8in" }}>
                        <div className="col-md-11">
                            <div className="card border-0 shadow">
                                <div className="card-body">
                                    <div className="row h-100">
                                        <div className="d-flex justify-content-center align-items-center">
                                            <div
                                                className="card border-5"
                                                style={{ width: "100%", height: "100%" }}
                                            >
                                                <div className="card-body">
                                                    <div className="">
                                                        <h1
                                                            className="text-center"
                                                            style={{ fontSize: "36pt", marginBottom: 0 }}
                                                        >
                                                            Certificate
                                                        </h1>
                                                        <h4
                                                            className="text-center"
                                                            style={{ fontSize: "24pt", marginTop: 0 }}
                                                        >
                                                            of achievement
                                                        </h4>
                                                        <hr />
                                                        <h5
                                                            className="text-center pt-3"
                                                            style={{ fontSize: "14pt" }}
                                                        >
                                                            This certificate is proudly presented to
                                                        </h5>
                                                        <h1
                                                            className="text-center pt-5"
                                                            style={{ fontSize: "30pt" }}
                                                        >
                                                            <u>{name}</u>
                                                        </h1>
                                                        <h5
                                                            className="text-center pt-5"
                                                            style={{ fontSize: "20pt" }}
                                                        >
                                                            for scoring 95/100% on
                                                        </h5>
                                                        <h4
                                                            className="text-center"
                                                            style={{ fontSize: "24pt" }}
                                                        >
                                                            Mathematics 101
                                                        </h4>
                                                        <h6
                                                            className="text-center"
                                                            style={{ fontSize: "14pt" }}
                                                        >
                                                            on 11/09/2023
                                                        </h6>
                                                        <hr />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CertificateDetails