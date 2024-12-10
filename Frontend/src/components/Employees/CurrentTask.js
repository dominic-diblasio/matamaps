import React from "react";
import Avatar1 from "../../assets/images/xs/avatar1.jpg";
import Avatar2 from "../../assets/images/xs/avatar2.jpg";
import Avatar7 from "../../assets/images/xs/avatar7.jpg";

function CurrentTask() {

    return (
        <div className="card mb-3">
            <div className="card-header py-3">
                <h6 className="mb-0 fw-bold ">Current Task</h6>
            </div>
            <div className="card-body">
                <div className="planned_task client_task">
                    <div className="dd" data-plugin="nestable">
                        <ol className="dd-list">
                            <li className="dd-item mb-3">
                                <div className="dd-handle">
                                    <div className="task-info d-flex align-items-center justify-content-between">
                                        <h6 className="light-info-bg py-1 px-2 rounded-1 d-inline-block fw-bold small-14 mb-0">UI/UX Design</h6>
                                        <div className="task-priority d-flex flex-column align-items-center justify-content-center">
                                            <div className="avatar-list avatar-list-stacked m-0">
                                                <img className="avatar rounded-circle small-avt sm" src={Avatar2} alt="" />
                                                <img className="avatar rounded-circle small-avt sm" src={Avatar1} alt="" />
                                            </div>
                                            <span className="badge bg-warning text-end mt-1">Inprogress</span>
                                        </div>
                                    </div>
                                    <p className="py-2 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id
                                        nec scelerisque massa.</p>
                                    <div className="tikit-info row g-3 align-items-center">
                                        <div className="col-sm">
                                        </div>
                                        <div className="col-sm text-end">
                                            <div className="small text-truncate light-danger-bg py-1 px-2 rounded-1 d-inline-block fw-bold small"> Social Geek Made </div>
                                        </div>
                                    </div>
                                </div>

                            </li>
                            <li className="dd-item">
                                <div className="dd-handle">
                                    <div className="task-info d-flex align-items-center justify-content-between">
                                        <h6 className="bg-lightgreen py-1 px-2 rounded-1 d-inline-block fw-bold small-14 mb-0">Website Design
                                        </h6>
                                        <div className="task-priority d-flex flex-column align-items-center justify-content-center">
                                            <div className="avatar-list avatar-list-stacked m-0">
                                                <img className="avatar rounded-circle small-avt sm" src={Avatar7} alt="" />
                                            </div>
                                            <span className="badge bg-danger text-end mt-1">Review</span>
                                        </div>
                                    </div>
                                    <p className="py-2 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id
                                        nec scelerisque massa.</p>
                                    <div className="tikit-info row g-3 align-items-center">
                                        <div className="col-sm">
                                        </div>
                                        <div className="col-sm text-end">
                                            <div className="small text-truncate light-danger-bg py-1 px-2 rounded-1 d-inline-block fw-bold small"> Practice to Perfect </div>
                                        </div>
                                    </div>
                                </div>

                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default CurrentTask;