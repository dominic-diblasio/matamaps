import React, { useState } from "react";
import { Toast } from "react-bootstrap";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Avatar1 from "../../assets/images/xs/avatar1.jpg"

function BasicToast() {
    const [basicT, setBasicT] = useState("Preview");


    return (
        <div className="border-top mt-5 pt-3">
            <h2 id="examples">Examples</h2>
            <h4 id="basic">Basic</h4>
            <p className="mb-1">To encourage extensible and predictable toasts, we recommend a header and body. Toast headers use <code>display: flex</code>, allowing easy alignment of content thanks to our margin and flexbox utilities.</p>
            <p>Toasts are as flexible as you need and have very little required markup. At a minimum, we require a single element to contain your “toasted” content and strongly encourage a dismiss button.</p>

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
                                    <img src={Avatar1} className="avatar sm rounded me-2" alt="" />
                                    <strong className="me-auto">Bootstrap</strong>
                                    <small>11 mins ago</small>
                                    <button type="button" className="btn-close" data-dismiss="toast" aria-label="Close"></button>
                                </Toast.Header>
                                <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                            </Toast>
                        </div>
                        <div className={basicT === "Html" ? "tab-pane fade active show" : "tab-pane fade"} id="nav-HTML1" role="tabpanel">
                            <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                                {`<Toast>
    <Toast.Header closeButton={false}>
        <img src={Avatar1} className="avatar sm rounded me-2" alt=""/>
        <strong className="me-auto">Bootstrap</strong>
        <small>11 mins ago</small>
        <button type="button" className="btn-close" data-dismiss="toast" aria-label="Close"></button>
    </Toast.Header>
    <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
</Toast>`}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}


export default BasicToast;