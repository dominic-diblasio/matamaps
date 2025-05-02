// src/PersonalDetailsPage.js
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import APIClient from "./APIClient";
import MMKeywordForm from "./MMKeywordForm";
import "./PersonalDetailsPage.css";

function PersonalDetailsPage() {
  const [activeTab, setActiveTab] = useState("profile");
  const [profile, setProfile] = useState({
    username: "",
    firstName: "",
    lastName: "",
    major: "",            // ← new field
  });
  const [contact, setContact] = useState({ email: "" });
  const [isEditable, setIsEditable] = useState({
    username: false,
    firstName: false,
    lastName: false,
  });

  // Fetch profile + major
  useEffect(() => {
    const jwt = Cookies.get("jwt_token");
    if (!jwt) return;

    APIClient.get("users/account/details", {
      headers: { Authorization: `Bearer ${jwt}` },
      withCredentials: true,
    })
      .then((res) => {
        console.log(res.data.data.major); // should now be the text of the major

        if (res.data.success) {
          const d = res.data.data;
          setProfile({
            username: d.username,
            firstName: d.first_name,
            lastName: d.last_name,
            major: d.major || "",        // ← grab the returned major
          });
          setContact({ email: d.email });
        }
      })
      .catch((err) => console.error("Error loading profile:", err));
  }, []);

  const toggleEdit = (field) =>
    setIsEditable((e) => ({ ...e, [field]: !e[field] }));

  const onChangeProfile = (field, value) =>
    setProfile((p) => ({ ...p, [field]: value }));

  const saveProfile = () => {
    const jwt = Cookies.get("jwt_token");
    APIClient.put(
      "users/account/update",
      {
        username: profile.username,
        first_name: profile.firstName,
        last_name: profile.lastName,
        email: contact.email,
        major: profile.major,         // ← include it if your backend supports updating it
      },
      {
        headers: { Authorization: `Bearer ${jwt}` },
        withCredentials: true,
      }
    )
      .then((res) => {
        if (res.data.success) alert("Details saved.");
        else alert("Save failed.");
      })
      .catch((err) => {
        console.error("Error saving profile:", err);
        alert("Error saving details.");
      });
  };

  const renderProfileTab = () => (
    <div className="tab-content">
      {/* Major (read-only) with an info button */}
    <div className="form-row">
      <label>Major:</label>
      <input
        type="text"
        value={profile.major || "— none selected —"}
        readOnly
      />
      <button
    className="edit-btn"        // ← same class as your ✏️ buttons
    type="button"
    onClick={() =>
      alert(
        "Changing your major requires departmental approval.\nPlease contact the Registrar’s Office to submit a change request."
      )
    }
  >
    ℹ️                         
  </button>
    </div>

      {["username", "firstName", "lastName"].map((f) => (
        <div key={f} className="form-row">
          <label>
            {f === "firstName"
              ? "First Name"
              : f === "lastName"
              ? "Last Name"
              : "Username"}
            :
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

        <div className="last-updated">
          Last Updated At: 06-AUG-2024 09:30 PM PT
        </div>

        {activeTab === "profile" && renderProfileTab()}
        {activeTab === "contact" && renderContactTab()}
        {activeTab === "interests" && <MMKeywordForm />}
      </div>
    </div>
  );
}

export default PersonalDetailsPage;
// // src/PersonalDetailsPage.js
// import React, { useState, useEffect } from "react";
// import Cookies from "js-cookie";
// import APIClient from "./APIClient";
// import MMKeywordForm from "./MMKeywordForm";
// import "./PersonalDetailsPage.css";

// function PersonalDetailsPage() {
//   const [activeTab, setActiveTab] = useState("profile");
//   const [profile, setProfile] = useState({
//     username: "",
//     firstName: "",
//     lastName: "",
//   });
//   const [contact, setContact] = useState({ email: "" });
//   const [isEditable, setIsEditable] = useState({
//     username: false,
//     firstName: false,
//     lastName: false,
//   });

//   // Fetch only profile & contact here
//   useEffect(() => {
//     const jwt = Cookies.get("jwt_token");
//     if (!jwt) return;

//     APIClient.get("users/account/details", {
//       headers: { Authorization: `Bearer ${jwt}` },
//       withCredentials: true,
//     })
//       .then((res) => {
//         if (res.data.success) {
//           const d = res.data.data;
//           setProfile({
//             username: d.username,
//             firstName: d.first_name,
//             lastName: d.last_name,
//           });
//           setContact({ email: d.email });
//         }
//       })
//       .catch((err) => console.error("Error loading profile:", err));
//   }, []);

//   const toggleEdit = (field) =>
//     setIsEditable((e) => ({ ...e, [field]: !e[field] }));

//   const onChangeProfile = (field, value) =>
//     setProfile((p) => ({ ...p, [field]: value }));

//   const saveProfile = () => {
//     const jwt = Cookies.get("jwt_token");
//     APIClient.put(
//       "users/account/update",
//       {
//         username: profile.username,
//         first_name: profile.firstName,
//         last_name: profile.lastName,
//         email: contact.email,
//       },
//       {
//         headers: { Authorization: `Bearer ${jwt}` },
//         withCredentials: true,
//       }
//     )
//       .then((res) => {
//         if (res.data.success) alert("Details saved.");
//         else alert("Save failed.");
//       })
//       .catch((err) => {
//         console.error("Error saving profile:", err);
//         alert("Error saving details.");
//       });
//   };

//   const renderProfileTab = () => (
//     <div className="tab-content">
//       {["username", "firstName", "lastName"].map((f) => (
//         <div key={f} className="form-row">
//           <label>
//             {f === "firstName"
//               ? "First Name"
//               : f === "lastName"
//               ? "Last Name"
//               : "Username"}
//             :
//           </label>
//           <input
//             type="text"
//             value={profile[f]}
//             readOnly={!isEditable[f]}
//             onChange={(e) => onChangeProfile(f, e.target.value)}
//           />
//           <button className="edit-btn" onClick={() => toggleEdit(f)}>
//             {isEditable[f] ? "Save" : "✏️"}
//           </button>
//         </div>
//       ))}
//       {Object.values(isEditable).some(Boolean) && (
//         <button className="save-btn" onClick={saveProfile}>
//           Save All Changes
//         </button>
//       )}
//     </div>
//   );

//   const renderContactTab = () => (
//     <div className="tab-content">
//       <div className="form-row">
//         <label>Email:</label>
//         <input type="email" value={contact.email} readOnly />
//       </div>
//     </div>
//   );

//   return (
//     <div className="container mm-background-transparent">
//       <div className="personal-details-page">
//         {/* Tabs */}
//         <div className="tabs">
//           <button
//             className={activeTab === "profile" ? "active" : ""}
//             onClick={() => setActiveTab("profile")}
//           >
//             Profile
//           </button>
//           <button
//             className={activeTab === "contact" ? "active" : ""}
//             onClick={() => setActiveTab("contact")}
//           >
//             Contact
//           </button>
//           <button
//             className={activeTab === "interests" ? "active" : ""}
//             onClick={() => setActiveTab("interests")}
//           >
//             Interests
//           </button>
//         </div>

//         <div className="last-updated">
//           Last Updated At: 06-AUG-2024 09:30 PM PT
//         </div>

//         {/* Conditionally render each tab’s content */}
//         {activeTab === "profile" && renderProfileTab()}
//         {activeTab === "contact" && renderContactTab()}
//         {activeTab === "interests" && <MMKeywordForm />}
//       </div>
//     </div>
//   );
// }

// export default PersonalDetailsPage;