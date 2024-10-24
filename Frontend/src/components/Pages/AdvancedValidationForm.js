import React, { useState } from "react";

function AdvancedValidationForm() {
    const [carector, setCarector] = useState("");
    const [carector2, setCarector2] = useState("");
    const [button, setButton] = useState(false);
    const [number, setNumber] = useState("");
    const [p, setP] = useState("");
    const [a, setA] = useState(false);
    const [b, setB] = useState(false);
    const [c, setC] = useState(false);
    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);
    const [check3, setCheck3] = useState(false);

    return (
        <div className="card mb-3">
            <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                <h6 className="mb-0 fw-bold ">Advanced Validation Form</h6>
            </div>
            <div className="card-body">
                <form id="advanced-form" data-parsley-validate="">
                    <div className="row g-3 align-items-center">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label htmlFor="text-input1" className="form-label">Min. 8 Characters</label>
                                <input type="text" id="text-input1" className="form-control" value={carector} onChange={(e) => { setCarector(e.target.value); }} required data-parsley-minlength="8" />
                                {carector.length <= 8 && button ? (<span className="text-danger">Please default checked your input filed</span>) : ("")}
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <label htmlFor="text-input2" className="form-label">Between 5-10 Characters</label>
                                <input type="text" id="text-input2" className="form-control" value={carector2} onChange={(e) => { setCarector2(e.target.value); }} required data-parsley-length="[5,10]" />
                                {carector2.length <= 5 && button ? (<span className="text-danger">Please default checked your input filed</span>) : ("")}
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <label htmlFor="text-input3" className="form-label">Min. Number ( &gt;= 5 )</label>
                                <input type="text" id="text-input3" className="form-control" value={number} onChange={(e) => { setNumber(e.target.value); }} required data-parsley-min="5" />
                                {number.length <= 5 && button ? (<span className="text-danger">Please default checked your input filed</span>) : ("")}
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <label htmlFor="text-input4" className="form-label">Between 20-30</label>
                                <input type="text" id="text-input4" className="form-control" value={number} onChange={(e) => { setP(e.target.value); }} required data-parsley-range="[20,30]" />
                                {p.length <= 20 && button ? (<span className="text-danger">Please default checked your input filed</span>) : ("")}
                                {p.length >= 30 && button ? (<span className="text-danger">Please default checked your input filed</span>) : ("")}
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <label className="form-label">Select Min. 2 Options</label>
                                <br />
                                <label className="control-inline fancy-checkbox">
                                    <input type="checkbox" name="checkbox2" onChange={() => { setA(true); }} required data-parsley-mincheck="2" data-parsley-errors-container="#error-checkbox2" data-parsley-multiple="checkbox2" />
                                    <span className="px-2">Option 1</span>
                                </label>
                                <label className="control-inline fancy-checkbox">
                                    <input type="checkbox" name="checkbox2" onChange={() => { setB(true); }} data-parsley-multiple="checkbox2" />
                                    <span className="px-2">Option 2</span>
                                </label>
                                <label className="control-inline fancy-checkbox">
                                    <input type="checkbox" name="checkbox2" onChange={() => { setC(true); }} data-parsley-multiple="checkbox2" />
                                    <span className="px-2">Option 3</span>
                                </label>
                                {a === false && b === false && c === false && button ? (<span className="text-danger d-block"> meximum Any 2 default checked</span>) : ("")}
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <label className="form-label">Select Between 1-2 Options</label>
                                <br />
                                <label className="control-inline fancy-checkbox">
                                    <input type="checkbox" name="checkbox3" onChange={() => { setCheck1(true); }} required data-parsley-check="[1,2]" data-parsley-errors-container="#error-checkbox3" data-parsley-multiple="checkbox3" />
                                    <span className="px-2">Option 1</span>
                                </label>
                                <label className="control-inline fancy-checkbox">
                                    <input type="checkbox" name="checkbox3" onChange={() => { setCheck2(true); }} data-parsley-multiple="checkbox3" />
                                    <span className="px-2">Option 2</span>
                                </label>
                                <label className="control-inline fancy-checkbox">
                                    <input type="checkbox" name="checkbox3" onChange={() => { setCheck3(true); }} data-parsley-multiple="checkbox3" />
                                    <span className="px-2">Option 3</span>
                                </label>
                                {check1 === false && check2 === false && check3 === false && button ? (<span className="text-danger d-block"> meximum Any 2 default checked</span>) : ("")}
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary mt-3" onClick={() => { setButton(true); }}>Validate</button>
                </form>
            </div>
        </div>
    );
}


export default AdvancedValidationForm;