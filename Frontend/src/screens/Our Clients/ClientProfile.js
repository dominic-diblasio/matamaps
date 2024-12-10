import React from "react";
import DataTable from "react-data-table-component";
import ClientProfileCard from "../../components/Clients/ClientProfileCard";
import ClientTaskCard from "../../components/Clients/ClientTaskCard";
import CurrentClientProject from "../../components/Clients/CurrentClientProject";
import PageHeader from "../../components/common/PageHeader";
import { clentProfileData } from "../../components/Data/AppData";
import { ClientInvoicesData } from "../../components/Data/DashboardData";

function ClientProfile() {

    return (
        <div className="container-xxl">
            <PageHeader headerTitle="Client Profile" />
            <div className="row g-3">
                <div className="col-xl-8 col-lg-12 col-md-12">
                    <ClientProfileCard />
                    <h6 className="fw-bold  py-3 mb-3">Current Client Project</h6>
                    <div className="teachercourse-list mb-3">
                        <div className="row g-3 gy-5 pt-3 row-deck">
                            {
                                clentProfileData.map((d, i) => {
                                    return <div key={"ljsdhl" + i} className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                        <CurrentClientProject teamImage={d.teamImage} logo={d.logo} logoBg={d.logoBg} title={d.title} sl={d.sl} />
                                    </div>
                                })
                            }
                        </div>
                    </div>
                    <div className="row g-3">
                        <div className="col-md-12">
                            <DataTable
                                title={ClientInvoicesData.title}
                                columns={ClientInvoicesData.columns}
                                data={ClientInvoicesData.rows}
                                defaultSortField="title"
                                pagination
                                selectableRows={false}
                                className="table myDataTable table-hover align-middle mb-0 d-row nowrap dataTable no-footer dtr-inline"
                                highlightOnHover={true}
                            />
                        </div>
                    </div>

                </div>
                <div className="col-xl-4 col-lg-12 col-md-12">
                    <ClientTaskCard />
                </div>
            </div>
        </div>
    )
}


export default ClientProfile;