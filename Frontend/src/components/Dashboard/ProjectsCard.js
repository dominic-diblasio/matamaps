import React from "react";

function ProjectsCard() {

    return (
        <div className="card">
            <div className="card-body">
                <div className="d-flex align-items-center justify-content-between mt-5">
                    <div className="lesson_name">
                        <div className="project-block light-info-bg">
                            <i className="icofont-paint"></i>
                        </div>
                        <span className="small text-muted project_name fw-bold"> Social Geek Made </span>
                        <h6 className="mb-0 fw-bold  fs-6  mb-2">UI/UX Design</h6>
                    </div>
                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" className="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#editproject"><i className="icofont-edit text-success"></i></button>
                        <button type="button" className="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#deleteproject"><i className="icofont-ui-delete text-danger"></i></button>
                    </div>
                </div>
                <div className="d-flex align-items-center">
                    <div className="avatar-list avatar-list-stacked pt-2">
                        <img className="avatar rounded-circle sm" src="assets/images/xs/avatar2.jpg" alt="" />
                        <img className="avatar rounded-circle sm" src="assets/images/xs/avatar1.jpg" alt="" />
                        <img className="avatar rounded-circle sm" src="assets/images/xs/avatar3.jpg" alt="" />
                        <img className="avatar rounded-circle sm" src="assets/images/xs/avatar4.jpg" alt="" />
                        <img className="avatar rounded-circle sm" src="assets/images/xs/avatar8.jpg" alt="" />
                        <span className="avatar rounded-circle text-center pointer sm" data-bs-toggle="modal" data-bs-target="#addUser"><i className="icofont-ui-add"></i></span>
                    </div>
                </div>
                <div className="row g-2 pt-4">
                    <div className="col-6">
                        <div className="d-flex align-items-center">
                            <i className="icofont-paper-clip"></i>
                            <span className="ms-2">5 Attach</span>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="d-flex align-items-center">
                            <i className="icofont-sand-clock"></i>
                            <span className="ms-2">4 Month</span>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="d-flex align-items-center">
                            <i className="icofont-group-students "></i>
                            <span className="ms-2">5 Members</span>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="d-flex align-items-center">
                            <i className="icofont-ui-text-chat"></i>
                            <span className="ms-2">10</span>
                        </div>
                    </div>
                </div>
                <div className="dividers-block"></div>
                <div className="d-flex align-items-center justify-content-between mb-2">
                    <h4 className="small fw-bold mb-0">Progress</h4>
                    <span className="small light-danger-bg  p-1 rounded"><i className="icofont-ui-clock"></i> 35 Days Left</span>
                </div>
                <div className="progress" >
                    <div className="progress-bar bg-secondary" role="progressbar" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                    <div className="progress-bar bg-secondary ms-1" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                    <div className="progress-bar bg-secondary ms-1" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
        </div>
    )
}


export default ProjectsCard;