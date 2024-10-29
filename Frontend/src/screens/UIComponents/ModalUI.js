import React from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import BasicModal from "../../components/UI/BasicModal";
import OptionalSizesModal from "../../components/UI/OptionalSizesModal";
import StaticModal from "../../components/UI/StaticModal";
import VerticallyCenteredModal from "../../components/UI/VerticallyCenteredModal";


function ModalUI() {

    return (
        <div className="container">
            <div className="col-12">
                <div className="card p-4 bd-content">
                    <h2 id="how-it-works">How it works</h2>
                    <p>Before getting started with Bootstrap’s modal component, be sure to read the following as our menu options have recently changed.</p>
                    <div className="alert alert-danger" role="alert">
                        <strong>Modal</strong> for more bootstrao components <a href="https://v5.getbootstrap.com/docs/5.0/components/modal/" target="_blank" rel="noopener noreferrer">Bootstrap Modal documentation <i className="fa fa-external-link"></i></a>
                    </div>
                    <ul>
                        <li>Modals are built with HTML, CSS, and JavaScript. They’re positioned over everything else in the document and remove scroll from the <code>&lt;body&gt;</code> so that modal content scrolls instead.</li>
                        <li>Clicking on the modal “backdrop” will automatically close the modal.</li>
                        <li>Bootstrap only supports one modal window at a time. Nested modals aren’t supported as we believe them to be poor user experiences.</li>
                        <li>Modals use <code>position: fixed</code>, which can sometimes be a bit particular about its rendering. Whenever possible, place your modal HTML in a top-level position to avoid potential interference from other elements. You’ll likely run into issues when nesting a <code>.modal</code> within another fixed element.</li>
                        <li>Once again, due to <code>position: fixed</code>, there are some caveats with using modals on mobile devices. <a href="https://v5.getbootstrap.com/docs/5.0/getting-started/browsers-devices/#modals-and-dropdowns-on-mobile">See our browser support docs</a> for details.</li>
                        <li>Due to how HTML5 defines its semantics, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-autofocus">the <code>autofocus</code> HTML attribute</a> has no effect in Bootstrap modals. To achieve the same effect, use some custom JavaScript:</li>
                    </ul>
                    <div className="mb-5">
                        <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                            {`<ul class="list-group list-group-flush">
    <li class="list-group-item">Cras justo odio</li>
    <li class="list-group-item">Dapibus ac facilisis in</li>
    <li class="list-group-item">Morbi leo risus</li>
    <li class="list-group-item">Porta ac consectetur ac</li>
    <li class="list-group-item">Vestibulum at eros</li>
</ul>`}
                        </SyntaxHighlighter>
                    </div>
                    <BasicModal />
                    <StaticModal />
                    <VerticallyCenteredModal />
                    <OptionalSizesModal />
                </div>
            </div>
        </div>
    )
}


export default ModalUI;