import React from "react";
import { Dropdown, SplitButton } from "react-bootstrap";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function SplitButtonDropdown() {
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
            <h3 id="split-button">Split button</h3>
            <p>Similarly, create split button dropdowns with virtually the same markup as single button dropdowns, but with the addition of <code>.dropdown-toggle-split</code> for proper spacing around the dropdown caret.</p>
            <p>We use this extra class to reduce the horizontal <code>padding</code> on either side of the caret by 25% and remove the <code>margin-left</code> that’s added for regular button dropdowns. Those extra changes keep the caret centered in the split button and provide a more appropriately sized hit area next to the main button.</p>
            <ul className="nav nav-tabs tab-card px-3 border-bottom-0" role="tablist">
                <li className="nav-item"><a className="nav-link split-nav-link-1 active" href="#!" onClick={(e) => { e.preventDefault(); tabEvent(e, "split-nav-Preview1", "split-tab-pane-1", "split-nav-link-1") }}>Preview</a></li>
                <li className="nav-item"><a className="nav-link split-nav-link-1" href="#!" onClick={(e) => { e.preventDefault(); tabEvent(e, "split-nav-Preview2", "split-tab-pane-1", "split-nav-link-1") }}>HTML</a></li>
            </ul>
            <div className="card mb-3">
                <div className="card-body tab-content">
                    <div className="tab-pane fade split-tab-pane-1 active show" id="split-nav-Preview1">
                        {['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Danger'].map(
                            (variant) => (
                                <SplitButton
                                    key={variant}
                                    id={`dropdown-split-variants-${variant}`}
                                    variant={variant.toLowerCase()}
                                    title={variant}
                                    className="me-2"
                                >
                                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                    <Dropdown.Item eventKey="3" >Something else here</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                </SplitButton>
                            ),
                        )}
                    </div>
                    <div className="tab-pane fade split-tab-pane-1" id="split-nav-Preview2">
                        <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                            {`{['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Danger'].map(
    (variant) => (
    <SplitButton
        key={variant}
        id={'dropdown-split-variants-'+ variant}
        variant={variant.toLowerCase()}
        title={variant}
        className="me-2"
    >
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3" >Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
    </SplitButton>
    ),
)}`}
                        </SyntaxHighlighter>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default SplitButtonDropdown;