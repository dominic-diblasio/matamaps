import React from "react";
import PageHeader from "../../components/common/PageHeader";
import ChageIMG from "../../assets/images/change-log.svg";

function Changelog() {

    return (
        <div className="container-xxl">
            <PageHeader headerTitle="Changelog" renderRight={() => {
                return <div className="col-auto">
                    <a href="#!" title="" className="btn btn-white border lift me-1">Get Support</a>
                    <a href="#!" title="" className="btn btn-primary border lift">Our Portfolio</a>
                </div>
            }} />
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body text-center p-5">
                            <img src={ChageIMG} className="img-fluid mx-size" alt="No Data" />
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-12 mt-5">
                    <div className="card">
                        <div className="card-body">
                            <div className="pt-2">
                                <h6 className="d-inline-block"><span className="badge bg-warning font-weight-light">v1.2.0</span></h6>
                                <span className="text-muted">&nbsp;&nbsp;&nbsp;–- 17 January 2023</span>
                                <ul className="ms-5">
                                    <li>Packege Updated</li>
                                    <li>Calander Issue Fixed</li>
                                    <li>Optimised App with minimum Loading time</li>
                                    <li>ReactDOM.render Dependency Issue Fixed</li>
                                </ul>
                            </div>
                            <div className="pt-2">
                                <h6 className="d-inline-block"><span className="badge bg-warning font-weight-light">v1.1.0</span></h6>
                                <span className="text-muted">&nbsp;&nbsp;&nbsp;–- 22 June 2023</span>
                                <ul className="ms-5">
                                    <li>To convert a class-based component into a function-based component</li>
                                    <li>React version update 17.0.2 to 18.0.2</li>
                                    <li>Update Apex chart</li>
                                    <li>Update Bootstrap</li>
                                </ul>
                            </div>
                            <div className="pt-2">
                                <h6 className="d-inline-block"><span className="badge bg-warning font-weight-light">v1.0.0</span></h6>
                                <span className="text-muted">&nbsp;&nbsp;&nbsp;–- 24 Jan 2022</span>
                                <ul className="ms-5">
                                    <li>Initial release of my-Task! Lots more coming soon though 😁</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default Changelog;