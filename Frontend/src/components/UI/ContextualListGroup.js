import React from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function ContextualListGroup() {
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
            <h2 id="contextual-classes">Contextual classes</h2>
            <p>Use contextual classes to style list items with a stateful background and color.</p>
            <p>Contextual classes also work with <code>.list-group-item-action</code>. Note the addition of the hover styles here not present in the previous example. Also supported is the <code>.active</code> state; apply it to indicate an active selection on a contextual list group item.</p>
            <ul className="nav nav-tabs tab-card px-3 border-bottom-0" role="tablist">
                <li className="nav-item"><a className="nav-link contextual-nav-link-1 active" href="#!" onClick={(e) => { e.preventDefault(); tabEvent(e, "contextual-nav-Preview1", "contextual-tab-pane-1", "contextual-nav-link-1") }}>Preview</a></li>
                <li className="nav-item"><a className="nav-link contextual-nav-link-1" href="#!" onClick={(e) => { e.preventDefault(); tabEvent(e, "contextual-nav-HTML1", "contextual-tab-pane-1", "contextual-nav-link-1") }}>HTML</a></li>
            </ul>
            <div className="card mb-3 bg-transparent">
                <div className="card-body">
                    <div className="tab-content">
                        <div className="tab-pane fade contextual-tab-pane-1 show active" id="contextual-nav-Preview1" role="tabpanel">
                            <div className="row">
                                <div className="col-lg-6 col-md-12">
                                    <p>Simple list group</p>
                                    <ul className="list-group">
                                        <li className="list-group-item">Dapibus ac facilisis in</li>

                                        <li className="list-group-item list-group-item-primary">A simple primary list group item</li>
                                        <li className="list-group-item list-group-item-secondary">A simple secondary list group item</li>
                                        <li className="list-group-item list-group-item-success">A simple success list group item</li>
                                        <li className="list-group-item list-group-item-danger">A simple danger list group item</li>
                                        <li className="list-group-item list-group-item-warning">A simple warning list group item</li>
                                        <li className="list-group-item list-group-item-info">A simple info list group item</li>
                                        <li className="list-group-item list-group-item-light">A simple light list group item</li>
                                        <li className="list-group-item list-group-item-dark">A simple dark list group item</li>
                                    </ul>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <p>list gorup with Anchor Link tag</p>
                                    <div className="list-group">
                                        <a href="#!" className="list-group-item list-group-item-action">Dapibus ac facilisis in</a>

                                        <a href="#!" className="list-group-item list-group-item-action list-group-item-primary">A simple primary list group item</a>
                                        <a href="#!" className="list-group-item list-group-item-action list-group-item-secondary">A simple secondary list group item</a>
                                        <a href="#!" className="list-group-item list-group-item-action list-group-item-success">A simple success list group item</a>
                                        <a href="#!" className="list-group-item list-group-item-action list-group-item-danger">A simple danger list group item</a>
                                        <a href="#!" className="list-group-item list-group-item-action list-group-item-warning">A simple warning list group item</a>
                                        <a href="#!" className="list-group-item list-group-item-action list-group-item-info">A simple info list group item</a>
                                        <a href="#!" className="list-group-item list-group-item-action list-group-item-light">A simple light list group item</a>
                                        <a href="#!" className="list-group-item list-group-item-action list-group-item-dark">A simple dark list group item</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade contextual-tab-pane-1" id="contextual-nav-HTML1" role="tabpanel">
                            <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                                {`<ul className="list-group">
    <li className="list-group-item">Dapibus ac facilisis in</li>
    
    <li className="list-group-item list-group-item-primary">A simple primary list group item</li>
    <li className="list-group-item list-group-item-secondary">A simple secondary list group item</li>
    <li className="list-group-item list-group-item-success">A simple success list group item</li>
    <li className="list-group-item list-group-item-danger">A simple danger list group item</li>
    <li className="list-group-item list-group-item-warning">A simple warning list group item</li>
    <li className="list-group-item list-group-item-info">A simple info list group item</li>
    <li className="list-group-item list-group-item-light">A simple light list group item</li>
    <li className="list-group-item list-group-item-dark">A simple dark list group item</li>
</ul>

<div className="list-group">
    <a href="#!" className="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
    
    <a href="#!" className="list-group-item list-group-item-action list-group-item-primary">A simple primary list group item</a>
    <a href="#!" className="list-group-item list-group-item-action list-group-item-secondary">A simple secondary list group item</a>
    <a href="#!" className="list-group-item list-group-item-action list-group-item-success">A simple success list group item</a>
    <a href="#!" className="list-group-item list-group-item-action list-group-item-danger">A simple danger list group item</a>
    <a href="#!" className="list-group-item list-group-item-action list-group-item-warning">A simple warning list group item</a>
    <a href="#!" className="list-group-item list-group-item-action list-group-item-info">A simple info list group item</a>
    <a href="#!" className="list-group-item list-group-item-action list-group-item-light">A simple light list group item</a>
    <a href="#!" className="list-group-item list-group-item-action list-group-item-dark">A simple dark list group item</a>
</div>`}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default ContextualListGroup;