import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useParams } from "react-router-dom";
import APIClient from "./APIClient";

function ManageRSVPsPage() {
  const { event_id } = useParams();
  const [rsvps, setRSVPs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [statusFilter, setStatusFilter] = useState("all"); // Status filter

  useEffect(() => {
    const fetchRSVPs = async () => {
      const jwt_token = Cookies.get("jwt_token");

      if (!jwt_token) {
        setError("You need to log in to view RSVPs.");
        setLoading(false);
        return;
      }

      try {
        const response = await APIClient.get(
          `events/rsvps/${event_id}`,
          {
            headers: {
              Authorization: `Bearer ${jwt_token}`,
            },
            withCredentials: true,
          }
        );

        if (response.data.success) {
          setRSVPs(response.data.data);
        } else {
          setError(response.data.message || "Failed to fetch RSVPs.");
        }
      } catch (err) {
        console.error("Error fetching RSVPs:", err);
        setError(err.response?.data?.message || "An error occurred while fetching RSVPs.");
      } finally {
        setLoading(false);
      }
    };

    fetchRSVPs();
  }, [event_id]);

  const handleRSVPStatusChange = async (rsvp_id, newStatus) => {
    const jwt_token = Cookies.get("jwt_token");

    try {
      const response = await APIClient.put(
        `events/rsvps/update/${rsvp_id}`,
        { status: newStatus },
        {
          headers: {
            Authorization: `Bearer ${jwt_token}`,
          },
          withCredentials: true,
        }
      );

      if (response.data.success) {
        // Update RSVP status in the state
        setRSVPs((prevRSVPs) =>
          prevRSVPs.map((rsvp) =>
            rsvp.rsvp_id === rsvp_id ? { ...rsvp, status: newStatus, updated_at: new Date().toISOString() } : rsvp
          )
        );
      } else {
        alert(response.data.message || "Failed to update RSVP status.");
      }
    } catch (err) {
      console.error("Error updating RSVP status:", err);
      alert("An error occurred while updating RSVP status.");
    }
  };

  // Filter RSVPs based on status
  const filteredRSVPs =
    statusFilter === "all"
      ? rsvps
      : rsvps.filter((rsvp) => rsvp.status === statusFilter);

  if (loading) {
    return <div>Loading RSVPs...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container my-4">
      <h2 className="text-center">Event RSVPs</h2>
      <div className="mb-4">
        <label htmlFor="statusFilter" className="form-label">
          Filter by Status:
        </label>
        <select
          id="statusFilter"
          className="form-select"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="accepted">Accepted</option>
          <option value="declined">Declined</option>
          <option value="tentative">Tentative</option>
          <option value="pending">Pending</option>
        </select>
      </div>
      <div className="row">
        {filteredRSVPs.length > 0 ? (
          filteredRSVPs.map((rsvp) => (
            <div key={rsvp.rsvp_id} className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{rsvp.username}</h5>
                  <p className="card-text">
                    <strong>Full Name:</strong> {rsvp.first_name} {rsvp.last_name}
                  </p>
                  <p className="card-text">
                    <strong>Status:</strong> {rsvp.status}
                  </p>
                  <p className="card-text">
                    <strong>Last Updated:</strong>{" "}
                    {new Date(rsvp.updated_at).toLocaleString()}
                  </p>
                  <p className="card-text">
                    <strong>Member of Club:</strong> {rsvp.is_member}
                  </p>
                  <div className="d-flex flex-wrap">
                    <button
                      className="btn btn-success me-2 mb-2"
                      onClick={() => handleRSVPStatusChange(rsvp.rsvp_id, "accepted")}
                    >
                      Accept
                    </button>
                    <button
                      className="btn btn-danger me-2 mb-2"
                      onClick={() => handleRSVPStatusChange(rsvp.rsvp_id, "declined")}
                    >
                      Decline
                    </button>
                    <button
                      className="btn btn-warning me-2 mb-2"
                      onClick={() => handleRSVPStatusChange(rsvp.rsvp_id, "tentative")}
                    >
                      Tentative
                    </button>
                    <button
                      className="btn btn-secondary mb-2"
                      onClick={() => handleRSVPStatusChange(rsvp.rsvp_id, "pending")}
                    >
                      Pending
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No RSVPs found for this event.</p>
        )}
      </div>
    </div>
  );
}

export default ManageRSVPsPage;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Cookies from "js-cookie";
// import { useParams } from "react-router-dom";

// function ManageRSVPsPage() {
//   const { event_id } = useParams();
//   const [rsvps, setRSVPs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchRSVPs = async () => {
//       const jwt_token = Cookies.get("jwt_token");

//       if (!jwt_token) {
//         setError("You need to log in to view RSVPs.");
//         setLoading(false);
//         return;
//       }

//       try {
//         const response = await APIClient.get(
//           `events/rsvps/${event_id}`,
//           {
//             headers: {
//               Authorization: `Bearer ${jwt_token}`,
//             },
//             withCredentials: true,
//           }
//         );

//         if (response.data.success) {
//           setRSVPs(response.data.data);
//         } else {
//           setError(response.data.message || "Failed to fetch RSVPs.");
//         }
//       } catch (err) {
//         console.error("Error fetching RSVPs:", err);
//         setError(err.response?.data?.message || "An error occurred while fetching RSVPs.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchRSVPs();
//   }, [event_id]);

//   const handleRSVPStatusChange = async (rsvp_id, newStatus) => {
//     const jwt_token = Cookies.get("jwt_token");

//     try {
//       const response = await APIClient.put(
//         `events/rsvps/update/${rsvp_id}`,
//         { status: newStatus },
//         {
//           headers: {
//             Authorization: `Bearer ${jwt_token}`,
//           },
//           withCredentials: true,
//         }
//       );

//       if (response.data.success) {
//         // Update RSVP status in the state
//         setRSVPs((prevRSVPs) =>
//           prevRSVPs.map((rsvp) =>
//             rsvp.rsvp_id === rsvp_id ? { ...rsvp, status: newStatus, updated_at: new Date().toISOString() } : rsvp
//           )
//         );
//       } else {
//         alert(response.data.message || "Failed to update RSVP status.");
//       }
//     } catch (err) {
//       console.error("Error updating RSVP status:", err);
//       alert("An error occurred while updating RSVP status.");
//     }
//   };

//   if (loading) {
//     return <div>Loading RSVPs...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div className="container my-4">
//       <h2 className="text-center">Event RSVPs</h2>
//       <div className="row">
//         {rsvps.length > 0 ? (
//           rsvps.map((rsvp) => (
//             <div key={rsvp.rsvp_id} className="col-md-4 mb-4">
//               <div className="card">
//                 <div className="card-body">
//                   <h5 className="card-title">{rsvp.username}</h5>
//                   <p className="card-text">
//                     <strong>Full Name:</strong> {rsvp.first_name} {rsvp.last_name}
//                   </p>
//                   <p className="card-text">
//                     <strong>Status:</strong> {rsvp.status}
//                   </p>
//                   <p className="card-text">
//                     <strong>Last Updated:</strong>{" "}
//                     {new Date(rsvp.updated_at).toLocaleString()}
//                   </p>
//                   <p className="card-text">
//                     <strong>Member of Club:</strong> {rsvp.is_member}
//                   </p>
//                   <div className="d-flex flex-wrap">
//                     <button
//                       className="btn btn-success me-2 mb-2"
//                       onClick={() => handleRSVPStatusChange(rsvp.rsvp_id, "accepted")}
//                     >
//                       Accept
//                     </button>
//                     <button
//                       className="btn btn-danger me-2 mb-2"
//                       onClick={() => handleRSVPStatusChange(rsvp.rsvp_id, "declined")}
//                     >
//                       Decline
//                     </button>
//                     <button
//                       className="btn btn-warning me-2 mb-2"
//                       onClick={() => handleRSVPStatusChange(rsvp.rsvp_id, "tentative")}
//                     >
//                       Tentative
//                     </button>
//                     <button
//                       className="btn btn-secondary mb-2"
//                       onClick={() => handleRSVPStatusChange(rsvp.rsvp_id, "pending")}
//                     >
//                       Pending
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>No RSVPs found for this event.</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default ManageRSVPsPage;