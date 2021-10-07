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


ER Diagram
![[Pasted image 20211007140234.png]]

# Diagrams:
## Mapping Cardinalities
* Types:
	* one to one 
	* one to many
	* many to one
	* many to many
* ![[Pasted image 20211007140447.png]]

* Cardinality is marked with arrow end
	* directed line (→), signifying “one,” or an undirected line (—), signifying “many,”
	* ![[Pasted image 20211007140650.png]]
	* ![[Pasted image 20211007140703.png]]

###
## Total and Partial Participat




