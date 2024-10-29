import React from "react";
import Nestable from "react-nestable";
import NestableCard from "./NestableCard";

function TaskNestable(props) {

    const { InProgressTaskData, needReviewData, CompletedData } = props;
    return (
        <div className="row taskboard g-3 py-xxl-4">
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 mt-xxl-4 mt-xl-4 mt-lg-4 mt-md-4 mt-sm-4 mt-4">
                <h6 className="fw-bold py-3 mb-0">In Progress</h6>
                <div>
                    <Nestable
                        key="kjdfhgkj"
                        items={InProgressTaskData}
                        renderItem={({ item }) => { return <NestableCard data={item} /> }}
                        threshold={0}
                    />
                </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 mt-xxl-4 mt-xl-4 mt-lg-4 mt-md-4 mt-sm-4 mt-4">
                <h6 className="fw-bold py-3 mb-0">Needs Review</h6>
                <div>
                    <Nestable
                        key="kjdfhgkjfgkjh4584"
                        items={needReviewData}
                        renderItem={({ item }) => { return <NestableCard data={item} /> }}
                        threshold={0}
                    />
                </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 mt-xxl-4 mt-xl-4 mt-lg-4 mt-md-4 mt-sm-4 mt-4">
                <h6 className="fw-bold py-3 mb-0">Completed</h6>
                <div>
                    <Nestable
                        key="kjdfhgkjfgsdkjh4584"
                        items={CompletedData}
                        renderItem={({ item }) => { return <NestableCard data={item} /> }}
                        threshold={0}
                    />
                </div>
            </div>
        </div>
    )
}


export default TaskNestable;