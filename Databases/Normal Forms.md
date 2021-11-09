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

## Decomposition of Relation (to get it into normal form):
1. Lossless Join
2. Dependency Preservation

### Lossless Join?
e.g.: 
R(ABC)
| A   | B   | C   |
| --- | --- | --- |
| 1   | 2   | 3   |
| 4   | 2   | 5   |

due to some normal form violation R is decomposed into R1 and R2

R1(A B)
| A   | B   |
| --- | --- |
| 1   | 2   |
| 4   | 2   |

R2(B C)
| B   | C   |
| --- | --- |
| 2   | 3   |
| 2   | 5   |

After decomposition if R1 $\bowtie$ R2 == R1 then it is a *lossless decomposition*

R1 $\bowtie$ R2
| A   | B   | C   |
| --- | --- | --- |
| 1   | 2   | 3   |
| 1   | 2   | 5   |
| 4   | 2   | 3   |
| 4   | 2   | 5   |

R1 $\bowtie$ R2 $\neq$ R $\therefore$ the decomposition was lossy

If you don't have the table to compare...

#### The Chase Test for lossless join: A better method of determining lossiness
R(A B C D E G)

R1(A B)
R2(B C)
R3(A B D E)
R4(E G)

FD that hold:
AD 	-> E
B 	-> D
E 	-> G

1. Draw a table
| A   | B   | C   | D   | E   | G   |
| --- | --- | --- | --- | --- | --- |
| R   |     |     |     |     |     |

### Dependency Preservation?
R(A B C D E G)
F={	AB->C
	AC->B
	AD->E
	B->D
	BC->A
	E->G
  }
  
Let's say R is decomposed into:
R1(A B)
R2(B C)
R3(A B C D E)
R4(E G)

We need to check to see if the dependencies have been maintained
B->D:
	R3 has B->D
E->G:
	R4
AD->E:
	R3 
AB->C:
	*none*
AC->B:
	*none*
BC->A:
	*none*

If either of these things happen, you did not decompose it right!

# Defining Normal Forms:
## First Normal Form
Do not allow composite attributes and multivalued attributes

* eg multivalued: address with street, city etc...
	* one attribute, multiple "fields"
* eg composite: name with first, middle, last
	* multiple attributes representing one thing (like fname & lname)	
* Most db are in first normal

## Second Normal Form
A relation schema R is in second normal form if in first normal form and every non-prime attribute is fully functionally dependent on primary key

![[Prime Attribute]]

> eg (ssn, pnumber, hours, ename, pname, ploc) becomes
> (ssn, pnumber, hours)
> (ssn ename)
> (pnumber pname ploc)

## Third Normal Form
A relation schema R is in third normal form if it is 2nd normal form & no non-prime attribute A in R is **transitively dependent** on the primary key 
* 

## Boyce Codd Normal Form

## Fourth Normal Form

## Fifth Normal Form
