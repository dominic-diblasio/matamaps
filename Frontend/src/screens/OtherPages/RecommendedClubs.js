import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import APIClient from "./APIClient";

function RecommendedClubs() {
  const [clubs, setClubs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecommendedClubs = async () => {
      const jwt_token = Cookies.get("jwt_token");
      try {
        if (!jwt_token) {
          setError("No token provided. Please login.");
          navigate("/login");
          return;
        }

        // Call the recommendations endpoint
        const response = await APIClient.get("recommendations", {
          headers: { Authorization: `Bearer ${jwt_token}` },
          withCredentials: true,
        });

        if (response.data.success) {
          setClubs(response.data.clubs);
        } else {
          setError(response.data.message || "Failed to fetch recommended clubs");
        }
      } catch (err) {
        console.error("Error fetching recommended clubs:", err);
        setError("Error fetching recommended clubs");
        Cookies.remove("jwt_token");
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendedClubs();
  }, [navigate]);

  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
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
      <h1 className="text-center">Recommended Clubs</h1>
      <p className="text-center">
        Based on your interests and major, here are some clubs you might enjoy:
      </p>
      <div className="row">
        {clubs.length > 0 ? (
          clubs.map((club) => (
            <div key={club.club_id} className="col-md-4 mb-4">
              <div className="card">
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
                  <p className="card-text">
                    <small className="text-muted">Score: {club.score}</small>
                  </p>
                  <Link
                    to={`/clubs/details/${club.club_id}?club_name=${encodeURIComponent(
                      club.club_name
                    )}`}
                    className="btn btn-primary"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No recommended clubs found. Please update your interests.</p>
        )}
      </div>
    </div>
  );
}

export default RecommendedClubs;
