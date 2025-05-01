import React, { useState, useEffect } from "react";
import MMKeywordForm from "./MMKeywordForm";

function AddKeywordsPage() {
    return (
        <div>
            <h1>Welcome to MataMaps!</h1>
            <h2>How can we best recommend to you?</h2>
            <MMKeywordForm/>
            <button>Continue</button>
        </div>
    );
}

export default MMFeed;