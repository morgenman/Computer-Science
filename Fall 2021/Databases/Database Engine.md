---
updated: 2022-05-05_11:04:50-04:00
---
# Database Engine
Three Parts:
* **Storage Manager**: a program module that provides the interface between low level data and programs/queries submitted
	* Interaction with OS file manager
	* storing, retrieving, and updating data
	* indexing, [[hashing]] etc. 
* **Query Processing**
	1. Parsing and translation
	2. Optimization
	3. Evaluation
* **Transaction Management
	* Ensuring the db remains in a consistent state even if the system fails
	* uses a Concurrency-control manager
![[DBMS Internals.jpg]]
## Also here is the type of people who access the DB (top of pic.. four of them)
* 