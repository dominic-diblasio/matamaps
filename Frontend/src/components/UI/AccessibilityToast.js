import React, { useState } from "react";
import { Toast } from "react-bootstrap";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function AccessibilityToast() {
    const [basicT, setBasicT] = useState("Preview");


    return (
        <div className="border-top mt-5 pt-3">
            <h2 id="placement">Accessibility</h2>
            <p>Toasts are intended to be small interruptions to your visitors or users, so to help those with screen readers and similar assistive technologies, you should wrap your toasts in an <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions"><code>aria-live</code> region</a>. Changes to live regions (such as injecting/updating a toast component) are automatically announced by screen readers without needing to move the user’s focus or otherwise interrupt the user. Additionally, include <code>aria-atomic="true"</code> to ensure that the entire toast is always announced as a single (atomic) unit, rather than announcing what was changed (which could lead to problems if you only update part of the toast’s content, or if displaying the same toast content at a later point in time). If the information needed is important for the process, e.g. for a list of errors in a form, then use the <a href="https://v5.getbootstrap.com/docs/5.0/components/alerts/">alert component</a> instead of toast.</p>
            <p>Note that the live region needs to be present in the markup <em>before</em> the toast is generated or updated. If you dynamically generate both at the same time and inject them into the page, they will generally not be announced by assistive technologies.</p>
            <p>You also need to adapt the <code>role</code> and <code>aria-live</code> level depending on the content. If it’s an important message like an error, use <code>role="alert" aria-live="assertive"</code>, otherwise use <code>role="status" aria-live="polite"</code> attributes.</p>
            <p>As the content you’re displaying changes, be sure to update the <a href="#options"><code>delay</code> timeout</a> to ensure people have enough time to read the toast.</p>
            <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                {`<div class="toast" role="alert" aria-live="polite" aria-atomic="true" data-delay="10000">
    <div role="alert" aria-live="assertive" aria-atomic="true">...</div>
  </div>`}
            </SyntaxHighlighter>
            <p>When using <code>autohide: false</code>, you must add a close button to allow users to dismiss the toast.</p>
            <ul className="nav nav-tabs tab-card px-3 border-bottom-0" role="tablist">
                <li className="nav-item"><a className={basicT === "Preview" ? "nav-link active" : "nav-link"} href="#nav-Preview1" onClick={(e) => { e.preventDefault(); setBasicT("Preview") }} >Preview</a></li>
                <li className="nav-item"><a className={basicT === "Html" ? "nav-link active" : "nav-link"} href="#nav-HTML1" onClick={(e) => { e.preventDefault(); setBasicT("Html") }}>HTML</a></li>
            </ul>
            <div className="card mb-3">
                <div className="card-body">
                    <div className="tab-content">
                        <div className={basicT === "Preview" ? "tab-pane fade active show" : "tab-pane fade"} id="nav-Preview1" role="tabpanel">
                            <Toast>
                                <Toast.Header closeButton={false}>
                                    <svg className="bd-placeholder-img rounded me-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#007aff"></rect></svg>
                                    <strong className="me-auto">Bootstrap</strong>
                                    <small>11 mins ago</small>
                                    <button type="button" className="btn-close" data-dismiss="toast" aria-label="Close"></button>
                                </Toast.Header>
                                <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                            </Toast>
                        </div>
                        <div className={basicT === "Html" ? "tab-pane fade active show" : "tab-pane fade"} id="nav-HTML1" role="tabpanel">
                            <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                                {`<Toast>
    <Toast.Header closeButton={false}>
    <svg className="bd-placeholder-img rounded me-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#007aff"></rect></svg>
        <strong className="me-auto">Bootstrap</strong>
        <small>11 mins ago</small>
        <button type="button" className="btn-close" data-dismiss="toast" aria-label="Close"></button>
    </Toast.Header>
    <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
</Toast>`}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                </div>
            </div>
            <h2 id="javascript-behavior mt-5">JavaScript behavior</h2>
            <h4 id="usage">Usage</h4>
            <p>Initialize toasts via JavaScript:</p>
            <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                {`var toastElList = [].slice.call(document.querySelectorAll('.toast'))
var toastList = toastElList.map(function (toastEl) {
    return new bootstrap.Toast(toastEl, option)
})`}
            </SyntaxHighlighter>
            <h4 id="options">Options</h4>
            <p>Options can be passed via data attributes or JavaScript. For data attributes, append the option name to <code>data-</code>, as in <code>data-animation=""</code>.</p>
            <table className="table">
                <thead>
                    <tr>
                        <th style={{ width: 100 }}>Name</th>
                        <th style={{ width: 100 }}>Type</th>
                        <th style={{ width: 50 }}>Default</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>animation</code></td>
                        <td>boolean</td>
                        <td><code>true</code></td>
                        <td>Apply a CSS fade transition to the toast</td>
                    </tr>
                    <tr>
                        <td><code>autohide</code></td>
                        <td>boolean</td>
                        <td><code>true</code></td>
                        <td>Auto hide the toast</td>
                    </tr>
                    <tr>
                        <td><code>delay</code></td>
                        <td>number</td>
                        <td>
                            <code>5000</code>
                        </td>
                        <td>Delay hiding the toast (ms)</td>
                    </tr>
                </tbody>
            </table>
            <h4 id="methods">Methods</h4>
            <div className="card card-callout p-3 mb-4">
                <h4 id="asynchronous-methods-and-transitions">Asynchronous methods and transitions</h4>
                <p>All API methods are <strong>asynchronous</strong> and start a <strong>transition</strong>. They return to the caller as soon as the transition is started but <strong>before it ends</strong>. In addition, a method call on a <strong>transitioning component will be ignored</strong>.</p>
                <p><a href="https://v5.getbootstrap.com/docs/5.0/getting-started/javascript/#asynchronous-functions-and-transitions">See our JavaScript documentation for more information</a>.</p>
            </div>
            <h4 id="show">show</h4>
            <p>Reveals an element’s toast. <strong>Returns to the caller before the toast has actually been shown</strong> (i.e. before the <code>shown.bs.toast</code> event occurs).
                You have to manually call this method, instead your toast won’t show.</p>
            <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                {`toast.show()`}
            </SyntaxHighlighter>
            <h4 id="hide">hide</h4>
            <p>Hides an element’s toast. <strong>Returns to the caller before the toast has actually been hidden</strong> (i.e. before the <code>hidden.bs.toast</code> event occurs). You have to manually call this method if you made <code>autohide</code> to <code>false</code>.</p>
            <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                {`toast.hide()`}
            </SyntaxHighlighter>
            <h4 id="dispose">dispose</h4>
            <p>Hides an element’s toast. Your toast will remain on the DOM but won’t show anymore.</p>
            <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                {`toast.dispose()`}
            </SyntaxHighlighter>
            <h3 id="events">Events</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th style={{ width: 150 }}>Event type</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>show.bs.toast</code></td>
                        <td>This event fires immediately when the <code>show</code> instance method is called.</td>
                    </tr>
                    <tr>
                        <td><code>shown.bs.toast</code></td>
                        <td>This event is fired when the toast has been made visible to the user.</td>
                    </tr>
                    <tr>
                        <td><code>hide.bs.toast</code></td>
                        <td>This event is fired immediately when the <code>hide</code> instance method has been called.</td>
                    </tr>
                    <tr>
                        <td><code>hidden.bs.toast</code></td>
                        <td>This event is fired when the toast has finished being hidden from the user.</td>
                    </tr>
                </tbody>
            </table>
            <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                {`var myToastEl = document.getElementById('myToast')
myToastEl.addEventListener('hidden.bs.toast', function () {
    // do something...
})`}
            </SyntaxHighlighter>



        </div>
    );
}


export default AccessibilityToast;