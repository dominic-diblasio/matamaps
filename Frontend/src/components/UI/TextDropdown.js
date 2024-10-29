import React from "react";
import { Dropdown } from "react-bootstrap";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function TextDropdown() {
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
            <h3 id="split-button">Text</h3>
            <p>Place any freeform text within a dropdown menu with text and use <a href="https://v5.getbootstrap.com/docs/5.0/utilities/spacing/">spacing utilities</a>. Note that you’ll likely need additional sizing styles to constrain the menu width.</p>

            <ul className="nav nav-tabs tab-card px-3 border-bottom-0" role="tablist">
                <li className="nav-item"><a className="nav-link text-nav-link-1 active" href="#!" onClick={(e) => { e.preventDefault(); tabEvent(e, "text-nav-Preview1", "text-tab-pane-1", "text-nav-link-1") }}>Preview</a></li>
                <li className="nav-item"><a className="nav-link text-nav-link-1" href="#!" onClick={(e) => { e.preventDefault(); tabEvent(e, "text-nav-Preview2", "text-tab-pane-1", "text-nav-link-1") }}>HTML</a></li>
            </ul>
            <div className="card mb-3">
                <div className="card-body tab-content">
                    <div className="tab-pane fade text-tab-pane-1 active show" id="text-nav-Preview1">
                        <div className="btn-toolbar">
                            <Dropdown>
                                <Dropdown.Toggle variant="" id="dropdown-basic" className="btn btn-secondary dropdown-toggle">
                                    Text Dropdown with div
                                </Dropdown.Toggle>

                                <Dropdown.Menu as="div" className="p-4 text-muted border-0 shadow show">
                                    <p>Some example text that's free-flowing within the dropdown menu.</p>
                                    <p className="mb-0">And this is more example text.</p>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                    <div className="tab-pane fade text-tab-pane-1" id="text-nav-Preview2">
                        <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                            {`<Dropdown>
    <Dropdown.Toggle variant="" id="dropdown-basic" className="btn btn-secondary dropdown-toggle">
    Text Dropdown with div
    </Dropdown.Toggle>

    <Dropdown.Menu as="div" className="p-4 text-muted border-0 shadow show">
    <p>Some example text that's free-flowing within the dropdown menu.</p>
    <p className="mb-0">And this is more example text.</p>
    </Dropdown.Menu>
</Dropdown>`}
                        </SyntaxHighlighter>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default TextDropdown;