import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useParams } from "react-router-dom";
import APIClient from "./APIClient";

function ClubAnnouncementsPage() {
  const [announcements, setAnnouncements] = useState([]);
  const [announcementName, setAnnouncementName] = useState("");
  const [eventId, setEventId] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const [error, setError] = useState(null);
  const { club_id } = useParams();

  // Fetch announcements
  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const jwt_token = Cookies.get("jwt_token");
        if (!jwt_token) {
          setError("You need to log in to view this page.");
          return;
        }

        const response = await APIClient.get(`announcements/get/${club_id}`, {
          headers: { Authorization: `Bearer ${jwt_token}` },
        });

        if (response.data.success && Array.isArray(response.data.data)) {
          setAnnouncements(response.data.data);
        } else {
          setAnnouncements([]);
          setError(response.data.message || "No announcements found.");
        }
      } catch (err) {
        setError("An error occurred while fetching announcements.");
        console.error("Error fetching announcements:", err);
      }
    };

    fetchAnnouncements();
  }, [club_id]);

  // Add announcement
  const handleAddAnnouncement = async () => {
    if (!announcementName.trim() || !newMessage.trim()) {
      alert("Announcement Name and Message are mandatory.");
      return;
    }

    try {
      const jwt_token = Cookies.get("jwt_token");
      if (!jwt_token) {
        alert("You must be logged in to add an announcement.");
        return;
      }

      const response = await APIClient.post(
        "announcements/add",
        {
          club_id,
          announcement_name: announcementName.trim(),
          event_id: eventId ? eventId.trim() : null, // Optional field
          message: newMessage.trim(),
        },
        { headers: { Authorization: `Bearer ${jwt_token}` } }
      );

      if (response.data.success) {
        setAnnouncements((prev) => [...prev, response.data.data]);
        setAnnouncementName("");
        setEventId("");
        setNewMessage("");
        alert("Announcement added successfully!");
      } else {
        alert("Failed to add announcement.");
      }
    } catch (err) {
      alert("An error occurred while adding the announcement.");
      console.error("Error adding announcement:", err);
    }
  };

  // Delete announcement
  const handleDeleteAnnouncement = async (announcementId) => {
    try {
      const jwt_token = Cookies.get("jwt_token");
      if (!jwt_token) {
        alert("You must be logged in to delete an announcement.");
        return;
      }

      const response = await APIClient.delete(
        `announcements/delete/${announcementId}`,
        { headers: { Authorization: `Bearer ${jwt_token}` } }
      );

      if (response.data.success) {
        setAnnouncements((prev) =>
          prev.filter((announcement) => announcement.announcement_id !== announcementId)
        );
        alert("Announcement deleted successfully!");
      } else {
        alert("Failed to delete announcement.");
      }
    } catch (err) {
      alert("An error occurred while deleting the announcement.");
      console.error("Error deleting announcement:", err);
    }
  };

  if (error) {
    return <div className="container my-4">Error: {error}</div>;
  }

  return (
    <div className="container my-4">
      <h2 className="text-center">Club Announcements</h2>

      {/* Add Announcement */}
      <div className="mb-4">
        <div className="mb-2">
          <input
            type="text"
            value={announcementName}
            onChange={(e) => setAnnouncementName(e.target.value)}
            placeholder="Announcement Name (Required)"
            className="form-control"
          />
        </div>
        <div className="mb-2">
          <input
            type="text"
            value={eventId}
            onChange={(e) => setEventId(e.target.value)}
            placeholder="Event ID (Optional)"
            className="form-control"
          />
        </div>
        <div className="mb-2">
          <textarea
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Announcement Message (Required)"
            className="form-control"
            rows="3"
          />
        </div>
        <button className="btn btn-primary" onClick={handleAddAnnouncement}>
          Add Announcement
        </button>
      </div>

      {/* Announcements List */}
      <ul className="list-group">
        {announcements.map((announcement) => (
          announcement && (
            <li
              key={announcement.announcement_id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div>
                <h5>{announcement.announcement_name || "Unnamed Announcement"}</h5>
                <p>{announcement.message || "No message provided"}</p>
                {announcement.event_id && (
                  <p><strong>Event ID:</strong> {announcement.event_id}</p>
                )}
              </div>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => handleDeleteAnnouncement(announcement.announcement_id)}
              >
                Delete
              </button>
            </li>
          )
        ))}
      </ul>

      {/* No Announcements */}
      {announcements.length === 0 && <p className="text-center">No announcements available.</p>}
    </div>
  );
}

export default ClubAnnouncementsPage;



// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Cookies from "js-cookie";
// import { useParams } from "react-router-dom";

// function ClubAnnouncementsPage() {
//   const [announcements, setAnnouncements] = useState([]);
//   const [newAnnouncement, setNewAnnouncement] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const { club_id } = useParams();

//   useEffect(() => {
//     const fetchAnnouncements = async () => {
//       const jwt_token = Cookies.get("jwt_token");
//       if (!jwt_token) {
//         setError("You need to log in to view this page.");
//         setLoading(false);
//         return;
//       }

//       try {
//         const response = await APIClient.get(`announcements/get/${club_id}`, {
//           headers: {
//             Authorization: `Bearer ${jwt_token}`,
//           },
//         });

//         console.log("API Response:", response.data);

//         if (response.data.success) {
//           setAnnouncements(Array.isArray(response.data.data) ? response.data.data : []);
//         } else {
//           setError(response.data.message || "Failed to fetch announcements.");
//         }
//       } catch (err) {
//         console.error("Error fetching announcements:", err);
//         setError(err.message || "An error occurred while fetching announcements.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAnnouncements();
//   }, [club_id]);

//   const handleAddAnnouncement = async () => {
//     try {
//       const jwt_token = Cookies.get("jwt_token");

//       if (!jwt_token) {
//         alert("You must be logged in to add an announcement.");
//         return;
//       }

//       const response = await APIClient.post(
//         "announcements/add",
//         {
//           club_id,
//           message: newAnnouncement,
//         },
//         {
//           headers: { Authorization: `Bearer ${jwt_token}` },
//         }
//       );

//       if (response.data.success) {
//         setAnnouncements((prev) => [...prev, response.data.data]);
//         setNewAnnouncement("");
//         alert("Announcement added successfully!");
//       } else {
//         alert("Failed to add announcement.");
//       }
//     } catch (err) {
//       console.error("Error adding announcement:", err);
//       alert("An error occurred while adding the announcement.");
//     }
//   };

//   const handleDeleteAnnouncement = async (announcementId) => {
//     const jwt_token = Cookies.get("jwt_token");
//     if (!jwt_token) {
//       alert("You need to log in to delete an announcement.");
//       return;
//     }

//     try {
//       const response = await APIClient.delete(
//         `announcements/delete/${announcementId}`,
//         {
//           headers: {
//             Authorization: `Bearer ${jwt_token}`,
//           },
//         }
//       );

//       if (response.data.success) {
//         setAnnouncements((prev) =>
//           prev.filter((announcement) => announcement.announcement_id !== announcementId)
//         );
//       } else {
//         alert("Failed to delete announcement.");
//       }
//     } catch (err) {
//       console.error("Error deleting announcement:", err);
//       alert("An error occurred while deleting the announcement.");
//     }
//   };

//   if (loading) return <div>Loading announcements...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div className="container my-4">
//       <h2 className="text-center">Club Announcements</h2>
//       <div className="mb-4">
//         <input
//           type="text"
//           value={newAnnouncement}
//           onChange={(e) => setNewAnnouncement(e.target.value)}
//           placeholder="Write a new announcement"
//           className="form-control mb-2"
//         />
//         <button className="btn btn-primary" onClick={handleAddAnnouncement}>
//           Add Announcement
//         </button>
//       </div>
//       <ul>
//         {announcements.map((announcement) => (
//           <li key={announcement.announcement_id}>
//             <p>{announcement.message || "No message available"}</p>
//             <button
//               className="btn btn-danger btn-sm"
//               onClick={() => handleDeleteAnnouncement(announcement.announcement_id)}
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ClubAnnouncementsPage;
