-- MySQL dump 10.13  Distrib 5.7.18, for Win64 (x86_64)
--
-- Host: localhost    Database: eiodmen_system
-- ------------------------------------------------------
-- Server version	5.7.18-log

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
-- Table structure for table `preparation`
--

DROP TABLE IF EXISTS `preparation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `preparation` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_preparation` int(11) NOT NULL,
  `stree` varchar(45) COLLATE utf8_danish_ci DEFAULT NULL,
  `admin_village` varchar(45) COLLATE utf8_danish_ci DEFAULT NULL,
  `date` varchar(45) COLLATE utf8_danish_ci NOT NULL,
  `shijian` varchar(45) COLLATE utf8_danish_ci DEFAULT NULL,
  `weather` varchar(45) COLLATE utf8_danish_ci DEFAULT NULL,
  `village` varchar(45) COLLATE utf8_danish_ci DEFAULT NULL,
  `terminal` varchar(45) COLLATE utf8_danish_ci DEFAULT NULL,
  `people` varchar(45) COLLATE utf8_danish_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COLLATE=utf8_danish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `preparation`
--

LOCK TABLES `preparation` WRITE;
/*!40000 ALTER TABLE `preparation` DISABLE KEYS */;
INSERT INTO `preparation` VALUES (1,1,'欧阳','6居','2018-4-13 ','下午','阴','本来','具体','拟录取'),(2,2,'成绩','把','2018-4-13 ','上午','晴','tfd','tff','hvf'),(3,3,'ygg','hhv','2018-5-13 ','下午','阴','hh','hhv','bbff'),(4,4,'UGG','HBV','2018-5-14 ','下午','雨','','',''),(5,5,'uuh','jjhh','2018-4-13 ','下午','晴','','',''),(6,6,'iuh','jhgq','2018-4-13 ','下午','阴','GGJJ','',''),(7,7,'iuh','jhgq','2018-4-13 ','下午','阴','GGJJ','',''),(8,8,'hg','jb','2019-5-13 ','下午','晴','','',''),(9,9,'uh','gvf','2018-5-13 ','下午','阴','','','');
/*!40000 ALTER TABLE `preparation` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-04-15 22:45:48
