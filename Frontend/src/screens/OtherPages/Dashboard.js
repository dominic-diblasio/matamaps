import React from 'react';
import Events from './Events';
import Clubs from './Clubs';
import ClubMembers from './ClubMembers';

function DashboardLayout() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px' }}>
            <Events />
            <Clubs />
        </div>
    );
}

export default DashboardLayout;
