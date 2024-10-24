import React, { useState } from "react";
import { Toast } from "react-bootstrap";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Avatar2 from "../../assets/images/xs/avatar2.jpg"

function TranslucentToast () {
    const [basicT,setBasicT] = useState("Preview"); 

    return (
        <div className="border-top mt-5 pt-3">
            <h4 id="translucent">Translucent</h4>
            <p>Toasts are slightly translucent, too, so they blend over whatever they might appear over. For browsers that support the <code>backdrop-filter</code> CSS property, we’ll also attempt to blur the elements under a toast.</p>

            <ul className="nav nav-tabs tab-card px-3 border-bottom-0" role="tablist">
                <li className="nav-item"><a className={basicT === "Preview" ? "nav-link active" : "nav-link"} href="#nav-Preview1" onClick={(e) => { e.preventDefault(); setBasicT("Preview") }} >Preview</a></li>
                <li className="nav-item"><a className={basicT === "Html" ? "nav-link active" : "nav-link"} href="#nav-HTML1" onClick={(e) => { e.preventDefault(); setBasicT("Html") }}>HTML</a></li>
            </ul>
            <div className="card mb-3 bg-dark">
                <div className="card-body">
                    <div className="tab-content">
                        <div className={basicT === "Preview" ? "tab-pane fade active show" : "tab-pane fade"} id="nav-Preview1" role="tabpanel">
                            <Toast>
                                <Toast.Header closeButton={false}>
                                    <img src={Avatar2} className="avatar sm rounded me-2" alt="" />
                                    <strong className="me-auto">Bootstrap</strong>
                                    <small className="text-muted">11 mins ago</small>
                                    <button type="button" className="btn-close" data-dismiss="toast" aria-label="Close"></button>
                                </Toast.Header>
                                <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                            </Toast>
                        </div>
                        <div className={basicT === "Html" ? "tab-pane fade active show" : "tab-pane fade"} id="nav-HTML1" role="tabpanel">
                            <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                                {`<div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
        <img src="assets/images/xs/avatar2.jpg" class="avatar sm rounded me-2" alt="" />
        <strong class="me-auto">Bootstrap</strong>
        <small class="text-muted">11 mins ago</small>
        <button type="button" class="btn-close" data-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">
        Hello, world! This is a toast message.
    </div>
</div>`}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}


export default TranslucentToast;