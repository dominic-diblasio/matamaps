import React from "react";
import { ProgressBar } from "react-bootstrap";

function FeedbackInfoCard() {

    return (
        <div className="feedback-info sticky-top">
            <div className="card">
                <div className="card-body">
                    <h2 className=" display-6 fw-bold mb-0">4.5</h2>
                    <small className="text-muted">based on 1,032 ratings</small>
                    <div className="d-flex align-items-center">
                        <span className="mb-2 me-3">
                            <a href="#!" className="rating-link active"><i className="bi bi-star-fill text-warning"></i></a>
                            <a href="#!" className="rating-link active"><i className="bi bi-star-fill text-warning"></i></a>
                            <a href="#!" className="rating-link active"><i className="bi bi-star-fill text-warning"></i></a>
                            <a href="#!" className="rating-link active"><i className="bi bi-star-fill text-warning"></i></a>
                            <a href="#!" className="rating-link active"><i className="bi bi-star-half text-warning"></i></a>
                        </span>
                    </div>
                    <div className="progress-count mt-2">
                        <div className="d-flex justify-content-between align-items-center mb-1">
                            <h6 className="mb-0 fw-bold d-flex align-items-center">5<i className="bi bi-star-fill text-warning ms-1 small-11 pb-1"></i></h6>
                            <span className="small text-muted">661</span>
                        </div>
                        <ProgressBar style={{ height: 10 }}>
                            <ProgressBar now={92} className="light-success-bg" />
                        </ProgressBar>
                    </div>
                    <div className="progress-count mt-2">
                        <div className="d-flex justify-content-between align-items-center mb-1">
                            <h6 className="mb-0 fw-bold d-flex align-items-center">4<i className="bi bi-star-fill text-warning ms-1 small-11 pb-1"></i></h6>
                            <span className="small text-muted">237</span>
                        </div>
                        <ProgressBar style={{ height: 10 }}>
                            <ProgressBar now={60} className="bg-info-light" />
                        </ProgressBar>
                    </div>
                    <div className="progress-count mt-2">
                        <div className="d-flex justify-content-between align-items-center mb-1">
                            <h6 className="mb-0 fw-bold d-flex align-items-center">3<i className="bi bi-star-fill text-warning ms-1 small-11 pb-1"></i></h6>
                            <span className="small text-muted">76</span>
                        </div>
                        <ProgressBar style={{ height: 10 }}>
                            <ProgressBar now={40} className="bg-lightyellow" />
                        </ProgressBar>

                    </div>
                    <div className="progress-count mt-2">
                        <div className="d-flex justify-content-between align-items-center mb-1">
                            <h6 className="mb-0 fw-bold d-flex align-items-center">2<i className="bi bi-star-fill text-warning ms-1 small-11 pb-1"></i></h6>
                            <span className="small text-muted">19</span>
                        </div>
                        <ProgressBar style={{ height: 10 }}>
                            <ProgressBar now={15} className="light-danger-bg" />
                        </ProgressBar>
                    </div>
                    <div className="progress-count mt-2">
                        <div className="d-flex justify-content-between align-items-center mb-1">
                            <h6 className="mb-0 fw-bold d-flex align-items-center">1<i className="bi bi-star-fill text-warning ms-1 small-11 pb-1"></i></h6>
                            <span className="small text-muted">39</span>
                        </div>
                        <ProgressBar style={{ height: 10 }}>
                            <ProgressBar now={10} className="bg-careys-pink" />
                        </ProgressBar>
                    </div>
                    <div className="customer-like mt-5">
                        <h6 className="mb-0 fw-bold ">What Customers Like</h6>
                        <ul className="list-group mt-3">
                            <li className="list-group-item d-flex">
                                <div className="number border-end pe-2 fw-bold">
                                    <strong className="color-light-success">1</strong>
                                </div>
                                <div className="cs-text flex-fill ps-2">
                                    <span>Fun Factor</span>
                                </div>
                                <div className="vote-text">
                                    <span className="text-muted">72 votes</span>
                                </div>
                            </li>
                            <li className="list-group-item d-flex">
                                <div className="number border-end pe-2 fw-bold">
                                    <strong className="color-light-success">2</strong>
                                </div>
                                <div className="cs-text flex-fill ps-2">
                                    <span>Great Value</span>
                                </div>
                                <div className="vote-text">
                                    <span className="text-muted">52 votes</span>
                                </div>
                            </li>
                            <li className="list-group-item d-flex">
                                <div className="number border-end pe-2 fw-bold">
                                    <strong className="color-light-success">3</strong>
                                </div>
                                <div className="cs-text flex-fill ps-2">
                                    <span>My Task</span>
                                </div>
                                <div className="vote-text">
                                    <span className="text-muted">35 votes</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="customer-like mt-5">
                        <h6 className="mb-0 fw-bold ">What Need Improvement</h6>
                        <ul className="list-group mt-3">
                            <li className="list-group-item d-flex">
                                <div className="number border-end pe-2 fw-bold">
                                    <strong className="color-careys-pink">1</strong>
                                </div>
                                <div className="cs-text flex-fill ps-2">
                                    <span>Value for Money</span>
                                </div>
                                <div className="vote-text">
                                    <span className="text-muted">12 votes</span>
                                </div>
                            </li>
                            <li className="list-group-item d-flex">
                                <div className="number border-end pe-2 fw-bold">
                                    <strong className="color-careys-pink">2</strong>
                                </div>
                                <div className="cs-text flex-fill ps-2">
                                    <span>Customer service</span>
                                </div>
                                <div className="vote-text">
                                    <span className="text-muted">8 votes</span>
                                </div>
                            </li>
                            <li className="list-group-item d-flex">
                                <div className="number border-end pe-2 fw-bold">
                                    <strong className="color-careys-pink">3</strong>
                                </div>
                                <div className="cs-text flex-fill ps-2">
                                    <span>Loding Item</span>
                                </div>
                                <div className="vote-text">
                                    <span className="text-muted">2 votes</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default FeedbackInfoCard;