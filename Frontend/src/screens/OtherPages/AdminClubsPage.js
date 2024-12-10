import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import APIClient from "./APIClient";

function AdminClubsPage() {
  const [clubs, setClubs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [role, setRole] = useState(null); // To store user role
  const navigate = useNavigate();

  useEffect(() => {
    const fetchClubs = async () => {
      const jwt_token = Cookies.get("jwt_token");

      try {
        if (!jwt_token) {
          setError("Unauthorized access. Please log in.");
          setLoading(false);
          return;
        }

        // Fetch user details
        const userResponse = await APIClient.get("users/account/details", {
          headers: { Authorization: `Bearer ${jwt_token}` },
          withCredentials: true,
        });

        if (userResponse.data.success) {
          const userData = userResponse.data.data;
          setRole(userData.role);

          // Only allow access if the user role is admin
          if (userData.role !== "admin") {
            setError("Access denied. Admins only.");
            setLoading(false);
            return;
          }
        } else {
          setError("Failed to verify user role.");
          setLoading(false);
          return;
        }

        // Fetch filtered or all active clubs
        const endpoint = "admin/clubs";

        const response = await APIClient.get(endpoint, {
          headers: { Authorization: `Bearer ${jwt_token}` },
          withCredentials: true,
        });

        if (response.data.success) {
          setClubs(response.data.data);
        } else {
          setError(response.data.message || "Failed to fetch clubs");
        }
      } catch (err) {
        console.error("Error fetching clubs:", err);
        setError("An error occurred while fetching clubs.");
      } finally {
        setLoading(false);
      }
    };

    fetchClubs();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-danger my-4">{error}</div>;
  }

  return (
    <div className="container my-4">
      <h2 className="text-center">Clubs</h2>
      <p className="text-center">Explore various clubs to join and participate in!</p>
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
                  <button
                    onClick={() =>
                      navigate(
                        `/admin/club/details/${club.club_id}?club_name=${encodeURIComponent(
                          club.club_name
                        )}`
                      )
                    }
                    className="btn btn-primary"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No active clubs available.</p>
        )}
      </div>
    </div>
  );
}

export default AdminClubsPage;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Cookies from "js-cookie";
// import { Link } from "react-router-dom";

// function AdminClubsPage() {
//   const [clubs, setClubs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [role, setRole] = useState(null); // To store user role

//   useEffect(() => {
//     const fetchClubs = async () => {
//       const jwt_token = Cookies.get("jwt_token");

//       try {
//         // Fetch user details only if a token exists
//         if (jwt_token) {
//           const userResponse = await APIClient.get("users/account/details", {
//             headers: { Authorization: `Bearer ${jwt_token}` },
//             withCredentials: true,
//           });

//           if (userResponse.data.success) {
//             const userData = userResponse.data.data;
//             setRole(userData.role);
//           }
//         }

//         // Fetch filtered or all active clubs based on role
//         const endpoint =
//           "admin/clubs";

//         const response = await APIClient.get(endpoint, {
//           headers: jwt_token ? { Authorization: `Bearer ${jwt_token}` } : {},
//           withCredentials: !!jwt_token,
//         });

//         if (response.data.success) {
//           setClubs(response.data.data);
//         } else {
//           setError(response.data.message || "Failed to fetch clubs");
//         }
//       } catch (err) {
//         console.error("Error fetching clubs:", err);
//         setError("An error occurred while fetching clubs");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchClubs();
//   }, [role]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div className="container my-4">
//       <h2 className="text-center">Clubs</h2>
//       <p className="text-center">Explore various clubs to join and participate in!</p>
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
//                     to={`/admin/club/details/${club.club_id}?club_name=${encodeURIComponent(
//                       club.club_name
//                     )}`}
//                     className="btn btn-primary"
//                   >
//                     Learn More
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="text-center">No active clubs available.</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default AdminClubsPage;