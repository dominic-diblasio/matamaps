import React from "react";
import PageHeader from "../../components/common/PageHeader";
import { BugFileAttechedData, BugImageAttechedData } from "../../components/Data/AppData";
import AttechedCard from "../../components/Ticket/AttechedCard";
import InternetNotWorking from "../../components/Ticket/InternetNotWorking";
import StatusCard from "../../components/Ticket/StatusCard";
import TicketChat from "../../components/Ticket/TicketChat";

function TicketsDetail() {

    return (
        <div className="container-xxl">
            <PageHeader headerTitle="Tickets Detail" />
            <div className="row g-3">
                <div className="col-xxl-8 col-xl-8 col-lg-12 col-md-12">
                    <div className="row g-3 mb-3">
                        <div className="col-md-4">
                            <StatusCard progress="In Progress" progressBg="bg-warning" iconClass="icofont-optic fs-4" iconbg="bg-lightyellow" title="Status" />
                        </div>
                        <div className="col-md-4">
                            <StatusCard progress="" details="Sally Graham" iconClass="icofont-user fs-4" iconbg="bg-lightblue" title="Created Name" />
                        </div>
                        <div className="col-md-4">
                            <StatusCard progress="High" progressBg="bg-danger" details="" iconClass="icofont-price fs-4" iconbg="bg-lightgreen" title="Priority" />
                        </div>
                    </div>
                    <div className="row g-3 mb-3">
                        <div className="col-md-12">
                            <InternetNotWorking />
                            <div className="row g-3 mb-3">
                                <div className="col-lg-6 col-md-6">
                                    <AttechedCard data={BugImageAttechedData} />
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <AttechedCard data={BugFileAttechedData} />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-12 col-md-12">
                    <TicketChat />
                </div>

            </div>
        </div>
    )
}


export default TicketsDetail;