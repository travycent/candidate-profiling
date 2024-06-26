-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Jun 26, 2024 at 10:04 PM
-- Server version: 5.7.39
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `node_sigma_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `candidates`
--

CREATE TABLE `candidates` (
  `candidate_id` int(11) NOT NULL,
  `candidate_firstname` varchar(20) NOT NULL,
  `candidate_lastname` varchar(20) NOT NULL,
  `candidate_phone_number` varchar(13) DEFAULT NULL,
  `candidate_email` varchar(25) NOT NULL,
  `time_interval` varchar(25) DEFAULT NULL,
  `linkedin_profile` varchar(100) DEFAULT NULL,
  `github_profile` varchar(100) NOT NULL,
  `text_comment` text NOT NULL,
  `create_date` datetime NOT NULL,
  `update_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `candidates`
--

INSERT INTO `candidates` (`candidate_id`, `candidate_firstname`, `candidate_lastname`, `candidate_phone_number`, `candidate_email`, `time_interval`, `linkedin_profile`, `github_profile`, `text_comment`, `create_date`, `update_date`) VALUES
(1, 'Inno', 'testin', '2567000000', 'travy@gmail.com', '', '', '', 'Test', '2024-06-24 12:35:09', '2024-06-26 22:02:28'),
(2, 'Smith', 'Smith', '555-555-5555', 'john.smith@example.com', '9am-12pm', 'https://www.linkedin.com/in/john-smith-12345678', 'https://github.com/johndoe', 'This is a comment about the candidate.', '2024-06-24 12:35:09', NULL),
(3, 'Smith', 'Smith', '555-555-5555', 'john1.smith@example.com', '9am-12pm', 'https://www.linkedin.com/in/john-smith-12345678', 'https://github.com/johndoe', 'This is a comment about the candidate.', '2024-06-25 09:17:13', NULL),
(4, 'Smith', 'Smith', '555-555-5555', 'john12.smith@example.com', '9am-12pm', 'https://www.linkedin.com/in/john-smith-12345678', 'https://github.com/johndoe', 'test', '2024-06-25 09:33:01', NULL),
(5, 'Smith', 'Smith', '555-555-5555', 'john13.smith@example.com', '9am-12pm', 'https://www.linkedin.com/in/john-smith-12345678', 'https://github.com/johndoe', 'babab', '2024-06-25 09:51:46', NULL),
(6, 'Smith', 'Smith', '555-555-5555', 'john14.smith@example.com', '9am-12pm', 'https://www.linkedin.com/in/john-smith-12345678', 'https://github.com/johndoe', 'babab', '2024-06-25 10:07:35', '2024-06-25 10:10:38'),
(7, 'Matsiko', 'Innocent Travy', '0771917923', 'kk@gmail.com', '', '', '', 'nndndnnd', '2024-06-26 13:12:08', '2024-06-26 15:27:42'),
(8, 'Matsiko', 'Innocent Travy', '0771917923', 'vv@gmail.com', '', '', '', 'nnn', '2024-06-26 15:28:43', NULL),
(9, 'Matsiko', 'Innocent Travy', '0771917923', 'centtravy@gmail.com', '', '', '', 'Test', '2024-06-26 15:35:40', '2024-06-26 22:02:09');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `candidates`
--
ALTER TABLE `candidates`
  ADD PRIMARY KEY (`candidate_id`),
  ADD UNIQUE KEY `candidate_email` (`candidate_email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `candidates`
--
ALTER TABLE `candidates`
  MODIFY `candidate_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
