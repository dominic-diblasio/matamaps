import React from "react";
import DataTable from "react-data-table-component";
import { LeadersListData } from "../Data/AppData";

function TableDataTable() {

  return (
    <div className="card mb-3">
      <DataTable
        title="Datatable"
        columns={LeadersListData.columns}
        data={LeadersListData.rows}
        defaultSortField="title"
        pagination
        subHeader
        selectableRows={false}
        className="table myDataTable table-hover align-middle mb-0 d-row nowrap dataTable no-footer dtr-inline"
        highlightOnHover={true}
      />
    </div>
  );
}


export default TableDataTable;