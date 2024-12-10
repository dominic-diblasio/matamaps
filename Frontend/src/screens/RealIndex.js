import React from "react";
import { Route, Routes as ReactRoutes } from "react-router-dom";
import HrDashboard from "./Dashboard/HrDashboard";
import RegisterationForm from "./OtherPages/RegistrationForm";
import LoginPage from "./OtherPages/LoginPage";
import ForgotPassword from "./OtherPages/ForgotPassword";
import Dashboard from "./OtherPages/Dashboard";
import Messages from "./OtherPages/Messages";
import Events from "./OtherPages/Events";
import Clubs from "./OtherPages/Clubs";
import ClubMembers from "./OtherPages/ClubMembers";
import PersonalDetailsPage from "./OtherPages/PersonalDetailsPage";
import ClubEvents from "./OtherPages/ClubEvents";
import ClubDetails from "./OtherPages/ClubDetails";
import ClubRules from "./OtherPages/ClubRules";
import ClubLeaderClubsPage from "./OtherPages/ClubLeaderClubsPage";
import ManageClubMembersPage from "./OtherPages/ManageClubMembersPage";
import ManageClubEventsPage from "./OtherPages/ManageClubEventsPage";
import AddEventPage from "./OtherPages/AddEventPage";
import ManageClubStudentsPage from "./OtherPages/ManageClubStudentsPage";
import EditEventPage from "./OtherPages/EditEventPage";
import ManageRSVPsPage from "./OtherPages/ManageRSVPsPage";
import MyRSVPsPage from "./OtherPages/MyRSVPsPage";
import StackingToaster from "./OtherPages/StackingToaster";
import ClubAnnouncementsPage from "./OtherPages/ClubAnnouncementsPage";
import ClubAnnouncements from "./OtherPages/ClubAnnouncements";
import AdminClubsPage from "./OtherPages/AdminClubsPage";
import AdminClubDetails from "./OtherPages/AdminClubDetails";
import UserManagementPage from "./OtherPages/UserManagementPage";
import AddClubPage from "./OtherPages/AddClubPage";
import AddClubMemberPage from "./OtherPages/AddClubMemberPage";

function EmptyPageIndex(props) {
    // const { activekey } = props;

    return (
        <div className="main px-lg-4 px-md-4">
            <div className="body d-flex py-lg-3 py-md-2">
                <ReactRoutes>
                    <Route exact path="/" element={<HrDashboard />} />
                    <Route exact path="/registration" element={<RegisterationForm />} />
                    <Route exact path="/login" element={<LoginPage />} />
                    <Route exact path="/forgot-password" element={<ForgotPassword />} />
                    <Route exact path="/dashboard" element={<Dashboard />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/clubs" element={<Clubs />} />
                    <Route path="/clubs-leader" element={<ClubLeaderClubsPage/>}/>
                    <Route path="/announcements" element={<ClubAnnouncements/>}/>
                    <Route path="/club-members/:club_id" element={<ClubMembers />} />
                    <Route path="/club-events/:club_id" element={<ClubEvents />} />
                    <Route path="/clubs/details/:club_id" element={<ClubDetails />} />
                    <Route path="/club-rules/:club_id" element={<ClubRules />} />
                    <Route path="/club-leader/events/:club_id" element={<ManageClubEventsPage/>} />
                    <Route path="/club-leader/events/rsvps/:event_id" element={<ManageRSVPsPage/>} /> 
                    <Route path="/my-rsvp" element={<MyRSVPsPage/>} />   
                    <Route path="/admin/clubs" element={<AdminClubsPage />} />
                    <Route path="/admin/club/details/:club_id" element={<AdminClubDetails/>} />
                    <Route path="/users-manage" element={<UserManagementPage/>} />
                    <Route path="/club-leader/events/add/:club_id" element={<AddEventPage/>} />
                    <Route path="/add-club" element={<AddClubPage/>} />
                    <Route path="/club-leader/events/edit/:event_id" element={<EditEventPage/>} />
                    <Route path="/members-leader/:club_id" element={<ManageClubMembersPage/>}/>
                    <Route path="/club-leader/students/:club_id" element={<ManageClubStudentsPage />} />
                    <Route exact path="/messages" element={<Messages />} />
                    <Route exact path="/personal-details" element={<PersonalDetailsPage />} />
                    <Route exact path="/st" element={<StackingToaster />} />
                    <Route exact path="/club-announcements/:club_id" element={<ClubAnnouncementsPage />} />
                </ReactRoutes>
            </div>
        </div>
    );
}

export default EmptyPageIndex;

// import React from "react";
// import { Route, Routes as ReactRoutes } from "react-router-dom";
// import HrDashboard from "./Dashboard/HrDashboard";
// import RegisterationForm from "./OtherPages/RegistrationForm";
// import LoginPage from "./OtherPages/LoginPage";
// import ForgotPassword from "./OtherPages/ForgotPassword";
// // import Dashboard from "./OtherPages/Dashboard";
// import Messages from "./OtherPages/Messages";
// import PersonalDetailsPage from "./OtherPages/PersonalDetailsPage";

// function EmptyPageIndex(props) {
//     const { activekey } = props;
    
//     return (
//         <div className="main px-lg-4 px-md-4">
//             <div className="body d-flex py-lg-3 py-md-2">
//                 <ReactRoutes>
//                     <Route exact path={`${process.env.PUBLIC_URL}/`} element={<HrDashboard />} />
//                     <Route exact path={`${process.env.PUBLIC_URL}/employee-registration`} element={<RegisterationForm />} />
//                     <Route exact path={`${process.env.PUBLIC_URL}/login`} element={<LoginPage />} />
//                      <Route exact path={`${process.env.PUBLIC_URL}/forgot-password`} element={<ForgotPassword/>} /> 
//                      {/* <Route exact path={`${process.env.PUBLIC_URL}/my-dashboard`} element={<Dashboard/>} />  */}
//                      <Route exact path={`${process.env.PUBLIC_URL}/messages`} element={<Messages/>} />
//                      <Route exact path={`${process.env.PUBLIC_URL}/personal-details`} element={<PersonalDetailsPage/>} />

            
//                 </ReactRoutes>
//             </div>
//         </div>
//     );
// }

// export default EmptyPageIndex;