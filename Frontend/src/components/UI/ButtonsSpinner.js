import React, { useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function ButtonsSpinner() {
    const [basicT, setBasicT] = useState("Preview");

    return (
        <div className="border-top mt-5 pt-3">
            <h4 id="buttons">Buttons</h4>
            <p>Use spinners within buttons to indicate an action is currently processing or taking place. You may also swap the text out of the spinner element and utilize button text as needed.</p>

            <ul className="nav nav-tabs tab-card px-3 border-bottom-0" role="tablist">
                <li className="nav-item"><a className={basicT === "Preview" ? "nav-link active" : "nav-link"} href="#nav-Preview1" onClick={(e) => { e.preventDefault(); setBasicT("Preview") }} >Preview</a></li>
                <li className="nav-item"><a className={basicT === "Html" ? "nav-link active" : "nav-link"} href="#nav-HTML1" onClick={(e) => { e.preventDefault(); setBasicT("Html") }}>HTML</a></li>
            </ul>
            <div className="card mb-3">
                <div className="card-body">
                    <div className="tab-content">
                        <div className={basicT === "Preview" ? "tab-pane fade active show" : "tab-pane fade"} id="nav-Preview1" role="tabpanel">
                            <Button variant="primary" className="me-1">
                                <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                                <span className="sr-only">Loading...</span>
                            </Button>
                            <Button variant="warning" className="me-1">
                                <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                                <span className="sr-only">Loading...</span>
                            </Button>
                            <Button variant="outline-secondary" className="me-1">
                                <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                                <span className="sr-only">Loading...</span>
                            </Button>
                            <Button variant="danger" className="me-1">
                                <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" />
                                <span className="sr-only">Loading...</span>
                            </Button>
                            <Button variant="outline-secondary" className="me-1">
                                <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" />
                                <span className="sr-only">Loading...</span>
                            </Button>
                            <Button variant="warning" className="me-1">
                                <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" className="me-1" />
                                Loading...
                            </Button>
                            <Button variant="outline-secondary" className="me-1">
                                <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" className="me-1" />
                                Loading...
                            </Button>
                            <Button variant="success" className="me-1">
                                <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" className="me-1" />
                                Loading...
                            </Button>
                            <Button variant="outline-secondary" className="me-1">
                                <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" className="me-1" />
                                Loading...
                            </Button>

                        </div>
                        <div className={basicT === "Html" ? "tab-pane fade active show" : "tab-pane fade"} id="nav-HTML1" role="tabpanel">
                            <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                                {`<!-- btn: primary border -->
<Button variant="primary" className="me-1">
    <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true"/>
    <span className="sr-only">Loading...</span>
</Button>
<Button variant="warning" className="me-1">
    <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true"/>
    <span className="sr-only">Loading...</span>
</Button>
<Button variant="outline-secondary" className="me-1">
    <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true"/>
    <span className="sr-only">Loading...</span>
</Button>
<Button variant="danger" className="me-1">
    <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true"/>
    <span className="sr-only">Loading...</span>
</Button>
<Button variant="outline-secondary" className="me-1">
    <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true"/>
    <span className="sr-only">Loading...</span>
</Button>
<Button variant="warning" className="me-1">
    <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" className="me-1"/>
    Loading...
</Button>
<Button variant="outline-secondary" className="me-1">
    <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" className="me-1"/>
    Loading...
</Button>
<Button variant="success" className="me-1">
    <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" className="me-1"/>
    Loading...
</Button>
<Button variant="outline-secondary" className="me-1">
    <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" className="me-1"/>
    Loading...
</Button>`}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default ButtonsSpinner;