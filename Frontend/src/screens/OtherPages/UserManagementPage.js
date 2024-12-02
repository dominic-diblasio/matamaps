import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom"; // For navigation

function UserManagementPage() {
  const [users, setUsers] = useState([]);
  const [clubs, setClubs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedClub, setSelectedClub] = useState(""); // For club selection during role update

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
      name: "ROLE",
      cell: (row) => (
        <select
          value={row.role}
          onChange={(e) => handleRoleChange(row.user_id, e.target.value)}
          className="form-select"
        >
          <option value="user">User</option>
          <option value="club_leader">Club Leader</option>
          <option value="event_manager">Event Manager</option>
          <option value="admin">Admin</option>
        </select>
      ),
    },
    {
      name: "CLUBS",
      cell: (row) => (
        <>
          <button
            className="btn btn-primary btn-sm"
            onClick={() => viewUserClubs(row.user_id)}
          >
            View Clubs
          </button>
        </>
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

  const [isAdmin, setIsAdmin] = useState(false); // Check if the user is an admin
  const navigate = useNavigate();

  useEffect(() => {
    const checkUserRole = async () => {
      const jwt_token = Cookies.get("jwt_token");
      try {
        // Fetch user details to check the role
        const response = await axios.get("http://localhost:3500/users/account/details", {
          headers: { Authorization: `Bearer ${jwt_token}` },
        });

        if (response.data.success) {
          const user = response.data.data;

          // Verify if the user is an admin
          if (user.role !== "admin") {
            alert("Access denied. Only admins can access this page.");
            navigate("/clubs"); // Redirect non-admin users to another page
            return;
          }

          setIsAdmin(true); // Allow access to the page for admins
        } else {
          alert("Failed to verify user role.");
          navigate("/"); // Redirect if verification fails
        }
      } catch (err) {
        console.error("Error verifying user role:", err);
        alert("An error occurred. Redirecting to the homepage.");
        navigate("/"); // Redirect on error
      }
    };

    checkUserRole();
  }, [navigate]);
  useEffect(() => {
    const fetchUsersAndClubs = async () => {
      const jwt_token = Cookies.get("jwt_token");
      try {
        // Fetch users
        const usersResponse = await axios.get("http://localhost:3500/admin/users/display", {
          headers: { Authorization: `Bearer ${jwt_token}` },
        });
        if (usersResponse.data.success) {
          setUsers(usersResponse.data.data);
        } else {
          setError("Failed to fetch users.");
        }

        // Fetch clubs
        const clubsResponse = await axios.get("http://localhost:3500/admin/clubs", {
          headers: { Authorization: `Bearer ${jwt_token}` },
        });
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

  const handleRoleChange = async (userId, newRole) => {
    let clubId = null;
  
    // If changing to club_leader, prompt for a club
    if (newRole === "club_leader") {
      const clubOptions = clubs.map((club) => `${club.club_id} - ${club.club_name}`).join("\n");
      const selectedClubId = prompt(`Select a club for the leader:\n${clubOptions}`);
      clubId = clubs.some((club) => club.club_id === parseInt(selectedClubId))
        ? selectedClubId
        : null;
  
      if (!clubId) {
        alert("Invalid club selection. Role update canceled.");
        return;
      }
    }
  
    const jwt_token = Cookies.get("jwt_token");
    try {
      const response = await axios.put(
        `http://localhost:3500/admin/users/${userId}/role`,
        { role: newRole, club_id: clubId }, // Send club_id only if applicable
        {
          headers: { Authorization: `Bearer ${jwt_token}` },
        }
      );
  
      if (response.data.success) {
        alert("User role updated successfully.");
        setUsers((prevUsers) =>
          prevUsers.map((user) =>
            user.user_id === userId ? { ...user, role: newRole } : user
          )
        );
      } else {
        alert(response.data.message || "Failed to update user role.");
      }
    } catch (err) {
      console.error("Error updating user role:", err);
      alert("An error occurred while updating user role.");
    }
  };
  

  const promptForClub = () => {
    const clubOptions = clubs.map((club) => `${club.club_id} - ${club.club_name}`).join("\n");
    const selectedClubId = prompt(`Select a club for the leader:\n${clubOptions}`);
    return clubs.some((club) => club.club_id === parseInt(selectedClubId)) ? selectedClubId : null;
  };

  const deleteUser = async (userId) => {
    const jwt_token = Cookies.get("jwt_token");

    try {
      const response = await axios.delete(
        `http://localhost:3500/admin/users/${userId}`,
        {
          headers: { Authorization: `Bearer ${jwt_token}` },
        }
      );

      if (response.data.success) {
        alert("User deleted successfully.");
        setUsers((prevUsers) => prevUsers.filter((user) => user.user_id !== userId));
      } else {
        alert(response.data.message || "Failed to delete user.");
      }
    } catch (err) {
      console.error("Error deleting user:", err);
      alert("An error occurred while deleting user.");
    }
  };

  const viewUserClubs = async (userId) => {
    const jwt_token = Cookies.get("jwt_token");
  
    try {
      // Fetch clubs for this user
      const response = await axios.get(`http://localhost:3500/admin/users/${userId}/clubs`, {
        headers: { Authorization: `Bearer ${jwt_token}` },
      });
  
      if (response.data.success) {
        const userClubs = response.data.data; // List of clubs the user is part of
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
        subHeader
        selectableRows={false}
        className="table myDataTable table-hover align-middle mb-0 d-row nowrap dataTable no-footer dtr-inline"
        highlightOnHover={true}
      />
    </div>
  );
}

export default UserManagementPage;
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Cookies from "js-cookie";
// import DataTable from "react-data-table-component";

// function UserManagementPage() {
//     const [users, setUsers] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
  
//     const userColumns = [
//       {
//         name: "USER ID",
//         selector: (row) => row.user_id,
//         sortable: true,
//       },
//       {
//         name: "USERNAME",
//         selector: (row) => row.username,
//         sortable: true,
//       },
//       {
//         name: "FIRST NAME",
//         selector: (row) => row.first_name,
//         sortable: true,
//       },
//       {
//         name: "LAST NAME",
//         selector: (row) => row.last_name,
//         sortable: true,
//       },
//       {
//         name: "EMAIL",
//         selector: (row) => row.email,
//         sortable: true,
//       },
//       {
//         name: "ROLE",
//         cell: (row) => (
//           <select
//             value={row.role}
//             onChange={(e) => updateUserRole(row.user_id, e.target.value)}
//             className="form-select"
//           >
//             <option value="user">User</option>
//             <option value="club_leader">Club Leader</option>
//             <option value="event_manager">Event Manager</option>
//             <option value="admin">Admin</option>
//           </select>
//         ),
//       },
//       {
//         name: "ACTION",
//         cell: (row) => (
//           <button
//             className="btn btn-outline-danger"
//             onClick={() => deleteUser(row.user_id)}
//           >
//             <i className="icofont-ui-delete text-danger"></i> Delete
//           </button>
//         ),
//       },
//     ];
  
//     useEffect(() => {
//       const fetchUsers = async () => {
//         const jwt_token = Cookies.get("jwt_token");
  
//         try {
//           const response = await axios.get("http://localhost:3500/admin/users/display", {
//             headers: { Authorization: `Bearer ${jwt_token}` },
//           });
  
//           if (response.data.success) {
//             setUsers(response.data.data);
//           } else {
//             setError("Failed to fetch users.");
//           }
//         } catch (err) {
//           console.error("Error fetching users:", err);
//           setError("An error occurred while fetching users.");
//         } finally {
//           setLoading(false);
//         }
//       };
  
//       fetchUsers();
//     }, []);
  
//     const updateUserRole = async (userId, newRole) => {
//       const jwt_token = Cookies.get("jwt_token");
  
//       try {
//         const response = await axios.put(
//           `http://localhost:3500/admin/users/${userId}/role`,
//           { role: newRole },
//           {
//             headers: { Authorization: `Bearer ${jwt_token}` },
//           }
//         );
  
//         if (response.data.success) {
//           alert("User role updated successfully.");
//           setUsers((prevUsers) =>
//             prevUsers.map((user) =>
//               user.user_id === userId ? { ...user, role: newRole } : user
//             )
//           );
//         } else {
//           alert(response.data.message || "Failed to update user role.");
//         }
//       } catch (err) {
//         console.error("Error updating user role:", err);
//         alert("An error occurred while updating user role.");
//       }
//     };
  
//     const deleteUser = async (userId) => {
//       const jwt_token = Cookies.get("jwt_token");
  
//       try {
//         const response = await axios.delete(
//           `http://localhost:3500/admin/users/${userId}`,
//           {
//             headers: { Authorization: `Bearer ${jwt_token}` },
//           }
//         );
  
//         if (response.data.success) { alert("User deleted successfully."); setUsers((prevUsers) => prevUsers.filter((user) => user.user_id !== userId)); } else { alert(response.data.message || "Failed to delete user."); } } catch (err) { console.error("Error deleting user:", err); alert("An error occurred while deleting user."); } };

//             if (loading) return <div>Loading users...</div>; if (error) return <div>Error: {error}</div>;

//   return (
//     <div className="card mb-3">
//       <DataTable
//         title="User Management"
//         columns={userColumns}
//         data={users}
//         defaultSortField="user_id"
//         pagination
//         subHeader
//         selectableRows={false}
//         className="table myDataTable table-hover align-middle mb-0 d-row nowrap dataTable no-footer dtr-inline"
//         highlightOnHover={true}
//       />
//     </div>
//   );
// }

// export default UserManagementPage;