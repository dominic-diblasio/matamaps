import React from "react";
import {ProgressBar} from "react-bootstrap";

function CurrentClientProject (props){
    
        const {teamImage,logo,logoBg,title,sl,onClickEdit,onClickDelete,onClickAdd} = props;
        return(
            <div className="card">
                <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mt-5">
                        <div className="lesson_name">
                            <div className={"project-block "+logoBg}>
                                <i className={logo}></i>
                            </div>
                            <span className="small text-muted project_name fw-bold">{sl}</span>
                            <h6 className="mb-0 fw-bold  fs-6  mb-2">{title}</h6>
                        </div>
                        <div className="btn-group" role="group" aria-label="Basic outlined example">
                            <button type="button" className="btn btn-outline-secondary" onClick={onClickEdit}><i className="icofont-edit text-success"></i></button>
                            <button type="button" className="btn btn-outline-secondary" onClick={onClickDelete}><i className="icofont-ui-delete text-danger"></i></button>
                        </div>
                    </div>
                    <div className="d-flex align-items-center">
                        <div className="avatar-list avatar-list-stacked pt-2">
                            {
                                teamImage.map((d,i)=><img key={"ihihb"+i} className="avatar rounded-circle sm" src={d} alt=" " />)
                            }
                            <span className="avatar rounded-circle text-center pointer sm" onClick={onClickAdd}><i className="icofont-ui-add"></i></span>
                        </div>
                    </div>
                    <div className="row g-2 pt-4">
                        <div className="col-6">
                            <div className="d-flex align-items-center">
                                <i className="icofont-paper-clip"></i>
                                <span className="ms-2">5 Attach</span>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex align-items-center">
                                <i className="icofont-sand-clock"></i>
                                <span className="ms-2">4 Month</span>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex align-items-center">
                                <i className="icofont-group-students "></i>
                                <span className="ms-2">5 Members</span>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex align-items-center">
                                <i className="icofont-ui-text-chat"></i>
                                <span className="ms-2">10</span>
                            </div>
                        </div>
                    </div>
                    <div className="dividers-block"></div>
                    <div className="d-flex align-items-center justify-content-between mb-2">
                        <h4 className="small fw-bold mb-0">Progress</h4>
                        <span className="small light-danger-bg  p-1 rounded"><i className="icofont-ui-clock"></i> 35 Days Left</span>
                    </div>
                    <ProgressBar style={{height: "8px"}}>
                        <ProgressBar variant="secondary" now={15} style={{width: "25%"}}/>
                        <ProgressBar variant="secondary" now={30} style={{width: "25%", marginLeft:10}}/>
                        <ProgressBar variant="secondary" now={10} style={{width: "25%", marginLeft:10}}/>
                    </ProgressBar>
                </div>
            </div>
        )
    }


export default CurrentClientProject;