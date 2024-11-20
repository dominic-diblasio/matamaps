import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useParams } from "react-router-dom";


function ClubAnnouncementsPage() {
  const [announcements, setAnnouncements] = useState([]);
  const [newAnnouncement, setNewAnnouncement] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { club_id } = useParams();


  useEffect(() => {
    const fetchAnnouncements = async () => {
      const jwt_token = Cookies.get("jwt_token");
      if (!jwt_token) {
        setError("You need to log in to view this page.");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(`http://0.0.0.0:3500/announcements/get/${club_id}`, {
          headers: {
            Authorization: `Bearer ${jwt_token}`,
          },
        });

        if (response.data.success) {
          setAnnouncements(response.data.data);
        } else {
          setError(response.data.message || "Failed to fetch announcements.");
        }
      } catch (err) {
        console.error("Error fetching announcements:", err);
        setError(err.message || "An error occurred while fetching announcements.");
      } finally {
        setLoading(false);
      }
    };

    fetchAnnouncements();
  }, [club_id]);

  const handleAddAnnouncement = async () => {
    try {
      const jwt_token = Cookies.get("jwt_token");
      console.log("JWT Token:", jwt_token); // Debugging
  
      if (!jwt_token) {
        alert("You must be logged in to add an announcement.");
        return;
      }
  
      const response = await axios.post(
        "http://0.0.0.0:3500/announcements/add",
        {
          club_id,
          message: newAnnouncement,
        },
        {
          headers: { Authorization: `Bearer ${jwt_token}` },
        }
      );
  
      if (response.data.success) {
        setAnnouncements((prev) => [...prev, response.data.data]);
        setNewAnnouncement("");
        alert("Announcement added successfully!");
      } else {
        alert("Failed to add announcement.");
      }
    } catch (err) {
      console.error("Error adding announcement:", err);
      alert("An error occurred while adding the announcement.");
    }
  };
  


  const handleDeleteAnnouncement = async (announcementId) => {
    const jwt_token = Cookies.get("jwt_token");
    if (!jwt_token) {
      alert("You need to log in to delete an announcement.");
      return;
    }

    try {
      const response = await axios.delete(
        `http://0.0.0.0:3500/announcements/delete/${announcementId}`,
        {
          headers: {
            Authorization: `Bearer ${jwt_token}`,
          },
        }
      );

      if (response.data.success) {
        setAnnouncements((prev) =>
          prev.filter((announcement) => announcement.announcement_id !== announcementId)
        );
      } else {
        alert("Failed to delete announcement.");
      }
    } catch (err) {
      console.error("Error deleting announcement:", err);
      alert("An error occurred while deleting the announcement.");
    }
  };

  if (loading) return <div>Loading announcements...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container my-4">
      <h2 className="text-center">Club Announcements</h2>
      <div className="mb-4">
        <input
          type="text"
          value={newAnnouncement}
          onChange={(e) => setNewAnnouncement(e.target.value)}
          placeholder="Write a new announcement"
          className="form-control mb-2"
        />
        <button className="btn btn-primary" onClick={handleAddAnnouncement}>
          Add Announcement
        </button>
      </div>
      <ul>
        {announcements.map((announcement) => (
          <li key={announcement.announcement_id}>
            <p>{announcement.message}</p>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => handleDeleteAnnouncement(announcement.announcement_id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClubAnnouncementsPage;
