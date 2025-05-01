// PersonalDetailsPage.js
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import APIClient from "./APIClient";
import "./PersonalDetailsPage.css";

function PersonalDetailsPage() {
  const [activeTab, setActiveTab] = useState("profile");
  const [profile, setProfile] = useState({ username: "", firstName: "", lastName: "" });
  const [contact, setContact] = useState({ email: "" });
  const [isEditable, setIsEditable] = useState({ username: false, firstName: false, lastName: false });

  // — Interests state
  const [allKeywords, setAllKeywords] = useState({});    // { category: [ {keyword_id, keyword} ] }
  const [userKeywords, setUserKeywords] = useState([]);  // [ { keyword_id, keyword, category } ]
  const [selectedCategory, setSelectedCategory] = useState("");

  // Fetch profile/contact + interests + all keywords
  useEffect(() => {
    const jwt = Cookies.get("jwt_token");
    if (!jwt) return;

    const p1 = APIClient.get("users/account/details", {
      headers: { Authorization: `Bearer ${jwt}` },
      withCredentials: true,
    });
    const p2 = APIClient.get("users/interests/user", {
      headers: { Authorization: `Bearer ${jwt}` },
      withCredentials: true,
    });
    const p3 = APIClient.get("users/interests/all", {
      headers: { Authorization: `Bearer ${jwt}` },
      withCredentials: true,
    });

    Promise.all([p1, p2, p3])
      .then(([profRes, userRes, allRes]) => {
        // Profile
        if (profRes.data.success) {
          const d = profRes.data.data;
          setProfile({ username: d.username, firstName: d.first_name, lastName: d.last_name });
          setContact({ email: d.email });
        }
        // User’s interests
        if (userRes.data.success) {
          setUserKeywords(userRes.data.data);
        }
        // All keywords by category
        if (allRes.data.success) {
          setAllKeywords(allRes.data.data);
          // default to first category
          const cats = Object.keys(allRes.data.data);
          if (cats.length) setSelectedCategory(cats[0]);
        }
      })
      .catch((err) => {
        console.error("Error fetching profile or keywords:", err);
      });
  }, []);

  // Toggle edit mode (profile)
  const toggleEdit = (field) => {
    setIsEditable((prev) => ({ ...prev, [field]: !prev[field] }));
  };
  const onChangeProfile = (fld, val) => {
    setProfile((p) => ({ ...p, [fld]: val }));
  };
  const saveProfile = () => {
    const jwt = Cookies.get("jwt_token");
    APIClient.put(
      "users/account/update",
      {
        username: profile.username,
        first_name: profile.firstName,
        last_name: profile.lastName,
        email: contact.email,
      },
      {
        headers: { Authorization: `Bearer ${jwt}` },
        withCredentials: true,
      }
    )
      .then((res) => {
        if (res.data.success) alert("Details saved");
        else alert("Save failed");
      })
      .catch((err) => {
        console.error(err);
        alert("Save error");
      });
  };

  // Add or remove an interest
  const toggleKeyword = async (kwId) => {
    const jwt = Cookies.get("jwt_token");
    const already = userKeywords.some((k) => k.keyword_id === kwId);
    try {
      if (already) {
        await APIClient.delete(
          "users/interests/remove",
          {
            headers: { Authorization: `Bearer ${jwt}` },
            withCredentials: true,
            data: { keyword_id: kwId },
          }
        );
      } else {
        await APIClient.post(
          "users/interests/add",
          { keyword_id: kwId },
          {
            headers: { Authorization: `Bearer ${jwt}` },
            withCredentials: true,
          }
        );
      }
      // refresh interests
      const r = await APIClient.get("users/interests/user", {
        headers: { Authorization: `Bearer ${jwt}` },
        withCredentials: true,
      });
      if (r.data.success) setUserKeywords(r.data.data);
    } catch (err) {
      console.error("Error toggling interest:", err);
    }
  };

  // --- Renderers ---
  const renderProfileTab = () => (
    <div className="tab-content">
      {["username", "firstName", "lastName"].map((f) => (
        <div key={f} className="form-row">
          <label>
            {f === "firstName" ? "First Name" : f === "lastName" ? "Last Name" : "Username"}:
          </label>
          <input
            type="text"
            value={profile[f]}
            readOnly={!isEditable[f]}
            onChange={(e) => onChangeProfile(f, e.target.value)}
          />
          <button className="edit-btn" onClick={() => toggleEdit(f)}>
            {isEditable[f] ? "Save" : "✏️"}
          </button>
        </div>
      ))}
      {Object.values(isEditable).some(Boolean) && (
        <button className="save-btn" onClick={saveProfile}>
          Save All Changes
        </button>
      )}
    </div>
  );

  const renderContactTab = () => (
    <div className="tab-content">
      <div className="form-row">
        <label>Email:</label>
        <input type="email" value={contact.email} readOnly />
      </div>
    </div>
  );

  const renderInterestsTab = () => {
    // keywords in selected category not already added
    const available = allKeywords[selectedCategory]?.filter(
      (kw) => !userKeywords.some((u) => u.keyword_id === kw.keyword_id)
    ) || [];

    return (
      <div className="tab-content">
        {/* 1) User’s current interests */}
        <div className="keyword-category">
          <h5>Your Interests</h5>
          <div className="keyword-list">
            {userKeywords.map((kw) => (
              <span key={kw.keyword_id} className="keyword-pill">
                {kw.keyword}
                <button onClick={() => toggleKeyword(kw.keyword_id)}>×</button>
              </span>
            ))}
            {userKeywords.length === 0 && <em>No interests yet.</em>}
          </div>
        </div>

        {/* 2) Category dropdown */}
        <div className="form-row">
          <label>Category:</label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {Object.keys(allKeywords).map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* 3) Available keywords in that category */}
        <div className="keyword-category">
          <h5>Available Keywords</h5>
          <div className="keyword-list">
            {available.map((kw) => (
              <button
                key={kw.keyword_id}
                className="keyword-btn"
                onClick={() => toggleKeyword(kw.keyword_id)}
              >
                + {kw.keyword}
              </button>
            ))}
            {available.length === 0 && <em>All done in this category!</em>}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container mm-background-transparent">
      <div className="personal-details-page">
        <div className="tabs">
          <button
            className={activeTab === "profile" ? "active" : ""}
            onClick={() => setActiveTab("profile")}
          >
            Profile
          </button>
          <button
            className={activeTab === "contact" ? "active" : ""}
            onClick={() => setActiveTab("contact")}
          >
            Contact
          </button>
          <button
            className={activeTab === "interests" ? "active" : ""}
            onClick={() => setActiveTab("interests")}
          >
            Interests
          </button>
        </div>

        <div className="last-updated">Last Updated At: 06-AUG-2024 09:30 PM PT</div>

        {activeTab === "profile" && renderProfileTab()}
        {activeTab === "contact" && renderContactTab()}
        {activeTab === "interests" && renderInterestsTab()}
      </div>
    </div>
  );
}

export default PersonalDetailsPage;


// import React, { useState, useEffect } from "react";
// import Cookies from "js-cookie";
// import './PersonalDetailsPage.css';
// import APIClient from "./APIClient";

// function PersonalDetailsPage() {
//   const [activeTab, setActiveTab] = useState('profile');
//   const [errors, setErrors] = useState({});
//   const [profile, setProfile] = useState({
//     lastName: '',
//     firstName: '',
//     username: '',
//   });

//   const [contact, setContact] = useState({
//     email: ''
//   });

//   const [isEditable, setIsEditable] = useState({
//     username: false,
//     lastName: false,
//     firstName: false,
//   });

//   useEffect(() => {
//     const fetchData = async () => {
//       const jwt_token = Cookies.get("jwt_token");
//       const session_id = Cookies.get("session_id");

//       if (jwt_token) {
//         try {
//           const response = await APIClient.get(`users/account/details`, {
//             headers: {
//               Authorization: `Bearer ${jwt_token}`,
//             },
//             withCredentials: true,
//           });

//           if (response.data.success) {
//             const data = response.data.data;
//             setProfile({
//               lastName: data.last_name,
//               firstName: data.first_name,
//               username: data.username,
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

//   const handleInputChange = (field, value) => {
//     setProfile((prevProfile) => ({
//       ...prevProfile,
//       [field]: value,
//     }));
//   };

//   const toggleEdit = (field) => {
//     setIsEditable((prevEditable) => ({
//       ...prevEditable,
//       [field]: !prevEditable[field],
//     }));
//   };

//   const saveDetails = async () => {
//     const jwt_token = Cookies.get("jwt_token");
//     const session_id = Cookies.get("session_id");
  
//     const payload = {
//       username: profile.username,
//       first_name: profile.firstName,
//       last_name: profile.lastName,
//       email: contact.email, // Email is read-only, still included to match the backend.
//     };
  
//     console.log('Sending update request with payload:', payload);
  
//     try {
//       const response = await APIClient.put(
//         `users/account/update`,
//         payload,
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
  

//   const renderTabContent = () => {
//     switch (activeTab) {
//       case 'profile':
//         return (
//           <div className="tab-content mm-background-solid">
//             <div className="form-row">
//               <label>Username:</label>
//               <input
//                 type="text"
//                 value={profile.username}
//                 onChange={(e) => handleInputChange('username', e.target.value)}
//                 readOnly={!isEditable.username}
//               />
//               <button className="edit-btn" onClick={() => toggleEdit('username')}>
//                 {isEditable.username ? 'Save' : '✏️'}
//               </button>
//             </div>
//             <div className="form-row">
//               <label>Last Name:</label>
//               <input
//                 type="text"
//                 value={profile.lastName}
//                 onChange={(e) => handleInputChange('lastName', e.target.value)}
//                 readOnly={!isEditable.lastName}
//               />
//               <button className="edit-btn" onClick={() => toggleEdit('lastName')}>
//                 {isEditable.lastName ? 'Save' : '✏️'}
//               </button>
//             </div>
//             <div className="form-row">
//               <label>First Name:</label>
//               <input
//                 type="text"
//                 value={profile.firstName}
//                 onChange={(e) => handleInputChange('firstName', e.target.value)}
//                 readOnly={!isEditable.firstName}
//               />
//               <button className="edit-btn" onClick={() => toggleEdit('firstName')}>
//                 {isEditable.firstName ? 'Save' : '✏️'}
//               </button>
//             </div>
//             {Object.values(isEditable).some((editable) => editable) && (
//               <button className="btn btn-primary" onClick={saveDetails}>
//                 Save All Changes
//               </button>
//             )}
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
//                 readOnly
//               />
//             </div>
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="container mm-background-transparent">
//       <div className="personal-details-page">
//         <div className="tabs">
//           <button className={activeTab === 'profile' ? 'active' : ''} onClick={() => setActiveTab('profile')}>
//             Profile
//           </button>
//           <button className={activeTab === 'contact' ? 'active' : ''} onClick={() => setActiveTab('contact')}>
//             Contact
//           </button>
//         </div>
//         <div className="last-updated">Last Updated At: 06-AUG-2024 09:30:24 PM PT</div>
//         {renderTabContent()}
//       </div>
//     </div>
//   );
// }

// export default PersonalDetailsPage;