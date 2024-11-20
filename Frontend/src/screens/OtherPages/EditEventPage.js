import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

function EditEventPage() {
  const { event_id } = useParams(); // Only event_id is passed as a parameter
  const [clubId, setClubId] = useState(""); // State to store club_id
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventImage, setEventImage] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchEventDetails = async () => {
    const jwt_token = Cookies.get("jwt_token");

    if (!jwt_token) {
      setError("You need to log in to edit an event.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.get(
        `http://localhost:3500/club-leader/events/details/${event_id}`,
        {
          headers: {
            Authorization: `Bearer ${jwt_token}`,
          },
          withCredentials: true,
        }
      );

      if (response.data.success) {
        const event = response.data.data;
        setEventName(event.event_name);
        setEventDescription(event.event_description);
        setEventDate(new Date(event.event_date).toISOString().split("T")[0]);
        setEventLocation(event.location);
        setEventImage(event.event_image);
        setClubId(event.club_id); // Set the club_id from the response
      } else {
        setError(response.data.message || "Failed to fetch event details.");
      }
    } catch (err) {
      console.error("Error fetching event details:", err);
      setError(err.response?.data?.message || "An error occurred while fetching event details.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEventDetails();
  }, [event_id]);

  const handleEditEvent = async (e) => {
    e.preventDefault();
    const jwt_token = Cookies.get("jwt_token");

    if (!jwt_token) {
      setError("You need to log in to edit an event.");
      return;
    }

    try {
      const response = await axios.put(
        `http://localhost:3500/club-leader/events/edit/${event_id}`,
        {
          event_name: eventName,
          event_description: eventDescription,
          event_date: eventDate,
          location: eventLocation,
          event_image: eventImage,
        },
        {
          headers: {
            Authorization: `Bearer ${jwt_token}`,
          },
          withCredentials: true,
        }
      );

      if (response.data.success) {
        alert("Event updated successfully!");
        navigate(`/club-leader/events/${clubId}`); // Use the club_id fetched from the API
      } else {
        setError(response.data.message || "Failed to update event.");
      }
    } catch (err) {
      console.error("Error updating event:", err);
      setError(err.response?.data?.message || "An error occurred while updating the event.");
    }
  };

  if (loading) {
    return <div>Loading event details...</div>;
  }

  return (
    <div className="container my-4">
      <h2 className="text-center">Edit Event</h2>
      <form onSubmit={handleEditEvent}>
        <div className="mb-3">
          <label htmlFor="eventName" className="form-label">Event Name</label>
          <input
            type="text"
            id="eventName"
            className="form-control"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="eventDescription" className="form-label">Event Description</label>
          <textarea
            id="eventDescription"
            className="form-control"
            value={eventDescription}
            onChange={(e) => setEventDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="eventDate" className="form-label">Event Date</label>
          <input
            type="date"
            id="eventDate"
            className="form-control"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="eventLocation" className="form-label">Event Location</label>
          <input
            type="text"
            id="eventLocation"
            className="form-control"
            value={eventLocation}
            onChange={(e) => setEventLocation(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="eventImage" className="form-label">Event Image URL</label>
          <input
            type="text"
            id="eventImage"
            className="form-control"
            value={eventImage}
            onChange={(e) => setEventImage(e.target.value)}
          />
        </div>
        {error && <p className="text-danger">{error}</p>}
        <button type="submit" className="btn btn-success">Save Changes</button>
      </form>
    </div>
  );
}

export default EditEventPage;

// import React, { useState, useEffect } from "react";
// import { useParams, useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";
// import Cookies from "js-cookie";

// function EditEventPage() {
//   const { event_id } = useParams();
//   const { state } = useLocation();
//   const club_id = useParams().club_id || state?.event?.club_id; // Extract club_id from params or state
//   const [eventName, setEventName] = useState(state?.event?.event_name || "");
//   const [eventDescription, setEventDescription] = useState(state?.event?.event_description || "");
//   const [eventDate, setEventDate] = useState(
//     state?.event?.event_date ? new Date(state.event.event_date).toISOString().split("T")[0] : ""
//   ); // Format for input
//   const [eventLocation, setEventLocation] = useState(state?.event?.location || "");
//   const [eventImage, setEventImage] = useState(state?.event?.event_image || "");
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(!state?.event); // If state has event, skip loading
//   const navigate = useNavigate();

//   const fetchEventDetails = async () => {
//     const jwt_token = Cookies.get("jwt_token");

//     if (!jwt_token) {
//       setError("You need to log in to edit an event.");
//       setLoading(false);
//       return;
//     }

//     try {
//       const response = await axios.get(
//         `http://0.0.0.0:3500/club-leader/events/details/${event_id}`,
//         {
//           headers: {
//             Authorization: `Bearer ${jwt_token}`,
//           },
//           withCredentials: true,
//         }
//       );

//       if (response.data.success) {
//         const event = response.data.data;
//         setEventName(event.event_name);
//         setEventDescription(event.event_description);
//         setEventDate(new Date(event.event_date).toISOString().split("T")[0]); // Convert to yyyy-mm-dd
//         setEventLocation(event.location);
//         setEventImage(event.event_image);
//       } else {
//         setError(response.data.message || "Failed to fetch event details.");
//       }
//     } catch (err) {
//       console.error("Error fetching event details:", err);
//       setError(err.response?.data?.message || "An error occurred while fetching event details.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (!state?.event) {
//       fetchEventDetails();
//     }
//   }, [event_id, state]);

//   const handleEditEvent = async (e) => {
//     e.preventDefault();
//     const jwt_token = Cookies.get("jwt_token");

//     if (!jwt_token) {
//       setError("You need to log in to edit an event.");
//       return;
//     }

//     try {
//       const response = await axios.put(
//         `http://0.0.0.0:3500/club-leader/events/edit/${event_id}`,
//         {
//           event_name: eventName,
//           event_description: eventDescription,
//           event_date: eventDate,
//           location: eventLocation,
//           event_image: eventImage,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${jwt_token}`,
//           },
//           withCredentials: true,
//         }
//       );

//       if (response.data.success) {
//         alert("Event updated successfully!");
//         navigate(`/club-leader/events/${club_id}`);
//       } else {
//         setError(response.data.message || "Failed to update event.");
//       }
//     } catch (err) {
//       console.error("Error updating event:", err);
//       setError(err.response?.data?.message || "An error occurred while updating the event.");
//     }
//   };

//   if (loading) {
//     return <div>Loading event details...</div>;
//   }

//   return (
//     <div className="container my-4">
//       <h2 className="text-center">Edit Event</h2>
//       <form onSubmit={handleEditEvent}>
//         <div className="mb-3">
//           <label htmlFor="eventName" className="form-label">Event Name</label>
//           <input
//             type="text"
//             id="eventName"
//             className="form-control"
//             value={eventName}
//             onChange={(e) => setEventName(e.target.value)}
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="eventDescription" className="form-label">Event Description</label>
//           <textarea
//             id="eventDescription"
//             className="form-control"
//             value={eventDescription}
//             onChange={(e) => setEventDescription(e.target.value)}
//             required
//           ></textarea>
//         </div>
//         <div className="mb-3">
//           <label htmlFor="eventDate" className="form-label">Event Date</label>
//           <input
//             type="date"
//             id="eventDate"
//             className="form-control"
//             value={eventDate}
//             onChange={(e) => setEventDate(e.target.value)}
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="eventLocation" className="form-label">Event Location</label>
//           <input
//             type="text"
//             id="eventLocation"
//             className="form-control"
//             value={eventLocation}
//             onChange={(e) => setEventLocation(e.target.value)}
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="eventImage" className="form-label">Event Image URL</label>
//           <input
//             type="text"
//             id="eventImage"
//             className="form-control"
//             value={eventImage}
//             onChange={(e) => setEventImage(e.target.value)}
//           />
//         </div>
//         {error && <p className="text-danger">{error}</p>}
//         <button type="submit" className="btn btn-success">Save Changes</button>
//       </form>
//     </div>
//   );
// }

// export default EditEventPage;


    // import React, { useState, useEffect } from "react";
    // import { useParams, useNavigate } from "react-router-dom";
    // import axios from "axios";
    // import Cookies from "js-cookie";

    // function EditEventPage() {
    // const { event_id } = useParams();
    // const [eventName, setEventName] = useState("");
    // const [eventDescription, setEventDescription] = useState("");
    // const [eventDate, setEventDate] = useState("");
    // const [eventLocation, setEventLocation] = useState("");
    // const [eventImage, setEventImage] = useState("");
    // const [error, setError] = useState(null);
    // const [loading, setLoading] = useState(true);
    // const navigate = useNavigate();

    // useEffect(() => {
    //     const fetchEventDetails = async () => {
    //     const jwt_token = Cookies.get("jwt_token");

    //     if (!jwt_token) {
    //         setError("You need to log in to edit an event.");
    //         setLoading(false);
    //         return;
    //     }

    //     try {
    //         const response = await axios.get(
    //         `http://0.0.0.0:3500/club-leader/events/details/${event_id}`,
    //         {
    //             headers: {
    //             Authorization: `Bearer ${jwt_token}`,
    //             },
    //             withCredentials: true,
    //         }
    //         );

    //         if (response.data.success) {
    //         const event = response.data.data;
    //         setEventName(event.event_name);
    //         setEventDescription(event.event_description);
    //         setEventDate(event.event_date);
    //         setEventLocation(event.location);
    //         setEventImage(event.event_image);
    //         } else {
    //         setError(response.data.message || "Failed to fetch event details.");
    //         }
    //     } catch (err) {
    //         console.error("Error fetching event details:", err);
    //         setError(err.response?.data?.message || "An error occurred while fetching event details.");
    //     } finally {
    //         setLoading(false);
    //     }
    //     };

    //     fetchEventDetails();
    // }, [event_id]);

    // const handleEditEvent = async (e) => {
    //     e.preventDefault();
    //     const jwt_token = Cookies.get("jwt_token");

    //     if (!jwt_token) {
    //     setError("You need to log in to edit an event.");
    //     return;
    //     }

    //     try {
    //     const response = await axios.put(
    //         `http://localhost:3500/club-leader/events/edit/${event_id}`,
    //         {
    //         event_name: eventName,
    //         event_description: eventDescription,
    //         event_date: eventDate,
    //         location: eventLocation,
    //         event_image: eventImage,
    //         },
    //         {
    //         headers: {
    //             Authorization: `Bearer ${jwt_token}`,
    //         },
    //         withCredentials: true,
    //         }
    //     );

    //     if (response.data.success) {
    //         alert("Event updated successfully!");
    //         navigate(`/club-leader/events/${event_id}`);
    //     } else {
    //         setError(response.data.message || "Failed to update event.");
    //     }
    //     } catch (err) {
    //     console.error("Error updating event:", err);
    //     setError(err.response?.data?.message || "An error occurred while updating the event.");
    //     }
    // };

    // if (loading) {
    //     return <div>Loading event details...</div>;
    // }

    // return (
    //     <div className="container my-4">
    //     <h2 className="text-center">Edit Event</h2>
    //     <form onSubmit={handleEditEvent}>
    //         <div className="mb-3">
    //         <label htmlFor="eventName" className="form-label">Event Name</label>
    //         <input
    //             type="text"
    //             id="eventName"
    //             className="form-control"
    //             value={eventName}
    //             onChange={(e) => setEventName(e.target.value)}
    //             required
    //         />
    //         </div>
    //         <div className="mb-3">
    //         <label htmlFor="eventDescription" className="form-label">Event Description</label>
    //         <textarea
    //             id="eventDescription"
    //             className="form-control"
    //             value={eventDescription}
    //             onChange={(e) => setEventDescription(e.target.value)}
    //             required
    //         ></textarea>
    //         </div>
    //         <div className="mb-3">
    //         <label htmlFor="eventDate" className="form-label">Event Date</label>
    //         <input
    //             type="date"
    //             id="eventDate"
    //             className="form-control"
    //             value={eventDate}
    //             onChange={(e) => setEventDate(e.target.value)}
    //             required
    //         />
    //         </div>
    //         <div className="mb-3">
    //         <label htmlFor="eventLocation" className="form-label">Event Location</label>
    //         <input
    //             type="text"
    //             id="eventLocation"
    //             className="form-control"
    //             value={eventLocation}
    //             onChange={(e) => setEventLocation(e.target.value)}
    //             required
    //         />
    //         </div>
    //         <div className="mb-3">
    //         <label htmlFor="eventImage" className="form-label">Event Image URL</label>
    //         <input
    //             type="text"
    //             id="eventImage"
    //             className="form-control"
    //             value={eventImage}
    //             onChange={(e) => setEventImage(e.target.value)}
    //         />
    //         </div>
    //         {error && <p className="text-danger">{error}</p>}
    //         <button type="submit" className="btn btn-success">Save Changes</button>
    //     </form>
    //     </div>
    // );
    // }

    // export default EditEventPage;

