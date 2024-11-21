import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

function MyRSVPsPage() {
  const [rsvps, setRSVPs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMyRSVPs = async () => {
      const jwt_token = Cookies.get("jwt_token");

      if (!jwt_token) {
        setError("You need to log in to view your RSVPs.");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get("http://localhost:3500/events/my-rsvps", {
          headers: {
            Authorization: `Bearer ${jwt_token}`,
          },
          withCredentials: true,
        });

        if (response.data.success) {
          setRSVPs(response.data.data);
        } else {
          setError(response.data.message || "Failed to fetch your RSVPs.");
        }
      } catch (err) {
        console.error("Error fetching user RSVPs:", err);
        setError(err.response?.data?.message || "An error occurred while fetching your RSVPs.");
      } finally {
        setLoading(false);
      }
    };

    fetchMyRSVPs();
  }, []);

  if (loading) {
    return <div>Loading your RSVPs...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container my-4">
      <h2 className="text-center">My RSVPs</h2>
      <div className="row">
        {rsvps.length > 0 ? (
          rsvps.map((rsvp) => (
            <div key={rsvp.event_id} className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{rsvp.event_name}</h5>
                  <p className="card-text">
                    <strong>Date:</strong> {new Date(rsvp.event_date).toLocaleDateString()}
                  </p>
                  <p className="card-text">
                    <strong>Location:</strong> {rsvp.location}
                  </p>
                  <p className="card-text">
                    <strong>Status:</strong> {rsvp.status}
                  </p>
                  <p className="card-text">
                    <strong>Last Updated:</strong> {new Date(rsvp.updated_at).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>You have not RSVPed to any events yet.</p>
        )}
      </div>
    </div>
  );
}

export default MyRSVPsPage;