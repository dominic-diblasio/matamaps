import React from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Thumbnail1 from "../../assets/images/gallery/1.jpg";
import Thumbnail2 from "../../assets/images/gallery/2.jpg";
import Thumbnail3 from "../../assets/images/gallery/3.jpg";
import Thumbnail5 from "../../assets/images/gallery/5.jpg";
import Thumbnail6 from "../../assets/images/gallery/6.jpg";
import Thumbnail7 from "../../assets/images/gallery/7.jpg";
import Thumbnail8 from "../../assets/images/gallery/8.jpg";
import Thumbnail10 from "../../assets/images/gallery/10.jpg";
import { Carousel } from "react-bootstrap";

function CarouselUITile() {

    return (
        <div className="col-lg-8 col-sm-12">
            <div className="card">
                <div className="card-body">
                    <h2 id="how-it-works">How it works</h2>
                    <p>The carousel is a slideshow for cycling through a series of content, built with CSS 3D transforms and a bit of JavaScript. It works with a series of images, text, or custom markup. It also includes support for previous/next controls and indicators.</p>
                    <p>In browsers where the <a href="https://www.w3.org/TR/page-visibility/">Page Visibility API</a> is supported, the carousel will avoid sliding when the webpage is not visible to the user (such as when the browser tab is inactive, the browser window is minimized, etc.).</p>
                    <div className="card card-callout mb-3">
                        <div className="card-body">
                            The animation effect of this component is dependent on the <code>prefers-reduced-motion</code> media query. See the <a href="https://v5.getbootstrap.com/docs/5.0/getting-started/accessibility/#reduced-motion">reduced motion section of our accessibility documentation</a>.
                        </div>
                    </div>
                    <p>Please be aware that nested carousels are not supported, and carousels are generally not compliant with accessibility standards.</p>
                    <h2 id="example">Example</h2>
                    <p>Carousels don’t automatically normalize slide dimensions. As such, you may need to use additional utilities or custom styles to appropriately size content. While carousels support previous/next controls and indicators, they’re not explicitly required. Add and customize as you see fit.</p>
                    <p><strong>The <code>.active</code> class needs to be added to one of the slides</strong> otherwise the carousel will not be visible. Also be sure to set a unique id on the <code>.carousel</code> for optional controls, especially if you’re using multiple carousels on a single page. Control and indicator elements must have a <code>data-target</code> attribute (or <code>href</code> for links) that matches the id of the <code>.carousel</code> element.</p>
                    <h3 id="slides-only">Slides only</h3>
                    <p>Here’s a carousel with slides only. Note the presence of the <code>.d-block</code> and <code>.w-100</code> on carousel images to prevent browser default image alignment.</p>
                    <div className="bd-example mb-5">
                        <div className="card">
                            <div className="card-body">
                                <Carousel controls={false}>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={Thumbnail10}
                                            alt="First slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={Thumbnail8}
                                            alt="First slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={Thumbnail1}
                                            alt="First slide"
                                        />
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                        </div>
                        <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                            {`import Thumbnail10 from "../../assets/images/gallery/10.jpg";
import Thumbnail8 from "../../assets/images/gallery/8.jpg";
import Thumbnail1 from "../../assets/images/gallery/1.jpg";

<Carousel controls={false}>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src={Thumbnail10}
        alt="First slide"
        />
    </Carousel.Item>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src={Thumbnail8}
        alt="First slide"
        />
    </Carousel.Item>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src={Thumbnail1}
        alt="First slide"
        />
    </Carousel.Item>
</Carousel>`}
                        </SyntaxHighlighter>
                    </div>
                    <h3 id="with-controls">With controls</h3>
                    <p>Adding in the previous and next controls:</p>
                    <div className="bd-example mb-5">
                        <div className="card">
                            <div className="card-body">
                                <Carousel >
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={Thumbnail10}
                                            alt="First slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={Thumbnail8}
                                            alt="First slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={Thumbnail1}
                                            alt="First slide"
                                        />
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                        </div>
                        <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                            {`import Thumbnail10 from "../../assets/images/gallery/10.jpg";
import Thumbnail8 from "../../assets/images/gallery/8.jpg";
import Thumbnail1 from "../../assets/images/gallery/1.jpg";


<Carousel >
    <Carousel.Item>
        <img
        className="d-block w-100"
        src={Thumbnail10}
        alt="First slide"
        />
    </Carousel.Item>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src={Thumbnail8}
        alt="First slide"
        />
    </Carousel.Item>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src={Thumbnail1}
        alt="First slide"
        />
    </Carousel.Item>
</Carousel>`}
                        </SyntaxHighlighter>
                    </div>
                    <h3 id="with-controls">With indicators</h3>
                    <p>You can also add the indicators to the carousel, alongside the controls, too.</p>
                    <div className="bd-example mb-5">
                        <div className="card">
                            <div className="card-body">
                                <Carousel indicators={true}>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={Thumbnail10}
                                            alt="First slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={Thumbnail8}
                                            alt="First slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={Thumbnail1}
                                            alt="First slide"
                                        />
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                        </div>
                        <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                            {`import Thumbnail10 from "../../assets/images/gallery/10.jpg";
import Thumbnail8 from "../../assets/images/gallery/8.jpg";
import Thumbnail1 from "../../assets/images/gallery/1.jpg";

                                
<Carousel indicators = {true}>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src={Thumbnail10}
        alt="First slide"
        />
    </Carousel.Item>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src={Thumbnail8}
        alt="First slide"
        />
    </Carousel.Item>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src={Thumbnail1}
        alt="First slide"
        />
    </Carousel.Item>
</Carousel>`}
                        </SyntaxHighlighter>
                    </div>
                    <h3 id="with-controls">With captions</h3>
                    <p>Add captions to your slides easily with the <code>.carousel-caption</code> element within any <code>.carousel-item</code>. They can be easily hidden on smaller viewports, as shown below, with optional <a href="https://v5.getbootstrap.com/docs/5.0/utilities/display/">display utilities</a>. We hide them initially with <code>.d-none</code> and bring them back on medium-sized devices with <code>.d-md-block</code>.</p>
                    <div className="bd-example mb-5">
                        <div className="card">
                            <div className="card-body">
                                <Carousel indicators={true}>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={Thumbnail1}
                                            alt="First slide"
                                        />
                                        <Carousel.Caption>
                                            <h3>First slide label</h3>
                                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={Thumbnail2}
                                            alt="First slide"
                                        />
                                        <Carousel.Caption>
                                            <h3>Second slide label</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={Thumbnail3}
                                            alt="First slide"
                                        />
                                        <Carousel.Caption>
                                            <h3>Third slide label</h3>
                                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                        </div>
                        <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                            {`import Thumbnail1 from "../../assets/images/gallery/1.jpg";
import Thumbnail2 from "../../assets/images/gallery/2.jpg";
import Thumbnail3 from "../../assets/images/gallery/3.jpg";
                                
<Carousel indicators = {true}>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src={Thumbnail1}
        alt="First slide"
        />
            <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src={Thumbnail2}
        alt="First slide"
        />
        <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src={Thumbnail3}
        alt="First slide"
        />
        <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
    </Carousel.Item>
</Carousel>`}
                        </SyntaxHighlighter>
                    </div>
                    <h3 id="with-controls">Crossfade</h3>
                    <p>Add <code>.carousel-fade</code> to your carousel to animate slides with a fade transition instead of a slide.</p>
                    <div className="bd-example mb-5">
                        <div className="card">
                            <div className="card-body">
                                <Carousel controls={true}>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={Thumbnail10}
                                            alt="First slide"
                                        />

                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={Thumbnail8}
                                            alt="First slide"
                                        />

                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={Thumbnail1}
                                            alt="First slide"
                                        />

                                    </Carousel.Item>
                                </Carousel>
                            </div>
                        </div>
                        <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                            {`import Thumbnail10 from "../../assets/images/gallery/10.jpg";
import Thumbnail8 from "../../assets/images/gallery/8.jpg";
import Thumbnail1 from "../../assets/images/gallery/1.jpg";
                                
                                
                                
<Carousel controls = {true}>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src={Thumbnail10}
        alt="First slide"
        />

    </Carousel.Item>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src={Thumbnail8}
        alt="First slide"
        />
        
    </Carousel.Item>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src={Thumbnail1}
        alt="First slide"
        />
        
    </Carousel.Item>
</Carousel>`}
                        </SyntaxHighlighter>
                    </div>
                    <h3 id="individual-carousel-item-interval">Individual <code>.carousel-item</code> interval</h3>
                    <p>Add <code>data-interval=""</code> to a <code>.carousel-item</code> to change the amount of time to delay between automatically cycling to the next item.</p>
                    <div className="bd-example mb-5">
                        <div className="card">
                            <div className="card-body">
                                <Carousel controls={true}>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={Thumbnail2}
                                            alt="First slide"
                                        />

                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={Thumbnail5}
                                            alt="First slide"
                                        />

                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={Thumbnail7}
                                            alt="First slide"
                                        />

                                    </Carousel.Item>
                                </Carousel>
                            </div>
                        </div>
                        <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                            {`import Thumbnail2 from "../../assets/images/gallery/2.jpg";
import Thumbnail5 from "../../assets/images/gallery/5.jpg";
import Thumbnail7 from "../../assets/images/gallery/7.jpg";
                                
<Carousel controls = {true}>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src={Thumbnail2}
        alt="First slide"
        />

    </Carousel.Item>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src={Thumbnail5}
        alt="First slide"
        />
        
    </Carousel.Item>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src={Thumbnail7}
        alt="First slide"
        />
        
    </Carousel.Item>
</Carousel>`}
                        </SyntaxHighlighter>
                    </div>
                    <h2 id="dark-variant">Dark variant</h2>
                    <p>Add <code>.carousel-dark</code> to the <code>.carousel</code> for darker controls, indicators, and captions. Controls have been inverted from their default white fill with the <code>filter</code> CSS property. Captions and controls have additional Sass variables that customize the <code>color</code> and <code>background-color</code>.</p>
                    <div className="bd-example mb-5">
                        <div className="card">
                            <div className="card-body">
                                <Carousel indicators={true} className="carousel-dark">
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={Thumbnail3}
                                            alt="First slide"
                                        />
                                        <Carousel.Caption>
                                            <h3>First slide label</h3>
                                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={Thumbnail8}
                                            alt="First slide"
                                        />
                                        <Carousel.Caption>
                                            <h3>Second slide label</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={Thumbnail6}
                                            alt="First slide"
                                        />
                                        <Carousel.Caption>
                                            <h3>Third slide label</h3>
                                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                        </div>
                        <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                            {`import Thumbnail2 from "../../assets/images/gallery/2.jpg";
import Thumbnail5 from "../../assets/images/gallery/5.jpg";
import Thumbnail7 from "../../assets/images/gallery/7.jpg";
                                
<Carousel indicators = {true} className="carousel-dark">
    <Carousel.Item>
        <img
        className="d-block w-100"
        src={Thumbnail3}
        alt="First slide"
        />
        <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src={Thumbnail8}
        alt="First slide"
        />
        <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src={Thumbnail6}
        alt="First slide"
        />
        <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
    </Carousel.Item>
</Carousel>`}
                        </SyntaxHighlighter>
                    </div>
                    <h2 id="usage">Usage</h2>
                    <h3 id="via-data-attributes">Via data attributes</h3>
                    <p>Use data attributes to easily control the position of the carousel. <code>data-slide</code> accepts the keywords <code>prev</code> or <code>next</code>, which alters the slide position relative to its current position. Alternatively, use <code>data-slide-to</code> to pass a raw slide index to the carousel <code>data-slide-to="2"</code>, which shifts the slide position to a particular index beginning with <code>0</code>.</p>
                    <p>The <code>data-ride="carousel"</code> attribute is used to mark a carousel as animating starting at page load. If you don’t use <code>data-ride="carousel"</code> to initialize your carousel, you have to initialize it yourself. <strong>It cannot be used in combination with (redundant and unnecessary) explicit JavaScript initialization of the same carousel.</strong></p>
                    <h3 id="via-javascript">Via JavaScript</h3>
                    <p>Call carousel manually with:</p>
                    <div className="bd-example mb-5">
                        <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                            {`var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel)`}
                        </SyntaxHighlighter>
                    </div>
                    <h3 id="options">Options</h3>
                    <p>Options can be passed via data attributes or JavaScript. For data attributes, append the option name to <code>data-</code>, as in <code>data-interval=""</code>.</p>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Method</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><code>cycle</code></td>
                                <td>Cycles through the carousel items from left to right.</td>
                            </tr>
                            <tr>
                                <td><code>pause</code></td>
                                <td>Stops the carousel from cycling through items.</td>
                            </tr>
                            <tr>
                                <td><code>prev</code></td>
                                <td>Cycles to the previous item. <strong>Returns to the caller before the previous item has been shown</strong> (e.g., before the <code>slid.bs.carousel</code> event occurs).</td>
                            </tr>
                            <tr>
                                <td><code>next</code></td>
                                <td>Cycles to the next item. <strong>Returns to the caller before the next item has been shown</strong> (e.g., before the <code>slid.bs.carousel</code> event occurs).</td>
                            </tr>
                            <tr>
                                <td><code>nextWhenVisible</code></td>
                                <td>Cycles the carousel to a particular frame (0 based, similar to an array). <strong>Returns to the caller before the target item has been shown</strong> (e.g., before the <code>slid.bs.carousel</code> event occurs).</td>
                            </tr>
                            <tr>
                                <td><code>dispose</code></td>
                                <td>Destroys an element's carousel.</td>
                            </tr>
                            <tr>
                                <td><code>getInstance</code></td>
                                <td>Static method which allows you to get the carousel instance associated with a DOM element.</td>
                            </tr>
                        </tbody>
                    </table>
                    <h3 id="methods">Methods</h3>
                    <div className="card card-callout">
                        <div className="card-body">
                            <h4 id="asynchronous-methods-and-transitions">Asynchronous methods and transitions</h4>
                            <p>All API methods are <strong>asynchronous</strong> and start a <strong>transition</strong>. They return to the caller as soon as the transition is started but <strong>before it ends</strong>. In addition, a method call on a <strong>transitioning component will be ignored</strong>.</p>
                            <p><a href="https://v5.getbootstrap.com/docs/5.0/getting-started/javascript/#asynchronous-functions-and-transitions">See our JavaScript documentation for more information</a>.</p>
                        </div>
                    </div>
                    <p>You can create a carousel instance with the carousel constructor, for example, to initialize with additional options and start cycling through items:</p>
                    <div className="bd-example mb-5">
                        <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                            {`var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 2000,
    wrap: false
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
                                <td><code>cycle</code></td>
                                <td>Cycles through the carousel items from left to right.</td>
                            </tr>
                            <tr>
                                <td><code>pause</code></td>
                                <td>Stops the carousel from cycling through items.</td>
                            </tr>
                            <tr>
                                <td><code>prev</code></td>
                                <td>Cycles to the previous item. <strong>Returns to the caller before the previous item has been shown</strong> (e.g., before the <code>slid.bs.carousel</code> event occurs).</td>
                            </tr>
                            <tr>
                                <td><code>next</code></td>
                                <td>Cycles to the next item. <strong>Returns to the caller before the next item has been shown</strong> (e.g., before the <code>slid.bs.carousel</code> event occurs).</td>
                            </tr>
                            <tr>
                                <td><code>nextWhenVisible</code></td>
                                <td>Cycles the carousel to a particular frame (0 based, similar to an array). <strong>Returns to the caller before the target item has been shown</strong> (e.g., before the <code>slid.bs.carousel</code> event occurs).</td>
                            </tr>
                            <tr>
                                <td><code>dispose</code></td>
                                <td>Destroys an element's carousel.</td>
                            </tr>
                            <tr>
                                <td><code>getInstance</code></td>
                                <td>Static method which allows you to get the carousel instance associated with a DOM element.</td>
                            </tr>
                        </tbody>
                    </table>
                    <h3 id="events">Events</h3>
                    <p>Bootstrap’s carousel class exposes two events for hooking into carousel functionality. Both events have the following additional properties:</p>
                    <ul>
                        <li><code>direction</code>: The direction in which the carousel is sliding (either <code>"left"</code> or <code>"right"</code>).</li>
                        <li><code>relatedTarget</code>: The DOM element that is being slid into place as the active item.</li>
                        <li><code>from</code>: The index of the current item</li>
                        <li><code>to</code>: The index of the next item</li>
                    </ul>
                    <p>All carousel events are fired at the carousel itself (i.e. at the <code>&lt;div className="carousel"&gt;</code>).</p>
                    <table className="table">
                        <thead>
                            <tr>
                                <th style={{ width: 150 }}>Event type</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><code>slide.bs.carousel</code></td>
                                <td>Fires immediately when the <code>slide</code> instance method is invoked.</td>
                            </tr>
                            <tr>
                                <td><code>slid.bs.carousel</code></td>
                                <td>Fired when the carousel has completed its slide transition.</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="bd-example mb-5">
                        <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                            {`var myCarousel = document.getElementById('myCarousel')

myCarousel.addEventListener('slide.bs.carousel', function () {
    // do something...
})`}
                        </SyntaxHighlighter>
                    </div>
                    <h3 id="change-transition-duration">Change transition duration</h3>
                    <p>The transition duration of <code>.carousel-item</code> can be changed with the <code>$carousel-transition</code> Sass variable before compiling or custom styles if you’re using the compiled CSS. If multiple transitions are applied, make sure the transform transition is defined first (eg. <code>transition: transform 2s ease, opacity .5s ease-out</code>).</p>

                </div>
            </div>
        </div>
    );
}

export default CarouselUITile;