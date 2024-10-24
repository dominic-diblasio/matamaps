import React, { useState } from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import PaginationWithAlignment from "../../components/UI/PaginationWithAlignment";
import PaginationWithIcon from "../../components/UI/PaginationWithIcon";
import PaginationWithSizing from "../../components/UI/PaginationWithSizing";
import PaginationWithStates from "../../components/UI/PaginationWithStates";



function PaginationUI(props) {
    const [basicT, setBasicT] = useState("Preview");

    const { activeLayout } = props;
    return (
        <div className={activeLayout === "HeadertopMenuContainer" || activeLayout === "HeaderSubmenuContainer" || activeLayout === "HeaderSubmenuOverlayContainer" ? "container" : "container-fluid"}>
            <div className="col-12">
                <div className="card p-4 bd-content">
                    <h2 id="overview">Overview</h2>
                    <p>We use a large block of connected links for our pagination, making links hard to miss and easily scalable—all while providing large hit areas. Pagination is built with list HTML elements so screen readers can announce the number of available links. Use a wrapping <code>&lt;nav&gt;</code> element to identify it as a navigation section to screen readers and other assistive technologies.</p>
                    <p>In addition, as pages likely have more than one such navigation section, it’s advisable to provide a descriptive <code>aria-label</code> for the <code>&lt;nav&gt;</code> to reflect its purpose. For example, if the pagination component is used to navigate between a set of search results, an appropriate label could be <code>aria-label="Search results pages"</code>.</p>
                    <ul className="nav nav-tabs tab-card px-3 border-bottom-0" role="tablist">
                        <li className="nav-item"><a className={basicT === "Preview" ? "nav-link active" : "nav-link"} href="#!" onClick={(e) => { e.preventDefault(); setBasicT("Preview") }}>Preview</a></li>
                        <li className="nav-item"><a className={basicT === "Html" ? "nav-link active" : "nav-link"} href="#!" onClick={(e) => { e.preventDefault(); setBasicT("Html") }}>HTML</a></li>
                    </ul>
                    <div className="card mb-3">
                        <div className="card-body">
                            <div className="tab-content">
                                <div className={basicT === "Preview" ? "tab-pane fade active show" : "tab-pane fade"} id="nav-Preview1" role="tabpanel">
                                    <nav aria-label="Page navigation">
                                        <ul className="pagination mb-0">
                                            <li className="page-item"><a className="page-link" href="#!">Previous</a></li>
                                            <li className="page-item"><a className="page-link" href="#!">1</a></li>
                                            <li className="page-item"><a className="page-link" href="#!">2</a></li>
                                            <li className="page-item"><a className="page-link" href="#!">3</a></li>
                                            <li className="page-item"><a className="page-link" href="#!">Next</a></li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className={basicT === "Html" ? "tab-pane fade active show" : "tab-pane fade"} id="nav-HTML1" role="tabpanel">
                                    <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                                        {`<nav aria-label="Page navigation example">
    <ul class="pagination">
        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item"><a class="page-link" href="#">Next</a></li>
    </ul>
</nav>`}
                                    </SyntaxHighlighter>
                                </div>
                            </div>
                        </div>
                    </div>
                    <PaginationWithIcon />
                    <PaginationWithStates />
                    <PaginationWithSizing />
                    <PaginationWithAlignment />

                </div>
            </div>
        </div>
    )
}


export default PaginationUI;