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

Eg: $L=\{0^n 1^n | n\geq0\}$
Suppose that L is regular
let p be the pumping length given by the pumping lemma
Consider the string $w=0^p 1^p$
clearly $w\in L$ and $|w|\geq p$

According to pumping lemma, w can be written as xyz where:
1. $|xy|\leq p$
2. $y\neq \epsilon$
3. $xy^kz\in L$ for $k\geq 0$

If k=1 => xyz => $0^p 1^p\in L$ 