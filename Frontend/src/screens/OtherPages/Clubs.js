import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

function Clubs() {
  const [clubs, setClubs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchActiveClubs = async () => {
      const jwt_token = Cookies.get('jwt_token');
      try {
        const response = await axios.get('http://localhost:3500/clubs/active', {
          headers: {
            Authorization: `Bearer ${jwt_token}`,
          },
          withCredentials: true,
        });

        if (response.data.success) {
          setClubs(response.data.data);
        } else {
          console.error('Error fetching clubs:', response.data.message);
        }
      } catch (error) {
        console.error('Error fetching clubs:', error);
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
    <div>
      <h2>Clubs</h2>
      {clubs.length > 0 ? (
        <ul>
        {clubs.map((club) => (
          <li key={club.club_id}>
            <img src={club.logo} alt={`${club.club_name} logo`} style={{ width: '50px', height: '50px' }} />
            <h3>{club.club_name}</h3>
            <p>{club.description}</p>
            {/* <img src={club.image} alt={`${club.club_name} image`} style={{ width: '200px' }} /> */}
          </li>
        ))}
      </ul>      
      ) : (
        <p>No active clubs available.</p>
      )}
    </div>
  );
}

export default Clubs;

// import React from 'react';

// function Clubs() {
//     return (
//         <div>
//             <h2>Clubs</h2>
//             <p>List of clubs goes here.</p>
//         </div>
//     );
// }

// export default Clubs;