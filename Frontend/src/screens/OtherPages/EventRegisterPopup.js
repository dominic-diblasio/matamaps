import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

function EventRegisterPopup({ event, username, onClose }) {
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState(null);

  const handleRegister = async () => {
    if (!agree) {
      setError("You must agree to the terms to register for the event.");
      return;
    }

    const jwt_token = Cookies.get("jwt_token"); // Get token from cookies

    try {
      const response = await axios.post(
        "http://localhost:3500/events/rsvp",
        {
          event_id: event.event_id,
          username,
        },
        {
          headers: {
            Authorization: `Bearer ${jwt_token}`,
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (response.data.success) {
        alert("Successfully registered for the event!");
        onClose(); // Close the popup after successful registration
      } else {
        setError(response.data.message || "Failed to register for the event.");
      }
    } catch (err) {
      console.error("Error registering for the event:", err);
      setError("An error occurred while registering for the event.");
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup">
        <h3>Register for {event.event_name}</h3>
        <p>
          Username: <strong>{username}</strong>
        </p>
        <div className="rules">
          <p>Please confirm that you agree to all the event terms.</p>
        </div>
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
            />{" "}
            I agree to the terms.
          </label>
        </div>
        {error && <p className="error">{error}</p>}
        <div className="buttons">
          <button className="btn btn-success" onClick={handleRegister}>
            Yes, Register
          </button>
          <button className="btn btn-secondary" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default EventRegisterPopup;
