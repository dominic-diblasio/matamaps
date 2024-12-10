import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useParams } from "react-router-dom";
import ClubAnnouncements from "./ClubAnnouncements";
import ClubEvents from "./ClubEvents";
import ClubMembers from "./ClubMembers";
import ClubRules from "./ClubRules";
import APIClient from "./APIClient";

function AdminClubDetails() {
  const { club_id } = useParams(); // Get club_id from the URL
  const [clubDetails, setClubDetails] = useState({});
  const [clubName, setClubName] = useState("");
  const [status, setStatus] = useState("");
  const [username, setUsername] = useState(null); // Null if user is not logged in
  const [isMember, setIsMember] = useState(false); // Track if the user is an accepted member
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClubDetails = async () => {
      try {
        // Fetch club name and details
        const clubResponse = await APIClient.get(`admin/clubs/status/display/${club_id}`);
        if (clubResponse.data.success) {
          setClubDetails(clubResponse.data.data.club);
          setClubName(clubResponse.data.data.club.club_name);
          setStatus(clubResponse.data.data.club.status);
        } else {
          setError("Failed to fetch club details.");
        }

        // Fetch username and membership status if logged in
        const jwt_token = Cookies.get("jwt_token");
        if (jwt_token) {
          try {
            const userResponse = await APIClient.get(
              `users/account/details`,
              {
                headers: {
                  Authorization: `Bearer ${jwt_token}`,
                },
                withCredentials: true,
              }
            );

            if (userResponse.data.success) {
              setUsername(userResponse.data.data.username);

              // Check if user is a member of the club
              const membershipResponse = await APIClient.get(
                `club/membership/status/${club_id}`,
                {
                  headers: {
                    Authorization: `Bearer ${jwt_token}`,
                  },
                  withCredentials: true,
                }
              );

              if (membershipResponse.data.success) {
                const { status } = membershipResponse.data.data;
                setIsMember(status === "active"); // Update membership flag based on "active" status
              }
            }
          } catch (userError) {
            console.error("Error fetching user details:", userError);
            // Do not block page loading if fetching user details fails
          }
        }
      } catch (err) {
        console.error("Error fetching club details:", err);
        setError("An error occurred while fetching details.");
      } finally {
        setLoading(false);
      }
    };

    fetchClubDetails();
  }, [club_id]);

  const updateClubStatus = async (newStatus) => {
    try {
      const jwt_token = Cookies.get("jwt_token");
      if (!jwt_token) {
        alert("You must be logged in to update club status.");
        return;
      }

      const response = await APIClient.put(
        `admin/clubs/status/${club_id}`,
        { status: newStatus },
        {
          headers: {
            Authorization: `Bearer ${jwt_token}`,
          },
        }
      );

      if (response.data.success) {
        setStatus(newStatus);
        alert("Club status updated successfully.");
      } else {
        alert(response.data.message || "Failed to update club status.");
      }
    } catch (err) {
      console.error("Error updating club status:", err);
      alert("An error occurred while updating club status.");
    }
  };

  if (loading) {
    return <div>Loading club details...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container">
      <h1 className="text-center my-4">{clubName} Details</h1>
      <p className="text-center">
        <strong>Status:</strong> {status.charAt(0).toUpperCase() + status.slice(1)}
      </p>
      <div className="text-center mb-4">
        <button
          className="btn btn-success me-2"
          onClick={() => updateClubStatus("active")}
          disabled={status === "active"}
        >
          Activate
        </button>
        <button
          className="btn btn-warning me-2"
          onClick={() => updateClubStatus("pending")}
          disabled={status === "pending"}
        >
          Set Pending
        </button>
        <button
          className="btn btn-danger"
          onClick={() => updateClubStatus("inactive")}
          disabled={status === "inactive"}
        >
          Deactivate
        </button>
      </div>

      {/* Club Announcements */}
      {username && isMember && (
        <div className="my-5">
          <ClubAnnouncements />
        </div>
      )}

      {/* Club Events */}
      <div className="my-5">
        <ClubEvents />
      </div>

      {/* Club Members */}
      <div className="my-5">
        <ClubMembers />
      </div>

      {/* Club Rules */}
      <div className="my-5">
        <ClubRules />
      </div>
    </div>
  );
}

export default AdminClubDetails;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import Cookies from "js-cookie";
// import ClubAnnouncements from "./ClubAnnouncements";
// import ClubEvents from "./ClubEvents";
// import ClubMembers from "./ClubMembers";
// import ClubRules from "./ClubRules";
// import JoinClubPopup from "./JoinClubPopup";

// function AdminClubDetails() {
//   const { club_id } = useParams(); // Get club_id from the URL
//   const [clubDetails, setClubDetails] = useState({});
//   const [clubName, setClubName] = useState("");
//   const [status, setStatus] = useState("");
//   const [username, setUsername] = useState(null); // Null if user is not logged in
//   const [isMember, setIsMember] = useState(false); // Track if the user is an accepted member
//   const [membershipStatus, setMembershipStatus] = useState(""); // Store exact membership status
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [showPopup, setShowPopup] = useState(false);

//   useEffect(() => {
//     const fetchClubDetails = async () => {
//       try {
//         // Fetch club name and details
//         const clubResponse = await APIClient.get(`admin/clubs/status/display/${club_id}`);
//         if (clubResponse.data.success) {
//           setClubDetails(clubResponse.data.data.club);
//           setClubName(clubResponse.data.data.club.club_name);
//           setStatus(clubResponse.data.data.club.status);
//         } else {
//           setError("Failed to fetch club details.");
//         }

//         // Fetch username and membership status if logged in
//         const jwt_token = Cookies.get("jwt_token");
//         if (jwt_token) {
//           try {
//             const userResponse = await APIClient.get(
//               `users/account/details`,
//               {
//                 headers: {
//                   Authorization: `Bearer ${jwt_token}`,
//                 },
//                 withCredentials: true,
//               }
//             );

//             if (userResponse.data.success) {
//               setUsername(userResponse.data.data.username);

//               // Check if user is a member of the club
//               const membershipResponse = await APIClient.get(
//                 `club/membership/status/${club_id}`,
//                 {
//                   headers: {
//                     Authorization: `Bearer ${jwt_token}`,
//                   },
//                   withCredentials: true,
//                 }
//               );

//               if (membershipResponse.data.success) {
//                 const { status } = membershipResponse.data.data;
//                 setMembershipStatus(status); // Store membership status
//                 setIsMember(status === "active"); // Update membership flag based on "active" status
//               }
//             }
//           } catch (userError) {
//             console.error("Error fetching user details:", userError);
//             // Do not block page loading if fetching user details fails
//           }
//         }
//       } catch (err) {
//         console.error("Error fetching club details:", err);
//         setError("An error occurred while fetching details.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchClubDetails();
//   }, [club_id]);

//   const updateClubStatus = async (newStatus) => {
//     try {
//       const jwt_token = Cookies.get("jwt_token");
//       if (!jwt_token) {
//         alert("You must be logged in to update club status.");
//         return;
//       }

//       const response = await APIClient.put(
//         `admin/clubs/status/${club_id}`,
//         { status: newStatus },
//         {
//           headers: {
//             Authorization: `Bearer ${jwt_token}`,
//           },
//         }
//       );

//       if (response.data.success) {
//         setStatus(newStatus);
//         alert("Club status updated successfully.");
//       } else {
//         alert(response.data.message || "Failed to update club status.");
//       }
//     } catch (err) {
//       console.error("Error updating club status:", err);
//       alert("An error occurred while updating club status.");
//     }
//   };

//   if (loading) {
//     return <div>Loading club details...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div className="container">
//       <h1 className="text-center my-4">{clubName} Details</h1>
//       <p className="text-center">
//         <strong>Status:</strong> {status.charAt(0).toUpperCase() + status.slice(1)}
//       </p>
//       <div className="text-center mb-4">
//         <button
//           className="btn btn-success me-2"
//           onClick={() => updateClubStatus("active")}
//           disabled={status === "active"}
//         >
//           Activate
//         </button>
//         <button
//           className="btn btn-warning me-2"
//           onClick={() => updateClubStatus("pending")}
//           disabled={status === "pending"}
//         >
//           Set Pending
//         </button>
//         <button
//           className="btn btn-danger"
//           onClick={() => updateClubStatus("inactive")}
//           disabled={status === "inactive"}
//         >
//           Deactivate
//         </button>
//       </div>

//       {/* Club Announcements */}
//       {username && isMember && (
//         <div className="my-5">
//           <ClubAnnouncements />
//         </div>
//       )}

//       {/* Club Events */}
//       <div className="my-5">
//         <ClubEvents />
//       </div>

//       {/* Club Members */}
//       <div className="my-5">
//         <ClubMembers />
//       </div>

//       {/* Club Rules */}
//       <div className="my-5">
//         <ClubRules />
//       </div>

//       {username ? (
//         <div className="my-5 text-center">
//           {membershipStatus === "pending" && (
//             <p className="text-info">Your request to join the club is pending approval.</p>
//           )}
//           {!isMember && membershipStatus !== "pending" ? (
//             <button className="btn btn-success" onClick={() => setShowPopup(true)}>
//               Join the Club!
//             </button>
//           ) : (
//             <button className="btn btn-danger">
//               Hmm...
//             </button>
//           )}
//           {showPopup && (
//             <JoinClubPopup
//               clubId={club_id}
//               clubName={clubName}
//               username={username}
//               onClose={() => setShowPopup(false)}
//             />
//           )}
//         </div>
//       ) : (
//         <p className="text-center">Log in to join or exit the club!</p>
//       )}
//     </div>
//   );
// }

// export default AdminClubDetails;