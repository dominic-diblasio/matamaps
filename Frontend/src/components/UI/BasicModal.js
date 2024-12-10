import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function BasicModal() {
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
            <h4 id="modal-components">Modal components</h4>
            <p>Below is a <em>static</em> modal example (meaning its <code>position</code> and <code>display</code> have been overridden). Included are the modal header, modal body (required for <code>padding</code>), and modal footer (optional). We ask that you include modal headers with dismiss actions whenever possible, or provide another explicit dismiss action.</p>
            <ul className="nav nav-tabs tab-card px-3 border-bottom-0" role="tablist">
                <li className="nav-item"><a className="nav-link bmodal-nav-link-1 active" href="#!" onClick={(e) => { e.preventDefault(); tabEvent(e, "bmodal-nav-Preview1", "bmodal-tab-pane-1", "bmodal-nav-link-1") }} >Preview</a></li>
                <li className="nav-item"><a className="nav-link bmodal-nav-link-1" href="#!" onClick={(e) => { e.preventDefault(); tabEvent(e, "bmodal-nav-HTML1", "bmodal-tab-pane-1", "bmodal-nav-link-1") }} >HTML</a></li>
            </ul>
            <div className="card mb-3 bg-transparent">
                <div className="card-body">
                    <div className="tab-content">
                        <div className="tab-pane fade bmodal-tab-pane-1 active show" id="bmodal-nav-Preview1" role="tabpanel">
                            <button type="button" className="btn btn-secondary" onClick={() => { setIsModal(true) }}>Launch demo modal</button>
                            <Modal show={isModal} onHide={() => { setIsModal(false) }}>
                                <Modal.Header>
                                    <h5 className="modal-title" id="exampleModalLiveLabel">Modal title</h5>
                                    <button type="button" className="btn-close" onClick={() => { setIsModal(false) }}  ></button>
                                </Modal.Header>

                                <Modal.Body>
                                    <p>Woohoo, you're reading this text in a modal!</p>
                                </Modal.Body>

                                <Modal.Footer>
                                    <button type="button" className="btn btn-secondary" onClick={() => { setIsModal(false) }}>Close</button>
                                    <button type="button" className="btn btn-primary" onClick={() => { setIsModal(false) }}>Save changes</button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                        <div className="tab-pane fade bmodal-tab-pane-1" id="bmodal-nav-HTML1" role="tabpanel">
                            <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                                {`<!-- Button trigger modal -->
<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalLive">Launch demo modal</button>

<!-- Modal -->
<Modal show={isModal} onHide={()=>{ this.setState({ isModal:false }) }}>
    <Modal.Header>
        <h5 className="modal-title" id="exampleModalLiveLabel">Modal title</h5>
        <button type="button" className="btn-close" onClick={()=>{ this.setState({ isModal:false }) }}  ></button>
    </Modal.Header>

    <Modal.Body>
    <p>Woohoo, you're reading this text in a modal!</p>
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


export default BasicModal;