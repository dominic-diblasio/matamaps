import React from "react";
import { Dropdown, SplitButton } from "react-bootstrap";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function SizingDropdown() {
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
            <h3 id="split-button">Sizing</h3>
            <p>Button dropdowns work with buttons of all sizes, including default and split dropdown buttons.</p>

            <ul className="nav nav-tabs tab-card px-3 border-bottom-0" role="tablist">
                <li className="nav-item"><a className="nav-link sizing-nav-link-1 active" href="#!" onClick={(e) => { e.preventDefault(); tabEvent(e, "sizing-nav-Preview1", "sizing-tab-pane-1", "sizing-nav-link-1") }}>Preview</a></li>
                <li className="nav-item"><a className="nav-link sizing-nav-link-1" href="#!" onClick={(e) => { e.preventDefault(); tabEvent(e, "sizing-nav-Preview2", "sizing-tab-pane-1", "sizing-nav-link-1") }}>HTML</a></li>
            </ul>
            <div className="card mb-3">
                <div className="card-body tab-content">
                    <div className="tab-pane fade sizing-tab-pane-1 active show" id="sizing-nav-Preview1">
                        <div className="btn-toolbar">
                            <Dropdown>
                                <Dropdown.Toggle variant="" id="dropdown-basic" className="btn btn-secondary btn-lg dropdown-toggle">
                                    Large button
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#!">Separated link</a></li>
                                </Dropdown.Menu>
                            </Dropdown>

                            <SplitButton
                                id={`dropdown-split-variants-1`}
                                variant={"secondary"}
                                title={"Large split button"}
                                className="ms-2"
                            >
                                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                <Dropdown.Item eventKey="3" >Something else</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                            </SplitButton>
                        </div>
                        <div className="btn-toolbar mt-2">
                            <Dropdown>
                                <Dropdown.Toggle variant="" id="dropdown-basic" className="btn btn-secondary btn-sm dropdown-toggle">
                                    Small button
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#!">Separated link</a></li>
                                </Dropdown.Menu>
                            </Dropdown>

                            <SplitButton
                                id={`dropdown-split-variants-1`}
                                variant={"secondary"}
                                title={"Small split button"}
                                className="ms-2"
                                size="sm"
                            >
                                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                <Dropdown.Item eventKey="3" >Something else</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                            </SplitButton>
                        </div>
                    </div>
                    <div className="tab-pane fade sizing-tab-pane-1" id="sizing-nav-Preview2">
                        <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                            {`<Dropdown>
    <Dropdown.Toggle variant="" id="dropdown-basic" className="btn btn-secondary btn-lg dropdown-toggle">
    Large button
    </Dropdown.Toggle>

    <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        <li><hr className="dropdown-divider"/></li>
        <li><a className="dropdown-item" href="#!">Separated link</a></li>
    </Dropdown.Menu>
</Dropdown>

<SplitButton
        id='dropdown-split-variants-1'
        variant={"secondary"}
        title={"Large split button"}
        className="ms-2">
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3" >Something else</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
    </SplitButton>
</div>
<div className="btn-toolbar mt-2">
<Dropdown>
    <Dropdown.Toggle variant="" id="dropdown-basic" className="btn btn-secondary btn-sm dropdown-toggle">
    Small button
    </Dropdown.Toggle>

    <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        <li><hr className="dropdown-divider"/></li>
        <li><a className="dropdown-item" href="#!">Separated link</a></li>
    </Dropdown.Menu>
</Dropdown>

<SplitButton
        id='dropdown-split-variants-1'
        variant={"secondary"}
        title={"Small split button"}
        className="ms-2"
        size="sm">
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3" >Something else</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
    </SplitButton>`}
                        </SyntaxHighlighter>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default SizingDropdown;