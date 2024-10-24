import React from "react";
import PageHeader from "../../components/common/PageHeader";
import FeedbackInfoCard from "../../components/Pages/FeedbackInfoCard";
import ReviewCommnetCard from "../../components/Pages/ReviewCommnetCard";

function ReviewsPage() {

    return (
        <div className="container-xxl">
            <PageHeader headerTitle="Reviews Page" />
            <div className="row clearfix g-3">
                <div className="col-sm-12">
                    <div className="card mb-3">
                        <div className="card-body">
                            <div className="row clearfix g-3">
                                <div className="col-lg-4 col-md-12">
                                    <FeedbackInfoCard />
                                </div>
                                <div className="col-lg-8 col-md-12">
                                    <ReviewCommnetCard />
                                    <nav aria-label="...">
                                        <ul className="pagination justify-content-end">
                                            <li className="page-item disabled">
                                                <span className="page-link">Previous</span>
                                            </li>
                                            <li className="page-item"><a className="page-link" href="#!">1</a></li>
                                            <li className="page-item active" aria-current="page">
                                                <span className="page-link">2</span>
                                            </li>
                                            <li className="page-item"><a className="page-link" href="#!">3</a></li>
                                            <li className="page-item">
                                                <a className="page-link" href="#!">Next</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ReviewsPage;