import React, { useState } from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function PaginationWithStates() {
    const [basicT, setBasicT] = useState("Preview");

    return (
        <div className="border-top mt-5 pt-3">
            <h5 id="disabled-and-active-states">Disabled and active states</h5>
            <p>Pagination links are customizable for different circumstances. Use <code>.disabled</code> for links that appear un-clickable and <code>.active</code> to indicate the current page.</p>
            <p>While the <code>.disabled</code> class uses <code>pointer-events: none</code> to <em>try</em> to disable the link functionality of <code>&lt;a&gt;</code>s, that CSS property is not yet standardized and doesn’t account for keyboard navigation. As such, you should always add <code>tabindex="-1"</code> on disabled links and use custom JavaScript to fully disable their functionality.</p>
            <ul className="nav nav-tabs tab-card px-3 border-bottom-0" role="tablist">
                <li className="nav-item"><a className={basicT === "Preview" ? "nav-link active" : "nav-link"} href="#!" onClick={(e) => { e.preventDefault(); setBasicT("Preview") }}>Preview</a></li>
                <li className="nav-item"><a className={basicT === "Html" ? "nav-link active" : "nav-link"} href="#!" onClick={(e) => { e.preventDefault(); setBasicT("Html") }}>HTML</a></li>
            </ul>
            <div className="card mb-3">
                <div className="card-body">
                    <div className="tab-content">
                        <div className={basicT === "Preview" ? "tab-pane fade active show" : "tab-pane fade"} id="nav-Preview3" role="tabpanel">
                            <nav aria-label="...">
                                <ul className="pagination">
                                    <li className="page-item disabled">
                                        <a className="page-link" href="#!" aria-disabled="true">Previous</a>
                                    </li>
                                    <li className="page-item"><a className="page-link" href="#!">1</a></li>
                                    <li className="page-item active" aria-current="page">
                                        <a className="page-link" href="#!">2 <span className="visually-hidden">(current)</span></a>
                                    </li>
                                    <li className="page-item"><a className="page-link" href="#!">3</a></li>
                                    <li className="page-item">
                                        <a className="page-link" href="#!">Next</a>
                                    </li>
                                </ul>
                            </nav>
                            <p>You can optionally swap out active or disabled anchors for <code>&lt;span&gt;</code>, or omit the anchor in the case of the prev/next arrows, to remove click functionality and prevent keyboard focus while retaining intended styles.</p>
                            <nav aria-label="...">
                                <ul className="pagination">
                                    <li className="page-item disabled">
                                        <span className="page-link">Previous</span>
                                    </li>
                                    <li className="page-item"><a className="page-link" href="#!">1</a></li>
                                    <li className="page-item active" aria-current="page">
                                        <span className="page-link">2<span className="visually-hidden">(current)</span></span>
                                    </li>
                                    <li className="page-item"><a className="page-link" href="#!">3</a></li>
                                    <li className="page-item">
                                        <a className="page-link" href="#!">Next</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className={basicT === "Html" ? "tab-pane fade active show" : "tab-pane fade"} id="nav-HTML3" role="tabpanel">
                            <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                                {`<nav aria-label="...">
    <ul class="pagination">
        <li class="page-item disabled">
            <a class="page-link" href="#!" tabindex="-1" aria-disabled="true">Previous</a>
        </li>
        <li class="page-item"><a class="page-link" href="#!">1</a></li>
        <li class="page-item active" aria-current="page">
            <a class="page-link" href="#!">2 <span class="visually-hidden">(current)</span></a>
        </li>
        <li class="page-item"><a class="page-link" href="#!">3</a></li>
        <li class="page-item">
            <a class="page-link" href="#!">Next</a>
        </li>
    </ul>
</nav>

<nav aria-label="...">
    <ul class="pagination">
        <li class="page-item disabled">
            <span class="page-link">Previous</span>
        </li>
        <li class="page-item"><a class="page-link" href="#!">1</a></li>
        <li class="page-item active" aria-current="page">
            <span class="page-link">2<span class="visually-hidden">(current)</span></span>
        </li>
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


export default PaginationWithStates;