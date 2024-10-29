import React from "react";
import Avatar2 from "../../assets/images/lg/avatar2.jpg";
import Avatar7 from "../../assets/images/lg/avatar7.jpg";
import Avatar8 from "../../assets/images/lg/avatar8.jpg";
import Avatar9 from "../../assets/images/lg/avatar9.jpg";
import Avatar12 from "../../assets/images/lg/avatar12.jpg";

function UpcommingInterviews1() {

    return (
        <div className="card">
            <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                <h6 className="mb-0 fw-bold ">Upcomming Interviews</h6>
            </div>
            <div className="card-body">
                <div className="flex-grow-1">
                    <div className="py-2 d-flex align-items-center border-bottom flex-wrap">
                        <div className="d-flex align-items-center flex-fill">
                            <img className="avatar lg rounded-circle img-thumbnail" src={Avatar2} alt="profile" />
                            <div className="d-flex flex-column ps-3">
                                <h6 className="fw-bold mb-0 small-14">Natalie Gibson</h6>
                                <span className="text-muted">Ui/UX Designer</span>
                            </div>
                        </div>
                        <div className="time-block text-truncate">
                            <i className="icofont-clock-time"></i> 1.30 - 1:30
                        </div>
                    </div>
                    <div className="py-2 d-flex align-items-center border-bottom flex-wrap">
                        <div className="d-flex align-items-center flex-fill">
                            <img className="avatar lg rounded-circle img-thumbnail" src={Avatar9} alt="profile" />
                            <div className="d-flex flex-column ps-3">
                                <h6 className="fw-bold mb-0 small-14">Peter	Piperg</h6>
                                <span className="text-muted">Web Design</span>
                            </div>
                        </div>
                        <div className="time-block text-truncate">
                            <i className="icofont-clock-time"></i> 9.00 - 1:30
                        </div>
                    </div>
                    <div className="py-2 d-flex align-items-center border-bottom flex-wrap">
                        <div className="d-flex align-items-center flex-fill">
                            <img className="avatar lg rounded-circle img-thumbnail" src={Avatar12} alt="profile" />
                            <div className="d-flex flex-column ps-3">
                                <h6 className="fw-bold mb-0 small-14">Robert Young</h6>
                                <span className="text-muted">PHP Developer</span>
                            </div>
                        </div>
                        <div className="time-block text-truncate">
                            <i className="icofont-clock-time"></i> 1.30 - 2:30
                        </div>
                    </div>
                    <div className="py-2 d-flex align-items-center border-bottom flex-wrap">
                        <div className="d-flex align-items-center flex-fill">
                            <img className="avatar lg rounded-circle img-thumbnail" src={Avatar8} alt="profile" />
                            <div className="d-flex flex-column ps-3">
                                <h6 className="fw-bold mb-0 small-14">Victoria Vbell</h6>
                                <span className="text-muted">IOS Developer</span>
                            </div>
                        </div>
                        <div className="time-block text-truncate">
                            <i className="icofont-clock-time"></i> 2.00 - 3:30
                        </div>
                    </div>
                    <div className="py-2 d-flex align-items-center border-bottom flex-wrap">
                        <div className="d-flex align-items-center flex-fill">
                            <img className="avatar lg rounded-circle img-thumbnail" src={Avatar7} alt="profile" />
                            <div className="d-flex flex-column ps-3">
                                <h6 className="fw-bold mb-0 small-14">Mary Butler</h6>
                                <span className="text-muted">Writer</span>
                            </div>
                        </div>
                        <div className="time-block text-truncate">
                            <i className="icofont-clock-time"></i> 4.00 - 4:30
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}


export default UpcommingInterviews1;