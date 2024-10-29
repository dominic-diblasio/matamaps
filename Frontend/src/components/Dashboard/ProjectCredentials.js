import React from "react";

function ProjectCredentials (){
    
        return(
            <div className="alert alert-primary p-3 mb-0 w-100">
                <h6 className="fw-bold mb-1">Create Project Credentials</h6>
                <p className="small mb-4">Create a Project credentials now and never miss</p>
                <div className="my-3 ">
                    <input type="text" className="form-control form-control-lg" placeholder="Enter Username" />
                </div>
                <div className="my-3">
                    <input type="password" className="form-control form-control-lg" placeholder="Enter Password" />
                </div>
                <div className="my-3">
                    <input type="password" className="form-control form-control-lg" placeholder="Confirm Password" />
                </div>
                <button className="btn btn-primary mt-2">Create Credentials</button>
            </div>
        )
    }


export default ProjectCredentials;