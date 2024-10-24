import React from "react";

function OurClients (props){
    
        const {avatar,post,name,Companyname,isMember,onClickEdit,onClickDelete,details} = props;
        return(
            <div className="card teacher-card">
                <div className="card-body  d-flex">
                    <div className="profile-av pe-xl-4 pe-md-2 pe-sm-4 pe-4 text-center w220">
                        <img src={avatar} alt="" className="avatar xl rounded-circle img-thumbnail shadow-sm" />
                        <div className="about-info d-flex align-items-center mt-1 justify-content-center flex-column">
                            <h6 className="mb-0 fw-bold d-block fs-6 mt-2">{post}</h6>
                            {isMember?
                                <div className="about-info d-flex align-items-center mt-3 justify-content-center">
                                    <div className="followers me-2">
                                        <i className="icofont-tasks color-careys-pink fs-4"></i>
                                        <span className="">04</span>
                                    </div>
                                    <div className="star me-2">
                                        <i className="icofont-star text-warning fs-4"></i>
                                        <span className="">4.5</span>
                                    </div>
                                    <div className="own-video">
                                        <i className="icofont-data color-light-orange fs-4"></i>
                                        <span className="">04</span>
                                    </div>
                                </div>
                            :<div className="btn-group mt-2" role="group" aria-label="Basic outlined example">
                                <button type="button" className="btn btn-outline-secondary" onClick={onClickEdit}><i className="icofont-edit text-success"></i></button>
                                <button type="button" className="btn btn-outline-secondary" onClick={onClickDelete}><i className="icofont-ui-delete text-danger"></i></button>
                            </div>}  
                        </div>
                    </div>
                    <div className="teacher-info border-start ps-xl-4 ps-md-3 ps-sm-4 ps-4 w-100">
                        <h6 className="mb-0 mt-2  fw-bold d-block fs-6">{Companyname}</h6>
                        {
                            isMember?<span className="light-info-bg py-1 px-2 rounded-1 d-inline-block fw-bold small-11 mb-0 mt-1">{name}</span>
                            :<span className="py-1 fw-bold small-11 mb-0 mt-1 text-muted">{name}</span>}
                        <div className="video-setting-icon mt-3 pt-3 border-top">
                            <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices. {details?details:null}</p>
                        </div>
                        {
                            isMember?
                            <div className="d-flex flex-wrap align-items-center ct-btn-set">
                                <a href="tasks" className="btn btn-dark btn-sm mt-1 me-2"><i className="icofont-plus-circle me-2 fs-6  "></i>Add Task</a>
                                <a href="members-profile" className="btn btn-dark btn-sm mt-1"><i className="icofont-invisible me-2 fs-6"></i>Profile</a>
                            </div>
                            :
                            <div className="d-flex flex-wrap align-items-center ct-btn-set">
                                <a href="chat-app" className="btn btn-dark btn-sm mt-1 me-1"><i className="icofont-ui-text-chat me-2 fs-6"></i>Chat</a>
                                <a href="client-profile" className="btn btn-dark btn-sm mt-1"><i className="icofont-invisible me-2 fs-6"></i>Profile</a>
                            </div>
                        }
                        
                    </div>
                </div>
            </div>
        )
    }


export default OurClients;