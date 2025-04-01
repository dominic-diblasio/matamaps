import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ClubEvents from "./ClubEvents";
import ClubMembers from "./ClubMembers";
import Cookies from "js-cookie";
import ClubRules from "./ClubRules";
import JoinClubPopup from "./JoinClubPopup";
import ClubAnnouncements from "./ClubAnnouncements";
import APIClient from "./APIClient";

function ClubDetails() {
  const { club_id } = useParams(); // Get club_id from the URL
  const [clubName, setClubName] = useState("");
  const [username, setUsername] = useState(null); // Null if user is not logged in
  const [isMember, setIsMember] = useState(false); // Track if the user is an accepted member
  const [membershipStatus, setMembershipStatus] = useState(""); // Store exact membership status
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const fetchClubDetails = async () => {
      try {
        // Fetch club name (public data)
        const clubResponse = await APIClient.get(`club/name/${club_id}`);
        if (clubResponse.data.success) {
          setClubName(clubResponse.data.data.club_name);
        } else {
          setError("Failed to fetch club name.");
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
                setMembershipStatus(status); // Store membership status
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

  const handleExitClub = async () => {
    const jwt_token = Cookies.get("jwt_token");
    if (!jwt_token) return;

    try {
      const response = await APIClient.post(
        `club/exit/${club_id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${jwt_token}`,
          },
          withCredentials: true,
        }
      );

      if (response.data.success) {
        alert("You have exited the club.");
        setMembershipStatus("inactive"); // Update membership status
        setIsMember(false); // Update membership flag
      } else {
        alert("Failed to exit the club: " + response.data.message);
      }
    } catch (err) {
      console.error("Error exiting the club:", err);
      alert("An error occurred while exiting the club.");
    }
  };

  if (loading) {
    return <div>Loading club details...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container my-4 mm-background-transparent">
      <h1 className="text-center my-4">{clubName} Details</h1>

      {username && isMember && (
        <div className="my-5">
          <ClubAnnouncements />
        </div>
      )}

      <div className="my-5">
        <ClubEvents />
      </div>
      <div className="my-5">
        <ClubMembers />
      </div>
      <div className="my-5">
        <ClubRules />
      </div>

      {username ? (
        <div className="my-5 text-center">
          {membershipStatus === "pending" && (
            <p className="text-info">Your request to join the club is pending approval.</p>
          )}
          {!isMember && membershipStatus !== "pending" ? (
            <button className="btn btn-success" onClick={() => setShowPopup(true)}>
              Join the Club!
            </button>
          ) : (
            <button className="btn btn-danger" onClick={handleExitClub}>
              Exit the Club
            </button>
          )}
          {showPopup && (
            <JoinClubPopup
              clubId={club_id}
              clubName={clubName}
              username={username}
              onClose={() => setShowPopup(false)}
            />
          )}
        </div>
      ) : (
        <p className="text-center">Log in to join or exit the club!</p>
      )}
    </div>
  );
}

export default ClubDetails;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import ClubEvents from "./ClubEvents";
// import ClubMembers from "./ClubMembers";
// import Cookies from "js-cookie";
// import ClubRules from "./ClubRules";
// import JoinClubPopup from "./JoinClubPopup";
// import ClubAnnouncements from "./ClubAnnouncements";

// function ClubDetails() {
//   const { club_id } = useParams(); // Get club_id from the URL
//   const [clubName, setClubName] = useState("");
//   const [username, setUsername] = useState(null); // Null if user is not logged in
//   const [isMember, setIsMember] = useState(false); // Track if the user is an accepted member
//   const [membershipStatus, setMembershipStatus] = useState(""); // Store exact membership status
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [showPopup, setShowPopup] = useState(false);

//   useEffect(() => {
//     const fetchClubDetails = async () => {
//       try {
//         // Fetch club name (public data)
//         const clubResponse = await APIClient.get(`club/name/${club_id}`);
//         if (clubResponse.data.success) {
//           setClubName(clubResponse.data.data.club_name);
//         } else {
//           setError("Failed to fetch club name.");
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

//   const handleExitClub = async () => {
//     const jwt_token = Cookies.get("jwt_token");
//     if (!jwt_token) return;

//     try {
//       const response = await APIClient.post(
//         `club/exit/${club_id}`,
//         {},
//         {
//           headers: {
//             Authorization: `Bearer ${jwt_token}`,
//           },
//           withCredentials: true,
//         }
//       );

//       if (response.data.success) {
//         alert("You have exited the club.");
//         setMembershipStatus("inactive"); // Update membership status
//         setIsMember(false); // Update membership flag
//       } else {
//         alert("Failed to exit the club: " + response.data.message);
//       }
//     } catch (err) {
//       console.error("Error exiting the club:", err);
//       alert("An error occurred while exiting the club.");
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
//       <div className="my-5">
//         <ClubAnnouncements />
//       </div>
//       <div className="my-5">
//         <ClubEvents />
//       </div>
//       <div className="my-5">
//         <ClubMembers />
//       </div>
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
//             <button className="btn btn-danger" onClick={handleExitClub}>
//               Exit the Club
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

// export default ClubDetails;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import ClubEvents from "./ClubEvents";
// import ClubMembers from "./ClubMembers";
// import Cookies from "js-cookie";
// import ClubRules from "./ClubRules";
// import JoinClubPopup from "./JoinClubPopup";

// function ClubDetails() {
//   const { club_id } = useParams(); // Get club_id from the URL
//   const [clubName, setClubName] = useState("");
//   const [username, setUsername] = useState(null); // Null if user is not logged in
//   const [isMember, setIsMember] = useState(false); // Track if the user is an accepted member
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [showPopup, setShowPopup] = useState(false);

//   useEffect(() => {
//     const fetchClubDetails = async () => {
//       try {
//         // Fetch club name (public data)
//         const clubResponse = await APIClient.get(`club/name/${club_id}`);
//         if (clubResponse.data.success) {
//           setClubName(clubResponse.data.data.club_name);
//         } else {
//           setError("Failed to fetch club name.");
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

//               if (
//                 membershipResponse.data.success &&
//                 membershipResponse.data.data.status === "accepted"
//               ) {
//                 setIsMember(true); // User is an accepted member
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

//   const handleExitClub = async () => {
//     const jwt_token = Cookies.get("jwt_token");
//     if (!jwt_token) return;

//     try {
//       const response = await APIClient.post(
//         `club/exit/${club_id}`,
//         {},
//         {
//           headers: {
//             Authorization: `Bearer ${jwt_token}`,
//           },
//           withCredentials: true,
//         }
//       );

//       if (response.data.success) {
//         alert("You have exited the club.");
//         setIsMember(false); // Update membership status
//       } else {
//         alert("Failed to exit the club: " + response.data.message);
//       }
//     } catch (err) {
//       console.error("Error exiting the club:", err);
//       alert("An error occurred while exiting the club.");
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
//       <div className="my-5">
//         <ClubEvents />
//       </div>
//       <div className="my-5">
//         <ClubMembers />
//       </div>
//       <div className="my-5">
//         <ClubRules />
//       </div>
//       {username ? (
//         <div className="my-5 text-center">
//           {!isMember ? (
//             <button className="btn btn-success" onClick={() => setShowPopup(true)}>
//               Join the Club!
//             </button>
//           ) : (
//             <button className="btn btn-danger" onClick={handleExitClub}>
//               Exit the Club
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

// export default ClubDetails;