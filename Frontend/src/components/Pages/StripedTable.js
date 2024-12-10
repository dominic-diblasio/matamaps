import React from "react";

function StripedTable() {

    return (
        <div className="card mb-3">
            <div className="card-header py-3  bg-transparent border-bottom-0">
                <h6 className="mb-0 fw-bold ">Striped Table</h6>
                <p>Use <code>.table-striped</code> to add zebra-striping to any table row within the <code>&lt;tbody&gt;</code>.</p>
            </div>
            <div className="card-body basic-custome-color">
                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry the Bird</td>
                                <td>Otto</td>
                                <td>@twitter</td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>Wilson</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">5</th>
                                <td>Alexander</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}


export default StripedTable;