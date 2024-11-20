import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useParams, useNavigate } from "react-router-dom";

function ManageClubEventsPage() {
  const { club_id } = useParams(); // Get club_id from the URL
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // For navigation

  useEffect(() => {
    const fetchClubEvents = async () => {
      const jwt_token = Cookies.get("jwt_token");

      if (!jwt_token) {
        setError("You need to log in to manage events.");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(
          `http://localhost:3500/club/leader/events/${club_id}`,
          {
            headers: {
              Authorization: `Bearer ${jwt_token}`,
            },
            withCredentials: true,
          }
        );

        if (response.data.success) {
          setEvents(response.data.data);
        } else {
          setError(response.data.message || "Failed to fetch events.");
        }
      } catch (err) {
        console.error("Error fetching club events:", err);
        setError(
          err.response?.data?.message || "An error occurred while fetching events."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchClubEvents();
  }, [club_id]);

  const handleAddEvent = () => {
    navigate(`/club-leader/events/add/${club_id}`); // Navigate to Add Event page
  };

  const handleEditEvent = (event_id) => {
    navigate(`/club-leader/events/edit/${event_id}`); // Navigate to Edit Event page
  };

  const handleDeleteEvent = async (event_id) => {
    const jwt_token = Cookies.get("jwt_token");

    if (!jwt_token) {
      setError("You need to log in to delete an event.");
      return;
    }

    if (window.confirm("Are you sure you want to delete this event?")) {
      try {
        const response = await axios.delete(
          `http://localhost:3500/club-leader/events/${event_id}`,
          {
            headers: {
              Authorization: `Bearer ${jwt_token}`,
            },
            withCredentials: true,
          }
        );

        if (response.data.success) {
          alert("Event deleted successfully!");
          setEvents(events.filter((event) => event.event_id !== event_id)); // Remove the event from the list
        } else {
          setError(response.data.message || "Failed to delete event.");
        }
      } catch (err) {
        console.error("Error deleting event:", err);
        setError(
          err.response?.data?.message || "An error occurred while deleting the event."
        );
      }
    }
  };

  if (loading) {
    return <div>Loading events...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container my-4">
      <h2 className="text-center">Manage Club Events</h2>
      <div className="mb-4 text-end">
        <button className="btn btn-primary" onClick={handleAddEvent}>
          Add Event
        </button>
      </div>
      <div className="row">
        {events.length > 0 ? (
          events.map((event) => (
            <div key={event.event_id} className="col-md-4 mb-4">
              <div className="card">
                {event.event_image && (
                  <img
                    src={event.event_image}
                    alt={event.event_name}
                    className="card-img-top"
                    style={{ height: "150px", objectFit: "cover" }}
                  />
                )}
                <div className="card-body">
                  <h5 className="card-title">{event.event_name}</h5>
                  <p className="card-text">
                    <strong>Date:</strong> {new Date(event.event_date).toLocaleDateString()}
                  </p>
                  <p className="card-text">{event.event_description}</p>
                  <p className="card-text">
                    <strong>Location:</strong> {event.location}
                  </p>
                  <button
                    className="btn btn-warning"
                    onClick={() => handleEditEvent(event.event_id)}
                  >
                    Edit Event
                  </button>
                  <button
                    className="btn btn-danger ms-2"
                    onClick={() => handleDeleteEvent(event.event_id)}
                  >
                    Delete Event
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No events found for this club.</p>
        )}
      </div>
    </div>
  );
}

export default ManageClubEventsPage;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Cookies from "js-cookie";
// import { useParams } from "react-router-dom";

// function ManageClubEventsPage() {
//   const { club_id } = useParams(); // Get club_id from the URL
//   const [events, setEvents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchClubEvents = async () => {
//       const jwt_token = Cookies.get("jwt_token");

//       if (!jwt_token) {
//         setError("You need to log in to manage events.");
//         setLoading(false);
//         return;
//       }

//       try {
//         const response = await axios.get(`http://localhost:3500/club/leader/events/${club_id}`, {
//           headers: {
//             Authorization: `Bearer ${jwt_token}`,
//           },
//           withCredentials: true,
//         });

//         if (response.data.success) {
//           setEvents(response.data.data);
//         } else {
//           setError(response.data.message || "Failed to fetch events.");
//         }
//       } catch (err) {
//         console.error("Error fetching club events:", err);
//         setError(err.response?.data?.message || "An error occurred while fetching events.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchClubEvents();
//   }, [club_id]);

//   if (loading) {
//     return <div>Loading events...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div className="container my-4">
//       <h2 className="text-center">Manage Club Events</h2>
//       <div className="row">
//         {events.length > 0 ? (
//           events.map((event) => (
//             <div key={event.event_id} className="col-md-4 mb-4">
//               <div className="card">
//                 {event.event_image && (
//                   <img
//                     src={event.event_image}
//                     alt={`${event.event_name} image`}
//                     className="card-img-top"
//                     style={{ height: "150px", objectFit: "cover" }}
//                   />
//                 )}
//                 <div className="card-body">
//                   <h5 className="card-title">{event.event_name}</h5>
//                   <p className="card-text">
//                     <strong>Date:</strong> {new Date(event.event_date).toLocaleDateString()}
//                   </p>
//                   <p className="card-text">{event.event_description}</p>
//                   <p className="card-text">
//                     <strong>Location:</strong> {event.location}
//                   </p>
//                   {/* Optional buttons for managing events */}
//                   <button className="btn btn-warning">Edit Event</button>
//                   <button className="btn btn-danger ms-2">Delete Event</button>
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>No events found for this club.</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default ManageClubEventsPage;
