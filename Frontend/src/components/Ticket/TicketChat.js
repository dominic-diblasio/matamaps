import React from "react";
import Avatar1 from "../../assets/images/xs/avatar1.jpg";
import Avatar2 from "../../assets/images/xs/avatar2.jpg";
import Avatar3 from "../../assets/images/xs/avatar3.jpg";

function TicketChat() {

    return (
        <div className="card">
            <div className="card-body card-body-height py-4">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <h6 className="mb-0 fw-bold mb-3">Ticket Chat</h6>
                        <div className="card mb-2">
                            <div className="card-body">
                                <div className="post">
                                    <textarea className="form-control" placeholder="Post" rows="4"></textarea>
                                    <div className="py-3">
                                        <a href="#!" className="px-3 " title="upload images"><i className="icofont-ui-camera"></i></a>
                                        <a href="#!" className="px-3 " title="upload video"><i className="icofont-video-cam"></i></a>
                                        <a href="#!" className="px-3 " title="Send for signuture"><i className="icofont-pen-alt-2"></i></a>
                                        <button className="btn btn-primary float-sm-end  mt-2 mt-sm-0">Sent</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ul className="list-unstyled res-set">
                            <li className="card mb-2">
                                <div className="card-body">
                                    <div className="d-flex mb-3 pb-3 border-bottom">
                                        <img className="avatar rounded-circle" src={Avatar1} alt="" />
                                        <div className="flex-fill ms-3 text-truncate">
                                            <h6 className="mb-0"><span>Nellie Maxwell</span> <span className="text-muted small">posted a status</span></h6>
                                            <span className="text-muted">3 hours ago</span>
                                        </div>
                                    </div>
                                    <div className="timeline-item-post">
                                        <h6>Internet Not Working for Last 2 Days</h6>
                                        <p>On the other hand, if the Internet doesn't work on other devices too, then the problem is most likely with the router or the Internet connection itself</p>
                                        <div className="mb-2 mt-4">
                                            <a className="me-lg-4 me-2 text-primary" href="#!"><i className="icofont-speech-comments"></i> Comment (2)</a>
                                        </div>
                                        <div>
                                            <div className="d-flex mt-3 pt-3 border-top">
                                                <img className="avatar rounded-circle" src={Avatar2} alt="" />
                                                <div className="flex-fill ms-3 text-truncate">
                                                    <p className="mb-0"><span>Zoe Wright</span> <small className="msg-time">1 hour ago</small></p>
                                                    <span className="text-muted">One good way to fix the router is to restart it.</span>
                                                </div>
                                            </div>
                                            <div className="d-flex mt-3 pt-3 border-top">
                                                <img className="avatar rounded-circle" src={Avatar3} alt="" />
                                                <div className="flex-fill ms-3 text-truncate">
                                                    <p className="mb-0"><span>Diane Fisher</span> <small className="msg-time">1 hour ago</small></p>
                                                    <span className="text-muted">Turn on the modem and one minute later turn on the router. Wait for a few minutes and check”</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <textarea className="form-control" placeholder="Replay"></textarea>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default TicketChat;