# Pumping Lemma

[Pumping Lemma PPT](https://www.cs.swarthmore.edu/~sindhu/cs46/s16/PumpingLemma.pdf)


* String of length n
	* State: 1 -> 2
		* n+1 transitions

* Number of states = length of string
	* Start somewhere, loop once
	* 1 -> 2 -> 3
	*   x  y z   transition names. Loop on 2 called y
	* |xy|<= p
	* y=/= $\epsilon$
	* xy^k z $\in$ L

## Formally: 
If L is a regular language, then there is a number p>0 called the pumping length.
let $w\in L$ and $|w|\geq p$ then w can be represented as xyz where:
1. $|xy|\leq p$
2. $y\neq\epsilon$
3. $xy^kz\in L$ for every $k\geq 0$

## Examples
Eg: 
$L=\{0^n 1^n | n\geq0\}$
Suppose that L is regular
let p be the pumping length given by the pumping lemma
Consider the string $w=0^p 1^p$
clearly $w\in L$ and $|w|\geq p$

According to pumping lemma, w can be written as xyz where:
1. $|xy|\leq p$
2. $y\neq \epsilon$
3. $xy^kz\in L$ for $k\geq 0$

If k=1 => xyz => $0^p 1^p\in L$ 
Condition:
1. $|xy|\leq p$  ==> y contains only 0's
2. $y\neq \epsilon$ ==> y contains at least one 0

If k = 0 ==> $xy^0 z$ ==>xz
$0^{p-|y|}1^p \notin L$
Because number of 0's is less than the number of 1's 
This contradicts condition 3

---
Eg:
L = strings of form ww (something repeated twice (00, 0101, 11 etc))
Suppose l is regular 
let p be the pumping length given by the pumping lemma
Consider the string w = $0^p1 \ 0^p1$
clearly $|w| \geq p$ 	
According to pumping lemma w can be written as xyz where 
1. $|xy|\leq p$
2. $y\neq \epsilon$
3. $xy^kz\in L$ for $k\geq 0$

Conditions ^^ numbers correspond to each other:
1. y contains only 0's
2. y contains at least one 0
3. $0^{p-|y|}10^p 1 \notin L$....

This contradicts condition 3 

---
Eg:
L = $\{1^{n^2} |n\geq 0\}$
length of string is perfect square
() 1 1111 111111111 etc
Suppose l is regular

Let p be the pumpling length given by pumping lemma
consider the string w = $1^{p^2}$
Also $|w|\geq p$

According to PL w can be written as xyz where 
1. $|xy|\leq p$
2. $y\neq \epsilon$
3. $xy^kz\in L$ for $k\geq 0$

What if k = 2?
* $xy^2z$
	* $1^{p^2 + |y|}$
	

![[Pasted image 20211006094851.png]]
Need to understand the area on the right ^^

xyyz

if xyz is $1^{p^2}$
then xyyz is $1^{p^2+|y|}$ ??

$1^{p^2+|y|}\in L$ iff $p^2+ |y|$ is a perfect  square
p^2 is a perfect square
(p+1)^2 is the next perfect square

p^2 + |y| based on the condition |ny|$\leq$p
p^2+|y| $\leq$ p^2 +p $\lt$(p+1)^2
$\therefore$ $1^{p^2+|y|}\notin L$
$\therefore$ L is not regular

---
Eg: L = {w|w contains equal number of 0's and 1's}

L also contains 0^n 1^n, 0101^* etc

if you take language L and intersect with 0^\*1^\*

$L\cap 0^*1^*=\{0^n1^n\}0^*1^*$
0^\*1^\* is not regular. L is also not regular, 0^n 1^n is not regular

---
Eg: L=$\{0^i1^j|i\leq j\}$
Suppose L is regular.
Let p be the pumping length by PL and let w = 0^p1^p
clearly |w|> p and w can be written as xyz where
1. |xy|$\leq$p
2. y$\notin\epsilon$
3. $xy^kz\in L$ for $k\geq 0$

1-> y is all 0's 
* [ ] if k = 0 => xy => $0^{p-|y|}1^p$
* [ ] if k = 2 => xy$^2$z => $0^{p+|y|}1^p \notin L$

$\therefore$ this contradicts condition 3
$\therefore$ L is not regular

---
Example:

L = {w|w=w$^R$, w $\in${0,1}$^*$}

^^ R signifies reverse

so 010 is in the language but 011 is not

working in class

Suppose l is regular 
let p be the pumping length given by the pumping lemma
let w = $0^p10^p$
clearly |w| $\geq p$
According to pumping lemma w can be written as xyz where 
1. $|xy|\leq p$
2. $y\neq \epsilon$
3. $xy^kz\in L$ for $k\geq 0$

from 1 & 2:
* y is all 0's
* if k = 0; xy^kz = xy such that $0^{p-|y|}10^p\notin L$
* if k = 2; xy^kz = xy^2z such that $0^{p+|y|}10^p \notin L$


---
Eg: $L=\{1^i\#1^j\#1^{i+j}\}$
let i,j = p
w is clearly $\geq p$
if k = 0 $xy^kz$  => $1^{p-|y|}\#1^p\#1^{2p}\notin L$
* 2p-|y|$\lt$2p

---

![[Non-Context Free Languages#Pumping Lemma]]





