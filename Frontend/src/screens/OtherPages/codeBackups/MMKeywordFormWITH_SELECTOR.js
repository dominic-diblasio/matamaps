import React, { useEffect, useState, setError, setLoading } from 'react';
import { Form, Button, Badge, InputGroup } from 'react-bootstrap';
import Select from 'react-select';
import APIClient from '../APIClient'; // Adjust your API client import
import Cookies from "js-cookie";
import makeAnimated from 'react-select/animated';


export default function MMKeywordForm() {
  const [allKeywords, setAllKeywords] = useState({});    // { category: [ {keyword_id, keyword} ] }
  const [userKeywords, setUserKeywords] = useState([]);  // [ { keyword_id, keyword, category } ]
  const [selectedCategory, setSelectedCategory] = useState("");

  // Fetch user interests + all keywords
  useEffect(() => {
    const jwt = Cookies.get("jwt_token");
    if (!jwt) return;

    const u = APIClient.get("users/interests/user", {
      headers: { Authorization: `Bearer ${jwt}` },
      withCredentials: true,
    });
    const a = APIClient.get("users/interests/all", {
      headers: { Authorization: `Bearer ${jwt}` },
      withCredentials: true,
    });

    Promise.all([u, a])
      .then(([userRes, allRes]) => {
        if (userRes.data.success) setUserKeywords(userRes.data.data);
        if (allRes.data.success) {
          setAllKeywords(allRes.data.data);
          const cats = Object.keys(allRes.data.data);
          if (cats.length) setSelectedCategory(cats[0]);
        }
      })
      .catch(console.error);
  }, []);

  // Toggle add/remove interest
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
          { headers: { Authorization: `Bearer ${jwt}` }, withCredentials: true }
        );
      }
      // Refresh
      const r = await APIClient.get("users/interests/user", {
        headers: { Authorization: `Bearer ${jwt}` }, withCredentials: true
      });
      if (r.data.success) setUserKeywords(r.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  // Compute available
  const available = allKeywords[selectedCategory]
    ? allKeywords[selectedCategory].filter(
        (kw) => !userKeywords.some((u) => u.keyword_id === kw.keyword_id)
      )
    : [];

  return (
    <div className="interests-picker">
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

      <div className="form-row">
        <label>Category:</label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {Object.keys(allKeywords).map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

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
}
