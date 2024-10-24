import React from "react";
import { Nav } from "react-bootstrap";

function PageHeader(props) {
    
        const {headerTitle,isTabShow,renderRight} = props;
        return(
            <div className="row align-items-center">
                <div className="border-0 mb-4">
                    <div className="card-header no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
                        <h3 className="fw-bold mb-0 py-3 pb-2">{headerTitle}</h3>
                            {isTabShow?
                            <div className="col-auto py-2 w-sm-100">
                                <Nav variant="pills" className="nav nav-tabs tab-body-header rounded invoice-set">
                                    <Nav.Item>
                                        <Nav.Link eventKey="Invoice List">Invoice List</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="Simple invoice">Simple invoice</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="Email invoice">Email invoice</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>:null}
                            {renderRight?renderRight():null}
                    </div>
                </div>
            </div>
        )
    }


export default PageHeader;