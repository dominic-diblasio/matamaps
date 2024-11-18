import React, { useState } from "react";

function ClubMembers() {
    const [members, setMembers] = useState([
        { id: 1, name: "Alice Johnson", role: "President" },
        { id: 2, name: "Bob Smith", role: "Vice President" },
        { id: 3, name: "Charlie Davis", role: "Treasurer" },
        { id: 4, name: "Dana Lee", role: "Secretary" },
    ]);

    return (
        <div className="container my-4">
            <h2 className="text-center">Club Members</h2>
            <p className="text-center">Meet the amazing people in this club!</p>
            <div className="row">
                {members.map((member) => (
                    <div key={member.id} className="col-md-4 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{member.name}</h5>
                                <p className="card-text">Role: {member.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ClubMembers;
