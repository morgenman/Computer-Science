---
created: 2021-10-21T13:46:26-04:00
updated: 2021-10-21T14:23:23-04:00
---
# Databases
* https://www.db-book.com/db7/university-lab-dir/sample_tables-dir/index.html
* DBMS (Database Management System)
	* 2 part system
		* Collecting Data
			* How etc..
		* Accessing Data
			* Managing, accessing etc.
* vs file based data ..cons of file based data.. 
	* Atomicity of updates
		* Failures can leave db in an inconsistent state with partial updates. 
	* Concurrent access 
		* needed for performance
		* uncontrolled can lead to inconsistencies


* [[Levels of Abstraction]]

* [[Data Models]]
* We will be using the [[Relational Model]] a lot
* [[Data Definition Language]] (DDL) language that stores the metadata and notation for defining [[Schema]]
* in this, we are learning the difference between the [[Primary Key]] and the [[Foreign Key]]
* The [[Data Manipulation Language]](DML/[[SQL]]) language for accessing and manipulating data organized by the data model
	* [[SQL]] is the most popular


* [[Database Design]]: the process of designing the general structure of the database


* [[Database Engine]] has three components

* there are several types of [[Database Architecture]]

## Key terminology
* [[Attribute]]s are columns
* [[Schema]] is a way of describing the attibutes and ID
* [[Instance]] is a snapshot of the data at a given instant in time
* [[Relation]] is a table (for data)
* [[Key]]


## Operations ([[Relational Algebra]] form)
* [[Select]]
* [[Project]]
* [[Cartesian Product]]
* [[Join]]
* [[Cartesian Product]] is faster, but uses more memory
* [[Union]]
* [[Set Intersection]]
* [[Set Difference]]
* [[Assignment Operation]]
* [[Rename Operation]]

* [[Union]], [[Set Difference]], and [[Set Difference]] must have the *same* attributes in both tables


* Combining operations result in a [[Relational Algebra]] Expression
* EG: ![[Pasted image 20210907142700.png]]


## Equivalent Queries:
![[Pasted image 20210914135844.png]]
## [[SQL]]: ![[SQL#Commands]]

HW: Sql & output

[[Review Difficult Questions for HW 1 - Relational Algebra]]


## JSON 
* Key value pairings
* MAP is every {}

Eg:
```json
{ 
	"id":"value",
	"text": "this is some text"
}
```

Doing the project right. Build the web interface first and use the university db

# Database Designs using the E-R Model
## Two pitfalls: incompleteness/redundancy

## ![[Entity-Relationship]] Model
## ![[Normalization Theory]]


[[Exam 1 Corrections]]


# Database Subtopics

## Anomalies:
* *focus* on these problems when designing databases to avoid these issues
* Problems that occur when we try and cram too much information into a single relation:
1. Redundancy: information may be repeated unnecessarily in several tuples
2. Update: we may change info in one tuple but leave the same info unchanged in another
3. Delete: If a set of values become empty, we may lose other information as a sideffect 


***Referential Integrity***

Cascading deletions helps


## Design Principals 
### Faithfulness
* The entity sets and their attributes should reflect reality
* car -> make, model, color etc (should make sense)
### Avoiding Redundancy
* Extra copies of data, if not designed well, can cause updating anomalies
### Simplicity 
### Choosing the right relationships
* Should not add every possible relationship between entities to the design

### Picking the right kind of elements

## Conditions in which we prefer to use attribute instead:

> *Suppose E is an entity set. If E obeys the following conditions then we can replace E with an attribute:*

1. All relationships which E is involved in must have arrows entering E
	* ie: E must be the "one" in many>one relationships
2. If E has more than one attribute, then no attribute depends on other attributes
	* ie: the only key for E is all its attributes
3. No relationships involving E more than once

## Weak Entity Sets
