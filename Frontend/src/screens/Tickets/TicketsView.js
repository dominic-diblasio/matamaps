import React, {useState } from "react";
import DataTable from "react-data-table-component";
import { Modal } from "react-bootstrap";
import PageHeader from "../../components/common/PageHeader";
import { TicketsViewData } from "../../components/Data/AppData";

function TicketsView() {
    const [isModal, setIsModal] = useState(false);
    const [siEditModal, setSiEditModal] = useState("");

    var columnT = ""


    columnT = [
        {
            name: "TICKET ID",
            selector: (row) => row.ticketid,
            sortable: true,
            cell: (row) => <a href="tickets-detail" className="fw-bold text-secondary">{row.ticketid}</a>
        },
        {
            name: "SUBJECT",
            selector: (row) => row.subject,
            sortable: true
        },
        {
            name: "ASSIGNED",
            selector: (row) => row.assigned,
            sortable: true,
            cell: row => <div><img className="avatar rounded-circle" src={row.image} alt="" /> <span className="fw-bold ms-1">{row.assigned}</span></div>,
            minWidth: "250px"
        },
        {
            name: "CREATD DATE",
            selector: (row) => row.createdate,
            sortable: true
        },
        {
            name: "STATUS",
            selector: (row) => { },
            sortable: true,
            cell: row => <span className={`badge ${row.status === "Completed" ? 'bg-success' : "bg-warning"}`}>{row.status}</span>
        },
        {
            name: "ACTION",
            selector: (row) => { },
            sortable: true,
            cell: (row) => <div className="btn-group" role="group" aria-label="Basic outlined example">
                <button type="button" className="btn btn-outline-secondary" onClick={() => { setIsModal(true); setSiEditModal(row) }}><i className="icofont-edit text-success"></i></button>
                <button type="button" className="btn btn-outline-secondary deleterow"><i className="icofont-ui-delete text-danger"></i></button>
            </div>
        }

    ]


    return (
        <div className="container-xxl">
            <PageHeader headerTitle="Tickets" renderRight={() => {
                return <div className="col-auto d-flex w-sm-100">
                    <button className="btn btn-dark btn-set-task w-sm-100" onClick={() => { setIsModal(true) }}><i className="icofont-plus-circle me-2 fs-6"></i>Add Tickets</button>
                </div>
            }} />
            <div className="row clearfix g-3">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body">
                            <DataTable
                                title={TicketsViewData.title}
                                columns={columnT}
                                data={TicketsViewData.rows}
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
            <Modal centered show={isModal} onHide={() => { setIsModal(false); setSiEditModal("") }}>
                <Modal.Header closeButton>
                    <Modal.Title className="fw-bold">{siEditModal !== "" ? "Edit" : "Add"} Ticket</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="mb-3">
                        <label htmlFor="sub" className="form-label">Subject</label>
                        <input type="text" className="form-control" id="sub" onChange={() => { }} value={siEditModal ? siEditModal.subject : ""} />
                    </div>
                    <div className="deadline-form">
                        <form>
                            <div className="row g-3 mb-3">
                                <div className="col-lg-6">
                                    <label htmlFor="depone" className="form-label">Assign Name</label>
                                    <input type="text" className="form-control" id="depone" onChange={() => { }} value={siEditModal ? siEditModal.assigned : ""} />
                                </div>
                                <div className="col-lg-6">
                                    <label htmlFor="deptwo" className="form-label">Creted Date</label>
                                    <input type="date" className="form-control" id="deptwo" onChange={() => { }} value={siEditModal ? siEditModal.createdate : ""} />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Status</label>
                        <select className="form-select">
                            <option >In Progress</option>
                            <option value="1">Completed</option>
                            <option value="2">Wating</option>
                            <option value="3">Decline</option>
                        </select>
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

export default TicketsView;