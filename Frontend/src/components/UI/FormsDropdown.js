import React from "react";
import { Dropdown } from "react-bootstrap";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function FormsDropdown() {
    function tabEvent(evt, panid, tabClass, navClass) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName(tabClass);
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].className = tabcontent[i].className.replace(" show", "");
            tabcontent[i].className = tabcontent[i].className.replace(" active", "");
        }
        tablinks = document.getElementsByClassName(navClass);
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        evt.currentTarget.className += " active";
        document.getElementById(panid).classList.add("show")
        document.getElementById(panid).classList.add("active")
    }

    return (
        <div className="border-top mt-5 pt-3">
            <h3 id="split-button">Forms</h3>
            <p>Put a form within a dropdown menu, or make it into a dropdown menu, and use <a href="https://v5.getbootstrap.com/docs/5.0/utilities/spacing/">margin or padding utilities</a> to give it the negative space you require.</p>

            <ul className="nav nav-tabs tab-card px-3 border-bottom-0" role="tablist">
                <li className="nav-item"><a className="nav-link Forms-nav-link-1 active" href="#!" onClick={(e) => { e.preventDefault(); tabEvent(e, "Forms-nav-Preview1", "Forms-tab-pane-1", "Forms-nav-link-1") }}>Preview</a></li>
                <li className="nav-item"><a className="nav-link Forms-nav-link-1" href="#!" onClick={(e) => { e.preventDefault(); tabEvent(e, "Forms-nav-Preview2", "Forms-tab-pane-1", "Forms-nav-link-1") }}>HTML</a></li>
            </ul>
            <div className="card mb-3">
                <div className="card-body tab-content">
                    <div className="tab-pane fade Forms-tab-pane-1 active show" id="Forms-nav-Preview1">
                        <div className="btn-toolbar">
                            <Dropdown>
                                <Dropdown.Toggle variant="" id="dropdown-basic" className="btn btn-secondary dropdown-toggle">
                                    Login Forms Dropdown
                                </Dropdown.Toggle>

                                <Dropdown.Menu as="div" className="p-3 text-muted border-0 shadow">
                                    <form className="px-2 py-2">
                                        <div className="mb-3">
                                            <label for="exampleDropdownFormEmail1" className="form-label">Email address</label>
                                            <input type="email" className="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com" />
                                        </div>
                                        <div className="mb-3">
                                            <label for="exampleDropdownFormPassword1" className="form-label">Password</label>
                                            <input type="password" className="form-control" id="exampleDropdownFormPassword1" placeholder="Password" />
                                        </div>
                                        <div className="mb-3">
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" id="dropdownCheck" />
                                                <label className="form-check-label" for="dropdownCheck">Remember me</label>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-primary">Sign in</button>
                                    </form>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#!">New around here? Sign up</a>
                                    <a className="dropdown-item" href="#!">Forgot password?</a>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                    <div className="tab-pane fade Forms-tab-pane-1" id="Forms-nav-Preview2">
                        <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                            {`<Dropdown>
    <Dropdown.Toggle variant="" id="dropdown-basic" className="btn btn-secondary dropdown-toggle">
    Login Forms Dropdown
    </Dropdown.Toggle>

    <Dropdown.Menu as="div" className="p-3 text-muted border-0 shadow">
        <form className="px-2 py-2">
            <div className="mb-3">
                <label for="exampleDropdownFormEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com"/>
            </div>
            <div className="mb-3">
                <label for="exampleDropdownFormPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleDropdownFormPassword1" placeholder="Password"/>
            </div>
            <div className="mb-3">
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="dropdownCheck"/>
                    <label className="form-check-label" for="dropdownCheck">Remember me</label>
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Sign in</button>
        </form>
        <div className="dropdown-divider"></div>
        <a className="dropdown-item" href="#!">New around here? Sign up</a>
        <a className="dropdown-item" href="#!">Forgot password?</a>
    </Dropdown.Menu>
</Dropdown>`}
                        </SyntaxHighlighter>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default FormsDropdown;