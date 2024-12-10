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
  `announcement_id` int NOT NULL,
  `announcement_name` varchar(255) DEFAULT NULL,
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
INSERT INTO `Announcements` VALUES (68190,'Robotics Meeting Postponed from 21/11/2024',693356,NULL,'Robotics Meeting Cancelled 21/11/2024. We apologize for the Last minute update change. We will have it occur the following thursday Nov 25.',NULL,'2024-11-21 02:40:55','2024-11-21 02:40:55'),(209751,'Event Cancelled',693354,21558,'Drama rehearsals moved to in Room 300!!',3,'2024-11-21 02:55:32','2024-11-21 02:55:32'),(429426,'Room Change',693354,21558,'Drama rehearsals moved to in Room 300!!',3,'2024-11-20 17:47:51','2024-11-21 02:44:17'),(625997,'Event Invitation',693356,107896,'Robotics Club invites you to witness \"Build a Bot!\" competition.',3,'2024-11-20 16:07:36','2024-11-20 18:08:42'),(668025,'Meet the theatre Legends!!',693354,NULL,'Meet theatre artists, alumni of CSUN on International Theatre Day.',NULL,'2024-11-20 18:12:01','2024-11-20 18:12:01'),(966724,'Outdoor Photography Adventure',693353,464201,'Prepare your cameras for our outdoor photography adventure!',1,'2024-11-18 17:41:35','2024-11-20 18:09:22'),(996806,'Photography Workshop',693353,247599,'Join us for an amazing photography workshop this weekend!',1,'2024-11-18 17:41:35','2024-11-20 18:09:29');
/*!40000 ALTER TABLE `Announcements` ENABLE KEYS */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `generate_announcement_id` BEFORE INSERT ON `announcements` FOR EACH ROW BEGIN
    DECLARE random_id INT;

    -- Generate a random unique announcement_id
    SET random_id = FLOOR(RAND() * 1000000);

    -- Ensure announcement_id is unique
    WHILE EXISTS (SELECT 1 FROM Announcements WHERE announcement_id = random_id) DO
        SET random_id = FLOOR(RAND() * 1000000);
    END WHILE;

    -- Assign the unique announcement_id
    SET NEW.announcement_id = random_id;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

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
  `club_event_id` int NOT NULL,
  `club_id` int NOT NULL,
  `event_id` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `status` enum('active','pending','inactive') DEFAULT 'pending',
  PRIMARY KEY (`club_id`,`club_event_id`),
  KEY `fk_clubevents_event` (`event_id`),
  CONSTRAINT `fk_clubevents_club` FOREIGN KEY (`club_id`) REFERENCES `Clubs` (`club_id`) ON DELETE CASCADE,
  CONSTRAINT `fk_clubevents_event` FOREIGN KEY (`event_id`) REFERENCES `Events` (`event_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ClubEvents`
--

/*!40000 ALTER TABLE `ClubEvents` DISABLE KEYS */;
INSERT INTO `ClubEvents` VALUES (1,693353,247599,'2024-11-18 17:28:58','active'),(2,693353,464201,'2024-11-18 17:28:58','pending');
/*!40000 ALTER TABLE `ClubEvents` ENABLE KEYS */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `generate_club_event_id` BEFORE INSERT ON `clubevents` FOR EACH ROW BEGIN
    DECLARE max_club_event_id INT;

    -- Determine the next club_event_id for the given club_id
    SELECT IFNULL(MAX(club_event_id), 0) + 1
    INTO max_club_event_id
    FROM ClubEvents
    WHERE club_id = NEW.club_id;

    -- Assign the next club_event_id
    SET NEW.club_event_id = max_club_event_id;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

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
  `profile_picture` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`membership_id`),
  KEY `fk_clubmembers_club` (`club_id`),
  KEY `fk_clubmembers_user` (`user_id`),
  CONSTRAINT `fk_clubmembers_club` FOREIGN KEY (`club_id`) REFERENCES `Clubs` (`club_id`) ON DELETE CASCADE,
  CONSTRAINT `fk_clubmembers_user` FOREIGN KEY (`user_id`) REFERENCES `Users` (`user_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=865405 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ClubMembers`
--

/*!40000 ALTER TABLE `ClubMembers` DISABLE KEYS */;
INSERT INTO `ClubMembers` VALUES (3731,693353,5,'leader','active','2024-11-18 18:58:32','2024-11-19 00:05:57','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLXuM2b4djVbMt63hftHrWFFMeQmccyytKlQ&s'),(165826,693354,3,'leader','active','2024-11-18 17:08:01','2024-11-19 00:27:53','https://pics.craiyon.com/2024-02-07/SbkbJICQRMiD1v0oxAY4jQ.webp'),(300242,693356,4,'leader','active','2024-11-18 17:08:20','2024-11-19 00:28:58','https://wallpapersok.com/images/hd/close-up-demon-slayer-nezuko-hvucfshzejpyjtta.jpg'),(842963,693353,1,'leader','active','2024-11-18 17:07:34','2024-11-20 18:34:52','https://avatarfiles.alphacoders.com/364/364731.png'),(865404,693356,3,'leader','active','2024-11-20 00:02:44','2024-11-20 00:02:53','https://pics.craiyon.com/2024-02-07/SbkbJICQRMiD1v0oxAY4jQ.webp');
/*!40000 ALTER TABLE `ClubMembers` ENABLE KEYS */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `generate_membership_id` BEFORE INSERT ON `clubmembers` FOR EACH ROW BEGIN
    DECLARE random_id INT;

    -- Generate a unique random number
    SET random_id = FLOOR(RAND() * 1000000);

    -- Ensure the random_id is unique in the table
    WHILE EXISTS (SELECT 1 FROM ClubMembers WHERE membership_id = random_id) DO
        SET random_id = FLOOR(RAND() * 1000000);
    END WHILE;

    -- Assign the unique random_id to the new row
    SET NEW.membership_id = random_id;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `ClubRegistrations`
--

DROP TABLE IF EXISTS `ClubRegistrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ClubRegistrations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `club_id` int NOT NULL,
  `club_name` varchar(100) NOT NULL,
  `user_id` int NOT NULL,
  `username` varchar(100) NOT NULL,
  `student_number` int NOT NULL,
  `status` enum('pending','active','inactive') NOT NULL DEFAULT 'pending',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `club_id` (`club_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `clubregistrations_ibfk_1` FOREIGN KEY (`club_id`) REFERENCES `Clubs` (`club_id`),
  CONSTRAINT `clubregistrations_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `Users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ClubRegistrations`
--

/*!40000 ALTER TABLE `ClubRegistrations` DISABLE KEYS */;
INSERT INTO `ClubRegistrations` VALUES (1,693353,'Photography Club',1,'john_doe',1,'inactive','2024-11-20 15:26:46','2024-11-20 18:35:07'),(3,693354,'Drama Club',1,'john_doe',2,'active','2024-11-20 15:26:46','2024-11-20 15:26:46'),(4,693356,'Robotics Club',2,'newuser',1,'active','2024-11-20 15:26:46','2024-11-21 01:55:07'),(5,693353,'Photography Club',2,'newuser',2,'active','2024-11-20 18:32:01','2024-11-20 18:35:08');
/*!40000 ALTER TABLE `ClubRegistrations` ENABLE KEYS */;

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
  `club_rules` text,
  `created_by` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `status` enum('active','inactive','pending') DEFAULT 'active',
  `logo` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`club_id`),
  UNIQUE KEY `club_name` (`club_name`),
  KEY `idx_club_leader` (`created_by`),
  CONSTRAINT `fk_clubs_user` FOREIGN KEY (`created_by`) REFERENCES `Users` (`user_id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=693357 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Clubs`
--

/*!40000 ALTER TABLE `Clubs` DISABLE KEYS */;
INSERT INTO `Clubs` VALUES (693353,'Photography Club','A club for photography enthusiasts.','Members must bring their own cameras and equipment to workshops.\nPhotography during events must be non-intrusive and respect privacy.\nEditing photos for competitions must adhere to ethical guidelines.',1,'2024-11-18 16:44:50','2024-11-19 04:28:05','active','https://cdn.thewirecutter.com/wp-content/media/2023/10/instantcameras-2048px-02050-3x2-1.jpg?auto=webp&quality=75&crop=3:2&width=1024',NULL),(693354,'Drama Club','A club for drama and theater lovers.','All members must attend at least 75% of rehearsals to participate in performances.\nCostumes and props provided by the club must be returned in good condition.\nRespect and inclusivity are mandatory in all interactions.',3,'2024-11-18 16:44:50','2024-11-19 04:28:46','active','https://cdnsm5-ss11.sharpschool.com/UserFiles/Servers/Server_78983/Image/Clubs/masks%20%5BConverted%5D.png',NULL),(693356,'Robotics Club','A club for robotics and tech lovers.','Team members must log weekly updates on their assigned projects.\nUse of club equipment is allowed only within the designated workshop hours.\nSafety protocols must be followed while working with machinery.',4,'2024-11-18 16:51:17','2024-11-19 04:44:00','active','https://cdn.vox-cdn.com/thumbor/vm40nMg0orRqXgoSfrhtPdgo5pQ=/0x0:953x536/1200x628/filters:focal(476x268:477x269)/cdn.vox-cdn.com/uploads/chorus_asset/file/15852707/anki-cozmo-robot-screenshot-1.0.0.1466804959.png',NULL);
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
  `status` enum('accepted','declined','tentative','pending') NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`rsvp_id`),
  KEY `fk_eventrsvp_event` (`event_id`),
  KEY `fk_eventrsvp_user` (`user_id`),
  CONSTRAINT `fk_eventrsvp_event` FOREIGN KEY (`event_id`) REFERENCES `Events` (`event_id`) ON DELETE CASCADE,
  CONSTRAINT `fk_eventrsvp_user` FOREIGN KEY (`user_id`) REFERENCES `Users` (`user_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `EventRSVP`
--

/*!40000 ALTER TABLE `EventRSVP` DISABLE KEYS */;
INSERT INTO `EventRSVP` VALUES (2,464201,1,'pending','2024-11-19 04:22:58','2024-11-19 04:22:58'),(3,247599,1,'pending','2024-11-19 04:42:05','2024-11-19 04:42:05'),(4,706979,2,'accepted','2024-11-20 09:57:36','2024-11-20 10:23:24'),(5,706979,1,'pending','2024-11-20 10:32:30','2024-11-20 10:32:30'),(6,247599,2,'pending','2024-11-20 15:04:04','2024-11-20 15:09:35'),(7,464201,3,'pending','2024-11-20 15:09:50','2024-11-20 15:09:50'),(8,464201,2,'pending','2024-11-21 01:50:22','2024-11-21 01:50:22'),(9,706979,3,'pending','2024-11-21 02:23:08','2024-11-21 02:23:08');
/*!40000 ALTER TABLE `EventRSVP` ENABLE KEYS */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `before_rsvp_insert` BEFORE INSERT ON `eventrsvp` FOR EACH ROW BEGIN
    DECLARE max_rsvp_id INT;

    -- Get the current maximum rsvp_id
    SELECT MAX(rsvp_id) INTO max_rsvp_id FROM EventRSVP;

    -- If no rsvp_id exists, start from 1; otherwise, increment max_rsvp_id by 1
    IF max_rsvp_id IS NULL THEN
        SET NEW.rsvp_id = 1;
    ELSE
        SET NEW.rsvp_id = max_rsvp_id + 1;
    END IF;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

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
  `status` enum('active','pending','inactive','completed') NOT NULL,
  `event_image` varchar(255) DEFAULT NULL,
  `event_description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`event_id`),
  KEY `idx_event_club` (`club_id`),
  KEY `idx_event_creator` (`created_by`),
  CONSTRAINT `fk_events_club` FOREIGN KEY (`club_id`) REFERENCES `Clubs` (`club_id`) ON DELETE CASCADE,
  CONSTRAINT `fk_events_user` FOREIGN KEY (`created_by`) REFERENCES `Users` (`user_id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=819809 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Events`
--

/*!40000 ALTER TABLE `Events` DISABLE KEYS */;
INSERT INTO `Events` VALUES (21558,693354,'Little Women','2024-11-14','Room 5',3,'2024-11-20 11:17:20','2024-11-20 11:46:16','completed','https://www.lafeltrinelli.it/images/4066338120601_0_536_0_75.jpg','19th century Massachusetts. While the March sisters - Jo, Meg, Amy, and Beth - enter the threshold of womanhood, they go through many ups and downs in life and endeavor to make important decisions that can affect their future.'),(107896,693356,'Build a Bot!','2024-11-22','Room 404',3,'2024-11-20 02:09:43','2024-11-20 02:09:43','pending','https://static01.nyt.com/images/2024/08/23/multimedia/2024-01-08-connections-bot-index/2024-01-08-connections-bot-index-videoSixteenByNine3000.png','Build a bot with your team members based on radom prompt pick.'),(247599,693353,'Photography Meetup','2024-12-01','Room 101',1,'2024-11-18 17:22:27','2024-11-19 04:43:31','active','https://media.istockphoto.com/id/1149134493/vector/girl-is-making-funny-selfie-group-picture.jpg?s=612x612&w=0&k=20&c=K4DP2b8EreiO3TYnxCnJyJqgWr5dpgYF_HkTjTFljm8=','\"Meet your club members\": Discuss the essence of Photography and different genres.'),(464201,693353,'Photography Workshop','2024-11-20','Room 103',1,'2024-11-18 17:22:27','2024-11-20 02:09:43','active','https://www.adobe.com/creativecloud/photography/discover/media_15bc773080343f8444e57be432169904b06bc76ae.png?width=750&format=png&optimize=medium','\"Nature\'s Lens\": Capture breathtaking landscapes and explore advanced photography techniques in this outdoor adventure.'),(706979,693354,'Shakespeare ','2024-11-30','Room 909',3,'2024-11-20 06:43:01','2024-11-20 02:09:43','active','https://media.npr.org/assets/img/2016/04/15/tamingoftheshrew_custom-b6bb3feb2a117480da19bf25d483f5ab435a7e01.jpg?s=1100&c=50&f=jpeg','Get ready to witness a legendary tale from the 1800s! '),(819808,693356,'Lego Champions','2024-11-22','Room 0',3,'2024-11-20 07:25:45','2024-11-20 15:14:41','active','https://i0.wp.com/truenorthbricks.com/wp-content/uploads/2023/07/Robot03.jpg?resize=1024%2C771&ssl=1','Build a legos robot with a live prompt ');
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
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `generate_event_id` BEFORE INSERT ON `events` FOR EACH ROW BEGIN
    DECLARE random_id INT;

    -- Generate a random unique event_id
    SET random_id = FLOOR(RAND() * 1000000);

    -- Ensure event_id is unique
    WHILE EXISTS (SELECT 1 FROM Events WHERE event_id = random_id) DO
        SET random_id = FLOOR(RAND() * 1000000);
    END WHILE;

    -- Assign the unique event_id to the new row
    SET NEW.event_id = random_id;
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
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
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
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
INSERT INTO `Users` VALUES (1,'john_doe','John','Doe','Password123','john_doe@my.csun.edu','club_leader',NULL,'2024-10-29 02:26:12','2024-11-20 18:33:22','3a1f9748-8307-4547-b2de-43a692d4c67c'),(2,'newuser','New','User','password123','newuser@my.csun.edu','user',NULL,'2024-10-31 02:14:13','2024-11-21 02:46:34','58e19ec3-1f25-40fe-8dcf-9008959f3f8f'),(3,'Federico','Federico ','B','Password456','federico@my.csun.edu','club_leader',NULL,'2024-11-18 16:57:57','2024-11-21 02:49:34','2006c0bc-4741-4175-878c-d41985848bb2'),(4,'kamala','Kamala','Harris','Password789','harris@my.csun.edu','club_leader',NULL,'2024-11-18 16:59:08','2024-11-19 00:47:24',NULL),(5,'slaya','Laya','P','Password111','srilaya.ponangi.484@my.csun.edu','club_leader',NULL,'2024-11-18 18:57:20','2024-11-19 01:24:34',NULL),(6,'Naomih','Naomih','N','Password222','naomih@my.csun.edu','user',NULL,'2024-11-19 01:24:58','2024-11-19 01:25:23',NULL),(7,'yuli','Yuliana','C','Password333','yuliana@my.csun.edu','user',NULL,'2024-11-19 01:26:07','2024-11-19 01:26:07',NULL),(8,'Roh','Rohita','G','Password444','rohitag@my.csun.edu','user',NULL,'2024-11-19 01:26:59','2024-11-20 16:02:27','83d8de37-6104-49c2-bda5-46574dcaa723');
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;

--
-- Dumping routines for database 'MataMaps'
--
/*!50003 DROP PROCEDURE IF EXISTS `InsertDummyClubs` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertDummyClubs`()
BEGIN
    DECLARE random_id1 INT;
    DECLARE random_id2 INT;
    DECLARE random_id3 INT;

    -- Generate unique random IDs for each club
    SET random_id1 = FLOOR(RAND() * 1000000);
    SET random_id2 = FLOOR(RAND() * 1000000);
    SET random_id3 = FLOOR(RAND() * 1000000);

    -- Insert the first club if it doesn't already exist
    IF NOT EXISTS (SELECT 1 FROM Clubs WHERE club_name = 'Photography Club') THEN
        INSERT INTO Clubs (club_id, club_name, description, created_by, created_at, updated_at)
        VALUES (random_id1, 'Photography Club', 'A club for photography enthusiasts.', 1, NOW(), NOW());
    END IF;

    -- Insert the second club if it doesn't already exist
    IF NOT EXISTS (SELECT 1 FROM Clubs WHERE club_name = 'Drama Club') THEN
        INSERT INTO Clubs (club_id, club_name, description, created_by, created_at, updated_at)
        VALUES (random_id2, 'Drama Club', 'A club for drama and theater lovers.', 2, NOW(), NOW());
    END IF;

    -- Insert the third club if it doesn't already exist
    IF NOT EXISTS (SELECT 1 FROM Clubs WHERE club_name = 'Robotics Club') THEN
        INSERT INTO Clubs (club_id, club_name, description, created_by, created_at, updated_at)
        VALUES (random_id3, 'Robotics Club', 'A club for robotics enthusiasts.', 3, NOW(), NOW());
    END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-20 19:09:51
