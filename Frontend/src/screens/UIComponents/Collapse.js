import React from "react";
import CollapseTile from "../../components/UI/CollapseTile";


function Collapse() {

    return (
        <div className="container">
            <div className="col-12">
                <div className="row justify-content-between">
                    <CollapseTile />
                    <div className="col-lg-3 col-sm-12 d-none d-sm-block">
                        <div className="sticky-lg-top card p-4">
                            <strong className="d-block h6 my-2 pb-2 border-bottom">On this page</strong>
                            <nav>
                                <ul>
                                    <li><a href="#how-it-works">How it works</a></li>
                                    <li><a href="#example">Example</a></li>
                                    <li><a href="#multiple-targets">Multiple targets</a></li>
                                    <li><a href="#accordion-example">Accordion example</a></li>
                                    <li><a href="#accessibility">Accessibility</a></li>
                                    <li><a href="#usage">Usage</a>
                                        <ul>
                                            <li><a href="#via-data-attributes">Via data attributes</a></li>
                                            <li><a href="#via-javascript">Via JavaScript</a></li>
                                            <li><a href="#options">Options</a></li>
                                            <li><a href="#methods">Methods</a></li>
                                            <li><a href="#events">Events</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Collapse;