import React from "react";
import { OverlayTrigger, Popover, Button } from "react-bootstrap";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';


function PopoversUITile() {

    return (
        <div className="container">
            <div className="col-12">
                <div className="bd-content">
                    <h2 id="overview">Overview</h2>
                    <p>Things to know when using the popover plugin:</p>
                    <div className="alert alert-danger" role="alert">
                        <strong>Popovers</strong> for more bootstrao components <a href="https://v5.getbootstrap.com/docs/5.0/components/popovers/" target="_blank">Bootstrap Popovers documentation <i className="fa fa-external-link"></i></a>
                    </div>
                    <ul>
                        <li>Popovers rely on the 3rd party library <a href="https://popper.js.org/">Popper.js</a> for positioning. You must include <a href="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js">popper.min.js</a> before bootstrap.js or use <code>bootstrap.bundle.min.js</code> / <code>bootstrap.bundle.js</code> which contains Popper.js in order for popovers to work!</li>
                        <li>Popovers require the <a href="https://v5.getbootstrap.com/docs/5.0/components/tooltips/">tooltip plugin</a> as a dependency.</li>
                        <li>Popovers are opt-in for performance reasons, so <strong>you must initialize them yourself</strong>.</li>
                        <li>Zero-length <code>title</code> and <code>content</code> values will never show a popover.</li>
                        <li>Specify <code>container: 'body'</code> to avoid rendering problems in more complex components (like our input groups, button groups, etc).</li>
                        <li>Triggering popovers on hidden elements will not work.</li>
                        <li>Popovers for <code>.disabled</code> or <code>disabled</code> elements must be triggered on a wrapper element.</li>
                        <li>When triggered from anchors that wrap across multiple lines, popovers will be centered between the anchors' overall width. Use <code>.text-nowrap</code> on your <code>&lt;a&gt;</code>s to avoid this behavior.</li>
                        <li>Popovers must be hidden before their corresponding elements have been removed from the DOM.</li>
                        <li>Popovers can be triggered thanks to an element inside a shadow DOM.</li>
                    </ul>
                    <div className="card card-callout p-3">
                        <span>The animation effect of this component is dependent on the <code>prefers-reduced-motion</code> media query. See the <a href="https://v5.getbootstrap.com/docs/5.0/getting-started/accessibility/#reduced-motion">reduced motion section of our accessibility documentation</a>.</span>
                    </div>
                    <h4 id="example-enable-popovers-everywhere" className="mt-5">Example: Enable popovers everywhere</h4>
                    <p>One way to initialize all popovers on a page would be to select them by their <code>data-toggle</code> attribute:</p>
                    <div className="highlight">

                    </div>
                    <h4 className="mt-5">Example: Using the <code>container</code> option</h4>
                    <p>When you have some styles on a parent element that interfere with a popover, you’ll want to specify a custom <code>container</code> so that the popover’s HTML appears within that element instead.</p>
                    <div className="highlight">
                        <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                            {`var popover = new bootstrap.Popover(document.querySelector('.example-popover'), {container: 'body'})`}
                        </SyntaxHighlighter>
                    </div>
                    <h4 className="mt-5">Example</h4>
                    <div className="card mb-3">
                        <div className="card-body">
                            <OverlayTrigger trigger="click" placement="right" overlay={<Popover id="popover-basic">
                                <Popover.Title as="h3">Popover title</Popover.Title>
                                <Popover.Content></Popover.Content>
                            </Popover>}>
                                <button type="button" className="btn btn-lg btn-danger" data-bs-toggle="popover" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-bs-original-title="Popover title" aria-describedby="popover18754">Click to toggle popover</button>
                            </OverlayTrigger>
                            <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                                {`<button type="button" class="btn btn-lg btn-danger" data-toggle="popover" title="Popover title" data-content="And here's some amazing content. It's very engaging. Right?">Click to toggle popover</button>`}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                    <h5>Four directions</h5>
                    <div className="card mb-3">
                        <div className="card-body">
                            {['top', 'right', 'bottom', 'left'].map((placement) => (
                                <OverlayTrigger
                                    trigger="click"
                                    key={placement}
                                    placement={placement}
                                    overlay={
                                        <Popover id={`popover-positioned-${placement}`}>
                                            <Popover.Title as="h3">{`Popover ${placement}`}</Popover.Title>
                                            <Popover.Content>

                                            </Popover.Content>
                                        </Popover>
                                    }
                                >
                                    <Button variant="secondary" className="me-1">Popover on {placement}</Button>
                                </OverlayTrigger>
                            ))}

                            <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                                {`<button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="top" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
    Popover on top
</button>

<button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="right" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
    Popover on right
</button>

<button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="bottom" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
    Popover on bottom
</button>

<button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="left" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
    Popover on left
</button>`}
                            </SyntaxHighlighter>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}



export default PopoversUITile;