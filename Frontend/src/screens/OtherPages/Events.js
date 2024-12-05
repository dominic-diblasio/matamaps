import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import EventRegisterPopup from "./EventRegisterPopup";
import APIClient from "./APIClient";

function Events() {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [username, setUsername] = useState(null);
  const [rsvpDetails, setRSVPDetails] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [statusFilter, setStatusFilter] = useState("all"); // Default filter

  useEffect(() => {
    const fetchEventsAndRSVPs = async () => {
      try {
        const jwt_token = Cookies.get("jwt_token");
        let fetchedEvents = [];

        // Fetch events
        const eventResponse = await APIClient.get("events");
        if (eventResponse.data.success) {
          fetchedEvents = eventResponse.data.data;
          setEvents(fetchedEvents);
          setFilteredEvents(fetchedEvents); // Set initial filtered events
        } else {
          setError(eventResponse.data.message || "Failed to fetch events");
          setLoading(false);
          return;
        }

        // Fetch user details and RSVP details if logged in
        if (jwt_token) {
          try {
            const userResponse = await APIClient.get(
              "users/account/details",
              {
                headers: { Authorization: `Bearer ${jwt_token}` },
                withCredentials: true,
              }
            );

            if (userResponse.data.success) {
              setUsername(userResponse.data.data.username);

              // Fetch RSVP details
              const rsvpResponse = await APIClient.get(
                "users/rsvp/display",
                {
                  headers: { Authorization: `Bearer ${jwt_token}` },
                  withCredentials: true,
                }
              );

              if (rsvpResponse.data.success) {
                // Map RSVP details with event IDs
                const rsvpMap = rsvpResponse.data.data.reduce(
                  (acc, rsvp) => ({
                    ...acc,
                    [rsvp.event_id]: {
                      rsvp_status: rsvp.status,
                      created_at: rsvp.created_at,
                      updated_at: rsvp.updated_at,
                    },
                  }),
                  {}
                );
                setRSVPDetails(rsvpMap);
              }
            }
          } catch (rsvpError) {
            console.error("No RSVPs found or error fetching RSVPs:", rsvpError);
            // If RSVP fetching fails, continue to load events without RSVP data
          }
        }
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.response?.data?.message || "An error occurred while fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchEventsAndRSVPs();
  }, []);

  // Update filtered events when statusFilter changes
  useEffect(() => {
    if (statusFilter === "all") {
      setFilteredEvents(events);
    } else {
      setFilteredEvents(events.filter((event) => event.event_status === statusFilter));
    }
  }, [statusFilter, events]);

  const handleRegisterClick = (event) => {
    if (!username) {
      alert("You need to log in to register for events.");
      return;
    }
    setSelectedEvent(event);
    setShowPopup(true);
  };

  if (loading) {
    return <div>Loading events...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container">
      <h2 className="text-center my-4">Upcoming Events</h2>

      {/* Filter Dropdown */}
      <div className="mb-4 text-center">
        <label htmlFor="statusFilter" className="form-label">
          Filter by Status:
        </label>
        <select
          id="statusFilter"
          className="form-select w-25 mx-auto"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </select>
      </div>

      <div className="row">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => {
            const rsvp = rsvpDetails[event.event_id];
            const showRegisterButton =
              event.event_status !== "completed" && // Hide if event status is completed
              (!rsvp || (rsvp && rsvp.rsvp_status !== "accepted")); // Hide if RSVP is accepted

            return (
              <div key={event.event_id} className="col-lg-4 col-md-6 mb-4">
                <div className="card shadow-sm">
                  {event.event_image && (
                    <img
                      src={event.event_image}
                      alt={`${event.event_name} image`}
                      className="card-img-top"
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                  )}
                  <div className="card-body">
                    <h5 className="card-title">{event.event_name}</h5>
                    <p className="card-text">{event.event_description}</p>
                    <p className="card-text">
                      <strong>Date:</strong>{" "}
                      {new Date(event.event_date).toLocaleDateString()}
                    </p>
                    <p className="card-text">
                      <strong>Location:</strong> {event.location}
                    </p>
                    <p className="card-text">
                      <strong>Status:</strong> {event.event_status || "N/A"}
                    </p>
                    {rsvp ? (
                      <>
                        <p className="card-text">
                          <strong>RSVP Status:</strong> {rsvp.rsvp_status || "N/A"}
                        </p>
                        <p className="card-text">
                          <strong>RSVPd Date:</strong>{" "}
                          {new Date(rsvp.created_at).toLocaleString()}
                        </p>
                        <p className="card-text">
                          <strong>Updated Date:</strong>{" "}
                          {new Date(rsvp.updated_at).toLocaleString()}
                        </p>
                      </>
                    ) : (
                      username && <p className="card-text">You have not RSVP'd.</p>
                    )}
                    {showRegisterButton && (
                      <button
                        className="btn btn-success"
                        onClick={() => handleRegisterClick(event)}
                      >
                        Register
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p>No events available for the selected status.</p>
        )}
      </div>

      {showPopup && selectedEvent && (
        <EventRegisterPopup
          event={selectedEvent}
          username={username}
          onClose={() => setShowPopup(false)}
        />
      )}
    </div>
  );
}

export default Events;





// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Cookies from "js-cookie";
// import EventRegisterPopup from "./EventRegisterPopup";

// function Events() {
//   const [events, setEvents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [username, setUsername] = useState(null);
//   const [role, setRole] = useState(null);
//   const [showPopup, setShowPopup] = useState(false);
//   const [selectedEvent, setSelectedEvent] = useState(null);

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         // Fetch user details only if a token exists
//         const jwt_token = Cookies.get("jwt_token");

//         if (jwt_token) {
//           const userResponse = await APIClient.get("users/account/details", {
//             headers: { Authorization: `Bearer ${jwt_token}` },
//             withCredentials: true,
//           });

//           if (userResponse.data.success) {
//             const userData = userResponse.data.data;
//             setUsername(userData.username);
//             setRole(userData.role);
//           }
//         }

//         // Fetch events based on role
//         const endpoint =
//           role === "club_leader"
//             ? "events/filtered-events"
//             : "events";

//         const eventsResponse = await APIClient.get(endpoint, {
//           headers: jwt_token ? { Authorization: `Bearer ${jwt_token}` } : {},
//           withCredentials: !!jwt_token,
//         });

//         if (eventsResponse.data.success) {
//           setEvents(eventsResponse.data.data);
//         } else {
//           setError(eventsResponse.data.message || "Failed to fetch events");
//         }
//       } catch (err) {
//         console.error("Error fetching events:", err);
//         setError(err.response?.data?.message || "An error occurred while fetching events");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchEvents();
//   }, [role]);

//   const handleRegisterClick = (event) => {
//     if (!username) {
//       alert("You need to log in to register for events.");
//       return;
//     }
//     setSelectedEvent(event);
//     setShowPopup(true);
//   };

//   if (loading) {
//     return <div>Loading events...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div className="container">
//       <h2 className="text-center my-4">Upcoming Events</h2>
//       <div className="row">
//         {events.length > 0 ? (
//           events.map((event) => (
//             <div key={event.event_id} className="col-lg-4 col-md-6 mb-4">
//               <div className="card shadow-sm">
//                 {event.event_image && (
//                   <img
//                     src={event.event_image}
//                     alt={`${event.event_name} image`}
//                     className="card-img-top"
//                     style={{ height: "200px", objectFit: "cover" }}
//                   />
//                 )}
//                 <div className="card-body">
//                   <h5 className="card-title">{event.event_name}</h5>
//                   <p className="card-text">{event.event_description}</p>
//                   <p className="card-text">
//                     <strong>Date:</strong> {new Date(event.event_date).toLocaleDateString()}
//                   </p>
//                   <p className="card-text">
//                     <strong>Location:</strong> {event.location}
//                   </p>
//                   {username && (
//                     <button
//                       className="btn btn-success"
//                       onClick={() => handleRegisterClick(event)}
//                     >
//                       Register
//                     </button>
//                   )}
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>No upcoming events available.</p>
//         )}
//       </div>
//       {showPopup && selectedEvent && (
//         <EventRegisterPopup
//           event={selectedEvent}
//           username={username}
//           onClose={() => setShowPopup(false)}
//         />
//       )}
//     </div>
//   );
// }

// export default Events;