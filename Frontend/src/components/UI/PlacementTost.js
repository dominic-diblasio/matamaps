import React, { useState } from "react";
import { Toast } from "react-bootstrap";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Avatar10 from "../../assets/images/xs/avatar10.jpg"

function PlacementTost() {
    const [basicT, setBasicT] = useState("Preview");


    return (
        <div className="border-top mt-5 pt-3">
            <h2 id="placement">Placement</h2>
            <p>Place toasts with custom CSS as you need them. The top right is often used for notifications, as is the top middle. If you’re only ever going to show one toast at a time, put the positioning styles right on the <code>.toast</code>.</p>

            <ul className="nav nav-tabs tab-card px-3 border-bottom-0" role="tablist">
                <li className="nav-item"><a className={basicT === "Preview" ? "nav-link active" : "nav-link"} href="#nav-Preview1" onClick={(e) => { e.preventDefault(); setBasicT("Preview") }} >Preview</a></li>
                <li className="nav-item"><a className={basicT === "Html" ? "nav-link active" : "nav-link"} href="#nav-HTML1" onClick={(e) => { e.preventDefault(); setBasicT("Html") }}>HTML</a></li>
            </ul>
            <div className="card mb-3">
                <div className="card-body">
                    <div className="tab-content">
                        <div className={basicT === "Preview" ? "tab-pane fade active show" : "tab-pane fade"} id="nav-Preview1" role="tabpanel">
                            <div className="p-3 bg-dark " >
                                <div aria-live="polite" aria-atomic="true" style={{ position: "relative", minHeight: '200px' }}>
                                    <Toast style={{ position: "absolute", top: 0, right: 0 }}>
                                        <Toast.Header closeButton={false}>
                                            <img src={Avatar10} className="avatar sm rounded me-2" alt="" />
                                            <strong className="me-auto">Bootstrap</strong>
                                            <small>11 mins ago</small>
                                            <button type="button" className="btn-close" data-dismiss="toast" aria-label="Close"></button>
                                        </Toast.Header>
                                        <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                                    </Toast>
                                </div>
                            </div>
                            <p className="mt-4 mb-1">For systems that generate more notifications, consider using a wrapping element so they can easily stack.</p>
                            <div className="p-3 bg-dark">
                                <div aria-live="polite" aria-atomic="true" >
                                    <div>
                                        <Toast>
                                            <Toast.Header closeButton={false}>
                                                <img src={Avatar10} className="avatar sm rounded me-2" alt="" />
                                                <strong className="me-auto">Bootstrap</strong>
                                                <small className="text-muted">just now</small>
                                                <button type="button" className="btn-close" data-dismiss="toast" aria-label="Close"></button>
                                            </Toast.Header>
                                            <Toast.Body>See? Just like this.</Toast.Body>
                                        </Toast>
                                        <Toast>
                                            <Toast.Header closeButton={false}>
                                                <img src={Avatar10} className="avatar sm rounded me-2" alt="" />
                                                <strong className="me-auto">Bootstrap</strong>
                                                <small className="text-muted">2 seconds ago</small>
                                                <button type="button" className="btn-close" data-dismiss="toast" aria-label="Close"></button>
                                            </Toast.Header>
                                            <Toast.Body>Heads up, toasts will stack automatically</Toast.Body>
                                        </Toast>
                                    </div>
                                </div>
                            </div>
                            <p className="mt-4 mb-1">You can also get fancy with flexbox utilities to align toasts horizontally and/or vertically.</p>
                            <div className="p-3 bg-dark">
                                <div aria-live="polite" aria-atomic="true" className="d-flex justify-content-center align-items-center" >
                                    <Toast >
                                        <Toast.Header closeButton={false}>
                                            <img src={Avatar10} className="avatar sm rounded me-2" alt="" />
                                            <strong className="me-auto">Bootstrap</strong>
                                            <small>11 mins ago</small>
                                            <button type="button" className="btn-close" data-dismiss="toast" aria-label="Close"></button>
                                        </Toast.Header>
                                        <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                                    </Toast>
                                </div>
                            </div>

                        </div>
                        <div className={basicT === "Html" ? "tab-pane fade active show" : "tab-pane fade"} id="nav-HTML1" role="tabpanel">
                            <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                                {`<div aria-live="polite" aria-atomic="true" style={{position:"relative",minHeight:'200px'}}>
        <Toast style={{position:"absolute",top:0,right:0}}>
            <Toast.Header closeButton={false}>
                <img src={Avatar10} className="avatar sm rounded me-2" alt=""/>
                <strong className="me-auto">Bootstrap</strong>
                <small>11 mins ago</small>
                <button type="button" className="btn-close" data-dismiss="toast" aria-label="Close"></button>
            </Toast.Header>
            <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
        </Toast>
    </div>


    <div aria-live="polite" aria-atomic="true" >
    <div>
        <Toast>
            <Toast.Header closeButton={false}>
                <img src={Avatar10} className="avatar sm rounded me-2" alt=""/>
                <strong className="me-auto">Bootstrap</strong>
                <small className="text-muted">just now</small>
                <button type="button" className="btn-close" data-dismiss="toast" aria-label="Close"></button>
            </Toast.Header>
            <Toast.Body>See? Just like this.</Toast.Body>
        </Toast>
        <Toast>
            <Toast.Header closeButton={false}>
                <img src={Avatar10} className="avatar sm rounded me-2" alt=""/>
                <strong className="me-auto">Bootstrap</strong>
                <small className="text-muted">2 seconds ago</small>
                <button type="button" className="btn-close" data-dismiss="toast" aria-label="Close"></button>
            </Toast.Header>
            <Toast.Body>Heads up, toasts will stack automatically</Toast.Body>
        </Toast>
    </div>
</div>

<!-- Flexbox container for aligning the toasts -->
<div aria-live="polite" aria-atomic="true" className="d-flex justify-content-center align-items-center" >
    <Toast >
        <Toast.Header closeButton={false}>
            <img src={Avatar10} className="avatar sm rounded me-2" alt=""/>
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
            <button type="button" className="btn-close" data-dismiss="toast" aria-label="Close"></button>
        </Toast.Header>
        <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
    </Toast>
</div>`}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}


export default PlacementTost;