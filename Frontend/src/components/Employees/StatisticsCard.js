import React from "react";
import { ProgressBar } from "react-bootstrap";

function StatisticsCard() {

    return (
        <div className="card">
            <div className="card-header py-3">
                <h6 className="mb-0 fw-bold ">Statistics</h6>
            </div>
            <div className="card-body">
                <div className="progress-count mb-5">
                    <div className="d-flex justify-content-between align-items-center mb-1">
                        <h6 className="mb-0 fw-bold d-flex align-items-center">Today</h6>
                        <span className="small text-muted">02/08</span>
                    </div>
                    <ProgressBar style={{ height: 10 }}>
                        <ProgressBar now={92} className="light-info-bg" />
                    </ProgressBar>
                </div>
                <div className="progress-count mb-5">
                    <div className="d-flex justify-content-between align-items-center mb-1">
                        <h6 className="mb-0 fw-bold d-flex align-items-center">This Week</h6>
                        <span className="small text-muted">01/40</span>
                    </div>
                    <ProgressBar style={{ height: 10 }}>
                        <ProgressBar now={60} className="bg-lightgreen" />
                    </ProgressBar>
                </div>
                <div className="progress-count mb-5">
                    <div className="d-flex justify-content-between align-items-center mb-1">
                        <h6 className="mb-0 fw-bold d-flex align-items-center">This Month</h6>
                        <span className="small text-muted">02/160</span>
                    </div>
                    <ProgressBar style={{ height: 10 }}>
                        <ProgressBar now={40} className="light-success-bg" />
                    </ProgressBar>
                </div>
                <div className="progress-count mb-5">
                    <div className="d-flex justify-content-between align-items-center mb-1">
                        <h6 className="mb-0 fw-bold d-flex align-items-center">Overtime</h6>
                        <span className="small text-muted">15:30 Hr</span>
                    </div>
                    <ProgressBar style={{ height: 10 }}>
                        <ProgressBar now={40} className="light-orange-bg" />
                    </ProgressBar>
                </div>
                <div className="progress-count mb-5">
                    <div className="d-flex justify-content-between align-items-center mb-1">
                        <h6 className="mb-0 fw-bold d-flex align-items-center">Remaining</h6>
                        <span className="small text-muted">01/08</span>
                    </div>
                    <ProgressBar style={{ height: 10 }}>
                        <ProgressBar now={30} className="bg-lightyellow" />
                    </ProgressBar>
                </div>
            </div>
        </div>
    )
}


export default StatisticsCard;