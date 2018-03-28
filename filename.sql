-- MySQL dump 10.13  Distrib 5.7.21, for Linux (x86_64)
--
-- Host: localhost    Database: animals
-- ------------------------------------------------------
-- Server version	5.7.21-0ubuntu0.16.04.1

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
-- Table structure for table `dier`
--

DROP TABLE IF EXISTS `dier`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `dier` (
  `id` int(5) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `type` varchar(45) NOT NULL,
  `place` varchar(45) NOT NULL,
  `description` mediumtext NOT NULL,
  `sex` varchar(255) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `vaccinated` tinyint(1) DEFAULT NULL,
  `declawed` tinyint(1) DEFAULT NULL,
  `primaryColor` varchar(255) DEFAULT NULL,
  `secondaryColor` varchar(255) DEFAULT NULL,
  `size` varchar(255) DEFAULT NULL,
  `length` varchar(255) DEFAULT NULL,
  `weight` varchar(255) DEFAULT NULL,
  `intake` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=56 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dier`
--

LOCK TABLES `dier` WRITE;
/*!40000 ALTER TABLE `dier` DISABLE KEYS */;
INSERT INTO `dier` VALUES (00003,'test','cat','Manhattan Animal Care Center','test','male',2,0,0,'red','grey','small','short','22','2012-12-10'),(00004,'test','cat','Manhattan Animal Care Center','test','male',2,0,0,'red','grey','small','short','22','2012-12-10'),(00005,'test','cat','Manhattan Animal Care Center','test','male',2,0,0,'red','grey','small','short','22','2012-12-10'),(00006,'test','cat','Manhattan Animal Care Center','test','male',2,0,0,'red','grey','small','short','22','2012-12-10'),(00007,'test','cat','Manhattan Animal Care Center','test','male',2,0,0,'red','grey','small','short','22','2012-12-10'),(00008,'test','cat','Manhattan Animal Care Center','test','male',2,0,0,'red','grey','small','short','22','2012-12-10'),(00009,'Shelhel','dog','Bronx Admissions Center','testje','female',22,0,0,'red','grey','small','medium','22','2012-02-01'),(00010,'Shelhel','dog','Bronx Admissions Center','testje','female',22,0,0,'red','grey','small','medium','22','2012-02-01'),(00011,'Shelhel','dog','Bronx Admissions Center','testje','female',22,0,0,'red','grey','small','medium','22','2012-02-01'),(00012,'Shelhel','dog','Bronx Admissions Center','testje','female',22,0,0,'red','grey','small','medium','22','2012-02-01'),(00013,'Shelhel','dog','Bronx Admissions Center','testje','female',22,0,0,'red','grey','small','medium','22','2012-02-01'),(00014,'Shelhel','dog','Bronx Admissions Center','testje','female',22,0,0,'red','grey','small','medium','22','2012-02-01'),(00015,'kees','cat','Brooklyn Animal Care Center','Hele lieve kat','male',22,0,0,'red','blue','small','long','22','2012-12-10'),(00016,'kees','cat','Brooklyn Animal Care Center','Hele lieve kat','male',22,0,0,'red','blue','small','long','22','2012-12-10'),(00017,'kees','cat','Brooklyn Animal Care Center','Hele lieve kat','male',22,0,0,'red','blue','small','long','22','2012-12-10'),(00018,'kees','cat','Brooklyn Animal Care Center','Hele lieve kat','male',22,0,0,'red','blue','small','long','22','2012-12-10'),(00019,'kees','cat','Brooklyn Animal Care Center','Hele lieve kat','male',22,0,0,'red','blue','small','long','22','2012-12-10'),(00020,'kees','cat','Brooklyn Animal Care Center','Hele lieve kat','male',22,0,0,'red','blue','small','long','22','2012-12-10'),(00021,'hello','cat','Bronx Admissions Center','test','female',2,0,0,'red','blue','small','medium','22','2013-12-20'),(00023,'hello','cat','Bronx Admissions Center','test','female',2,0,0,'red','blue','small','medium','22','2013-12-20'),(00024,'harrold','cat','Bronx Admissions Center','test','female',2,0,0,'red','blue','small','medium','22','2013-12-20'),(00025,'harrold','cat','Bronx Admissions Center','test','female',2,0,0,'red','blue','small','medium','22','2013-12-20'),(00026,'harrold','cat','Bronx Admissions Center','test','female',2,0,0,'red','blue','small','medium','22','2013-12-20'),(00027,'Robbo','dog','Bronx Admissions Center','doggggggg','male',32,0,0,'red','white','small','short','22','2007-03-01'),(00028,'Robbo','dog','Bronx Admissions Center','doggggggg','male',32,0,0,'red','white','small','short','22','2007-03-01'),(00029,'Robbo','dog','Bronx Admissions Center','doggggggg','male',32,0,0,'red','white','small','short','22','2007-03-01'),(00030,'Robbo','dog','Bronx Admissions Center','doggggggg','male',32,0,0,'red','white','small','short','22','2007-03-01'),(00031,'Robbo','dog','Bronx Admissions Center','doggggggg','male',32,0,0,'red','white','small','short','22','2007-03-01'),(00032,'Robbo','dog','Bronx Admissions Center','doggggggg','male',32,0,0,'red','white','small','short','22','2007-03-01'),(00033,'karel','cat','Bronx Admissions Center','dit is een test','female',4,0,0,'blu','purple','small','medium','3','2013-10-12'),(00034,'karel','cat','Bronx Admissions Center','dit is een test','female',4,0,0,'blu','purple','small','medium','3','2013-10-12'),(00035,'karel','cat','Bronx Admissions Center','dit is een test','female',4,0,0,'blu','purple','small','medium','3','2013-10-12'),(00036,'Gucci mane','dog','Bronx Admissions Center','Dec','female',33,0,0,'Red','Purple','small','long','3','2013-10-12'),(00037,'Two chain','dog','Bronx Admissions Center','test','male',12,0,0,'blue','red','small','short','22','2012-03-20'),(00038,'test','dog','Manhattan Animal Care Center','test','female',2,0,0,'red','green','small','short','2','2012-12-12'),(00039,'test','dog','Manhattan Animal Care Center','test','female',2,0,0,'red','green','small','short','2','2012-12-12'),(00040,'test','dog','Manhattan Animal Care Center','test','female',2,0,0,'red','green','small','short','2','2012-12-12'),(00041,'test','dog','Manhattan Animal Care Center','test','female',2,0,0,'red','green','small','short','2','2012-12-12'),(00042,'test','dog','Manhattan Animal Care Center','test','female',2,0,0,'red','green','small','short','2','2012-12-12'),(00043,'test','dog','Manhattan Animal Care Center','test','female',2,0,0,'red','green','small','short','2','2012-12-12'),(00044,'test','dog','Manhattan Animal Care Center','test','female',2,0,0,'red','green','small','short','2','2012-12-12'),(00045,'test','dog','Manhattan Animal Care Center','test','female',2,0,0,'red','green','small','short','2','2012-12-12'),(00046,'Karel','dog','Manhattan Animal Care Center','test','female',2,0,0,'red','green','small','short','2','2012-12-12'),(00047,'J Dilla','dog','Manhattan Animal Care Center','test','female',2,0,0,'red','green','small','short','2','2012-12-12'),(00048,'J Dilla','dog','Bronx Admissions Center','Sample making dog','female',22,0,0,'Red','Yellow','large','medium','22','1920-02-12'),(00049,'J Dilla','dog','Bronx Admissions Center','Sample making dog','female',22,0,0,'Red','Yellow','large','medium','22','1920-02-12'),(00050,'J Dilla','dog','Bronx Admissions Center','Sample making dog','female',22,0,0,'Red','Yellow','large','medium','22','1920-02-12'),(00051,'Mos def','dog','Manhattan Animal Care Center','desc','female',22,0,0,'blue','green','small','medium','22','2013-02-11'),(00052,'Mos def','dog','Manhattan Animal Care Center','desc','female',22,0,0,'blue','green','small','medium','22','2013-02-11'),(00053,'Mos def','dog','Manhattan Animal Care Center','desc','female',22,0,0,'blue','green','small','medium','22','2013-02-11'),(00054,'Mos def','dog','Manhattan Animal Care Center','desc','female',22,0,0,'blue','green','small','medium','22','2013-02-11'),(00055,'Mos def','dog','Manhattan Animal Care Center','desc','female',22,0,0,'blue','green','small','medium','22','2013-02-11');
/*!40000 ALTER TABLE `dier` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shelter`
--

DROP TABLE IF EXISTS `shelter`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `shelter` (
  `shelterName` text,
  `City` text,
  `Address` text,
  `numberOfanimals` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shelter`
--

LOCK TABLES `shelter` WRITE;
/*!40000 ALTER TABLE `shelter` DISABLE KEYS */;
/*!40000 ALTER TABLE `shelter` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `test`
--

DROP TABLE IF EXISTS `test`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `test` (
  `testrij` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `test`
--

LOCK TABLES `test` WRITE;
/*!40000 ALTER TABLE `test` DISABLE KEYS */;
/*!40000 ALTER TABLE `test` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-03-28 22:40:28
