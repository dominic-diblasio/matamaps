import React, { useEffect, useState } from "react";
import axios from "axios";
import { Toast } from "react-bootstrap";
import Cookies from "js-cookie";
import Avatar from "../../assets/images/matamaps-images/profile_av.jpg";
import APIClient from "./APIClient";

function Announcements() {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Fetch announcements from the backend
  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        // Get JWT token from cookies
        const jwt_token = Cookies.get("jwt_token");

        const response = await APIClient.get("announcements", {
          headers: jwt_token ? { Authorization: `Bearer ${jwt_token}` } : {},
          withCredentials: true,
        });

        if (response.data.success) {
          setAnnouncements(response.data.data);
        } else {
          setError("Failed to fetch announcements.");
        }
      } catch (err) {
        console.error("Error fetching announcements:", err);
        setError("An error occurred while fetching announcements.");
      } finally {
        setLoading(false);
      }
    };

    fetchAnnouncements();
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mm-background-transparent">
      <h1 className="text-center my-4 mm-header">Announcements</h1>
      <div>
        {announcements.map((announcement) => (
          <Toast key={announcement.announcement_id} className="mb-3">
            <Toast.Header closeButton={false}>
              <img src={Avatar} className="avatar md rounded me-2" alt="avatar" />
              <strong className="me-auto">
                Announcement: {announcement.announcement_name || "No Name"}
              </strong>
              <small className="text-muted">
                {new Date(announcement.created_at).toLocaleString()}
              </small>
              <button type="button" className="btn-close" aria-label="Close"></button>
            </Toast.Header>
            <Toast.Body>
              <p>
                <strong>Club:</strong> {announcement.club_name || "Unknown"}
              </p>
              <p>{announcement.message}</p>
              <p>
                <strong>Sender:</strong> {announcement.creator_first_name || "Unknown"} (
                {announcement.creator_email || "Unknown"})
              </p>
              <small className="text-muted">
                Updated: {new Date(announcement.updated_at).toLocaleString()}
              </small>
            </Toast.Body>
          </Toast>
        ))}
      </div>
    </div>
  );
}

export default Announcements;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Toast } from "react-bootstrap";
// import Cookies from "js-cookie";
// import Avatar3 from "../../assets/images/xs/avatar3.jpg";

// function Announcements() {
//   const [announcements, setAnnouncements] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch announcements from the backend
//   useEffect(() => {
//     const fetchAnnouncements = async () => {
//       try {
//         // Get JWT token from cookies
//         const jwt_token = Cookies.get("jwt_token");

//         const response = await APIClient.get("announcements", {
//           headers: jwt_token ? { Authorization: `Bearer ${jwt_token}` } : {},
//           withCredentials: true,
//         });

//         if (response.data.success) {
//           setAnnouncements(response.data.data);
//         } else {
//           setError("Failed to fetch announcements.");
//         }
//       } catch (err) {
//         console.error("Error fetching announcements:", err);
//         setError("An error occurred while fetching announcements.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAnnouncements();
//   }, []);

//   if (loading) return <div>Loading announcements...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div className="container">
//       <h2 className="text-center my-4">Announcements</h2>
//       <div>
//         {announcements.map((announcement) => (
//           <Toast key={announcement.announcement_id} className="mb-3">
//             <Toast.Header closeButton={false}>
//               <img src={Avatar3} className="avatar sm rounded me-2" alt="avatar" />
//               <strong className="me-auto">Club ID: {announcement.club_id}</strong>
//               <small className="text-muted">
//                 {new Date(announcement.created_at).toLocaleString()}
//               </small>
//               <button type="button" className="btn-close" aria-label="Close"></button>
//             </Toast.Header>
//             <Toast.Body>
//               {announcement.message}
//               <br />
//               <small className="text-muted">
//                 Updated: {new Date(announcement.updated_at).toLocaleString()}
//               </small>
//             </Toast.Body>
//           </Toast>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Announcements;
