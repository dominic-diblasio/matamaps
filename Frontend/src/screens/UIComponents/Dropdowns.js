import React from "react";
import FormsDropdown from "../../components/UI/FormsDropdown";
import SingleButtonDropDown from "../../components/UI/SingleButtonDropDown";
import SizingDropdown from "../../components/UI/SizingDropdown";
import SplitButtonDropdown from "../../components/UI/SplitButtonDropdown";
import TextDropdown from "../../components/UI/TextDropdown";



function Dropdowns() {

    return (
        <div className="container">
            <div className="col-12">
                <div className="card p-4 bd-content">
                    <div className="alert alert-danger" role="alert">
                        <strong>Dropdowns</strong> for more bootstrao components <a href="https://getbootstrap.com/docs/4.5/components/dropdowns/" target="_blank" rel="noopener noreferrer">Bootstrap Dropdowns documentation <i className="fa fa-external-link"></i></a>
                    </div>
                    <h2 id="overview">Overview</h2>
                    <p>Dropdowns are toggleable, contextual overlays for displaying lists of links and more. They’re made interactive with the included Bootstrap dropdown JavaScript plugin. They’re toggled by clicking, not by hovering; this is <a href="https://markdotto.com/2012/02/27/bootstrap-explained-dropdowns/">an intentional design decision</a>.</p>
                    <p>Dropdowns are built on a third party library, <a href="https://popper.js.org/">Popper.js</a>, which provides dynamic positioning and viewport detection. Be sure to include <a href="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js">popper.min.js</a> before Bootstrap’s JavaScript or use <code>bootstrap.bundle.min.js</code> / <code>bootstrap.bundle.js</code> which contains Popper.js. Popper.js isn’t used to position dropdowns in navbars though as dynamic positioning isn’t required.</p>
                    <SingleButtonDropDown />
                    <SplitButtonDropdown />
                    <SizingDropdown />
                    <TextDropdown />
                    <FormsDropdown />
                </div>
            </div>
        </div>
    )
}


export default Dropdowns;