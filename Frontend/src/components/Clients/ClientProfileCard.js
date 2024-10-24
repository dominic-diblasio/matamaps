import React from "react";
import profileImg from "../../assets/images/lg/avatar3.jpg";

function ClientProfileCard (props){
    
        const {designation,details} = props;
        return(
            <div className="card teacher-card  mb-3">
                <div className="card-body d-flex teacher-fulldeatil">
                    <div className="profile-teacher pe-xl-4 pe-md-2 pe-sm-4 pe-4 text-center w220">
                        <a href="#!">
                            <img src={profileImg} alt="" className="avatar xl rounded-circle img-thumbnail shadow-sm"/>
                        </a>
                        <div className="about-info d-flex align-items-center mt-3 justify-content-center flex-column">
                            <h6 className="mb-0 fw-bold d-block fs-6">{designation?designation:"CEO"}</h6>
                            <span className="text-muted small">{details?details:"CLIENT ID : PXL-0001"}</span>
                        </div>
                    </div>
                    <div className="teacher-info border-start ps-xl-4 ps-md-4 ps-sm-4 ps-4 w-100">
                        <h6 className="mb-0 mt-2  fw-bold d-block fs-6">AgilSoft Tech</h6>
                        <span className="py-1 fw-bold small-11 mb-0 mt-1 text-muted">Ryan Ogden</span>
                        <p className="mt-2 small">The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy</p>
                        <div className="row g-2 pt-2">
                            <div className="col-xl-5">
                                <div className="d-flex align-items-center">
                                    <i className="icofont-ui-touch-phone"></i>
                                    <span className="ms-2 small">202-555-0174 </span>
                                </div>
                            </div>
                            <div className="col-xl-5">
                                <div className="d-flex align-items-center">
                                    <i className="icofont-email"></i>
                                    <span className="ms-2 small">ryanogden@gmail.com</span>
                                </div>
                            </div>
                            <div className="col-xl-5">
                                <div className="d-flex align-items-center">
                                    <i className="icofont-birthday-cake"></i>
                                    <span className="ms-2 small">19/03/1980</span>
                                </div>
                            </div>
                            <div className="col-xl-5">
                                <div className="d-flex align-items-center">
                                    <i className="icofont-address-book"></i>
                                    <span className="ms-2 small">2734  West Fork Street,EASTON 02334.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


export default ClientProfileCard;