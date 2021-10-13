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
 
Or: S -> S0 | 


