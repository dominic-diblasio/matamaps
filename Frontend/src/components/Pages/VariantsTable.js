import React from "react";

function VariantsTable() {

    return (
        <div className="card mb-3">
            <div className="card-header py-3  bg-transparent border-bottom-0">
                <h6 className="mb-0 fw-bold ">Variants Table</h6>
                <p>Use contextual classes to color tables, table rows or individual cells.</p>
            </div>
            <div className="card-body  variants-custome-color">
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Class</th>
                                <th scope="col">Heading</th>
                                <th scope="col">Heading</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="table-primary">
                                <th scope="row">Primary</th>
                                <td>Cell</td>
                                <td>Cell</td>
                            </tr>
                            <tr className="table-secondary">
                                <th scope="row">Secondary</th>
                                <td>Cell</td>
                                <td>Cell</td>
                            </tr>
                            <tr className="table-success">
                                <th scope="row">Success</th>
                                <td>Cell</td>
                                <td>Cell</td>
                            </tr>
                            <tr className="table-danger">
                                <th scope="row">Danger</th>
                                <td>Cell</td>
                                <td>Cell</td>
                            </tr>
                            <tr className="table-warning">
                                <th scope="row">Warning</th>
                                <td>Cell</td>
                                <td>Cell</td>
                            </tr>
                            <tr className="table-info">
                                <th scope="row">Info</th>
                                <td>Cell</td>
                                <td>Cell</td>
                            </tr>
                            <tr className="table-light">
                                <th scope="row">Light</th>
                                <td>Cell</td>
                                <td>Cell</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}


export default VariantsTable;