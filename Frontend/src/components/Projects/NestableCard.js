import React from "react";

function NestableCard (props) {
    
        const{title,images,titleBGClass,status,date,message,attachment,ticketInfo}=props.data
        return(
            <div className="dd-handle mt-2">
                <div className="task-info d-flex align-items-center justify-content-between">
                    <h6 className={`${titleBGClass} py-1 px-2 rounded-1 d-inline-block fw-bold small-14 mb-0`}>{title}
                    </h6>
                    <div className="task-priority d-flex flex-column align-items-center justify-content-center">
                        <div className="avatar-list avatar-list-stacked m-0">
                            {
                                images?
                                images.map((d,i)=><img key={"jfgsoihgh"+i} className="avatar rounded-circle small-avt" src={d} alt="" />)
                                :null
                            }
                            
                        </div>
                        <span className={`badge ${status==="MEDIUM"?'bg-warning':status === "High"?'bg-danger':'bg-success'} text-end mt-2`}>{status}</span>
                    </div>
                </div>
                <p className="py-2 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id nec scelerisque massa.</p>
                <div className="tikit-info row g-3 align-items-center">
                    <div className="col-sm">
                        <ul className="d-flex list-unstyled align-items-center flex-wrap">
                            <li className="me-2">
                                <div className="d-flex align-items-center">
                                    <i className="icofont-flag"></i>
                                    <span className="ms-1">{date}</span>
                                </div>
                            </li>
                            <li className="me-2">
                                <div className="d-flex align-items-center">
                                    
                                        <i className="icofont-ui-text-chat"></i>
                                        <span className="ms-1">{message}</span>
                                    
                                </div>
                            </li>
                            <li>
                                <div className="d-flex align-items-center">
                                    <i className="icofont-paper-clip"></i>
                                    <span className="ms-1">{attachment}</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm text-end">
                        
                        <div className="small text-truncate light-danger-bg py-1 px-2 rounded-1 d-inline-block fw-bold small">{ticketInfo}</div>
                    </div>
                </div>
            </div>
        )
    }


export default NestableCard;