import React, { useState } from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function PaginationWithIcon() {
    const [basicT, setBasicT] = useState("Preview");

    return (
        <div className="border-top mt-5 pt-3">
            <h5 id="disabled-and-active-states">Working with icons</h5>
            <p>Looking to use an icon or symbol in place of text for some pagination links? Be sure to provide proper screen reader support with <code>aria</code> attributes.</p>
            <ul className="nav nav-tabs tab-card px-3 border-bottom-0" role="tablist">
                <li className="nav-item"><a className={basicT === "Preview" ? "nav-link active" : "nav-link"} href="#!" onClick={(e) => { e.preventDefault(); setBasicT("Preview") }}>Preview</a></li>
                <li className="nav-item"><a className={basicT === "Html" ? "nav-link active" : "nav-link"} href="#!" onClick={(e) => { e.preventDefault(); setBasicT("Html") }}>HTML</a></li>
            </ul>
            <div className="card mb-3">
                <div className="card-body">
                    <div className="tab-content">
                        <div className={basicT === "Preview" ? "tab-pane fade active show" : "tab-pane fade"} id="nav-Preview3" role="tabpanel">
                            <nav aria-label="Page navigation">
                                <ul className="pagination mb-0">
                                    <li className="page-item">
                                        <a className="page-link" href="#!"><span >«</span></a>
                                    </li>
                                    <li className="page-item"><a className="page-link" href="#!">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#!">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#!">3</a></li>
                                    <li className="page-item">
                                        <a className="page-link" href="#!" ><span >»</span></a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className={basicT === "Html" ? "tab-pane fade active show" : "tab-pane fade"} id="nav-HTML3" role="tabpanel">
                            <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                                {`<nav aria-label="Page navigation">
    <ul class="pagination">
        <li class="page-item">
            <a class="page-link" href="#!" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a>
        </li>
        <li class="page-item"><a class="page-link" href="#!">1</a></li>
        <li class="page-item"><a class="page-link" href="#!">2</a></li>
        <li class="page-item"><a class="page-link" href="#!">3</a></li>
        <li class="page-item">
            <a class="page-link" href="#!" aria-label="Next"><span aria-hidden="true">&raquo;</span></a>
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


export default PaginationWithIcon;