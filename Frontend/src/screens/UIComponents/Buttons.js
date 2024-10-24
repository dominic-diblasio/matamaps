import React from "react";
import ButtonsGroupTile from "../../components/UI/ButtonsGroupTile";
import ButtonsTile from "../../components/UI/ButtonsTile";



function Buttons() {
   function tabEvent(id){
        document.getElementById("tab1").classList.remove("active");
        document.getElementById("tab2").classList.remove("active");
        document.getElementById("tab" + id).classList.add("active");

        document.getElementById("tab-pane1").classList.remove("active");
        document.getElementById("tab-pane1").classList.remove("show");
        document.getElementById("tab-pane2").classList.remove("active");
        document.getElementById("tab-pane2").classList.remove("show");
        document.getElementById("tab-pane" + id).classList.add("active");
        document.getElementById("tab-pane" + id).classList.add("show");
    }

    return (
        <div className="container">
            <div className="col-12">
                <div className="card mb-4 shadow-sm border-0">
                    <div className="card-body">
                        <ul className="nav nav-tabs tab-body-header rounded d-inline-flex" role="tablist">
                            <li className="nav-item"><a className="nav-link active" id="tab1" href="#!" onClick={(e) => { e.preventDefault(); tabEvent(1) }}>Buttons</a></li>
                            <li className="nav-item"><a className="nav-link" id="tab2" href="#!" onClick={(e) => { e.preventDefault(); tabEvent(2) }}>Buttons Groups</a></li>
                        </ul>
                    </div>
                </div>
                <div className="tab-content">
                    <div id="tab-pane1" className="tab-pane fade active show">
                        <div className="row justify-content-between">
                            <ButtonsTile />
                            <div className="col-lg-3 col-sm-12 d-none d-sm-block">
                                <div className="sticky-lg-top">
                                    <strong className="d-block h6 my-2 pb-2 border-bottom">On this page</strong>
                                    <nav>
                                        <ul>
                                            <li><a href="#examples">Examples</a></li>
                                            <li><a href="#disable-text-wrapping">Disable text wrapping</a></li>
                                            <li><a href="#button-tags">Button tags</a></li>
                                            <li><a href="#outline-buttons">Outline buttons</a></li>
                                            <li><a href="#sizes">Sizes</a></li>
                                            <li><a href="#disabled-state">Disabled state</a></li>
                                            <li><a href="#button-plugin">Button plugin</a>
                                                <ul>
                                                    <li><a href="#toggle-states">Toggle states</a></li>
                                                    <li><a href="#methods">Methods</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="tab-pane2" className="tab-pane fade">
                        <div className="row justify-content-between">
                            <ButtonsGroupTile />
                            <div className="col-lg-3 col-sm-12 d-none d-sm-block">
                                <div className="sticky-lg-top">
                                    <strong className="d-block h6 my-2 pb-2 border-bottom">On this page</strong>
                                    <nav>
                                        <ul>
                                            <li><a href="#basic-example">Basic example</a></li>
                                            <li><a href="#mixed-styles">Mixed styles</a></li>
                                            <li><a href="#outlined-styles">Outlined styles</a></li>
                                            <li><a href="#checkbox-and-radio-button-groups">Checkbox and radio button groups</a></li>
                                            <li><a href="#button-toolbar">Button toolbar</a></li>
                                            <li><a href="#sizing">Sizing</a></li>
                                            <li><a href="#nesting">Nesting</a></li>
                                            <li><a href="#vertical-variation">Vertical variation</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Buttons;