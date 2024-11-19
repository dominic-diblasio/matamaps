import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import EventRegisterPopup from "./EventRegisterPopup";

function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [username, setUsername] = useState(null); // Null if not logged in
  const [showPopup, setShowPopup] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // Fetch events (public data)
        const eventsResponse = await axios.get("http://localhost:3500/events");
        if (eventsResponse.data.success) {
          setEvents(eventsResponse.data.data);
        } else {
          setError(eventsResponse.data.message || "Failed to fetch events");
        }

        // Fetch username only if a token exists
        const jwt_token = Cookies.get("jwt_token");
        if (jwt_token) {
          try {
            const userResponse = await axios.get(
              "http://localhost:3500/users/account/details",
              {
                headers: {
                  Authorization: `Bearer ${jwt_token}`,
                },
                withCredentials: true,
              }
            );
            if (userResponse.data.success) {
              setUsername(userResponse.data.data.username);
            }
          } catch (userError) {
            console.error("User not logged in or session expired:", userError);
            // No need to set error for username fetch failure
          }
        }
      } catch (err) {
        console.error("Error fetching events:", err);
        setError(err.response?.data?.message || "An error occurred while fetching events");
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

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
                  {username && ( // Conditionally render the "Register" button if logged in
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
//   const [username, setUsername] = useState(null); // Null if not logged in
//   const [showPopup, setShowPopup] = useState(false);
//   const [selectedEvent, setSelectedEvent] = useState(null);

//   useEffect(() => {
//     const fetchEvents = async () => {
//       const jwt_token = Cookies.get("jwt_token"); // Get JWT token from cookies

//       try {
//         // Fetch events (public data)
//         const eventsResponse = await axios.get("http://localhost:3500/events");
//         if (eventsResponse.data.success) {
//           setEvents(eventsResponse.data.data);
//         } else {
//           setError(eventsResponse.data.message || "Failed to fetch events");
//         }

//         // Fetch username only if logged in
//         if (jwt_token) {
//           const userResponse = await axios.get(
//             "http://localhost:3500/users/account/details",
//             {
//               headers: {
//                 Authorization: `Bearer ${jwt_token}`,
//               },
//               withCredentials: true,
//             }
//           );
//           if (userResponse.data.success) {
//             setUsername(userResponse.data.data.username);
//           }
//         }
//       } catch (err) {
//         console.error("Error fetching events:", err);
//         setError(err.response?.data?.message || "An error occurred while fetching events");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchEvents();
//   }, []);

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
//                   <button
//                     className="btn btn-success"
//                     onClick={() => handleRegisterClick(event)}
//                   >
//                     Register
//                   </button>
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