---
updated: 2021-11-16_18:34:57-05:00
---
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

Draw a table

|     | A   | B   | C   | D   | E   | G   |
| --- | --- | --- | --- | --- | --- | --- |
| R1  | x   | x   |     |     |     |     |
| R2  |     | x   | x   |     |     |     |
| R3  | x   | x   |     | x   | x   |     |
| R4  |     |     |     |     | x   | x   |

For each FD, *look for a row that has both the LHS & RHS are marked*, if found, find all rows that match the LHS. Fill in the symbol on that row that matches the RHS 

AD -> E
* no rows that match AD  but don't have E

B -> D

|     | A   | B   | C   | D   | E   | G   |
| --- | --- | --- | --- | --- | --- | --- |
| R1  | x   | x   |     | x   |     |     |
| R2  |     | x   | x   | x   |     |     |
| R3  | x   | x   |     | x   | x   |     |
| R4  |     |     |     |     | x   | x   |

E -> G
|     | A   | B   | C   | D   | E   | G   |
| --- | --- | --- | --- | --- | --- | --- |
| R1  | x   | x   |     | x   |     |     |
| R2  |     | x   | x   | x   |     |     |
| R3  | x   | x   |     | x   | x   | x   |
| R4  |     |     |     |     | x   | x   |

Do it again....
AD -> E
|     | A   | B   | C   | D   | E   | G   |
| --- | --- | --- | --- | --- | --- | --- |
| R1  | x   | x   |     | x   | x   |     |
| R2  |     | x   | x   | x   | x   |     |
| R3  | x   | x   |     | x   | x   | x   |
| R4  |     |     |     |     | x   | x   |

Keep doing it until you can't anymore (we are done here)

Is there a row where all columns are marked?
* *yes*: decomposition is lossless
* *no*: decomposition is lossy


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
**If you don't have the symbols in the FD in the decomposition, it does not maintain FDs**
If either of these things happen, you did not decompose it right!

# Defining Normal Forms:
if BCNF, then 1st, 2nd, and 3rd
```nomnoml
[1st NF|[2rd NF|[3rd NF|[BCNF]]]]

```
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
* For each non-![[Trivial]] FD, either the LHS is superkey OR the RHS consists of prime attributes only (not both) 
### Decomposition Algorithm to get it into 3rd Normal Form:
1. Find Minimal basis(*the minimum number of FD's to describe a relation)*) for FD's (say G) (I have notes somewhere...) 
2. For each FD X->A in G
	1. use XA as schema
3. if none of the schemas from step 2 is a superkey of original schema R, then add another relation whose schema is a key of R

Eg:
R(A B C D E)
FD={
	AB	-> C
	C	-> B
	A	-> D
}

all nontrivial (RHS is not subset of LHS)

is R in 3rd normal form? *no*

how to find the superkeys?
find the closure:
{AB}+ = {A B C D}
{ABE}+ = {A B C D E} (found one)
{ACE}+ = {A B C D E} (found another)
find a couple of them
superkey={ABE,ACE...}
None of the LHS for FD's are superkeys, so RHS for all must be a prime attribute (a part of super key)
D will never be a super key, so A->D Fails

Minimal FD's for Relation R
find minimal
1. AB	-> C
2. C	-> B
3. A	-> D

this is the minimal, how do we know

If you remove  AB -> C, then can I get to AB -> C with the other two?
C+ closure = B
A+ closure = D
AB Closure without #1 = {A B D}

To find minimum: remove each FD and find closure of others to see if we get to that relation

2nd step: 
(ABC) (CB) (AD)
R2 subset R1 so got rid of it
so we have (ABC) (AD) , none are superkeys

choose superkey, add to relation
R1(ABC) R3(AD) **R4(ABE)**

## Boyce Codd Normal Form (BCNF)
In a relation R for every non-trivial FD:
A1 A2 ... An -> B1 B2 ... Bn
Left hand side must have a [[Key]] 
### Decomposition Algo. for BCNF:
1. Let X->Y be a BCNF violation
	1. find x+ (closure)
	2. let R1 = x+ and then R2 = x ^ attributes in R that are not x+
2. compute FD's on R1 and R2
3. check for BCNF violations in R1 & R2. If  there are, repeat

> Theorem:
> if a relation has only two attributes is in BCNF

### Example:
*R(A B C D)*
FD+ = AB -> C,  C->D, D-> A

A+ 	= A
B+ 	= B
C+ 	= A C D
D+ 	= A D
AB+	= A B C D
BC+	= A B C D
AC+ = A C D
AD+	= A D
BD+	= A B C D
CD+ = A C D

continuing isn't relevant since LHS is max AB

Keys = {AB, BC, BD}

**C -> D violates BCNF**
* Closure of C gives us A C D
* R1 = A C D
* R2 = C B (anything not in R1)
	* Only 2 attributes, so already in BCNF

*R1(A C D)*

Is R1 in BCNF?
A+ = A
C+ = A C D
D+ = A D

**D -> A violates BCNF**
* Closure of D gives us A D
* R11 = A D
* R12 = C D

I think we are done?

```nomnoml
#direction:down
[R(ABCD)] - [R1(ACD)]
[R(ABCD)] - [R2(BC)]
[R1(ACD)] - [R11(AD)]
[R1(ACD)] - [R12(CD)]
```



## ~~Fourth Normal Form BCNF for multivalued dep.~~
Not useful to learn these last two...

## ~~Fifth Normal Form~~

# Multivalued Dependencies 
Denoted with double arrows

A1 ... An ->> B1 ... Bn
in a relation R

$\bar A$ could represent a set of values?

$\forall$ t,u $\in$ R: t[$\bar A$]= u[$\bar A$] then 
$\exists$ v $\in$ R | v[$\bar A$] = t[$\bar A$] and 
 v[$\bar B$] = t[$\bar B$] and 
 v[$\bar{rest}$] = t[$\bar {rest}$] 
 
 |     | A1...AK ($\bar A$) | B1...Bk ($\bar B$) | Rest |
 | --- | ------------------ | ------------------ | ---- |
 | t   | $\bar a$           | .....              |      |

aanyways... Took a pic of this chart 11/11/2021 @ 2pmish

