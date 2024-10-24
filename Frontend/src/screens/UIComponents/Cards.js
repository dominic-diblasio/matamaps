import React from "react";
import CardsLyouts from "../../components/UI/CardsLyouts";


function Cards() {

    return (
        <div className="container">
            <div className="col-12">
                <div className="row justify-content-between ">
                    <CardsLyouts />
                    <div className="col-lg-3 col-sm-12 d-none d-sm-block">
                        <div className="card p-4 sticky-lg-top">
                            <strong className="d-block h6 my-2 pb-2 border-bottom">On this page</strong>
                            <nav>
                                <ul>
                                    <li><a href="#about">About</a></li>
                                    <li><a href="#example">Example</a></li>
                                    <li><a href="#content-types">Content types</a>
                                        <ul>
                                            <li><a href="#body">Body</a></li>
                                            <li><a href="#titles-text-and-links">Titles, text, and links</a></li>
                                            <li><a href="#images">Images</a></li>
                                            <li><a href="#list-groups">List groups</a></li>
                                            <li><a href="#kitchen-sink">Kitchen sink</a></li>
                                            <li><a href="#header-and-footer">Header and footer</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#sizing">Sizing</a>
                                        <ul>
                                            <li><a href="#using-grid-markup">Using grid markup</a></li>
                                            <li><a href="#using-utilities">Using utilities</a></li>
                                            <li><a href="#using-custom-css">Using custom CSS</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#text-alignment">Text alignment</a></li>
                                    <li><a href="#navigation">Navigation</a></li>
                                    <li><a href="#images-1">Images</a>
                                        <ul>
                                            <li><a href="#image-caps">Image caps</a></li>
                                            <li><a href="#image-overlays">Image overlays</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#horizontal">Horizontal</a></li>
                                    <li><a href="#card-styles">Card styles</a>
                                        <ul>
                                            <li><a href="#background-and-color">Background and color</a></li>
                                            <li><a href="#border">Border</a></li>
                                            <li><a href="#mixins-utilities">Mixins utilities</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#card-layout">Card layout</a>
                                        <ul>
                                            <li><a href="#card-groups">Card groups</a></li>
                                            <li><a href="#grid-cards">Grid cards</a></li>
                                            <li><a href="#masonry">Masonry</a></li>
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


export default Cards;