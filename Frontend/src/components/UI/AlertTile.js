import React from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Alert } from "react-bootstrap";
import { useState } from "react";

function AlertTile() {

    const [dismissibleAlert, setDismissibleAlert] = useState(true);

    return (
        <div className="col-12">
            <div className="card p-4 bd-content">

                <h2 id="examples">Examples</h2>
                <p>Alerts are available for any length of text, as well as an optional close button. For proper styling, use one of the eight <strong>required</strong> contextual classes (e.g., <code>.alert-success</code>). For inline dismissal, use the <a href="#dismissing">alerts JavaScript plugin</a>.</p>
                <div className="bd-example mb-5">
                    {
                        [
                            'primary',
                            'secondary',
                            'success',
                            'danger',
                            'warning',
                            'info',
                            'light',
                            'dark',
                        ].map((variant, idx) => (
                            <Alert key={idx} variant={variant}>This is a {variant} alert—check it out!</Alert>
                        ))
                    }
                    <SyntaxHighlighter language="html" style={a11yLight} className="language-html">
                        {`    <Alert variant='primary'>This is a primary alert—check it out!</Alert>
<Alert variant='secondary'>This is a secondary alert—check it out!</Alert>
<Alert variant='success'>This is a success alert—check it out!</Alert>
<Alert variant='danger'>This is a danger alert—check it out!</Alert>
<Alert variant='warning'>This is a warning alert—check it out!</Alert>
<Alert variant='info'>This is a info alert—check it out!</Alert>
<Alert variant='light'>This is a light alert—check it out!</Alert>
<Alert variant='dark'>This is a dark alert—check it out!</Alert>`}
                    </SyntaxHighlighter>
                </div>
                <div className="bd-callout bd-callout-info">
                    <h5 id="conveying-meaning-to-assistive-technologies">Conveying meaning to assistive technologies</h5>
                    <p>Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the <code>.visually-hidden</code> class.</p>
                </div>
                <h3 id="link-color">Link color</h3>
                <p>Use the <code>.alert-link</code> utility class to quickly provide matching colored links within any alert.</p>
                <div className="bd-example mb-5">
                    {
                        [
                            'primary',
                            'secondary',
                            'success',
                            'danger',
                            'warning',
                            'info',
                            'light',
                            'dark',
                        ].map((variant, idx) => (
                            <Alert key={idx} variant={variant}>
                                This is a {variant} alert with{' '}<Alert.Link href="#">an example link</Alert.Link>. Give it a click if youlike.
                            </Alert>
                        ))
                    }

                    <SyntaxHighlighter language="html" style={a11yLight} className="language-html">
                        {`    <Alert variant='primary'>This is a primary alert with{' '}<Alert.Link href="#!">an example link</Alert.Link>. Give it a click if youlike.</Alert>
<Alert variant='secondary'>This is a secondary alert with{' '}<Alert.Link href="#!">an example link</Alert.Link>. Give it a click if youlike.</Alert>
<Alert variant='success'>This is a success alert with{' '}<Alert.Link href="#!">an example link</Alert.Link>. Give it a click if youlike.</Alert>
<Alert variant='danger'>This is a danger alert with{' '}<Alert.Link href="#!">an example link</Alert.Link>. Give it a click if youlike.</Alert>
<Alert variant='warning'>This is a warning alert with{' '}<Alert.Link href="#!">an example link</Alert.Link>. Give it a click if youlike.</Alert>
<Alert variant='info'>This is a info alert with{' '}<Alert.Link href="#!">an example link</Alert.Link>. Give it a click if youlike.</Alert>
<Alert variant='light'>This is a light alert with{' '}<Alert.Link href="#!">an example link</Alert.Link>. Give it a click if youlike.</Alert>
<Alert variant='dark'>This is a dark alert with{' '}<Alert.Link href="#!">an example link</Alert.Link>. Give it a click if youlike.</Alert>`}
                    </SyntaxHighlighter>
                </div>
                <h3 id="additional-content">Additional content</h3>
                <p>Alerts can also contain additional HTML elements like headings, paragraphs and dividers.</p>
                <div className="bd-example mb-5">
                    <Alert variant='success'>
                        <Alert.Heading>Well done!</Alert.Heading>
                        <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
                        <hr />
                        <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
                    </Alert>
                    <SyntaxHighlighter language="html" style={a11yLight} className="language-html">
                        {`<Alert variant='success'>
<Alert.Heading>Well done!</Alert.Heading>
<p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
<hr/>
<p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
</Alert>`}
                    </SyntaxHighlighter>
                </div>


                <h3 id="dismissing">Dismissing</h3>
                <p>Using the alert JavaScript plugin, it’s possible to dismiss any alert inline. Here’s how:</p>
                <ul>
                    <li>Be sure you’ve loaded the alert plugin, or the compiled Bootstrap JavaScript.</li>
                    <li>Add a <a href="/docs/5.0/components/close-button/">close button</a> and the <code>.alert-dismissible</code> class, which adds extra padding to the right of the alert and positions the close button.</li>
                    <li>On the close button, add the <code>data-dismiss="alert"</code> attribute, which triggers the JavaScript functionality. Be sure to use the <code>&lt;button&gt;</code> element with it for proper behavior across all devices.</li>
                    <li>To animate alerts when dismissing them, be sure to add the <code>.fade</code> and <code>.show</code> classes.</li>
                </ul>
                <p>You can see this in action with a live demo:</p>
                <div className="bd-example mb-5">
                    <Alert variant='warning' show={dismissibleAlert} className="alert-dismissible"  >
                        <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                        <button type="button" className="btn-close" data-dismiss="alert" aria-label="Close" onClick={() => { setDismissibleAlert(false) }}></button>
                    </Alert>
                    <SyntaxHighlighter language="html" style={a11yLight} className="language-html">
                        {`<Alert variant='warning' show={dismissibleAlert} onClose={() =>{ this.setState({ dismissibleAlert:false }) }} dismissible>
<strong>Holy guacamole!</strong> You should check in on some of those fields below.
<button type="button" className="btn-close" data-dismiss="alert" aria-label="Close"></button>
</Alert>`}
                    </SyntaxHighlighter>
                </div>

                <div className="card p-3 mb-3">
                    When an alert is dismissed, the element is completely removed from the page structure. If a keyboard user dismisses the alert using the close button, their focus will suddenly be lost and, depending on the browser, reset to the start of the page/document. For this reason, we recommend including additional JavaScript that listens for the <code>closed.bs.alert</code> event and programmatically sets <code>focus()</code> to the most appropriate location in the page. If you’re planning to move focus to a non-interactive element that normally does not receive focus, make sure to add <code>tabindex="-1"</code> to the element.
                </div>

                <h2 id="javascript-behavior" className="mb-5 mt-5">JavaScript behavior</h2>
                <h3 id="triggers">Triggers</h3>
                <p>Enable dismissal of an alert via JavaScript:</p>
                <div className="bd-example mb-5" >
                    <SyntaxHighlighter language="html" style={a11yLight} className="language-html">
                        {`var alertList = document.querySelectorAll('.alert')
alertList.forEach(function (alert) {
new bootstrap.Alert(alert)
})`}
                    </SyntaxHighlighter>
                </div>

                <p>Or with <code>data</code> attributes on a button <strong>within the alert</strong>, as demonstrated above:</p>
                <div className="bd-example mb-5">
                    <SyntaxHighlighter language="javascript" style={a11yLight} className="language-html">
                        {`<button type="button" class="btn-close" data-dismiss="alert" aria-label="Close"></button>`}
                    </SyntaxHighlighter>
                </div>

                <p>Note that closing an alert will remove it from the DOM.</p>
                <h3 id="methods">Methods</h3>
                <p>You can create an alert instance with the alert constructor, for example:</p>
                <div className="bd-example mb-5">
                    <SyntaxHighlighter language="javascript" style={a11yLight} className="language-html">
                        {`var myAlert = document.getElementById('myAlert')
var bsAlert = new bootstrap.Alert(myAlert)`}
                    </SyntaxHighlighter>
                </div>

                <p>This makes an alert listen for click events on descendant elements which have the <code>data-dismiss="alert"</code> attribute. (Not necessary when using the data-api’s auto-initialization.)</p>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Method</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <code>close</code>
                            </td>
                            <td>
                                Closes an alert by removing it from the DOM. If the <code>.fade</code> and <code>.show</code> classes are present on the element, the alert will fade out before it is removed.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <code>dispose</code>
                            </td>
                            <td>
                                Destroys an element's alert.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <code>getInstance</code>
                            </td>
                            <td>
                                Static method which allows you to get the alert instance associated to a DOM element, you can use it like this: <code>bootstrap.Alert.getInstance(alert)</code>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="bd-example mb-5">
                    <SyntaxHighlighter language="javascript" style={a11yLight} className="language-html" >
                        {`var alertNode = document.querySelector('.alert')
var alert = bootstrap.Alert.getInstance(alertNode)
alert.close()`}
                    </SyntaxHighlighter>
                </div>

                <h3 id="events">Events</h3>
                <p>Bootstrap’s alert plugin exposes a few events for hooking into alert functionality.</p>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Event</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><code>close.bs.alert</code></td>
                            <td>
                                Fires immediately when the <code>close</code> instance method is called.
                            </td>
                        </tr>
                        <tr>
                            <td><code>closed.bs.alert</code></td>
                            <td>
                                Fired when the alert has been closed and CSS transitions have completed.
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="bd-example mb-5">
                    <SyntaxHighlighter language="javascript" style={a11yLight} className="language-html">
                        {`var myAlert = document.getElementById('myAlert')
myAlert.addEventListener('closed.bs.alert', function () {
// do something, for instance, explicitly move focus to the most appropriate element,
// so it doesn't get lost/reset to the start of the page
// document.getElementById('...').focus()
})`}
                    </SyntaxHighlighter>
                </div>

            </div>
        </div>
    )
}


export default AlertTile;