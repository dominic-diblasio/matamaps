import React from "react";
import DataTable from "react-data-table-component";
import PageHeader from "../../components/common/PageHeader";
import { PaymentsData } from "../../components/Data/AppData";

function Payments() {

    return (
        <div className="container-xxl">
            <PageHeader headerTitle="Payments" />
            <div className="row clearfix g-3">
                <div className="col-sm-12">
                    <DataTable
                        title={PaymentsData.title}
                        columns={PaymentsData.columns}
                        data={PaymentsData.rows}
                        defaultSortField="title"
                        pagination
                        selectableRows={false}
                        className="table myDataTable table-hover align-middle mb-0 d-row nowrap dataTable no-footer dtr-inline"
                        highlightOnHover={true}
                    />
                </div>
            </div>
        </div>
    )
}


export default Payments;