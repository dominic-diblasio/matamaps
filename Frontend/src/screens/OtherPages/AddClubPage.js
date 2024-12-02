import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

function AddClubPage() {
  const [clubName, setClubName] = useState("");
  const [description, setDescription] = useState("");
  const [clubRules, setClubRules] = useState("");
  const [logoUrl, setLogoUrl] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const handleAddClub = async (e) => {
    e.preventDefault();
    const jwt_token = Cookies.get("jwt_token");

    if (!jwt_token) {
      setError("You must be logged in to add a club.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3500/admin/clubs/add",
        {
          club_name: clubName,
          description,
          club_rules: clubRules,
          logo: logoUrl,
          image: imageUrl,
        },
        {
          headers: {
            Authorization: `Bearer ${jwt_token}`,
          },
        }
      );

      if (response.data.success) {
        setSuccessMessage("Club added successfully!");
        setClubName("");
        setDescription("");
        setClubRules("");
        setLogoUrl("");
        setImageUrl("");
      } else {
        setError(response.data.message || "Failed to add club.");
      }
    } catch (err) {
      console.error("Error adding club:", err);
      setError("An error occurred while adding the club.");
    }
  };

  return (
    <div className="container my-4">
      <h2 className="text-center">Add New Club</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      {successMessage && <div className="alert alert-success">{successMessage}</div>}
      <form onSubmit={handleAddClub}>
        <div className="mb-3">
          <label className="form-label">Club Name</label>
          <input
            type="text"
            className="form-control"
            value={clubName}
            onChange={(e) => setClubName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Club Rules</label>
          <textarea
            className="form-control"
            value={clubRules}
            onChange={(e) => setClubRules(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Logo URL</label>
          <input
            type="url"
            className="form-control"
            value={logoUrl}
            onChange={(e) => setLogoUrl(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Image URL</label>
          <input
            type="url"
            className="form-control"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Club
        </button>
      </form>
    </div>
  );
}

export default AddClubPage;
// import React, { useState } from "react";
// import axios from "axios";
// import Cookies from "js-cookie";

// function AddClubPage() {
//   const [clubName, setClubName] = useState("");
//   const [description, setDescription] = useState("");
//   const [clubRules, setClubRules] = useState("");
//   const [logo, setLogo] = useState(null);
//   const [image, setImage] = useState(null);
//   const [error, setError] = useState(null);
//   const [successMessage, setSuccessMessage] = useState("");

//   const handleAddClub = async (e) => {
//     e.preventDefault();
//     const jwt_token = Cookies.get("jwt_token");

//     if (!jwt_token) {
//       setError("You must be logged in to add a club.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("club_name", clubName);
//     formData.append("description", description);
//     formData.append("club_rules", clubRules);
//     if (logo) formData.append("logo", logo);
//     if (image) formData.append("image", image);

//     try {
//       const response = await axios.post("http://localhost:3500/admin/clubs/add", formData, {
//         headers: {
//           Authorization: `Bearer ${jwt_token}`,
//           "Content-Type": "multipart/form-data",
//         },
//       });

//       if (response.data.success) {
//         setSuccessMessage("Club added successfully!");
//         setClubName("");
//         setDescription("");
//         setClubRules("");
//         setLogo(null);
//         setImage(null);
//       } else {
//         setError(response.data.message || "Failed to add club.");
//       }
//     } catch (err) {
//       console.error("Error adding club:", err);
//       setError("An error occurred while adding the club.");
//     }
//   };

//   return (
//     <div className="container my-4">
//       <h2 className="text-center">Add New Club</h2>
//       {error && <div className="alert alert-danger">{error}</div>}
//       {successMessage && <div className="alert alert-success">{successMessage}</div>}
//       <form onSubmit={handleAddClub}>
//         <div className="mb-3">
//           <label className="form-label">Club Name</label>
//           <input
//             type="text"
//             className="form-control"
//             value={clubName}
//             onChange={(e) => setClubName(e.target.value)}
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Description</label>
//           <textarea
//             className="form-control"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             required
//           ></textarea>
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Club Rules</label>
//           <textarea
//             className="form-control"
//             value={clubRules}
//             onChange={(e) => setClubRules(e.target.value)}
//           ></textarea>
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Logo</label>
//           <input
//             type="file"
//             className="form-control"
//             onChange={(e) => setLogo(e.target.files[0])}
//           />
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Image</label>
//           <input
//             type="file"
//             className="form-control"
//             onChange={(e) => setImage(e.target.files[0])}
//           />
//         </div>
//         <button type="submit" className="btn btn-primary">
//           Add Club
//         </button>
//       </form>
//     </div>
//   );
// }

// export default AddClubPage;