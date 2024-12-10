import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import DataTable from "react-data-table-component";
import PageHeader from "../../components/common/PageHeader";
import { TimesheetListData } from "../../components/Data/AppData";


function Timesheet() {

    const [isModal, setIsModal] = useState(false);

    return (
        <div className="container-xxl">
            <PageHeader headerTitle="Project Timesheet" renderRight={() => {
                return <div className="col-auto d-flex w-sm-100">
                    <button type="button" className="btn btn-dark btn-set-task w-sm-100" onClick={() => { setIsModal(true) }} ><i className="icofont-file-spreadsheet me-2 fs-6"></i>Sheets Sent</button>
                </div>
            }} />
            <div className="row clearfix g-3">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body">
                            <DataTable
                                title={TimesheetListData.title}
                                columns={TimesheetListData.columns}
                                data={TimesheetListData.rows}
                                defaultSortField="title"
                                pagination
                                selectableRows={false}
                                className="table myDataTable table-hover align-middle mb-0 d-row nowrap dataTable no-footer dtr-inline"
                                highlightOnHover={true}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={isModal} centered onHide={() => { setIsModal(false) }}>
                <Modal.Header closeButton>
                    <Modal.Title className="fw-bold">Sheets Sent</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button type="button" className="btn btn-secondary" onClick={() => { setIsModal(false) }}>Done</button>
                    <button type="button" className="btn btn-primary">Sent</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}


export default Timesheet;