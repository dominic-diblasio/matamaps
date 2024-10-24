import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import PageHeader from "../../components/common/PageHeader";
import AllocatedTask from "../../components/Projects/AllocatedTask";
import RecentActivity from "../../components/Projects/RecentActivity";
import TaskProgress from "../../components/Projects/TaskProgress";
// import 'react-nestable/dist/styles/index.css';
import { CompletedData, InProgressTaskData, needReviewData } from "../../components/Data/AppData";
import TaskNestable1 from "../../components/Projects/TaskNestable1";

function Tasks() {
    const [isModal, setIsModal] = useState(false);

    return (
        <div className="container-xxl">
            <PageHeader headerTitle="Tasks Management"
                renderRight={() => {
                    return <div className="col-auto d-flex w-sm-100">
                        <button className="btn btn-dark btn-set-task w-sm-100" onClick={() => { setIsModal(true) }}><i className="icofont-plus-circle me-2 fs-6"></i>Create Task</button>
                    </div>
                }}
            />
            <div className="row clearfix g-3">
                <div className="col-lg-12 col-md-12 flex-column">
                    <div className="row g-3 row-deck">
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                            <TaskProgress />
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6"><RecentActivity /></div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12"><AllocatedTask /></div>
                    </div>
                  
                    <TaskNestable1
                        InProgressTaskData={InProgressTaskData}
                        needReviewData={needReviewData}
                        CompletedData={CompletedData}
                    />
                </div>
            </div>
            <Modal show={isModal} onHide={() => { setIsModal(false) }}>
                <Modal.Header closeButton>
                    <Modal.Title className="fw-bold">Create Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput77" className="form-label">Project Name</label>
                        <input type="text" className="form-control" id="exampleFormControlInput77" placeholder="Explain what the Project Name" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Task Category</label>
                        <select className="form-select" >
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
                        <label htmlFor="formFileMultipleone" className="form-label">Task Images &amp; Document</label>
                        <input className="form-control" type="file" id="formFileMultipleone" multiple="" />
                    </div>
                    <div className="deadline-form">
                        <form>
                            <div className="row g-3 mb-3">
                                <div className="col">
                                    <label htmlFor="datepickerded" className="form-label">Task Start Date</label>
                                    <input type="date" className="form-control" id="datepickerded" />
                                </div>
                                <div className="col">
                                    <label htmlFor="datepickerdedone" className="form-label">Task End Date</label>
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
                    <button type="button" className="btn btn-secondary" onClick={() => { setIsModal(false) }}>Done</button>
                    <button type="button" className="btn btn-primary">Create</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}


export default Tasks;