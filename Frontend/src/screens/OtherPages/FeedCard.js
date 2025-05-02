import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Events from "./Events";
import Clubs from "./Clubs";

function FeedCard({ card }) {

    if (card.club_id) {
        return (
            <div key={card.club_id} className="col-md-4 mb-4">
                <div className="card">
                    {card.logo && (
                        <img
                            src={card.logo}
                            alt={`${card.club_name} logo`}
                            className="card-img-top"
                            style={{ height: "150px", objectFit: "cover" }}
                        />
                    )}
                    <div className="card-body">
                        <h5 className="card-title">{card.club_name}</h5>
                        <p className="card-text">{card.description}</p>
                        <Link
                            to={`/clubs/details/${card.club_id}?club_name=${encodeURIComponent(
                                card.club_name
                            )}`}
                            className="btn btn-primary"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    if (card.event_id) {
        const rsvp = Events.rsvpDetails[card.event_id];
        const isExpanded = Events.expandedEventId === card.event_id;
        // Only show register button if event is not completed and user hasn't registered yet.
        const showRegisterButton = card.event_status !== "completed" && !rsvp;
        return (
            <div
                key={card.event_id}
                className="col-lg-8 col-md-6 mb-4 flex items-center justify-center rounded-lg"
            >
                <div className="mm-card-container shadow-sm">
                    {card.event_image && (
                        <img
                            src={card.event_image}
                            alt={`${card.event_name} image`}
                            className="mm-card-image"
                            style={{ objectFit: "cover" }}
                        />
                    )}
                    <div className="mm-card-text-content">
                        <h3 className="card-title">
                            <strong>{card.event_name}</strong>
                        </h3>
                        <h5 className="card-text">
                            <strong>{new Date(card.event_date).toLocaleDateString()}</strong>
                        </h5>
                        <p className="card-text">
                            {isExpanded
                                ? card.event_description
                                : Events.truncateText(card.event_description, Events.EVENT_DESCRIPTION_LENGTH)}
                        </p>
                        {isExpanded && (
                            <>
                                <p className="card-text">
                                    <strong>Location:</strong> {card.location}
                                    <button
                                        className="icofont-map btn-success mm-map-btn"
                                        onClick={() => Events.locationSearch(card.location)}
                                    ></button>
                                </p>

                                <p className="card-text">
                                    <strong>Status:</strong> {card.event_status || "N/A"}
                                </p>
                                {rsvp ? (
                                    <>
                                        <p className="card-text">
                                            <strong>RSVP Status:</strong> {rsvp.rsvp_status || "N/A"}
                                        </p>
                                        <p className="card-text">
                                            <strong>RSVP Date:</strong>{" "}
                                            {new Date(rsvp.created_at).toLocaleString()}
                                        </p>
                                        <p className="card-text">
                                            <strong>Updated Date:</strong>{" "}
                                            {new Date(rsvp.updated_at).toLocaleString()}
                                        </p>
                                    </>
                                ) : (
                                    Events.username && <p className="card-text">You have not RSVP'd.</p>
                                )}
                            </>
                        )}
                        <div className="btn-container d-flex gap-2">
                            <button
                                className="btn btn-seemore"
                                onClick={() => Events.toggleSeeMore(card.event_id)}
                            >
                                {isExpanded ? "See less" : "See more"}
                            </button>
                            {rsvp ? (
                                <span className="btn btn-secondary disabled">Registered</span>
                            ) : (
                                showRegisterButton && (
                                    <button
                                        className="btn btn-success"
                                        onClick={() => Events.handleRegisterClick(card)}
                                    >
                                        Add!
                                    </button>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    /*
    // Returning a generic
    return (
        <div className="col-lg-8 col-md-6 mb-4 flex items-center justify-center rounded-lg">
            <div className="mm-card-container shadow-sm">
                {logo && (
                    <img
                        src={logo}
                        className="card-img-top mm-card-image mm-events-img"
                        style={{ height: "150px", objectFit: "cover" }}
                    />
                )}
                <div className="mm-card-text-content">
                    <h3 className="card-title"><strong>Clubs</strong></h3>
                    <h5 className="card-text">
                        <strong>
                            {subtitle}
                        </strong>
                    </h5>
                    <p>
                        {description}
                    </p>
                    <div className="btn-container d-flex gap-2">
                        {url && (
                            <button className="btn btn-addto">
                                <Link
                                    to={url}
                                    className="link">{linkMessage}</Link></button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
    */
}

export default FeedCard;