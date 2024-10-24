import React from "react";

function InterviewCard(props) {

    const { value, label, iconClass, chartClass } = props;
    return (
        <div className="card mb-3">
            <div className="card-body">
                <div className="d-flex align-items-center flex-fill">
                    <span className="avatar lg light-success-bg rounded-circle text-center d-flex align-items-center justify-content-center">
                        <i className={iconClass ? iconClass : "icofont-users-alt-2 fs-5"}></i>
                    </span>
                    <div className="d-flex flex-column ps-3  flex-fill">
                        <h6 className="fw-bold mb-0 fs-4">{value ? value : ""}</h6>
                        <span className="text-muted">{label}</span>
                    </div>
                    <i className={chartClass}></i>
                </div>
            </div>
        </div>
    )
}


export default InterviewCard;