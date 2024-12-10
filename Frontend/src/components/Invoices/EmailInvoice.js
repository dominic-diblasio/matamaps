import React from "react";

function EmailInvoice() {

    return (
        <div className="row justify-content-center">
            <div className="col-lg-8 col-md-12">
                <div className="d-flex justify-content-center">
                    <table className="card p-5">
                        <tbody><tr>
                            <td></td>
                            <td >
                                <table >
                                    <tbody width="100%" ><tr>
                                        <td>
                                            <h2 className="text-center">$48.98 Paid</h2>
                                        </td>
                                    </tr>
                                        <tr>
                                            <td className="py-2">
                                                <h4 className="text-center">Thanks for using PXL Inc.</h4>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">
                                                <table >
                                                    <tbody><tr>
                                                        <td className="py-3 text-center">
                                                            Attn: <strong>Ryan MacLeod</strong> Winston Salem FL 27107<br />
                                                            Email: RyanmacLeod@gmail.com<br />
                                                            Phone: +88 123 456 789<br />
                                                        </td>
                                                    </tr>
                                                        <tr>
                                                            <td>
                                                                <table className="table table-bordered w-100" >
                                                                    <tbody ><tr>
                                                                        <td className="text-left" style={{ textAlign: 'left' }}>Extended License</td>
                                                                        <td>$ 20.99</td>
                                                                    </tr>
                                                                        <tr>
                                                                            <td style={{ textAlign: 'left' }}>1 year subcription</td>
                                                                            <td>$ 19.99</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td style={{ textAlign: 'left' }}>Instalation and Customization</td>
                                                                            <td>$ 8.00</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td style={{ textAlign: 'left' }}><strong >Total</strong></td>
                                                                            <td>$ 48.98</td>
                                                                        </tr>
                                                                    </tbody></table>
                                                            </td>
                                                        </tr>
                                                    </tbody></table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center py-2">
                                                <a href="http://pixelwibes.com/template/my-task/html/dist/invoices.html" rel="noreferrer" target="_blank">View in browser</a>

                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                PXL Inc. 47 Aurora St. South West, CT 06074
                                            </td>
                                        </tr>
                                    </tbody></table>
                                <table >
                                    <tbody><tr className="">
                                        <td className="aligncenter py-4 text-align content-block">Questions? Email <a href="mailto:">info@pixelwibes.com</a></td>
                                    </tr>
                                    </tbody></table>
                            </td>
                            <td></td>
                        </tr>
                        </tbody></table>
                </div>
            </div>
        </div>
    );
}


export default EmailInvoice;