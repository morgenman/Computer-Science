---
updated: 2022-01-23_12:32:31-05:00
---
# Data Definition Language
eg: ``` create table instructor(
			ID char(5),
			name varchar(20)
			dept_name varchar(20,
			salary numeric(8,2))```

Notation for defining db schema
set of table templates stored in a [[data dictionary]]
* character vs varchar

**Contains the following metadata**
* Database schema
* Integrity constraints
	* primary key (ID which uniquely identifies elements)
* Authorization
	* who can access what


* in the above example dept_name is the [[Foreign Key]] to the department table