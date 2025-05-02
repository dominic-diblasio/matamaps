import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import './PersonalDetailsPage.css';
import APIClient from "./APIClient";
import MMFeed from "./MMFeed";

import mmEvent from '../../assets/images/matamaps-fullsize/mm-events.jpg';
import mmClub from '../../assets/images/matamaps-fullsize/mm-clubs.jpg';
import mmExplore from '../../assets/images/matamaps-fullsize/mm-explore.jpg';
//const mmEvent = require('../../assets/images/matamaps-fullsize/mm-events.jpg');
//const mmClub = require('../../assets/images/matamaps-fullsize/mm-clubs.jpg');

function DashboardLayout() {
    const [profile, setProfile] = useState({
        firstName: '',
    });

    useEffect(() => {
        const fetchData = async () => {
            const jwt_token = Cookies.get("jwt_token");
            const session_id = Cookies.get("session_id");

            if (jwt_token) {
            try {
                const response = await APIClient.get(`users/account/details`, {
                headers: {
                    Authorization: `Bearer ${jwt_token}`,
                },
                withCredentials: true,
                });

                if (response.data.success) {
                const data = response.data.data;
                setProfile({
                    firstName: data.first_name,
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

    return (
        <div className="container mm-background-transparent" style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px' }}>
            <h1 className="mm-header">Welcome, { profile.firstName }!</h1>

            {/* Events Redirect */}
            <div className="col-lg-8 col-md-6 mb-4 flex items-center justify-center rounded-lg">
                <div className="mm-card-container shadow-sm">
                    <img
                        src={mmEvent} 
                        className="mm-card-image mm-events-img"
                        style={{ objectFit: "cover" }}
                    />
                    <div className="mm-card-text-content">
                        <h3 className="card-title"><strong>Events</strong></h3>
                        <h5 className="card-text">
                            <strong>Get plugged in!</strong>
                        </h5>
                        <p>
                            Looking for new opportunities related to your major? <em>MataMaps</em> wants to help you get involved
                            on campus so you don't miss a thing of all that our University has to offer! You can get recommended
                            events based on your major, as well as your preferences, so that you can easily access all the information
                            needed for anything happening around campus.
                        </p>
                    <div className="btn-container d-flex gap-2">
                        <button className="btn btn-addto"><Link to={`/events`} className="link">View Events</Link></button>
                    </div>
                  </div>
                </div>
              </div>

            {/* Clubs Redirect */}
            <div className="col-lg-8 col-md-6 mb-4 flex items-center justify-center rounded-lg">
                <div className="mm-card-container shadow-sm">
                    <img
                        src={mmClub} 
                        className="mm-card-image mm-events-img"
                        style={{ objectFit: "cover" }}
                    />
                    <div className="mm-card-text-content">
                        <h3 className="card-title"><strong>Clubs</strong></h3>
                        <h5 className="card-text">
                            <strong>The heart of students:</strong>
                        </h5>
                        <p>
                            <em>MataMaps</em> offers a clear way for clubs to stay in contact and plan their gathering and events
                            using the site. To view more about Clubs and how to access them, click the link below.
                        </p>
                    <div className="btn-container d-flex gap-2">
                        <button className="btn btn-addto"><Link to={`/clubs`} className="link">View Clubs</Link></button>
                    </div>
                  </div>
                </div>
              </div>

            {/* Explore Redirect */}
            <div className="col-lg-8 col-md-6 mb-4 flex items-center justify-center rounded-lg">
                <div className="mm-card-container shadow-sm">
                    <img
                        src={mmExplore} 
                        className="mm-card-image mm-events-img"
                        style={{ objectFit: "cover" }}
                    />
                    <div className="mm-card-text-content">
                        <h3 className="card-title"><strong>Recommendations</strong></h3>
                        <h5 className="card-text">
                            <strong>Ready to explore?</strong>
                        </h5>
                        <p>
                            <em>MataMaps</em> offers a clear way for clubs to stay in contact and plan their gathering and events
                            using the site. To view more about Clubs and how to access them, click the link below.
                        </p>
                    <div className="btn-container d-flex gap-2">
                        <button className="btn btn-addto"><Link to={`/add-interests`} className="link">Update Preferences</Link></button>
                    </div>
                  </div>
                </div>
              </div>

            {/* Feed Algorithm (See UseEffect()) */}
            <MMFeed/>
        </div>
    );
}

export default DashboardLayout;
