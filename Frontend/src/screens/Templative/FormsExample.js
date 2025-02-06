import React from "react";
import PageHeader from "../../components/common/PageHeader";
import AdvancedValidationForm from "../../components/Pages/AdvancedValidationForm";
import BasicForm from "../../components/Pages/BasicForm";
import BasicValidationForm from "../../components/Pages/BasicValidationForm";

function FormsExample() {

    return (
        <div className="container-xxl">
            <PageHeader headerTitle="Forms" />
            <div className="row align-item-center">
                <div className="col-md-12">
                    <BasicForm />
                    <BasicValidationForm />
                    <AdvancedValidationForm />
                </div>
            </div>
        </div>
    )
}


export default FormsExample;