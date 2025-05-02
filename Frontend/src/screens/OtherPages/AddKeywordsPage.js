import React, { useState, useEffect } from "react";
import MMKeywordForm from "./MMKeywordForm";
import { Link } from 'react-router-dom';
function AddKeywordsPage() {
    return (
        <div className="container mm-background-transparent">
            <h1>Welcome to MataMaps!</h1>
            <h2>How can we best recommend to you?</h2>
            <hr class="hr" />
            <MMKeywordForm/>
            <hr class="hr" />
            <button className="btn btn-addto"><Link to={`/`} className="link">Go to Dashboard</Link></button>
        </div>
    );
}

export default AddKeywordsPage;