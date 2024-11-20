import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useParams, useNavigate } from "react-router-dom";

function ManageClubEventsPage() {
  const { club_id } = useParams();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [statusFilter, setStatusFilter] = useState("all");
  const navigate = useNavigate();

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

  const handleManageRSVPs = (event_id) => {
    navigate(`/club-leader/events/rsvps/${event_id}`);
  };

  const handleAddEvent = () => {
    navigate(`/club-leader/events/add/${club_id}`);
  };

  const handleEditEvent = (event_id) => {
    navigate(`/club-leader/events/edit/${event_id}`);
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
          `http://localhost:3500/club-leader/events/delete/${event_id}`,
          {
            headers: {
              Authorization: `Bearer ${jwt_token}`,
            },
            withCredentials: true,
          }
        );

        if (response.data.success) {
          alert("Event deleted successfully!");
          setEvents(events.filter((event) => event.event_id !== event_id));
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

  const handleStatusChange = async (event_id, newStatus) => {
    const jwt_token = Cookies.get("jwt_token");

    try {
      const response = await axios.put(
        `http://localhost:3500/club-leader/events/status/${event_id}`,
        { status: newStatus },
        {
          headers: {
            Authorization: `Bearer ${jwt_token}`,
          },
          withCredentials: true,
        }
      );

      if (response.data.success) {
        const { updated_at } = response.data.data;
        setEvents((prevEvents) =>
          prevEvents.map((event) =>
            event.event_id === event_id
              ? { ...event, status: newStatus, updated_at }
              : event
          )
        );
      } else {
        alert(response.data.message || "Failed to update event status.");
      }
    } catch (err) {
      console.error("Error updating event status:", err);
      alert("An error occurred while updating the status.");
    }
  };

  const filteredEvents =
    statusFilter === "all"
      ? events
      : events.filter((event) => event.status === statusFilter);

  if (loading) {
    return <div>Loading events...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container my-4">
      <h2 className="text-center">Manage Club Events</h2>
      <div className="mb-4">
        <label htmlFor="statusFilter" className="form-label">
          Filter by Status:
        </label>
        <select
          id="statusFilter"
          className="form-select"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>
      <div className="mb-4 text-end">
        <button className="btn btn-primary" onClick={handleAddEvent}>
          Add Event
        </button>
      </div>
      <div className="row">
  {filteredEvents.length > 0 ? (
    filteredEvents.map((event) => (
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
              <strong>Event Id:</strong> {event.event_id}
            </p>
            <p className="card-text">
              <strong>Date:</strong>{" "}
              {new Date(event.event_date).toLocaleDateString()}
            </p>
            <p className="card-text">{event.event_description}</p>
            <p className="card-text">
              <strong>Status:</strong> {event.status}
            </p>
            <p className="card-text">
              <strong>Last Updated:</strong>{" "}
              {new Date(event.updated_at).toLocaleString()}
            </p>

            {/* Display all buttons if status is not 'completed' */}
            {event.status !== "completed" ? (
              <>
                <button
                  className="btn btn-success me-2"
                  onClick={() => handleStatusChange(event.event_id, "active")}
                >
                  Activate
                </button>
                <button
                  className="btn btn-warning me-2"
                  onClick={() => handleStatusChange(event.event_id, "inactive")}
                >
                  Deactivate
                </button>
                <button
                  className="btn btn-secondary me-2"
                  onClick={() => handleStatusChange(event.event_id, "pending")}
                >
                  Set Pending
                </button>
                <button
                  className="btn btn-warning mt-2"
                  onClick={() => handleEditEvent(event.event_id)}
                >
                  Edit Event
                </button>
                <button
                  className="btn btn-danger mt-2"
                  onClick={() => handleDeleteEvent(event.event_id)}
                >
                  Delete Event
                </button>
                <button
                  className="btn btn-info mt-2"
                  onClick={() => handleManageRSVPs(event.event_id)}
                >
                  Manage RSVPs
                </button>
              </>
            ) : (
              // Display only Manage RSVPs button if status is 'completed'
              <button
                className="btn btn-info mt-2"
                onClick={() => handleManageRSVPs(event.event_id)}
              >
                Manage RSVPs
              </button>
            )}
          </div>
        </div>
      </div>
    ))
  ) : (
    <p>No events found for this club.</p>
  )}
</div>


      {/* <div className="row">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
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
                    <strong>Date:</strong>{" "}
                    {new Date(event.event_date).toLocaleDateString()}
                  </p>
                  <p className="card-text">{event.event_description}</p>
                  <p className="card-text">
                    <strong>Status:</strong> {event.status}
                  </p>
                  <p className="card-text">
                    <strong>Last Updated:</strong>{" "}
                    {new Date(event.updated_at).toLocaleString()}
                  </p>
                  <button
                    className="btn btn-success me-2"
                    onClick={() => handleStatusChange(event.event_id, "active")}
                  >
                    Activate
                  </button>
                  <button
                    className="btn btn-warning me-2"
                    onClick={() => handleStatusChange(event.event_id, "inactive")}
                  >
                    Deactivate
                  </button>
                  <button
                    className="btn btn-secondary me-2"
                    onClick={() => handleStatusChange(event.event_id, "pending")}
                  >
                    Set Pending
                  </button>
                  <button
                    className="btn btn-warning mt-2"
                    onClick={() => handleEditEvent(event.event_id)}
                  >
                    Edit Event
                  </button>
                  <button
                    className="btn btn-danger mt-2"
                    onClick={() => handleDeleteEvent(event.event_id)}
                  >
                    Delete Event
                  </button>
                  <button
                    className="btn btn-info mt-2"
                    onClick={() => handleManageRSVPs(event.event_id)}
                  >
                    Manage RSVPs
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No events found for this club.</p>
        )}
      </div> */}
    </div>
  );
}

export default ManageClubEventsPage;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Cookies from "js-cookie";
// import { useParams, useNavigate } from "react-router-dom";

// function ManageClubEventsPage() {
//   const { club_id } = useParams(); // Get club_id from the URL
//   const [events, setEvents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [statusFilter, setStatusFilter] = useState("all"); // Filter for event status
//   const navigate = useNavigate(); // For navigation

//   useEffect(() => {
//     const fetchClubEvents = async () => {
//       const jwt_token = Cookies.get("jwt_token");

//       if (!jwt_token) {
//         setError("You need to log in to manage events.");
//         setLoading(false);
//         return;
//       }

//       try {
//         const response = await axios.get(
//           `http://localhost:3500/club/leader/events/${club_id}`,
//           {
//             headers: {
//               Authorization: `Bearer ${jwt_token}`,
//             },
//             withCredentials: true,
//           }
//         );

//         if (response.data.success) {
//           setEvents(response.data.data);
//         } else {
//           setError(response.data.message || "Failed to fetch events.");
//         }
//       } catch (err) {
//         console.error("Error fetching club events:", err);
//         setError(
//           err.response?.data?.message || "An error occurred while fetching events."
//         );
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchClubEvents();
//   }, [club_id]);

//   const handleAddEvent = () => {
//     navigate(`/club-leader/events/add/${club_id}`); // Navigate to Add Event page
//   };

//   const handleEditEvent = (event_id) => {
//     navigate(`/club-leader/events/edit/${event_id}`); // Navigate to Edit Event page
//   };

//   const handleDeleteEvent = async (event_id) => {
//     const jwt_token = Cookies.get("jwt_token");

//     if (!jwt_token) {
//       setError("You need to log in to delete an event.");
//       return;
//     }

//     if (window.confirm("Are you sure you want to delete this event?")) {
//       try {
//         const response = await axios.delete(
//           `http://localhost:3500/club-leader/events/delete/${event_id}`,
//           {
//             headers: {
//               Authorization: `Bearer ${jwt_token}`,
//             },
//             withCredentials: true,
//           }
//         );

//         if (response.data.success) {
//           alert("Event deleted successfully!");
//           setEvents(events.filter((event) => event.event_id !== event_id)); // Remove the event from the list
//         } else {
//           setError(response.data.message || "Failed to delete event.");
//         }
//       } catch (err) {
//         console.error("Error deleting event:", err);
//         setError(
//           err.response?.data?.message || "An error occurred while deleting the event."
//         );
//       }
//     }
//   };

//   const handleStatusChange = async (event_id, newStatus) => {
//     const jwt_token = Cookies.get("jwt_token");

//     try {
//       const response = await axios.put(
//         `http://localhost:3500/club-leader/events/status/${event_id}`,
//         { status: newStatus },
//         {
//           headers: {
//             Authorization: `Bearer ${jwt_token}`,
//           },
//           withCredentials: true,
//         }
//       );

//       if (response.data.success) {
//         const { updated_at } = response.data.data;
//         // Update the event's status and updated_at in the state
//         setEvents((prevEvents) =>
//           prevEvents.map((event) =>
//             event.event_id === event_id
//               ? { ...event, status: newStatus, updated_at }
//               : event
//           )
//         );
//       } else {
//         alert(response.data.message || "Failed to update event status.");
//       }
//     } catch (err) {
//       console.error("Error updating event status:", err);
//       alert("An error occurred while updating the status.");
//     }
//   };

//   const filteredEvents =
//     statusFilter === "all"
//       ? events
//       : events.filter((event) => event.status === statusFilter);

//   if (loading) {
//     return <div>Loading events...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div className="container my-4">
//       <h2 className="text-center">Manage Club Events</h2>
//       <div className="mb-4">
//         <label htmlFor="statusFilter" className="form-label">
//           Filter by Status:
//         </label>
//         <select
//           id="statusFilter"
//           className="form-select"
//           value={statusFilter}
//           onChange={(e) => setStatusFilter(e.target.value)}
//         >
//           <option value="all">All</option>
//           <option value="pending">Pending</option>
//           <option value="active">Active</option>
//           <option value="inactive">Inactive</option>
//         </select>
//       </div>
//       <div className="mb-4 text-end">
//         <button className="btn btn-primary" onClick={handleAddEvent}>
//           Add Event
//         </button>
//       </div>
//       <div className="row">
//         {filteredEvents.length > 0 ? (
//           filteredEvents.map((event) => (
//             <div key={event.event_id} className="col-md-4 mb-4">
//               <div className="card">
//                 {event.event_image && (
//                   <img
//                     src={event.event_image}
//                     alt={event.event_name}
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
//                   <p className="card-text">
//                     <strong>Status:</strong> {event.status}
//                   </p>
//                   <p className="card-text">
//                     <strong>Last Updated:</strong>{" "}
//                     {new Date(event.updated_at).toLocaleString()}
//                   </p>
//                   <button
//                     className="btn btn-success me-2"
//                     onClick={() => handleStatusChange(event.event_id, "active")}
//                   >
//                     Activate
//                   </button>
//                   <button
//                     className="btn btn-warning me-2"
//                     onClick={() => handleStatusChange(event.event_id, "inactive")}
//                   >
//                     Deactivate
//                   </button>
//                   <button
//                     className="btn btn-secondary me-2"
//                     onClick={() => handleStatusChange(event.event_id, "pending")}
//                   >
//                     Set Pending
//                   </button>
//                   <button
//                     className="btn btn-warning mt-2"
//                     onClick={() => handleEditEvent(event.event_id)}
//                   >
//                     Edit Event
//                   </button>
//                   <button
//                     className="btn btn-danger mt-2"
//                     onClick={() => handleDeleteEvent(event.event_id)}
//                   >
//                     Delete Event
//                   </button>
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