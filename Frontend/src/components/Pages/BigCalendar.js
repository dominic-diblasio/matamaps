import React from "react";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

class BigCalendar extends React.Component {
  render(){
    return (
            <div className="card">
                <div className="py-3 px-3">
                    <FullCalendar 
                    plugins={[dayGridPlugin, interactionPlugin]}
                    editable={true}
                    eventDrop={this.handleEventDrop}
                    eventClick={this.handleEventClick}
                    events='https://fullcalendar.io/demo-events.json'
                />
                </div>
            </div>
    );
  }
}

export default BigCalendar;