import React, { useState } from "react";

function BasicValidationForm() {

    const [check, setCheck] = useState("");
    const [text1, setText1] = useState("");
    const [text2, setText2] = useState("");
    const [text3, setText3] = useState("");
    const [gender, setGender] = useState("");
    const [select, setSelect] = useState("");
    const [button, setButton] = useState(false);

    return (
        <div className="card mb-3">
            <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                <h6 className="mb-0 fw-bold ">Basic Validation Form</h6>
            </div>
            <div className="card-body">
                <form id="basic-form" method="post" >
                    <div className="row g-3 align-items-center">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label className="form-label">Text Input</label>
                                <input type="text" className="form-control parsley-error" value={text1} onChange={(e) => { setText1(e.target.value); }} required />
                                {text1 === "" && button ? (<span className="text-danger">Please fill input filed</span>) : ("")}
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <label className="form-label">Email Input</label>
                                <input type="email" className="form-control parsley-error" value={text2} onChange={(e) => { setText2(e.target.value); }} required data-parslul />
                                {text2 === "" && button ? (<span className="text-danger">Please fill input filed</span>) : ("")}
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <label className="form-label">Text Area</label>
                                <textarea className="form-control parsley-error" rows="5" cols="30" value={text3} onChange={(e) => { setText3(e.target.value); }} required data-parsley-id="33" ></textarea>
                                {text3 === "" && button ? (<span className="text-danger">Please fill input filed</span>) : ("")}
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <label className="form-label">Checkbox</label>
                                <br />
                                <label className="fancy-checkbox parsley-error">
                                    <input type="checkbox" name="checkbox" value="checkbox" onChange={(e) => { setCheck(e.target.value); }} required data-parsley-errors-container="#error-checkbox" data-parsley-multiple="checkbox" data-parsley-id="36" />
                                    <span className="px-2">Option 1</span>
                                </label>
                                <label className="fancy-checkbox">
                                    <input type="checkbox" name="checkbox" value="checkbox" onChange={(e) => { setCheck(e.target.value); }} data-parsley-multiple="checkbox" />
                                    <span className="px-2">Option 2</span>
                                </label>
                                <label className="fancy-checkbox">
                                    <input type="checkbox" name="checkbox" value="checkbox" onChange={(e) => { setCheck(e.target.value); }} data-parsley-multiple="checkbox" />
                                    <span className="px-2">Option 3</span>
                                </label>
                                {check === "" && button ? (<span className="text-danger d-block">Please fill input filed</span>) : ("")}
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <label className="form-label">Radio Button</label>
                                <br />
                                <label className="fancy-radio parsley-error">
                                    <input type="radio" name="gender" value="male" onChange={(e) => { setGender(e.target.value); }} required data-parsley-errors-container="#error-radio" data-parsley-multiple="gender" data-parsley-id="43" />
                                    <span className="px-2"><i></i>Male</span>
                                </label>
                                <label className="fancy-radio">
                                    <input type="radio" name="gender" value="female" onChange={(e) => { setGender(e.target.value); }} data-parsley-multiple="gender" />
                                    <span className="px-2"><i></i>Female</span>
                                </label>
                                {select === "" && button ? (<span className="text-danger d-block">Please fill input filed</span>) : ("")}
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary mt-2" onClick={() => { setButton(true); }}>Validate</button>
                </form>
            </div>
        </div>
    );
}


export default BasicValidationForm;