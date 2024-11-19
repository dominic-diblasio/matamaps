import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Cookies from 'js-cookie';

function ClubEvents() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { club_id } = useParams(); // Get club_id from URL

  useEffect(() => {
    const fetchClubEvents = async () => {
      const jwt_token = Cookies.get('jwt_token'); // Get JWT token from cookies

      try {
        const response = await axios.get(`http://0.0.0.0:3500/clubs/events/${club_id}`, {
          headers: {
            Authorization: `Bearer ${jwt_token}`,
          },
          withCredentials: true,
        });

        if (response.data.success) {
          setEvents(response.data.data); // Set fetched events
        } else {
          setError(response.data.message || 'Failed to fetch events');
        }
      } catch (err) {
        console.error('Error fetching club events:', err);
        setError(err.response?.data?.message || 'An error occurred while fetching events');
      } finally {
        setLoading(false);
      }
    };

    fetchClubEvents();
  }, [club_id]);

  if (loading) {
    return <div>Loading events...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container">
      <div className="row">
      <h2 className="text-center">Upcoming Events</h2>
        {events.length > 0 ? (
          events.map((event) => (
            <div key={event.event_id} className="col-lg-4 col-md-6 mb-4">
              <div className="card shadow-sm">
                {event.event_image && (
                  <img
                    src={event.event_image}
                    alt={`${event.event_name} image`}
                    className="card-img-top"
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                )}
                <div className="card-body">
                  <h5 className="card-title">{event.event_name}</h5>
                  <p className="card-text">{event.event_description}</p>
                  <p className="card-text">
                    <strong>Date:</strong> {new Date(event.event_date).toLocaleDateString()}
                  </p>
                  <p className="card-text">
                    <strong>Location:</strong> {event.location}
                  </p>
                  <button className="btn btn-success">Register</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No events available for this club.</p>
        )}
      </div>
    </div>
  );
}

export default ClubEvents;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import Cookies from 'js-cookie';

// function ClubEvents() {
//   const [events, setEvents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const { club_id } = useParams(); // Get club_id from URL

//   useEffect(() => {
//     const fetchClubEvents = async () => {
//       const jwt_token = Cookies.get('jwt_token'); // Get JWT token from cookies

//       try {
//         const response = await axios.get(`http://0.0.0.0:3500/clubs/events/${club_id}`, {
//           headers: {
//             Authorization: `Bearer ${jwt_token}`,
//           },
//           withCredentials: true,
//         });

//         if (response.data.success) {
//           setEvents(response.data.data); // Set fetched events
//         } else {
//           setError(response.data.message || 'Failed to fetch events');
//         }
//       } catch (err) {
//         console.error('Error fetching club events:', err);
//         setError(err.response?.data?.message || 'An error occurred while fetching events');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchClubEvents();
//   }, [club_id]);

//   if (loading) {
//     return <div>Loading events...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div className="container">
//       {/* <h2>Upcoming Events for Club ID: {club_id}</h2> */}
//       <div className="row">
//         {events.length > 0 ? (
//           events.map((event) => (
//             <div key={event.event_id} className="col-lg-4 col-md-6 mb-4">
//               <div className="card shadow-sm">
//                 <div className="card-body">
//                   <h5 className="card-title">{event.event_name}</h5>
//                   <p className="card-text">Date: {new Date(event.event_date).toLocaleDateString()}</p>
//                   <p className="card-text">Location: {event.location}</p>
//                   <button className="btn btn-success">Register</button>
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>No events available for this club.</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default ClubEvents;
