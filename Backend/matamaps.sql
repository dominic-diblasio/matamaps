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
INSERT INTO `Announcements` VALUES (591428,693354,441399,'Drama rehearsals will take place in Room 202. Don’t miss it!',3,'2024-11-18 17:41:35','2024-11-18 17:41:35'),(966724,693353,464201,'Prepare your cameras for our outdoor photography adventure!',1,'2024-11-18 17:41:35','2024-11-18 17:41:35'),(996806,693353,247599,'Join us for an amazing photography workshop this weekend!',1,'2024-11-18 17:41:35','2024-11-18 17:41:35');
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
INSERT INTO `ClubEvents` VALUES (1,693353,247599,'2024-11-18 17:28:58','active'),(2,693353,464201,'2024-11-18 17:28:58','pending'),(1,693354,441399,'2024-11-18 17:28:58','active');
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
) ENGINE=InnoDB AUTO_INCREMENT=842964 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ClubMembers`
--

/*!40000 ALTER TABLE `ClubMembers` DISABLE KEYS */;
INSERT INTO `ClubMembers` VALUES (3731,693353,5,'leader','active','2024-11-18 18:58:32','2024-11-19 00:05:57','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLXuM2b4djVbMt63hftHrWFFMeQmccyytKlQ&s'),(165826,693354,3,'leader','active','2024-11-18 17:08:01','2024-11-19 00:27:53','https://pics.craiyon.com/2024-02-07/SbkbJICQRMiD1v0oxAY4jQ.webp'),(300242,693356,4,'leader','active','2024-11-18 17:08:20','2024-11-19 00:28:58','https://wallpapersok.com/images/hd/close-up-demon-slayer-nezuko-hvucfshzejpyjtta.jpg'),(842963,693353,1,'co-leader','active','2024-11-18 17:07:34','2024-11-19 00:08:04','https://avatarfiles.alphacoders.com/364/364731.png');
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
  PRIMARY KEY (`id`),
  KEY `club_id` (`club_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `clubregistrations_ibfk_1` FOREIGN KEY (`club_id`) REFERENCES `Clubs` (`club_id`),
  CONSTRAINT `clubregistrations_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `Users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ClubRegistrations`
--

/*!40000 ALTER TABLE `ClubRegistrations` DISABLE KEYS */;
INSERT INTO `ClubRegistrations` VALUES (1,693353,'Photography Club',1,'john_doe',1,'pending'),(2,693354,'Drama Club',2,'newuser',1,'pending'),(3,693354,'Drama Club',1,'john_doe',2,'pending');
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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `EventRSVP`
--

/*!40000 ALTER TABLE `EventRSVP` DISABLE KEYS */;
INSERT INTO `EventRSVP` VALUES (1,441399,1,'pending','2024-11-19 04:19:23','2024-11-19 04:19:23'),(2,464201,1,'pending','2024-11-19 04:22:58','2024-11-19 04:22:58'),(3,247599,1,'pending','2024-11-19 04:42:05','2024-11-19 04:42:05');
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
  `status` enum('active','pending','inactive') DEFAULT 'pending',
  `event_image` varchar(255) DEFAULT NULL,
  `event_description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`event_id`),
  KEY `idx_event_club` (`club_id`),
  KEY `idx_event_creator` (`created_by`),
  CONSTRAINT `fk_events_club` FOREIGN KEY (`club_id`) REFERENCES `Clubs` (`club_id`) ON DELETE CASCADE,
  CONSTRAINT `fk_events_user` FOREIGN KEY (`created_by`) REFERENCES `Users` (`user_id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=464202 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Events`
--

/*!40000 ALTER TABLE `Events` DISABLE KEYS */;
INSERT INTO `Events` VALUES (247599,693353,'Photography Meetup','2024-12-01','Room 101',1,'2024-11-18 17:22:27','2024-11-19 04:43:31','active','https://media.istockphoto.com/id/1149134493/vector/girl-is-making-funny-selfie-group-picture.jpg?s=612x612&w=0&k=20&c=K4DP2b8EreiO3TYnxCnJyJqgWr5dpgYF_HkTjTFljm8=','\"Meet your club members\": Discuss the essence of Photography and different genres.'),(441399,693354,'Drama Rehearsal','2024-12-02','Room 202',2,'2024-11-18 17:22:27','2024-11-19 00:19:53','active','https://www.dentonisd.org/cms/lib/TX21000245/Centricity/Domain/12248/drama-masks.jpeg','\"Theatrical Tales\": A captivating evening showcasing dramatic performances and storytelling by talented actors.'),(464201,693353,'Photography Workshop','2024-12-05','Room 103',1,'2024-11-18 17:22:27','2024-11-19 00:19:41','active','https://www.adobe.com/creativecloud/photography/discover/media_15bc773080343f8444e57be432169904b06bc76ae.png?width=750&format=png&optimize=medium','\"Nature\'s Lens\": Capture breathtaking landscapes and explore advanced photography techniques in this outdoor adventure.');
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
INSERT INTO `Users` VALUES (1,'john_doe','John','Doe','Password123','john_doe@my.csun.edu','event_manager',NULL,'2024-10-29 02:26:12','2024-11-19 04:42:38','65c38f9a-ff0b-4d70-8db2-acc9267c134e'),(2,'newuser','New','User','password123','newuser@my.csun.edu','user',NULL,'2024-10-31 02:14:13','2024-11-19 02:11:05','998e63f2-3ba0-47e9-8447-ec751b8ee0b6'),(3,'Federico','Federico ','B','Password456','federico@my.csun.edu','club_leader',NULL,'2024-11-18 16:57:57','2024-11-19 00:47:24',NULL),(4,'kamala','Kamala','Harris','Password789','harris@my.csun.edu','club_leader',NULL,'2024-11-18 16:59:08','2024-11-19 00:47:24',NULL),(5,'slaya','Laya','P','Password111','srilaya.ponangi.484@my.csun.edu','club_leader',NULL,'2024-11-18 18:57:20','2024-11-19 01:24:34',NULL),(6,'Naomih','Naomih','N','Password222','naomih@my.csun.edu','user',NULL,'2024-11-19 01:24:58','2024-11-19 01:25:23',NULL),(7,'yuli','Yuliana','C','Password333','yuliana@my.csun.edu','user',NULL,'2024-11-19 01:26:07','2024-11-19 01:26:07',NULL),(8,'Roh','Rohita','G','Password444','rohitag@my.csun.edu','user',NULL,'2024-11-19 01:26:59','2024-11-19 01:26:59',NULL);
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

-- Dump completed on 2024-11-18 21:01:04
