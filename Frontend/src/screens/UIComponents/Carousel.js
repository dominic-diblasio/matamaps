import React from "react";
import CarouselUITile from "../../components/UI/CarouselUITile";


function Carousel() {

    return (
        <div className="container">
            <div className="col-12">
                <div className="row justify-content-between">
                    <CarouselUITile />
                    <div className="col-lg-3 col-sm-12 d-none d-sm-block">
                        <div className="sticky-lg-top card p-4">
                            <strong className="d-block h6 my-2 pb-2 border-bottom">On this page</strong>
                            <nav>
                                <ul>
                                    <li><a href="#how-it-works">How it works</a></li>
                                    <li><a href="#example">Example</a>
                                        <ul>
                                            <li><a href="#slides-only">Slides only</a></li>
                                            <li><a href="#with-controls">With controls</a></li>
                                            <li><a href="#with-indicators">With indicators</a></li>
                                            <li><a href="#with-captions">With captions</a></li>
                                            <li><a href="#crossfade">Crossfade</a></li>
                                            <li><a href="#individual-carousel-item-interval">Individual <code>.carousel-item</code> interval</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#dark-variant">Dark variant</a></li>
                                    <li><a href="#usage">Usage</a>
                                        <ul>
                                            <li><a href="#via-data-attributes">Via data attributes</a></li>
                                            <li><a href="#via-javascript">Via JavaScript</a></li>
                                            <li><a href="#options">Options</a></li>
                                            <li><a href="#methods">Methods</a></li>
                                            <li><a href="#events">Events</a></li>
                                            <li><a href="#change-transition-duration">Change transition duration</a></li>
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



export default Carousel;