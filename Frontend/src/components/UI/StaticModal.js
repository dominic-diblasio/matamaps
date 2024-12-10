import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function StaticModal() {
    const [isModal, setIsModal] = useState(false);

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
            <h5 id="static-backdrop">Static backdrop</h5>
            <p>When backdrop is set to static, the modal will not close when clicking outside it. Click the button below to try it.</p>
            <ul className="nav nav-tabs tab-card px-3 border-bottom-0" role="tablist">
                <li className="nav-item"><a className="nav-link smodal-nav-link-1 active" href="#!" onClick={(e) => { e.preventDefault(); tabEvent(e, "smodal-nav-Preview1", "smodal-tab-pane-1", "smodal-nav-link-1") }} >Preview</a></li>
                <li className="nav-item"><a className="nav-link smodal-nav-link-1" href="#!" onClick={(e) => { e.preventDefault(); tabEvent(e, "smodal-nav-HTML1", "smodal-tab-pane-1", "smodal-nav-link-1") }} >HTML</a></li>
            </ul>
            <div className="card mb-3 bg-transparent">
                <div className="card-body">
                    <div className="tab-content">
                        <div className="tab-pane fade smodal-tab-pane-1 active show" id="smodal-nav-Preview1" role="tabpanel">
                            <button type="button" className="btn btn-secondary" onClick={() => { setIsModal(true) }}>Launch static backdrop modal</button>
                            <Modal show={isModal} onHide={() => { setIsModal(false) }}>
                                <Modal.Header>
                                    <h5 className="modal-title" id="staticBackdropLiveLabel">Modal title</h5>
                                    <button type="button" className="btn-close" onClick={() => { setIsModal(false) }}  ></button>
                                </Modal.Header>

                                <Modal.Body>
                                    <p>I will not close if you click outside me. Don't even try to press escape key.</p>
                                </Modal.Body>

                                <Modal.Footer>
                                    <button type="button" className="btn btn-secondary" onClick={() => { setIsModal(false) }}>Close</button>
                                    <button type="button" className="btn btn-primary" onClick={() => { setIsModal(false) }}>Save changes</button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                        <div className="tab-pane fade smodal-tab-pane-1" id="smodal-nav-HTML1" role="tabpanel">
                            <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                                {`<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#staticBackdropLive">Launch static backdrop modal</button>

<!-- Modal -->
<Modal show={isModal} onHide={()=>{ this.setState({ isModal:false }) }}>
    <Modal.Header>
        <h5 className="modal-title" id="staticBackdropLiveLabel">Modal title</h5>
        <button type="button" className="btn-close" onClick={()=>{ this.setState({ isModal:false }) }}  ></button>
    </Modal.Header>

    <Modal.Body>
        <p>I will not close if you click outside me. Don't even try to press escape key.</p>
    </Modal.Body>

    <Modal.Footer>
        <button type="button" className="btn btn-secondary" onClick={()=>{ this.setState({ isModal:false }) }}>Close</button>
        <button type="button" className="btn btn-primary" onClick={()=>{ this.setState({ isModal:false }) }}>Save changes</button>
    </Modal.Footer>
</Modal>`}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default StaticModal;