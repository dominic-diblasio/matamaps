import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function OptionalSizesModal() {
    const [isModal, setIsModal] = useState(false);
    const [isModal1, setIsModal1] = useState(false);
    const [isModal2, setIsModal2] = useState(false);
    const [isModal3, setIsModal3] = useState(false);

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
            <h2 id="optional-sizes">Optional sizes</h2>
            <p>Modals have three optional sizes, available via modifier classes to be placed on a <code>.modal-dialog</code>. These sizes kick in at certain breakpoints to avoid horizontal scrollbars on narrower viewports.</p>
            <table className="table">
                <thead>
                    <tr>
                        <th>Size</th>
                        <th>Class</th>
                        <th>Modal max-width</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Small</td>
                        <td><code>.modal-sm</code></td>
                        <td><code>300px</code></td>
                    </tr>
                    <tr>
                        <td>Default</td>
                        <td className="text-muted">None</td>
                        <td><code>500px</code></td>
                    </tr>
                    <tr>
                        <td>Large</td>
                        <td><code>.modal-lg</code></td>
                        <td><code>800px</code></td>
                    </tr>
                    <tr>
                        <td>Extra large</td>
                        <td><code>.modal-xl</code></td>
                        <td><code>1140px</code></td>
                    </tr>
                    <tr>
                        <td>Fullscreen</td>
                        <td><code>.modal-fullscreen</code></td>
                        <td><code>Always</code></td>
                    </tr>
                </tbody>
            </table>
            <ul className="nav nav-tabs tab-card px-3 border-bottom-0" role="tablist">
                <li className="nav-item"><a className="nav-link osmodal-nav-link-1 active" href="#!" onClick={(e) => { e.preventDefault(); tabEvent(e, "osmodal-nav-Preview1", "osmodal-tab-pane-1", "osmodal-nav-link-1") }} >Preview</a></li>
                <li className="nav-item"><a className="nav-link osmodal-nav-link-1" href="#!" onClick={(e) => { e.preventDefault(); tabEvent(e, "osmodal-nav-HTML1", "osmodal-tab-pane-1", "osmodal-nav-link-1") }} >HTML</a></li>
            </ul>
            <div className="card mb-3 bg-transparent">
                <div className="card-body">
                    <div className="tab-content">
                        <div className="tab-pane fade osmodal-tab-pane-1 active show" id="osmodal-nav-Preview1" role="tabpanel">
                            <button type="button" className="btn btn-secondary" onClick={() => { setIsModal(true) }}>Full screen</button>
                            <button type="button" className="btn btn-secondary ms-1" onClick={() => { setIsModal1(true) }}>Extra large modal</button>
                            <button type="button" className="btn btn-secondary ms-1" onClick={() => { setIsModal2(true) }}>Large modal</button>
                            <button type="button" className="btn btn-secondary ms-1" onClick={() => { setIsModal3(true) }}>Small modal</button>

                            <Modal show={isModal} onHide={() => { setIsModal(false) }} dialogClassName="modal-fullscreen">
                                <Modal.Header>
                                    <h5 className="modal-title" id="staticBackdropLiveLabel">Modal title</h5>
                                    <button type="button" className="btn-close" onClick={() => { setIsModal(false) }}  ></button>
                                </Modal.Header>

                                <Modal.Body>
                                    <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                    <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                    <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                    <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                    <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                    <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                    <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                    <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                    <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                    <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                    <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                    <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>

                                </Modal.Body>

                                <Modal.Footer>
                                    <button type="button" className="btn btn-secondary" onClick={() => { setIsModal(false) }}>Close</button>
                                    <button type="button" className="btn btn-primary" onClick={() => { setIsModal(false) }}>Save changes</button>
                                </Modal.Footer>
                            </Modal>
                            <Modal show={isModal1} size="xl" onHide={() => { setIsModal1(false) }}>
                                <Modal.Header>
                                    <h5 className="modal-title h4" id="exampleModalXlLabel">Extra large modal</h5>
                                    <button type="button" className="btn-close" onClick={() => { setIsModal1(false) }}  ></button>
                                </Modal.Header>

                                <Modal.Body>
                                    <p>...</p>
                                </Modal.Body>
                            </Modal>
                            <Modal show={isModal2} size="lg" onHide={() => { setIsModal2(false) }}>
                                <Modal.Header>
                                    <h5 className="modal-title h4" id="exampleModalLgLabel">Large modal</h5>
                                    <button type="button" className="btn-close" onClick={() => { setIsModal2(false) }}  ></button>
                                </Modal.Header>

                                <Modal.Body>
                                    <p>...</p>
                                </Modal.Body>
                            </Modal>
                            <Modal show={isModal3} size="sm" onHide={() => { setIsModal3(false) }}>
                                <Modal.Header>
                                    <h5 className="modal-title h4" id="exampleModalLgLabel">Small modal</h5>
                                    <button type="button" className="btn-close" onClick={() => { setIsModal3(false) }}  ></button>
                                </Modal.Header>

                                <Modal.Body>
                                    ...
                                </Modal.Body>
                            </Modal>

                        </div>
                        <div className="tab-pane fade osmodal-tab-pane-1" id="osmodal-nav-HTML1" role="tabpanel">
                            <SyntaxHighlighter language="javascript" className="mt-2 language-html py-2 px-2" style={a11yLight}>
                                {`<!-- Button trigger modal -->
<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalFullscreen">Full screen</button>
<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalXl">Extra large modal</button>
<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalLg">Large modal</button>
<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalSm">Small modal</button>

<!-- Modal Fullscreen -->
<Modal show={isModal} onHide={()=>{ this.setState({ isModal:false }) }}  dialogClassName="modal-fullscreen">
    <Modal.Header>
        <h5 className="modal-title" id="staticBackdropLiveLabel">Modal title</h5>
        <button type="button" className="btn-close" onClick={()=>{ this.setState({ isModal:false }) }}  ></button>
    </Modal.Header>

    <Modal.Body>
        ...
                            
    </Modal.Body>

    <Modal.Footer>
        <button type="button" className="btn btn-secondary" onClick={()=>{ this.setState({ isModal:false }) }}>Close</button>
        <button type="button" className="btn btn-primary" onClick={()=>{ this.setState({ isModal:false }) }}>Save changes</button>
    </Modal.Footer>
</Modal>

<!-- Modal XL -->
<Modal show={isModal1} size="xl" onHide={()=>{ this.setState({ isModal1:false }) }}>
    <Modal.Header>
        <h5 className="modal-title h4" id="exampleModalXlLabel">Extra large modal</h5>
        <button type="button" className="btn-close" onClick={()=>{ this.setState({ isModal1:false }) }}  ></button>
    </Modal.Header>

    <Modal.Body>
        <p>...</p>
    </Modal.Body>
</Modal>

<!-- Modal LG -->
<Modal show={isModal2} size="lg" onHide={()=>{ this.setState({ isModal2:false }) }}>
    <Modal.Header>
        <h5 className="modal-title h4" id="exampleModalLgLabel">Large modal</h5>
        <button type="button" className="btn-close" onClick={()=>{ this.setState({ isModal2:false }) }}  ></button>
    </Modal.Header>

    <Modal.Body>
        <p>...</p>
    </Modal.Body>
</Modal>

<!-- Modal SM -->
<Modal show={isModal3} size="sm" onHide={()=>{ this.setState({ isModal3:false }) }}>
    <Modal.Header>
        <h5 className="modal-title h4" id="exampleModalLgLabel">Small modal</h5>
        <button type="button" className="btn-close" onClick={()=>{ this.setState({ isModal3:false }) }}  ></button>
    </Modal.Header>

    <Modal.Body>
        ...
    </Modal.Body>
</Modal>`}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default OptionalSizesModal;