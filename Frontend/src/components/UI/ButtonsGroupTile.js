import React from "react";
import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function ButtonsGroupTile() {

    const [isCheckbox1, setIsCheckbox1] = useState(true);
    const [isCheckbox2, setIsCheckbox2] = useState(false);
    const [isCheckbox3, setIsCheckbox3] = useState(false);
    const [isCheckRadio1, setIsCheckRadio1] = useState(false);
    const [isCheckRadio2, setIsCheckRadio2] = useState(false);
    const [isCheckRadio3, setIsCheckRadio3] = useState(false);

    return (
        <div className="col-lg-8 col-sm-12">
            <h2 id="basic-example">Basic example</h2>
            <p>Wrap a series of buttons with <code>.btn</code> in <code>.btn-group</code>.</p>
            <div className="bd-example mb-5">
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-primary">Left</button>
                    <button type="button" className="btn btn-primary">Middle</button>
                    <button type="button" className="btn btn-primary">Right</button>
                </div>
                <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                    {`<div className="btn-group" role="group" aria-label="Basic example">
    <button type="button" className="btn btn-primary">Left</button>
    <button type="button" className="btn btn-primary">Middle</button>
    <button type="button" className="btn btn-primary">Right</button>
</div>`}
                </SyntaxHighlighter>
            </div>

            <div className="bd-callout bd-callout-warning">
                <h5 id="ensure-correct-role-and-provide-a-label">Ensure correct <code>role</code> and provide a label</h5>
                <p>In order for assistive technologies (such as screen readers) to convey that a series of buttons is grouped, an appropriate <code>role</code> attribute needs to be provided. For button groups, this would be <code>role="group"</code>, while toolbars should have a <code>role="toolbar"</code>.</p>
                <p>In addition, groups and toolbars should be given an explicit label, as most assistive technologies will otherwise not announce them, despite the presence of the correct role attribute. In the examples provided here, we use <code>aria-label</code>, but alternatives such as <code>aria-labelledby</code> can also be used.</p>
            </div>

            <p>These classes can also be added to groups of links, as an alternative to the <a href="/docs/5.0/components/navs/"><code>.nav</code> navigation components</a>.</p>
            <div className="bd-example mb-5">
                <div className="btn-group">
                    <a href="#!" className="btn btn-primary active" aria-current="page">Active link</a>
                    <a href="#!" className="btn btn-primary">Link</a>
                    <a href="#!" className="btn btn-primary">Link</a>
                </div>
                <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                    {`<div className="btn-group">
    <a href="#" className="btn btn-primary active" aria-current="page">Active link</a>
    <a href="#" className="btn btn-primary">Link</a>
    <a href="#" className="btn btn-primary">Link</a>
</div>`}
                </SyntaxHighlighter>
            </div>

            <h2 id="mixed-styles">Mixed styles</h2>
            <div className="bd-example mb-5">
                <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                    <button type="button" className="btn btn-danger">Left</button>
                    <button type="button" className="btn btn-warning">Middle</button>
                    <button type="button" className="btn btn-success">Right</button>
                </div>
                <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                    {`<div className="btn-group" role="group" aria-label="Basic mixed styles example">
    <button type="button" className="btn btn-danger">Left</button>
    <button type="button" className="btn btn-warning">Middle</button>
    <button type="button" className="btn btn-success">Right</button>
</div>`}
                </SyntaxHighlighter>
            </div>

            <h2 id="outlined-styles">Outlined styles</h2>
            <div className="bd-example mb-5">
                <div className="btn-group" role="group" aria-label="Basic outlined example">
                    <button type="button" className="btn btn-outline-primary">Left</button>
                    <button type="button" className="btn btn-outline-primary">Middle</button>
                    <button type="button" className="btn btn-outline-primary">Right</button>
                </div>
                <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                    {`<div className="btn-group" role="group" aria-label="Basic outlined example">
    <button type="button" className="btn btn-outline-primary">Left</button>
    <button type="button" className="btn btn-outline-primary">Middle</button>
    <button type="button" className="btn btn-outline-primary">Right</button>
</div>`}
                </SyntaxHighlighter>
            </div>

            <h2 id="checkbox-and-radio-button-groups">Checkbox and radio button groups</h2>
            <p>Combine button-like checkbox and radio <a href="/docs/5.0/forms/checks-radios/">toggle buttons</a> into a seamless looking button group.</p>
            <div className="bd-example mb-5">
                <div className="btn-group" role="group" aria-label="Basic checkbox toggle button group">
                    <input type="checkbox" className="btn-check" id="btncheck1" checked={isCheckbox1} onChange={() => { setIsCheckbox1(!isCheckbox1); }} />
                    <label className="btn btn-outline-primary" onClick={() => { setIsCheckbox1(!isCheckbox1); }} >Checkbox 1</label>

                    <input type="checkbox" className="btn-check" id="btncheck2" checked={isCheckbox2} onChange={() => { setIsCheckbox2(!isCheckbox2) }} />
                    <label className="btn btn-outline-primary" onClick={() => { setIsCheckbox2(!isCheckbox2) }}>Checkbox 2</label>

                    <input type="checkbox" className="btn-check" id="btncheck3" checked={isCheckbox3} onChange={() => { setIsCheckbox3(!isCheckbox3) }} />
                    <label className="btn btn-outline-primary" onClick={() => { setIsCheckbox3(!isCheckbox3) }}>Checkbox 3</label>
                </div>
                <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                    {`<div className="btn-group" role="group" aria-label="Basic checkbox toggle button group">
    <input type="checkbox" className="btn-check" id="btncheck1" checked={isCheckbox1} onChange={()=>{ this.setState({ isCheckbox1:!isCheckbox1 }); }} />
    <label className="btn btn-outline-primary" >Checkbox 1</label>

    <input type="checkbox" className="btn-check" id="btncheck2" checked={isCheckbox2} onChange={()=>{ this.setState({ isCheckbox2:!isCheckbox2 }) }}/>
    <label className="btn btn-outline-primary">Checkbox 2</label>

    <input type="checkbox" className="btn-check" id="btncheck3" checked={isCheckbox3} onChange={()=>{ this.setState({ isCheckbox3:!isCheckbox3 }) }}/>
    <label className="btn btn-outline-primary">Checkbox 3</label>
</div>`}
                </SyntaxHighlighter>
            </div>
            <div className="bd-example mb-5">
                <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" className="btn-check" name="btnradio" id="btnradio1" checked={isCheckRadio1} onChange={() => { setIsCheckRadio1(!isCheckRadio1) }} />
                    <label className="btn btn-outline-primary" onClick={() => { setIsCheckRadio1(!isCheckRadio1) }}>Radio 1</label>

                    <input type="radio" className="btn-check" name="btnradio" id="btnradio2" checked={isCheckRadio2} onChange={() => { setIsCheckRadio2(!isCheckRadio2) }} />
                    <label className="btn btn-outline-primary" onClick={() => { setIsCheckRadio2(!isCheckRadio2) }}>Radio 2</label>

                    <input type="radio" className="btn-check" name="btnradio" id="btnradio3" checked={isCheckRadio3} onChange={() => { setIsCheckRadio3(!isCheckRadio3) }} />
                    <label className="btn btn-outline-primary" onClick={() => { setIsCheckRadio3(!isCheckRadio3) }}>Radio 3</label>
                </div>
                <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                    {`<div className="btn-group" role="group" aria-label="Basic radio toggle button group">
    <input type="radio" className="btn-check" name="btnradio" id="btnradio1" checked={isCheckRadio1} onChange={()=>{ this.setState({ isCheckRadio1:!isCheckRadio1 }) }} />
    <label className="btn btn-outline-primary" >Radio 1</label>

    <input type="radio" className="btn-check" name="btnradio" id="btnradio2" checked={isCheckRadio2} onChange={()=>{ this.setState({ isCheckRadio2:!isCheckRadio2 }) }}/>
    <label className="btn btn-outline-primary" >Radio 2</label>

    <input type="radio" className="btn-check" name="btnradio" id="btnradio3" checked={isCheckRadio3} onChange={()=>{ this.setState({ isCheckRadio3:!isCheckRadio3 }) }}/>
    <label className="btn btn-outline-primary" >Radio 3</label>
</div>`}
                </SyntaxHighlighter>
            </div>

            <h2 id="button-toolbar">Button toolbar</h2>
            <p>Combine sets of button groups into button toolbars for more complex components. Use utility classes as needed to space out groups, buttons, and more.</p>
            <div className="bd-example mb-5">
                <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                    <div className="btn-group me-2" role="group" aria-label="First group">
                        <button type="button" className="btn btn-primary">1</button>
                        <button type="button" className="btn btn-primary">2</button>
                        <button type="button" className="btn btn-primary">3</button>
                        <button type="button" className="btn btn-primary">4</button>
                    </div>
                    <div className="btn-group me-2" role="group" aria-label="Second group">
                        <button type="button" className="btn btn-secondary">5</button>
                        <button type="button" className="btn btn-secondary">6</button>
                        <button type="button" className="btn btn-secondary">7</button>
                    </div>
                    <div className="btn-group" role="group" aria-label="Third group">
                        <button type="button" className="btn btn-info">8</button>
                    </div>
                </div>
                <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                    {`<div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
    <div className="btn-group me-2" role="group" aria-label="First group">
        <button type="button" className="btn btn-primary">1</button>
        <button type="button" className="btn btn-primary">2</button>
        <button type="button" className="btn btn-primary">3</button>
        <button type="button" className="btn btn-primary">4</button>
    </div>
    <div className="btn-group me-2" role="group" aria-label="Second group">
        <button type="button" className="btn btn-secondary">5</button>
        <button type="button" className="btn btn-secondary">6</button>
        <button type="button" className="btn btn-secondary">7</button>
    </div>
    <div className="btn-group" role="group" aria-label="Third group">
        <button type="button" className="btn btn-info">8</button>
    </div>
</div>`}
                </SyntaxHighlighter>
            </div>

            <p>Feel free to mix input groups with button groups in your toolbars. Similar to the example above, you’ll likely need some utilities though to space things properly.</p>
            <div className="bd-example mb-5">
                <div className="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar with button groups">
                    <div className="btn-group me-2" role="group" aria-label="First group">
                        <button type="button" className="btn btn-outline-secondary">1</button>
                        <button type="button" className="btn btn-outline-secondary">2</button>
                        <button type="button" className="btn btn-outline-secondary">3</button>
                        <button type="button" className="btn btn-outline-secondary">4</button>
                    </div>
                    <div className="input-group">
                        <div className="input-group-text" id="btnGroupAddon">@</div>
                        <input type="text" className="form-control" placeholder="Input group example" aria-label="Input group example" aria-describedby="btnGroupAddon" />
                    </div>
                </div>

                <div className="btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups">
                    <div className="btn-group" role="group" aria-label="First group">
                        <button type="button" className="btn btn-outline-secondary">1</button>
                        <button type="button" className="btn btn-outline-secondary">2</button>
                        <button type="button" className="btn btn-outline-secondary">3</button>
                        <button type="button" className="btn btn-outline-secondary">4</button>
                    </div>
                    <div className="input-group">
                        <div className="input-group-text" id="btnGroupAddon2">@</div>
                        <input type="text" className="form-control" placeholder="Input group example" aria-label="Input group example" aria-describedby="btnGroupAddon2" />
                    </div>
                </div>
                <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                    {`<div className="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar with button groups">
    <div className="btn-group me-2" role="group" aria-label="First group">
        <button type="button" className="btn btn-outline-secondary">1</button>
        <button type="button" className="btn btn-outline-secondary">2</button>
        <button type="button" className="btn btn-outline-secondary">3</button>
        <button type="button" className="btn btn-outline-secondary">4</button>
    </div>
    <div className="input-group">
        <div className="input-group-text" id="btnGroupAddon">@</div>
        <input type="text" className="form-control" placeholder="Input group example" aria-label="Input group example" aria-describedby="btnGroupAddon">
    </div>
</div>

<div className="btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups">
    <div className="btn-group" role="group" aria-label="First group">
        <button type="button" className="btn btn-outline-secondary">1</button>
        <button type="button" className="btn btn-outline-secondary">2</button>
        <button type="button" className="btn btn-outline-secondary">3</button>
        <button type="button" className="btn btn-outline-secondary">4</button>
    </div>
        <div className="input-group">
        <div className="input-group-text" id="btnGroupAddon2">@</div>
        <input type="text" className="form-control" placeholder="Input group example" aria-label="Input group example" aria-describedby="btnGroupAddon2">
    </div>
</div>`}
                </SyntaxHighlighter>
            </div>

            <h2 id="sizing">Sizing</h2>
            <p>Instead of applying button sizing classes to every button in a group, just add <code>.btn-group-*</code> to each <code>.btn-group</code>, including each one when nesting multiple groups.</p>
            <div className="bd-example mb-5">
                <div className="btn-group btn-group-lg" role="group" aria-label="Large button group">
                    <button type="button" className="btn btn-outline-dark">Left</button>
                    <button type="button" className="btn btn-outline-dark">Middle</button>
                    <button type="button" className="btn btn-outline-dark">Right</button>
                </div>
                <div className="mt-2"></div>
                <div className="btn-group" role="group" aria-label="Default button group">
                    <button type="button" className="btn btn-outline-dark">Left</button>
                    <button type="button" className="btn btn-outline-dark">Middle</button>
                    <button type="button" className="btn btn-outline-dark">Right</button>
                </div>
                <div className="mt-2"></div>
                <div className="btn-group btn-group-sm" role="group" aria-label="Small button group">
                    <button type="button" className="btn btn-outline-dark">Left</button>
                    <button type="button" className="btn btn-outline-dark">Middle</button>
                    <button type="button" className="btn btn-outline-dark">Right</button>
                </div>
                <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                    {`<div className="btn-group btn-group-lg" role="group" aria-label="Large button group">
    <button type="button" className="btn btn-outline-dark">Left</button>
    <button type="button" className="btn btn-outline-dark">Middle</button>
    <button type="button" className="btn btn-outline-dark">Right</button>
</div>
<br>
<div className="btn-group" role="group" aria-label="Default button group">
    <button type="button" className="btn btn-outline-dark">Left</button>
    <button type="button" className="btn btn-outline-dark">Middle</button>
    <button type="button" className="btn btn-outline-dark">Right</button>
</div>
<br>
<div className="btn-group btn-group-sm" role="group" aria-label="Small button group">
    <button type="button" className="btn btn-outline-dark">Left</button>
    <button type="button" className="btn btn-outline-dark">Middle</button>
    <button type="button" className="btn btn-outline-dark">Right</button>
</div>`}
                </SyntaxHighlighter>
            </div>

            <h2 id="nesting">Nesting</h2>
            <p>Place a <code>.btn-group</code> within another <code>.btn-group</code> when you want dropdown menus mixed with a series of buttons.</p>
            <div className="bd-example mb-5">
                <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                    <button type="button" className="btn btn-primary">1</button>
                    <button type="button" className="btn btn-primary">2</button>
                    <Dropdown className="btn-group">
                        <Dropdown.Toggle as="button" variant="" id="" className="btn btn-primary">
                            Dropdown
                        </Dropdown.Toggle>

                        <Dropdown.Menu as="ul" className="border-0 shadow">
                            <li><a className="dropdown-item" href="#!">Dropdown link</a></li>
                            <li><a className="dropdown-item" href="#!">Dropdown link</a></li>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                    {`<div className="btn-group" role="group" aria-label="Button group with nested dropdown">
    <button type="button" className="btn btn-primary">1</button>
    <button type="button" className="btn btn-primary">2</button>
    <Dropdown className="btn-group">
        <Dropdown.Toggle as="button" variant="" id="" className="btn btn-primary">
            Dropdown
        </Dropdown.Toggle>

        <Dropdown.Menu as="ul" className="border-0 shadow">
            <li><a className="dropdown-item" href="#!">Dropdown link</a></li>
            <li><a className="dropdown-item" href="#!">Dropdown link</a></li>
        </Dropdown.Menu>
    </Dropdown>
</div>`}
                </SyntaxHighlighter>
            </div>

            <h2 id="vertical-variation">Vertical variation</h2>
            <p>Make a set of buttons appear vertically stacked rather than horizontally. <strong>Split button dropdowns are not supported here.</strong></p>
            <div className="bd-example mb-5">
                <div className="btn-group-vertical" role="group" aria-label="Vertical button group">
                    <button type="button" className="btn btn-dark">Button</button>
                    <button type="button" className="btn btn-dark">Button</button>
                    <button type="button" className="btn btn-dark">Button</button>
                    <button type="button" className="btn btn-dark">Button</button>
                    <button type="button" className="btn btn-dark">Button</button>
                    <button type="button" className="btn btn-dark">Button</button>
                </div>
                <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                    {`<div className="btn-group-vertical" role="group" aria-label="Vertical button group">
    <button type="button" className="btn btn-dark">Button</button>
    <button type="button" className="btn btn-dark">Button</button>
    <button type="button" className="btn btn-dark">Button</button>
    <button type="button" className="btn btn-dark">Button</button>
    <button type="button" className="btn btn-dark">Button</button>
    <button type="button" className="btn btn-dark">Button</button>
</div>`}
                </SyntaxHighlighter>
            </div>

            <div className="bd-example mb-5">
                <div className="btn-group-vertical" role="group" aria-label="Vertical button group">
                    <button type="button" className="btn btn-primary">Button</button>
                    <button type="button" className="btn btn-primary">Button</button>
                    <Dropdown className="btn-group">
                        <Dropdown.Toggle as="button" variant="" id="" className="btn btn-primary">
                            Dropdown
                        </Dropdown.Toggle>

                        <Dropdown.Menu as="ul" className="border-0 shadow">
                            <li><a className="dropdown-item" href="#!">Dropdown link</a></li>
                            <li><a className="dropdown-item" href="#!">Dropdown link</a></li>
                        </Dropdown.Menu>
                    </Dropdown>
                    <button type="button" className="btn btn-primary">Button</button>
                    <button type="button" className="btn btn-primary">Button</button>
                    <Dropdown className="btn-group">
                        <Dropdown.Toggle as="button" variant="" id="" className="btn btn-primary">
                            Dropdown
                        </Dropdown.Toggle>

                        <Dropdown.Menu as="ul" className="border-0 shadow">
                            <li><a className="dropdown-item" href="#!">Dropdown link</a></li>
                            <li><a className="dropdown-item" href="#!">Dropdown link</a></li>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="btn-group">
                        <Dropdown.Toggle as="button" variant="" id="" className="btn btn-primary">
                            Dropdown
                        </Dropdown.Toggle>

                        <Dropdown.Menu as="ul" className="border-0 shadow">
                            <li><a className="dropdown-item" href="#!">Dropdown link</a></li>
                            <li><a className="dropdown-item" href="#!">Dropdown link</a></li>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="btn-group">
                        <Dropdown.Toggle as="button" variant="" id="" className="btn btn-primary">
                            Dropdown
                        </Dropdown.Toggle>

                        <Dropdown.Menu as="ul" className="border-0 shadow">
                            <li><a className="dropdown-item" href="#!">Dropdown link</a></li>
                            <li><a className="dropdown-item" href="#!">Dropdown link</a></li>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                    {`<div className="btn-group-vertical" role="group" aria-label="Vertical button group">
    <button type="button" className="btn btn-primary">Button</button>
    <button type="button" className="btn btn-primary">Button</button>
    <Dropdown className="btn-group">
        <Dropdown.Toggle as="button" variant="" id="" className="btn btn-primary">
            Dropdown
        </Dropdown.Toggle>

        <Dropdown.Menu as="ul" className="border-0 shadow">
            <li><a className="dropdown-item" href="#!">Dropdown link</a></li>
            <li><a className="dropdown-item" href="#!">Dropdown link</a></li>
        </Dropdown.Menu>
    </Dropdown>
    <button type="button" className="btn btn-primary">Button</button>
    <button type="button" className="btn btn-primary">Button</button>
    <Dropdown className="btn-group">
        <Dropdown.Toggle as="button" variant="" id="" className="btn btn-primary">
            Dropdown
        </Dropdown.Toggle>

        <Dropdown.Menu as="ul" className="border-0 shadow">
            <li><a className="dropdown-item" href="#!">Dropdown link</a></li>
            <li><a className="dropdown-item" href="#!">Dropdown link</a></li>
        </Dropdown.Menu>
    </Dropdown>
    <Dropdown className="btn-group">
        <Dropdown.Toggle as="button" variant="" id="" className="btn btn-primary">
            Dropdown
        </Dropdown.Toggle>

        <Dropdown.Menu as="ul" className="border-0 shadow">
            <li><a className="dropdown-item" href="#!">Dropdown link</a></li>
            <li><a className="dropdown-item" href="#!">Dropdown link</a></li>
        </Dropdown.Menu>
    </Dropdown>
    <Dropdown className="btn-group">
        <Dropdown.Toggle as="button" variant="" id="" className="btn btn-primary">
            Dropdown
        </Dropdown.Toggle>

        <Dropdown.Menu as="ul" className="border-0 shadow">
            <li><a className="dropdown-item" href="#!">Dropdown link</a></li>
            <li><a className="dropdown-item" href="#!">Dropdown link</a></li>
        </Dropdown.Menu>
    </Dropdown>
</div>`}
                </SyntaxHighlighter>
            </div>
            <div className="bd-example">
                <div className="btn-group-vertical" role="group" aria-label="Vertical radio toggle button group">
                    <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-radio1" checked={isCheckRadio1} onChange={() => { setIsCheckRadio1(!isCheckRadio1) }} />
                    <label className="btn btn-outline-danger" onClick={() => { setIsCheckRadio1(!isCheckRadio1) }}>Radio 1</label>
                    <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-radio2" checked={isCheckRadio2} onChange={() => { setIsCheckRadio2(!isCheckRadio2) }} />
                    <label className="btn btn-outline-danger" onClick={() => { setIsCheckRadio2(!isCheckRadio2) }}>Radio 2</label>
                    <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-radio3" checked={isCheckRadio3} onChange={() => { setIsCheckRadio3(!isCheckRadio3) }} />
                    <label className="btn btn-outline-danger" onChange={() => { setIsCheckRadio3(!isCheckRadio3) }}>Radio 3</label>
                </div>
                <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                    {`<div className="btn-group-vertical" role="group" aria-label="Vertical radio toggle button group">
    <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-radio1" checked={isCheckRadio1} onChange={()=>{ this.setState({ isCheckRadio1:!isCheckRadio1 }) }}/>
    <label className="btn btn-outline-danger" >Radio 1</label>
    <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-radio2" checked={isCheckRadio2} onChange={()=>{ this.setState({ isCheckRadio2:!isCheckRadio2 }) }}/>
    <label className="btn btn-outline-danger" >Radio 2</label>
    <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-radio3" checked={isCheckRadio3} onChange={()=>{ this.setState({ isCheckRadio2:!isCheckRadio2 }) }}/>
    <label className="btn btn-outline-danger" >Radio 3</label>
</div>`}
                </SyntaxHighlighter>
            </div>

        </div>
    );
}


export default ButtonsGroupTile;