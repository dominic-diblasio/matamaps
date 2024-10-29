import React, { useState } from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function PaginationWithSizing() {

    const [basicT, setBasicT] = useState("Preview");

    return (
        <div className="border-top mt-5 pt-3">
            <h5 id="disabled-and-active-states">Sizing</h5>
            <p>Fancy larger or smaller pagination? Add <code>.pagination-lg</code> or <code>.pagination-sm</code> for additional sizes.</p>
            <ul className="nav nav-tabs tab-card px-3 border-bottom-0" role="tablist">
                <li className="nav-item"><a className={basicT === "Preview" ? "nav-link active" : "nav-link"} href="#!" onClick={(e) => { e.preventDefault(); setBasicT("Preview") }}>Preview</a></li>
                <li className="nav-item"><a className={basicT === "Html" ? "nav-link active" : "nav-link"} href="#!" onClick={(e) => { e.preventDefault(); setBasicT("Html") }}>HTML</a></li>
            </ul>
            <div className="card mb-3">
                <div className="card-body">
                    <div className="tab-content">
                        <div className={basicT === "Preview" ? "tab-pane fade active show" : "tab-pane fade"} id="nav-Preview3" role="tabpanel">
                            <nav aria-label="...">
                                <ul className="pagination pagination-lg">
                                    <li className="page-item active" aria-current="page">
                                        <span className="page-link">1<span className="visually-hidden">(current)</span></span>
                                    </li>
                                    <li className="page-item"><a className="page-link" href="#!">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#!">3</a></li>
                                </ul>
                            </nav>
                            <nav aria-label="...">
                                <ul className="pagination">
                                    <li className="page-item active" aria-current="page">
                                        <span className="page-link">1<span className="visually-hidden">(current)</span></span>
                                    </li>
                                    <li className="page-item"><a className="page-link" href="#!">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#!">3</a></li>
                                </ul>
                            </nav>
                            <nav aria-label="...">
                                <ul className="pagination pagination-sm">
                                    <li className="page-item active" aria-current="page">
                                        <span className="page-link">1<span className="visually-hidden">(current)</span></span>
                                    </li>
                                    <li className="page-item"><a className="page-link" href="#!">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#!">3</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div className={basicT === "Html" ? "tab-pane fade active show" : "tab-pane fade"} id="nav-HTML3" role="tabpanel">
                            <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                                {`<!-- pagination: lg -->
    <nav aria-label="...">
    <ul class="pagination pagination-lg">
        <li class="page-item active" aria-current="page">
            <span class="page-link">1<span class="visually-hidden">(current)</span></span>
        </li>
        <li class="page-item"><a class="page-link" href="#!">2</a></li>
        <li class="page-item"><a class="page-link" href="#!">3</a></li>
    </ul>
</nav>

<!-- pagination: md -->
<nav aria-label="...">
    <ul class="pagination">
        <li class="page-item active" aria-current="page">
            <span class="page-link">1<span class="visually-hidden">(current)</span></span>
        </li>
        <li class="page-item"><a class="page-link" href="#!">2</a></li>
        <li class="page-item"><a class="page-link" href="#!">3</a></li>
    </ul>
</nav>

<!-- pagination: sm -->
<nav aria-label="...">
    <ul class="pagination pagination-sm">
        <li class="page-item active" aria-current="page">
            <span class="page-link">1<span class="visually-hidden">(current)</span></span>
        </li>
        <li class="page-item"><a class="page-link" href="#!">2</a></li>
        <li class="page-item"><a class="page-link" href="#!">3</a></li>
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


export default PaginationWithSizing;