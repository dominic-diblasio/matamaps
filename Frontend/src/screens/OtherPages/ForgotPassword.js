import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import APIClient from "./APIClient";

function ForgotPassword() {
  const [formData, setFormData] = useState({
    email: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [isRecaptchaValid, setIsRecaptchaValid] = useState(true);
  const [serverResponse, setServerResponse] = useState("");

  const validateField = (name, value) => {
    let error = "";
    switch (name) {
      case "email":
        if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value)) {
          error = "Invalid email address";
        }
        break;
      case "newPassword":
        if (value.length < 8) {
          error = "Password should be at least 8 characters long";
        }
        break;
      case "confirmPassword":
        if (value !== formData.newPassword) {
          error = "Passwords do not match";
        }
        break;
      default:
        break;
    }
    return error;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    const error = validateField(name, value);
    setErrors({ ...errors, [name]: error });
  };

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
    setIsRecaptchaValid(!!value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) formErrors[key] = error;
    });

    if (!recaptchaValue) {
      setIsRecaptchaValid(false);
    }

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0 && recaptchaValue) {
      try {
        // Remove dashes from SSN before sending to backend
        const formattedSSN = formData.ssn.replace(/-/g, "");

        console.log("Sending request with the following data:", {
          email: formData.email,
          password: formData.newPassword,
        });

        const response = await APIClient.post("employee/forgot/password", {
          email: formData.email,
          password: formData.newPassword,
        });

        console.log("Server response:", response.data);

        if (response.data.success) {
          setServerResponse("Password successfully updated!");
        } else {
          setServerResponse(`Failed: ${response.data.message}`);
        }
      } catch (error) {
        console.error("Error during password update:", error);
        setServerResponse("Error updating password. Please try again later.");
      }
    }
  };

  return (
    <div className="card mb-3">
      <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
        <h6 className="mb-0 fw-bold">Forgot Password</h6>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="row g-3 align-items-center">
            <div className="col-md-6">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              {errors.email && <div className="text-danger">{errors.email}</div>}
            </div>

            <div className="col-md-6">
              <label htmlFor="newPassword" className="form-label">New Password</label>
              <input
                type="password"
                className="form-control"
                id="newPassword"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleInputChange}
                required
              />
              {errors.newPassword && <div className="text-danger">{errors.newPassword}</div>}
            </div>

            <div className="col-md-6">
              <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
              />
              {errors.confirmPassword && <div className="text-danger">{errors.confirmPassword}</div>}
            </div>

            <div className="col-md-12">
              <ReCAPTCHA
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                onChange={handleRecaptchaChange}
              />
              {!isRecaptchaValid && (
                <div className="text-danger">Please verify you are not a robot</div>
              )}
            </div>
          </div>

          <button type="submit" className="btn btn-primary mt-3">Submit</button>
        </form>

        {serverResponse && (
          <div className="alert alert-info mt-3">{serverResponse}</div>
        )}
      </div>
    </div>
  );
}

export default ForgotPassword;