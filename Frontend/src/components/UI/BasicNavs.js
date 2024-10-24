import React from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function BasicNavs() {
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
            <ul className="nav nav-tabs tab-card px-3 border-bottom-0" role="tablist">
                <li className="nav-item"><a className="nav-link bnodal-nav-link-1 active" data-bs-toggle="tab" href="#!" onClick={(e) => { e.preventDefault(); tabEvent(e, "bnodal-nav-Preview1", "bnodal-tab-pane-1", "bnodal-nav-link-1") }}>Preview</a></li>
                <li className="nav-item"><a className="nav-link bnodal-nav-link-1" data-bs-toggle="tab" href="#!" onClick={(e) => { e.preventDefault(); tabEvent(e, "bnodal-nav-HTML1", "bnodal-tab-pane-1", "bnodal-nav-link-1") }}>HTML</a></li>
            </ul>
            <div className="card mb-3">
                <div className="card-body">
                    <div className="tab-content">
                        <div className="tab-pane fade bnodal-tab-pane-1 active show" id="bnodal-nav-Preview1" role="tabpanel">
                            <ul className="nav">
                                <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Active</a></li>
                                <li className="nav-item"><a className="nav-link" href="#!">Link</a></li>
                                <li className="nav-item"><a className="nav-link" href="#!">Link</a></li>
                                <li className="nav-item"><a className="nav-link disabled" href="#!" aria-disabled="true">Disabled</a></li>
                            </ul>
                            <ul className="nav justify-content-center">
                                <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Active</a></li>
                                <li className="nav-item"><a className="nav-link" href="#!">Link</a></li>
                                <li className="nav-item"><a className="nav-link" href="#!">Link</a></li>
                                <li className="nav-item"><a className="nav-link disabled" href="#!" aria-disabled="true">Disabled</a></li>
                            </ul>
                            <ul className="nav justify-content-end">
                                <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Active</a></li>
                                <li className="nav-item"><a className="nav-link" href="#!">Link</a></li>
                                <li className="nav-item"><a className="nav-link" href="#!">Link</a></li>
                                <li className="nav-item"><a className="nav-link disabled" href="#!" aria-disabled="true">Disabled</a></li>
                            </ul>
                        </div>
                        <div className="tab-pane fade bnodal-tab-pane-1" id="bnodal-nav-HTML1" role="tabpanel">
                            <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                                {`<!-- Nav: left alignment -->
<ul class="nav">
    <li class="nav-item"><a class="nav-link active" aria-current="page" href="#">Active</a></li>
    <li class="nav-item"><a class="nav-link" href="#">Link</a></li>
    <li class="nav-item"><a class="nav-link" href="#">Link</a></li>
    <li class="nav-item"><a class="nav-link disabled" href="#"  aria-disabled="true">Disabled</a></li>
</ul>

<!-- Nav: center alignment -->
<ul class="nav justify-content-center">
    <li class="nav-item"><a class="nav-link active" aria-current="page" href="#">Active</a></li>
    <li class="nav-item"><a class="nav-link" href="#">Link</a></li>
    <li class="nav-item"><a class="nav-link" href="#">Link</a></li>
    <li class="nav-item"><a class="nav-link disabled" href="#"  aria-disabled="true">Disabled</a></li>
</ul>

<!-- Nav: right alignment -->
<ul class="nav justify-content-end">
    <li class="nav-item"><a class="nav-link active" aria-current="page" href="#">Active</a></li>
    <li class="nav-item"><a class="nav-link" href="#">Link</a></li>
    <li class="nav-item"><a class="nav-link" href="#">Link</a></li>
    <li class="nav-item"><a class="nav-link disabled" href="#"  aria-disabled="true">Disabled</a></li>
</ul>`}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                </div>
            </div>

            <p>Classes are used throughout, so your markup can be super flexible. Use <code>&lt;ul&gt;</code>s like above, <code>&lt;ol&gt;</code> if the order of your items is important, or roll your own with a <code>&lt;nav&gt;</code> element. Because the <code>.nav</code> uses <code>display: flex</code>, the nav links behave the same as nav items would, but without the extra markup.</p>
            <ul className="nav nav-tabs tab-card px-3 border-bottom-0" role="tablist">
                <li className="nav-item"><a className="nav-link bnodal-nav-link-2 active" href="#nav-Preview2" onClick={(e) => { e.preventDefault(); this.tabEvent(e, "bnodal-nav-Preview2", "bnodal-tab-pane-2", "bnodal-nav-link-2") }}>Preview</a></li>
                <li className="nav-item"><a className="nav-link bnodal-nav-link-2" href="#nav-HTML2" onClick={(e) => { e.preventDefault(); this.tabEvent(e, "bnodal-nav-HTML2", "bnodal-tab-pane-2", "bnodal-nav-link-2") }} >HTML</a></li>
            </ul>
            <div className="card mb-3">
                <div className="card-body">
                    <div className="tab-content">
                        <div className="tab-pane fade active bnodal-tab-pane-2 show" id="bnodal-nav-Preview2" role="tabpanel">
                            <nav className="nav">
                                <a className="nav-link active" aria-current="page" href="#!">Active</a>
                                <a className="nav-link" href="#!">Link</a>
                                <a className="nav-link" href="#!">Link</a>
                                <a className="nav-link disabled" href="#!" aria-disabled="true">Disabled</a>
                            </nav>
                        </div>
                        <div className="tab-pane fade bnodal-tab-pane-2" id="bnodal-nav-HTML2" role="tabpanel">
                            <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                                {`<nav class="nav">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
    <a class="nav-link" href="#">Link</a>
    <a class="nav-link" href="#">Link</a>
    <a class="nav-link disabled" href="#"  aria-disabled="true">Disabled</a>
</nav>`}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                </div>
            </div>

            <ul className="nav nav-tabs tab-card px-3 border-bottom-0" role="tablist">
                <li className="nav-item"><a className="nav-link bnodal-nav-link-3 active" href="#nav-Preview3" onClick={(e) => { e.preventDefault(); tabEvent(e, "bnodal-nav-Preview3", "bnodal-tab-pane-3", "bnodal-nav-link-3") }}>Preview</a></li>
                <li className="nav-item"><a className="nav-link bnodal-nav-link-3" href="#nav-HTML3" onClick={(e) => { e.preventDefault(); tabEvent(e, "bnodal-nav-HTML3", "bnodal-tab-pane-3", "bnodal-nav-link-3") }}>HTML</a></li>
            </ul>
            <div className="card mb-3">
                <div className="card-body">
                    <div className="tab-content">
                        <div className="tab-pane fade bnodal-tab-pane-3 active show" id="bnodal-nav-Preview3" role="tabpanel">
                            <div className="row">
                                <div className="col-md-6 col-12">
                                    <ul className="nav flex-column">
                                        <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Active</a></li>
                                        <li className="nav-item"><a className="nav-link" href="#!">Link</a></li>
                                        <li className="nav-item"><a className="nav-link" href="#!">Link</a></li>
                                        <li className="nav-item"><a className="nav-link disabled" href="#!" aria-disabled="true">Disabled</a></li>
                                    </ul>
                                </div>
                                <div className="col-md-6 col-12">
                                    <nav className="nav flex-column">
                                        <a className="nav-link active" aria-current="page" href="#!">Active</a>
                                        <a className="nav-link" href="#!">Link</a>
                                        <a className="nav-link" href="#!">Link</a>
                                        <a className="nav-link disabled" href="#!" aria-disabled="true">Disabled</a>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade bnodal-tab-pane-3" id="bnodal-nav-HTML3" role="tabpanel">
                            <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                                {`<ul class="nav flex-column">
    <li class="nav-item"><a class="nav-link active" aria-current="page" href="#">Active</a></li>
    <li class="nav-item"><a class="nav-link" href="#">Link</a></li>
    <li class="nav-item"><a class="nav-link" href="#">Link</a></li>
    <li class="nav-item"><a class="nav-link disabled" href="#"  aria-disabled="true">Disabled</a></li>
</ul>

<nav class="nav flex-column">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
    <a class="nav-link" href="#">Link</a>
    <a class="nav-link" href="#">Link</a>
    <a class="nav-link disabled" href="#"  aria-disabled="true">Disabled</a>
</nav>`}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default BasicNavs;