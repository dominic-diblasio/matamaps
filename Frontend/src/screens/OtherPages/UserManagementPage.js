import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import DataTable from "react-data-table-component";
import { Modal, Button } from "react-bootstrap";

function UserManagementPage() {
  const [users, setUsers] = useState([]);
  const [clubs, setClubs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showRoleModal, setShowRoleModal] = useState(false);
  const [selectedRoles, setSelectedRoles] = useState({
    user: [],
    club_leader: [],
    admin: [],
  });

  const userColumns = [
    {
      name: "USER ID",
      selector: (row) => row.user_id,
      sortable: true,
    },
    {
      name: "USERNAME",
      selector: (row) => row.username,
      sortable: true,
    },
    {
      name: "EMAIL",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "CLUBS & ROLES",
      cell: (row) => (
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => viewUserClubs(row.user_id)}
        >
          View Clubs
        </button>
      ),
    },
    {
      name: "ROLE",
      cell: (row) => (
        <button
          className="btn btn-primary btn-sm"
          onClick={() => handleEditRoles(row)}
        >
          Edit Roles
        </button>
      ),
    },
    {
      name: "ACTION",
      cell: (row) => (
        <button
          className="btn btn-outline-danger"
          onClick={() => deleteUser(row.user_id)}
        >
          <i className="icofont-ui-delete text-danger"></i> Delete
        </button>
      ),
    },
  ];

  useEffect(() => {
    const fetchUsersAndClubs = async () => {
      const jwt_token = Cookies.get("jwt_token");
      try {
        // Fetch users
        const usersResponse = await axios.get(
          "http://localhost:3500/admin/users/display",
          {
            headers: { Authorization: `Bearer ${jwt_token}` },
          }
        );
        if (usersResponse.data.success) {
          setUsers(usersResponse.data.data);
        } else {
          setError("Failed to fetch users.");
        }

        // Fetch clubs
        const clubsResponse = await axios.get(
          "http://localhost:3500/admin/clubs",
          {
            headers: { Authorization: `Bearer ${jwt_token}` },
          }
        );
        if (clubsResponse.data.success) {
          setClubs(clubsResponse.data.data);
        } else {
          setError("Failed to fetch clubs.");
        }
      } catch (err) {
        console.error("Error fetching users or clubs:", err);
        setError("An error occurred while fetching users or clubs.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsersAndClubs();
  }, []);

  const viewUserClubs = async (userId) => {
    const jwt_token = Cookies.get("jwt_token");
    try {
      const response = await axios.get(
        `http://localhost:3500/admin/users/${userId}/clubs`,
        {
          headers: { Authorization: `Bearer ${jwt_token}` },
        }
      );

      if (response.data.success) {
        const userClubs = response.data.data;
        alert(
          userClubs.length
            ? `This user is associated with the following clubs:\n${userClubs
                .map((club) => `${club.club_name} (${club.role_in_club})`)
                .join("\n")}`
            : "This user is not associated with any clubs."
        );
      } else {
        alert("Failed to fetch user's clubs.");
      }
    } catch (err) {
      console.error("Error fetching user's clubs:", err);
      alert("An error occurred while fetching the user's clubs.");
    }
  };

  const handleEditRoles = async (user) => {
    setSelectedUser(user);
    const jwt_token = Cookies.get("jwt_token");

    try {
      const response = await axios.get(
        `http://localhost:3500/admin/users/${user.user_id}/clubs`,
        {
          headers: { Authorization: `Bearer ${jwt_token}` },
        }
      );

      if (response.data.success) {
        // Initialize userRoles with empty arrays for expected roles
        const userRoles = { user: [], club_leader: [], admin: [] };

        // Iterate over the data and populate userRoles accordingly
        response.data.data.forEach((club) => {
          const role = club.role_in_club;

          // Map 'leader' role to 'club_leader' in selectedRoles
          if (role === 'leader') {
            userRoles.club_leader.push(club.club_id);
          } else if (role === 'member') {
            userRoles.user.push(club.club_id);
          }
        });

        // Check if the user is an admin
        if (user.role === 'admin') {
          userRoles.admin.push('admin'); // Arbitrary value to indicate admin role
        }

        setSelectedRoles(userRoles);
        setShowRoleModal(true);
      } else {
        alert("Failed to fetch user's roles in clubs.");
      }
    } catch (err) {
      console.error("Error fetching user's clubs:", err);
      alert("An error occurred while fetching the user's roles.");
    }
  };

  const handleClubSelection = (role, clubId) => {
    setSelectedRoles((prev) => {
      const updated = { ...prev };

      // Initialize arrays if undefined
      if (!updated.user) updated.user = [];
      if (!updated.club_leader) updated.club_leader = [];

      if (!updated[role]) updated[role] = [];

      if (updated[role].includes(clubId)) {
        // Deselect club
        updated[role] = updated[role].filter((id) => id !== clubId);
      } else {
        // Select club
        updated[role].push(clubId);

        // Remove from the other role if present
        const otherRole = role === 'user' ? 'club_leader' : 'user';
        updated[otherRole] = updated[otherRole].filter((id) => id !== clubId);
      }

      return updated;
    });
  };

  const handleAdminSelection = () => {
    setSelectedRoles((prev) => {
      const updated = { ...prev };
      if (updated.admin.length > 0) {
        updated.admin = [];
      } else {
        updated.admin = ['admin']; // Arbitrary value
      }
      return updated;
    });
  };

  const handleSubmitRoles = async () => {
    const jwt_token = Cookies.get("jwt_token");

    try {
      const response = await axios.put(
        `http://localhost:3500/admin/users/${selectedUser.user_id}/role`,
        { roles: selectedRoles },
        { headers: { Authorization: `Bearer ${jwt_token}` } }
      );

      if (response.data.success) {
        alert("Roles updated successfully.");
        setShowRoleModal(false);

        // Reset selectedRoles with empty arrays for each role
        setSelectedRoles({ user: [], club_leader: [], admin: [] });
        setSelectedUser(null);
      } else {
        alert("Failed to update roles.");
      }
    } catch (err) {
      console.error("Error updating roles:", err);
      alert("An error occurred while updating the roles.");
    }
  };

  const deleteUser = async (userId) => {
    const jwt_token = Cookies.get("jwt_token");

    try {
      const response = await axios.delete(
        `http://localhost:3500/admin/users/${userId}`,
        { headers: { Authorization: `Bearer ${jwt_token}` } }
      );

      if (response.data.success) {
        alert("User deleted successfully.");
        setUsers((prevUsers) =>
          prevUsers.filter((user) => user.user_id !== userId)
        );
      } else {
        alert("Failed to delete user.");
      }
    } catch (err) {
      console.error("Error deleting user:", err);
    }
  };

  if (loading) return <div>Loading users...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="card mb-3">
      <DataTable
        title="User Management"
        columns={userColumns}
        data={users}
        defaultSortField="user_id"
        pagination
        selectableRows={false}
      />

      {/* Modal for editing roles */}
      <Modal show={showRoleModal} onHide={() => setShowRoleModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Roles and Clubs</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedRoles && (
            <>
              {/* User Role Section */}
              <div>
                <h5>User Role</h5>
                <ul className="list-group">
                  {clubs.map((club) => {
                    const isClubLeader = selectedRoles.club_leader.includes(club.club_id);
                    return (
                      <li key={club.club_id} className="list-group-item">
                        <input
                          type="checkbox"
                          id={`user-club-${club.club_id}`}
                          checked={(selectedRoles.user || []).includes(club.club_id)}
                          onChange={() => handleClubSelection("user", club.club_id)}
                          disabled={isClubLeader}
                        />
                        <label htmlFor={`user-club-${club.club_id}`} className="ms-2">
                          {club.club_name} (User)
                          {isClubLeader && (
                            <span className="text-muted ms-2">
                              (Selected as Club Leader)
                            </span>
                          )}
                        </label>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Club Leader Role Section */}
              <div className="mt-4">
                <h5>Club Leader Role</h5>
                <ul className="list-group">
                  {clubs.map((club) => {
                    const isUser = selectedRoles.user.includes(club.club_id);
                    return (
                      <li key={club.club_id} className="list-group-item">
                        <input
                          type="checkbox"
                          id={`club-leader-${club.club_id}`}
                          checked={(selectedRoles.club_leader || []).includes(club.club_id)}
                          onChange={() => handleClubSelection("club_leader", club.club_id)}
                          disabled={isUser}
                        />
                        <label htmlFor={`club-leader-${club.club_id}`} className="ms-2">
                          {club.club_name} (Club Leader)
                          {isUser && (
                            <span className="text-muted ms-2">
                              (Selected as User)
                            </span>
                          )}
                        </label>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Admin Role Section */}
              <div className="mt-4">
                <h5>Admin Role</h5>
                <p>Admins do not belong to specific clubs.</p>
                <input
                  type="checkbox"
                  id="admin-role"
                  checked={selectedRoles.admin.length > 0}
                  onChange={handleAdminSelection}
                />
                <label htmlFor="admin-role" className="ms-2">
                  Admin
                </label>
              </div>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowRoleModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmitRoles}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default UserManagementPage;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Cookies from "js-cookie";
// import DataTable from "react-data-table-component";
// import { Modal, Button } from "react-bootstrap"; // Install react-bootstrap for modal

// function UserManagementPage() {
//   const [users, setUsers] = useState([]);
//   const [clubs, setClubs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [showClubModal, setShowClubModal] = useState(false);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [selectedClubs, setSelectedClubs] = useState([]);
//   const [viewUserClubs, setViewUserClubs] = useState([]); // For "View Clubs" functionality
//   const [showViewClubsModal, setShowViewClubsModal] = useState(false); // Modal to display clubs

//   const userColumns = [
//     {
//       name: "USER ID",
//       selector: (row) => row.user_id,
//       sortable: true,
//     },
//     {
//       name: "USERNAME",
//       selector: (row) => row.username,
//       sortable: true,
//     },
//     {
//       name: "EMAIL",
//       selector: (row) => row.email,
//       sortable: true,
//     },
//     {
//       name: "ROLE",
//       cell: (row) => (
//         <select
//           value={row.role}
//           onChange={(e) => handleRoleChange(row, e.target.value)}
//           className="form-select"
//         >
//           <option value="user">User</option>
//           <option value="club_leader">Club Leader</option>
//           <option value="event_manager">Event Manager</option>
//           <option value="admin">Admin</option>
//         </select>
//       ),
//     },
//     {
//       name: "CLUBS",
//       cell: (row) => (
//         <button
//           className="btn btn-primary btn-sm"
//           onClick={() => fetchUserClubs(row.user_id)}
//         >
//           View Clubs
//         </button>
//       ),
//     },
//     {
//       name: "ACTION",
//       cell: (row) => (
//         <button
//           className="btn btn-outline-danger"
//           onClick={() => deleteUser(row.user_id)}
//         >
//           <i className="icofont-ui-delete text-danger"></i> Delete
//         </button>
//       ),
//     },
//   ];

//   useEffect(() => {
//     const fetchUsersAndClubs = async () => {
//       const jwt_token = Cookies.get("jwt_token");
//       try {
//         // Fetch users
//         const usersResponse = await axios.get("http://localhost:3500/admin/users/display", {
//           headers: { Authorization: `Bearer ${jwt_token}` },
//         });
//         if (usersResponse.data.success) {
//           setUsers(usersResponse.data.data);
//         } else {
//           setError("Failed to fetch users.");
//         }

//         // Fetch clubs
//         const clubsResponse = await axios.get("http://localhost:3500/admin/clubs", {
//           headers: { Authorization: `Bearer ${jwt_token}` },
//         });
//         if (clubsResponse.data.success) {
//           setClubs(clubsResponse.data.data);
//         } else {
//           setError("Failed to fetch clubs.");
//         }
//       } catch (err) {
//         console.error("Error fetching users or clubs:", err);
//         setError("An error occurred while fetching users or clubs.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUsersAndClubs();
//   }, []);

//   const handleRoleChange = async (user, newRole) => {
//     setSelectedUser(user);
//     if (newRole === "club_leader") {
//       setShowClubModal(true);
//     } else {
//       updateUserRole(user.user_id, newRole);
//     }
//   };

//   const updateUserRole = async (userId, role, clubIds = []) => {
//     const jwt_token = Cookies.get("jwt_token");
//     try {
//       const response = await axios.put(
//         `http://localhost:3500/admin/users/${userId}/role`,
//         { role, club_ids: clubIds },
//         { headers: { Authorization: `Bearer ${jwt_token}` } }
//       );

//       if (response.data.success) {
//         alert("User role updated successfully.");
//         setUsers((prevUsers) =>
//           prevUsers.map((user) =>
//             user.user_id === userId ? { ...user, role } : user
//           )
//         );
//       } else {
//         alert("Failed to update user role.");
//       }
//     } catch (err) {
//       console.error("Error updating user role:", err);
//     }
//   };

//   const fetchUserClubs = async (userId) => {
//     const jwt_token = Cookies.get("jwt_token");
//     try {
//       const response = await axios.get(`http://localhost:3500/admin/users/${userId}/clubs`, {
//         headers: { Authorization: `Bearer ${jwt_token}` },
//       });

//       if (response.data.success) {
//         setViewUserClubs(response.data.data); // Save the clubs data to state
//         setShowViewClubsModal(true); // Show the modal
//       } else {
//         alert("Failed to fetch user's clubs.");
//       }
//     } catch (err) {
//       console.error("Error fetching user's clubs:", err);
//       alert("An error occurred while fetching the user's clubs.");
//     }
//   };

//   const deleteUser = async (userId) => {
//     const jwt_token = Cookies.get("jwt_token");
//     try {
//       const response = await axios.delete(
//         `http://localhost:3500/admin/users/${userId}`,
//         { headers: { Authorization: `Bearer ${jwt_token}` } }
//       );

//       if (response.data.success) {
//         alert("User deleted successfully.");
//         setUsers((prevUsers) => prevUsers.filter((user) => user.user_id !== userId));
//       } else {
//         alert("Failed to delete user.");
//       }
//     } catch (err) {
//       console.error("Error deleting user:", err);
//     }
//   };

//   const handleClubSelection = (clubId) => {
//     setSelectedClubs((prev) =>
//       prev.includes(clubId)
//         ? prev.filter((id) => id !== clubId)
//         : [...prev, clubId]
//     );
//   };

//   const handleClubSubmit = () => {
//     if (selectedUser) {
//       updateUserRole(selectedUser.user_id, "club_leader", selectedClubs);
//       setShowClubModal(false);
//       setSelectedClubs([]);
//     }
//   };

//   const handleModalClose = () => {
//     setShowClubModal(false);
//     setSelectedClubs([]);
//   };

//   const handleViewClubsClose = () => {
//     setShowViewClubsModal(false);
//     setViewUserClubs([]);
//   };

//   if (loading) return <div>Loading users...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div className="card mb-3">
//       <DataTable
//         title="User Management"
//         columns={userColumns}
//         data={users}
//         defaultSortField="user_id"
//         pagination
//         selectableRows={false}
//       />

//       {/* Club Selection Modal */}
//       <Modal show={showClubModal} onHide={handleModalClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Assign Clubs to Leader</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <ul className="list-group">
//             {clubs.map((club) => (
//               <li key={club.club_id} className="list-group-item">
//                 <input
//                   type="checkbox"
//                   id={`club-${club.club_id}`}
//                   checked={selectedClubs.includes(club.club_id)}
//                   onChange={() => handleClubSelection(club.club_id)}
//                 />
//                 <label htmlFor={`club-${club.club_id}`} className="ms-2">
//                   {club.club_name}
//                 </label>
//               </li>
//             ))}
//           </ul>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleModalClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleClubSubmit}>
//             Assign Clubs
//           </Button>
//         </Modal.Footer>
//       </Modal>

//       {/* View Clubs Modal */}
//       <Modal show={showViewClubsModal} onHide={handleViewClubsClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>User's Clubs</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <ul>
//             {viewUserClubs.length ? (
//               viewUserClubs.map((club) => (
//                 <li key={club.club_id}>
//                   {club.club_name} ({club.role_in_club})
//                 </li>
//               ))
//             ) : (
//               <p>No clubs associated with this user.</p>
//             )}
//           </ul>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleViewClubsClose}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }

// export default UserManagementPage;