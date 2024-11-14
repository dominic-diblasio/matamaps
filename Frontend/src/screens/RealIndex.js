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
                    <Route exact path="/my-dashboard" element={<Dashboard />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/clubs" element={<Clubs />} />
                    <Route path="/club-members" element={<ClubMembers />} />
                    <Route exact path="/messages" element={<Messages />} />
                    <Route exact path="/personal-details" element={<PersonalDetailsPage />} />
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