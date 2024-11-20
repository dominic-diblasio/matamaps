import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useParams } from "react-router-dom";

function ManageClubMembersPage() {
  const { club_id } = useParams(); // Get club_id from the URL
  const [members, setMembers] = useState([]); // Correct state for club members
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClubMembers = async () => {
      const jwt_token = Cookies.get("jwt_token");

      if (!jwt_token) {
        setError("You need to log in to manage members.");
        console.error("JWT token missing");
        setLoading(false);
        return;
      }

      try {
        console.log("Fetching members for club_id:", club_id);

        const response = await axios.get(
          `http://localhost:3500/club-leader/members/${club_id}`,
          {
            headers: {
              Authorization: `Bearer ${jwt_token}`,
            },
            withCredentials: true,
          }
        );

        console.log("Fetched members response:", response.data);

        if (response.data.success) {
          setMembers(response.data.data); // Correctly set members
        } else {
          setError(response.data.message || "Failed to fetch members.");
        }
      } catch (err) {
        console.error("Error fetching club members:", err.response?.data || err);
        setError(err.response?.data?.message || "An error occurred while fetching members.");
      } finally {
        setLoading(false);
      }
    };

    fetchClubMembers(); // Call the fetchClubMembers function
  }, [club_id]);

  if (loading) {
    return <div>Loading members...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container my-4">
      <h2 className="text-center">Manage Club Members</h2>
      <div className="row">
        {members.length > 0 ? (
          members.map((member) => (
            <div key={member.membership_id} className="col-md-4 mb-4">
              <div className="card">
                {member.profile_picture && (
                  <img
                    src={member.profile_picture}
                    alt={`${member.username}'s profile`}
                    className="card-img-top"
                    style={{ height: "150px", objectFit: "cover" }}
                  />
                )}
                <div className="card-body">
                  <h5 className="card-title">{member.username}</h5>
                  <p className="card-text">
                    <strong>Role:</strong> {member.role_in_club}
                  </p>
                  <p className="card-text">
                    <strong>Status:</strong> {member.status}
                  </p>
                  <p className="card-text">
                    <strong>Joined At:</strong> {new Date(member.joined_at).toLocaleDateString()}
                  </p>
                  {/* Optional buttons for managing member roles or statuses */}
                  <button className="btn btn-warning">Change Role</button>
                  <button className="btn btn-danger ms-2">Remove Member</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No members found for this club.</p>
        )}
      </div>
    </div>
  );
}

export default ManageClubMembersPage;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Cookies from "js-cookie";
// import { useParams } from "react-router-dom";

// function ManageClubMembersPage() {
//   const { club_id } = useParams(); // Get club_id from the URL
//   const [members, setMembers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchClubMembers = async () => {
//       const jwt_token = Cookies.get("jwt_token");

//       if (!jwt_token) {
//         setError("You need to log in to manage members.");
//         setLoading(false);
//         return;
//       }

//       try {
//         const response = await axios.get(`http://localhost:3500/club-leader/members/${club_id}`, {
//           headers: {
//             Authorization: `Bearer ${jwt_token}`,
//           },
//           withCredentials: true,
//         });

//         if (response.data.success) {
//           setMembers(response.data.data);
//         } else {
//           setError(response.data.message || "Failed to fetch members.");
//         }
//       } catch (err) {
//         console.error("Error fetching club members:", err);
//         setError(err.response?.data?.message || "An error occurred while fetching members.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchClubMembers();
//   }, [club_id]);

//   if (loading) {
//     return <div>Loading members...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div className="container my-4">
//       <h2 className="text-center">Manage Club Members</h2>
//       <div className="row">
//         {members.length > 0 ? (
//           members.map((member) => (
//             <div key={member.membership_id} className="col-md-4 mb-4">
//               <div className="card">
//                 {member.profile_picture && (
//                   <img
//                     src={member.profile_picture}
//                     alt={`${member.username}'s profile`}
//                     className="card-img-top"
//                     style={{ height: "150px", objectFit: "cover" }}
//                   />
//                 )}
//                 <div className="card-body">
//                   <h5 className="card-title">{member.username}</h5>
//                   <p className="card-text">
//                     <strong>Role:</strong> {member.role_in_club}
//                   </p>
//                   <p className="card-text">
//                     <strong>Status:</strong> {member.status}
//                   </p>
//                   <p className="card-text">
//                     <strong>Joined At:</strong> {new Date(member.joined_at).toLocaleDateString()}
//                   </p>
//                   {/* Optional buttons for managing member roles or statuses */}
//                   <button className="btn btn-warning">Change Role</button>
//                   <button className="btn btn-danger ms-2">Remove Member</button>
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>No members found for this club.</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default ManageClubMembersPage;
