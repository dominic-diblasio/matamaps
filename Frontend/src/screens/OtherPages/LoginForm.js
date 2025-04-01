import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie"; // Import js-cookie library
import { Link, useNavigate } from "react-router-dom";
import APIClient from "./APIClient";

function LoginForm({ setIsLoggedIn }) {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});
  const [loginMessage, setLoginMessage] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  // Field validation for email format
  const validateField = (name, value) => {
    let error = "";
    if (name === "email") {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        error = "Should be a valid email address";
      }
    }
    return error;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === "email") {
      const error = validateField(name, value);
      setErrors({ ...errors, [name]: error });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailError = validateField("email", formData.email);
    setErrors({ email: emailError });

    if (!emailError) {
      try {
        const response = await APIClient.post(
          `user/login/check`,
          formData,
          { withCredentials: true } // Ensures cookies like JWT and session_id are sent with request
        );

        if (response.data.success) {
          // JWT token and session_id are automatically stored as HttpOnly cookies from the backend.

          // But if you need to use employee_id in frontend, store it using js-cookie
          Cookies.set('role', response.data.data.role, { secure: false });
          Cookies.set('jwt_token', response.data.data.jwt_token, { secure: false });

          setLoginMessage("Login successful!");

          setIsLoggedIn(true); // Update login status
          navigate("/"); // Redirect after login
        } else {
          setLoginMessage(response.data.message || "Login failed. Invalid credentials.");
        }
      } catch (error) {
        setLoginMessage(error.response?.data?.message || "An error occurred while logging in. Please try again.");
      }
    }
  };

  return (
    <div className="card mb-3 mm-dark-bg">
      <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
        <h6 className="mb-0 mm-header">Login:</h6>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="row g-3 align-items-center">
            <div className="col-md-7">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter CSUN Email"
                required
              />
              {errors.email && <div className="text-danger-local">{errors.email}</div>}
            </div>
            <div className="col-md-7">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter Password"
                required
              />
            </div>
          </div>
          {loginMessage && (
            <div className={`mt-3 ${loginMessage.includes("successful") ? "text-success-local" : "text-danger-local"}`}>
              {loginMessage}
            </div>
          )}
          <button type="submit" className="btn btn-primary mt-4">Login</button>
          <div className="mt-3">
            <a href="forgot-password">Forgot Password</a>
            <p className="mt-3">Not Registered? <Link to={`/registration`} className="link">Sign Up Now</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;