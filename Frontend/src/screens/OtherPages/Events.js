import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import APIClient from "./APIClient";

function Events() {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [username, setUsername] = useState(null);
  const [rsvpDetails, setRSVPDetails] = useState({});
  const [statusFilter, setStatusFilter] = useState("all"); // Default filter
  const [expandedEventId, setExpandedEventId] = useState(null); // Track expanded event

  const EVENT_DESCRIPTION_LENGTH = 170;
  const truncateText = (text, maxLength) => {
    if (!text) return;
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  useEffect(() => {
    const fetchEventsAndRSVPs = async () => {
      try {
        const jwt_token = Cookies.get("jwt_token");
        let fetchedEvents = [];

        // Fetch events
        const eventResponse = await APIClient.get("events");
        if (eventResponse.data.success) {
          fetchedEvents = eventResponse.data.data;
          setEvents(fetchedEvents);
          setFilteredEvents(fetchedEvents); // Set initial filtered events
        } else {
          setError(eventResponse.data.message || "Failed to fetch events");
          setLoading(false);
          return;
        }

        // Fetch user details and RSVP details if logged in
        if (jwt_token) {
          try {
            const userResponse = await APIClient.get("users/account/details", {
              headers: { Authorization: `Bearer ${jwt_token}` },
              withCredentials: true,
            });

            if (userResponse.data.success) {
              setUsername(userResponse.data.data.username);

              // Fetch RSVP details
              const rsvpResponse = await APIClient.get("users/rsvp/display", {
                headers: { Authorization: `Bearer ${jwt_token}` },
                withCredentials: true,
              });

              if (rsvpResponse.data.success) {
                // Map RSVP details with event IDs
                const rsvpMap = rsvpResponse.data.data.reduce(
                  (acc, rsvp) => ({
                    ...acc,
                    [rsvp.event_id]: {
                      rsvp_status: rsvp.status,
                      created_at: rsvp.created_at,
                      updated_at: rsvp.updated_at,
                    },
                  }),
                  {}
                );
                setRSVPDetails(rsvpMap);
              }
            }
          } catch (rsvpError) {
            console.error("No RSVPs found or error fetching RSVPs:", rsvpError);
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
  }, []);

  // Update filtered events when statusFilter changes
  useEffect(() => {
    if (statusFilter === "all") {
      setFilteredEvents(events);
    } else {
      setFilteredEvents(events.filter((event) => event.event_status === statusFilter));
    }
  }, [statusFilter, events]);

  const toggleSeeMore = (event_id) => {
    setExpandedEventId(expandedEventId === event_id ? null : event_id);
  };

  const handleRegisterClick = async (event) => {
    if (!username) {
      alert("You need to log in to register for events.");
      return;
    }
    try {
      const jwt_token = Cookies.get("jwt_token");
      // Directly call API to register the event.
      const response = await APIClient.post(
        "events/rsvp",
        { event_id: event.event_id },
        {
          headers: { Authorization: `Bearer ${jwt_token}` },
          withCredentials: true,
        }
      );
      if (response.data.success) {
        // Update RSVP details for the event. You might set status to "registered" (or whatever value your backend returns)
        setRSVPDetails((prev) => ({
          ...prev,
          [event.event_id]: {
            rsvp_status: "registered",
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          },
        }));
        alert("Registered successfully!");
      } else {
        alert("Registration failed: " + response.data.message);
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("An error occurred during registration.");
    }
  };

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
    return (
      <div className="text-center mt-5">
        <h4 className="text-danger">Error: {error}</h4>
        <button className="btn btn-primary" onClick={() => window.location.reload()}>
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="container mm-background-transparent">
      <h1 className="text-center my-4 mm-header">Upcoming Events</h1>

      {/* Filter Dropdown */}
      <div className="mb-4 text-center">
        <label htmlFor="statusFilter" className="form-label">
          Filter by Status:
        </label>
        <select
          id="statusFilter"
          className="form-select w-25 mx-auto"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </select>
      </div>

      <div className="flex flex-col justify-center items-center h-screen space-y-4">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => {
            const rsvp = rsvpDetails[event.event_id];
            const isExpanded = expandedEventId === event.event_id;
            // Only show register button if event is not completed and user hasn't registered yet.
            const showRegisterButton = event.event_status !== "completed" && !rsvp;
            return (
              <div
                key={event.event_id}
                className="col-lg-8 col-md-6 mb-4 flex items-center justify-center rounded-lg"
              >
                <div className="mm-card-container shadow-sm">
                  {event.event_image && (
                    <img
                      src={event.event_image}
                      alt={`${event.event_name} image`}
                      className="mm-card-image"
                      style={{ objectFit: "cover" }}
                    />
                  )}
                  <div className="mm-card-text-content">
                    <h3 className="card-title">
                      <strong>{event.event_name}</strong>
                    </h3>
                    <h5 className="card-text">
                      <strong>{new Date(event.event_date).toLocaleDateString()}</strong>
                    </h5>
                    <p className="card-text">
                      {isExpanded
                        ? event.event_description
                        : truncateText(event.event_description, EVENT_DESCRIPTION_LENGTH)}
                    </p>
                    {isExpanded && (
                      <>
                        <p className="card-text">
                          <strong>Location:</strong> {event.location}
                        </p>
                        <p className="card-text">
                          <strong>Status:</strong> {event.event_status || "N/A"}
                        </p>
                        {rsvp ? (
                          <>
                            <p className="card-text">
                              <strong>RSVP Status:</strong> {rsvp.rsvp_status || "N/A"}
                            </p>
                            <p className="card-text">
                              <strong>RSVP Date:</strong>{" "}
                              {new Date(rsvp.created_at).toLocaleString()}
                            </p>
                            <p className="card-text">
                              <strong>Updated Date:</strong>{" "}
                              {new Date(rsvp.updated_at).toLocaleString()}
                            </p>
                          </>
                        ) : (
                          username && <p className="card-text">You have not RSVP'd.</p>
                        )}
                      </>
                    )}
                    <div className="btn-container d-flex gap-2">
                      <button
                        className="btn btn-seemore"
                        onClick={() => toggleSeeMore(event.event_id)}
                      >
                        {isExpanded ? "See less" : "See more"}
                      </button>
                      {rsvp ? (
                        <span className="btn btn-secondary disabled">Registered</span>
                      ) : (
                        showRegisterButton && (
                          <button
                            className="btn btn-success"
                            onClick={() => handleRegisterClick(event)}
                          >
                            Add!
                          </button>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p>No events available for the selected status.</p>
        )}
      </div>
    </div>
  );
}

export default Events;
