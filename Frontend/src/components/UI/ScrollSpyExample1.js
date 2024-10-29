import React from "react";
import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function ScrollSpyExample1() {
    const [basicT, setBasicT] = useState("Preview");

    return (
        <div className="border-top mt-5 pt-3">
            <h5 id="example-in-navbar">Example in navbar</h5>
            <p>Scroll the area below the navbar and watch the active class change. The dropdown items will be highlighted as well.</p>

            <ul className="nav nav-tabs tab-card px-3 border-bottom-0" role="tablist">
                <li className="nav-item"><a className={basicT === "Preview" ? "nav-link active" : "nav-link"} href="#nav-Preview1" onClick={(e) => { e.preventDefault(); setBasicT("Preview") }} >Preview</a></li>
                <li className="nav-item"><a className={basicT === "Html" ? "nav-link active" : "nav-link"} href="#nav-HTML1" onClick={(e) => { e.preventDefault(); setBasicT("Html") }} >HTML</a></li>
            </ul>
            <div className="card mb-3">
                <div className="card-body">
                    <div className="tab-content">
                        <div className={basicT === "Preview" ? "tab-pane fade active show" : "tab-pane fade"} id="nav-Preview1" role="tabpanel">
                            <nav id="navbar-example1" className="navbar navbar-light bg-light px-3">
                                <a className="navbar-brand" href="#!">Navbar</a>
                                <ul className="nav nav-pills">
                                    <li className="nav-item"><a className="nav-link" href="#fat">@fat</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#mdo">@mdo</a></li>
                                    <Dropdown as="li" className="nav-item">
                                        <Dropdown.Toggle as="a" variant="" className="nav-link">
                                            Dropdown
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu as="ul" className="dropdown-menu-end border-0 shadow">
                                            <li><a className="dropdown-item" href="#one">one</a></li>
                                            <li><a className="dropdown-item" href="#two">two</a></li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li><a className="dropdown-item" href="#three">three</a></li>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </ul>
                            </nav>
                            <div className="mt-2" data-spy="scroll" data-bs-target="#navbar-example1" data-offset="0" style={{ height: "200px", overflowY: 'scroll', position: "relative" }}>
                                <h5 id="fat">@fat</h5>
                                <p>Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven't heard of them et cardigan trust fund culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan ullamco consequat.</p>
                                <h5 id="mdo">@mdo</h5>
                                <p>Veniam marfa mustache skateboard, adipisicing fugiat velit pitchfork beard. Freegan beard aliqua cupidatat mcsweeney's vero. Cupidatat four loko nisi, ea helvetica nulla carles. Tattooed cosby sweater food truck, mcsweeney's quis non freegan vinyl. Lo-fi wes anderson +1 sartorial. Carles non aesthetic exercitation quis gentrify. Brooklyn adipisicing craft beer vice keytar deserunt.</p>
                                <h5 id="one">one</h5>
                                <p>Occaecat commodo aliqua delectus. Fap craft beer deserunt skateboard ea. Lomo bicycle rights adipisicing banh mi, velit ea sunt next level locavore single-origin coffee in magna veniam. High life id vinyl, echo park consequat quis aliquip banh mi pitchfork. Vero VHS est adipisicing. Consectetur nisi DIY minim messenger bag. Cred ex in, sustainable delectus consectetur fanny pack iphone.</p>
                                <h5 id="two">two</h5>
                                <p>In incididunt echo park, officia deserunt mcsweeney's proident master cleanse thundercats sapiente veniam. Excepteur VHS elit, proident shoreditch +1 biodiesel laborum craft beer. Single-origin coffee wayfarers irure four loko, cupidatat terry richardson master cleanse. Assumenda you probably haven't heard of them art party fanny pack, tattooed nulla cardigan tempor ad. Proident wolf nesciunt sartorial keffiyeh eu banh mi sustainable. Elit wolf voluptate, lo-fi ea portland before they sold out four loko. Locavore enim nostrud mlkshk brooklyn nesciunt.</p>
                                <h5 id="three">three</h5>
                                <p>Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven't heard of them et cardigan trust fund culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan ullamco consequat.</p>
                                <p>Keytar twee blog, culpa messenger bag marfa whatever delectus food truck. Sapiente synth id assumenda. Locavore sed helvetica cliche irony, thundercats you probably haven't heard of them consequat hoodie gluten-free lo-fi fap aliquip. Labore elit placeat before they sold out, terry richardson proident brunch nesciunt quis cosby sweater pariatur keffiyeh ut helvetica artisan. Cardigan craft beer seitan readymade velit. VHS chambray laboris tempor veniam. Anim mollit minim commodo ullamco thundercats.</p>
                            </div>
                        </div>
                        <div className={basicT === "Html" ? "tab-pane fade active show" : "tab-pane fade"} id="nav-HTML1" role="tabpanel">
                            <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                                {`<nav id="navbar-example1" class="navbar navbar-light bg-light px-3">
    <a class="navbar-brand" href="#!">Navbar</a>
    <ul class="nav nav-pills">
        <li class="nav-item"><a class="nav-link" href="#fat">@fat</a></li>
        <li class="nav-item"><a class="nav-link" href="#mdo">@mdo</a></li>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#!" role="button" aria-expanded="false">Dropdown</a>
            <ul class="dropdown-menu dropdown-menu-end">
                <li><a class="dropdown-item" href="#one">one</a></li>
                <li><a class="dropdown-item" href="#two">two</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#three">three</a></li>
            </ul>
        </li>
    </ul>
</nav>
<div class="border p-3" data-spy="scroll" data-target="#navbar-example1" data-offset="0" tabindex="0">
    <h5 id="fat">@fat</h5>
    <p>...</p>
    <h5 id="mdo">@mdo</h5>
    <p>...</p>
    <h5 id="one">one</h5>
    <p>...</p>
    <h5 id="two">two</h5>
    <p>...</p>
    <h5 id="three">three</h5>
    <p>...</p>
    <p>...</p>
</div>`}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default ScrollSpyExample1;