import React from "react";

function TaskCard (props) {
    
        const {label,value,iconClass} = props;
        return(
            <div className="card ">
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <div className="avatar lg  rounded-1 no-thumbnail bg-lightyellow color-defult"><i className={iconClass}></i></div>
                        <div className="flex-fill ms-4">
                            <div className="">{label}</div>
                            <h5 className="mb-0 ">{value}</h5>
                        </div>
                        <a href="#!" title="view-members" className="btn btn-link text-decoration-none  rounded-1"><i className="icofont-hand-drawn-right fs-2 "></i></a>
                    </div>
                </div>
            </div>
        )
    }


export default TaskCard;