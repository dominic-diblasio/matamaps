import React from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Avatar1 from "../../assets/images/xs/avatar1.jpg"
import Avatar3 from "../../assets/images/xs/avatar3.jpg"
import Avatar4 from "../../assets/images/xs/avatar4.jpg"
import Avatar5 from "../../assets/images/xs/avatar5.jpg"

function BasicListGroup() {
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
            <h4 id="basic-example">Basic example</h4>
            <p>The most basic list group is an unordered list with list items and the proper classes. Build upon it with the options that follow, or with your own CSS as needed.</p>
            <ul className="nav nav-tabs tab-card px-3 border-bottom-0" role="tablist">
                <li className="nav-item"><a className="nav-link blist-nav-link-1 active" href="#!" onClick={(e) => { e.preventDefault(); tabEvent(e, "blist-nav-Preview1", "blist-tab-pane-1", "blist-nav-link-1") }}>Preview</a></li>
                <li className="nav-item"><a className="nav-link blist-nav-link-1" href="#!" onClick={(e) => { e.preventDefault(); tabEvent(e, "blist-nav-HTML1", "blist-tab-pane-1", "blist-nav-link-1") }}>HTML</a></li>
            </ul>
            <div className="card mb-3 bg-transparent">
                <div className="card-body">
                    <div className="tab-content">
                        <div className="tab-pane fade blist-tab-pane-1 show active" id="blist-nav-Preview1" role="tabpanel">
                            <div className="row">
                                <div className="col-lg-3 col-md-6">
                                    <ul className="list-group list-group-custom">
                                        <li className="list-group-item">Cras justo odio</li>
                                        <li className="list-group-item">Dapibus ac facilisis in</li>
                                        <li className="list-group-item">Morbi leo risus</li>
                                        <li className="list-group-item">Porta ac consectetur ac</li>
                                        <li className="list-group-item">Vestibulum at eros</li>
                                    </ul>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <ul className="list-group list-group-custom">
                                        <li className="list-group-item">
                                            <span className="badge bg-primary me-2">14</span>
                                            Cras justo odio
                                        </li>
                                        <li className="list-group-item">
                                            <span className="badge bg-danger me-2">2</span>
                                            Dapibus ac facilisis in
                                        </li>
                                        <li className="list-group-item">
                                            <span className="badge bg-info me-2">1</span>
                                            Morbi leo risus
                                        </li>
                                        <li className="list-group-item">
                                            <span className="badge bg-warning me-2">2</span>
                                            Dapibus ac facilisis in
                                        </li>
                                        <li className="list-group-item">
                                            <span className="badge bg-secondary me-2">1</span>
                                            Morbi leo risus
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <ul className="list-group list-group-custom">
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            Cras justo odio
                                            <span className="badge bg-primary rounded-pill">14</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            Dapibus ac facilisis in
                                            <span className="badge bg-danger rounded-pill">2</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            Morbi leo risus
                                            <span className="badge bg-info rounded-pill">1</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            Dapibus ac facilisis in
                                            <span className="badge bg-warning rounded-pill">2</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            Morbi leo risus
                                            <span className="badge bg-secondary rounded-pill">1</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <ul className="list-group">
                                        <li className="list-group-item">
                                            <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                                            Cras justo odio
                                        </li>
                                        <li className="list-group-item">
                                            <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                                            Dapibus ac facilisis in
                                        </li>
                                        <li className="list-group-item">
                                            <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                                            Morbi leo risus
                                        </li>
                                        <li className="list-group-item">
                                            <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                                            Porta ac consectetur ac
                                        </li>
                                        <li className="list-group-item">
                                            <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                                            Vestibulum at eros
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade blist-tab-pane-1" id="blist-nav-HTML1" role="tabpanel">
                            <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                                {`<!-- List Group: normal  -->
<ul className="list-group list-group-custom">
    <li className="list-group-item">Cras justo odio</li>
    <li className="list-group-item">Dapibus ac facilisis in</li>
    <li className="list-group-item">Morbi leo risus</li>
    <li className="list-group-item">Porta ac consectetur ac</li>
    <li className="list-group-item">Vestibulum at eros</li>
</ul>

<!-- List Group: with badge left side -->
<ul className="list-group list-group-custom">
    <li className="list-group-item">
        <span className="badge bg-primary me-2">14</span>
        Cras justo odio
    </li>
    <li className="list-group-item">
        <span className="badge bg-danger me-2">2</span>
        Dapibus ac facilisis in
    </li>
    <li className="list-group-item">
        <span className="badge bg-info me-2">1</span>
        Morbi leo risus
    </li>
    <li className="list-group-item">
        <span className="badge bg-warning me-2">2</span>
        Dapibus ac facilisis in
    </li>
    <li className="list-group-item">
        <span className="badge bg-secondary me-2">1</span>
        Morbi leo risus
    </li>
</ul>

<!-- List Group: with badge pill right side -->
<ul className="list-group list-group-custom">
    <li className="list-group-item d-flex justify-content-between align-items-center">
        Cras justo odio
        <span className="badge bg-primary rounded-pill">14</span>
    </li>
    <li className="list-group-item d-flex justify-content-between align-items-center">
        Dapibus ac facilisis in
        <span className="badge bg-danger rounded-pill">2</span>
    </li>
    <li className="list-group-item d-flex justify-content-between align-items-center">
        Morbi leo risus
        <span className="badge bg-info rounded-pill">1</span>
    </li>
    <li className="list-group-item d-flex justify-content-between align-items-center">
        Dapibus ac facilisis in
        <span className="badge bg-warning rounded-pill">2</span>
    </li>
    <li className="list-group-item d-flex justify-content-between align-items-center">
        Morbi leo risus
        <span className="badge bg-secondary rounded-pill">1</span>
    </li>
</ul>

<!-- List Group: with checkbox -->
<ul className="list-group">
    <li className="list-group-item">
        <input className="form-check-input me-1" type="checkbox" value="" aria-label="...">
        Cras justo odio
    </li>
    <li className="list-group-item">
        <input className="form-check-input me-1" type="checkbox" value="" aria-label="...">
        Dapibus ac facilisis in
    </li>
    <li className="list-group-item">
        <input className="form-check-input me-1" type="checkbox" value="" aria-label="...">
        Morbi leo risus
    </li>
    <li className="list-group-item">
        <input className="form-check-input me-1" type="checkbox" value="" aria-label="...">
        Porta ac consectetur ac
    </li>
    <li className="list-group-item">
        <input className="form-check-input me-1" type="checkbox" value="" aria-label="...">
        Vestibulum at eros
    </li>
</ul>`}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                </div>
            </div>
            <ul className="nav nav-tabs tab-card px-3 border-bottom-0" role="tablist">
                <li className="nav-item"><a className="nav-link blist-nav-link-2 active" href="#!" onClick={(e) => { e.preventDefault(); tabEvent(e, "blist-nav-Preview2", "blist-tab-pane-2", "blist-nav-link-2") }}>Preview</a></li>
                <li className="nav-item"><a className="nav-link blist-nav-link-2" href="#!" onClick={(e) => { e.preventDefault(); tabEvent(e, "blist-nav-HTML2", "blist-tab-pane-2", "blist-nav-link-2") }}>HTML</a></li>
            </ul>
            <div className="card mb-3 bg-transparent">
                <div className="card-body">
                    <div className="tab-content">
                        <div className="tab-pane fade blist-tab-pane-2 show active" id="blist-nav-Preview2" role="tabpanel">
                            <div className="row">
                                <div className="col-lg-4 col-md-12">
                                    <ul className="list-unstyled list-group list-group-custom list-group-flush mb-0">
                                        <li className="list-group-item px-md-4 py-3">
                                            <a href="#!" className="d-flex">
                                                <img className="avatar rounded-circle" src={Avatar1} alt="" />
                                                <div className="flex-fill ms-3 text-truncate">
                                                    <h6 className="d-flex justify-content-between mb-0"><span>Chris Fox</span></h6>
                                                    <span className="text-muted">ChrisFox@mytask.com</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="list-group-item px-md-4 py-3">
                                            <a href="#!" className="d-flex">
                                                <div className="avatar rounded-circle no-thumbnail">RH</div>
                                                <div className="flex-fill ms-3 text-truncate">
                                                    <h6 className="d-flex justify-content-between mb-0"><span>Robert Hammer</span></h6>
                                                    <span className="text-muted">RobertHammer@mytask.com</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="list-group-item px-md-4 py-3">
                                            <a href="#!" className="d-flex">
                                                <img className="avatar rounded-circle" src={Avatar3} alt="" />
                                                <div className="flex-fill ms-3 text-truncate">
                                                    <h6 className="d-flex justify-content-between mb-0"><span>Orlando Lentz</span></h6>
                                                    <span className="text-muted">RobertHammer@mytask.com</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="list-group-item px-md-4 py-3">
                                            <a href="#!" className="d-flex">
                                                <img className="avatar rounded-circle" src={Avatar4} alt="" />
                                                <div className="flex-fill ms-3 text-truncate">
                                                    <h6 className="d-flex justify-content-between mb-0"><span>Barbara Kelly</span></h6>
                                                    <span className="text-muted">RobertHammer@mytask.com</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="list-group-item px-md-4 py-3">
                                            <a href="#!" className="d-flex">
                                                <img className="avatar rounded-circle" src={Avatar5} alt="" />
                                                <div className="flex-fill ms-3 text-truncate">
                                                    <h6 className="d-flex justify-content-between mb-0"><span>Robert Hammer</span></h6>
                                                    <span className="text-muted">RobertHammer@mytask.com</span>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-4 col-md-12">
                                    <ul className="list-unstyled list-group list-group-custom list-group-flush mb-0">
                                        <li className="list-group-item d-flex py-3">
                                            <div className="avatar"><i className="fa fa-thumbs-o-up fa-lg"></i></div>
                                            <div className="flex-grow-1">
                                                <h6 className="mb-0">7 New Feedback <small className="float-right text-muted">Today</small></h6>
                                                <small>It will give a smart finishing to your site</small>
                                            </div>
                                        </li>
                                        <li className="list-group-item d-flex py-3">
                                            <div className="avatar"><i className="fa fa-user fa-lg"></i></div>
                                            <div className="flex-grow-1">
                                                <h6 className="mb-0">New User <small className="float-right text-muted">10:45</small></h6>
                                                <small>I feel great! Thanks team</small>
                                            </div>
                                        </li>
                                        <li className="list-group-item d-flex py-3">
                                            <div className="avatar"><i className="fa fa-question-circle fa-lg"></i></div>
                                            <div className="flex-grow-1">
                                                <h6 className="mb-0 text-warning">Server Warning <small className="float-right text-muted">10:50</small></h6>
                                                <small>Your connection is not private</small>
                                            </div>
                                        </li>
                                        <li className="list-group-item d-flex py-3">
                                            <div className="avatar"><i className="fa fa-check fa-lg"></i></div>
                                            <div className="flex-grow-1">
                                                <h6 className="mb-0 text-danger">Issue Fixed <small className="float-right text-muted">11:05</small></h6>
                                                <small>WE have fix all Design bug with Responsive</small>
                                            </div>
                                        </li>
                                        <li className="list-group-item d-flex py-3">
                                            <div className="avatar"><i className="fa fa-shopping-basket fa-lg"></i></div>
                                            <div className="flex-grow-1">
                                                <h6 className="mb-0">7 New Orders <small className="float-right text-muted">11:35</small></h6>
                                                <small>You received a new oder from Tina.</small>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-4 col-md-12">
                                    <ul className="list-unstyled list-group list-group-custom list-group-flush mb-0">
                                        <li className="list-group-item d-flex align-items-center py-3">
                                            <div className="form-check form-switch">
                                                <input className="form-check-input" type="checkbox" id="list-group1" />
                                                <label className="form-check-label" >Front Door</label>
                                            </div>
                                        </li>
                                        <li className="list-group-item d-flex align-items-center py-3">
                                            <div className="form-check form-switch">
                                                <input className="form-check-input" type="checkbox" id="list-group2" />
                                                <label className="form-check-label" >Air Conditioner</label>
                                            </div>
                                        </li>
                                        <li className="list-group-item d-flex align-items-center py-3">
                                            <div className="form-check form-switch">
                                                <input className="form-check-input" type="checkbox" id="list-group3" />
                                                <label className="form-check-label" >Enable RTL Mode!</label>
                                            </div>
                                        </li>
                                        <li className="list-group-item d-flex align-items-center py-3">
                                            <div className="form-check form-switch">
                                                <input className="form-check-input" type="checkbox" id="list-group4" />
                                                <label className="form-check-label" >Front Door</label>
                                            </div>
                                        </li>
                                        <li className="list-group-item d-flex align-items-center py-3">
                                            <div className="form-check form-switch">
                                                <input className="form-check-input" type="checkbox" id="list-group5" />
                                                <label className="form-check-label" >Air Conditioner</label>
                                            </div>
                                        </li>
                                        <li className="list-group-item d-flex align-items-center py-3">
                                            <div className="form-check form-switch">
                                                <input className="form-check-input" type="checkbox" id="list-group6" />
                                                <label className="form-check-label" >Washing Machine</label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade blist-tab-pane-2" id="blist-nav-HTML2" role="tabpanel">
                            <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                                {`import Avatar1 from "../../../assets/images/xs/avatar1.jpg"
import Avatar3 from "../../../assets/images/xs/avatar3.jpg"
import Avatar4 from "../../../assets/images/xs/avatar4.jpg"
import Avatar5 from "../../../assets/images/xs/avatar5.jpg"


<!-- List Group: User list  -->
<ul className="list-unstyled list-group list-group-custom list-group-flush mb-0">
    <li className="list-group-item px-md-4 py-3">
        <a href="#!" className="d-flex">
            <img className="avatar rounded-circle" src={Avatar1} alt=""/>
            <div className="flex-fill ms-3 text-truncate">
                <h6 className="d-flex justify-content-between mb-0"><span>Chris Fox</span></h6>
                <span className="text-muted">ChrisFox@mytask.com</span>
            </div>
        </a>
    </li>
    <li className="list-group-item px-md-4 py-3">
        <a href="#!" className="d-flex">
            <div className="avatar rounded-circle no-thumbnail">RH</div>
            <div className="flex-fill ms-3 text-truncate">
                <h6 className="d-flex justify-content-between mb-0"><span>Robert Hammer</span></h6>
                <span className="text-muted">RobertHammer@mytask.com</span>
            </div>
        </a>
    </li>
    <li className="list-group-item px-md-4 py-3">
        <a href="#!" className="d-flex">
            <img className="avatar rounded-circle" src={Avatar3} alt=""/>
            <div className="flex-fill ms-3 text-truncate">
                <h6 className="d-flex justify-content-between mb-0"><span>Orlando Lentz</span></h6>
                <span className="text-muted">RobertHammer@mytask.com</span>
            </div>
        </a>
    </li>
    <li className="list-group-item px-md-4 py-3">
        <a href="#!" className="d-flex">
            <img className="avatar rounded-circle" src={Avatar4} alt=""/>
            <div className="flex-fill ms-3 text-truncate">
                <h6 className="d-flex justify-content-between mb-0"><span>Barbara Kelly</span></h6>
                <span className="text-muted">RobertHammer@mytask.com</span>
            </div>
        </a>
    </li>
    <li className="list-group-item px-md-4 py-3">
        <a href="#!" className="d-flex">
            <img className="avatar rounded-circle" src={Avatar5} alt=""/>
            <div className="flex-fill ms-3 text-truncate">
                <h6 className="d-flex justify-content-between mb-0"><span>Robert Hammer</span></h6>
                <span className="text-muted">RobertHammer@mytask.com</span>
            </div>
        </a>
    </li>
</ul>

<!-- List Group: Notification -->
<ul className="list-unstyled list-group list-group-custom list-group-flush mb-0">
    <li className="list-group-item d-flex py-3">
        <div className="avatar"><i className="fa fa-thumbs-o-up fa-lg"></i></div>
        <div className="flex-grow-1">
            <h6 className="mb-0">7 New Feedback <small className="float-right text-muted">Today</small></h6>
            <small>It will give a smart finishing to your site</small>
        </div>
    </li>
    <li className="list-group-item d-flex py-3">
        <div className="avatar"><i className="fa fa-user fa-lg"></i></div>
        <div className="flex-grow-1">
            <h6 className="mb-0">New User <small className="float-right text-muted">10:45</small></h6>
            <small>I feel great! Thanks team</small>
        </div>
    </li>
    <li className="list-group-item d-flex py-3">
        <div className="avatar"><i className="fa fa-question-circle fa-lg"></i></div>
        <div className="flex-grow-1">
            <h6 className="mb-0 text-warning">Server Warning <small className="float-right text-muted">10:50</small></h6>
            <small>Your connection is not private</small>
        </div>
    </li>
    <li className="list-group-item d-flex py-3">
        <div className="avatar"><i className="fa fa-check fa-lg"></i></div>
        <div className="flex-grow-1">
            <h6 className="mb-0 text-danger">Issue Fixed <small className="float-right text-muted">11:05</small></h6>
            <small>WE have fix all Design bug with Responsive</small>
        </div>
    </li>
    <li className="list-group-item d-flex py-3">
        <div className="avatar"><i className="fa fa-shopping-basket fa-lg"></i></div>
        <div className="flex-grow-1">
            <h6 className="mb-0">7 New Orders <small className="float-right text-muted">11:35</small></h6>
            <small>You received a new oder from Tina.</small>
        </div>
    </li>                                   
</ul>

<!-- List Group: iOT list with switch -->
<ul className="list-unstyled list-group list-group-custom list-group-flush mb-0">
    <li className="list-group-item d-flex align-items-center py-3">
        <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="list-group1">
            <label className="form-check-label" for="list-group1">Front Door</label>
        </div>
    </li>
    <li className="list-group-item d-flex align-items-center py-3">
        <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="list-group2" checked="">
            <label className="form-check-label" for="list-group2">Air Conditioner</label>
        </div>
    </li>
    <li className="list-group-item d-flex align-items-center py-3">
        <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="list-group3">
            <label className="form-check-label" for="list-group3">Enable RTL Mode!</label>
        </div>
    </li>
    <li className="list-group-item d-flex align-items-center py-3">
        <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="list-group4">
            <label className="form-check-label" for="list-group4">Front Door</label>
        </div>
    </li>
    <li className="list-group-item d-flex align-items-center py-3">
        <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="list-group5">
            <label className="form-check-label" for="list-group5">Air Conditioner</label>
        </div>
    </li>
    <li className="list-group-item d-flex align-items-center py-3">
        <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="list-group6" checked="">
            <label className="form-check-label" for="list-group6">Washing Machine</label>
        </div>
    </li>
</ul>`}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                </div>
            </div>

            <h5 id="active-items">Active &amp; Disabled items</h5>
            <p className="mb-0">Add <code>.active</code> to a <code>.list-group-item</code> to indicate the current active selection.</p>
            <p>Add <code>.disabled</code> to a <code>.list-group-item</code> to make it <em>appear</em> disabled. Note that some elements with <code>.disabled</code> will also require custom JavaScript to fully disable their click events (e.g., links).</p>
            <ul className="nav nav-tabs tab-card px-3 border-bottom-0" role="tablist">
                <li className="nav-item"><a className="nav-link blist-nav-link-3 active" href="#!" onClick={(e) => { e.preventDefault(); tabEvent(e, "blist-nav-Preview3", "blist-tab-pane-3", "blist-nav-link-3") }} >Preview</a></li>
                <li className="nav-item"><a className="nav-link blist-nav-link-3" href="#!" onClick={(e) => { e.preventDefault(); tabEvent(e, "blist-nav-HTML3", "blist-tab-pane-3", "blist-nav-link-3") }} >HTML</a></li>
            </ul>
            <div className="card mb-3 bg-transparent">
                <div className="card-body">
                    <div className="tab-content">
                        <div className="tab-pane fade blist-tab-pane-3 show active" id="blist-nav-Preview3" role="tabpanel">
                            <ul className="list-group list-group-custom" >
                                <li className="list-group-item active" aria-current="true">Cras justo odio</li>
                                <li className="list-group-item">Dapibus ac facilisis in</li>
                                <li className="list-group-item">Morbi leo risus</li>
                                <li className="list-group-item disabled">Porta ac consectetur ac</li>
                                <li className="list-group-item">Vestibulum at eros</li>
                            </ul>
                        </div>
                        <div className="tab-pane fade blist-tab-pane-3" id="blist-nav-HTML3" role="tabpanel">
                            <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                                {`<ul className="list-group list-group-custom">
    <li className="list-group-item active" aria-current="true">Cras justo odio</li>
    <li className="list-group-item">Dapibus ac facilisis in</li>
    <li className="list-group-item">Morbi leo risus</li>
    <li className="list-group-item disabled">Porta ac consectetur ac</li>
    <li className="list-group-item">Vestibulum at eros</li>
</ul>`}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default BasicListGroup;