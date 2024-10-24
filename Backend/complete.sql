-- Step 1: Create the Database
CREATE DATABASE IF NOT EXISTS MataMaps;
USE MataMaps;

-- Step 2: Create Tables

-- 1. Preferences Table
CREATE TABLE Preferences (
    preferences_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    notification_settings JSON DEFAULT NULL,
    display_settings JSON DEFAULT NULL,
    theme ENUM('light', 'dark') DEFAULT 'light',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- 2. Users Table
CREATE TABLE Users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    role ENUM('user', 'club_leader', 'event_manager', 'admin') DEFAULT 'user',
    preferences_id INT DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT fk_users_preferences FOREIGN KEY (preferences_id) REFERENCES Preferences(preferences_id) ON DELETE SET NULL
);

-- Add foreign key constraint to Preferences table after Users table creation
ALTER TABLE Preferences
    ADD CONSTRAINT fk_preferences_user FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE;

-- 3. Clubs Table
CREATE TABLE Clubs (
    club_id INT AUTO_INCREMENT PRIMARY KEY,
    club_name VARCHAR(100) UNIQUE NOT NULL,
    description TEXT DEFAULT NULL,
    created_by INT DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT fk_clubs_user FOREIGN KEY (created_by) REFERENCES Users(user_id) ON DELETE SET NULL
);

-- 4. Club Members Table
CREATE TABLE ClubMembers (
    membership_id INT AUTO_INCREMENT PRIMARY KEY,
    club_id INT,
    user_id INT,
    role_in_club ENUM('member', 'leader', 'co-leader') DEFAULT 'member',
    status ENUM('pending', 'active', 'removed') DEFAULT 'pending',
    joined_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT fk_clubmembers_club FOREIGN KEY (club_id) REFERENCES Clubs(club_id) ON DELETE CASCADE,
    CONSTRAINT fk_clubmembers_user FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE
);

-- 5. Events Table
CREATE TABLE Events (
    event_id INT AUTO_INCREMENT PRIMARY KEY,
    club_id INT,
    event_name VARCHAR(100),
    event_date DATE,
    location VARCHAR(255) DEFAULT NULL,
    created_by INT DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT fk_events_club FOREIGN KEY (club_id) REFERENCES Clubs(club_id) ON DELETE CASCADE,
    CONSTRAINT fk_events_user FOREIGN KEY (created_by) REFERENCES Users(user_id) ON DELETE SET NULL
);

-- 6. Event Participants Table
CREATE TABLE EventParticipants (
    participant_id INT AUTO_INCREMENT PRIMARY KEY,
    event_id INT,
    user_id INT,
    status ENUM('registered', 'attended', 'canceled') DEFAULT 'registered',
    registered_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT fk_eventparticipants_event FOREIGN KEY (event_id) REFERENCES Events(event_id) ON DELETE CASCADE,
    CONSTRAINT fk_eventparticipants_user FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE
);

-- 7. Announcements Table
CREATE TABLE Announcements (
    announcement_id INT AUTO_INCREMENT PRIMARY KEY,
    club_id INT,
    event_id INT DEFAULT NULL,
    message TEXT NOT NULL,
    created_by INT DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT fk_announcements_club FOREIGN KEY (club_id) REFERENCES Clubs(club_id) ON DELETE CASCADE,
    CONSTRAINT fk_announcements_event FOREIGN KEY (event_id) REFERENCES Events(event_id) ON DELETE SET NULL,
    CONSTRAINT fk_announcements_user FOREIGN KEY (created_by) REFERENCES Users(user_id) ON DELETE SET NULL
);

-- 8. Club Approval Requests Table
CREATE TABLE ClubApprovalRequests (
    request_id INT AUTO_INCREMENT PRIMARY KEY,
    requested_by INT,
    club_name VARCHAR(100),
    description TEXT DEFAULT NULL,
    status ENUM('pending', 'approved', 'rejected') DEFAULT 'pending',
    reason TEXT DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT fk_clubapprovalrequests_user FOREIGN KEY (requested_by) REFERENCES Users(user_id) ON DELETE CASCADE
);

-- Step 3: Create Triggers

-- Trigger to automatically set a user's role to 'club_leader' when creating a club
DELIMITER //
CREATE TRIGGER SetClubLeaderRole
AFTER INSERT ON Clubs
FOR EACH ROW
BEGIN
    UPDATE Users
    SET role = 'club_leader'
    WHERE user_id = NEW.created_by;
END;
//
DELIMITER ;

-- Trigger to automatically mark users as 'event_manager' when they create an event
DELIMITER //
CREATE TRIGGER SetEventManagerRole
AFTER INSERT ON Events
FOR EACH ROW
BEGIN
    UPDATE Users
    SET role = 'event_manager'
    WHERE user_id = NEW.created_by;
END;
//
DELIMITER ;

-- Step 4: Indexes
CREATE INDEX idx_user_role ON Users(role);
CREATE INDEX idx_club_leader ON Clubs(created_by);
CREATE INDEX idx_event_club ON Events(club_id);
CREATE INDEX idx_event_creator ON Events(created_by);
