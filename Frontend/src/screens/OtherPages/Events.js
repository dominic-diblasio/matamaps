import React from 'react';

const eventList = [
    { id: 1, title: 'Event 1', description: 'Description for Event 1' },
    { id: 2, title: 'Event 2', description: 'Description for Event 2' },
    { id: 3, title: 'Event 3', description: 'Description for Event 3' },
];

function Events() {
    return (
        <div className="container">
            <h2>Upcoming Events</h2>
            <div className="row">
                {eventList.map((event) => (
                    <div key={event.id} className="col-lg-4 col-md-6 mb-4">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">{event.title}</h5>
                                <p className="card-text">{event.description}</p>
                                <button className="btn btn-success">Register</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


        </div>
    );
}

export default Events;














// import React from 'react';

// function Events() {
//     return (
//         <div>
//             <h2>Events</h2>
//             <p>List of events goes here.</p>
//         </div>
//     );
// }

// export default Events;