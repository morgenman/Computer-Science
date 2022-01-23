---
updated: 2022-01-23_12:32:31-05:00
---
# Non-Regular Language

* No finite automaton 
* No regular expression
* EG: $0^n1^n$|n>0

## Proof
* $0^n$: Number of states is n+1
* Pumping lemma: Pick a string you want to count, have to make number of states equal to the length
	* Length of string has to be equal to the number of states
* Suppose L is regular
* then M be a finite automaton that recognizes L
* let n be the number of states in M * Guaranteeing the loop, no other way to generalize it *  
![[Pasted image 20210929093313.png]]
* ^^ This NFA does NOT guarantee 0^n
* 0^n is accepted
* 0^(n-1) is also accepted (not ok)
* 0^(n+x) is also accepted (not ok)


## Pumping Lemma
*  the fact that all sufficiently long strings in such a language have a substring that can be repeated arbitrarily many times, usually used to prove that certain languages are not regular
* if greater, those three states have to be satisfied (I think)