import React, { useState } from "react";
import { Dropdown, Modal } from "react-bootstrap";
import OurClients from "../../components/Clients/OurClients";
import PageHeader from "../../components/common/PageHeader";
import { OurClientsData} from "../../components/Data/AppData";

function Clients (){

    const [isModal,setIsModal] = useState(false);
    const [isModalDelete,setIsModalDelete] = useState(false);
    const [modalheader,setModalheader] = useState(null);
    const [editModeldata,setEditModeldata] = useState("");

        return(
            <div className="container-xxl">
                <PageHeader headerTitle="Clients"
                    renderRight={()=>{
                        return <div className="col-auto d-flex">
                                    <Dropdown>
                                        <Dropdown.Toggle as="button" className="btn btn-primary ">Status</Dropdown.Toggle>
                                        <Dropdown.Menu as="ul" className="dropdown-menu-end">
                                            <li><a className="dropdown-item" href="#!">Company</a></li>
                                            <li><a className="dropdown-item" href="#!">AgilSoft Tech</a></li>
                                            <li><a className="dropdown-item" href="#!">Macrosoft</a></li>
                                            <li><a className="dropdown-item" href="#!">Google</a></li>
                                            <li><a className="dropdown-item" href="#!">Pixelwibes</a></li>
                                            <li><a className="dropdown-item" href="#!">Deltasoft Tech</a></li>
                                            <li><a className="dropdown-item" href="#!">Design Tech</a></li>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <button type="button" className="btn btn-dark ms-1" onClick={()=>{setIsModal(true); setModalheader('Add Client')}}><i className="icofont-plus-circle me-2 fs-6"></i>Add Client</button>
                                </div>
                    }}
                  />
                <div className="row g-3 row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-2 row-cols-xxl-2 row-deck py-1 pb-4">
                    {
                        OurClientsData.map((data,i)=>{
                            return <div key={"skhd"+i} className="col">
                                        <OurClients avatar={data.avatar} post={data.post} name={data.name} Companyname={data.Companyname}
                                        onClickEdit={()=>{ setIsModal(true); setModalheader('Edit Client'); setEditModeldata(data) }}
                                        onClickDelete={()=>{ setIsModalDelete(true) }}
                                        />
                                    </div>
                        })
                    }
                    
                </div>
                <Modal size="xl" centered show={isModal} onHide={()=>{ setIsModal(false); setEditModeldata("") }}>
                    <Modal.Header closeButton>
                     <Modal.Title className="fw-bold">{modalheader}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <div className="modal-body">
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput877" className="form-label">Client Name</label>
                            <input type="text" className="form-control" id="exampleFormControlInput877" value={editModeldata?editModeldata.name:""} placeholder="Client Name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput977" className="form-label">Company Name</label>
                            <input type="text" className="form-control" id="exampleFormControlInput977" value={editModeldata?editModeldata.Companyname:""} placeholder="Compnay Name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="formFileMultipleoneone" className="form-label">Profile Image</label>   
                            <input className="form-control" type="file" id="formFileMultipleoneone" />
                        </div>
                        <div className="deadline-form">
                            <form>
                                <div className="row g-3 mb-3">
                                <div className="col-lg-6">
                                    <label htmlFor="exampleFormControlInput177" className="form-label">User Name</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput177" placeholder="User Name" />
                                </div>
                                <div className="col-lg-6">
                                    <label htmlFor="exampleFormControlInput277" className="form-label">Password</label>
                                    <input type="Password" className="form-control" id="exampleFormControlInput277" placeholder="Password" />
                                </div>
                                </div>
                                <div className="row g-3 mb-3">
                                    <div className="col-lg-6">
                                        <label htmlFor="exampleFormControlInput477" className="form-label">Email ID</label>
                                        <input type="email" className="form-control" id="exampleFormControlInput477" placeholder="Enter Email" />
                                    </div>
                                    <div className="col-lg-6">
                                        <label htmlFor="exampleFormControlInput777" className="form-label">Phone</label>
                                        <input type="text" className="form-control" id="exampleFormControlInput777" placeholder="Enter Phone" />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="mb-3">          
                            <label htmlFor="exampleFormControlTextarea78" className="form-label">Description (optional)</label>
                            <textarea className="form-control" id="exampleFormControlTextarea78" rows="3" placeholder="Add any extra details about the request"></textarea>
                        </div> 
                        <div className="table-responsive">
                            <table className="table table-striped custom-table">
                                <thead>
                                    <tr>
                                        <th>Project Permission</th>
                                        <th className="text-center">Read</th>
                                        <th className="text-center">Write</th>
                                        <th className="text-center">Create</th>
                                        <th className="text-center">Delete</th>
                                        <th className="text-center">Import</th>
                                        <th className="text-center">Export</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="fw-bold">Projects</td>
                                        <td className="text-center">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1" checked={true} onChange={()=>{}} />
                                        </td>
                                        <td className="text-center">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2" checked={true} onChange={()=>{}} />
                                        </td>
                                        <td className="text-center">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault3" checked={true} onChange={()=>{}} />
                                        </td>
                                        <td className="text-center">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault4" checked={true} onChange={()=>{}} />
                                        </td>
                                        <td className="text-center">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault5" checked={true} onChange={()=>{}} />
                                        </td>
                                        <td className="text-center">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault6" checked={true} onChange={()=>{}} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="fw-bold">Tasks</td>
                                        <td className="text-center">
                        
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault7" checked={true} onChange={()=>{}} />
                        
                                        </td>
                                        <td className="text-center">
                        
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault8" checked={true} onChange={()=>{}} />
                        
                                        </td>
                                        <td className="text-center">
                        
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault9" checked={true} onChange={()=>{}} />
                        
                                        </td>
                                        <td className="text-center">
                        
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault10" checked={true} onChange={()=>{}} />
                        
                                        </td>
                                        <td className="text-center">
                        
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault11" checked={true} onChange={()=>{}} />
                        
                                        </td>
                                        <td className="text-center">
                        
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault12" checked={true} onChange={()=>{}} />
                        
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="fw-bold">Chat</td>
                                        <td className="text-center">
                        
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault13" checked={true} onChange={()=>{}} />
                        
                                        </td>
                                        <td className="text-center">
                        
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault14" checked={true} onChange={()=>{}} />
                        
                                        </td>
                                        <td className="text-center">
                        
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault15" checked={true} onChange={()=>{}} />
                        
                                        </td>
                                        <td className="text-center">
                        
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault16" checked={true} onChange={()=>{}} />
                        
                                        </td>
                                        <td className="text-center">
                        
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault17" checked={true} onChange={()=>{}} />
                        
                                        </td>
                                        <td className="text-center">
                        
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault18" checked={true} onChange={()=>{}} />
                        
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="fw-bold">Estimates</td>
                                        <td className="text-center">
                        
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault19" checked={true} onChange={()=>{}} />
                        
                                        </td>
                                        <td className="text-center">
                        
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault20" checked={true} onChange={()=>{}} />
                        
                                        </td>
                                        <td className="text-center">
                        
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault21" checked={true} onChange={()=>{}} />
                        
                                        </td>
                                        <td className="text-center">
                        
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault22" checked={true} onChange={()=>{}} />
                        
                                        </td>
                                        <td className="text-center">
                        
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault23" checked={true} onChange={()=>{}} />
                        
                                        </td>
                                        <td className="text-center">
                        
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault24" checked={true} onChange={()=>{}} />
                        
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="fw-bold">Invoices</td>
                                        <td className="text-center">
                        
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault25" checked={true} onChange={()=>{}} />
                        
                                        </td>
                                        <td className="text-center">
                        
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault26" />
                        
                                        </td>
                                        <td className="text-center">
                        
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault27" checked={true} onChange={()=>{}} />
                        
                                        </td>
                                        <td className="text-center">
                        
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault28" />
                        
                                        </td>
                                        <td className="text-center">
                        
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault29" checked={true} onChange={()=>{}} />
                        
                                        </td>
                                        <td className="text-center">
                        
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault30" checked={true} onChange={()=>{}} />
                        
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="fw-bold">Timing Sheets</td>
                                        <td className="text-center">
                        
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault31" checked={true} onChange={()=>{}} />
                        
                                        </td>
                                        <td className="text-center">
                        
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault32" checked={true} onChange={()=>{}} />
                        
                                        </td>
                                        <td className="text-center">
                        
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault33" checked={true} onChange={()=>{}} />
                        
                                        </td>
                                        <td className="text-center">
                        
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault34" checked={true} onChange={()=>{}} />
                        
                                        </td>
                                        <td className="text-center">
                        
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault35" checked={true} onChange={()=>{}} />
                        
                                        </td>
                                        <td className="text-center">
                        
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault36" checked={true} onChange={()=>{}} />
                        
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button type="button" className="btn btn-secondary" onClick={()=>{ setIsModal(false); setEditModeldata("") }}>Done</button>
                        <button type="button" className="btn btn-primary">Create</button>
                    </Modal.Footer>
                </Modal>
                <Modal show={isModalDelete} centered onHide={()=>{setIsModalDelete(false) }}>
                    <Modal.Header closeButton>
                    <Modal.Title className="fw-bold">Delete Project</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="justify-content-center flex-column d-flex">
                        <i className="icofont-ui-delete text-danger display-2 text-center mt-2"></i>
                        <p className="mt-4 fs-5 text-center">You can only delete this item Permanently</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <button type="button" className="btn btn-secondary" onClick={()=>{ setIsModalDelete(false) }}>Cancel</button>
                        <button type="button" className="btn btn-danger color-fff">Create</button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }


export default Clients;