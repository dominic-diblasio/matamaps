import React from "react";
import { Route, Routes as ReactRoutes } from "react-router-dom";
import LeftSide from "../components/Auth/LeftSide";
import Page404 from "../components/Auth/Page404";
import PasswordReset from "../components/Auth/PasswordReset";
import SignIn from "../components/Auth/SignIn";
import Signup from "../components/Auth/Signup";
import StepAuthentication from "../components/Auth/StepAuthentication";
import RegisterationForm from "./OtherPages/RegistrationForm";
import LoginPage from "./OtherPages/LoginPage";
import ForgotPassword from "./OtherPages/ForgotPassword";
const AuthIndex = () => {
    return(
        <div className="main p-2 py-3 p-xl-5 ">
            <div className="body d-flex p-0 p-xl-5">
                <div className="container-xxl">
                    <div className="row g-0">
                    <LeftSide />
                    <ReactRoutes>
                        <Route exact path={`${process.env.PUBLIC_URL}/sign-in`} element={<SignIn/>} /> 
                        <Route exact path={`${process.env.PUBLIC_URL}/sign-up`} element={<Signup/>} />
                        <Route exact path={`${process.env.PUBLIC_URL}/password-reset`} element={<PasswordReset/>} />
                        <Route exact path={`${process.env.PUBLIC_URL}/2-step-authentication`} element={<StepAuthentication/>} />
                        <Route exact path={`${process.env.PUBLIC_URL}/page-404`} element={<Page404/>} />
                        <Route exact path="/registration" element={<RegisterationForm />} />
                    <Route exact path="/login" element={<LoginPage />} />
                    <Route exact path="/forgot-password" element={<ForgotPassword />} />
                    </ReactRoutes>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthIndex