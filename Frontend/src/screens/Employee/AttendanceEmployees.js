import React from "react";
import DataTable from "react-data-table-component";
import PageHeader from "../../components/common/PageHeader";
import { TimeAttandanceData } from "../../components/Data/AppData";
import { EmployessYearlyStatusData, TodayTimeUtilisationData } from "../../components/Data/ChartData";
import RecentActivityCard from "../../components/Employees/RecentActivityCard";
import StatisticsCard from "../../components/Employees/StatisticsCard";
import GeneralChartCard from "../../components/Employees/TodayTimeUtilisation";

function AttendanceEmployees() {

    return (
        <div className="container-xxl">
            <PageHeader headerTitle="Attendance Employees" />
            <div className="row align-item-center row-deck g-3 mb-3">
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12">
                    <GeneralChartCard Title="Today Time Utilisation" extraDivBody={() =>
                        <div className="timesheet-info d-flex align-items-center justify-content-between flex-wrap">
                            <div className="intime d-flex align-items-center mt-2">
                                <i className="icofont-finger-print fs-4 color-light-success"></i>
                                <span className="fw-bold ms-1">Punching: 10:00 Am</span>
                            </div>
                            <div className="outtime mt-2 w-sm-100">
                                <button type="button" className="btn btn-dark w-sm-100"><i className="icofont-foot-print me-2"></i>Punch Out</button>
                            </div>
                        </div>
                    }
                        identity="todaytimeutl"
                        data={TodayTimeUtilisationData}
                        footerBody={
                            <div class="timesheet-info d-flex align-items-center justify-content-around flex-wrap">
                                <div class="intime d-flex align-items-center">
                                    <i class="icofont-lunch fs-3 color-lavender-purple"></i>
                                    <span class="fw-bold ms-1">Break: 1:10 Hr</span>
                                </div>
                                <div class="intime d-flex align-items-center">
                                    <i class="icofont-ui-timer fs-4 color-light-success"></i>
                                    <span class="fw-bold ms-1">Overtime: 02:10 Hr</span>
                                </div>
                            </div>
                        }
                    />

                </div>
                <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12">
                    <GeneralChartCard Title="Employess Yearly Status" identity="Employessyearlystatus" data={EmployessYearlyStatusData} />
                </div>

            </div>
            <div className="row clearfix g-3 mb-3">
                <div className="col-lg-12 col-md-12 flex-column">
                    <div className="row g-3 row-deck">
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
                            <StatisticsCard />
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
                            <RecentActivityCard />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row clearfix g-3">
                <div className="col-sm-12">
                    <DataTable
                        title={TimeAttandanceData.title}
                        columns={TimeAttandanceData.columns}
                        data={TimeAttandanceData.rows}
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


export default AttendanceEmployees;