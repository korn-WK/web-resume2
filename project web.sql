-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 28, 2024 at 02:33 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `project web`
--

-- --------------------------------------------------------

--
-- Table structure for table `asset`
--

CREATE TABLE `asset` (
  `ID` int(11) NOT NULL,
  `Category` varchar(30) NOT NULL,
  `assetName` varchar(30) NOT NULL,
  `Status` int(30) NOT NULL,
  `Image` varchar(999) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `asset`
--

INSERT INTO `asset` (`ID`, `Category`, `assetName`, `Status`, `Image`) VALUES
(1, 'borad game', 'The mind', 0, 'b1.jpg'),
(2, 'borad game', 'Sitting Duck Gallery', 0, 'b2.jpg'),
(3, 'borad game', 'Exploding Kitten', 0, 'b3.jpg'),
(4, 'borad game', 'When i dream\r\n', 0, 'b4.jpg'),
(5, 'borad game', 'Dixit', 0, 'b5.jpg'),
(6, 'borad game\r\n\r\n', 'Detective Club', 0, 'b6.jpg'),
(7, 'borad game', 'Salem 1692', 0, 'b7.jpg'),
(8, 'borad game', '2nd Edition\r\n', 0, 'b8.jpg'),
(9, 'borad game', 'Modeen Art', 0, 'b9.jpg'),
(10, 'borad game', 'Splendor', 0, 'b10.jpg'),
(11, 'borad game', 'Newton', 0, 'b11.jpg'),
(12, 'borad game', 'The Settlers of Catan', 0, 'b12.jpg'),
(13, 'borad game', 'Pandemic', 0, 'b13.jpg'),
(14, 'borad game', 'THE ELEMENT', 0, 'b14.jpg'),
(15, 'borad game', 'ORGANS GO!', 0, 'b15.jpg'),
(16, 'borad game', 'PHUKET : HOTEL TYCOON', 0, 'b16.jpg'),
(17, 'borad game', 'Metsovo', 0, 'b17.jpg'),
(18, 'borad game', 'DEFUSE', 0, 'b18.jpg'),
(19, 'borad game', 'WANA', 0, 'b19.jpg'),
(20, 'borad game', 'Flower Shop', 0, 'b20.jpg'),
(21, 'borad game', 'Meeple Detective', 0, 'b21.jpg'),
(22, 'borad game', 'Tale of Carrot : Rise of Heros', 0, 'b22.jpg'),
(23, 'borad game', 'Mogel Motte', 0, 'b23.jpg'),
(24, 'borad game', 'Deception', 0, 'b24.jpg'),
(25, 'borad game', 'Secret Hitler', 0, 'b25.jpg'),
(26, 'borad game', 'Geistes Blitz', 0, 'b26.jpg'),
(27, 'borad game', 'Citadels', 0, 'b27.jpg'),
(28, 'borad game', 'Ultimate Werewolf', 0, 'b28.jpg'),
(29, 'borad game', 'One Night Ultimate Werewolf', 0, 'b29.jpg'),
(30, 'borad game', 'Chinatown', 0, 'b30.jpg'),
(31, 'borad game', 'Codenames Pictures', 0, 'b31.jpg'),
(32, 'borad game', 'Spyfall', 0, 'b32.jpg'),
(33, 'borad game', 'Survive from the Atlantis!', 0, 'b33.jpg'),
(34, 'borad game', 'Avalon', 0, 'b34.jpg'),
(35, 'borad game', 'Uno Flip!', 0, 'b35.jpg'),
(36, 'borad game', 'Happy salmon', 0, 'b36.jpg'),
(37, 'borad game', 'Die Fiesen 7', 0, 'b37.jpg'),
(38, 'borad game', 'Fallout Shelter', 0, 'b38.jpg'),
(39, 'book', 'Pissing about', 0, 'book1.jpg'),
(40, 'book', 'tender wings of desire', 0, 'book2.jpg'),
(41, 'book', 'Only Yesterday', 2, 'book3.jpg'),
(42, 'book', 'Bitch slapped with a salmon', 0, 'book4.jpg'),
(43, 'book', 'everyone shut the fuck up!', 0, 'book5.jpg'),
(44, 'book', 'cowboy dan', 0, 'book6.jpg'),
(45, 'book', 'found it on etsy', 0, 'book7.jpg'),
(46, 'book', 'the famous five caravan', 0, 'book8.jpg'),
(47, 'book', 'the twin at st clears', 0, 'book9.jpg'),
(48, 'book', 'walking home to rosie lee', 0, 'book10.jpg'),
(49, 'book', 'blue glub blue', 0, 'book11.jpg'),
(50, 'book', 'games you can play with your p', 0, 'book12.jpg'),
(51, 'book', 'pinocchio', 0, 'book13.jpg'),
(52, 'book', 'charlie brown', 0, 'book14.jpg'),
(53, 'book', 'brexit campaign leaders', 0, 'book15.jpg'),
(54, 'book', 'the dick ripper', 0, 'book16.jpg'),
(55, 'book', 'the art of catkwondo', 0, 'book17.jpg'),
(56, 'book', 'a taste of blackberries', 0, 'book18.jpg'),
(57, 'book', 'big jabe', 0, 'book19.jpg'),
(58, 'book', 'hardy boys', 0, 'book20.jpg'),
(59, 'book', 'antenna theory', 0, 'book21.jpg'),
(60, 'book', 'what bird did that', 0, 'book22.jpg'),
(61, 'book', 'attack of the robot chicken', 0, 'book23.jpg'),
(62, 'book', 'let\'s ride with strangers and ', 0, 'book24.jpg'),
(63, 'book', 'mail orderred mommies', 0, 'book25.jpg'),
(64, 'book', 'lassie ate a cub scout', 0, 'book26.jpg'),
(65, 'book', 'battery systems engineering', 0, 'book27.jpg'),
(66, 'book', 'Biodiesel', 0, 'book28.jpg'),
(67, 'book', 'bioluminescence', 0, 'book29.jpg'),
(68, 'book', 'biosensors and bioelectronics', 0, 'book30.jpg'),
(69, 'book', 'the mystery of tally-ho cottag', 0, 'book31.jpg'),
(70, 'book', 'sorry boy', 0, 'book32.jpg'),
(71, 'book', 'the cat in the hat comes back', 0, 'book33.jpg'),
(72, 'book', 'billy', 0, 'book34.jpg'),
(73, 'book', 'george', 0, 'book35.jpg'),
(74, 'book', 'was it down there did you get ', 0, 'book36.jpg'),
(75, 'book', 'electronic devices', 0, 'book37.jpg'),
(76, 'book', 'op amp applications handbook', 0, 'book38.jpg'),
(77, 'book', 'advanced potion making', 0, 'book39.jpg'),
(78, 'book', 'end zone', 0, 'book40.jpg'),
(79, 'Notebook', 'Acer Aspire 5', 0, 'acer aspire 5.webp'),
(80, 'Tablet', 'iPad (10th generation)', 0, 'ipad 1oth gen.jpeg'),
(81, 'Tablet', 'Ipad air 5', 0, 'ipad air 5.jpeg'),
(82, 'Tablet', 'Asus Vivobook 15', 0, 'asus vivobook 15.png'),
(83, 'Notebook', 'Lenovo IdeaPad Slim 3i', 0, 'lenovo ideapad slim 3.jpeg'),
(84, 'Notebook', 'Lenovo ideapad 3', 0, 'lenovo ideapad 3.png'),
(85, 'Notebook', 'Asus Vivobook 16', 0, 'asus v16.webp'),
(86, 'Notebook', 'HP 15 Laptop', 0, 'he.jpeg'),
(87, 'Notebook', 'ASUS VivoBook 15', 0, 'asus vivobook 15.png'),
(88, 'Notebook', 'Dell Inspiron 3000 Series', 0, 'dell inspiron 3000.jpeg'),
(89, 'Notebook', 'Acer Chromebook Spin 311', 0, 'acer chromebook spin 311.jpeg'),
(90, 'Notebook', 'HP Chromebook 14', 0, 'hp chromebook 14.jpeg'),
(91, 'Notebook', 'Lenovo Chromebook Duet', 0, 'lenovo chromebook duet .png'),
(92, 'Notebook', 'ASUS Chromebook C202XA', 0, 'asus chromebook c202xa.jpeg'),
(93, 'Notebook', 'Dell Inspiron 14 3000 Series', 0, 'dell inspiron 14 3000 series.w'),
(94, 'Notebook', 'HP Pavilion x360', 0, 'hp pavilion x360.jpeg'),
(95, 'Notebook', 'Lenovo Flex 5', 0, 'lenovo.jpg'),
(96, 'Notebook', 'ASUS VivoBook Flip 14', 0, 'asus vivobook flip 14.jpeg'),
(97, 'Notebook', 'Acer Spin 3', 0, 'acer spin 3.webp'),
(98, 'Notebook', 'Dell Inspiron 14 2-in-1', 0, 'dell inspiron 14 2 in 1.png'),
(99, 'Notebook', 'Lenovo IdeaPad Flex 5', 0, 'lif5.jpeg'),
(100, 'Notebook', 'HP Pavilion 14', 0, 'hp.jpeg'),
(101, 'Notebook', 'ASUS VivoBook 14', 0, 'asus vivobook 15.png'),
(102, 'Notebook', 'Acer Aspire 5 Slim', 0, 'aa5s.jpg'),
(103, 'Notebook', 'Dell Inspiron 15 3000 2-in-1', 0, 'dell inspiron 14 2 in 1.png'),
(104, 'Tablet', 'iPad (9th generation)', 0, 'ipad 9th gen.webp'),
(105, 'Tablet', 'iPad Air (3rd generation)', 0, 'ipad air 3rd gen.jpeg'),
(106, 'Tablet', 'iPad mini (6th generation)', 0, 'ipad mini 6th gen.jpeg'),
(107, 'Tablet', 'iPad (8th generation)', 0, 'ipad 8th gen.jpg'),
(108, 'Tablet', 'iPad mini (5th generation)', 0, 'ipad mini 6th gen.jpeg'),
(109, 'Tablet', 'iPad Air (4th generation)', 0, 'ipad air 5.jpeg'),
(110, 'Tablet', 'iPad Pro 10.5-inch', 0, 'ipad pro 10.5,11,12.9 inch.jpe'),
(111, 'Tablet', 'iPad Pro 11-inch', 0, 'ipad pro 10.5,11,12.9 inch.jpe'),
(112, 'Tablet', 'iPad Pro 12.9-inch', 0, 'ipad pro 10.5,11,12.9 inch.jpe'),
(113, 'Notebook', 'Acer Swift Go', 0, 'asg.jpeg'),
(114, 'Notebook', 'MSI Modern 15', 0, 'msi modern 15.png'),
(115, 'Notebook', 'Lenovo IdeaPad 1', 0, 'lenovo ideapad 1.jpeg'),
(116, 'Notebook', 'Dell Vostro 3430', 0, 'dell.webp'),
(117, 'Notebook', 'MSI Modern 14', 0, 'msi modern 15.png'),
(118, 'Notebook', 'HP 15s-eq2226AU', 0, 'hp 15s-ea2226au.jpeg'),
(119, 'Notebook', 'Lenovo V15 Gen 3', 0, 'lenovo v15 gen 3.avif'),
(120, 'Notebook', 'HP Laptop 15s-eq5154TU', 0, 'hp labtop 15s-eq5154u.avif'),
(121, 'Tablet', 'iPad (9th generation)', 0, 'ipad 9th gen.webp'),
(122, 'Tablet', 'iPad Air (3rd generation)', 0, 'ipad air 3rd gen.jpeg'),
(123, 'Tablet', 'iPad mini (6th generation)', 0, 'ipad mini 6th gen.jpeg'),
(124, 'Tablet', 'iPad (8th generation)', 0, 'ipad 8th gen.jpg'),
(125, 'Tablet', 'iPad Air (4th generation)', 0, 'ipad air 5.jpeg'),
(126, 'Tablet', 'iPad Pro 10.5-inch', 0, 'ipad pro 10.5,11,12.9 inch.jpe'),
(127, 'Tablet', 'iPad Pro 11-inch', 0, 'ipad pro 10.5,11,12.9 inch.jpe'),
(128, 'Tablet', 'iPad Pro 12.9-inch', 0, 'ipad pro 10.5,11,12.9 inch.jpe');

-- --------------------------------------------------------

--
-- Table structure for table `history`
--

CREATE TABLE `history` (
  `History_ID` int(11) NOT NULL,
  `Lender_ID` int(11) DEFAULT NULL,
  `Asset_ID` int(11) NOT NULL,
  `verify` int(11) NOT NULL DEFAULT 0,
  `Start_date` date NOT NULL,
  `End_date` date NOT NULL,
  `Staff_ID` int(11) DEFAULT NULL,
  `Borrorwer_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `history`
--

INSERT INTO `history` (`History_ID`, `Lender_ID`, `Asset_ID`, `verify`, `Start_date`, `End_date`, `Staff_ID`, `Borrorwer_ID`) VALUES
(8, 1, 39, 3, '2024-04-27', '2024-04-27', 3, 7),
(9, 1, 40, 3, '2024-04-27', '2024-04-27', 3, 2),
(10, 1, 41, 1, '2024-04-27', '2024-04-27', NULL, 2),
(11, 1, 42, 2, '2024-04-27', '2024-04-27', NULL, 2),
(12, 1, 43, 2, '2024-04-27', '2024-04-27', NULL, 7);

-- --------------------------------------------------------

--
-- Table structure for table `request`
--

CREATE TABLE `request` (
  `Asset_ID` int(11) NOT NULL,
  `Borrorwer_ID` int(11) NOT NULL,
  `Start_Date` date NOT NULL,
  `End_Date` date NOT NULL,
  `Request_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `ID` int(11) NOT NULL,
  `Role` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`ID`, `Role`) VALUES
(1, 'Borrower'),
(2, 'Staff'),
(3, 'Lender');

-- --------------------------------------------------------

--
-- Table structure for table `status`
--

CREATE TABLE `status` (
  `Status_ID` int(11) NOT NULL,
  `status` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `status`
--

INSERT INTO `status` (`Status_ID`, `status`) VALUES
(0, 'Available'),
(1, 'Disabled'),
(2, 'Borrowed'),
(3, 'Pending');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `ID` int(11) NOT NULL,
  `Name` varchar(30) NOT NULL,
  `Lastname` varchar(30) NOT NULL,
  `Email` varchar(30) NOT NULL,
  `Password` varchar(70) NOT NULL,
  `role` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`ID`, `Name`, `Lastname`, `Email`, `Password`, `role`) VALUES
(1, 'Jose', 'Jaze', 'Lender1@test.com', '$2b$10$yu1kEF6F7kITFgAZWkoL/e1wKSrY6AO.xu5g1KP1aH5NPmq1icH0m', 3),
(2, 'John', 'Witch', 'user1@test.com', '$2b$10$wh0iZe3.vwi8eQYg9hUNyONk1R.nnvI252umiD92QMQ7uJ7DBXkj.', 1),
(3, 'Noi', 'Noi', 'Staff1@test.com', '$2b$10$EaB72/2snh4OSgO4s6RRbOwbMdbkfaQLRMN5UJEWsVGmYAMy1dcSq', 2),
(7, 'Adisorn', 'Sa-ard', 'bankza527@gmail.com', '$2b$10$9YnCSkHUAIgRgcscHvvaq.Uc4JmL9WaWW6wtoC6fdIgCQ87DAdQim', 1);

-- --------------------------------------------------------

--
-- Table structure for table `verify`
--

CREATE TABLE `verify` (
  `Verify_ID` int(11) NOT NULL,
  `Name` varchar(70) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `verify`
--

INSERT INTO `verify` (`Verify_ID`, `Name`) VALUES
(0, 'Pending'),
(1, 'Approve'),
(2, 'Disapprove'),
(3, 'return');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `asset`
--
ALTER TABLE `asset`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `Status` (`Status`);

--
-- Indexes for table `history`
--
ALTER TABLE `history`
  ADD PRIMARY KEY (`History_ID`),
  ADD KEY `Asset_ID` (`Asset_ID`),
  ADD KEY `Lender_ID` (`Lender_ID`),
  ADD KEY `Borrorwer_ID` (`Borrorwer_ID`),
  ADD KEY `Staff_ID` (`Staff_ID`),
  ADD KEY `verify` (`verify`);

--
-- Indexes for table `request`
--
ALTER TABLE `request`
  ADD PRIMARY KEY (`Request_ID`),
  ADD KEY `Asset_ID` (`Asset_ID`),
  ADD KEY `Borrorwer_ID` (`Borrorwer_ID`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `status`
--
ALTER TABLE `status`
  ADD PRIMARY KEY (`Status_ID`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `role` (`role`);

--
-- Indexes for table `verify`
--
ALTER TABLE `verify`
  ADD PRIMARY KEY (`Verify_ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `asset`
--
ALTER TABLE `asset`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=132;

--
-- AUTO_INCREMENT for table `history`
--
ALTER TABLE `history`
  MODIFY `History_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `request`
--
ALTER TABLE `request`
  MODIFY `Request_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=73;

--
-- AUTO_INCREMENT for table `role`
--
ALTER TABLE `role`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `asset`
--
ALTER TABLE `asset`
  ADD CONSTRAINT `asset_ibfk_1` FOREIGN KEY (`Status`) REFERENCES `status` (`Status_ID`);

--
-- Constraints for table `history`
--
ALTER TABLE `history`
  ADD CONSTRAINT `history_ibfk_1` FOREIGN KEY (`Asset_ID`) REFERENCES `asset` (`ID`),
  ADD CONSTRAINT `history_ibfk_2` FOREIGN KEY (`Lender_ID`) REFERENCES `user` (`ID`),
  ADD CONSTRAINT `history_ibfk_3` FOREIGN KEY (`Borrorwer_ID`) REFERENCES `user` (`ID`),
  ADD CONSTRAINT `history_ibfk_4` FOREIGN KEY (`Staff_ID`) REFERENCES `user` (`ID`),
  ADD CONSTRAINT `history_ibfk_5` FOREIGN KEY (`verify`) REFERENCES `verify` (`Verify_ID`);

--
-- Constraints for table `request`
--
ALTER TABLE `request`
  ADD CONSTRAINT `request_ibfk_1` FOREIGN KEY (`Asset_ID`) REFERENCES `asset` (`ID`),
  ADD CONSTRAINT `request_ibfk_2` FOREIGN KEY (`Borrorwer_ID`) REFERENCES `user` (`ID`);

--
-- Constraints for table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `user_ibfk_1` FOREIGN KEY (`role`) REFERENCES `role` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
