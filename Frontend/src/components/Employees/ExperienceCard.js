import React from "react";

function ExperienceCard() {

    return (
        <div className="card">
            <div className="card-header py-3">
                <h6 className="mb-0 fw-bold ">Experience</h6>
            </div>
            <div className="card-body">
                <div className="timeline-item ti-danger border-bottom ms-2">
                    <div className="d-flex">
                        <span className="avatar d-flex justify-content-center align-items-center rounded-circle light-success-bg">PW</span>
                        <div className="flex-fill ms-3">
                            <div className="mb-1"><strong>Pixel Wibes</strong></div>
                            <span className="d-flex text-muted">Jan 2016 - Present (5 years 2 months)</span>
                        </div>
                    </div>
                </div>
                <div className="timeline-item ti-info border-bottom ms-2">
                    <div className="d-flex">
                        <span className="avatar d-flex justify-content-center align-items-center rounded-circle bg-careys-pink">CC</span>
                        <div className="flex-fill ms-3">
                            <div className="mb-1"><strong>Crest Coder</strong></div>
                            <span className="d-flex text-muted">Dec 2015 - 2016 (1 years)</span>
                        </div>
                    </div>
                </div>
                <div className="timeline-item ti-success  ms-2">
                    <div className="d-flex">
                        <span className="avatar d-flex justify-content-center align-items-center rounded-circle bg-lavender-purple">MW</span>
                        <div className="flex-fill ms-3">
                            <div className="mb-1"><strong>Morning Wibe</strong></div>
                            <span className="d-flex text-muted">Nov 2014 - 2015 (1 years)</span>
                        </div>
                    </div>
                </div>
                <div className="timeline-item ti-danger border-bottom ms-2">
                    <div className="d-flex">
                        <span className="avatar d-flex justify-content-center align-items-center rounded-circle light-success-bg">FF</span>
                        <div className="flex-fill ms-3">
                            <div className="mb-1"><strong>FebiFlue</strong></div>
                            <span className="d-flex text-muted">Jan 2010 - 2009 (1 years)</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ExperienceCard;