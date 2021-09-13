# Databases
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
* [[Data Definition Language]] (DDL) language that stores the metadata and notation for defining [[schema]]
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

* [[Union]], [[Set Difference]], and [[Set Difference]] must have the *same* attributes in both tables


* Combining operations result in a [[Relational Algebra]] Expression
* EG: ![[Pasted image 20210907142700.png]]


* 