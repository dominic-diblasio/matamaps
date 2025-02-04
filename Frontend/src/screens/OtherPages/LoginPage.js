import React from "react";
import LoginForm from "./LoginForm";
import 'material-icons/iconfont/material-icons.css';

function LoginPage({ setIsLoggedIn }) { // get setIsLoggedIn from MainIndex
    return (
        <div className="base">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-md-10 col-lg-9">
                        <LoginForm setIsLoggedIn={setIsLoggedIn} /> 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;