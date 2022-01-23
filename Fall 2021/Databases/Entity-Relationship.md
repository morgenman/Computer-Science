---
updated: 2022-01-23_12:32:31-05:00
---
---
updated: 2021-12-13_23:59:03-05:00
---
# Entity-Relationship

Models enterprise as a collection of entities and relationships
* Entity is a thing or object, described by a set of attributes
* relationship is association

Diagram: Entity-Relationship Diagram


## Three Concepts:
* **Entity Sets**
	* squares
* **Relationship Sets**
	* diamonds
* **Attributes**
	* listed as text or circle

## Entity Sets
* Entity: An object that is distinguishable
* Entity Set: a set of entities of the same type that share the same properties
* Row is an entity, table is an entity set
Eg:
| teacher   |
| --------- |
| attribute |
| attribute |
| attribute | 	

## Relationship Sets
* Association between **two entities**
* Relationship set is a mathematical relation among n$\geq$2 entities
* Pictorially shown as lines between related entities
* Sometimes, the relationship (ie advisor table) has a date attribute attached
* 
Eg:
(44553,22222) $\in$ advisor

### Role: when an entity is related to itself
* Entity sets of relationship need not be distinct
* each occurence of entity plays a role in the relationship
* like prereq for a 'course' entity might have the prereq role with other courses

### Degree of a relationship set
* Binary Relationship
	* Involve two entity sets (or degree two)
	* Most relationships are binary
* Ternary (3)
	* Instructor - Project - Student 
	* ^ Linked by proj_guide

## Attributes
* Types:
	* simple/composite
	* single-valued/multi-valued
	* derived 
* Composite
	* Divide attributes into subparts:
	* Like name -> first,last
* [[Primary Key]]
* Relationship primary key is usually union of two ids
![[Primary Key#Binary Relationships PK]]




ER Diagram
![[Pasted image 20211007140234.png]]

# Diagrams:
## Mapping Cardinalities
* Types:
	* one to one 
	* one to many
	* many to one
	* many to many [use a table to store relationship]
	* see [[Primary Key#Binary Relationships PK]]
* ![[Pasted image 20211007140447.png]]

* Cardinality is marked with arrow end
	* directed line (→), signifying “one,” or an undirected line (—), signifying “many,”
	* ![[Pasted image 20211007140650.png]]
	* ![[Pasted image 20211007140703.png]]

###
## Total and Partial Participation
* Single line means they could have the relationship, or not
* Double means **Total Participation**: Entity in set participates in at least one relationship in relationship set
* ![[Pasted image 20211007140914.png]]
* ^^ Every student needs an advisor, not every instructor needs a student to advise

## More Constraints and their notation:
![[Pasted image 20211007141058.png]]
* 1..1 is a minimum and maximum Cardinality

### Ternary Relationship constraints
* TBD



Looking at entity sets

Is it possible that one entity set appears two or more times in a relationship? *Yes*
imagine the relation sequel for movies, can refer to another element in the same set. An entity has a relation with itself.

A movie may have many sequels for each sequel there is only one original




## How to convert Multiway to Binary
UML, ODL limit to binary.
Any relationship connecting more than two entities can be converted to a collection of Binary, many_one relationship:
1. Introduce new entity
	entities are tuples of the relationship set for the multiway relationship
2. connect to the new entity set
3. introduce many_one relationships form 
	the connecting entity set to each of the entity sets that provide componenents of tuples in the original multiway relationship
	
eg: four way contracts relationship
![[Pasted image 20211019142321.png]]
Converts to...
![[Pasted image 20211019142402.png]]



## Subclass:
Use triangle for design, is a : `ISA`
![[Pasted image 20211019142424.png]]
* Some entities in an entity set may have special properties not
* Entity relations with curve, connecting entity must exist

What is a weak entity set?
* Crew has no meaning unless studio exists, so it's weak
* must be supported by strong entity
* subclass 



