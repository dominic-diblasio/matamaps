import React, { useState } from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function PaginationWithAlignment() {
    const [basicT, setBasicT] = useState("Preview");

    return (
        <div className="border-top mt-5 pt-3">
            <h5 id="disabled-and-active-states">Alignment</h5>
            <p>Change the alignment of pagination components with <a href="https://v5.getbootstrap.com/docs/5.0/utilities/flex/">flexbox utilities</a>.</p>
            <ul className="nav nav-tabs tab-card px-3 border-bottom-0" role="tablist">
                <li className="nav-item"><a className={basicT === "Preview" ? "nav-link active" : "nav-link"} href="#!" onClick={(e) => { e.preventDefault(); setBasicT("Preview") }}>Preview</a></li>
                <li className="nav-item"><a className={basicT === "Html" ? "nav-link active" : "nav-link"} href="#!" onClick={(e) => { e.preventDefault(); setBasicT("Html") }}>HTML</a></li>
            </ul>
            <div className="card mb-3">
                <div className="card-body">
                    <div className="tab-content">
                        <div className={basicT === "Preview" ? "tab-pane fade active show" : "tab-pane fade"} id="nav-Preview3" role="tabpanel">
                            <nav aria-label="Page navigation">
                                <ul className="pagination justify-content-start">
                                    <li className="page-item disabled">
                                        <a className="page-link" href="#!" aria-disabled="true">Previous</a>
                                    </li>
                                    <li className="page-item"><a className="page-link" href="#!">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#!">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#!">3</a></li>
                                    <li className="page-item">
                                        <a className="page-link" href="#!">Next</a>
                                    </li>
                                </ul>
                            </nav>
                            <nav aria-label="Page navigation">
                                <ul className="pagination justify-content-center">
                                    <li className="page-item disabled">
                                        <a className="page-link" href="#!" aria-disabled="true">Previous</a>
                                    </li>
                                    <li className="page-item"><a className="page-link" href="#!">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#!">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#!">3</a></li>
                                    <li className="page-item">
                                        <a className="page-link" href="#!">Next</a>
                                    </li>
                                </ul>
                            </nav>
                            <nav aria-label="Page navigation">
                                <ul className="pagination justify-content-end">
                                    <li className="page-item disabled">
                                        <a className="page-link" href="#!" aria-disabled="true">Previous</a>
                                    </li>
                                    <li className="page-item"><a className="page-link" href="#!">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#!">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#!">3</a></li>
                                    <li className="page-item">
                                        <a className="page-link" href="#!">Next</a>
                                    </li>
                                </ul>
                            </nav>

                        </div>
                        <div className={basicT === "Html" ? "tab-pane fade active show" : "tab-pane fade"} id="nav-HTML3" role="tabpanel">
                            <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                                {`<!-- pagination: left -->
<nav aria-label="Page navigation">
    <ul class="pagination justify-content-start">
        <li class="page-item disabled">
            <a class="page-link" href="#!" tabindex="-1" aria-disabled="true">Previous</a>
        </li>
        <li class="page-item"><a class="page-link" href="#!">1</a></li>
        <li class="page-item"><a class="page-link" href="#!">2</a></li>
        <li class="page-item"><a class="page-link" href="#!">3</a></li>
        <li class="page-item">
            <a class="page-link" href="#!">Next</a>
        </li>
    </ul>
</nav>

<!-- pagination: center -->
<nav aria-label="Page navigation">
    <ul class="pagination justify-content-center">
        <li class="page-item disabled">
            <a class="page-link" href="#!" tabindex="-1" aria-disabled="true">Previous</a>
        </li>
        <li class="page-item"><a class="page-link" href="#!">1</a></li>
        <li class="page-item"><a class="page-link" href="#!">2</a></li>
        <li class="page-item"><a class="page-link" href="#!">3</a></li>
        <li class="page-item">
            <a class="page-link" href="#!">Next</a>
        </li>
    </ul>
</nav>

<!-- pagination: right -->
<nav aria-label="Page navigation">
    <ul class="pagination justify-content-end">
        <li class="page-item disabled">
            <a class="page-link" href="#!" tabindex="-1" aria-disabled="true">Previous</a>
        </li>
        <li class="page-item"><a class="page-link" href="#!">1</a></li>
        <li class="page-item"><a class="page-link" href="#!">2</a></li>
        <li class="page-item"><a class="page-link" href="#!">3</a></li>
        <li class="page-item">
            <a class="page-link" href="#!">Next</a>
        </li>
    </ul>
</nav>`}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default PaginationWithAlignment;