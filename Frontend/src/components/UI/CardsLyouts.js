import React from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Thumbnail1 from "../../assets/images/gallery/1.jpg";
import Thumbnail2 from "../../assets/images/gallery/2.jpg";
import Thumbnail3 from "../../assets/images/gallery/3.jpg";
import Thumbnail4 from "../../assets/images/gallery/4.jpg";
import Thumbnail5 from "../../assets/images/gallery/5.jpg";
import Thumbnail6 from "../../assets/images/gallery/6.jpg";
import Thumbnail7 from "../../assets/images/gallery/7.jpg";
import Thumbnail8 from "../../assets/images/gallery/8.jpg";
import Thumbnail9 from "../../assets/images/gallery/9.jpg";
import Thumbnail10 from "../../assets/images/gallery/10.jpg";
import Thumbnail11 from "../../assets/images/gallery/11.jpg";

function CardsLyouts() {

    return (
        <div className="col-lg-8 col-sm-12">
            <div className="card">
                <div className="card-body">
                    <h2 id="about">About</h2>
                    <p>A <strong>card</strong> is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options. If you’re familiar with Bootstrap 3, cards replace our old panels, wells, and thumbnails. Similar functionality to those components is available as modifier classes for cards.</p>

                    <h2 id="example">Example</h2>
                    <p>Cards are built with as little markup and styles as possible, but still manage to deliver a ton of control and customization. Built with flexbox, they offer easy alignment and mix well with other Bootstrap components. They have no <code>margin</code> by default, so use <a href="/docs/5.0/utilities/spacing/">spacing utilities</a> as needed.</p>
                    <p>Below is an example of a basic card with mixed content and a fixed width. Cards have no fixed width to start, so they’ll naturally fill the full width of its parent element. This is easily customized with our various <a href="#sizing">sizing options</a>.</p>
                    <div className="bd-example mb-5">
                        <div className="card" style={{ width: '18rem' }}>
                            <img className="card-img-top" src={Thumbnail1} alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#!" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                            {`import Thumbnail1 from "../../assets/images/gallery/1.jpg";

<div className="card" style={{width: '18rem'}}>
    <img className="card-img-top" src={Thumbnail1} alt="" />
    <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#!" className="btn btn-primary">Go somewhere</a>
    </div>
</div>`}
                        </SyntaxHighlighter>
                    </div>

                    <h2 id="content-types">Content types</h2>
                    <p>Cards support a wide variety of content, including images, text, list groups, links, and more. Below are examples of what’s supported.</p>

                    <h3 id="body">Body</h3>
                    <p>The building block of a card is the <code>.card-body</code>. Use it whenever you need a padded section within a card.</p>
                    <div className="bd-example mb-5">
                        <div className="card">
                            <div className="card-body">
                                This is some text within a card body.
                            </div>
                        </div>
                        <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                            {`<div className="card">
    <div className="card-body">
        This is some text within a card body.
    </div>
</div>`}
                        </SyntaxHighlighter>
                    </div>

                    <h3 id="titles-text-and-links">Titles, text, and links</h3>
                    <p>Card titles are used by adding <code>.card-title</code> to a <code>&lt;h*&gt;</code> tag. In the same way, links are added and placed next to each other by adding <code>.card-link</code> to an <code>&lt;a&gt;</code> tag.</p>
                    <p>Subtitles are used by adding a <code>.card-subtitle</code> to a <code>&lt;h*&gt;</code> tag. If the <code>.card-title</code> and the <code>.card-subtitle</code> items are placed in a <code>.card-body</code> item, the card title and subtitle are aligned nicely.</p>
                    <div className="bd-example mb-5">
                        <div className="card" style={{ width: '18rem' }}>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#!" className="card-link">Card link</a>
                                <a href="#!" className="card-link">Another link</a>
                            </div>
                        </div>
                        <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                            {`<div className="card" style={{width: '18rem'}}>
    <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#!" className="card-link">Card link</a>
        <a href="#!" className="card-link">Another link</a>
    </div>
</div>`}
                        </SyntaxHighlighter>
                    </div>

                    <h3 id="images">Images</h3>
                    <p><code>.card-img-top</code> places an image to the top of the card. With <code>.card-text</code>, text can be added to the card. Text within <code>.card-text</code> can also be styled with the standard HTML tags.</p>
                    <div className="bd-example mb-5">
                        <div className="card" style={{ width: '18rem' }}>
                            <img className="card-img-top" src={Thumbnail2} alt="" />

                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                            {`import Thumbnail2 from "../../../assets/images/gallery/2.jpg";


<div className="card" style={{width:'18rem'}}>
    <img className="card-img-top" src={Thumbnail2} alt="" />

    <div className="card-body">
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
</div>`}
                        </SyntaxHighlighter>
                    </div>

                    <h3 id="list-groups">List groups</h3>
                    <p>Create lists of content in a card with a flush list group.</p>
                    <div className="bd-example mb-5">
                        <div className="card" style={{ width: '18rem' }}>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Cras justo odio</li>
                                <li className="list-group-item">Dapibus ac facilisis in</li>
                                <li className="list-group-item">Vestibulum at eros</li>
                            </ul>
                        </div>
                        <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                            {`<div className="card" style={{width:'18rem'}}>
    <ul className="list-group list-group-flush">
        <li className="list-group-item">Cras justo odio</li>
        <li className="list-group-item">Dapibus ac facilisis in</li>
        <li className="list-group-item">Vestibulum at eros</li>
    </ul>
</div>`}
                        </SyntaxHighlighter>
                    </div>
                    <div className="bd-example mb-5">
                        <div className="card" style={{ width: '18rem' }}>
                            <div className="card-header">
                                Featured
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Cras justo odio</li>
                                <li className="list-group-item">Dapibus ac facilisis in</li>
                                <li className="list-group-item">Vestibulum at eros</li>
                            </ul>
                        </div>
                        <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                            {`<div className="card" style={{width:'18rem'}}>
    <div className="card-header">
        Featured
    </div>
    <ul className="list-group list-group-flush">
        <li className="list-group-item">Cras justo odio</li>
        <li className="list-group-item">Dapibus ac facilisis in</li>
        <li className="list-group-item">Vestibulum at eros</li>
    </ul>
</div>`}
                        </SyntaxHighlighter>
                    </div>
                    <div className="bd-example mb-5">
                        <div className="card" style={{ width: '18rem' }}>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Cras justo odio</li>
                                <li className="list-group-item">Dapibus ac facilisis in</li>
                                <li className="list-group-item">Vestibulum at eros</li>
                            </ul>
                            <div className="card-footer">
                                Card footer
                            </div>
                        </div>
                        <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                            {`<div className="card" style={{width:'18rem'}}>
    <ul className="list-group list-group-flush">
        <li className="list-group-item">Cras justo odio</li>
        <li className="list-group-item">Dapibus ac facilisis in</li>
        <li className="list-group-item">Vestibulum at eros</li>
    </ul>
    <div className="card-footer">
        Card footer
    </div>
</div>`}
                        </SyntaxHighlighter>
                    </div>

                    <h3 id="kitchen-sink">Kitchen sink</h3>
                    <p>Mix and match multiple content types to create the card you need, or throw everything in there. Shown below are image styles, blocks, text styles, and a list group—all wrapped in a fixed-width card.</p>
                    <div className="bd-example mb-5">
                        <div className="card" style={{ width: '18rem' }}>
                            <img className="card-img-top" src={Thumbnail6} alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Cras justo odio</li>
                                <li className="list-group-item">Dapibus ac facilisis in</li>
                                <li className="list-group-item">Vestibulum at eros</li>
                            </ul>
                            <div className="card-body">
                                <a href="#!" className="card-link">Card link</a>
                                <a href="#!" className="card-link">Another link</a>
                            </div>
                        </div>
                        <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                            {`import Thumbnail6 from "../../../assets/images/gallery/6.jpg";

<div className="card" style={{width:'18rem'}}>
    <img className="card-img-top" src={Thumbnail6} alt="" />
    <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
    <ul className="list-group list-group-flush">
        <li className="list-group-item">Cras justo odio</li>
        <li className="list-group-item">Dapibus ac facilisis in</li>
        <li className="list-group-item">Vestibulum at eros</li>
    </ul>
    <div className="card-body">
        <a href="#!" className="card-link">Card link</a>
        <a href="#!" className="card-link">Another link</a>
    </div>
</div>`}
                        </SyntaxHighlighter>
                    </div>

                    <h3 id="header-and-footer">Header and footer</h3>
                    <p>Add an optional header and/or footer within a card.</p>
                    <div className="bd-example mb-5">
                        <div className="card">
                            <div className="card-header">
                                Featured
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#!" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                            {`<div className="card">
    <div className="card-header">
        Featured
    </div>
    <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#!" className="btn btn-primary">Go somewhere</a>
    </div>
</div>`}
                        </SyntaxHighlighter>
                    </div>

                    <p>Card headers can be styled by adding <code>.card-header</code> to <code>&lt;h*&gt;</code> elements.</p>
                    <div className="bd-example mb-5">
                        <div className="card">
                            <h5 className="card-header">Featured</h5>
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#!" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                            {`<div className="card">
    <h5 className="card-header">Featured</h5>
    <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#!" className="btn btn-primary">Go somewhere</a>
    </div>
</div>`}
                        </SyntaxHighlighter>
                    </div>
                    <div className="bd-example mb-5">
                        <div className="card">
                            <div className="card-header">
                                Quote
                            </div>
                            <div className="card-body">
                                <blockquote className="blockquote mb-0">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                    <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                                </blockquote>
                            </div>
                        </div>
                        <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                            {`<div className="card">
    <div className="card-header">
        Quote
    </div>
    <div className="card-body">
        <blockquote className="blockquote mb-0">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
        </blockquote>
    </div>
</div>`}
                        </SyntaxHighlighter>
                    </div>
                    <div className="bd-example mb-5">
                        <div className="card text-center">
                            <div className="card-header">
                                Featured
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#!" className="btn btn-primary">Go somewhere</a>
                            </div>
                            <div className="card-footer text-muted">
                                2 days ago
                            </div>
                        </div>
                        <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                            {`<div className="card text-center">
    <div className="card-header">
        Featured
    </div>
    <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#!" className="btn btn-primary">Go somewhere</a>
    </div>
    <div className="card-footer text-muted">
        2 days ago
    </div>
</div>`}
                        </SyntaxHighlighter>
                    </div>

                    <h2 id="sizing">Sizing</h2>
                    <p>Cards assume no specific <code>width</code> to start, so they’ll be 100% wide unless otherwise stated. You can change this as needed with custom CSS, grid classes, grid Sass mixins, or utilities.</p>
                    <h3 id="using-grid-markup">Using grid markup</h3>
                    <p>Using the grid, wrap cards in columns and rows as needed.</p>
                    <div className="bd-example mb-5">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Special title treatment</h5>
                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                        <a href="#!" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Special title treatment</h5>
                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                        <a href="#!" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                            {`<div className="row">
    <div className="col-sm-6">
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#!" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
    <div className="col-sm-6">
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#!" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
</div>`}
                        </SyntaxHighlighter>
                    </div>

                    <h3 id="using-utilities">Using utilities</h3>
                    <p>Use our handful of <a href="https://v5.getbootstrap.com/docs/5.0/utilities/sizing/">available sizing utilities</a> to quickly set a card’s width.</p>
                    <div className="bd-example mb-5">
                        <div className="card w-75">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#!" className="btn btn-primary">Button</a>
                            </div>
                        </div>

                        <div className="card w-50">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#!" className="btn btn-primary">Button</a>
                            </div>
                        </div>
                        <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                            {`<div className="card w-75">
    <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#!" className="btn btn-primary">Button</a>
    </div>
</div>

<div className="card w-50">
    <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#!" className="btn btn-primary">Button</a>
    </div>
</div>`}
                        </SyntaxHighlighter>
                    </div>

                    <h3 id="using-custom-css">Using custom CSS</h3>
                    <p>Use custom CSS in your stylesheets or as inline styles to set a width.</p>
                    <div className="bd-example mb-5">
                        <div className="card" style={{ width: '18rem' }}>
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#!" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                            {`<div className="card" style={{width:'18rem'}}>
    <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#!" className="btn btn-primary">Go somewhere</a>
    </div>
</div>`}
                        </SyntaxHighlighter>
                    </div>

                    <h2 id="text-alignment">Text alignment</h2>
                    <p>You can quickly change the text alignment of any card—in its entirety or specific parts—with our <a href="https://v5.getbootstrap.com/docs/5.0/utilities/text/#text-alignment">text align classes</a>.</p>
                    <div className="bd-example mb-5">
                        <div className="card" style={{ width: '18rem' }}>
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#!" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>

                        <div className="card text-center" style={{ width: '18rem' }}>
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#!" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>

                        <div className="card text-end" style={{ width: '18rem' }}>
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#!" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                            {`<div className="card" style={{width:'18rem'}}>
    <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#!" className="btn btn-primary">Go somewhere</a>
    </div>
</div>

<div className="card text-center" style={{width:'18rem'}}>
    <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#!" className="btn btn-primary">Go somewhere</a>
    </div>
</div>

<div className="card text-end" style={{width:'18rem'}}>
    <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#!" className="btn btn-primary">Go somewhere</a>
    </div>
</div>`}
                        </SyntaxHighlighter>
                    </div>

                    <h2 id="navigation">Navigation</h2>
                    <p>Add some navigation to a card’s header (or block) with Bootstrap’s <a href="https://v5.getbootstrap.com/docs/5.0/components/navs/">nav components</a>.</p>
                    <div className="bd-example mb-5">
                        <div className="card text-center">
                            <div className="card-header">
                                <ul className="nav nav-tabs card-header-tabs">
                                    <li className="nav-item"><a className="nav-link active" aria-current="true" href="#!">Active</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#!">Link</a></li>
                                    <li className="nav-item"><a className="nav-link disabled" href="#!" aria-disabled="true">Disabled</a></li>
                                </ul>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#!" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                            {`<div className="card text-center">
    <div className="card-header">
        <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item"><a className="nav-link active" aria-current="true" href="#!">Active</a></li>
            <li className="nav-item"><a className="nav-link" href="#!">Link</a></li>
            <li className="nav-item"><a className="nav-link disabled" href="#!" tabindex="-1" aria-disabled="true">Disabled</a></li>
        </ul>
    </div>
    <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#!" className="btn btn-primary">Go somewhere</a>
    </div>
</div>`}
                        </SyntaxHighlighter>
                    </div>
                    <div className="bd-example mb-5">
                        <div className="card text-center">
                            <div className="card-header">
                                <ul className="nav nav-pills card-header-pills">
                                    <li className="nav-item"><a className="nav-link active" href="#!">Active</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#!">Link</a></li>
                                    <li className="nav-item"><a className="nav-link disabled" href="#!" aria-disabled="true">Disabled</a></li>
                                </ul>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#!" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                            {`<div className="card text-center">
    <div className="card-header">
        <ul className="nav nav-pills card-header-pills">
            <li className="nav-item"><a className="nav-link active" href="#!">Active</a></li>
            <li className="nav-item"><a className="nav-link" href="#!">Link</a></li>
            <li className="nav-item"><a className="nav-link disabled" href="#!" tabindex="-1" aria-disabled="true">Disabled</a></li>
        </ul>
    </div>
    <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#!" className="btn btn-primary">Go somewhere</a>
    </div>
</div>`}
                        </SyntaxHighlighter>
                    </div>

                    <h2 id="images-1">Images</h2>
                    <p>Cards include a few options for working with images. Choose from appending “image caps” at either end of a card, overlaying images with card content, or simply embedding the image in a card.</p>
                    <h3 id="image-caps">Image caps</h3>
                    <p>Similar to headers and footers, cards can include top and bottom “image caps”—images at the top or bottom of a card.</p>
                    <div className="bd-example mb-5">
                        <div className="card mb-3">
                            <img className="card-img-top" src={Thumbnail10} alt="" />

                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                            <img className="card-img-top" src={Thumbnail8} alt="" />

                        </div>
                        <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                            {`import Thumbnail10 from "../../../assets/images/gallery/10.jpg";
import Thumbnail8 from "../../../assets/images/gallery/8.jpg";

<div className="card mb-3">
    <img className="card-img-top" src={Thumbnail10} alt="" />

    <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
</div>
<div className="card">
    <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
    <img className="card-img-top" src={Thumbnail8} alt="" />
</div>`}
                        </SyntaxHighlighter>
                    </div>

                    <h3 id="image-overlays">Image overlays</h3>
                    <p>Turn an image into a card background and overlay your card’s text. Depending on the image, you may or may not need additional styles or utilities.</p>
                    <div className="bd-example mb-5">
                        <div className="card bg-dark text-white">
                            <img className="card-img-top" src={Thumbnail2} alt="" />

                            <div className="card-img-overlay">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text">Last updated 3 mins ago</p>
                            </div>
                        </div>

                    </div>
                    <div className="card shadow-sm p-3 mb-5">
                        Note that content should not be larger than the height of the image. If content is larger than the image the content will be displayed outside the image.
                    </div>

                    <h2 id="horizontal">Horizontal</h2>
                    <p>Using a combination of grid and utility classes, cards can be made horizontal in a mobile-friendly and responsive way. In the example below, we remove the grid gutters with <code>.g-0</code> and use <code>.col-md-*</code> classes to make the card horizontal at the <code>md</code> breakpoint. Further adjustments may be needed depending on your card content.</p>
                    <div className="bd-example mb-5">
                        <div className="card mb-3" >
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img className="card-img-top" src={Thumbnail5} alt="" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                            {`import Thumbnail5 from "../../../assets/images/gallery/5.jpg";

<div className="card mb-3" >
    <div className="row g-0">
        <div className="col-md-4">
            <img className="card-img-top" src={Thumbnail5} alt="" />
        </div>
        <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
    </div>
</div>`}
                        </SyntaxHighlighter>
                    </div>

                    <h2 id="card-styles">Card styles</h2>
                    <p>Cards include various options for customizing their backgrounds, borders, and color.</p>
                    <h3 id="background-and-color">Background and color</h3>
                    <p>Use <a href="https://v5.getbootstrap.com/docs/5.0/utilities/colors/">text and background utilities</a> to change the appearance of a card.</p>
                    <div className="bd-example mb-5">
                        <div className="card text-white bg-primary mb-3" style={{ width: '18rem' }}>
                            <div className="card-header">Header</div>
                            <div className="card-body">
                                <h5 className="card-title">Primary card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div className="card text-white bg-secondary mb-3" style={{ width: '18rem' }}>
                            <div className="card-header">Header</div>
                            <div className="card-body">
                                <h5 className="card-title">Secondary card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div className="card text-white bg-success mb-3" style={{ width: '18rem' }} >
                            <div className="card-header">Header</div>
                            <div className="card-body">
                                <h5 className="card-title">Success card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div className="card text-white bg-danger mb-3" style={{ width: '18rem' }}>
                            <div className="card-header">Header</div>
                            <div className="card-body">
                                <h5 className="card-title">Danger card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div className="card bg-warning mb-3" style={{ width: '18rem' }} >
                            <div className="card-header">Header</div>
                            <div className="card-body">
                                <h5 className="card-title">Warning card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div className="card text-body  bg-info mb-3" style={{ width: '18rem' }}>
                            <div className="card-header">Header</div>
                            <div className="card-body">
                                <h5 className="card-title">Info card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div className="card bg-light mb-3" style={{ width: '18rem' }}>
                            <div className="card-header">Header</div>
                            <div className="card-body">
                                <h5 className="card-title">Light card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div className="card text-white bg-dark mb-3" style={{ width: '18rem' }}>
                            <div className="card-header">Header</div>
                            <div className="card-body">
                                <h5 className="card-title">Dark card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                            {`<div className="card text-white bg-primary mb-3" style={{width:'18rem'}}">
    <div className="card-header">Header</div>
    <div className="card-body">
        <h5 className="card-title">Primary card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
</div>
<div className="card text-white bg-secondary mb-3" style={{width:'18rem'}}">
    <div className="card-header">Header</div>
    <div className="card-body">
        <h5 className="card-title">Secondary card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
</div>
<div className="card text-white bg-success mb-3" style={{width:'18rem'}}">
    <div className="card-header">Header</div>
    <div className="card-body">
        <h5 className="card-title">Success card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
</div>
<div className="card text-white bg-danger mb-3" style={{width:'18rem'}}">
    <div className="card-header">Header</div>
    <div className="card-body">
        <h5 className="card-title">Danger card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
</div>
<div className="card bg-warning mb-3" style={{width:'18rem'}}">
    <div className="card-header">Header</div>
    <div className="card-body">
        <h5 className="card-title">Warning card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
</div>
<div className="card text-body  bg-info mb-3" style={{width:'18rem'}}">
    <div className="card-header">Header</div>
    <div className="card-body">
        <h5 className="card-title">Info card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
</div>
<div className="card bg-light mb-3" style={{width:'18rem'}}">
    <div className="card-header">Header</div>
    <div className="card-body">
        <h5 className="card-title">Light card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
</div>
<div className="card text-white bg-dark mb-3" style={{width:'18rem'}}">
    <div className="card-header">Header</div>
    <div className="card-body">
        <h5 className="card-title">Dark card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
</div>`}
                        </SyntaxHighlighter>
                    </div>

                    <div className="card shadow-sm p-3">
                        <h5 id="conveying-meaning-to-assistive-technologies">Conveying meaning to assistive technologies</h5>
                        <p>Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the <code>.visually-hidden</code> class.</p>
                    </div>

                    <h3 id="border">Border</h3>
                    <p>Use <a href="https://v5.getbootstrap.com/docs/5.0/utilities/borders/">border utilities</a> to change just the <code>border-color</code> of a card. Note that you can put <code>.text-{"{color}"}</code> classes on the parent <code>.card</code> or a subset of the card’s contents as shown below.</p>
                    <div className="bd-example mb-5">
                        <div className="card border-primary mb-3" style={{ width: '18rem' }}>
                            <div className="card-header">Header</div>
                            <div className="card-body text-primary">
                                <h5 className="card-title">Primary card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div className="card border-secondary mb-3" style={{ width: '18rem' }}>
                            <div className="card-header">Header</div>
                            <div className="card-body text-secondary">
                                <h5 className="card-title">Secondary card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div className="card border-success mb-3" style={{ width: '18rem' }}>
                            <div className="card-header">Header</div>
                            <div className="card-body text-success">
                                <h5 className="card-title">Success card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div className="card border-danger mb-3" style={{ width: '18rem' }}>
                            <div className="card-header">Header</div>
                            <div className="card-body text-danger">
                                <h5 className="card-title">Danger card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div className="card border-warning mb-3" style={{ width: '18rem' }}>
                            <div className="card-header">Header</div>
                            <div className="card-body">
                                <h5 className="card-title">Warning card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div className="card border-info mb-3" style={{ width: '18rem' }}>
                            <div className="card-header">Header</div>
                            <div className="card-body">
                                <h5 className="card-title">Info card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div className="card border-light mb-3" style={{ width: '18rem' }}>
                            <div className="card-header">Header</div>
                            <div className="card-body">
                                <h5 className="card-title">Light card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div className="card border-dark mb-3" style={{ width: '18rem' }}>
                            <div className="card-header">Header</div>
                            <div className="card-body text-dark">
                                <h5 className="card-title">Dark card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                            {`<div className="card border-primary mb-3" style={{width:'18rem'}}>
    <div className="card-header">Header</div>
    <div className="card-body text-primary">
        <h5 className="card-title">Primary card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
</div>
<div className="card border-secondary mb-3" style={{width:'18rem'}}>
    <div className="card-header">Header</div>
    <div className="card-body text-secondary">
        <h5 className="card-title">Secondary card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
</div>
<div className="card border-success mb-3" style={{width:'18rem'}}>
    <div className="card-header">Header</div>
    <div className="card-body text-success">
        <h5 className="card-title">Success card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
</div>
<div className="card border-danger mb-3" style={{width:'18rem'}}>
    <div className="card-header">Header</div>
    <div className="card-body text-danger">
        <h5 className="card-title">Danger card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
</div>
<div className="card border-warning mb-3" style={{width:'18rem'}}>
    <div className="card-header">Header</div>
    <div className="card-body">
        <h5 className="card-title">Warning card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
</div>
<div className="card border-info mb-3" style={{width:'18rem'}}>
    <div className="card-header">Header</div>
    <div className="card-body">
        <h5 className="card-title">Info card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
</div>
<div className="card border-light mb-3" style={{width:'18rem'}}>
    <div className="card-header">Header</div>
    <div className="card-body">
        <h5 className="card-title">Light card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
</div>
<div className="card border-dark mb-3" style={{width:'18rem'}}>
    <div className="card-header">Header</div>
    <div className="card-body text-dark">
        <h5 className="card-title">Dark card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
</div>`}
                        </SyntaxHighlighter>
                    </div>

                    <h3 id="mixins-utilities">Mixins utilities</h3>
                    <p>You can also change the borders on the card header and footer as needed, and even remove their <code>background-color</code> with <code>.bg-transparent</code>.</p>
                    <div className="bd-example mb-5">
                        <div className="card border-success mb-3" style={{ width: '18rem' }}>
                            <div className="card-header bg-transparent border-success">Header</div>
                            <div className="card-body text-success">
                                <h5 className="card-title">Success card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                            <div className="card-footer bg-transparent border-success">Footer</div>
                        </div>
                        <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                            {`<div className="card border-success mb-3" style={{width:'18rem'}}>
    <div className="card-header bg-transparent border-success">Header</div>
        <div className="card-body text-success">
        <h5 className="card-title">Success card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
    <div className="card-footer bg-transparent border-success">Footer</div>
</div>`}
                        </SyntaxHighlighter>
                    </div>

                    <h2 id="card-layout">Card layout</h2>
                    <p>In addition to styling the content within cards, Bootstrap includes a few options for laying out series of cards. For the time being, <strong>these layout options are not yet responsive</strong>.</p>
                    <h3 id="card-groups">Card groups</h3>
                    <p>Use card groups to render cards as a single, attached element with equal width and height columns. Card groups start off stacked and use <code>display: flex;</code> to become attached with uniform dimensions starting at the <code>sm</code> breakpoint.</p>
                    <div className="bd-example mb-5">
                        <div className="card-group">
                            <div className="card">
                                <img className="card-img-top" src={Thumbnail6} alt="" />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                            <div className="card">
                                <img className="card-img-top" src={Thumbnail2} alt="" />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                            <div className="card">
                                <img className="card-img-top" src={Thumbnail5} alt="" />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                        <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                            {`import Thumbnail6 from "../../../assets/images/gallery/6.jpg";
import Thumbnail2 from "../../../assets/images/gallery/2.jpg";
import Thumbnail5 from "../../../assets/images/gallery/5.jpg";

<div className="card-group">
    <div className="card">
        <img className="card-img-top" src={Thumbnail6} alt="" />
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
    </div>
    <div className="card">
        <img className="card-img-top" src={Thumbnail1} alt="" />
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
    </div>
    <div className="card">
        <img className="card-img-top" src={Thumbnail5} alt="" />
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
    </div>
</div>`}
                        </SyntaxHighlighter>
                    </div>

                    <p>When using card groups with footers, their content will automatically line up.</p>
                    <div className="bd-example mb-5">
                        <div className="card-group">
                            <div className="card">
                                <img className="card-img-top" src={Thumbnail2} alt="" />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </div>
                            </div>
                            <div className="card">
                                <img className="card-img-top" src={Thumbnail6} alt="" />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </div>
                            </div>
                            <div className="card">
                                <img className="card-img-top" src={Thumbnail8} alt="" />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </div>
                            </div>
                        </div>
                        <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                            {`import Thumbnail2 from "../../../assets/images/gallery/2.jpg";
import Thumbnail6 from "../../../assets/images/gallery/6.jpg";
import Thumbnail8 from "../../../assets/images/gallery/8.jpg";

<div className="card-group">
    <div className="card">
        <img className="card-img-top" src={Thumbnail2} alt="" />
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
        <div className="card-footer">
            <small className="text-muted">Last updated 3 mins ago</small>
        </div>
    </div>
    <div className="card">
        <img className="card-img-top" src={Thumbnail6} alt="" />
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
        </div>
        <div className="card-footer">
            <small className="text-muted">Last updated 3 mins ago</small>
        </div>
    </div>
    <div className="card">
        <img className="card-img-top" src={Thumbnail8} alt="" />
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
        </div>
        <div className="card-footer">
            <small className="text-muted">Last updated 3 mins ago</small>
        </div>
    </div>
</div>`}
                        </SyntaxHighlighter>
                    </div>

                    <h3 id="grid-cards">Grid cards</h3>
                    <p>Use the Bootstrap grid system and its <a href="https://v5.getbootstrap.com/docs/5.0/layout/grid/#row-columns"><code>.row-cols</code> classes</a> to control how many grid columns (wrapped around your cards) you show per row. For example, here’s <code>.row-cols-1</code> laying out the cards on one column, and <code>.row-cols-md-2</code> splitting four cards to equal width across multiple rows, from the medium breakpoint up.</p>
                    <div className="bd-example mb-5">
                        <div className="row row-cols-1 row-cols-md-2 g-4">
                            <div className="col">
                                <div className="card">
                                    <img className="card-img-top" src={Thumbnail1} alt="" />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <img className="card-img-top" src={Thumbnail9} alt="" />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <img className="card-img-top" src={Thumbnail2} alt="" />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <img className="card-img-top" src={Thumbnail3} alt="" />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                            {`import Thumbnail1 from "../../../assets/images/gallery/1.jpg";
import Thumbnail2 from "../../../assets/images/gallery/2.jpg";
import Thumbnail3 from "../../../assets/images/gallery/3.jpg";
import Thumbnail9 from "../../../assets/images/gallery/9.jpg";

<div className="row row-cols-1 row-cols-md-2 g-4">
    <div className="col">
        <div className="card">
            <img className="card-img-top" src={Thumbnail1} alt="" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
        </div>
    </div>
    <div className="col">
        <div className="card">
            <img className="card-img-top" src={Thumbnail9} alt="" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
        </div>
    </div>
    <div className="col">
        <div className="card">
            <img className="card-img-top" src={Thumbnail2} alt="" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
            </div>
        </div>
    </div>
    <div className="col">
        <div className="card">
            <img className="card-img-top" src={Thumbnail3} alt="" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
        </div>
    </div>
</div>`}
                        </SyntaxHighlighter>
                    </div>

                    <p>Change it to <code>.row-cols-3</code> and you’ll see the fourth card wrap.</p>
                    <div className="bd-example mb-5">
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            <div className="col">
                                <div className="card">
                                    <img className="card-img-top" src={Thumbnail10} alt="" />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <img className="card-img-top" src={Thumbnail2} alt="" />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <img className="card-img-top" src={Thumbnail3} alt="" />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <img className="card-img-top" src={Thumbnail9} alt="" />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                            {`import Thumbnail2 from "../../../assets/images/gallery/2.jpg";
import Thumbnail3 from "../../../assets/images/gallery/3.jpg";
import Thumbnail9 from "../../../assets/images/gallery/9.jpg";
import Thumbnail10 from "../../../assets/images/gallery/10.jpg";

<div className="row row-cols-1 row-cols-md-3 g-4">
    <div className="col">
        <div className="card">
            <img className="card-img-top" src={Thumbnail9} alt="" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
        </div>
    </div>
    <div className="col">
        <div className="card">
            <img className="card-img-top" src={Thumbnail2} alt="" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
        </div>
    </div>
    <div className="col">
        <div className="card">
            <img className="card-img-top" src={Thumbnail3} alt="" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
            </div>
        </div>
    </div>
    <div className="col">
        <div className="card">
            <img className="card-img-top" src={Thumbnail9} alt="" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
        </div>
    </div>
</div>`}
                        </SyntaxHighlighter>
                    </div>

                    <p>When you need equal height, add <code>.h-100</code> to the cards. If you want equal heights by default, you can set <code>$card-height: 100%</code> in Sass.</p>
                    <div className="bd-example mb-5">
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            <div className="col">
                                <div className="card h-100">
                                    <img className="card-img-top" src={Thumbnail1} alt="" />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100">
                                    <img className="card-img-top" src={Thumbnail11} alt="" />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">This is a short card.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100">
                                    <img className="card-img-top" src={Thumbnail7} alt="" />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100">
                                    <img className="card-img-top" src={Thumbnail4} alt="" />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                            {`import Thumbnail1 from "../../../assets/images/gallery/1.jpg";
import Thumbnail4 from "../../../assets/images/gallery/4.jpg";
import Thumbnail5 from "../../../assets/images/gallery/5.jpg";
import Thumbnail7 from "../../../assets/images/gallery/7.jpg";
                                
<div className="row row-cols-1 row-cols-md-3 g-4">
    <div className="col">
        <div className="card h-100">
            <img className="card-img-top" src={Thumbnail1} alt="" />
                <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
        </div>
    </div>
    <div className="col">
        <div className="card h-100">
            <img className="card-img-top" src={Thumbnail5} alt="" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a short card.</p>
            </div>
        </div>
    </div>
    <div className="col">
        <div className="card h-100">
            <img className="card-img-top" src={Thumbnail7} alt="" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
            </div>
        </div>
    </div>
    <div className="col">
        <div className="card h-100">
            <img className="card-img-top" src={Thumbnail4} alt="" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
        </div>
    </div>
</div>`}
                        </SyntaxHighlighter>
                    </div>

                    <p>Just like with card groups, card footers will automatically line up.</p>
                    <div className="bd-example mb-5">
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            <div className="col">
                                <div className="card h-100">
                                    <img className="card-img-top" src={Thumbnail2} alt="" />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    </div>
                                    <div className="card-footer">
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100">
                                    <img className="card-img-top" src={Thumbnail5} alt="" />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                    </div>
                                    <div className="card-footer">
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100">
                                    <img className="card-img-top" src={Thumbnail6} alt="" />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                    </div>
                                    <div className="card-footer">
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                            {`import Thumbnail2 from "../../../assets/images/gallery/2.jpg";
import Thumbnail5 from "../../../assets/images/gallery/5.jpg";
import Thumbnail6 from "../../../assets/images/gallery/6.jpg";
                                
<div className="row row-cols-1 row-cols-md-3 g-4">
    <div className="col">
        <div className="card h-100">
            <img className="card-img-top" src={Thumbnail2} alt="" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
            </div>
        </div>
    </div>
    <div className="col">
        <div className="card h-100">
            <img className="card-img-top" src={Thumbnail5} alt="" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            </div>
            <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
            </div>
        </div>
    </div>
    <div className="col">
        <div className="card h-100">
            <img className="card-img-top" src={Thumbnail6} alt="" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            </div>
            <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
            </div>
        </div>
    </div>
</div>`}
                        </SyntaxHighlighter>
                    </div>

                    <h3 id="masonry">Masonry</h3>
                    <p>In <code>v4</code> we used a CSS-only technique to mimic the behavior of <a href="https://masonry.desandro.com/">Masonry</a>-like columns, but this technique came with lots of unpleasant <a href="https://github.com/twbs/bootstrap/pull/28922">side effects</a>. If you want to have this type of layout in <code>v5</code>, you can just make use of Masonry plugin. <strong>Masonry is not included in Bootstrap</strong>, but we’ve made a <a href="https://v5.getbootstrap.com/docs/5.0/examples/masonry/">demo example</a> to help you get started.</p>
                </div>
            </div>
        </div>
    );
}


export default CardsLyouts;