import React from "react";

function PageHeader1() {

    return (
        <div className="body-header border-bottom d-flex py-3">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col">
                        <h1 className="h4 mt-1">Documentation</h1>
                    </div>
                    <div className="col-auto">
                        <a href="https://themeforest.net/user/pixelwibes" title="Download" rel="noreferrer" target="_blank" className="btn btn-white border lift">Download</a>
                        <a href="/" title="" className="btn btn-dark lift">Go to Dashboard</a>
                    </div>
                </div>

            </div>
        </div>
    )
}


export default PageHeader1;