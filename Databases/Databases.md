---
created: 2021-10-21T13:46:26-04:00
updated: 2021-10-21T21:41:57-04:00
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
## ![[Normal Forms]]


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


# Referential Integrity
* The RI constraint is that a value appearing in one context must appear in another


## Weak Entity
* Let weak entity set then the key consists of:
1. zero or more of it's own attributes and 
2. key attributes from entity set are reached by certain many_to_one relationships from E to other entity sets

(supporting relationship)



# Converting E/R diagram to relational design

1. Turn each entity set into a relation w/ same set of attributes
2. Replace relationship by a relation whose attributes are keys for the connecting entities


## Many to one relationship to relation
E -R-> F
1. All attributes of E
2. The key attributes of F
3. Any attributes belonging to R


## Functional Dependency 
FD on a relation is a statement:
> "if two tuples of R agree on all attributes A1-An (same values) then they must agree on all of another list of attributes B1-Bn"

This never happens
`title,year -> length, genre, studioname`
if title & year are the same among elements, the rest are too

### Splitting/Combining Rule
FD: A1, A2... AN -> B1, B2... BM
> x -> y
> x functionally determines y

This functional dependencies can be split by M:
A1, A2... AN -> B1
A1, A2... AN -> B2
...
A1, A2... AN -> BM

* equivalent to A1, A2... AN -> Bi for i = 1,2..M

**You cannot split on the LHS**

### [[Trivial]] Functional Dependency
FD: A1,A2...An -> B1, B2 ... Bm
if B1, B2... $\subseteq$ A1, A2 ... An 
then the above FD is called a trivial FD

* RHS attributes of a trivial FD are a subset  of LHS's attributes 
* title,year -> title
* title -> title

### Nontrivial Functional Dependency
A1 ... An -> C1 ... Ck
| A1  | ... | An  | C1  | ... | Ck  |
| --- | --- | --- | --- | --- | --- |
| a   | a   | a   | c   | c   | c   |
|     | b   | b   | b   | b   | b   |
|     | *   | *   | #   | #   | #   |

* '*' is trivial attributes, '#' is non trivial attributes for b

## Closure of Attributes, How to find [[Superkey]]
R(A,B,C,D,E,F)
FD = { AB -> C
	   BC -> AD
	   D -> E
	   CF ->B
	 }
	 
### Splitting FD's
1. Split when RHS has more than one element
AB 	-> C
BC 	-> A
BC 	-> D
D 	-> E
CF 	-> B

2. Add attributes that the function dependencies point to 
{AB}$^+$={ABCDE}
trivial:
AB 	-> AB
nontrivial:
AB	-> CDE
* to do this, we put RHS on a list with LHS of closure we are testing (AB + C for first pass)
* Then we do it again, adding any RHS where LHS is all elements on said list
* if all attributes in relation are on list, FD we are testing is a key

### Algorithm: Closure of a set of attributes
input: set of attributes {A1, A2.. An} and set of FD's S
output: the closure {A1, A2, ... An}+
1. if necessary, split FD's in S so catch FD in S has a single attribute on RHS
2. let x be a set of attributes that eventually will become closure
	* initialize x = {A1, A2, A3... An}
3. Repeatedly search for some FD
	* B1, B2 ... Bm -> C
	* such that: all of B1 ... Bm are in x and c is not in x 
	* then add c to x 
4.  The set x after no more attributes can be added to it is the closure of {A1 ... An}+

Example:
![[Pasted image 20211028140100.png]]

Another Example (might not record)

R = (A,B,C,D)
FD = {AB->C, C->D, D->A}
find all non-trivial FD that hold on R. Also find Super key and primary key

Only key track of non-trivial ones ..

{A}+ = {A}
{B}+ = {B}
{C}+ = {A C D}
	C	-> A
{D}+ = {D A}
{AB}+ = **{A B C D}**  
	AB -> D
{AC}+ = {A C D}
	AC -> D
{AD}+ = {A D}
{BC}+ = **{A B C D}**
	BC -> A
	BC -> D
{BD}+ = **{A B C D}**
	BD -> A
	BD -> C
{CD}+ = {A C D}
	CD -> A
{ABC}+ = **{A B C D}**
	ABC -> D
{ACD}+ = {A C D}
{ABD}+ = **{A B C D}**
	ABD -> C
{BCD}+ = **{A B C D}**
	BCD -> A
{ABCD}+ = **{A B C D}**

Superkeys:
{AB, BC, BD, ABC, ABD, BCD, ABCD}
Candidate Keys:
{AB BC BD}




## Transitive property
R(A,B,C)
if 
A->B
B->C
then
A->C
dependencies...



# Inference Rules of FD
## Reflexive
if $y\subseteq x$ then x -> y; trivial FD
## Augmentation
if x -> y; xz -> yz; xz is x $\cup$ z
## Transitive
if x -> y and y -> z then x -> z
## Decomposition
if x -> yz then x -> y and x -> z
## Union
if x -> y and x -> z then x -> yz
## Psuedotransitivity 
if x -> y and wy -> z then wx -> z

# Equivalence of set of FD's
Two sets of FD's F and G are equivalent if:
1. every FD in F can be inferred from G
2. every FD in G can be inferred from F
3. F$^+$ = G$^+$ ( )

minimal basis for a relation
*minimal basis*: correct set of FD's
* the minimum number of FD's to describe a relation

![[Prime Attribute]]

F is the set of FD's, the minimal basis of F say F' is produced by removing extraneous attributes in F

*Extraneous Attribute*: An attribute is extraneous if we remove it without changing the closure of the set of dependencies..
e.g. F is a set of FDs
F = {x->A , , ...}
attribute y is extraneous if y $\subseteq$ x and {F-(x -> A)$\cup$ x-y -> A} => logically represent F

let x = {y,z,b,c}
if y is trivial...

yzbc -> A    < remove this

add zbc -> A

# How to find Minimal Basis for a given set of FDs
## Input
set of FDs: E
## Output
minimal of E
## Procedure 
1. set F = E
2. replace each FD  (x -> A1...An) in F by applying decomposition/splitting rule
	(x -> A1, x -> A2, ... x -> An)
3. for each FD (x -> A) in F
   for each attribute B that is an element of x
   if { {F - ( x -> A)} $\cup$ x-B -> A} is equivalent to E, 
   then replace x -> A with x-B -> A in F
4. For each remaining FD's x -> A in F
   if F - {x -> A} is equivalent to F
   then remove x -> A from F

## Example: E = {B -> A, D -> A, AB -> D}
No more than one attribute on RHS. 
Jump to step 3

Find FD that has more than one on LHS

AB -> D
find if there are any extraneous attributes

B -> A by augmentation rule
BB -> AB
B -> AB

use transitive rule w/ AB -> D
**B -> D**
is A extraneous? yes.

Now remove A: E = {B -> A, D -> A, B -> D}
from this we can see that B -> A is redundant (implied by transitivity)

E = {B -> D, D -> A} 
Done!


---
Notes for 11/4

# Normalization: decomposing the table to fit normal forms
## Guidelines for good scheme design
```mysql
create table Employee(ename,ssn,bdate, address, dnumber);
create table Department(dname, etc etc);
create table Dept_loc(...);
create table project(...);
create table workson(...);
```
> Spurious tuples:
> like teaches X instructor
> probably only one row is meaningful, and the rest are pointless

1. each tuple in relation should represent only one entity
	* if we were doing one for a company, we might group things by employee, department etc..
	* big example
	* if there are 100 ppl working for billing, then we will need to update all 100 roles when changing something for department
2. Design a schema that does not suffer from insertion, deletion, and update anomalies 
3. Relations should be designed such that their tuples will have as few NULL values as possible
	* Attributes that are NULL frequently might be better in a separate table
4. The relations should be designed to satisfy lossless join
	* the lossless join property is used to guarantee meaningful results for join operations
	* no spurious tuples should be generated by doing a natural join of any relations

![[Normal Forms]]

Exam: ER Diagrams, coming up with relation schema, 3rd chapter completely (open book)
We have done chapters up to 6
**ER model chapter 4
Normal Forms chapter 3**

