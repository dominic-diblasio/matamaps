import React from "react";

function InvoiceList(props) {

    const { data } = props;
    return (
        <div className="row justify-content-center">
            <div className="col-lg-8 col-md-12">
                {
                    data.map((d, i) => {
                        return <div key={"keke" + i} className="card mb-3">
                            <div className="card-body d-sm-flex justify-content-between">
                                <a href="#!" className="d-flex">
                                    <img className="avatar rounded" src={d.image} alt="" />
                                    <div className="flex-fill ms-3 text-truncate">
                                        <h6 className="d-flex justify-content-between mb-0"><span>{d.name}</span></h6>
                                        <span className="text-muted">{d.occupation}</span>
                                    </div>
                                </a>
                                <div className="text-end d-none d-md-block">
                                    <p className="mb-1"><i className="fa fa-map-marker ps-1 me-1"></i>{d.address}</p>
                                    <span className="text-muted"><i className="fa fa-money ps-1"></i> ${d.rate} per hour</span>
                                </div>
                            </div>
                            <div className="card-footer justify-content-between d-flex align-items-center">
                                <div className="d-none d-md-block">
                                    <strong>Applied on:</strong>
                                    <span>{" " + d.appliedData}</span>
                                </div>
                                <div className="card-hover-show">
                                    <a className="btn btn-sm btn-white border lift me-1" href="!#">Download</a>
                                    <a className="btn btn-sm btn-white border lift me-1" href="!#">Send</a>
                                    <a className="btn btn-sm btn-white border lift" href="!#">Delete</a>
                                </div>
                            </div>
                        </div>
                    })
                }
                <nav aria-label="Page navigation">
                    <ul className="pagination mt-4">
                        <li className="page-item"><a className="page-link" href="!#">Previous</a></li>
                        <li className="page-item"><a className="page-link" href="!#">1</a></li>
                        <li className="page-item"><a className="page-link" href="!#">2</a></li>
                        <li className="page-item"><a className="page-link" href="!#">3</a></li>
                        <li className="page-item"><a className="page-link" href="!#">Next</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}


export default InvoiceList;