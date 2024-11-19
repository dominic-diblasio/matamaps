import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Cookies from 'js-cookie';

function ClubRules() {
  const { club_id } = useParams(); // Get club_id from the URL
  const [clubName, setClubName] = useState("");
  const [clubRules, setClubRules] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClubDetails = async () => {
      const jwt_token = Cookies.get("jwt_token"); // Retrieve token from cookies
      try {
        const response = await axios.get(`http://0.0.0.0:3500/club/rules/${club_id}`, {
          headers: {
            Authorization: `Bearer ${jwt_token}`, // Add token in Authorization header
          },
          withCredentials: true, // Ensure cookies are included in the request
        });

        if (response.data.success) {
          const { club_name, club_rules } = response.data.data;
          setClubName(club_name); // Set the club name from the response
          setClubRules(club_rules); // Set the club rules from the response
        } else {
          setError("Failed to fetch club details.");
        }
      } catch (err) {
        console.error("Error fetching club details:", err);
        setError("An error occurred while fetching club details.");
      } finally {
        setLoading(false);
      }
    };

    fetchClubDetails();
  }, [club_id]);

  if (loading) {
    return <div>Loading club rules...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container">
      <h1 className="text-center my-4">{clubName} Rules</h1>
      <div className="my-5">
        <h2>Club Rules</h2>
        {clubRules ? (
          <ul>
            {clubRules.split('\n').map((rule, index) => (
              <li key={index}>{rule}</li>
            ))}
          </ul>
        ) : (
          <p>No rules available for this club.</p>
        )}
      </div>
    </div>
  );
}

export default ClubRules;
