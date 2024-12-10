import React from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Spinner } from "react-bootstrap";
import { useState } from "react";

function BorderSpinner() {
    const [basicT, setBasicT] = useState("Preview");


    return (
        <div className="border-top mt-5 pt-3">
            <h4 id="border-spinner">Border spinner</h4>
            <p>Use the border spinners for a lightweight loading indicator.</p>
            <p>The border spinner uses <code>currentColor</code> for its <code>border-color</code>, meaning you can customize the color with <a href="https://v5.getbootstrap.com/docs/5.0/utilities/colors/">text color utilities</a>. You can use any of our text color utilities on the standard spinner.</p>
            <ul className="nav nav-tabs tab-card px-3 border-bottom-0" role="tablist">
                <li className="nav-item"><a className={basicT === "Preview" ? "nav-link active" : "nav-link"} href="#nav-Preview1" onClick={(e) => { e.preventDefault(); setBasicT("Preview") }} >Preview</a></li>
                <li className="nav-item"><a className={basicT === "Html" ? "nav-link active" : "nav-link"} href="#nav-HTML1" onClick={(e) => { e.preventDefault(); setBasicT("Html") }}>HTML</a></li>
            </ul>
            <div className="card mb-3">
                <div className="card-body">
                    <div className="tab-content">
                        <div className={basicT === "Preview" ? "tab-pane fade active show" : "tab-pane fade"} id="nav-Preview1" role="tabpanel">
                            <Spinner animation="border" variant="primary" />
                            <Spinner animation="border" variant="secondary" />
                            <Spinner animation="border" variant="success" />
                            <Spinner animation="border" variant="danger" />
                            <Spinner animation="border" variant="warning" />
                            <Spinner animation="border" variant="info" />
                            <Spinner animation="border" variant="light" />
                            <Spinner animation="border" variant="dark" />
                        </div>
                        <div className={basicT === "Html" ? "tab-pane fade active show" : "tab-pane fade"} id="nav-HTML1" role="tabpanel">
                            <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                                {`<Spinner animation="border" variant="primary" />
<Spinner animation="border" variant="secondary" />
<Spinner animation="border" variant="success" />
<Spinner animation="border" variant="danger" />
<Spinner animation="border" variant="warning" />
<Spinner animation="border" variant="info" />
<Spinner animation="border" variant="light" />
<Spinner animation="border" variant="dark" />`}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card card-callout p-3">
                <span><strong>Why not use <code>border-color</code> utilities?</strong> Each border spinner specifies a <code>transparent</code> border for at least one side, so <code>.border-{`{color}`}</code> utilities would override that.</span>
            </div>
        </div>
    );
}


export default BorderSpinner;