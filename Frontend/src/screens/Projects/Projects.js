import React, { useState } from "react";
import { Modal, Nav, Tab } from "react-bootstrap";
import CurrentClientProject from "../../components/Clients/CurrentClientProject";
import AddNewUserModal from "../../components/common/AddNewUserModal";
import PageHeader from "../../components/common/PageHeader";
import { ProjectCardData } from "../../components/Data/AppData";

function Projects(props) {

    const [isModal, setIsModal] = useState(false);
    const [isDeleteModal, setDeleteModal] = useState(false);
    const [isAddUserModal, setAddUserModal] = useState(false);
    const [modalHeader, setModalHeader] = useState("");
    const [editModeldata, setEditModeldata] = useState("");

    return (
        <div className="container-xxl">
            <Tab.Container defaultActiveKey="All">
                <PageHeader headerTitle="Projects"
                    renderRight={() => {
                        return <div className="d-flex py-2 project-tab flex-wrap w-sm-100">
                            <button type="button" className="btn btn-dark w-sm-100" onClick={() => { setIsModal(true); setModalHeader("Create Project") }}><i className="icofont-plus-circle me-2 fs-6"></i>Create Project</button>
                            <Nav variant="pills" className="nav nav-tabs tab-body-header rounded ms-3 prtab-set w-sm-100">
                                <Nav.Item>
                                    <Nav.Link eventKey="All">All</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="Started">Started</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="Approval">Approval</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="Completed">Completed</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                    }} />
                <div className="row align-items-center">
                    <div className="col-lg-12 col-md-12 flex-column">
                        <Tab.Content>
                            <Tab.Pane eventKey="All">
                                <div className="row g-3 gy-5 py-3 row-deck">
                                    {
                                        ProjectCardData.map((d, i) => {
                                            return <div key={"ljsdhl" + i} className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                                <CurrentClientProject teamImage={d.teamImage} logo={d.logo} logoBg={d.logoBg} title={d.title} sl={d.sl}
                                                    onClickEdit={() => { setIsModal(true); setModalHeader("Edit Project"); setEditModeldata(d); }}
                                                    onClickDelete={() => { setDeleteModal(true) }}
                                                    onClickAdd={() => { setAddUserModal(true) }}
                                                />
                                            </div>
                                        })
                                    }
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="Started">
                                <div className="row g-3 gy-5 py-3 row-deck">
                                    {
                                        ProjectCardData.map((d, i) => {
                                            return <div key={"ljsdhl" + i} className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                                <CurrentClientProject teamImage={d.teamImage} logo={d.logo} logoBg={d.logoBg} title={d.title} sl={d.sl}
                                                    onClickEdit={() => { setIsModal(true) }}
                                                    onClickDelete={() => { setDeleteModal(true) }}
                                                    onClickAdd={() => { setAddUserModal(true) }}
                                                />
                                            </div>
                                        })
                                    }
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="Approval">
                                <div className="row g-3 gy-5 py-3 row-deck">
                                    {
                                        ProjectCardData.map((d, i) => {
                                            return <div key={"ljsdhl" + i} className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                                <CurrentClientProject teamImage={d.teamImage} logo={d.logo} logoBg={d.logoBg} title={d.title} sl={d.sl}
                                                    onClickEdit={() => { setIsModal(true) }}
                                                    onClickDelete={() => { setDeleteModal(true) }}
                                                    onClickAdd={() => { setAddUserModal(true) }}
                                                />
                                            </div>
                                        })
                                    }
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="Completed">
                                <div className="row g-3 gy-5 py-3 row-deck">
                                    {
                                        ProjectCardData.map((d, i) => {
                                            return <div key={"ljsdhl" + i} className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                                <CurrentClientProject teamImage={d.teamImage} logo={d.logo} logoBg={d.logoBg} title={d.title} sl={d.sl}
                                                    onClickEdit={() => { setIsModal(true) }}
                                                    onClickDelete={() => { setDeleteModal(true) }}
                                                    onClickAdd={() => { setAddUserModal(true) }}
                                                />
                                            </div>
                                        })
                                    }
                                </div>
                            </Tab.Pane>
                        </Tab.Content>
                    </div>
                </div>
            </Tab.Container>
            <Modal show={isModal} onHide={() => { setIsModal(false); setEditModeldata("") }}>
                <Modal.Header closeButton>
                    <Modal.Title className="fw-bold">{modalHeader}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput77" className="form-label">Project Name</label>
                        <input type="text" className="form-control" id="exampleFormControlInput77" placeholder="Explain what the Project Name" value={editModeldata ? editModeldata.sl : ""} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Project Category</label>
                        <select className="form-select" value={editModeldata ? editModeldata.title : ""}>
                            <option >UI/UX Design</option>
                            <option value="1">Website Design</option>
                            <option value="2">App Development</option>
                            <option value="3">Quality Assurance</option>
                            <option value="4">Development</option>
                            <option value="5">Backend Development</option>
                            <option value="6">Software Testing</option>
                            <option value="7">Website Design</option>
                            <option value="8">Marketing</option>
                            <option value="9">SEO</option>
                            <option value="10">Other</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formFileMultipleone" className="form-label">Project Images &amp; Document</label>
                        <input className="form-control" type="file" id="formFileMultipleone" multiple="" />
                    </div>
                    <div className="deadline-form">
                        <form>
                            <div className="row g-3 mb-3">
                                <div className="col">
                                    <label htmlFor="datepickerded" className="form-label">Project Start Date</label>
                                    <input type="date" className="form-control" id="datepickerded" />
                                </div>
                                <div className="col">
                                    <label htmlFor="datepickerdedone" className="form-label">Project End Date</label>
                                    <input type="date" className="form-control" id="datepickerdedone" />
                                </div>
                            </div>
                            <div className="row g-3 mb-3">
                                <div className="col-sm-12">
                                    <label className="form-label">Notifation Sent</label>
                                    <select className="form-select" >
                                        <option >All</option>
                                        <option value="1">Team Leader Only</option>
                                        <option value="2">Team Member Only</option>
                                    </select>
                                </div>
                                <div className="col-sm-12">
                                    <label htmlFor="formFileMultipleone" className="form-label">Task Assign Person</label>
                                    <select className="form-select" multiple="" >
                                        <option >Lucinda Massey</option>
                                        <option value="1">Ryan Nolan</option>
                                        <option value="2">Oliver Black</option>
                                        <option value="3">Adam Walker</option>
                                        <option value="4">Brian Skinner</option>
                                        <option value="5">Dan Short</option>
                                        <option value="5">Jack Glover</option>
                                    </select>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="row g-3 mb-3">
                        <div className="col-sm">
                            <label htmlFor="formFileMultipleone" className="form-label">Budget</label>
                            <input type="number" className="form-control" />
                        </div>
                        <div className="col-sm">
                            <label htmlFor="formFileMultipleone" className="form-label">Priority</label>
                            <select className="form-select" >
                                <option >Highest</option>
                                <option value="1">Medium</option>
                                <option value="2">Low</option>
                                <option value="3">Lowest</option>
                            </select>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea78" className="form-label">Description (optional)</label>
                        <textarea className="form-control" id="exampleFormControlTextarea78" rows="3" placeholder="Add any extra details about the request"></textarea>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button type="button" className="btn btn-secondary" onClick={() => { setIsModal(false); setEditModeldata(""); }}>Done</button>
                    <button type="button" className="btn btn-primary">Create</button>
                </Modal.Footer>
            </Modal>
            <Modal show={isDeleteModal} centered onHide={() => { setDeleteModal(false) }}>
                <Modal.Header closeButton>
                    <Modal.Title className="fw-bold">Delete Project</Modal.Title>
                </Modal.Header>
                <Modal.Body className="justify-content-center flex-column d-flex">
                    <i className="icofont-ui-delete text-danger display-2 text-center mt-2"></i>
                    <p className="mt-4 fs-5 text-center">You can only delete this item Permanently</p>
                </Modal.Body>
                <Modal.Footer>
                    <button type="button" className="btn btn-secondary" onClick={() => { setDeleteModal(false) }}>Cancel</button>
                    <button type="button" className="btn btn-danger color-fff">Create</button>
                </Modal.Footer>
            </Modal>
            <AddNewUserModal show={isAddUserModal} onClose={() => { setAddUserModal(false) }} />
        </div>
    )
}

export default Projects;