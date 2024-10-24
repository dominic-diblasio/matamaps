import React from "react";
import { Dropdown, Nav, Tab, Tabs } from "react-bootstrap";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function TabsNavs() {
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
            <h3 id="tabs">Tabs</h3>
            <p>Takes the basic nav from above and adds the <code>.nav-tabs</code> class to generate a tabbed interface.</p>
            <Tabs defaultActiveKey="Preview" transition={false} id="noanim-tab-example" className=" px-3 border-bottom-0">
                <Tab eventKey="Preview" title="Preview">
                    <div className="card mb-3">
                        <div className="card-body">
                            Takes the basic nav from above and adds the <code>.nav .nav-tabs .px-3 .border-bottom-0</code> class to generate a tabbed interface.
                        </div>
                    </div>
                </Tab>
                <Tab eventKey="html" title="HTML">
                    <div className="card mb-3">
                        <div className="card-body">
                            <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                                {`<Tabs defaultActiveKey="Preview" transition={false} id="noanim-tab-example" className=" px-3 border-bottom-0">
    <Tab eventKey="Preview" title="Preview">
        <div className="card mb-3">
            <div className="card-body">
                ...
            </div>
        </div>
    </Tab>
    <Tab eventKey="html" title="HTML">
        <div className="card mb-3">
            ...
        </div>
    </Tab>
    <Tab title="Link">
        
    </Tab>
    <Tab eventKey="disabled" title="Disabled" disabled>
        
    </Tab>
</Tabs>`}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                </Tab>
                <Tab title="Link">

                </Tab>
                <Tab eventKey="disabled" title="Disabled" disabled>

                </Tab>
            </Tabs>
            <div className="card mb-3">
                <div className="card-body">
                    <Tabs defaultActiveKey="Preview" transition={false} id="noanim-tab-example1" className=" tab-body-header rounded d-inline-flex">
                        <Tab eventKey="Preview" title="Preview">
                            <div className="card-body">
                                Takes the basic nav from above and adds the <code>.nav .nav-tabs </code> class to generate a tabbed interface.
                            </div>
                        </Tab>
                        <Tab eventKey="html" title="HTML">
                            <div className="card-body">
                                <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                                    {`<Tabs defaultActiveKey="Preview" transition={false} id="noanim-tab-example1" className=" tab-body-header rounded d-inline-flex">
<Tab eventKey="Preview" title="Preview">
    <div className="card mb-3">
        <div className="card-body">
            ...
        </div>
    </div>
</Tab>
<Tab eventKey="html" title="HTML">
    <div className="card mb-3">
        ...
    </div>
</Tab>
<Tab title="Link">
    
</Tab>
<Tab eventKey="disabled" title="Disabled" disabled>
    
</Tab>
</Tabs>`}
                                </SyntaxHighlighter>
                            </div>
                        </Tab>
                        <Tab title="Link">

                        </Tab>
                        <Tab eventKey="disabled" title="Disabled" disabled>

                        </Tab>
                    </Tabs>
                </div>
            </div>
            <div className="card mb-3">
                <div className="card-body">
                    <Tabs defaultActiveKey="Preview" transition={false} id="noanim-tab-example1" className=" tab-card">
                        <Tab eventKey="Preview" title="Preview">
                            <div className="card-body">
                                Takes the basic nav from above and adds the .nav nav-tabs .tab-card class to generate a tabbed interface.
                            </div>
                        </Tab>
                        <Tab eventKey="html" title="HTML">
                            <div className="card-body">
                                <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                                    {`<Tabs defaultActiveKey="Preview" transition={false} id="noanim-tab-example1" className=" tab-body-header rounded d-inline-flex">
    <Tab eventKey="Preview" title="Preview">
        <div className="card mb-3">
            <div className="card-body">
                ...
            </div>
        </div>
    </Tab>
    <Tab eventKey="html" title="HTML">
        <div className="card mb-3">
            ...
        </div>
    </Tab>
    <Tab title="Link">
        
    </Tab>
    <Tab eventKey="disabled" title="Disabled" disabled>
        
    </Tab>
    </Tabs>`}
                                </SyntaxHighlighter>
                            </div>
                        </Tab>
                        <Tab title="Link">

                        </Tab>
                        <Tab eventKey="disabled" title="Disabled" disabled>

                        </Tab>
                    </Tabs>
                </div>
            </div>
            <div className="card mb-3">
                <div className="card-body">
                    <Tab.Container id="left-tabs-example" defaultActiveKey="preview6" className="px-3">
                        <Nav variant="tabs" className="tab-card">
                            <Nav.Item>
                                <Nav.Link eventKey="preview6">Preview</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="HTML6">HTML</Nav.Link>
                            </Nav.Item>
                            <Dropdown as="li" className="nav-item">
                                <Dropdown.Toggle as="a" variant="" id="dropdown-basic" className="nav-link">
                                    Dropdown Button
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <li><a className="dropdown-item" href="#!">Action</a></li>
                                    <li><a className="dropdown-item" href="#!">Another action</a></li>
                                    <li><a className="dropdown-item" href="#!">Something else here</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#!">Separated link</a></li>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Nav.Item>
                                <Nav.Link >LINK</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link disabled>Disabled</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="preview6">
                                <div className="card-body">
                                    <div className="tab-pane fade tnodal-tab-link-4 active show" id="tnodal-nav-Preview4" role="tabpanel">
                                        Takes the basic nav from above and adds the <code>.nav nav-tabs .tab-card</code> class to generate a tabbed interface.
                                    </div>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="HTML6">
                                <div className="card-body">
                                    <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                                        {`<Tabs defaultActiveKey="Preview" transition={false} id="noanim-tab-example1" className=" tab-body-header rounded d-inline-flex">
            <Tab eventKey="Preview" title="Preview">
                <div className="card mb-3">
                    <div className="card-body">
                        ...
                    </div>
                </div>
            </Tab>
            <Tab eventKey="html" title="HTML">
                <div className="card mb-3">
                    ...
                </div>
            </Tab>
            <Tab title="Link">
                
            </Tab>
            <Tab eventKey="disabled" title="Disabled" disabled>
                
            </Tab>
            </Tabs>`}
                                    </SyntaxHighlighter>
                                </div>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </div>
            </div>

        </div>
    );
}


export default TabsNavs;