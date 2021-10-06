# Pumping Lemma

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
L = strings of form xx (something repeated twice (00, 0101, 11 etc))
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

Accor



