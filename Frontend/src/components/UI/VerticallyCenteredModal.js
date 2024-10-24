import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function VerticallyCenteredModal() {

    const [isModal, setIsModal] = useState(false);
    const [isModal1, setIsModal1] = useState(false);

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
            <h5 id="static-backdrop">Vertically centered</h5>
            <p>Add <code>.modal-dialog-centered</code> to <code>.modal-dialog</code> to vertically center the modal.</p>
            <ul className="nav nav-tabs tab-card px-3 border-bottom-0" role="tablist">
                <li className="nav-item"><a className="nav-link vcmodal-nav-link-1 active" href="#!" onClick={(e) => { e.preventDefault(); tabEvent(e, "vcmodal-nav-Preview1", "vcmodal-tab-pane-1", "vcmodal-nav-link-1") }} >Preview</a></li>
                <li className="nav-item"><a className="nav-link vcmodal-nav-link-1" href="#!" onClick={(e) => { e.preventDefault(); tabEvent(e, "vcmodal-nav-HTML1", "vcmodal-tab-pane-1", "vcmodal-nav-link-1") }} >HTML</a></li>
            </ul>
            <div className="card mb-3 bg-transparent">
                <div className="card-body">
                    <div className="tab-content">
                        <div className="tab-pane fade vcmodal-tab-pane-1 active show" id="vcmodal-nav-Preview1" role="tabpanel">
                            <button type="button" className="btn btn-secondary" onClick={() => { setIsModal(true) }}>Vertically centered modal</button>
                            <button type="button" className="btn btn-secondary ms-1" onClick={() => { setIsModal1(true) }}>Vertically centered scrollable modal</button>
                            <Modal show={isModal} centered onHide={() => { setIsModal(false) }}>
                                <Modal.Header>
                                    <h5 className="modal-title" id="staticBackdropLiveLabel">Modal title</h5>
                                    <button type="button" className="btn-close" onClick={() => { setIsModal(false) }}  ></button>
                                </Modal.Header>

                                <Modal.Body>
                                    <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                </Modal.Body>

                                <Modal.Footer>
                                    <button type="button" className="btn btn-secondary" onClick={() => { setIsModal(false) }}>Close</button>
                                    <button type="button" className="btn btn-primary" onClick={() => { setIsModal(false) }}>Save changes</button>
                                </Modal.Footer>
                            </Modal>
                            <Modal show={isModal1} centered onHide={() => { setIsModal1(false) }}>
                                <Modal.Header>
                                    <h5 className="modal-title" id="staticBackdropLiveLabel">Modal title</h5>
                                    <button type="button" className="btn-close" onClick={() => { setIsModal1(false) }}  ></button>
                                </Modal.Header>

                                <Modal.Body>
                                    <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                    <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                    <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                </Modal.Body>

                                <Modal.Footer>
                                    <button type="button" className="btn btn-secondary" onClick={() => { setIsModal1(false) }}>Close</button>
                                    <button type="button" className="btn btn-primary" onClick={() => { setIsModal1(false) }}>Save changes</button>
                                </Modal.Footer>
                            </Modal>

                        </div>
                        <div className="tab-pane fade vcmodal-tab-pane-1" id="vcmodal-nav-HTML1" role="tabpanel">
                            <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                                {`<!-- Button trigger modal -->
<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">Vertically centered modal</button>
<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenteredScrollable">Vertically centered scrollable modal</button>

<!-- Modal Modal Center-->
<Modal show={isModal} centered onHide={()=>{ this.setState({ isModal:false }) }}>
    <Modal.Header>
        <h5 className="modal-title" id="staticBackdropLiveLabel">Modal title</h5>
        <button type="button" className="btn-close" onClick={()=>{ this.setState({ isModal:false }) }}  ></button>
    </Modal.Header>

    <Modal.Body>
        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
    </Modal.Body>

    <Modal.Footer>
        <button type="button" className="btn btn-secondary" onClick={()=>{ this.setState({ isModal:false }) }}>Close</button>
        <button type="button" className="btn btn-primary" onClick={()=>{ this.setState({ isModal:false }) }}>Save changes</button>
    </Modal.Footer>
</Modal>

<!-- Modal Modal Centered Scrollable-->
<Modal show={isModal1} centered onHide={()=>{ this.setState({ isModal1:false }) }}>
    <Modal.Header>
        <h5 className="modal-title" id="staticBackdropLiveLabel">Modal title</h5>
        <button type="button" className="btn-close" onClick={()=>{ this.setState({ isModal1:false }) }}  ></button>
    </Modal.Header>

    <Modal.Body>
        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
    </Modal.Body>

    <Modal.Footer>
        <button type="button" className="btn btn-secondary" onClick={()=>{ this.setState({ isModal1:false }) }}>Close</button>
        <button type="button" className="btn btn-primary" onClick={()=>{ this.setState({ isModal1:false }) }}>Save changes</button>
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

export default VerticallyCenteredModal;