import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

function ClubLeaderClubsPage() {
  const [clubs, setClubs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLeaderClubs = async () => {
      const jwt_token = Cookies.get("jwt_token");

      if (!jwt_token) {
        setError("You need to log in to view this page.");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get("http://localhost:3500/club-leader/clubs", {
          headers: {
            Authorization: `Bearer ${jwt_token}`,
          },
          withCredentials: true,
        });

        if (response.data.success) {
          setClubs(response.data.data);
        } else {
          setError(response.data.message || "Failed to fetch clubs.");
        }
      } catch (err) {
        console.error("Error fetching leader's clubs:", err);
        setError(err.response?.data?.message || "An error occurred while fetching clubs.");
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderClubs();
  }, []);

  if (loading) {
    return <div>Loading clubs...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container my-4">
      <h2 className="text-center">Clubs You Manage</h2>
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
                  <Link
                    to={`/members-leader/${club.club_id}`}
                    className="btn btn-primary"
                  >
                    View Members
                  </Link>
                  <Link
                    to={`/club-leader/events/${club.club_id}`}
                    className="btn btn-secondary ms-2"
                  >
                    Manage Events
                  </Link>
                  <Link
                    to={`/club-leader/students/${club.club_id}`}
                    className="btn btn-success ms-2 mt-2"
                  >
                    Manage Students
                  </Link>
                  <Link
                    to={`/club-announcements/${club.club_id}`}
                    className="btn btn-warning ms-2 mt-2"
                  >
                    Manage Announcements
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">You are not managing any clubs at the moment.</p>
        )}
      </div>
    </div>
  );
}

export default ClubLeaderClubsPage;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Cookies from "js-cookie";
// import { Link } from "react-router-dom";

// function ClubLeaderClubsPage() {
//   const [clubs, setClubs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchLeaderClubs = async () => {
//       const jwt_token = Cookies.get("jwt_token");

//       if (!jwt_token) {
//         setError("You need to log in to view this page.");
//         setLoading(false);
//         return;
//       }

//       try {
//         const response = await axios.get("http://localhost:3500/club-leader/clubs", {
//           headers: {
//             Authorization: `Bearer ${jwt_token}`,
//           },
//           withCredentials: true,
//         });

//         if (response.data.success) {
//           setClubs(response.data.data);
//         } else {
//           setError(response.data.message || "Failed to fetch clubs.");
//         }
//       } catch (err) {
//         console.error("Error fetching leader's clubs:", err);
//         setError(err.response?.data?.message || "An error occurred while fetching clubs.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchLeaderClubs();
//   }, []);

//   if (loading) {
//     return <div>Loading clubs...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div className="container my-4">
//       <h2 className="text-center">Clubs You Manage</h2>
//       <div className="row">
//         {clubs.length > 0 ? (
//           clubs.map((club) => (
//             <div key={club.club_id} className="col-md-4 mb-4">
//               <div className="card">
//                 {club.logo && (
//                   <img
//                     src={club.logo}
//                     alt={`${club.club_name} logo`}
//                     className="card-img-top"
//                     style={{ height: "150px", objectFit: "cover" }}
//                   />
//                 )}
//                 <div className="card-body">
//                   <h5 className="card-title">{club.club_name}</h5>
//                   <p className="card-text">{club.description}</p>
//                   <Link
//                     to={`/members-leader/${club.club_id}`}
//                     className="btn btn-primary"
//                   >
//                     View Members
//                   </Link>
//                   <Link
//                     to={`/club-leader/events/${club.club_id}`}
//                     className="btn btn-secondary ms-2"
//                   >
//                     Manage Events
//                   </Link>
//                   <Link
//                     to={`/club-leader/students/${club.club_id}`}
//                     className="btn btn-success ms-2 mt-2"
//                   >
//                     Manage Students
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="text-center">You are not managing any clubs at the moment.</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default ClubLeaderClubsPage;