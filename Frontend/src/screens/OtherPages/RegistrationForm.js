import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import APIClient from "./APIClient";

function RegistrationForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        confirmEmail: "",
        username: "",
        password: "",
        confirmPassword: "", // Added confirmPassword field
    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate(); // Initialize useNavigate

    const validateField = (name, value) => {
        let error = "";
        switch (name) {
            case "firstName":
            case "lastName":
                if (!/^[a-zA-Z]{2,30}$/.test(value)) {
                    error = "Should be 2-30 characters long and contain only letters";
                }
                break;
            case "email":
                if (!/^[^\s@]+@(my\.csun\.edu|csun\.edu)$/.test(value)) {
                    error = "Email should end with @my.csun.edu or @csun.edu";
                }
                break;
            case "confirmEmail":
                if (value !== formData.email) {
                    error = "Email fields must match";
                }
                break;
            case "username":
                if (!/^[a-zA-Z0-9]{4,20}$/.test(value)) {
                    error = "Username should be 4-20 characters long and contain only letters and numbers";
                }
                break;
            case "password":
                if (value.length < 6) {
                    error = "Password should be at least 6 characters long";
                }
                break;
            case "confirmPassword": // Validate confirmPassword
                if (value !== formData.password) {
                    error = "Passwords must match";
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

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent page reload

        const formErrors = {};
        Object.keys(formData).forEach((key) => {
            const error = validateField(key, formData[key]);
            if (error) formErrors[key] = error;
        });

        setErrors(formErrors);

        if (Object.keys(formErrors).length === 0) {
            try {
                const dataToSend = {
                    username: formData.username,
                    first_name: formData.firstName,
                    last_name: formData.lastName,
                    password: formData.password,
                    confirmPassword: formData.confirmPassword,
                    email: formData.email,
                    role: "user", // Default role as "user"
                };

                const response = await APIClient.post(
                    "register", 
                    dataToSend
                );

                if (response.data.success) {
                    alert("User registration successfully!"); // Success alert
                    navigate("/login"); // Redirect after login

                } else {
                    alert(`Error: ${response.data.message}`); // Backend error message
                }
            } catch (error) {
                if (error.response && error.response.data && error.response.data.message) {
                    alert(`Error: ${error.response.data.message}`);
                } else {
                    alert("An unexpected error occurred. Please try again.");
                }
            }
        }
    };

    return (
        <div className="card mb-3 mm-dark-bg">
            <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                <h6 className="mb-0 fw-bold">Registration Form</h6>
            </div>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="row g-3 align-items-center">
                        <div className="col-md-6">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input type="text" className="form-control" id="username" name="username" value={formData.username} onChange={handleInputChange} required />
                            {errors.username && <div className="text-danger-local">{errors.username}</div>}
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="firstName" className="form-label">First Name</label>
                            <input type="text" className="form-control" id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} required />
                            {errors.firstName && <div className="text-danger-local">{errors.firstName}</div>}
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="lastName" className="form-label">Last Name</label>
                            <input type="text" className="form-control" id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} required />
                            {errors.lastName && <div className="text-danger-local">{errors.lastName}</div>}
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
                            {errors.email && <div className="text-danger-local">{errors.email}</div>}
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="confirmEmail" className="form-label">Confirm Email</label>
                            <input type="email" className="form-control" id="confirmEmail" name="confirmEmail" value={formData.confirmEmail} onChange={handleInputChange} required />
                            {errors.confirmEmail && <div className="text-danger-local">{errors.confirmEmail}</div>}
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleInputChange} required />
                            {errors.password && <div className="text-danger-local">{errors.password}</div>}
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                            <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} required />
                            {errors.confirmPassword && <div className="text-danger-local">{errors.confirmPassword}</div>}
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary mt-3">Submit</button>
                    <p className="mt-3"><Link to={`/login`} className="link">Already Registered? Login Here!</Link></p>
                </form>
            </div>
        </div>
    );
}

export default RegistrationForm;

// import React, { useState } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";


// function RegistrationForm() {
//     const [formData, setFormData] = useState({
//         firstName: "",
//         lastName: "",
//         email: "",
//         confirmEmail:""
//     });

//     const [errors, setErrors] = useState({});

//     const validateField = (name, value) => {
//         let error = "";
//         switch (name) {
//             case "firstName":
//             case "lastName":
//                 if (!/^[a-zA-Z]{2,30}$/.test(value)) {
//                     error = "Should be 2-30 characters long and contain only letters";
//                 }
//                 break;
//             case "email":
//             case "confirmEmail":
//                 if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
//                     error = "Should be a valid email address";
//                 }
//                 break;
//             default:
//                 break;
//         }
//         return error;
//     };

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//         const error = validateField(name, value);
//         setErrors({ ...errors, [name]: error });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault(); // Prevent page reload
    
//         console.log("Form Data Before Submission: ", formData); // Log form data
    
//         const formErrors = {};
//         Object.keys(formData).forEach((key) => {
//             const error = validateField(key, formData[key]);
//             if (error) formErrors[key] = error;
//         });
    
//         if (formData.email !== formData.confirmEmail) {
//             formErrors.confirmEmail = "Email fields must match";
//         }
    
//         setErrors(formErrors);
    
//         if (Object.keys(formErrors).length === 0) {
//             try {
//                 const dataToSend = {
//                     firstName: formData.firstName,
//                     lastName: formData.lastName,
//                     email: formData.email,
//                 };
    
//                 console.log("Sending Data: ", dataToSend); // Log data sent to backend
    
//                 // Send the request using axios
//                 const response = await APIClient.post(
//                     "employee/register", 
//                     dataToSend
//                 );
    
//                 console.log("API Response: ", response.data); // Log API response
    
//                 if (response.data.success) {
//                     alert("Employee registered successfully!"); // Success alert
//                 } else {
//                     alert(`Error: ${response.data.message}`); // Backend error message
//                 }
//             } catch (error) {
//                 console.error("Error during registration: ", error); // Log detailed error
    
//                 // Check if the error response contains a message
//                 if (error.response && error.response.data && error.response.data.message) {
//                     alert(`Error: ${error.response.data.message}`); // Display backend error message
//                 } else {
//                     alert("An unexpected error occurred. Please try again."); // Generic error
//                 }
//             }
//         }
//     };    

//     return (
//         <div className="card mb-3">
//             <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
//                 <h6 className="mb-0 fw-bold">Registration Form</h6>
//             </div>
//             <div className="card-body">
//                 <form onSubmit={handleSubmit}>
//                     <div className="row g-3 align-items-center">
//                         <div className="col-md-6">
//                             <label htmlFor="firstName" className="form-label">First Name</label>
//                             <input type="text" className="form-control" id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} required />
//                             {errors.firstName && <div className="text-danger-local">{errors.firstName}</div>}
//                         </div>
//                         <div className="col-md-6">
//                             <label htmlFor="lastName" className="form-label">Last Name</label>
//                             <input type="text" className="form-control" id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} required />
//                             {errors.lastName && <div className="text-danger-local">{errors.lastName}</div>}
//                         </div>

//                         <div className="col-md-6">
//                             <label className="form-label">Email</label>
//                             <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
//                             {errors.email && <div className="text-danger-local">{errors.email}</div>}
//                         </div>

//                         <div className="col-md-6">
//                             <label className="form-label">Confirm Email</label>
//                             <input type="email" className="form-control" id="confirmEmail" name="confirmEmail" value={formData.confirmEmail} onChange={handleInputChange} required />
//                             {errors.confirmEmail && <div className="text-danger-local">{errors.confirmEmail}</div>}
//                         </div>
//                     </div>

//                     <button type="submit" className="btn btn-primary">Submit</button>

//                     <p><Link to={`/login`} className="link">Already Registered? Login Here!</Link></p>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default RegistrationForm;