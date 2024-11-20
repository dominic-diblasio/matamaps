
import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import EventRegisterPopup from "./EventRegisterPopup";

function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [username, setUsername] = useState(null);
  const [role, setRole] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const jwt_token = Cookies.get("jwt_token");

        // Fetch user details if logged in
        if (jwt_token) {
          const userResponse = await axios.get("http://localhost:3500/users/account/details", {
            headers: { Authorization: `Bearer ${jwt_token}` },
            withCredentials: true,
          });

          if (userResponse.data.success) {
            const userData = userResponse.data.data;
            setUsername(userData.username);
            setRole(userData.role);
          }
        }

        // Fetch events
        const endpoint =
          role === "club_leader"
            ? "http://localhost:3500/events/filtered-events"
            : "http://localhost:3500/events";

        const eventsResponse = await axios.get(endpoint, {
          headers: jwt_token ? { Authorization: `Bearer ${jwt_token}` } : {},
          withCredentials: !!jwt_token,
        });

        if (eventsResponse.data.success) {
          setEvents(eventsResponse.data.data);
        } else {
          setError(eventsResponse.data.message || "Failed to fetch events");
        }
      } catch (err) {
        console.error("Error fetching events:", err);
        setError(err.response?.data?.message || "An error occurred while fetching events");
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [role]);

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
      <div className="row">
        {events.length > 0 ? (
          events.map((event) => (
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
                    <strong>Date:</strong> {new Date(event.event_date).toLocaleDateString()}
                  </p>
                  <p className="card-text">
                    <strong>Location:</strong> {event.location}
                  </p>
                  <p className="card-text">
                    <strong>Status:</strong> {event.event_status || "N/A"}
                  </p>
                  {event.event_status !== "completed" && username && (
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
          ))
        ) : (
          <p>No upcoming events available.</p>
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
//           const userResponse = await axios.get("http://localhost:3500/users/account/details", {
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
//             ? "http://localhost:3500/events/filtered-events"
//             : "http://localhost:3500/events";

//         const eventsResponse = await axios.get(endpoint, {
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