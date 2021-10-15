# Push Down Automata
A class of machines that recognize [[Context Free Language]]s

* Has a stack

---
Eg:
G = ({s},{a,b},R,S)
R = {s->aSb|SS| $\varepsilon$ } 
if we set
a = ( 
b = )
We now have a linter for () of programming languages

---

## How is a string constructed? LTR, RTL, Outside in...
Strings derived from Left To Right:		s->0s|1s| $\varepsilon$
Strings derived from Right To Left:		s->s0|s1| $\varepsilon$
Strings derived from Outside in:		s->0s1| $\varepsilon$


---
Eg: Language of strings that start with 1 $\Sigma$ = {0,1}
```
R = {
		s -> 1r
		r -> 0r | 1r | e
	}
```
 
Or: S -> S0 | S1 | 1

---
Eg: Language of strings that start and end with the same symbol

s -> 0r0 | 1r1 | 1 | 0
r -> 0r | 1r | e

---
Eg: Language of strings that contain substring '001'

s -> r001r
r -> 0r | 1r | e

---

So far all of these are regular 

# Theorem: All regular languages are context free languages
> Proof by construction:
> An algorithm that converts a RE to CFG
> Six cases: based on form RE R
> 	1. if R = a then Grammar G contains a single rule: s->a
> 	2. R = e then G is s -> e
> 	3. R $\neq$ $\emptyset$ then G has no rules
> 	4. R = R1 $\cup$ R2
> 	5. R = R1 R2 (concatenation)
> 	6. ..
> Convert R1 and R2 into grammar G1 and G2 
> Make sure that the two grammars have no variables in common
> Let S1 and S2 be the start variables for G1 and G2 respectively
> The grammar of R1 $\cup$ R2 contains all variables and rules of G1 and G2 with a new start symbol s and the rule s -> s1 | s2
> 




