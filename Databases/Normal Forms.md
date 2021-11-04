# Normal Forms
* 1st Normal Form
* 2nd Normal Form
* 3rd Normal Form
* Boyce Codd Normal Form

It's good when we are in a boyce codd form
Formalize what designs are bad, test for them

## Normal Forms (11/4)

* 1NF
	* no multivalued attributes

* 2NF
* 3NF
* BCNF
	* 2->BC: depends on keys and FDs

* 4NF
	* Multivalued FD
* \*5NF keys, join dependencies.

## Normalization
*the process of decomposing unsatisfactory relations by breaking up their attributes into smaller relations*

## Formal Definition:
Conditions using keys and FDs of a relation to certify whether a relation schema is a particular in normal form 

# Defining Normal Forms:
## First Normal Form
Do not allow composite attributes and multivalued attributes

* eg multivalued: address with street, city etc...
	* one attribute, multiple "fields"
* eg composite: name with first, middle, last
	* multiple attributes representing one thing (like fname & lname)	
* Most db are in first normal

## Second Normal Form
A relation schema R is in second normal form if every non-prime attribute is fully functionally dependent on primary key

![[Prime Attribute]]

> eg (ssn, pnumber, hours, ename, pname, ploc) becomes
> (ssn, pnumber, hours)
> (ssn ename)
> (pnumber pname ploc)

## Third Normal Form

## Boyce Codd Normal Form

## Fourth Normal Form

## Fifth Normal Form
