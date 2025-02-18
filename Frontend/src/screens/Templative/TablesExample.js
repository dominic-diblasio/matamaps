import React from "react";
import PageHeader from "../../components/common/PageHeader";
import BasicTable from "../../components/Pages/BasicTable";
import StripedTable from "../../components/Pages/StripedTable";
import VariantsTable from "../../components/Pages/VariantsTable";
import HoverableTable from "../../components/Pages/HoverableTable";
import TableDataTable from "../../components/Pages/TableDataTable";

function TablesExample() {

    return (
        <div className="container-xxl">
            <PageHeader headerTitle="Tables Example" />
            <div className="row align-item-center">
                <div className="col-md-12">
                    <BasicTable />
                    <VariantsTable />
                    <StripedTable />
                    <HoverableTable />
                    <TableDataTable />
                </div>
            </div>
        </div>
    )
}


export default TablesExample;