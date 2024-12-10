import React, { useEffect, useState } from "react";
import axios from "axios";
import { Toast } from "react-bootstrap";
import Cookies from "js-cookie";
import { useParams } from "react-router-dom";
import Avatar from "../../assets/images/matamaps-images/profile_av.jpg";
import APIClient from "./APIClient";

function ClubAnnouncements() {
  const [announcements, setAnnouncements] = useState([]);
  const [newAnnouncement, setNewAnnouncement] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { club_id } = useParams();

  // Fetch announcements
  useEffect(() => {
    const fetchAnnouncements = async () => {
      const jwt_token = Cookies.get("jwt_token");

      try {
        const response = await APIClient.get(
          `announcements/get/${club_id}`,
          {
            headers: {
              Authorization: `Bearer ${jwt_token}`,
            },
          }
        );

        if (response.data.success) {
          setAnnouncements(response.data.data);
        } else {
          setError(response.data.message || "Failed to fetch announcements");
        }
      } catch (err) {
        console.error("Error fetching announcements:", err);
        setError("An error occurred while fetching announcements.");
      } finally {
        setLoading(false);
      }
    };

    fetchAnnouncements();
  }, [club_id]);

  const handleAddAnnouncement = async () => {
    const jwt_token = Cookies.get("jwt_token");

    try {
      const response = await APIClient.post(
        `announcements/add`,
        {
          club_id,
          message: newAnnouncement,
        },
        {
          headers: {
            Authorization: `Bearer ${jwt_token}`,
          },
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

    try {
      const response = await APIClient.delete(
        `announcements/delete/${announcementId}`,
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
        alert("Announcement deleted successfully!");
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
    <div className="container">
      <h2 className="text-center my-4">Club Announcements</h2>
      <div>
        {announcements.length > 0 ? (
          announcements.map((announcement) => (
            <Toast key={announcement.announcement_id} className="mb-3">
              <Toast.Header closeButton={false}>
                <img src={Avatar} className="avatar sm rounded me-2" alt="avatar" />
                <strong className="me-auto">{`Announcement`}</strong>
                <small>{new Date(announcement.created_at).toLocaleString()}</small>
              </Toast.Header>
              <Toast.Body>
                <p>{announcement.message}</p>
                <p>
                  <strong>Created At:</strong>{" "}
                  {new Date(announcement.created_at).toLocaleString()}
                </p>
                <p>
                  <strong>Updated At:</strong>{" "}
                  {new Date(announcement.updated_at).toLocaleString()}
                </p>
              </Toast.Body>
            </Toast>
          ))
        ) : (
          <p>No announcements available for this club.</p>
        )}
      </div>
    </div>
  );
}

export default ClubAnnouncements;
