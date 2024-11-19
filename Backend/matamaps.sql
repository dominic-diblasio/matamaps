-- MySQL dump 10.13  Distrib 5.7.24, for osx11.1 (x86_64)
--
-- Host: 127.0.0.1    Database: MataMaps
-- ------------------------------------------------------
-- Server version	8.4.3

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Announcements`
--

DROP TABLE IF EXISTS `Announcements`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Announcements` (
  `announcement_id` int NOT NULL AUTO_INCREMENT,
  `club_id` int DEFAULT NULL,
  `event_id` int DEFAULT NULL,
  `message` text NOT NULL,
  `created_by` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`announcement_id`),
  KEY `fk_announcements_club` (`club_id`),
  KEY `fk_announcements_event` (`event_id`),
  KEY `fk_announcements_user` (`created_by`),
  CONSTRAINT `fk_announcements_club` FOREIGN KEY (`club_id`) REFERENCES `Clubs` (`club_id`) ON DELETE CASCADE,
  CONSTRAINT `fk_announcements_event` FOREIGN KEY (`event_id`) REFERENCES `Events` (`event_id`) ON DELETE SET NULL,
  CONSTRAINT `fk_announcements_user` FOREIGN KEY (`created_by`) REFERENCES `Users` (`user_id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Announcements`
--

/*!40000 ALTER TABLE `Announcements` DISABLE KEYS */;
/*!40000 ALTER TABLE `Announcements` ENABLE KEYS */;

--
-- Table structure for table `ClubApprovalRequests`
--

DROP TABLE IF EXISTS `ClubApprovalRequests`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ClubApprovalRequests` (
  `request_id` int NOT NULL AUTO_INCREMENT,
  `requested_by` int DEFAULT NULL,
  `club_name` varchar(100) DEFAULT NULL,
  `description` text,
  `status` enum('pending','approved','rejected') DEFAULT 'pending',
  `reason` text,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`request_id`),
  KEY `fk_clubapprovalrequests_user` (`requested_by`),
  CONSTRAINT `fk_clubapprovalrequests_user` FOREIGN KEY (`requested_by`) REFERENCES `Users` (`user_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ClubApprovalRequests`
--

/*!40000 ALTER TABLE `ClubApprovalRequests` DISABLE KEYS */;
/*!40000 ALTER TABLE `ClubApprovalRequests` ENABLE KEYS */;

--
-- Table structure for table `ClubDiscussions`
--

DROP TABLE IF EXISTS `ClubDiscussions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ClubDiscussions` (
  `discussion_id` int NOT NULL AUTO_INCREMENT,
  `club_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `message` text NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`discussion_id`),
  KEY `fk_clubdiscussions_club` (`club_id`),
  KEY `fk_clubdiscussions_user` (`user_id`),
  CONSTRAINT `fk_clubdiscussions_club` FOREIGN KEY (`club_id`) REFERENCES `Clubs` (`club_id`) ON DELETE CASCADE,
  CONSTRAINT `fk_clubdiscussions_user` FOREIGN KEY (`user_id`) REFERENCES `Users` (`user_id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ClubDiscussions`
--

/*!40000 ALTER TABLE `ClubDiscussions` DISABLE KEYS */;
/*!40000 ALTER TABLE `ClubDiscussions` ENABLE KEYS */;

--
-- Table structure for table `ClubEvents`
--

DROP TABLE IF EXISTS `ClubEvents`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ClubEvents` (
  `club_event_id` int NOT NULL AUTO_INCREMENT,
  `club_id` int DEFAULT NULL,
  `event_id` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`club_event_id`),
  KEY `fk_clubevents_club` (`club_id`),
  KEY `fk_clubevents_event` (`event_id`),
  CONSTRAINT `fk_clubevents_club` FOREIGN KEY (`club_id`) REFERENCES `Clubs` (`club_id`) ON DELETE CASCADE,
  CONSTRAINT `fk_clubevents_event` FOREIGN KEY (`event_id`) REFERENCES `Events` (`event_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ClubEvents`
--

/*!40000 ALTER TABLE `ClubEvents` DISABLE KEYS */;
/*!40000 ALTER TABLE `ClubEvents` ENABLE KEYS */;

--
-- Table structure for table `ClubInvitations`
--

DROP TABLE IF EXISTS `ClubInvitations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ClubInvitations` (
  `invitation_id` int NOT NULL AUTO_INCREMENT,
  `club_id` int DEFAULT NULL,
  `invitation_code` varchar(20) NOT NULL,
  `status` enum('active','expired','used') DEFAULT 'active',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `expires_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`invitation_id`),
  UNIQUE KEY `invitation_code` (`invitation_code`),
  KEY `fk_clubinvitations_club` (`club_id`),
  CONSTRAINT `fk_clubinvitations_club` FOREIGN KEY (`club_id`) REFERENCES `Clubs` (`club_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ClubInvitations`
--

/*!40000 ALTER TABLE `ClubInvitations` DISABLE KEYS */;
/*!40000 ALTER TABLE `ClubInvitations` ENABLE KEYS */;

--
-- Table structure for table `ClubMembers`
--

DROP TABLE IF EXISTS `ClubMembers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ClubMembers` (
  `membership_id` int NOT NULL AUTO_INCREMENT,
  `club_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `role_in_club` enum('member','leader','co-leader') DEFAULT 'member',
  `status` enum('pending','active','removed') DEFAULT 'pending',
  `joined_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`membership_id`),
  KEY `fk_clubmembers_club` (`club_id`),
  KEY `fk_clubmembers_user` (`user_id`),
  CONSTRAINT `fk_clubmembers_club` FOREIGN KEY (`club_id`) REFERENCES `Clubs` (`club_id`) ON DELETE CASCADE,
  CONSTRAINT `fk_clubmembers_user` FOREIGN KEY (`user_id`) REFERENCES `Users` (`user_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ClubMembers`
--

/*!40000 ALTER TABLE `ClubMembers` DISABLE KEYS */;
/*!40000 ALTER TABLE `ClubMembers` ENABLE KEYS */;

--
-- Table structure for table `Clubs`
--

DROP TABLE IF EXISTS `Clubs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Clubs` (
  `club_id` int NOT NULL AUTO_INCREMENT,
  `club_name` varchar(100) NOT NULL,
  `description` text,
  `created_by` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`club_id`),
  UNIQUE KEY `club_name` (`club_name`),
  KEY `idx_club_leader` (`created_by`),
  CONSTRAINT `fk_clubs_user` FOREIGN KEY (`created_by`) REFERENCES `Users` (`user_id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Clubs`
--

/*!40000 ALTER TABLE `Clubs` DISABLE KEYS */;
/*!40000 ALTER TABLE `Clubs` ENABLE KEYS */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `SetClubLeaderRole` AFTER INSERT ON `clubs` FOR EACH ROW BEGIN
    UPDATE Users
    SET role = 'club_leader'
    WHERE user_id = NEW.created_by;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `EventLocations`
--

DROP TABLE IF EXISTS `EventLocations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `EventLocations` (
  `location_id` int NOT NULL AUTO_INCREMENT,
  `event_id` int DEFAULT NULL,
  `latitude` decimal(9,6) DEFAULT NULL,
  `longitude` decimal(9,6) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`location_id`),
  KEY `fk_eventlocations_event` (`event_id`),
  CONSTRAINT `fk_eventlocations_event` FOREIGN KEY (`event_id`) REFERENCES `Events` (`event_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `EventLocations`
--

/*!40000 ALTER TABLE `EventLocations` DISABLE KEYS */;
/*!40000 ALTER TABLE `EventLocations` ENABLE KEYS */;

--
-- Table structure for table `EventParticipants`
--

DROP TABLE IF EXISTS `EventParticipants`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `EventParticipants` (
  `participant_id` int NOT NULL AUTO_INCREMENT,
  `event_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `status` enum('registered','attended','canceled') DEFAULT 'registered',
  `registered_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`participant_id`),
  KEY `fk_eventparticipants_event` (`event_id`),
  KEY `fk_eventparticipants_user` (`user_id`),
  CONSTRAINT `fk_eventparticipants_event` FOREIGN KEY (`event_id`) REFERENCES `Events` (`event_id`) ON DELETE CASCADE,
  CONSTRAINT `fk_eventparticipants_user` FOREIGN KEY (`user_id`) REFERENCES `Users` (`user_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `EventParticipants`
--

/*!40000 ALTER TABLE `EventParticipants` DISABLE KEYS */;
/*!40000 ALTER TABLE `EventParticipants` ENABLE KEYS */;

--
-- Table structure for table `EventRSVP`
--

DROP TABLE IF EXISTS `EventRSVP`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `EventRSVP` (
  `rsvp_id` int NOT NULL AUTO_INCREMENT,
  `event_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `status` enum('accepted','declined','tentative') DEFAULT 'accepted',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`rsvp_id`),
  KEY `fk_eventrsvp_event` (`event_id`),
  KEY `fk_eventrsvp_user` (`user_id`),
  CONSTRAINT `fk_eventrsvp_event` FOREIGN KEY (`event_id`) REFERENCES `Events` (`event_id`) ON DELETE CASCADE,
  CONSTRAINT `fk_eventrsvp_user` FOREIGN KEY (`user_id`) REFERENCES `Users` (`user_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `EventRSVP`
--

/*!40000 ALTER TABLE `EventRSVP` DISABLE KEYS */;
/*!40000 ALTER TABLE `EventRSVP` ENABLE KEYS */;

--
-- Table structure for table `Events`
--

DROP TABLE IF EXISTS `Events`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Events` (
  `event_id` int NOT NULL AUTO_INCREMENT,
  `club_id` int DEFAULT NULL,
  `event_name` varchar(100) DEFAULT NULL,
  `event_date` date DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`event_id`),
  KEY `idx_event_club` (`club_id`),
  KEY `idx_event_creator` (`created_by`),
  CONSTRAINT `fk_events_club` FOREIGN KEY (`club_id`) REFERENCES `Clubs` (`club_id`) ON DELETE CASCADE,
  CONSTRAINT `fk_events_user` FOREIGN KEY (`created_by`) REFERENCES `Users` (`user_id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Events`
--

/*!40000 ALTER TABLE `Events` DISABLE KEYS */;
/*!40000 ALTER TABLE `Events` ENABLE KEYS */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `SetEventManagerRole` AFTER INSERT ON `events` FOR EACH ROW BEGIN
    UPDATE Users
    SET role = 'event_manager'
    WHERE user_id = NEW.created_by;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `Notifications`
--

DROP TABLE IF EXISTS `Notifications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Notifications` (
  `notification_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `message` text NOT NULL,
  `notification_type` enum('event_update','club_post','reminder') NOT NULL,
  `status` enum('unread','read') DEFAULT 'unread',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`notification_id`),
  KEY `fk_notifications_user` (`user_id`),
  CONSTRAINT `fk_notifications_user` FOREIGN KEY (`user_id`) REFERENCES `Users` (`user_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Notifications`
--

/*!40000 ALTER TABLE `Notifications` DISABLE KEYS */;
/*!40000 ALTER TABLE `Notifications` ENABLE KEYS */;

--
-- Table structure for table `Preferences`
--

DROP TABLE IF EXISTS `Preferences`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Preferences` (
  `preferences_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `notification_settings` enum('on','off') DEFAULT 'on',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`preferences_id`),
  KEY `fk_preferences_user` (`user_id`),
  CONSTRAINT `fk_preferences_user` FOREIGN KEY (`user_id`) REFERENCES `Users` (`user_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Preferences`
--

/*!40000 ALTER TABLE `Preferences` DISABLE KEYS */;
/*!40000 ALTER TABLE `Preferences` ENABLE KEYS */;

--
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL,
  `role` enum('user','club_leader','event_manager','admin') DEFAULT 'user',
  `preferences_id` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `session_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`),
  KEY `fk_users_preferences` (`preferences_id`),
  KEY `idx_user_role` (`role`),
  CONSTRAINT `fk_users_preferences` FOREIGN KEY (`preferences_id`) REFERENCES `Preferences` (`preferences_id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
INSERT INTO `Users` VALUES (1,'john_doe','Password123','john_doe@my.csun.edu','user',NULL,'2024-10-29 02:26:12','2024-10-29 03:02:12','45dce00f-3dbd-49a4-9312-41caca86e3e6'),(2,'newuser','password123','newuser@my.csun.edu','user',NULL,'2024-10-31 02:14:13','2024-10-31 03:44:04','9565518b-54ee-435b-83f4-7ae12aed7190');
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;

--
-- Dumping routines for database 'MataMaps'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-14 15:53:35
