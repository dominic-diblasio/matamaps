import React from "react";

function SampleInvoice() {

    return (
        <div className="row justify-content-center">
            <div className="col-lg-8 col-md-12">
                <div className="card p-xl-5 p-lg-4 p-0">
                    <div className="card-body">
                        <div className="mb-3 pb-3 border-bottom">
                            Invoice
                            <strong>01/Nov/2020</strong>
                            <span className="float-end"> <strong>Status:</strong> Pending</span>
                        </div>

                        <div className="row mb-4">
                            <div className="col-sm-6">
                                <h6 className="mb-3">From:</h6>
                                <div><strong>Deo web</strong></div>
                                <div>111  Berkeley Rd</div>
                                <div>STREET ON THE FOSSE, Poland</div>
                                <div>Email: info@deoweb.com</div>
                                <div>Phone: +44 888 666 3333</div>
                            </div>

                            <div className="col-sm-6">
                                <h6 className="mb-3">To:</h6>
                                <div><strong> Colin Web</strong></div>
                                <div>45 Larissa Court</div>
                                <div>Victoria, BIRDWOODTON</div>
                                <div>Email: ColinWeb@gmail.com</div>
                                <div>Phone: +66 243 456 789</div>
                            </div>
                        </div>

                        <div className="table-responsive-sm">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th className="text-center">#</th>
                                        <th>Project</th>
                                        <th>Description</th>
                                        <th className="text-end">Project Cost</th>
                                        <th className="text-center">Members</th>
                                        <th className="text-end">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="text-center">1</td>
                                        <td>Box of Crayons</td>
                                        <td>Extended License</td>
                                        <td className="text-end">$1999,00</td>
                                        <td className="text-center">1</td>
                                        <td className="text-end">$1999,00</td>
                                    </tr>
                                    <tr>
                                        <td className="text-center">2</td>
                                        <td>Fast Cad</td>
                                        <td>Instalation and Customization (cost per hour)</td>
                                        <td className="text-end">$50,00</td>
                                        <td className="text-center">2</td>
                                        <td className="text-end">$100,00</td>
                                    </tr>
                                    <tr>
                                        <td className="text-center">3</td>
                                        <td>Hosting</td>
                                        <td>1 year subcription</td>
                                        <td className="text-end">$499,00</td>
                                        <td className="text-center">1</td>
                                        <td className="text-end">$499,00</td>
                                    </tr>
                                    <tr>
                                        <td className="text-center">4</td>
                                        <td>Platinum Support</td>
                                        <td>1 year subcription 24/7</td>
                                        <td className="text-end">$3.999,00</td>
                                        <td className="text-center">1</td>
                                        <td className="text-end">$3.999,00</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="row">
                            <div className="col-lg-4 col-sm-5">

                            </div>

                            <div className="col-lg-4 col-sm-5 ms-auto">
                                <table className="table table-clear">
                                    <tbody>
                                        <tr>
                                            <td><strong>Subtotal</strong></td>
                                            <td className="text-end">$6.597,00</td>
                                        </tr>
                                        <tr>
                                            <td><strong>VAT (10%)</strong></td>
                                            <td className="text-end">$659,7</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Total</strong></td>
                                            <td className="text-end"><strong>$7.256,7</strong></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-12">
                                <h6>Terms &amp; Condition</h6>
                                <p className="text-muted">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over</p>
                            </div>
                            <div className="col-lg-12 text-end">
                                <button type="button" className="btn btn-outline-secondary btn-lg my-1"><i className="fa fa-print"></i> Print</button>
                                <button type="button" className="btn btn-primary btn-lg my-1"><i className="fa fa-paper-plane-o"></i> Send Invoice</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default SampleInvoice;