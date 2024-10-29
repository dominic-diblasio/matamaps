import React from "react";
import PageHeader from "../../components/common/PageHeader";
import SalaryslipPrint from "../../components/Employees/SalaryslipPrint";

function Salaryslip() {

    return (
        <div className="container-xxl">
            <PageHeader headerTitle="Salary slip" />
            <div className="row justify-content-center">
                <div className="col-lg-12 col-md-12">
                    <SalaryslipPrint />
                </div>
            </div>
        </div>
    )
}


export default Salaryslip;