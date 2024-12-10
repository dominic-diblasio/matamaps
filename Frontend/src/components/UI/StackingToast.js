import React, { useState } from "react";
import { Toast } from "react-bootstrap";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Avatar3 from "../../assets/images/xs/avatar3.jpg"

function StackingToast() {
    const [basicT, setBasicT] = useState("Preview");


    return (
        <div className="border-top mt-5 pt-3">
            <h3 id="stacking">Stacking</h3>
            <p>When you have multiple toasts, we default to vertically stacking them in a readable manner.</p>

            <ul className="nav nav-tabs tab-card px-3 border-bottom-0" role="tablist">
                <li className="nav-item"><a className={basicT === "Preview" ? "nav-link active" : "nav-link"} href="#nav-Preview1" onClick={(e) => { e.preventDefault(); setBasicT("Preview") }} >Preview</a></li>
                <li className="nav-item"><a className={basicT === "Html" ? "nav-link active" : "nav-link"} href="#nav-HTML1" onClick={(e) => { e.preventDefault(); setBasicT("Html") }}>HTML</a></li>
            </ul>
            <div className="card mb-3">
                <div className="card-body">
                    <div className="tab-content">
                        <div className={basicT === "Preview" ? "tab-pane fade active show" : "tab-pane fade"} id="nav-Preview1" role="tabpanel">
                            <Toast>
                                <Toast.Header closeButton={false}>
                                    <img src={Avatar3} className="avatar sm rounded me-2" alt="" />
                                    <strong className="me-auto">Bootstrap</strong>
                                    <small className="text-muted">just now</small>
                                    <button type="button" className="btn-close" data-dismiss="toast" aria-label="Close"></button>
                                </Toast.Header>
                                <Toast.Body>See? Just like this.</Toast.Body>
                            </Toast>
                            <Toast>
                                <Toast.Header closeButton={false}>
                                    <img src={Avatar3} className="avatar sm rounded me-2" alt="" />
                                    <strong className="me-auto">Bootstrap</strong>
                                    <small className="text-muted">2 seconds ago</small>
                                    <button type="button" className="btn-close" data-dismiss="toast" aria-label="Close"></button>
                                </Toast.Header>
                                <Toast.Body>Heads up, toasts will stack automatically</Toast.Body>
                            </Toast>
                        </div>
                        <div className={basicT === "Html" ? "tab-pane fade active show" : "tab-pane fade"} id="nav-HTML1" role="tabpanel">
                            <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                                {`<Toast>
    <Toast.Header closeButton={false}>
        <img src={Avatar3} className="avatar sm rounded me-2" alt=""/>
        <strong className="me-auto">Bootstrap</strong>
        <small className="text-muted">just now</small>
        <button type="button" className="btn-close" data-dismiss="toast" aria-label="Close"></button>
    </Toast.Header>
    <Toast.Body>See? Just like this.</Toast.Body>
</Toast>
<Toast>
    <Toast.Header closeButton={false}>
        <img src={Avatar3} className="avatar sm rounded me-2" alt=""/>
        <strong className="me-auto">Bootstrap</strong>
        <small className="text-muted">2 seconds ago</small>
        <button type="button" className="btn-close" data-dismiss="toast" aria-label="Close"></button>
    </Toast.Header>
    <Toast.Body>Heads up, toasts will stack automatically</Toast.Body>
</Toast>`}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}


export default StackingToast;