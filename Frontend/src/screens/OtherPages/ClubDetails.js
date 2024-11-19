import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ClubEvents from "./ClubEvents";
import ClubMembers from "./ClubMembers";
import Cookies from "js-cookie";
import ClubRules from "./ClubRules";
import JoinClubPopup from "./JoinClubPopup";

function ClubDetails() {
  const { club_id } = useParams(); // Get club_id from the URL
  const [clubName, setClubName] = useState("");
  const [username, setUsername] = useState(null); // Null if user is not logged in
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const fetchDetails = async () => {
      const jwt_token = Cookies.get("jwt_token"); // Retrieve token from cookies

      try {
        // Fetch club name (public data)
        const clubResponse = await axios.get(`http://0.0.0.0:3500/club/name/${club_id}`);
        if (clubResponse.data.success) {
          setClubName(clubResponse.data.data.club_name);
        } else {
          setError("Failed to fetch club name.");
        }

        // Fetch username only if logged in
        if (jwt_token) {
          const userResponse = await axios.get(`http://0.0.0.0:3500/users/account/details`, {
            headers: {
              Authorization: `Bearer ${jwt_token}`,
            },
            withCredentials: true,
          });

          if (userResponse.data.success) {
            setUsername(userResponse.data.data.username);
          } else {
            console.error("Failed to fetch user information.");
          }
        }
      } catch (err) {
        console.error("Error fetching club details:", err);
        setError("An error occurred while fetching details.");
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [club_id]);

  if (loading) {
    return <div>Loading club details...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container">
      <h1 className="text-center my-4">{clubName} Details</h1>
      <div className="my-5">
        <ClubEvents />
      </div>
      <div className="my-5">
        <ClubMembers />
      </div>
      <div className="my-5">
        <ClubRules />
      </div>
      {username ? ( // Show "Join Club" button only if logged in
        <div className="my-5">
          <button className="btn btn-success" onClick={() => setShowPopup(true)}>
            Join the Club!
          </button>
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
        <p className="text-center">Log in to join the club!</p>
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

// function ClubDetails() {
//   const { club_id } = useParams(); // Get club_id from the URL
//   const [clubName, setClubName] = useState("");
//   const [username, setUsername] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [showPopup, setShowPopup] = useState(false);

//   useEffect(() => {
//     const fetchDetails = async () => {
//       const jwt_token = Cookies.get("jwt_token"); // Retrieve token from cookies
//       try {
//         // Fetch club name
//         const clubResponse = await axios.get(`http://0.0.0.0:3500/club/name/${club_id}`, {
//           // headers: {
//           //   Authorization: `Bearer ${jwt_token}`,
//           // },
//           // withCredentials: true,
//         });

//         if (clubResponse.data.success) {
//           setClubName(clubResponse.data.data.club_name);
//         } else {
//           setError("Failed to fetch club name.");
//         }

//         // Fetch username of logged-in user
//         const userResponse = await axios.get(`http://0.0.0.0:3500/users/account/details`, {
//           headers: {
//             Authorization: `Bearer ${jwt_token}`,
//           },
//           withCredentials: true,
//         });

//         if (userResponse.data.success) {
//           setUsername(userResponse.data.data.username);
//         } else {
//           setError("Failed to fetch user information.");
//         }
//       } catch (err) {
//         console.error("Error fetching club details:", err);
//         setError("An error occurred while fetching details.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDetails();
//   }, [club_id]);

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
//       <div className="my-5">
//         <button className="btn btn-success" onClick={() => setShowPopup(true)}>
//           Join the Club!
//         </button>
//         {showPopup && (
//           <JoinClubPopup
//             clubId={club_id}
//             clubName={clubName}
//             username={username}
//             onClose={() => setShowPopup(false)}
//           />
//         )}
//       </div>
//     </div>
//   );
// }

// export default ClubDetails;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import ClubEvents from "./ClubEvents";
// import ClubMembers from "./ClubMembers";
// import Cookies from 'js-cookie';
// import ClubRules from "./ClubRules";

// function ClubDetails() {
//   const { club_id } = useParams(); // Get club_id from the URL
//   const [clubName, setClubName] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchClubName = async () => {
//       const jwt_token = Cookies.get("jwt_token"); // Retrieve token from cookies
//       try {
//         const response = await axios.get(`http://0.0.0.0:3500/club/name/${club_id}`, {
//           headers: {
//             Authorization: `Bearer ${jwt_token}`, // Add token in Authorization header
//           },
//           withCredentials: true, // Ensure cookies are included in the request
//         });
//         if (response.data.success) {
//           setClubName(response.data.data.club_name); // Set the club name from the response
//         } else {
//           setError("Failed to fetch club name.");
//         }
//       } catch (err) {
//         console.error("Error fetching club name:", err);
//         setError("An error occurred while fetching club details.");
//       } finally {
//         setLoading(false);
//       }
//     };
  
//     fetchClubName();
//   }, [club_id]);
  

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
//         {/* <h2>Upcoming Events</h2> */}
//         <ClubEvents />
//       </div>
//       <div className="my-5">
//         {/* <h2>Club Panel</h2> */}
//         <ClubMembers />
//       </div>
//       <div className="my-5">
//         {/* <h2>Club Rules</h2> */}
//         <ClubRules />
//       </div>
//       <button className="btn btn-success">Join the Club!</button>
//     </div>
//   );
// }

// export default ClubDetails;
