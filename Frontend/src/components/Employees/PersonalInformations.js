import React from "react";

function PersonalInformations(props) {

    const { information, title, onClickEdit } = props;
    return (
        <div className="card">
            <div className="card-header py-3 d-flex justify-content-between">
                <h6 className="mb-0 fw-bold ">{title}</h6>
                <button type="button" className="btn p-0" onClick={onClickEdit}><i className="icofont-edit text-primary fs-6"></i></button>
            </div>
            <div className="card-body">
                <ul className="list-unstyled mb-0">
                    {
                        information ?
                            information.map((d, i) => {
                                return <li key={"dfhfh" + i} className="row flex-wrap mb-3">
                                    <div className="col-6">
                                        <span className="fw-bold">{d.title}</span>
                                    </div>
                                    <div className="col-6">
                                        <span className="text-muted">{d.value}</span>
                                    </div>
                                </li>
                            })
                            : null
                    }
                </ul>
            </div>
        </div>
    )
}


export default PersonalInformations;