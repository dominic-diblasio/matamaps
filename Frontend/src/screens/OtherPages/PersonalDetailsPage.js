import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import './PersonalDetailsPage.css';

function PersonalDetailsPage() {
  const [activeTab, setActiveTab] = useState('profile');
  const [errors, setErrors] = useState({});
  const [profile, setProfile] = useState({
    lastName: '',
    firstName: '',
    username: '',
  });

  const [contact, setContact] = useState({
    email: ''
  });

  const [isEditable, setIsEditable] = useState({
    username: false,
    lastName: false,
    firstName: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      const jwt_token = Cookies.get("jwt_token");
      const session_id = Cookies.get("session_id");

      if (jwt_token) {
        try {
          const response = await axios.get(`http://localhost:3500/users/account/details`, {
            headers: {
              Authorization: `Bearer ${jwt_token}`,
            },
            withCredentials: true,
          });

          if (response.data.success) {
            const data = response.data.data;
            setProfile({
              lastName: data.last_name,
              firstName: data.first_name,
              username: data.username,
            });

            setContact({
              email: data.email,
            });
          } else {
            console.error("Error fetching details:", response.data.message);
          }
        } catch (error) {
          console.error("Error fetching personal details:", error);
          if (error.response && error.response.status === 403) {
            alert("Your session has expired. Please log in again.");
          } else {
            alert("An error occurred while fetching details. Please try again.");
          }
        }
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (field, value) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      [field]: value,
    }));
  };

  const toggleEdit = (field) => {
    setIsEditable((prevEditable) => ({
      ...prevEditable,
      [field]: !prevEditable[field],
    }));
  };

  const saveDetails = async () => {
    const jwt_token = Cookies.get("jwt_token");
    const session_id = Cookies.get("session_id");
  
    const payload = {
      username: profile.username,
      first_name: profile.firstName,
      last_name: profile.lastName,
      email: contact.email, // Email is read-only, still included to match the backend.
    };
  
    console.log('Sending update request with payload:', payload);
  
    try {
      const response = await axios.put(
        `http://localhost:3500/users/account/update`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${jwt_token}`,
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
  
      if (response.data.success) {
        alert("Details saved successfully.");
      } else {
        console.error("Error saving details:", response.data.message);
        alert("Failed to save details. Please try again.");
      }
    } catch (error) {
      console.error("Error saving details:", error);
      alert("An error occurred while saving details.");
    }
  };
  

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div className="tab-content">
            <div className="form-row">
              <label>Username:</label>
              <input
                type="text"
                value={profile.username}
                onChange={(e) => handleInputChange('username', e.target.value)}
                readOnly={!isEditable.username}
              />
              <button className="edit-btn" onClick={() => toggleEdit('username')}>
                {isEditable.username ? 'Save' : '✏️'}
              </button>
            </div>
            <div className="form-row">
              <label>Last Name:</label>
              <input
                type="text"
                value={profile.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                readOnly={!isEditable.lastName}
              />
              <button className="edit-btn" onClick={() => toggleEdit('lastName')}>
                {isEditable.lastName ? 'Save' : '✏️'}
              </button>
            </div>
            <div className="form-row">
              <label>First Name:</label>
              <input
                type="text"
                value={profile.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                readOnly={!isEditable.firstName}
              />
              <button className="edit-btn" onClick={() => toggleEdit('firstName')}>
                {isEditable.firstName ? 'Save' : '✏️'}
              </button>
            </div>
            {Object.values(isEditable).some((editable) => editable) && (
              <button className="btn btn-primary" onClick={saveDetails}>
                Save All Changes
              </button>
            )}
          </div>
        );
      case 'contact':
        return (
          <div className="tab-content">
            <div className="form-row">
              <label>Email:</label>
              <input
                type="email"
                value={contact.email}
                readOnly
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="personal-details-page">
      <div className="tabs">
        <button className={activeTab === 'profile' ? 'active' : ''} onClick={() => setActiveTab('profile')}>
          Profile
        </button>
        <button className={activeTab === 'contact' ? 'active' : ''} onClick={() => setActiveTab('contact')}>
          Contact
        </button>
      </div>
      <div className="last-updated">Last Updated At: 06-AUG-2024 09:30:24 PM PT</div>
      {renderTabContent()}
    </div>
  );
}

export default PersonalDetailsPage;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Cookies from "js-cookie";
// import './PersonalDetailsPage.css';

// function PersonalDetailsPage() {
//   const [activeTab, setActiveTab] = useState('profile');
//   const [errors, setErrors] = useState({});
//   const [profile, setProfile] = useState({
//     lastName: '',
//     firstName: '',
//   });

//   const [contact, setContact] = useState({
//     email: ''
//   });
//   const [isEditable, setIsEditable] = useState({
//     lastName: false,
//     firstName: false,
//     email: false,
//   });

//   useEffect(() => {
//     const fetchData = async () => {
//       const jwt_token = Cookies.get("jwt_token");
//       const session_id = Cookies.get("session_id");

//       if (jwt_token) {
//         try {
//           const response = await axios.get(`http://localhost:3500/employee/personal/details/display/${session_id}`, {
//             headers: {
//               Authorization: `Bearer ${jwt_token}`,
//             },
//             withCredentials: true,
//           });

//           if (response.data.success) {
//             const data = response.data.data;
//             setProfile({
//               lastName: data.lastName,
//               firstName: data.firstName,
//             });

//             setContact({
//               email: data.email,
//             });
//           } else {
//             console.error("Error fetching details:", response.data.message);
//           }
//         } catch (error) {
//           console.error("Error fetching personal details:", error);
//           if (error.response && error.response.status === 403) {
//             alert("Your session has expired. Please log in again.");
//           } else {
//             alert("An error occurred while fetching details. Please try again.");
//           }
//         }
//       }
//     };

//     fetchData();
//   }, []);

//   const handleInputChange = (section, field, value) => {
//     if (section === 'profile') {
//       setProfile((prevProfile) => ({
//         ...prevProfile,
//         [field]: value
//       }));
//     }  else if (section === 'contact') {
//       setContact((prevContact) => ({
//         ...prevContact,
//         [field]: value
//       }));
//     }
//   };

//   const saveDetails = async () => {
//     const jwt_token = Cookies.get("jwt_token");
//     const session_id = Cookies.get("session_id");
  
//     try {
//       const response = await axios.post(
//         `http://0.0.0.0:3500/employee/personal/details/edit/save/${session_id}`,
//         {
//           profile: {
//             firstName: profile.firstName,
//             lastName: profile.lastName,
//           },
//           contact: {
//             email: contact.email,
//           },
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${jwt_token}`,
//             "Content-Type": "application/json",
//           },
//           withCredentials: true,
//         }
//       );
  
//       if (response.data.success) {
//         alert("Details saved successfully.");
//       } else {
//         console.error("Error saving details:", response.data.message);
//         alert("Failed to save details. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error saving details:", error);
//       alert("An error occurred while saving details.");
//     }
//   };
  

//   const toggleEdit = (field) => {
//     if (isEditable[field]) {
//       // If toggling off edit mode, save the changes
//       if (validateFields()) {
//         saveDetails();
//       } else {
//         return; // Don't toggle if validation fails
//       }
//     }

//     setIsEditable((prev) => ({
//       ...prev,
//       [field]: !prev[field]
//     }));
//   };

//   const validateFields = () => {
//     const newErrors = {};
//     const namePattern = /^[A-Za-z\s]+$/;

//     if (!profile.lastName) {
//       newErrors.lastName = 'Last name is required';
//     } else if (!namePattern.test(profile.lastName)) {
//       newErrors.lastName = 'Last name cannot contain numbers or special characters';
//     }

//     if (!profile.firstName) {
//       newErrors.firstName = 'First name is required';
//     } else if (!namePattern.test(profile.firstName)) {
//       newErrors.firstName = 'First name cannot contain numbers or special characters';
//     }

//     if (!contact.email) {
//       newErrors.email = 'Email is required';
//     } else {
//       const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//       if (!emailPattern.test(contact.email)) {
//         newErrors.email = 'Please enter a valid email address';
//       }
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const renderTabContent = () => {
//     switch (activeTab) {
//       case 'profile':
//         return (
//           <div className="tab-content">
//             <div className="form-row">
//               <label>Last Name:</label>
//               <input
//                 type="text"
//                 value={profile.lastName}
//                 onChange={(e) => handleInputChange('profile', 'lastName', e.target.value)}
//                 readOnly={!isEditable.lastName}
//               />
//               {errors.lastName && <span className="error">{errors.lastName}</span>}
//               <button className="edit-btn" onClick={() => toggleEdit('lastName')}>
//                 {isEditable.lastName ? 'Save' : '✏️'}
//               </button>
//             </div>
//             <div className="form-row">
//               <label>First Name:</label>
//               <input
//                 type="text"
//                 value={profile.firstName}
//                 onChange={(e) => handleInputChange('profile', 'firstName', e.target.value)}
//                 readOnly={!isEditable.firstName}
//               />
//               {errors.firstName && <span className="error">{errors.firstName}</span>}
//               <button className="edit-btn" onClick={() => toggleEdit('firstName')}>
//                 {isEditable.firstName ? 'Save' : '✏️'}
//               </button>
//             </div>
//           </div>
//         );
//       case 'contact':
//         return (
//           <div className="tab-content">
//             <div className="form-row">
//               <label>Email:</label>
//               <input
//                 type="email"
//                 value={contact.email}
//                 onChange={(e) => handleInputChange('contact', 'email', e.target.value)}
//                 readOnly={!isEditable.email}
//               />
//               {errors.email && <span className="error">{errors.email}</span>}
//               <button className="edit-btn" onClick={() => toggleEdit('email')}>
//                 {isEditable.email ? 'Save' : '✏️'}
//               </button>
//             </div>
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="personal-details-page">
//     <div className="tabs">
//       <button className={activeTab === 'profile' ? 'active' : ''} onClick={() => setActiveTab('profile')}>
//         Profile
//       </button>
//       <button className={activeTab === 'contact' ? 'active' : ''} onClick={() => setActiveTab('contact')}>
//         Contact
//       </button>
//     </div>
//     <div className="last-updated">Last Updated At: 06-AUG-2024 09:30:24 PM PT</div>
//     {renderTabContent()}
//   </div>
//   );
// }

// export default PersonalDetailsPage;