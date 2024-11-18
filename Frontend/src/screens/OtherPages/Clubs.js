import React, { useState } from "react";

function Clubs() {
    const [clubs, setClubs] = useState([
        { id: 1, name: "Coding Club", description: "Learn and build projects with fellow coders." },
        { id: 2, name: "Math Society", description: "Explore advanced math topics and participate in competitions." },
        { id: 3, name: "Music Club", description: "Share and enjoy music with fellow enthusiasts." },
        { id: 4, name: "Robotics Club", description: "Build and program robots for competitions." },
    ]);

    return (
        <div className="container my-4">
            <h2 className="text-center">Clubs</h2>
            <p className="text-center">Explore various clubs to join and participate in!</p>
            <div className="row">
                {clubs.map((club) => (
                    <div key={club.id} className="col-md-4 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{club.name}</h5>
                                <p className="card-text">{club.description}</p>
                                <a href={`/clubs/${club.id}`} className="btn btn-primary">
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Clubs;
