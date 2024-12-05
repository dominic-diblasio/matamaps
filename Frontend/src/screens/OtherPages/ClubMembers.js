import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";
import APIClient from "./APIClient";

function ClubMembers() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { club_id } = useParams(); // Get club_id from URL

  useEffect(() => {
    const fetchClubMembers = async () => {
      const jwt_token = Cookies.get("jwt_token"); // Retrieve JWT token from cookies

      try {
        const response = await APIClient.get(
          `clubs/members/${club_id}`,
          {
            headers: {
              Authorization: `Bearer ${jwt_token}`,
            },
            withCredentials: true,
          }
        );

        if (response.data.success) {
          setMembers(response.data.data); // Set fetched members
        } else {
          setError(response.data.message || "Failed to fetch club members");
        }
      } catch (err) {
        console.error("Error fetching club members:", err);
        setError(
          err.response?.data?.message || "An error occurred while fetching members"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchClubMembers();
  }, [club_id]);

  if (loading) {
    return <div>Loading members...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container my-4">
      <h2 className="text-center">Club Panel</h2>
      <p className="text-center">Meet the amazing people in this club!</p>
      <div className="row">
        {members.length > 0 ? (
          members.map((member) => (
            <div key={member.membership_id} className="col-md-4 mb-4">
              <div className="card text-center">
                {member.profile_picture && (
                  <img
                    src={member.profile_picture}
                    alt={`${member.username}'s profile`}
                    className="card-img-top mx-auto"
                    style={{
                      width: "150px",
                      height: "150px",
                      objectFit: "cover",
                      borderRadius: "50%",
                      marginTop: "15px",
                    }}
                  />
                )}
                <div className="card-body">
                  <h5 className="card-title">Name: {member.username}</h5>
                  <h6 className="card-text">Contact: {member.email}</h6>
                  <h6 className="card-text">Role: {member.role_in_club}</h6>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No members found for this club.</p>
        )}
      </div>
    </div>
  );
}

export default ClubMembers;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import Cookies from "js-cookie";

// function ClubMembers() {
//   const [members, setMembers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const { club_id } = useParams(); // Get club_id from URL

//   useEffect(() => {
//     const fetchClubMembers = async () => {
//       const jwt_token = Cookies.get("jwt_token"); // Retrieve JWT token from cookies

//       try {
//         const response = await APIClient.get(
//           `clubs/members/${club_id}`,
//           {
//             headers: {
//               Authorization: `Bearer ${jwt_token}`,
//             },
//             withCredentials: true,
//           }
//         );

//         if (response.data.success) {
//           setMembers(response.data.data); // Set fetched members
//         } else {
//           setError(response.data.message || "Failed to fetch club members");
//         }
//       } catch (err) {
//         console.error("Error fetching club members:", err);
//         setError(
//           err.response?.data?.message || "An error occurred while fetching members"
//         );
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
//       <h2 className="text-center">Club Members</h2>
//       <p className="text-center">Meet the amazing people in this club!</p>
//       <div className="row">
//         {members.length > 0 ? (
//           members.map((member) => (
//             <div key={member.membership_id} className="col-md-4 mb-4">
//               <div className="card">
//                 <div className="card-body">
//                   <h5 className="card-title">Name: {member.username}</h5>
//                   <h5 className="card-text">Contact: {member.email}</h5>
//                   <h6 className="card-text">Role: {member.role_in_club}</h6>
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="text-center">No members found for this club.</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default ClubMembers;