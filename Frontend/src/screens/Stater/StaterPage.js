import React from "react";
import PageHeader from "../../components/common/PageHeader";
import imag1 from "../../assets/images/no-data.svg";


function StaterPage() {
    return (
        <div className="container-xxl">
            <PageHeader headerTitle="Stater Page" />
            <div className="col-12">
                <div className="card mb-3">
                    <div className="card-body text-center p-5">
                        <img src={imag1} className="img-fluid mx-size" alt="No Data" />
                        <div className="mt-4 mb-2">
                            <span className="text-muted">No data to show</span>
                        </div>
                        <button type="button" className="btn btn-white border lift mt-1">Get Started</button>
                        <button type="button" className="btn btn-primary border lift mt-1">Back to Home</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default StaterPage;