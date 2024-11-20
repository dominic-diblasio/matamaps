import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";
import EventRegisterPopup from "./EventRegisterPopup";

function ClubEvents() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [username, setUsername] = useState(null);
  const [rsvpDetails, setRSVPDetails] = useState({});
  const { club_id } = useParams();
  const [showPopup, setShowPopup] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    const fetchEventsAndRSVPs = async () => {
      const jwt_token = Cookies.get("jwt_token");
      let fetchedEvents = [];

      try {
        // Fetch club events
        const eventResponse = await axios.get(
          `http://0.0.0.0:3500/clubs/events/${club_id}`
        );
        if (eventResponse.data.success) {
          fetchedEvents = eventResponse.data.data;
          setEvents(fetchedEvents);
        } else {
          setError(eventResponse.data.message || "Failed to fetch events");
          setLoading(false);
          return;
        }

        // Fetch user account details and RSVPs if logged in
        if (jwt_token) {
          const userResponse = await axios.get(
            `http://0.0.0.0:3500/users/account/details`,
            {
              headers: {
                Authorization: `Bearer ${jwt_token}`,
              },
              withCredentials: true,
            }
          );

          if (userResponse.data.success) {
            setUsername(userResponse.data.data.username);

            // Fetch all RSVP details for the user
            const rsvpResponse = await axios.get(
              `http://0.0.0.0:3500/users/rsvp/display`,
              {
                headers: {
                  Authorization: `Bearer ${jwt_token}`,
                },
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
                    updated_at: rsvp.updated_at,
                  },
                }),
                {}
              );
              setRSVPDetails(rsvpMap);
            }
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
  }, [club_id]);

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
      <div className="row">
        <h2 className="text-center">Upcoming Events</h2>
        {events.length > 0 ? (
          events.map((event) => {
            const rsvp = rsvpDetails[event.event_id];
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
                      <strong>Event Status:</strong> {event.event_status || "N/A"}
                    </p>
                    {username && rsvp ? (
                      <>
                        <p className="card-text">
                          <strong>RSVP Status:</strong> {rsvp.rsvp_status || "N/A"}
                        </p>
                        <p className="card-text">
                          <strong>Last Updated:</strong>{" "}
                          {new Date(rsvp.updated_at).toLocaleString()}
                        </p>
                      </>
                    ) : null}
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
            );
          })
        ) : (
          <p>No events available for this club.</p>
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

export default ClubEvents;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import Cookies from 'js-cookie';
// import EventRegisterPopup from './EventRegisterPopup'; // Import the popup component

// function ClubEvents() {
//   const [events, setEvents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [username, setUsername] = useState(null); // Null if not logged in
//   const { club_id } = useParams(); // Get club_id from URL
//   const [showPopup, setShowPopup] = useState(false);
//   const [selectedEvent, setSelectedEvent] = useState(null);

//   useEffect(() => {
//     const fetchClubEvents = async () => {
//       try {
//         // Fetch club events (no authorization needed)
//         const eventResponse = await axios.get(`http://0.0.0.0:3500/clubs/events/${club_id}`);
//         if (eventResponse.data.success) {
//           setEvents(eventResponse.data.data); // Set fetched events
//         } else {
//           setError(eventResponse.data.message || 'Failed to fetch events');
//         }
//       } catch (err) {
//         console.error('Error fetching club events:', err);
//         setError(err.response?.data?.message || 'An error occurred while fetching events');
//       } finally {
//         setLoading(false);
//       }
//     };

//     const fetchUsername = async () => {
//       const jwt_token = Cookies.get('jwt_token');
//       if (!jwt_token) return; // Skip fetching username if no token is present

//       try {
//         const userResponse = await axios.get(`http://0.0.0.0:3500/users/account/details`, {
//           headers: {
//             Authorization: `Bearer ${jwt_token}`,
//           },
//           withCredentials: true,
//         });

//         if (userResponse.data.success) {
//           setUsername(userResponse.data.data.username); // Set username if logged in
//         }
//       } catch (err) {
//         console.error('Error fetching user details:', err);
//         // Do not block events from loading if user details fetch fails
//       }
//     };

//     fetchClubEvents();
//     fetchUsername(); // Fetch username only if logged in
//   }, [club_id]);

//   const handleRegisterClick = (event) => {
//     if (!username) {
//       alert('You need to log in to register for events.');
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
//       <div className="row">
//         <h2 className="text-center">Upcoming Events</h2>
//         {events.length > 0 ? (
//           events.map((event) => (
//             <div key={event.event_id} className="col-lg-4 col-md-6 mb-4">
//               <div className="card shadow-sm">
//                 {event.event_image && (
//                   <img
//                     src={event.event_image}
//                     alt={`${event.event_name} image`}
//                     className="card-img-top"
//                     style={{ height: '200px', objectFit: 'cover' }}
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
//                   {username && ( // Show "Register" button only if logged in
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
//           <p>No events available for this club.</p>
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

// export default ClubEvents;