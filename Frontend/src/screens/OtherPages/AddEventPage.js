import React, { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function AddEventPage() {
  const { club_id } = useParams(); // Get club_id from the URL
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventImage, setEventImage] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleAddEvent = async (e) => {
    e.preventDefault();
    const jwt_token = Cookies.get("jwt_token");
  
    if (!jwt_token) {
      setError("You need to log in to add an event.");
      console.error("JWT token missing");
      return;
    }
  
    try {
      console.log("Sending event data:", {
        club_id,
        event_name: eventName,
        event_description: eventDescription,
        event_date: eventDate,
        location: eventLocation,
        event_image: eventImage,
      });
  
      const response = await axios.post(
        `http://localhost:3500/club-leader/events/add`,
        {
          club_id,
          event_name: eventName,
          event_description: eventDescription,
          event_date: eventDate,
          location: eventLocation,
          event_image: eventImage,
          status: "pending", // Default status
        },
        {
          headers: {
            Authorization: `Bearer ${jwt_token}`,
          },
          withCredentials: true,
        }
      );
  
      console.log("API response after adding event:", response.data);
  
      if (response.data.success) {
        alert("Event added successfully!");
        navigate(`/club-leader/events/${club_id}`); // Ensure club_id is passed
      } else {
        console.error("API error:", response.data.message);
        setError(response.data.message || "Failed to add event.");
      }
    } catch (err) {
      console.error("Error adding event:", err.response?.data || err);
      setError(err.response?.data?.message || "An error occurred while adding the event.");
    }
  };
  

  return (
    <div className="container my-4">
      <h2 className="text-center">Add Event</h2>
      <form onSubmit={handleAddEvent}>
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
        <button type="submit" className="btn btn-success">Add Event</button>
      </form>
    </div>
  );
}

export default AddEventPage;
