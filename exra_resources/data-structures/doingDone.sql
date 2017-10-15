SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `doingDone`
--

DROP TABLE IF EXISTS `doingDone__join__payment_user_amount`;
DROP TABLE IF EXISTS `doingDone__join__activities`;
DROP TABLE IF EXISTS `doingDone__join__random_recurrences`;
DROP TABLE IF EXISTS `doingDone__join__task_actor`;
DROP TABLE IF EXISTS `doingDone_tasks`;
DROP TABLE IF EXISTS `doingDone_users`;
DROP TABLE IF EXISTS `doingDone_households`;
DROP TABLE IF EXISTS `_doingDone__enum__intervention_required`;
DROP TABLE IF EXISTS `_doingDone__enum__completion_level`;
DROP TABLE IF EXISTS `_doingDone__enum__day_of_week`;
DROP TABLE IF EXISTS `_doingDone__enum__devices`;
DROP TABLE IF EXISTS `_doingDone__enum__school_term_mode`;
DROP TABLE IF EXISTS `_doingDone__enum__repeat_mode`;

-- --------------------------------------------------------




-- --------------------------------------------------------

--
-- Table structure for table `_doingDone__enum__completion_level`
--

CREATE TABLE IF NOT EXISTS `_doingDone__enum__completion_level` (
  `completion_level_id` tinyint(3) unsigned NOT NULL auto_increment,
  `completion_level_name` varchar(16) NOT NULL,
  PRIMARY KEY  (`completion_level_id`),
  UNIQUE KEY `completion_level_name` (`completion_level_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1;

INSERT INTO `_doingDone__enum__completion_level` (
	`completion_level_id` ,
	`completion_level_name`
)
VALUES
( NULL , 'Not done' ),
( NULL , 'Partially done' ),
( NULL , 'Done fully' ),
( NULL , 'Dine outstandingly' );



-- --------------------------------------------------------

--
-- Table structure for table `_doingDone__enum__completion_level`
--

CREATE TABLE IF NOT EXISTS `_doingDone__enum__intervention_required` (
  `intervention_required_id` tinyint(3) unsigned NOT NULL auto_increment,
  `intervention_required_name` varchar(8) NOT NULL,
  PRIMARY KEY  (`intervention_required_id`),
  UNIQUE KEY `intervention_required_name` (`intervention_required_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1;

INSERT INTO `_doingDone__enum__intervention_required` (
	`intervention_required_id` ,
	`intervention_required_name`
)
VALUES
( NULL , 'Battled' ),
( NULL , 'Coerced' ),
( NULL , 'Prompted' ),
( NULL , 'Volunteered' );



-- --------------------------------------------------------

--
-- Table structure for table `_doingDone__enum__day_of_week`
--
CREATE TABLE IF NOT EXISTS `_doingDone__enum__day_of_week` (
  `day_of_week_id` tinyint(3) unsigned NOT NULL auto_increment,
  `day_of_week_name` varchar(8) NOT NULL,
  PRIMARY KEY  (`day_of_week_id`),
  UNIQUE KEY `day_of_week_name` (`day_of_week_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1;

INSERT INTO `_doingDone__enum__day_of_week` (
	`day_of_week_id` ,
	`day_of_week_name`
)
VALUES
( NULL , 'Monday' ),
( NULL , 'Tuesday' ),
( NULL , 'Wednesday' ),
( NULL , 'Thursday' ),
( NULL , 'Friday' ),
( NULL , 'Saturday' ),
( NULL , 'Sunday' );



-- --------------------------------------------------------

--
-- Table structure for table `_doingDone__enum__device_mode`
--

CREATE TABLE IF NOT EXISTS `_doingDone__enum__device_mode` (
  `device_mode_id` tinyint(3) unsigned NOT NULL auto_increment,
  `device_mode_name` varchar(44) NOT NULL,
  PRIMARY KEY  (`device_id`),
  UNIQUE KEY `device_name` (`device_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1;

INSERT INTO `_doingDone__enum__device_mode` (
	`device_mode_id` ,
	`device_mode_name`
)
VALUES
( NULL , 'One device only' ),
( NULL , 'One device for responsibles' ),
( NULL , 'Multiple devices for responsibles' );



-- --------------------------------------------------------

--
-- Table structure for table `_doingDone__enum__school_term_mode`
--
CREATE TABLE IF NOT EXISTS `_doingDone__enum__school_term_mode` (
  `school_term_mode_id` tinyint(3) unsigned NOT NULL auto_increment,
  `school_term_mode_name` varchar(8) NOT NULL,
  PRIMARY KEY  (`school_term_mode_id`),
  UNIQUE KEY `school_term_mode_name` (`school_term_mode_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1;

INSERT INTO `_doingDone__enum__school_term_mode` (
	`school_term_mode_id` ,
	`school_term_mode_name`
)
VALUES
( NULL , 'Not applicable' ),
( NULL , 'School term only' ),
( NULL , 'School holidays only' );



-- --------------------------------------------------------

--
-- Table structure for table `_doingDone__enum__repeat_mode`
--
CREATE TABLE IF NOT EXISTS `_doingDone__enum__repeat_mode` (
  `repeat_mode_id` tinyint(3) unsigned NOT NULL auto_increment,
  `repeat_mode_name` varchar(8) NOT NULL,
  PRIMARY KEY  (`repeat_mode_id`),
  UNIQUE KEY `repeat_mode_name` (`repeat_mode_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1;

INSERT INTO `_doingDone__enum__repeat_mode` (
	`repeat_mode_id` ,
	`repeat_mode_name`
)
VALUES
( NULL , 'Not applicable' ),
( NULL , 'Predictable' ),
( NULL , 'Random' );



-- --------------------------------------------------------


--
-- Table structure for table `doingDone_households`
--


CREATE TABLE IF NOT EXISTS `doingDone_households` (
	`household_id` int(11) unsigned NOT NULL auto_increment,
	`household_active` tinyint(1) unsigned DEFAULT 1,
	`household_name` varchar(32) NOT NULL,
	`household_timezone` varchar(32) NOT NULL,
	`household_locale` char(5) NOT NULL,
	`household_is_school_day` tinyint(1) unsigned DEFAULT 0,
	`household_is_school_holiday` tinyint(1) unsigned DEFAULT 0,
	`household_is_public_holiday` tinyint(1) unsigned DEFAULT 0,
	`household_completion_level_not` float DEFAULT 0,
	`household_completion_level_partially` float DEFAULT 0.5,
	`household_completion_level_fully` float DEFAULT 1.0,
	`household_completion_level_outstandingly` float DEFAULT 1.5,
	`household_intervention_required_volunteered` float DEFAULT 1.3,
	`household_intervention_required_prompted` float DEFAULT 1,
	`household_intervention_required_coerced` float DEFAULT 0.7,
	`household_intervention_required_battled` float DEFAULT 0.4,
	`household_currency` varchar(6) DEFAULT 'AUD',
	`household_pay_period` tinyint(3) DEFAULT 7 COMMENT 'number of days',
	`household_pay_day__day_of_week_id` tinyint(3) unsigned NOT NULL,
	`household_points_to_currency` float DEFAULT 1,
	PRIMARY KEY  (`household_id`),
	UNIQUE KEY `household_name` (`household_name`),
	INDEX `household_active` (`household_active`),
	INDEX `household_is_school_day` (`household_is_school_day`),
	INDEX `household_is_school_holiday` (`household_is_school_holiday`),
	INDEX `household_is_public_holiday` (`household_is_public_holiday`),
	FOREIGN KEY (`household_pay_day__day_of_week_id`)
		REFERENCES `_doingDone__enum__day_of_week` (`day_of_week_id`)
		ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1;


-- --------------------------------------------------------

--
-- Table structure for table `doingDone_users`
--

CREATE TABLE IF NOT EXISTS `doingDone_users` (
	`user_id` int(11) unsigned NOT NULL auto_increment,
	`user__household_id` int(11) unsigned DEFAULT NULL,
	`user_created` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`user_username` varchar(16),
	`user_password` char(42) NOT NULL COMMENT 'pbk hash',
	`user_name` varchar(16) NOT NULL,
	`user_email` char(42) DEFAULT NULL COMMENT 'two way hash',
	`user_avatar` text DEFAULT NULL COMMENT 'either base64 encoded image file used as avatar for user',
	`user_approver` tinyint(1) unsigned DEFAULT 0,
	`user_active` tinyint(1) unsigned DEFAULT 1,
	`user_show_time_remaining` tinyint(1) unsigned DEFAULT 1 COMMENT 'When displaying a task in a list for doers, show how much time is left before task expires',
	`user_points_period_total` float default NULL COMMENT 'total amount of point for current period',
	`user_points_grand_total` float default NULL COMMENT 'total amount of point ever earned by this user',
	`user_last_pay_date` date default NULL COMMENT 'Date user was last paid'
	PRIMARY KEY  (`user_id`),
	INDEX `user_name` (`user_name`),
	UNIQUE KEY `doingDone_household_users` (`user_username`),
	INDEX `doingDone_household_users_approvers` (
		`user_active`,
		`user__household_id`,
		`user_approver`
	),
	FOREIGN KEY (`user__household_id`)
		REFERENCES `doingDone_households` (`household_id`)
		ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1;


-- --------------------------------------------------------

--
-- Table structure for table `doingDone_tasks`
--

CREATE TABLE IF NOT EXISTS `doingDone_tasks` (
	`task_id` int(11) unsigned NOT NULL auto_increment,
	`task_created` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`task__household_id` int(11) unsigned NOT NULL,
	`task_active` tinyint(1) unsigned DEFAULT 0,
	`task_allow_partial` tinyint(1) unsigned DEFAULT 0,
	`task_required` tinyint(1) unsigned DEFAULT 0,
	`task_rotating` tinyint(1) unsigned DEFAULT 0,
	`task_priority`	tinyint(3) unsigned DEFAULT 10 COMMENT 'how important is it that this task is done',
	`task_assigned_to__user_id` int(11) unsigned DEFAULT NULL COMMENT 'user ID of the user responsible for completing the task',
	`task_name` varchar(32) NOT NULL COMMENT '(possibly standardised) name for task - visible in to do list',
	`task_unique_name` varchar(32) NOT NULL COMMENT 'unique name only visible to task creators/household admins',
	`task_description` text NOT NULL,
	`task_visual` text DEFAULT NULL COMMENT 'either base64 encoded image file or SVG',
	`task_start_time` time NOT NULL,
	`task_end_time` time NOT NULL,
	`task_extended_end_time` time DEFAULT NULL COMMENT 'allow completion after normal end time',
	`task__repeat_mode_id` tinyint(3) unsigned DEFAULT 1,
	`task_repeat_next_start_date` date DEFAULT NULL,
	`task_repeat_next_end_date` date DEFAULT NULL,
	`task_repeat_initial_start_date` date DEFAULT NULL,
	`task_repeat_final_end_date` date DEFAULT NULL,
	`task_repeat_interval` int(11) DEFAULT NULL,
	`task_monday` tinyint(1) unsigned DEFAULT 1,
	`task_tuesday` tinyint(1) unsigned DEFAULT 1,
	`task_wednesday` tinyint(1) unsigned DEFAULT 1,
	`task_thursday` tinyint(1) unsigned DEFAULT 1,
	`task_friday` tinyint(1) unsigned DEFAULT 1,
	`task_saturday` tinyint(1) unsigned DEFAULT 1,
	`task_sunday` tinyint(1) unsigned DEFAULT 1,
	`task_school_days` tinyint(1) unsigned DEFAULT 1,
	`task_school_holidays` tinyint(1) unsigned DEFAULT 1,
	`task_public_holidays` tinyint(1) unsigned DEFAULT 1,
	`value` float unsigned DEFAULT 1 COMMENT 'used to boost points for difficult/higher value/less palatable task and lower points for easy/fun tasks',
	PRIMARY KEY  (`task_id`),
	INDEX `task__household_id` (`task__household_id`),
	INDEX `task_rotating` (`task_rotating`),
	INDEX `task_active` (`task_active`),
	INDEX `task_assigned_to` (`task_assigned_to__user_id`),
	INDEX `task_school_days` (`task_school_days`),
	INDEX `task_school_holidays` (`task_school_holidays`),
	INDEX `task_public_holidays` (`task_public_holidays`),
	INDEX `monday` (
		`task__household_id`,
		`task_monday`,
		`task_start_time`,
		`task_end_time`
	),
	INDEX `tuesday` (
		`task__household_id`,
		`task_tuesday`,
		`task_start_time`,
		`task_end_time`
	),
	INDEX `wednesday` (
		`task__household_id`,
		`task_wednesday`,
		`task_start_time`,
		`task_end_time`
	),
	INDEX `thursday` (
		`task__household_id`,
		`task_thursday`,
		`task_start_time`,
		`task_end_time`
	),
	INDEX `friday` (
		`task__household_id`,
		`task_friday`,
		`task_start_time`,
		`task_end_time`
	),
	INDEX `saturday` (
		`task__household_id`,
		`task_saturday`,
		`task_start_time`,
		`task_end_time`
	),
	INDEX `sunday` (
		`task__household_id`,
		`task_sunday`,
		`task_start_time`,
		`task_end_time`
	),
	INDEX `task_repeat_absolute_start_end_date` (
		`task_repeat_initial_start_date`,
		`task_repeat_final_end_date`
	),
	INDEX `task_repeat_next_start_end_date` (
		`task_repeat_next_start_date`,
		`task_repeat_next_end_date`
	),
	FOREIGN KEY (`task__household_id`)
		REFERENCES `doingDone_households` (`household_id`)
		ON DELETE RESTRICT ON UPDATE CASCADE,
	FOREIGN KEY (`task_assigned_to__user_id`)
		REFERENCES `doingDone_users` (`user_id`)
		ON DELETE RESTRICT ON UPDATE CASCADE,
	FOREIGN KEY (`task__school_term_mode_id`)
		REFERENCES `_doingDone__enum__school_term_mode` (`school_term_mode_id`)
		ON DELETE NO ACTION ON UPDATE CASCADE,
	FOREIGN KEY (`task__repeat_mode_id`)
		REFERENCES `_doingDone__enum__repeat_mode` (`repeat_mode_id`)
		ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1;


-- --------------------------------------------------------

--
-- Table structure for table `doingDone_goals`
--

CREATE TABLE IF NOT EXISTS `doingDone_goals` (
	`goal_id` int(11) unsigned NOT NULL auto_increment,
	`goal_created` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`goal__household_id` int(11) unsigned NOT NULL,
	`goal__user_id` int(11) unsigned NOT NULL,
	`goal_active` tinyint(1) unsigned DEFAULT 0,
	`goal_allow_partial` tinyint(1) unsigned DEFAULT 0,
	`goal_priority`	tinyint(3) unsigned DEFAULT 10 COMMENT 'how important is it that this goal is done',
	`goal_name` varchar(32) NOT NULL COMMENT '(possibly standardised) name for goal - visible in to do list',
	`goal_unique_name` varchar(32) NOT NULL COMMENT 'unique name only visible to goal creators/household admins',
	`goal_description` text NOT NULL,
	`goal_visual` text DEFAULT NULL COMMENT 'either base64 encoded image file or SVG',
	`goal_start_time` time NOT NULL,
	`goal_end_time` time NOT NULL,
	`goal_extended_end_time` time DEFAULT NULL COMMENT 'allow completion after normal end time',
	`goal__repeat_mode_id` tinyint(3) unsigned DEFAULT 1,
	`goal_repeat_next_start_date` date DEFAULT NULL,
	`goal_repeat_next_end_date` date DEFAULT NULL,
	`goal_repeat_initial_start_date` date DEFAULT NULL,
	`goal_repeat_final_end_date` date DEFAULT NULL,
	`goal_repeat_interval` int(11) DEFAULT NULL,
	`goal_monday` tinyint(1) unsigned DEFAULT 0,
	`goal_tuesday` tinyint(1) unsigned DEFAULT 0,
	`goal_wednesday` tinyint(1) unsigned DEFAULT 0,
	`goal_thursday` tinyint(1) unsigned DEFAULT 0,
	`goal_friday` tinyint(1) unsigned DEFAULT 0,
	`goal_saturday` tinyint(1) unsigned DEFAULT 0,
	`goal_sunday` tinyint(1) unsigned DEFAULT 0,
	`goal_school_days` tinyint(1) unsigned DEFAULT 1,
	`goal_school_holidays` tinyint(1) unsigned DEFAULT 1,
	`goal_public_holidays` tinyint(1) unsigned DEFAULT 1,
--	`holidays` tinyint(1) unsigned DEFAULT 0,
	`value` float unsigned DEFAULT 1 COMMENT 'used to boost points for difficult/higher value/less palatable task and lower points for easy/fun tasks',
	PRIMARY KEY  (`goal_id`),
	INDEX `goal__household_id` (`goal__household_id`),
	INDEX `goal_rotating` (`goal_rotating`),
	INDEX `goal_active` (`goal_active`),
	INDEX `goal_assigned_to` (`goal_assigned_to__user_id`),
	INDEX `goal_school_days` (`goal_school_days`),
	INDEX `goal_school_holidays` (`goal_school_holidays`),
	INDEX `goal_public_holidays` (`goal_public_holidays`),
	INDEX `monday` (
		`goal__household_id`,
		`goal_monday`,
		`goal_start_time`,
		`goal_end_time`
	),
	INDEX `tuesday` (
		`goal__household_id`,
		`goal_tuesday`,
		`goal_start_time`,
		`goal_end_time`
	),
	INDEX `wednesday` (
		`goal__household_id`,
		`goal_wednesday`,
		`goal_start_time`,
		`goal_end_time`
	),
	INDEX `thursday` (
		`goal__household_id`,
		`goal_thursday`,
		`goal_start_time`,
		`goal_end_time`
	),
	INDEX `friday` (
		`goal__household_id`,
		`goal_friday`,
		`goal_start_time`,
		`goal_end_time`
	),
	INDEX `saturday` (
		`goal__household_id`,
		`goal_saturday`,
		`goal_start_time`,
		`goal_end_time`
	),
	INDEX `sunday` (
		`goal__household_id`,
		`goal_sunday`,
		`goal_start_time`,
		`goal_end_time`
	),
	INDEX `goal_repeat_absolute_start_end_date` (
		`goal_repeat_initial_start_date`,
		`goal_repeat_final_end_date`
	),
	INDEX `goal_repeat_next_start_end_date` (
		`goal_repeat_next_start_date`,
		`goal_repeat_next_end_date`
	),
	FOREIGN KEY (`goal__household_id`)
		REFERENCES `doingDone_households` (`household_id`)
		ON DELETE RESTRICT ON UPDATE CASCADE,
	FOREIGN KEY (`goal_assigned_to__user_id`)
		REFERENCES `doingDone_users` (`user_id`)
		ON DELETE RESTRICT ON UPDATE CASCADE,
	FOREIGN KEY (`goal__school_term_mode_id`)
		REFERENCES `_doingDone__enum__school_term_mode` (`school_term_mode_id`)
		ON DELETE NO ACTION ON UPDATE CASCADE,
	FOREIGN KEY (`goal__repeat_mode_id`)
		REFERENCES `_doingDone__enum__repeat_mode` (`repeat_mode_id`)
		ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1;




-- --------------------------------------------------------

--
-- Table structure for table `doingDone__join__task_random_recurrences`
--

CREATE TABLE IF NOT EXISTS `doingDone__join__task_random_recurrences` (
	`task_random_recurrences__task_id` int(11) unsigned NOT NULL,
	`task_random_recurrences_start_date` date NOT NULL,
	`task_random_recurrences_end_date` date NOT NULL,
	UNIQUE KEY `task_random_recurrences_start` (
		`task_random_recurrences__task_id`,
		`task_random_recurrences_start_date`
	),
	UNIQUE KEY `task_random_recurrences_end` (
		`task_random_recurrences__task_id`,
		`task_random_recurrences_end_date`
	),
	INDEX `task_random_recurrences_start_end` (`task_random_recurrences_start_date`, `task_random_recurrences_end_date`),
	FOREIGN KEY (`random_recurrences__task_id`)
		REFERENCES `doingDone_tasks` (`task_id`)
		ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;




-- --------------------------------------------------------

--
-- Table structure for table `doingDone__join__task_monthly_recurrences`
--

CREATE TABLE IF NOT EXISTS `doingDone__join__task_monthly_recurrences` (
	`task_monthly_recurrences__task_id` int(11) unsigned NOT NULL,
	`task_monthly_recurrences_Weekday_of_month` tinyint(3) unsigned NOT NULL,
	`task_monthly_recurrences_position` tinyint(2) unsigned NOT NULL,
	`task_monthly_recurrences_from_end_of_month` tinyint(1) unsigned DEFAULT 0,
	`task_monthly_recurrences_duration` tinyint(3) unsigned DEFAULT 1,
	UNIQUE KEY `task_monthly_recurrences_start` (
		`task_monthly_recurrences__task_id`,
		`task_monthly_recurrences_Weekday_of_month`,
		`task_monthly_recurrences_position`,
		`task_monthly_recurrences_from_end_of_month`
	),
	INDEX `task_monthly_recurrences__task_id` (`task_monthly_recurrences__task_id`),
	FOREIGN KEY (`monthly_recurrences__task_id`)
		REFERENCES `doingDone_tasks` (`task_id`)
		ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;




-- --------------------------------------------------------

--
-- Table structure for table `doingDone__join__goal_random_recurrences`
--

CREATE TABLE IF NOT EXISTS `doingDone__join__goal_random_recurrences` (
	`goal_random_recurrences__task_id` int(11) unsigned NOT NULL,
	`goal_random_recurrences_start_date` date NOT NULL,
	`goal_random_recurrences_end_date` date NOT NULL,
	UNIQUE KEY `goal_random_recurrences_start` (
		`goal_random_recurrences__task_id`,
		`goal_random_recurrences_start_date`
	),
	UNIQUE KEY `goal_random_recurrences_end` (
		`goal_random_recurrences__task_id`,
		`goal_random_recurrences_end_date`
	),
	INDEX `goal_random_recurrences_start_end` (`goal_random_recurrences_start_date`, `goal_random_recurrences_end_date`),
	FOREIGN KEY (`random_recurrences__task_id`)
		REFERENCES `doingDone_tasks` (`goal_id`)
		ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;




-- --------------------------------------------------------

--
-- Table structure for table `doingDone__join__task_actor`
--

CREATE TABLE IF NOT EXISTS `doingDone__join__task_actor` (
	`task_actor__task_id` int(11) unsigned NOT NULL,
	`task_actor__user_id` int(11) unsigned NOT NULL,
	`task_actor_is_approver` tinyint(1) unsigned default 0 COMMENT 'if 0 user is responsible. if 1 user is approver',
	UNIQUE KEY `doingDone__join__task_actor` (
		`task_actor__task_id`,
		`task_actor__user_id`,
		`task_actor_is_approver`
	),
	FOREIGN KEY (`task_actor__task_id`)
		REFERENCES `doingDone_tasks` (`task_id`)
		ON DELETE RESTRICT ON UPDATE CASCADE,
	FOREIGN KEY (`task_actor__user_id`)
		REFERENCES `doingDone_users` (`user_id`)
		ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



-- --------------------------------------------------------

--
-- Table structure for table `doingDone__join__task_activities`
--

CREATE TABLE IF NOT EXISTS `doingDone__join__activities` (
	`task_activity_id` int(11) unsigned NOT NULL auto_increment,
	`task_activity_completion_datetime` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`task_activity__task_id` int(11) unsigned NOT NULL,
	`task_activity__completed_by_id` int(11) unsigned NOT NULL,
	`task_activity__acknowledged_by_id` int(11) unsigned DEFAULT NULL,
	`task_activity__completion_level_id` tinyint(3) unsigned DEFAULT NULL,
	`task_activity__intervention_required_id` tinyint(3) unsigned DEFAULT NULL,
	`task_activity__task_computed_value` float DEFAULT NULL COMMENT 'Computed value at time of acknowledgement',
	PRIMARY KEY  (`task_activity_id`),
	UNIQUE KEY `doingDone_task_activity` (
		`task_activity__task_id`,
		`task_activity__completed_by_id`
	),
	INDEX `INDEX_task_activity_completion_datetime` (`task_activity_completion_datetime`),
	INDEX `INDEX_task_activity_acknowledged_by_id` (
		`task_activity__completed_by_id`,
		`task_activity__acknowledged_by_id`
	),
	INDEX `INDEX_task_activity_acknowledged_completed_by` (`task_activity__acknowledged_by_id`),
	INDEX `INDEX_task_activity_completion_level_id` (`task_activity__completion_level_id`),
	INDEX `INDEX_task_activity_intervention_required_id` (`task_activity__intervention_required_id`),
	FOREIGN KEY (`task_activity__task_id`)
		REFERENCES `doingDone_tasks` (`task_id`)
		ON DELETE RESTRICT ON UPDATE CASCADE,
	FOREIGN KEY (`task_activity__completed_by_id`)
		REFERENCES `doingDone_users` (`user_id`)
		ON DELETE RESTRICT ON UPDATE CASCADE,
	FOREIGN KEY (`task_activity__acknowledged_by_id`)
		REFERENCES `doingDone_users` (`user_id`)
		ON DELETE NO ACTION ON UPDATE CASCADE,
	FOREIGN KEY (`task_activity__intervention_required_id`)
		REFERENCES `_doingDone__enum__intervention_required` (`intervention_required_id`)
		ON DELETE NO ACTION ON UPDATE CASCADE,
	FOREIGN KEY (`task_activity__completion_level_id`)
		REFERENCES `_doingDone__enum__completion_level` (`completion_level_id`)
		ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



-- --------------------------------------------------------

--
-- Table structure for table `doingDone__join__goal_activities`
--

CREATE TABLE IF NOT EXISTS `doingDone__join__goal_activities` (
	`goal_activity_id` int(11) unsigned NOT NULL auto_increment,
	`goal_activity_completion_datetime` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`goal_activity__task_id` int(11) unsigned NOT NULL,
	`goal_activity__completed_by_id` int(11) unsigned NOT NULL,
	`goal_activity__acknowledged_by_id` int(11) unsigned DEFAULT NULL,
	`goal_activity__completion_level_id` tinyint(3) unsigned DEFAULT NULL,
	`goal_activity__intervention_required_id` tinyint(3) unsigned DEFAULT NULL,
	`goal_activity__task_computed_value` float DEFAULT NULL COMMENT 'Computed value at time of acknowledgement',
	PRIMARY KEY  (`goal_activity_id`),
	UNIQUE KEY `doingDone_goal_activity` (
		`goal_activity__task_id`,
		`goal_activity__completed_by_id`
	),
	INDEX `INDEX_goal_activity_completion_datetime` (`goal_activity_completion_datetime`),
	INDEX `INDEX_goal_activity_acknowledged_by_id` (
		`goal_activity__completed_by_id`,
		`goal_activity__acknowledged_by_id`
	),
	INDEX `INDEX_goal_activity_acknowledged_completed_by` (`goal_activity__acknowledged_by_id`),
	INDEX `INDEX_goal_activity_completion_level_id` (`goal_activity__completion_level_id`),
	INDEX `INDEX_goal_activity_intervention_required_id` (`goal_activity__intervention_required_id`),
	FOREIGN KEY (`goal_activity__task_id`)
		REFERENCES `doingDone_tasks` (`task_id`)
		ON DELETE RESTRICT ON UPDATE CASCADE,
	FOREIGN KEY (`goal_activity__completed_by_id`)
		REFERENCES `doingDone_users` (`user_id`)
		ON DELETE RESTRICT ON UPDATE CASCADE,
	FOREIGN KEY (`goal_activity__acknowledged_by_id`)
		REFERENCES `doingDone_users` (`user_id`)
		ON DELETE NO ACTION ON UPDATE CASCADE,
	FOREIGN KEY (`goal_activity__intervention_required_id`)
		REFERENCES `_doingDone__enum__intervention_required` (`intervention_required_id`)
		ON DELETE NO ACTION ON UPDATE CASCADE,
	FOREIGN KEY (`goal_activity__completion_level_id`)
		REFERENCES `_doingDone__enum__completion_level` (`completion_level_id`)
		ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



-- --------------------------------------------------------

--
-- Table structure for table `doingDone__join__payment_user_amount`
--

CREATE TABLE IF NOT EXISTS `doingDone__join__payment_user_amount` (
	`payment_recipient__user_id` int(11) unsigned NOT NULL,
	`payment_giver__user_id` int(11) unsigned NOT NULL,
	`payment_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`payment_amount` float unsigned NOT NULL COMMENT 'Payment amount is stored in points not currency value',
	INDEX `INDEX_payment` (`payment_recipient__user_id`, `payment_date`),
	FOREIGN KEY (`payment_recipient__user_id`)
		REFERENCES `doingDone_users` (`user_id`)
		ON DELETE RESTRICT ON UPDATE CASCADE,
	FOREIGN KEY (`payment_giver__user_id`)
		REFERENCES `doingDone_users` (`user_id`)
		ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

