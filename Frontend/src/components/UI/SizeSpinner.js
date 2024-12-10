import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function SizeSpinner() {
    const [basicT, setBasicT] = useState("Preview");


    return (
        <div className="border-top mt-5 pt-3">
            <h2 id="size">Size</h2>
            <p>Add <code>.spinner-border-sm</code> and <code>.spinner-grow-sm</code> to make a smaller spinner that can quickly be used within other components.</p>

            <ul className="nav nav-tabs tab-card px-3 border-bottom-0" role="tablist">
                <li className="nav-item"><a className={basicT === "Preview" ? "nav-link active" : "nav-link"} href="#nav-Preview1" onClick={(e) => { e.preventDefault(); setBasicT("Preview") }} >Preview</a></li>
                <li className="nav-item"><a className={basicT === "Html" ? "nav-link active" : "nav-link"} href="#nav-HTML1" onClick={(e) => { e.preventDefault(); setBasicT("Html") }}>HTML</a></li>
            </ul>
            <div className="card mb-3">
                <div className="card-body">
                    <div className="tab-content">
                        <div className={basicT === "Preview" ? "tab-pane fade active show" : "tab-pane fade"} id="nav-Preview1" role="tabpanel">
                            <Spinner animation="border" size="sm" className="me-3" />
                            <Spinner animation="border" className="me-3" />
                            <Spinner animation="border" style={{ width: '3rem', height: '3rem' }} className="me-3" />
                            <Spinner animation="grow" size="sm" className="me-3" />
                            <Spinner animation="grow" className="me-3" />
                            <Spinner animation="grow" className="me-3" style={{ width: '3rem', height: '3rem' }} />
                        </div>
                        <div className={basicT === "Html" ? "tab-pane fade active show" : "tab-pane fade"} id="nav-HTML1" role="tabpanel">
                            <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                                {`<Spinner animation="border" size="sm" className="me-3"/>
<Spinner animation="border" className="me-3"/>
<Spinner animation="border" style={{width: '3rem', height: '3rem'}} className="me-3"/>
<Spinner animation="grow" size="sm" className="me-3"/>
<Spinner animation="grow" className="me-3"/>
<Spinner animation="grow" className="me-3" style={{width: '3rem', height: '3rem'}}/>`}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default SizeSpinner;