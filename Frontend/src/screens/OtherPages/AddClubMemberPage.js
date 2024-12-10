import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import APIClient from "./APIClient";

function AddClubMemberPage() {
  const [clubs, setClubs] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedClub, setSelectedClub] = useState("");
  const [selectedUser, setSelectedUser] = useState("");
  const [role, setRole] = useState("user"); // Default role
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchDropdownData = async () => {
      const jwt_token = Cookies.get("jwt_token");

      if (!jwt_token) {
        setErrorMessage("You must be logged in to add a club member.");
        return;
      }

      try {
        // Fetch clubs
        const clubsResponse = await APIClient.get("admin/clubs", {
          headers: { Authorization: `Bearer ${jwt_token}` },
        });
        if (clubsResponse.data.success) {
          setClubs(clubsResponse.data.data);
        }

        // Fetch users
        const usersResponse = await APIClient.get("admin/users/display", {
          headers: { Authorization: `Bearer ${jwt_token}` },
        });
        if (usersResponse.data.success) {
          setUsers(usersResponse.data.data);
        }
      } catch (err) {
        console.error("Error fetching dropdown data:", err);
        setErrorMessage("An error occurred while fetching dropdown data.");
      }
    };

    fetchDropdownData();
  }, []);

  const handleAddMember = async (e) => {
    e.preventDefault();
    const jwt_token = Cookies.get("jwt_token");

    if (!jwt_token) {
      setErrorMessage("You must be logged in to add a club member.");
      return;
    }

    try {
      const response = await APIClient.post(
        "admin/clubs/add-member",
        {
          club_id: selectedClub,
          club_name: clubs.find((club) => club.club_id === parseInt(selectedClub))?.club_name,
          user_id: selectedUser,
          username: users.find((user) => user.user_id === parseInt(selectedUser))?.username,
          role,
        },
        {
          headers: { Authorization: `Bearer ${jwt_token}` },
        }
      );

      if (response.data.success) {
        setSuccessMessage(response.data.message);
        setErrorMessage("");
        setSelectedClub("");
        setSelectedUser("");
        setRole("user");
      } else {
        setErrorMessage(response.data.message || "Failed to add club member.");
      }
    } catch (err) {
      console.error("Error adding club member:", err);
      setErrorMessage("An error occurred while adding the club member.");
    }
  };

  return (
    <div className="container my-4">
      <h2 className="text-center">Add Club Member</h2>
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
      {successMessage && <div className="alert alert-success">{successMessage}</div>}
      <form onSubmit={handleAddMember}>
        {/* Club Dropdown */}
        <div className="mb-3">
          <label className="form-label">Select Club</label>
          <select
            className="form-select"
            value={selectedClub}
            onChange={(e) => setSelectedClub(e.target.value)}
            required
          >
            <option value="" disabled>
              Select a club
            </option>
            {clubs.map((club) => (
              <option key={club.club_id} value={club.club_id}>
                {club.club_name}
              </option>
            ))}
          </select>
        </div>

        {/* User Dropdown */}
        <div className="mb-3">
          <label className="form-label">Select User</label>
          <select
            className="form-select"
            value={selectedUser}
            onChange={(e) => setSelectedUser(e.target.value)}
            required
          >
            <option value="" disabled>
              Select a user
            </option>
            {users.map((user) => (
              <option key={user.user_id} value={user.user_id}>
                {user.first_name} {user.last_name} ({user.username})
              </option>
            ))}
          </select>
        </div>

        {/* Role Dropdown */}
        <div className="mb-3">
          <label className="form-label">Select Role</label>
          <select
            className="form-select"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="user">User</option>
            <option value="leader">Leader</option>
          </select>
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary">
          Add Member
        </button>
      </form>
    </div>
  );
}

export default AddClubMemberPage;