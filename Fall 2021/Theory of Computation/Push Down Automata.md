---
updated: 2022-01-23_12:32:30-05:00
---
---
created: 2021-10-22T09:15:43-04:00
updated: 2021-10-22T09:29:56-04:00
---
# Push Down Automata
A class of machines that recognize [[Context Free Language]]s

* Has a stack

## Formal Definition
Pushdown Automata is a 6-tuple(Q, $\Sigma$, Rho, $\delta$, q0, f)
1. Q is the set of all states
2. $\Sigma$ is the input alphabet
3. Rho is the stack alphabet
4. $\delta$: Q x $\Sigma$ _e_ Rho_e_ -> P(Q x Rho _e_)  is the transition function
5. q_0_ $\in$ Q is start state
6. f subset Q is set of accept states


## Informal Definition

An NFA with a stack
Stack provides additional memory allowing it to recognize non-regular languages
![[Pasted image 20211015094708.png]]
$ -> $\varepsilon$ for end of stack, o->$\varepsilon$ for stack popping

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
> 	6. R = R1*; 
> Convert R1 and R2 into grammar G1 and G2 
> Make sure that the two grammars have no variables in common
> Let S1 and S2 be the start variables for G1 and G2 respectively
> The grammar of R1 $\cup$ R2 contains all variables and rules of G1 and G2 with a new start symbol s and the rule s -> s1 | s2
> 




## Ambiguity and Parse Trees:
Eg: Arithmetic expression with operand a and operators + and *
* Coming up with a grammar for this...
` E -> E + E | E * E | (E) | a `
Let's do a parse tree for `a+a*a`

1. 
```
				E
			E	*	E
					a
		E	+	E	
		a		a
```
2. 
```
				E
			E	+	E
			a
				E	*	E
				a		a
```

If a string has **more than one** parse tree in a particular grammar the grammar is *ambiguous*


## Why is ambiguity a problem?
* You cannot conclude how long it takes to process a particular string
	* We measure this in derivations..
* Because it's recursive we could loop forever

## For context free grammar, we have a solution

# [[Chomsky Normal Form]]
Some [[Context Free Language]]s can only be generated using ambiguous grammar. Such languages are called *Inherently ambiguous* and cannot be put in Chomsky form



> Example:
L = {a$^{2n}b^{3n}|n\geq 0$}
| x   | x   | x   | x   |
| --- | --- | --- | --- |
| aa  | aa  | bbb | bbb |
aabbb![[Pasted image 20211022091655.png]]

---

Example:
![[Pasted image 20211022092924.png]]