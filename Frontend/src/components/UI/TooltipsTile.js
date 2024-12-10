import React from "react";
import { useState } from "react";
import { OverlayTrigger, Button, Tooltip } from "react-bootstrap";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';


function TooltipsUI() {
    const [basicT, setBasicT] = useState("Preview");

    return (
        <div className="col-12">
            <div className="bd-content">
                <h2 id="overview">Overview</h2>
                <p>Things to know when using the toast plugin:</p>
                <div className="alert alert-danger" role="alert">
                    <strong>Tooltips</strong> for more bootstrao components <a href="https://v5.getbootstrap.com/docs/5.0/components/tooltips/" target="_blank">Bootstrap Tooltips documentation <i className="fa fa-external-link"></i></a>
                </div>
                <ul>
                    <li>Tooltips rely on the 3rd party library <a href="https://popper.js.org/">Popper.js</a> for positioning. You must include <a href="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js">popper.min.js</a> before bootstrap.js or use <code>bootstrap.bundle.min.js</code> / <code>bootstrap.bundle.js</code> which contains Popper.js in order for tooltips to work!</li>
                    <li>Tooltips are opt-in for performance reasons, so <strong>you must initialize them yourself</strong>.</li>
                    <li>Tooltips with zero-length titles are never displayed.</li>
                    <li>Specify <code>container: 'body'</code> to avoid rendering problems in more complex components (like our input groups, button groups, etc).</li>
                    <li>Triggering tooltips on hidden elements will not work.</li>
                    <li>Tooltips for <code>.disabled</code> or <code>disabled</code> elements must be triggered on a wrapper element.</li>
                    <li>When triggered from hyperlinks that span multiple lines, tooltips will be centered. Use <code>white-space: nowrap;</code> on your <code>&lt;a&gt;</code>s to avoid this behavior.</li>
                    <li>Tooltips must be hidden before their corresponding elements have been removed from the DOM.</li>
                    <li>Tooltips can be triggered thanks to an element inside a shadow DOM.</li>
                </ul>
                <div className="card card-callout p-3">
                    <span>The animation effect of this component is dependent on the <code>prefers-reduced-motion</code> media query. See the <a href="https://v5.getbootstrap.com/docs/5.0/getting-started/accessibility/#reduced-motion">reduced motion section of our accessibility documentation</a>.</span>
                </div>
                <div className="border-top mt-5 pt-3">
                    <h4 id="example-enable-tooltips-everywhere">Example: Enable tooltips everywhere</h4>
                    <p>One way to initialize all tooltips on a page would be to select them by their <code>data-toggle</code> attribute:</p>
                    <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                        {`var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})`}
                    </SyntaxHighlighter>
                </div>
                <div className="border-top mt-5 pt-3">
                    <h2 id="examples">Examples<a className="anchorjs-link " aria-label="Anchor" data-anchorjs-icon="#" href="#examples" style={{ paddingLeft: "0.375em" }}></a></h2>
                    <p>Hover over the links below to see tooltips:</p>
                    <div className="card p-4 mb-3 shadow">
                        <p className="mb-0 text-muted">Tight pants next level keffiyeh <a href="#!" data-bs-toggle="tooltip" title="" data-bs-original-title="Default tooltip">you probably</a> haven't heard of them. Photo booth beard raw denim letterpress vegan messenger bag stumptown. Farm-to-table seitan, mcsweeney's fixie sustainable quinoa 8-bit american apparel <a href="#!" data-bs-toggle="tooltip" title="" data-bs-original-title="Another tooltip">have a</a> terry richardson vinyl chambray. Beard stumptown, cardigans banh mi lomo thundercats. Tofu biodiesel williamsburg marfa, four loko mcsweeney's cleanse vegan chambray. A really ironic artisan <a href="#!" data-bs-toggle="tooltip" title="" data-bs-original-title="Another one here too">whatever keytar</a>, scenester farm-to-table banksy Austin <a href="#!" data-bs-toggle="tooltip" title="" data-bs-original-title="The last tip!">twitter handle</a> freegan cred raw denim single-origin coffee viral.</p>
                    </div>
                    <p>Hover over the buttons below to see the four tooltips directions: top, right, bottom, and left.</p>
                    <ul className="nav nav-tabs tab-card px-3 border-bottom-0" role="tablist">
                        <li className="nav-item"><a className={basicT === "Preview" ? "nav-link active" : "nav-link"} href="#nav-Preview1" onClick={(e) => { e.preventDefault(); setBasicT("Preview") }}>Preview</a></li>
                        <li className="nav-item"><a className={basicT === "Html" ? "nav-link active" : "nav-link"} href="#nav-HTML1" onClick={(e) => { e.preventDefault(); setBasicT("Html") }}>HTML</a></li>
                    </ul>
                    <div className="card mb-3">
                        <div className="card-body">
                            <div className="tab-content">
                                <div className={basicT === "Preview" ? "tab-pane fade show active" : "tab-pane fade"} id="nav-Preview1" role="tabpanel">
                                    {['top', 'right', 'bottom', 'left'].map((placement) => (
                                        <OverlayTrigger
                                            key={placement}
                                            placement={placement}
                                            overlay={
                                                <Tooltip id={`tooltip-${placement}`}>
                                                    Tooltip on <strong>{placement}</strong>.
                                                </Tooltip>
                                            }
                                        >
                                            <Button variant="secondary" className="me-1">Tooltip on {placement}</Button>
                                        </OverlayTrigger>
                                    ))}
                                </div>
                                <div className={basicT === "Html" ? "tab-pane fade show active" : "tab-pane fade"} id="nav-HTML1" role="tabpanel">
                                    <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                                        {`<button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="top" title="Tooltip on top">Tooltip on top</button>
    <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="right" title="Tooltip on right">Tooltip on right</button>
    <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">Tooltip on bottom</button>
    <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="left" title="Tooltip on left">Tooltip on left</button>`}
                                    </SyntaxHighlighter>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default TooltipsUI;