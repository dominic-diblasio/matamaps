import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import APIClient from "./APIClient";

function JoinClubPopup({ clubId, clubName, username, onClose }) {
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState(null);

  const handleJoinClub = async () => {
    if (!agree) {
      setError("You must agree to the rules to join the club.");
      return;
    }

    const jwt_token = Cookies.get("jwt_token"); // Get token from cookies

    try {
      const response = await APIClient.post(
        "club/join",
        {
          club_id: clubId,
          club_name: clubName,
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
        alert("Successfully joined the club!");
        onClose(); // Close the popup after successful join
      } else {
        setError(response.data.message || "Failed to join the club.");
      }
    } catch (err) {
      console.error("Error joining club:", err);
      setError("An error occurred while joining the club.");
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup">
        <h3>Join {clubName}</h3>
        <p>
          Username: <strong>{username}</strong>
        </p>
        <div className="rules">
          <p>Please confirm that you agree to all the club rules</p>
        </div>
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
            />{" "}
            I agree to all the rules.
          </label>
        </div>
        {error && <p className="error">{error}</p>}
        <div className="buttons">
          <button className="btn btn-success" onClick={handleJoinClub}>
            Yes, Join the Club
          </button>
          <button className="btn btn-secondary" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default JoinClubPopup;