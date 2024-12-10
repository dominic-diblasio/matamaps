import React from "react";
import PageHeader from "../../components/common/PageHeader";
import BigCalendar from "../../components/Pages/BigCalendar";

function Calendar() {

    return (
        <div className="container-xxl">
            <PageHeader headerTitle="Calendar" />
            <div className="row clearfix g-3">
                <BigCalendar />
            </div>
        </div>
    )
}


export default Calendar;