import React from "react";
import Avatar10 from "../../assets/images/xs/avatar10.jpg";
import Avatar11 from "../../assets/images/xs/avatar11.jpg";
import Avatar3 from "../../assets/images/xs/avatar3.jpg";
import Avatar4 from "../../assets/images/xs/avatar4.jpg";
import Avatar9 from "../../assets/images/xs/avatar9.jpg";
import Avatar6 from "../../assets/images/xs/avatar6.jpg";


function AllocatedTask() {

    return (
        <div className="card">
            <div className="card-header py-3">
                <h6 className="mb-0 fw-bold ">Allocated Task Members</h6>
            </div>
            <div className="card-body">
                <div className="flex-grow-1 mem-list">
                    <div className="py-2 d-flex align-items-center border-bottom">

                        <div className="d-flex ms-2 align-items-center flex-fill">
                            <img src={Avatar6} className="avatar lg rounded-circle img-thumbnail" alt="avatar" />
                            <div className="d-flex flex-column ps-2">
                                <h6 className="fw-bold mb-0">Lucinda Massey</h6>
                                <span className="small text-muted">Ui/UX Designer</span>
                            </div>
                        </div>
                        <button type="button" className="btn light-danger-bg text-end" data-bs-toggle="modal" data-bs-target="#dremovetask">Remove</button>
                    </div>
                    <div className="py-2 d-flex align-items-center border-bottom">

                        <div className="d-flex ms-2 align-items-center flex-fill">
                            <img src={Avatar4} className="avatar lg rounded-circle img-thumbnail" alt="avatar" />
                            <div className="d-flex flex-column ps-2">
                                <h6 className="fw-bold mb-0">Ryan Nolan</h6>
                                <span className="small text-muted">Website Designer</span>
                            </div>
                        </div>
                        <button type="button" className="btn light-danger-bg text-end" data-bs-toggle="modal" data-bs-target="#dremovetask">Remove</button>
                    </div>
                    <div className="py-2 d-flex align-items-center border-bottom">

                        <div className="d-flex ms-2 align-items-center flex-fill">
                            <img src={Avatar9} className="avatar lg rounded-circle img-thumbnail" alt="avatar" />
                            <div className="d-flex flex-column ps-2">
                                <h6 className="fw-bold mb-0">Oliver	Black</h6>
                                <span className="small text-muted">App Developer</span>
                            </div>
                        </div>
                        <button type="button" className="btn light-danger-bg text-end" data-bs-toggle="modal" data-bs-target="#dremovetask">Remove</button>
                    </div>
                    <div className="py-2 d-flex align-items-center border-bottom">

                        <div className="d-flex ms-2 align-items-center flex-fill">
                            <img src={Avatar10} className="avatar lg rounded-circle img-thumbnail" alt="avatar" />
                            <div className="d-flex flex-column ps-2">
                                <h6 className="fw-bold mb-0">Adam Walker</h6>
                                <span className="small text-muted">Quality Checker</span>
                            </div>
                        </div>
                        <button type="button" className="btn light-danger-bg text-end">Remove</button>
                    </div>
                    <div className="py-2 d-flex align-items-center border-bottom">

                        <div className="d-flex ms-2 align-items-center flex-fill">
                            <img src={Avatar4} className="avatar lg rounded-circle img-thumbnail" alt="avatar" />
                            <div className="d-flex flex-column ps-2">
                                <h6 className="fw-bold mb-0">Brian Skinner</h6>
                                <span className="small text-muted">Quality Checker</span>
                            </div>
                        </div>
                        <button type="button" className="btn light-danger-bg text-end" data-bs-toggle="modal" data-bs-target="#dremovetask">Remove</button>
                    </div>
                    <div className="py-2 d-flex align-items-center border-bottom">

                        <div className="d-flex ms-2 align-items-center flex-fill">
                            <img src={Avatar11} className="avatar lg rounded-circle img-thumbnail" alt="avatar" />
                            <div className="d-flex flex-column ps-2">
                                <h6 className="fw-bold mb-0">Dan Short</h6>
                                <span className="small text-muted">App Developer</span>
                            </div>
                        </div>
                        <button type="button" className="btn light-danger-bg text-end" data-bs-toggle="modal" data-bs-target="#dremovetask">Remove</button>
                    </div>
                    <div className="py-2 d-flex align-items-center border-bottom">

                        <div className="d-flex ms-2 align-items-center flex-fill">
                            <img src={Avatar3} className="avatar lg rounded-circle img-thumbnail" alt="avatar" />
                            <div className="d-flex flex-column ps-2">
                                <h6 className="fw-bold mb-0">Jack Glover</h6>
                                <span className="small text-muted">Ui/UX Designer</span>
                            </div>
                        </div>
                        <button type="button" className="btn light-danger-bg text-end" data-bs-toggle="modal" data-bs-target="#dremovetask">Remove</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default AllocatedTask;