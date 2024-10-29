import React from "react";

function RecentActivityCard() {

    return (
        <div className="card">
            <div className="card-header py-3">
                <h6 className="mb-0 fw-bold ">Recent Activity</h6>
            </div>
            <div className="card-body">
                <div className="timeline-item ti-danger border-bottom ms-2">
                    <div className="d-flex">
                        <span className="avatar d-flex justify-content-center align-items-center rounded-circle light-success-bg">PH</span>
                        <div className="flex-fill ms-3">
                            <div className="mb-1"><strong>Punch In at</strong></div>
                            <span className="d-flex text-muted align-items-center"><i className="icofont-ui-clock me-1"></i> 10 Am</span>
                        </div>
                    </div>
                </div>
                <div className="timeline-item ti-info border-bottom ms-2">
                    <div className="d-flex">
                        <span className="avatar d-flex justify-content-center align-items-center rounded-circle bg-careys-pink">PO</span>
                        <div className="flex-fill ms-3">
                            <div className="mb-1"><strong>Punch Out at</strong></div>
                            <span className="d-flex text-muted align-items-center"><i className="icofont-ui-clock me-1"></i> 11:30 Am</span>
                        </div>
                    </div>
                </div>
                <div className="timeline-item ti-info border-bottom ms-2">
                    <div className="d-flex">
                        <span className="avatar d-flex justify-content-center align-items-center rounded-circle bg-warning">BR</span>
                        <div className="flex-fill ms-3">
                            <div className="mb-1"><strong>Break Time</strong></div>
                            <span className="d-flex text-muted align-items-center"><i className="icofont-ui-clock me-1"></i> 1 Pm to 2 Pm</span>
                        </div>
                    </div>
                </div>
                <div className="timeline-item ti-success  border-bottom ms-2">
                    <div className="d-flex">
                        <span className="avatar d-flex justify-content-center align-items-center rounded-circle light-success-bg">PO</span>
                        <div className="flex-fill ms-3">
                            <div className="mb-1"><strong>Punch IN at</strong></div>
                            <span className="d-flex text-muted align-items-center"><i className="icofont-ui-clock me-1"></i> 2:10 Pm</span>
                        </div>
                    </div>
                </div>
                <div className="timeline-item ti-info ms-2">
                    <div className="d-flex">
                        <span className="avatar d-flex justify-content-center align-items-center rounded-circle bg-careys-pink">PO</span>
                        <div className="flex-fill ms-3">
                            <div className="mb-1"><strong>Punch Out at</strong></div>
                            <span className="d-flex text-muted align-items-center"><i className="icofont-ui-clock me-1"></i> 7:30 Pm</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default RecentActivityCard;