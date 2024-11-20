import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useParams } from "react-router-dom";

function ManageClubStudentsPage() {
  const { club_id } = useParams(); // Get club_id from the URL
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [statusFilter, setStatusFilter] = useState("all"); // Filter for student status

  useEffect(() => {
    const fetchClubStudents = async () => {
      const jwt_token = Cookies.get("jwt_token");

      if (!jwt_token) {
        setError("You need to log in to manage students.");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(
          `http://localhost:3500/club-leader/students/${club_id}`,
          {
            headers: {
              Authorization: `Bearer ${jwt_token}`,
            },
            withCredentials: true,
          }
        );

        if (response.data.success) {
          setStudents(response.data.data);
        } else {
          setError(response.data.message || "Failed to fetch students.");
        }
      } catch (err) {
        console.error("Error fetching club students:", err);
        setError(err.response?.data?.message || "An error occurred while fetching students.");
      } finally {
        setLoading(false);
      }
    };

    fetchClubStudents();
  }, [club_id]);

  const handleStatusChange = async (id, newStatus) => {
    const jwt_token = Cookies.get("jwt_token");

    try {
      const response = await axios.put(
        `http://localhost:3500/club-leader/students/${id}/status`,
        { status: newStatus },
        {
          headers: {
            Authorization: `Bearer ${jwt_token}`,
          },
          withCredentials: true,
        }
      );

      if (response.data.success) {
        // Update the student's status in the state
        setStudents((prevStudents) =>
          prevStudents.map((student) =>
            student.id === id ? { ...student, status: newStatus } : student
          )
        );
      } else {
        alert(response.data.message || "Failed to update student status.");
      }
    } catch (err) {
      console.error("Error updating student status:", err);
      alert("An error occurred while updating the status.");
    }
  };

  const filteredStudents =
    statusFilter === "all"
      ? students
      : students.filter((student) => student.status === statusFilter);

  if (loading) {
    return <div>Loading students...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container my-4">
      <h2 className="text-center">Manage Club Students</h2>
      <div className="mb-4">
        <label htmlFor="statusFilter" className="form-label">
          Filter by Status:
        </label>
        <select
          id="statusFilter"
          className="form-select"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>
      <div className="row">
        {filteredStudents.length > 0 ? (
          filteredStudents.map((student) => (
            <div key={student.id} className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{student.username}</h5>
                  <p className="card-text">
                    <strong>Student Number:</strong> {student.student_number}
                  </p>
                  <p className="card-text">
                    <strong>Status:</strong> {student.status}
                  </p>
                  <button
                    className="btn btn-success me-2"
                    onClick={() => handleStatusChange(student.id, "active")}
                  >
                    Activate
                  </button>
                  <button
                    className="btn btn-warning me-2"
                    onClick={() => handleStatusChange(student.id, "inactive")}
                  >
                    Deactivate
                  </button>
                  <button
                    className="btn btn-secondary"
                    onClick={() => handleStatusChange(student.id, "pending")}
                  >
                    Set Pending
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No students found for this club.</p>
        )}
      </div>
    </div>
  );
}

export default ManageClubStudentsPage;
