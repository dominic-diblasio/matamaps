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
  });

  const [contact, setContact] = useState({
    email: ''
  });
  const [isEditable, setIsEditable] = useState({
    lastName: false,
    firstName: false,
    email: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      const jwt_token = Cookies.get("jwt_token");
      const session_id = Cookies.get("session_id");

      if (jwt_token) {
        try {
          const response = await axios.get(`http://localhost:3500/employee/personal/details/display/${session_id}`, {
            headers: {
              Authorization: `Bearer ${jwt_token}`,
            },
            withCredentials: true,
          });

          if (response.data.success) {
            const data = response.data.data;
            setProfile({
              lastName: data.lastName,
              firstName: data.firstName,
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

  const handleInputChange = (section, field, value) => {
    if (section === 'profile') {
      setProfile((prevProfile) => ({
        ...prevProfile,
        [field]: value
      }));
    }  else if (section === 'contact') {
      setContact((prevContact) => ({
        ...prevContact,
        [field]: value
      }));
    }
  };

  const saveDetails = async () => {
    const jwt_token = Cookies.get("jwt_token");
    const session_id = Cookies.get("session_id");
  
    try {
      const response = await axios.post(
        `http://0.0.0.0:3500/employee/personal/details/edit/save/${session_id}`,
        {
          profile: {
            firstName: profile.firstName,
            lastName: profile.lastName,
          },
          contact: {
            email: contact.email,
          },
        },
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
  

  const toggleEdit = (field) => {
    if (isEditable[field]) {
      // If toggling off edit mode, save the changes
      if (validateFields()) {
        saveDetails();
      } else {
        return; // Don't toggle if validation fails
      }
    }

    setIsEditable((prev) => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  const validateFields = () => {
    const newErrors = {};
    const namePattern = /^[A-Za-z\s]+$/;

    if (!profile.lastName) {
      newErrors.lastName = 'Last name is required';
    } else if (!namePattern.test(profile.lastName)) {
      newErrors.lastName = 'Last name cannot contain numbers or special characters';
    }

    if (!profile.firstName) {
      newErrors.firstName = 'First name is required';
    } else if (!namePattern.test(profile.firstName)) {
      newErrors.firstName = 'First name cannot contain numbers or special characters';
    }

    if (!contact.email) {
      newErrors.email = 'Email is required';
    } else {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(contact.email)) {
        newErrors.email = 'Please enter a valid email address';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div className="tab-content">
            <div className="form-row">
              <label>Last Name:</label>
              <input
                type="text"
                value={profile.lastName}
                onChange={(e) => handleInputChange('profile', 'lastName', e.target.value)}
                readOnly={!isEditable.lastName}
              />
              {errors.lastName && <span className="error">{errors.lastName}</span>}
              <button className="edit-btn" onClick={() => toggleEdit('lastName')}>
                {isEditable.lastName ? 'Save' : '✏️'}
              </button>
            </div>
            <div className="form-row">
              <label>First Name:</label>
              <input
                type="text"
                value={profile.firstName}
                onChange={(e) => handleInputChange('profile', 'firstName', e.target.value)}
                readOnly={!isEditable.firstName}
              />
              {errors.firstName && <span className="error">{errors.firstName}</span>}
              <button className="edit-btn" onClick={() => toggleEdit('firstName')}>
                {isEditable.firstName ? 'Save' : '✏️'}
              </button>
            </div>
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
                onChange={(e) => handleInputChange('contact', 'email', e.target.value)}
                readOnly={!isEditable.email}
              />
              {errors.email && <span className="error">{errors.email}</span>}
              <button className="edit-btn" onClick={() => toggleEdit('email')}>
                {isEditable.email ? 'Save' : '✏️'}
              </button>
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
//     middleName: '',
//     otherLastNames: '',
//     dob: '',
//     ssn: ''
//   });
//   const [address, setAddress] = useState({
//     address: '',
//     aptNo: '',
//     city: '',
//     state: '',
//     country: 'Country'
//   });
//   const [contact, setContact] = useState({
//     email: '',
//     phone: ''
//   });
//   const [isEditable, setIsEditable] = useState({
//     lastName: false,
//     firstName: false,
//     middleName: false,
//     otherLastNames: false,
//     dob: false,
//     ssn: false,
//     address: false,
//     aptNo: false,
//     city: false,
//     state: false,
//     country: false,
//     email: false,
//     phone: false
//   });

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     const month = String(date.getMonth() + 1).padStart(2, '0');
//     const day = String(date.getDate()).padStart(2, '0');
//     const year = date.getFullYear();
//     return `${month}/${day}/${year}`;
//   };

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
//               middleName: '',
//               otherLastNames: '',
//               dob: data.birthDate ? formatDate(data.birthDate) : '',
//               ssn: data.ssn
//             });

//             setAddress({
//               address: data.address,
//               aptNo: '',
//               city: data.city,
//               state: data.state,
//               country: data.country || 'Country'
//             });

//             setContact({
//               email: data.email,
//               phone: data.phone_number
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
//     } else if (section === 'address') {
//       setAddress((prevAddress) => ({
//         ...prevAddress,
//         [field]: value
//       }));
//     } else if (section === 'contact') {
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
//             middleName: profile.middleName,
//             otherLastNames: profile.otherLastNames,
//             dob: profile.dob,
//             ssn: profile.ssn,
//           },
//           address: {
//             address: address.address,
//             aptNo: address.aptNo,
//             city: address.city,
//             state: address.state,
//             country: address.country,
//             zip: address.zip,
//           },
//           contact: {
//             email: contact.email,
//             phone: contact.phone,
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
//     const phonePattern = /^\+?(\d{1,3})?[-.\s]?(\(?\d{3}\)?)[-.\s]?\d{3}[-.\s]?\d{4}$/;

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

//     if (!address.address) newErrors.address = 'Address is required';
//     if (!address.city) newErrors.city = 'City is required';
//     if (!address.state) newErrors.state = 'State is required';
//     if (!address.country) newErrors.country = 'Country is required';

//     if (!contact.email) {
//       newErrors.email = 'Email is required';
//     } else {
//       const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//       if (!emailPattern.test(contact.email)) {
//         newErrors.email = 'Please enter a valid email address';
//       }
//     }

//     if (!contact.phone) {
//       newErrors.phone = 'Phone number is required';
//     } else if (!phonePattern.test(contact.phone)) {
//       newErrors.phone = 'Please enter a valid phone number';
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
//             <div className="form-row">
//               <label>Middle Name:</label>
//               <input
//                 type="text"
//                 value={profile.middleName}
//                 onChange={(e) => handleInputChange('profile', 'middleName', e.target.value)}
//                 readOnly={!isEditable.middleName}
//               />
//               <button className="edit-btn" onClick={() => toggleEdit('middleName')}>
//                 {isEditable.middleName ? 'Save' : '✏️'}
//               </button>
//             </div>
//             <div className="form-row">
//               <label>Other Last Names:</label>
//               <input
//                 type="text"
//                 value={profile.otherLastNames}
//                 onChange={(e) => handleInputChange('profile', 'otherLastNames', e.target.value)}
//                 readOnly={!isEditable.otherLastNames}
//               />
//               <button className="edit-btn" onClick={() => toggleEdit('otherLastNames')}>
//                 {isEditable.otherLastNames ? 'Save' : '✏️'}
//               </button>
//             </div>
//             <div className="form-row">
//               <label>Date of Birth:</label>
//               <input
//                 type="text"
//                 placeholder="MM/DD/YYYY"
//                 value={profile.dob}
//                 readOnly
//               />
//             </div>
//             <div className="form-row">
//               <label>U.S SSN:</label>
//               <input
//                 type="text"
//                 placeholder="000-00-0000"
//                 value={profile.ssn}
//                 readOnly
//               />
//             </div>
//           </div>
//         );
//       case 'address':
//         return (
//           <div className="tab-content">
//             <div className="form-row">
//               <label>Address:</label>
//               <input
//                 type="text"
//                 value={address.address}
//                 onChange={(e) => handleInputChange('address', 'address', e.target.value)}
//                 readOnly={!isEditable.address}
//               />
//               {errors.address && <span className="error">{errors.address}</span>}
//               <button className="edit-btn" onClick={() => toggleEdit('address')}>
//                 {isEditable.address ? 'Save' : '✏️'}
//               </button>
//             </div>
//             <div className="form-row">
//               <label>Apt No:</label>
//               <input
//                 type="text"
//                 value={address.aptNo}
//                 onChange={(e) => handleInputChange('address', 'aptNo', e.target.value)}
//                 readOnly={!isEditable.aptNo}
//               />
//               {errors.aptNo && <span className="error">{errors.aptNo}</span>}
//               <button className="edit-btn" onClick={() => toggleEdit('aptNo')}>
//                 {isEditable.aptNo ? 'Save' : '✏️'}
//               </button>
//             </div>
//             <div className="form-row">
//               <label>City:</label>
//               <input
//                 type="text"
//                 value={address.city}
//                 onChange={(e) => handleInputChange('address', 'city', e.target.value)}
//                 readOnly={!isEditable.city}
//               />
//               {errors.city && <span className="error">{errors.city}</span>}
//               <button className="edit-btn" onClick={() => toggleEdit('city')}>
//                 {isEditable.city ? 'Save' : '✏️'}
//               </button>
//             </div>
//             <div className="form-row">
//               <label>State:</label>
//               <input
//                 type="text"
//                 value={address.state}
//                 onChange={(e) => handleInputChange('address', 'state', e.target.value)}
//                 readOnly={!isEditable.state}
//               />
//               {errors.state && <span className="error">{errors.state}</span>}
//               <button className="edit-btn" onClick={() => toggleEdit('state')}>
//                 {isEditable.state ? 'Save' : '✏️'}
//               </button>
//             </div>
//             <div className="form-row">
//               <label>Country:</label>
//               {isEditable.country ? (
//                 <select
//                   value={address.country}
//                   onChange={(e) => handleInputChange('address', 'country', e.target.value)}
//                 >
//                   <option value="Country">Country</option>
//                   <option value="USA">USA</option>
//                   <option value="India">India</option>
//                   <option value="Canada">Canada</option>
//                   <option value="United Kingdom">United Kingdom</option>
//                   {/* Add other countries as needed */}
//                 </select>
//               ) : (
//                 <input type="text" value={address.country} readOnly />
//               )}
//               {errors.country && <span className="error">{errors.country}</span>}
//               <button className="edit-btn" onClick={() => toggleEdit('country')}>
//                 {isEditable.country ? 'Save' : '✏️'}
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
//             <div className="form-row">
//               <label>Phone Number:</label>
//               <input
//                 type="phone"
//                 placeholder="+1 000-000-0000"
//                 value={contact.phone}
//                 onChange={(e) => handleInputChange('contact', 'phone', e.target.value)}
//                 readOnly={!isEditable.phone}
//               />
//               {errors.phone && <span className="error">{errors.phone}</span>}
//               <button className="edit-btn" onClick={() => toggleEdit('phone')}>
//                 {isEditable.phone ? 'Save' : '✏️'}
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
//       <button className={activeTab === 'address' ? 'active' : ''} onClick={() => setActiveTab('address')}>
//         Address
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