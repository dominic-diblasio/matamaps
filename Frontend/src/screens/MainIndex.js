import React from "react";
import { Route, Routes as ReactRoutes } from "react-router-dom";
import Header from "../components/common/Header";
import Expenses from "./Accounts/Expenses";
import Invoices from "./Accounts/Invoices";
import Payments from "./Accounts/Payments";
import HrDashboard from "./Dashboard/HrDashboard";
import ProjectDashboard from "./Dashboard/ProjectDashboard";
import Attendance from "./Employee/Attendance";
import AttendanceEmployees from "./Employee/AttendanceEmployees";
import Departments from "./Employee/Departments";
import EmployeeProfile from "./Employee/EmployeeProfile";
import Holidays from "./Employee/Holidays";
import LeaveRequest from "./Employee/LeaveRequest";
import Members from "./Employee/Members";
import ClientProfile from "./Our Clients/ClientProfile";
import Clients from "./Our Clients/Clients";
import Salaryslip from "./Payroll/Salaryslip";
import Leaders from "./Projects/Leaders";
import Projects from "./Projects/Projects";
import Tasks from "./Projects/Tasks";
import Timesheet from "./Projects/Timesheet";
import TicketsDetail from "./Tickets/TicketsDetail";
import TicketsView from "./Tickets/TicketsView";
import Alerts from "./UIComponents/Alerts";
import Calendar from "./App/Calendar";
import ChatApp from "./App/ChatApp";
import ApexCharts from "./OtherPages/ApexCharts";
import FormsExample from "./OtherPages/FormsExample";
import TablesExample from "./OtherPages/TablesExample";
import ReviewsPage from "./OtherPages/ReviewsPage";
import Icons from "./OtherPages/Icons";
import Widgets from "./OtherPages/Widgets";
import Badges from "./UIComponents/Badges";
import Breadcrumb from "./UIComponents/Breadcrumb";
import Buttons from "./UIComponents/Buttons";
import Cards from "./UIComponents/Cards";
import Carousel from "./UIComponents/Carousel";
import Collapse from "./UIComponents/Collapse";
import Dropdowns from "./UIComponents/Dropdowns";
import ListGroup from "./UIComponents/ListGroup";
import ModalUI from "./UIComponents/ModalUI";
import NavsUI from "./UIComponents/NavsUI";
import NavbarUI from "./UIComponents/NavbarUI";
import PaginationUI from "./UIComponents/PaginationUI";
import PopoversUI from "./UIComponents/PopoversUI";
import ProgressUI from "./UIComponents/ProgressUI";
import Scrollspy from "./UIComponents/Scrollspy";
import SpinnersUI from "./UIComponents/SpinnersUI";
import ToastsUI from "./UIComponents/ToastsUI";
import StaterPage from "./Stater/StaterPage";
import PageHeader1 from "../components/common/PageHeader1";
import Documentation from "./Documentation/Documentation";
import Changelog from "./Changelog/Changelog";
import Help from "./Dashboard/Help";

function MainIndex(props) {

    const { activekey } = props;
    return (
        <div className="main px-lg-4 px-md-4">
            {activekey !== "/chat-app" ? activekey === "/documentation" ? <PageHeader1 /> : <Header /> : ""}
            <div className="body d-flex py-lg-3 py-md-2">
            <ReactRoutes>
                <Route exact path={`${process.env.PUBLIC_URL}/`} element={<HrDashboard/>} />
                <Route exact path={`${process.env.PUBLIC_URL}/hr-dashboard`} element={<HrDashboard/>} />
                <Route exact path={`${process.env.PUBLIC_URL}/project-dashboard`} element={<ProjectDashboard/>} />
                <Route exact path={`${process.env.PUBLIC_URL}/projects`} element={<Projects/>} />
                <Route exact path={`${process.env.PUBLIC_URL}/tasks`} element={<Tasks/>} />
                <Route exact path={`${process.env.PUBLIC_URL}/timesheet`} element={<Timesheet/>} />
                <Route exact path={`${process.env.PUBLIC_URL}/leaders`} element={<Leaders/>} />
                <Route exact path={`${process.env.PUBLIC_URL}/tickets-view`} element={<TicketsView/>} />
                <Route exact path={`${process.env.PUBLIC_URL}/tickets-detail`} element={<TicketsDetail/>} />
                <Route exact path={`${process.env.PUBLIC_URL}/clients`} element={<Clients/>} />
                <Route exact path={`${process.env.PUBLIC_URL}/client-profile`} element={<ClientProfile/>} />
                <Route exact path={`${process.env.PUBLIC_URL}/members`} element={<Members/>} />
                <Route exact path={`${process.env.PUBLIC_URL}/members-profile`} element={<EmployeeProfile/>} />
                <Route exact path={`${process.env.PUBLIC_URL}/holidays`} element={<Holidays/>} />
                <Route exact path={`${process.env.PUBLIC_URL}/attendance-employees`} element={<AttendanceEmployees/>} />
                <Route exact path={`${process.env.PUBLIC_URL}/attendance`} element={<Attendance/>} />
                <Route exact path={`${process.env.PUBLIC_URL}/leave-request`} element={<LeaveRequest/>} />
                <Route exact path={`${process.env.PUBLIC_URL}/department`} element={<Departments/>} />
                <Route exact path={`${process.env.PUBLIC_URL}/invoices`} element={<Invoices/>} />
                <Route exact path={`${process.env.PUBLIC_URL}/payments`} element={<Payments/>} />
                <Route exact path={`${process.env.PUBLIC_URL}/expenses`} element={<Expenses/>} />
                <Route exact path={`${process.env.PUBLIC_URL}/employee-salary`} element={<Salaryslip/>} />
                <Route exact path={`${process.env.PUBLIC_URL}/calander`} element={<Calendar/>} />
                <Route exact path={`${process.env.PUBLIC_URL}/chat-app`} element={<ChatApp/>} />
                <Route exact path={`${process.env.PUBLIC_URL}/apex-charts`} element={<ApexCharts/>} />
                <Route exact path={`${process.env.PUBLIC_URL}/forms-example`} element={<FormsExample/>} />
                <Route exact path={`${process.env.PUBLIC_URL}/table-example`} element={<TablesExample/>} />
                <Route exact path={`${process.env.PUBLIC_URL}/reviews-page`} element={<ReviewsPage/>} />
                <Route exact path={`${process.env.PUBLIC_URL}/icons`} element={<Icons/>} />
                <Route exact path={`${process.env.PUBLIC_URL}/widgets`} element={<Widgets/>} />
                <Route exact path={`${process.env.PUBLIC_URL}/ui-alerts`} element={<Alerts/>} />
                <Route exact path={`${process.env.PUBLIC_URL}/ui-badge`} element={<Badges/>} />
                <Route exact path={`${process.env.PUBLIC_URL}/ui-breadcrumb`} element={<Breadcrumb/>} />
                <Route exact path={`${process.env.PUBLIC_URL}/ui-buttons`} element={<Buttons/>} />
                <Route exact path={`${process.env.PUBLIC_URL}/ui-card`} element={<Cards/>} />
                <Route exact path={`${process.env.PUBLIC_URL}/ui-carousel`} element={<Carousel/>} />
                <Route exact path={`${process.env.PUBLIC_URL}/ui-collapse`} element={<Collapse/>} />
                <Route exact path={`${process.env.PUBLIC_URL}/ui-dropdowns`} element={<Dropdowns/>} />
                <Route exact path={`${process.env.PUBLIC_URL}/ui-listgroup`} element={<ListGroup/>} />
                <Route exact path={`${process.env.PUBLIC_URL}/ui-modalui`} element={<ModalUI/>} />
                <Route exact path={`${process.env.PUBLIC_URL}/ui-navsui`} element={<NavsUI/>} />
                <Route exact path={`${process.env.PUBLIC_URL}/ui-navbarui`} element={<NavbarUI/>} />
                <Route exact path={`${process.env.PUBLIC_URL}/ui-paginationui`} element={<PaginationUI/>} />
                <Route exact path={`${process.env.PUBLIC_URL}/ui-popoversui`} element={<PopoversUI/>} />
                <Route exact path={`${process.env.PUBLIC_URL}/ui-progressui`} element={<ProgressUI/>} />
                <Route exact path={`${process.env.PUBLIC_URL}/ui-Scrollspyui`} element={<Scrollspy/>} />
                <Route exact path={`${process.env.PUBLIC_URL}/ui-spinnersui`} element={<SpinnersUI/>} />
                <Route exact path={`${process.env.PUBLIC_URL}/ui-toastsui`} element={<ToastsUI/>} />
                <Route exact path={`${process.env.PUBLIC_URL}/stater-page`} element={<StaterPage/>} />
                <Route exact path={`${process.env.PUBLIC_URL}/documentation`} element={<Documentation/>} />
                <Route exact path={`${process.env.PUBLIC_URL}/changelog`} element={<Changelog/>} />
                <Route exact path={`${process.env.PUBLIC_URL}/help`} element={<Help/>} />
            </ReactRoutes>
            </div>
        </div>
    )
}


export default MainIndex;