import React from "react";

const Footer = () => {
    return (
        <>
            <div
                className="card p-5"
                style={{ border: "none", backgroundColor: "rgb(52,58,64)" }}
            >
                <div className="row p-5">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                        <div className="card" style={{ border: "none" }}>
                            <div
                                className="card-body"
                                style={{
                                    backgroundColor: "rgb(52,58,64)",
                                    color: "white",
                                    border: "none",
                                }}
                            >
                                <h5 className="card-title">incline.</h5>
                                <p className="card-text">
                                    © Copyright 2024 Simpleqode. All rights reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card" style={{ border: "none",backgroundColor: "rgb(52,58,64)",
                                    color: "white", }}>
                            <div
                                className="card-body"
                                style={{
                                    display: "flex",
                                    gap: "3vw",
                                    backgroundColor: "rgb(52,58,64)",
                                    color: "white",
                                }}
                            >
                                <a class="nav-link active" aria-current="page" href="#">
                                    Terms and conditions
                                </a>
                                <a class="nav-link" href="#">
                                    {" "}
                                    Privacy policy
                                </a>
                                <a class="nav-link" href="#">
                                    {" "}
                                    Contact us
                                </a>
                            </div>
                            <ul
                                className="nav-item "
                                style={{
                                    display: "flex",
                                    backgroundColor: "rgb(52,58,64)",
                                    color: "red",
                                }}
                            >
                                <div>
                                    <i class="bi bi-instagram fs-4" style={{ marginLeft: "1vw" }} ></i>
                                </div>
                                <div>
                                    <i
                                        class="bi bi-github fs-4"
                                        style={{ marginLeft: "1vw" }}
                                    ></i>
                                </div>
                                <div>
                                    <i
                                        class="bi bi-twitter fs-4"
                                        style={{ marginLeft: "1vw" }}
                                    ></i>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
