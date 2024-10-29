import React from "react";

function BasicForm() {

    return (
        <div className="card mb-3">
            <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                <h6 className="mb-0 fw-bold ">Basic Form</h6>
            </div>
            <div className="card-body">
                <form>
                    <div className="row g-3 align-items-center">
                        <div className="col-md-6">
                            <label htmlFor="firstname" className="form-label">First Name</label>
                            <input type="text" className="form-control" id="firstname" required />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="lastname" className="form-label">Last Name</label>
                            <input type="text" className="form-control" id="lastname" required />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Phone Number</label>
                            <input type="text" className="form-control" id="phonenumber" required />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="emailaddress" className="form-label">Email Address</label>
                            <input type="email" className="form-control" id="emailaddress" required />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="admitdate" className="form-label">Date</label>
                            <input type="date" className="form-control" id="admitdate" required />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="admittime" className="form-label">Time</label>
                            <input type="time" className="form-control" id="admittime" required />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="formFileMultiple" className="form-label"> File Upload</label>
                            <input className="form-control" type="file" id="formFileMultiple" multiple="" required />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Gender</label>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios11" value="option1" />
                                        <label className="form-check-label" htmlFor="exampleRadios11">
                                            Male
                                        </label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios22" value="option2" />
                                        <label className="form-check-label" htmlFor="exampleRadios22">
                                            Female
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <label htmlFor="addnote" className="form-label">Add Note</label>
                            <textarea className="form-control" id="addnote" rows="3"></textarea>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary mt-4">Submit</button>
                </form>
            </div>
        </div>
    );
}


export default BasicForm;