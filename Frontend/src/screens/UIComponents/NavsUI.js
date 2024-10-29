import React from "react";
import BasicNavs from "../../components/UI/BasicNavs";
import PillsNavs from "../../components/UI/PillsNavs";
import TabsNavs from "../../components/UI/TabsNavs";

function NavsUI(props) {

    const { activeLayout } = props;
    return (
        <div className={activeLayout === "HeadertopMenuContainer" || activeLayout === "HeaderSubmenuContainer" || activeLayout === "HeaderSubmenuOverlayContainer" ? "container" : "container-fluid"}>
            <div className="col-12">
                <div className="card p-4 bd-content">
                    <h2 id="base-nav">Base nav</h2>
                    <p>Before getting started with Bootstrap’s modal component, be sure to read the following as our menu options have recently changed.</p>
                    <p>The base <code>.nav</code> component is built with flexbox and provide a strong foundation for building all types of navigation components. It includes some style overrides (for working with lists), some link padding for larger hit areas, and basic disabled styling.</p>
                    <div className="alert alert-danger" role="alert">
                        <strong>Navs</strong> for more bootstrao components <a href="https://v5.getbootstrap.com/docs/5.0/components/navs/#javascript-behavior" target="_blank" rel="noopener noreferrer">Bootstrap Navs documentation <i className="fa fa-external-link"></i></a>
                    </div>
                    <div className="card card-callout p-3">
                        <p className="mb-0">The base <code>.nav</code> component does not include any <code>.active</code> state. The following examples include the class, mainly to demonstrate that this particular class does not trigger any special styling.</p>
                        <p className="mb-0">To convey the active state to assistive technologies, use the <code>aria-current</code> attribute — using the <code>page</code> value for current page, or <code>true</code> for the current item in a set.</p>
                    </div>
                    <BasicNavs />
                    <TabsNavs />
                    <PillsNavs />
                </div>
            </div>
        </div>
    )
}



export default NavsUI;