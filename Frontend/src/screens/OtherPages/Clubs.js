import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";


function Clubs() {
  const [clubs, setClubs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchActiveClubs = async () => {
      const jwt_token = Cookies.get("jwt_token");
      try {
        const response = await axios.get("http://localhost:3500/clubs/active", {
          headers: {
            Authorization: `Bearer ${jwt_token}`,
          },
          withCredentials: true,
        });

        if (response.data.success) {
          setClubs(response.data.data);
        } else {
          console.error("Error fetching clubs:", response.data.message);
        }
      } catch (error) {
        console.error("Error fetching clubs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchActiveClubs();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
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
                  <Link
  to={`/clubs/details/${club.club_id}?club_name=${encodeURIComponent(club.club_name)}`}
  className="btn btn-primary"
>                    Learn More
                    </Link>

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

export default Clubs;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Cookies from 'js-cookie';

// function Clubs() {
//   const [clubs, setClubs] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchActiveClubs = async () => {
//       const jwt_token = Cookies.get('jwt_token');
//       try {
//         const response = await axios.get('http://localhost:3500/clubs/active', {
//           headers: {
//             Authorization: `Bearer ${jwt_token}`,
//           },
//           withCredentials: true,
//         });

//         if (response.data.success) {
//           setClubs(response.data.data);
//         } else {
//           console.error('Error fetching clubs:', response.data.message);
//         }
//       } catch (error) {
//         console.error('Error fetching clubs:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchActiveClubs();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h2>Clubs</h2>
//       {clubs.length > 0 ? (
//         <ul>
//         {clubs.map((club) => (
//           <li key={club.club_id}>
//             <img src={club.logo} alt={`${club.club_name} logo`} style={{ width: '50px', height: '50px' }} />
//             <h3>{club.club_name}</h3>
//             <p>{club.description}</p>
//             {/* <img src={club.image} alt={`${club.club_name} image`} style={{ width: '200px' }} /> */}
//           </li>
//         ))}
//       </ul>      
//       ) : (
//         <p>No active clubs available.</p>
//       )}
//     </div>
//   );
// }

// export default Clubs;