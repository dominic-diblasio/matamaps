// Integration has been moved to MMFeedGenerator.js - this exists as a temporary file

import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import APIClient from "./APIClient";

function Interests() {
  const [clubs, setClubs] = useState([]);
  const [events, setEvents] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecommendations = async () => {
      const jwt_token = Cookies.get("jwt_token");

      if (!jwt_token) {
        setError("No token provided. Please login.");
        navigate("/login");
        return;
      }

      try {
        const [clubRes, eventRes, announcementRes] = await Promise.all([
          APIClient.get("recommendations", {
            headers: { Authorization: `Bearer ${jwt_token}` },
            withCredentials: true,
          }),
          APIClient.get("recommendations/events", {
            headers: { Authorization: `Bearer ${jwt_token}` },
            withCredentials: true,
          }),
          APIClient.get("recommendations/announcements", {
            headers: { Authorization: `Bearer ${jwt_token}` },
            withCredentials: true,
          }),
        ]);

        if (clubRes.data.success) setClubs(clubRes.data.clubs);
        if (eventRes.data.success) setEvents(eventRes.data.events);
        if (announcementRes.data.success) setAnnouncements(announcementRes.data.announcements);

      } catch (err) {
        console.error("Error fetching recommendations:", err);
        setError("Error fetching recommendations");
        Cookies.remove("jwt_token");
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendations();
  }, [navigate]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="text-center mt-4">{error}</div>;
  }

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Recommended for You</h1>

      {/* Clubs */}
      <section className="mb-5">
        <h2>Clubs Based on Your Interests</h2>
        <div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
          {clubs.length > 0 ? (
            clubs.map((club) => (
              <div
                key={club.club_id}
                className="card d-inline-block m-2"
                style={{ width: "18rem", verticalAlign: "top" }}
              >
                {club.logo && (
                  <img
                    src={club.logo}
                    alt={`${club.club_name} logo`}
                    className="card-img-top"
                    style={{ height: "150px", objectFit: "cover" }}
                  />
                )}
                <div className="card-body">
                  <h5 className="card-title">{club.club_name}</h5>
                  <p className="card-text">{club.description}</p>
                  <Link
                    to={`/clubs/details/${club.club_id}?club_name=${encodeURIComponent(club.club_name)}`}
                    className="btn btn-primary"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p>No club recommendations found.</p>
          )}
        </div>
      </section>

      {/* Events */}
      <section className="mb-5">
        <h2>Events You May Like</h2>
        <div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
          {events.length > 0 ? (
            events.map((event) => (
              <div
                key={event.event_id}
                className="card d-inline-block m-2"
                style={{ width: "18rem", verticalAlign: "top" }}
              >
                {event.event_image && (
                  <img
                    src={event.event_image}
                    alt={`${event.event_name} image`}
                    className="card-img-top"
                    style={{ height: "150px", objectFit: "cover" }}
                  />
                )}
                <div className="card-body">
                  <h5 className="card-title">{event.event_name}</h5>
                  <p className="card-text">{event.event_description}</p>
                  <p className="card-text">
                    <small className="text-muted">📍 {event.location}</small>
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p>No recommended events found.</p>
          )}
        </div>
      </section>

      {/* Announcements */}
      <section>
        <h2>Announcements That Matter to You</h2>
        <div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
          {announcements.length > 0 ? (
            announcements.map((announcement) => (
              <div
                key={announcement.announcement_id}
                className="card d-inline-block m-2"
                style={{ width: "18rem", verticalAlign: "top" }}
              >
                {announcement.logo && (
                  <img
                    src={announcement.logo}
                    alt={`${announcement.club_name} logo`}
                    className="card-img-top"
                    style={{ height: "150px", objectFit: "cover" }}
                  />
                )}
                <div className="card-body">
                  <h5 className="card-title">{announcement.announcement_name}</h5>
                  <p className="card-text">{announcement.message}</p>
                  <p className="card-text">
                    <small className="text-muted">📢 {announcement.club_name}</small>
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p>No announcements found for your interests.</p>
          )}
        </div>
      </section>
    </div>
  );
}

export default Interests;