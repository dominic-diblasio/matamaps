import React from "react";
import { Nav, Tab } from "react-bootstrap";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function CollapseTile() {
    function callopsEvent(id, id1, id2) {
        var divis = document.getElementById(id)
        if (divis) {
            if (divis.classList.contains("show")) {
                divis.classList.remove("show")
            } else {
                divis.classList.add("show")
            }
        }
        if (id1) {
            var divis1 = document.getElementById(id1)
            divis1.classList.remove("show")
        }
        if (id2) {
            var divis2 = document.getElementById(id2)
            divis2.classList.remove("show")
        }
    }

    return (
        <div className="col-lg-8 col-sm-12">
            <div className="card">
                <div className="card-body">
                    <h2 id="how-it-works">How it works</h2>
                    <p>The collapse JavaScript plugin is used to show and hide content. Buttons or anchors are used as triggers that are mapped to specific elements you toggle. Collapsing an element will animate the <code>height</code> from its current value to <code>0</code>. Given how CSS handles animations, you cannot use <code>padding</code> on a <code>.collapse</code> element. Instead, use the class as an independent wrapping element.</p>
                    <div className="card card-callout mb-3">
                        <div className="card-body">
                            The animation effect of this component is dependent on the <code>prefers-reduced-motion</code> media query. See the <a href="https://v5.getbootstrap.com/docs/5.0/getting-started/accessibility/#reduced-motion">reduced motion section of our accessibility documentation</a>.
                        </div>
                    </div>
                    <h2 id="example">Example</h2>
                    <p>Click the buttons below to show and hide another element via class changes:</p>
                    <ul>
                        <li><code>.collapse</code> hides content</li>
                        <li><code>.collapsing</code> is applied during transitions</li>
                        <li><code>.collapse.show</code> shows content</li>
                    </ul>
                    <p>You can use a link with the <code>href</code> attribute, or a button with the <code>data-target</code> attribute. In both cases, the <code>data-bs-toggle="collapse"</code> is required.</p>
                    <div className="bd-example mb-5">
                        <Tab.Container id="left-tabs-example" defaultActiveKey="preview1" className="px-3">
                            <Nav variant="tabs" className="tab-card">
                                <Nav.Item>
                                    <Nav.Link eventKey="preview1">Preview</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="javascript1">JAVASCRIPT</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="html1">HTML</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="preview1">
                                    <div className="card-body">
                                        <p>
                                            <a className="btn btn-primary collapsed me-2" href="#!" onClick={(e) => { e.preventDefault(); callopsEvent("collapseExample") }}>
                                                Link with href
                                            </a>
                                            <button className="btn btn-primary collapsed" type="button" onClick={() => { callopsEvent("collapseExample") }}>
                                                Button with data-target
                                            </button>
                                        </p>
                                        <div className="collapse " id="collapseExample" >
                                            <div className="card card-body">
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                            </div>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="javascript1">
                                    <div className="card-body">
                                        <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                                            {`
callopsEvent(id,id1,id2){
    var divis =  document.getElementById(id)
    if(divis){
        if(divis.classList.contains("show")){
            divis.classList.remove("show")
        } else{
            divis.classList.add("show")
        }
    }
    if(id1){
        var divis1 =  document.getElementById(id1)
        divis1.classList.remove("show")
    }
    if(id2){
        var divis2 =  document.getElementById(id2)
        divis2.classList.remove("show")
    }
}
                                    `}
                                        </SyntaxHighlighter>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="html1">
                                    <div className="card-body">
                                        <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                                            {` <p>
    <a className="btn btn-primary collapsed me-2"  href="#!" onClick={(e)=>{ e.preventDefault(); this.callopsEvent("collapseExample")}}>
        Link with href
    </a>
    <button className="btn btn-primary collapsed" type="button" onClick={()=>{ this.callopsEvent("collapseExample")}}>
        Button with data-target
    </button>
</p>
<div className="collapse " id="collapseExample" >
        <div className="card card-body">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
        </div>
</div>`}
                                        </SyntaxHighlighter>
                                    </div>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>


                    </div>
                    <h2 id="multiple-targets">Multiple targets</h2>
                    <p>A <code>&lt;button&gt;</code> or <code>&lt;a&gt;</code> can show and hide multiple elements by referencing them with a selector in its <code>href</code> or <code>data-target</code> attribute.
                        Multiple <code>&lt;button&gt;</code> or <code>&lt;a&gt;</code> can show and hide an element if they each reference it with their <code>href</code> or <code>data-target</code> attribute</p>
                    <div className="bd-example mb-5">
                        <Tab.Container id="left-tabs-example" defaultActiveKey="preview1" className="px-3">
                            <Nav variant="tabs" className="tab-card">
                                <Nav.Item>
                                    <Nav.Link eventKey="preview1">Preview</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="javascript1">JAVASCRIPT</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="html1">HTML</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="preview1">
                                    <div className="card-body">
                                        <p>
                                            <a className="btn btn-primary me-2" href="#!" onClick={(e) => { e.preventDefault(); callopsEvent("multiCollapseExample1") }}>Toggle first element</a>
                                            <button className="btn btn-primary me-2" onClick={() => { callopsEvent("multiCollapseExample2") }}>Toggle second element</button>
                                            <button className="btn btn-primary" onClick={() => { callopsEvent("multiCollapseExample1"); callopsEvent("multiCollapseExample2") }}>Toggle both elements</button>
                                        </p>
                                        <div className="row">
                                            <div className="col">
                                                <div className="multi-collapse collapse" id="multiCollapseExample1" >
                                                    <div className="card card-body">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="multi-collapse collapse" id="multiCollapseExample2" >
                                                    <div className="card card-body">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="javascript1">
                                    <div className="card-body">
                                        <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                                            {`
callopsEvent(id,id1,id2){
    var divis =  document.getElementById(id)
    if(divis){
        if(divis.classList.contains("show")){
            divis.classList.remove("show")
        } else{
            divis.classList.add("show")
        }
    }
    if(id1){
        var divis1 =  document.getElementById(id1)
        divis1.classList.remove("show")
    }
    if(id2){
        var divis2 =  document.getElementById(id2)
        divis2.classList.remove("show")
    }
}
                                    `}
                                        </SyntaxHighlighter>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="html1">
                                    <div className="card-body">
                                        <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                                            {`<p>
    <a className="btn btn-primary me-2" href="#!"  onClick={(e)=>{ e.preventDefault(); this.callopsEvent("multiCollapseExample1")}}>Toggle first element</a>
    <button className="btn btn-primary me-2" onClick={()=>{ this.callopsEvent("multiCollapseExample2")}}>Toggle second element</button>
    <button className="btn btn-primary" onClick={()=>{ this.callopsEvent("multiCollapseExample1"); this.callopsEvent("multiCollapseExample2")}}>Toggle both elements</button>
</p>
<div className="row">
    <div className="col">
        <div className="multi-collapse collapse" id="multiCollapseExample1" >
            <div className="card card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
            </div>
        </div>
    </div>
    <div className="col">
        <div className="multi-collapse collapse" id="multiCollapseExample2" >
            <div className="card card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
            </div>
        </div>
    </div>
</div>`}
                                        </SyntaxHighlighter>
                                    </div>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </div>
                    <h2 id="accordion-example">Accordion example</h2>
                    <p>Using the <a href="https://v5.getbootstrap.com/docs/5.0/components/card/">card</a> component, you can extend the default collapse behavior to create an accordion. To properly achieve the accordion style, be sure to use <code>.accordion</code> as a wrapper.</p>
                    <div className="bd-example mb-5">
                        <Tab.Container id="left-tabs-example" defaultActiveKey="preview1" className="px-3">
                            <Nav variant="tabs" className="tab-card">
                                <Nav.Item>
                                    <Nav.Link eventKey="preview1">Preview</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="javascript1">JAVASCRIPT</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="html1">HTML</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="preview1">
                                    <div className="card-body">
                                        <div className="accordion" id="accordionExample">
                                            <div className="card">
                                                <div className="card-header p-0" id="headingOne">
                                                    <h2 className="mb-0">
                                                        <button className="btn btn-light btn-block text-start p-3 rounded-0" onClick={() => { callopsEvent("collapseOne", "collapseTwo", "collapseThree"); }}>
                                                            Collapsible Group Item #1
                                                        </button>
                                                    </h2>
                                                </div>

                                                <div id="collapseOne" className="collapse show" data-parent="#accordionExample">
                                                    <div className="card-body">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-header p-0" id="headingTwo">
                                                    <h2 className="mb-0">
                                                        <button className="btn btn-light btn-block text-start collapsed p-3 rounded-0" onClick={() => { callopsEvent("collapseTwo", "collapseOne", "collapseThree"); }}>
                                                            Collapsible Group Item #2
                                                        </button>
                                                    </h2>
                                                </div>
                                                <div id="collapseTwo" className="collapse" data-parent="#accordionExample">
                                                    <div className="card-body">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-header p-0" >
                                                    <h2 className="mb-0">
                                                        <button className="btn btn-light btn-block text-start collapsed p-3 rounded-0" onClick={() => { callopsEvent("collapseThree", "collapseTwo", "collapseOne"); }}>
                                                            Collapsible Group Item #3
                                                        </button>
                                                    </h2>
                                                </div>
                                                <div id="collapseThree" className="collapse" data-parent="#accordionExample">
                                                    <div className="card-body">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="javascript1">
                                    <div className="card-body">
                                        <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                                            {`
callopsEvent(id,id1,id2){
    var divis =  document.getElementById(id)
    if(divis){
        if(divis.classList.contains("show")){
            divis.classList.remove("show")
        } else{
            divis.classList.add("show")
        }
    }
    if(id1){
        var divis1 =  document.getElementById(id1)
        divis1.classList.remove("show")
    }
    if(id2){
        var divis2 =  document.getElementById(id2)
        divis2.classList.remove("show")
    }
}
                                    `}
                                        </SyntaxHighlighter>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="html1">
                                    <div className="card-body">
                                        <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                                            {`<div className="accordion" id="accordionExample">
    <div className="card">
        <div className="card-header p-0" id="headingOne">
            <h2 className="mb-0">
                <button className="btn btn-light btn-block text-start p-3 rounded-0" onClick={()=>{ this.callopsEvent("collapseOne","collapseTwo","collapseThree");}}>
                    Collapsible Group Item #1
                </button>
            </h2>
        </div>
    
        <div id="collapseOne" className="collapse show" data-parent="#accordionExample">
            <div className="card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </div>
        </div>
    </div>
    <div className="card">
        <div className="card-header p-0" id="headingTwo">
            <h2 className="mb-0">
                <button className="btn btn-light btn-block text-start collapsed p-3 rounded-0" onClick={()=>{ this.callopsEvent("collapseTwo","collapseOne","collapseThree"); }}>
                    Collapsible Group Item #2
                </button>
            </h2>
        </div>
        <div id="collapseTwo" className="collapse"  data-parent="#accordionExample">
            <div className="card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </div>
        </div>
    </div>
    <div className="card">
        <div className="card-header p-0" >
            <h2 className="mb-0">
                <button className="btn btn-light btn-block text-start collapsed p-3 rounded-0" onClick={()=>{ this.callopsEvent("collapseThree","collapseTwo","collapseOne");}}>
                    Collapsible Group Item #3
                </button>
            </h2>
        </div>
        <div id="collapseThree" className="collapse"  data-parent="#accordionExample">
            <div className="card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </div>
        </div>
    </div>
</div>`}
                                        </SyntaxHighlighter>
                                    </div>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </div>
                    <h2 id="accessibility">Accessibility</h2>
                    <p>Be sure to add <code>aria-expanded</code> to the control element. This attribute explicitly conveys the current state of the collapsible element tied to the control to screen readers and similar assistive technologies. If the collapsible element is closed by default, the attribute on the control element should have a value of <code>aria-expanded="false"</code>. If you’ve set the collapsible element to be open by default using the <code>show</code> class, set <code>aria-expanded="true"</code> on the control instead. The plugin will automatically toggle this attribute on the control based on whether or not the collapsible element has been opened or closed (via JavaScript, or because the user triggered another control element also tied to the same collapsible element). If the control element’s HTML element is not a button (e.g., an <code>&lt;a&gt;</code> or <code>&lt;div&gt;</code>), the attribute <code>role="button"</code> should be added to the element.</p>
                    <p>If your control element is targeting a single collapsible element – i.e. the <code>data-target</code> attribute is pointing to an <code>id</code> selector – you should add the <code>aria-controls</code> attribute to the control element, containing the <code>id</code> of the collapsible element. Modern screen readers and similar assistive technologies make use of this attribute to provide users with additional shortcuts to navigate directly to the collapsible element itself.</p>
                    <p>Note that Bootstrap’s current implementation does not cover the various <em>optional</em> keyboard interactions described in the <a href="https://www.w3.org/TR/wai-aria-practices-1.1/#accordion">WAI-ARIA Authoring Practices 1.1 accordion pattern</a> - you will need to include these yourself with custom JavaScript.</p>
                    <h2 id="usage">Usage</h2>
                    <p>The collapse plugin utilizes a few classes to handle the heavy lifting:</p>
                    <ul>
                        <li><code>.collapse</code> hides the content</li>
                        <li><code>.collapse.show</code> shows the content</li>
                        <li><code>.collapsing</code> is added when the transition starts, and removed when it finishes</li>
                    </ul>
                    <p>These classes can be found in <code>_transitions.scss</code>.</p>
                    <h3 id="via-data-attributes">Via data attributes</h3>
                    <p>Just add <code>data-bs-toggle="collapse"</code> and a <code>data-target</code> to the element to automatically assign control of one or more collapsible elements. The <code>data-target</code> attribute accepts a CSS selector to apply the collapse to. Be sure to add the class <code>collapse</code> to the collapsible element. If you’d like it to default open, add the additional class <code>show</code>.</p>
                    <p>To add accordion-like group management to a collapsible area, add the data attribute <code>data-parent="#selector"</code>. Refer to the demo to see this in action.</p>
                    <h3 id="via-javascript">Via JavaScript</h3>
                    <p>Enable manually with:</p>
                    <div className="bd-example mb-5">
                        <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                            {`var collapseElementList = [].slice.call(document.querySelectorAll('.collapse'))
var collapseList = collapseElementList.map(function (collapseEl) {
    return new bootstrap.Collapse(collapseEl)
})`}
                        </SyntaxHighlighter>
                    </div>
                    <h3 id="options">Options</h3>
                    <p>Options can be passed via data attributes or JavaScript. For data attributes, append the option name to <code>data-</code>, as in <code>data-parent=""</code>.</p>
                    <table className="table">
                        <thead>
                            <tr>
                                <th >Name</th>
                                <th>Type</th>
                                <th>Default</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><code>parent</code></td>
                                <td>selector | jQuery object | DOM element </td>
                                <td><code>false</code></td>
                                <td>If parent is provided, then all collapsible elements under the specified parent will be closed when this collapsible item is shown. (similar to traditional accordion behavior - this is dependent on the <code>card</code> class). The attribute has to be set on the target collapsible area.</td>
                            </tr>
                            <tr>
                                <td><code>toggle</code></td>
                                <td>boolean</td>
                                <td><code>true</code></td>
                                <td>Toggles the collapsible element on invocation</td>
                            </tr>
                        </tbody>
                    </table>
                    <h3 id="methods">Methods</h3>
                    <div className="card card-callout mb-3">
                        <div className="card-body">
                            <h4 id="asynchronous-methods-and-transitions">Asynchronous methods and transitions</h4>
                            <p>All API methods are <strong>asynchronous</strong> and start a <strong>transition</strong>. They return to the caller as soon as the transition is started but <strong>before it ends</strong>. In addition, a method call on a <strong>transitioning component will be ignored</strong>.</p>
                            <p><a href="/docs/5.0/getting-started/javascript/#asynchronous-functions-and-transitions">See our JavaScript documentation for more information</a>.</p>
                        </div>
                    </div>
                    <p>Activates your content as a collapsible element. Accepts an optional options <code>object</code>.</p>
                    <p>You can create a collapse instance with the constructor, for example:</p>
                    <div className="bd-example mb-5">
                        <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                            {`var myCollapse = document.getElementById('myCollapse')
var bsCollapse = new bootstrap.Collapse(myCollapse, {
    toggle: false
})`}
                        </SyntaxHighlighter>
                    </div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Method</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><code>toggle</code></td>
                                <td>Toggles a collapsible element to shown or hidden. <strong>Returns to the caller before the collapsible element has actually been shown or hidden</strong> (i.e. before the <code>shown.bs.collapse</code> or <code>hidden.bs.collapse</code> event occurs).</td>
                            </tr>
                            <tr>
                                <td><code>show</code></td>
                                <td>Shows a collapsible element. <strong>Returns to the caller before the collapsible element has actually been shown</strong> (e.g., before the <code>shown.bs.collapse</code> event occurs). </td>
                            </tr>
                            <tr>
                                <td><code>hide</code></td>
                                <td>Hides a collapsible element. <strong>Returns to the caller before the collapsible element has actually been hidden</strong> (e.g., before the <code>hidden.bs.collapse</code> event occurs).</td>
                            </tr>
                            <tr>
                                <td><code>dispose</code></td>
                                <td>Destroys an element's collapse.</td>
                            </tr>
                            <tr>
                                <td><code>getInstance</code></td>
                                <td>Static method which allows you to get the collapse instance associated with a DOM element.</td>
                            </tr>
                        </tbody>
                    </table>
                    <h3 id="events">Events</h3>
                    <p>Bootstrap’s collapse class exposes a few events for hooking into collapse functionality.</p>
                    <table className="table">
                        <thead>
                            <tr>
                                <th >Event type</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><code>show.bs.collapse</code></td>
                                <td>This event fires immediately when the <code>show</code> instance method is called.</td>
                            </tr>
                            <tr>
                                <td><code>shown.bs.collapse</code></td>
                                <td>This event is fired when a collapse element has been made visible to the user (will wait for CSS transitions to complete).</td>
                            </tr>
                            <tr>
                                <td><code>hide.bs.collapse</code></td>
                                <td>This event is fired immediately when the <code>hide</code> method has been called.</td>
                            </tr>
                            <tr>
                                <td><code>hidden.bs.collapse</code></td>
                                <td>This event is fired when a collapse element has been hidden from the user (will wait for CSS transitions to complete).</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="bd-example mb-5">
                        <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                            {`var myCollapsible = document.getElementById('myCollapsible')
myCollapsible.addEventListener('hidden.bs.collapse', function () {
    // do something...
})`}
                        </SyntaxHighlighter>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default CollapseTile;