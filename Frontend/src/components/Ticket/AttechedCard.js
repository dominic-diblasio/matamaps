import React from "react";

function AttechedCard(props) {

    const { data } = props;
    return (
        <div className="card">
            <div className="card-body">
                <h6 className="fw-bold mb-3 text-danger">Bug Image Atteched</h6>
                <div className="flex-grow-1">
                    {
                        data.map((data, i) => {
                            return <div key={"cuhdus" + i} className="py-2 d-flex align-items-center border-bottom">
                                <div className="d-flex ms-3 align-items-center flex-fill">
                                    <span className={`avatar lg ${data.bgClass} rounded-circle text-center d-flex align-items-center justify-content-center`}><i className={data.fileicon}></i></span>
                                    <div className="d-flex flex-column ps-3">
                                        <h6 className="fw-bold mb-0 small-14">{data.filename}</h6>
                                    </div>
                                </div>
                                <button type="button" className={`btn ${data.bgClass} text-end`}>Download</button>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}


export default AttechedCard;