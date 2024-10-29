import React, { useState } from "react";
import { Toast } from "react-bootstrap";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function CustomToast() {
    const [basicT, setBasicT] = useState("Preview");


    return (
        <div className="border-top mt-5 pt-3">
            <h3 id="custom-content">Custom content</h3>
            <p>Customize your toasts by removing sub-components, tweaking with <a href="https://v5.getbootstrap.com/docs/5.0/utilities/api/">utilities</a>, or adding your own markup. Here we’ve created a simpler toast by removing the default <code>.toast-header</code>, adding a custom hide icon from <a href="https://icons.getbootstrap.com/">Bootstrap Icons</a>, and using some <a href="https://v5.getbootstrap.com/docs/5.0/utilities/flex/">flexbox utilities</a> to adjust the layout.</p>

            <ul className="nav nav-tabs tab-card px-3 border-bottom-0" role="tablist">
                <li className="nav-item"><a className={basicT === "Preview" ? "nav-link active" : "nav-link"} href="#nav-Preview1" onClick={(e) => { e.preventDefault(); setBasicT("Preview") }} >Preview</a></li>
                <li className="nav-item"><a className={basicT === "Html" ? "nav-link active" : "nav-link"} href="#nav-HTML1" onClick={(e) => { e.preventDefault(); setBasicT("Html") }}>HTML</a></li>
            </ul>
            <div className="card mb-3">
                <div className="card-body">
                    <div className="tab-content">
                        <div className={basicT === "Preview" ? "tab-pane fade active show" : "tab-pane fade"} id="nav-Preview1" role="tabpanel">
                            <Toast className="d-flex align-items-center fade show mb-5">
                                <Toast.Body>
                                    Hello, world! This is a toast message.
                                </Toast.Body>
                                <button type="button" className="btn-close ms-auto me-2" data-dismiss="toast" aria-label="Close"></button>
                            </Toast>
                            <p>Building on the above example, you can create different toast color schemes with our <a href="https://v5.getbootstrap.com/docs/5.0/utilities/colors/">color utilities</a>. Here we’ve added <code>.bg-primary</code> and <code>.text-white</code> to the <code>.toast</code>, and then added <code>.text-white</code> to our close button. For a crisp edge, we remove the default border with <code>.border-0</code>.</p>
                            <Toast className="d-flex align-items-center text-white bg-primary border-0 fade show">
                                <Toast.Body>
                                    Hello, world! This is a toast message.
                                </Toast.Body>
                                <button type="button" className="btn-close btn-close-white ms-auto me-2" data-dismiss="toast" aria-label="Close"></button>
                            </Toast>
                            <Toast className="d-flex align-items-center text-white bg-success border-0 fade show">
                                <Toast.Body>
                                    Hello, world! This is a toast message.
                                </Toast.Body>
                                <button type="button" className="btn-close btn-close-white ms-auto me-2" data-dismiss="toast" aria-label="Close"></button>
                            </Toast>
                            <Toast className="d-flex align-items-center text-white bg-danger border-0 fade show">
                                <Toast.Body>
                                    Hello, world! This is a toast message.
                                </Toast.Body>
                                <button type="button" className="btn-close btn-close-white ms-auto me-2" data-dismiss="toast" aria-label="Close"></button>
                            </Toast>
                            <Toast className="d-flex align-items-center text-white bg-danger border-0 fade show mb-5">
                                <Toast.Body>
                                    Hello, world! This is a toast message.
                                </Toast.Body>
                                <button type="button" className="btn-close btn-close-white ms-auto me-2" data-dismiss="toast" aria-label="Close"></button>
                            </Toast>


                            <p>Alternatively, you can also add additional controls and components to toasts.</p>
                            <Toast >
                                <Toast.Body>
                                    Hello, world! This is a toast message.
                                    <div className="mt-2 pt-2 border-top">
                                        <button type="button" className="btn btn-primary btn-sm me-1">Take action</button>
                                        <button type="button" className="btn btn-secondary btn-sm" data-dismiss="toast">Close</button>
                                    </div>
                                </Toast.Body>
                            </Toast>
                        </div>
                        <div className={basicT === "Html" ? "tab-pane fade active show" : "tab-pane fade"} id="nav-HTML1" role="tabpanel">
                            <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                                {`<Toast className="d-flex align-items-center fade show mb-5">
    <Toast.Body>
        Hello, world! This is a toast message.
    </Toast.Body>
    <button type="button" className="btn-close ms-auto me-2" data-dismiss="toast" aria-label="Close"></button>
</Toast>
<p>Building on the above example, you can create different toast color schemes with our <a href="https://v5.getbootstrap.com/docs/5.0/utilities/colors/">color utilities</a>. Here we’ve added <code>.bg-primary</code> and <code>.text-white</code> to the <code>.toast</code>, and then added <code>.text-white</code> to our close button. For a crisp edge, we remove the default border with <code>.border-0</code>.</p>
<Toast className="d-flex align-items-center text-white bg-primary border-0 fade show">
    <Toast.Body>
        Hello, world! This is a toast message.
    </Toast.Body>
    <button type="button" className="btn-close btn-close-white ms-auto me-2" data-dismiss="toast" aria-label="Close"></button>
</Toast>
<Toast className="d-flex align-items-center text-white bg-success border-0 fade show">
    <Toast.Body>
        Hello, world! This is a toast message.
    </Toast.Body>
    <button type="button" className="btn-close btn-close-white ms-auto me-2" data-dismiss="toast" aria-label="Close"></button>
</Toast>
<Toast className="d-flex align-items-center text-white bg-danger border-0 fade show">
    <Toast.Body>
        Hello, world! This is a toast message.
    </Toast.Body>
    <button type="button" className="btn-close btn-close-white ms-auto me-2" data-dismiss="toast" aria-label="Close"></button>
</Toast>
<Toast className="d-flex align-items-center text-white bg-danger border-0 fade show mb-5">
    <Toast.Body>
        Hello, world! This is a toast message.
    </Toast.Body>
    <button type="button" className="btn-close btn-close-white ms-auto me-2" data-dismiss="toast" aria-label="Close"></button>
</Toast>

<Toast >
<Toast.Body>
    Hello, world! This is a toast message.
    <div className="mt-2 pt-2 border-top">
        <button type="button" className="btn btn-primary btn-sm me-1">Take action</button>
        <button type="button" className="btn btn-secondary btn-sm" data-dismiss="toast">Close</button>
    </div>
</Toast.Body>
</Toast>`}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}


export default CustomToast;