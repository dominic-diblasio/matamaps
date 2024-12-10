import React from "react";
import LoginForm from "./LoginForm";
import 'material-icons/iconfont/material-icons.css';


function LoginPage() {
    return (
        <div className="base">
            <div className="container-xxl">
                <div className="row">
                    {/* Dynamically adjust form width based on the state of KnowledgeBasePill */}
                    <div className="col-md-10 col-lg-9">
                        <LoginForm />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;