import React from "react";
import TaskViewImg from "../../assets/images/task-view.svg";

function DylanHunter (){
    
        return(
            <div className="card">
                <div className="card-body">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-5 col-lg-6 order-md-2 ">
                            <div className="text-center p-4">
                                <img src={TaskViewImg} alt="..." className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-12 col-md-7 col-lg-6 order-md-1 px-4">
                            <h3 className="fw-bold ">Dylan Hunter</h3>
                            <p className="line-height-custom">Welcome back Dylan Hunter.Integer molestie, arcu non porta sollicitudin, arcu felis aliquam urna, placerat maximus lorem urna commodo sem. Pellentesque venenatis leo quam, sed mattis sapien lobortis ut.placerat maximus lorem urna commodo sem</p>
                            <a className="btn bg-secondary text-light btn-lg lift" href="http://pixelwibes.com/" rel="noreferrer" target="_blank">Free Inquire</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


export default DylanHunter;