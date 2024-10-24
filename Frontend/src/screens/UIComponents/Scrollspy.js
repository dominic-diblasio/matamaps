import React from "react";
import ScrollSpyExample1 from "../../components/UI/ScrollSpyExample1";
import ScrollSpyExample2 from "../../components/UI/ScrollSpyExample2";

function Scrollspy(props) {

    const { activeLayout } = props;
    return (
        <div className={activeLayout === "HeadertopMenuContainer" || activeLayout === "HeaderSubmenuContainer" || activeLayout === "HeaderSubmenuOverlayContainer" ? "container" : "container-fluid"}>
            <div className="col-12">
                <div className="card p-4 bd-content ps-lg-4">
                    <h2 id="how-it-works">How it works</h2>
                    <p>Scrollspy has a few requirements to function properly:</p>
                    <div className="alert alert-danger" role="alert">
                        <strong>Scrollspy</strong> for more bootstrao components <a href="https://v5.getbootstrap.com/docs/5.0/components/scrollspy/" target="_blank" rel="noopener noreferrer">Bootstrap Scrollspy documentation <i className="fa fa-external-link"></i></a>
                    </div>
                    <ul>
                        <li>It must be used on a Bootstrap <a href="https://v5.getbootstrap.com/docs/5.0/components/navs/">nav component</a> or <a href="https://v5.getbootstrap.com/docs/5.0/components/list-group/">list group</a>.</li>
                        <li>Scrollspy requires <code>position: relative;</code> on the element you’re spying on, usually the <code>&lt;body&gt;</code>.</li>
                        <li>Anchors (<code>&lt;a&gt;</code>) are required and must point to an element with that <code>id</code>.</li>
                    </ul>
                    <p>When successfully implemented, your nav or list group will update accordingly, moving the <code>.active</code> class from one item to the next based on their associated targets.</p>
                    <div className="card card-callout p-3">
                        <h3 id="scrollable-containers-and-keyboard-access">Scrollable containers and keyboard access</h3>
                        <p className="mb-0">If you’re making a scrollable container (other than the <code>&lt;body&gt;</code>), be sure to have a <code>height</code> set and <code>overflow-y: scroll;</code> applied to it—alongside a <code>tabindex="0"</code> to ensure keyboard access.</p>
                    </div>
                    <ScrollSpyExample1 />
                    <ScrollSpyExample2 />

                </div>
            </div>
        </div>
    )
}



export default Scrollspy;