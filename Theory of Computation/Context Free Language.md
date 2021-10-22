# Context Free Language

L = $0^n1^n$ is not regular
However, it is a Context Free Language

This means:
1. We can construct a [[Push Down Automata]] for language L
2. we can also come up with a [[Context Free Language]]
	* [{()}] => CFG

# Context Free Grammar
A collection of substitution rules also called 'productions' 
```
Has 'Variables' & 'Terminals'
	 LHS 		&  RHS
	 capital let   can be variables and symbols
```

* The following grammar has only one variable (S)
	* S is also the start variable
	* Each rule specifies that the variable on the left can be replaced with 
* Example: Language of strings of form L = $0^n1^n$ 
	* S -> 0 S 1
	* S -> $\varepsilon$ 
	* $0^n1^n | n = 3$: Fill in s until it's like 000 $\varepsilon$ 111	
		* 0S1->00S11->000S111->000 $\varepsilon$ 111=000111

## Formal Definition:
A 4 tuple $(V,\Sigma, R, S)$

1. V is a finite set called variables
2. $\Sigma$ is a finite set, disjoint form v called terminals
3. R is the finite set of rules of form
	A -> w when A $\in$ V and w $\in$(V $\cup \Sigma$)$^*$ 
4. S $\in$ V is the start variable


![[Push Down Automata]]


# Theorem: A language is CF iff some PDA recognizes it
## Given a CFG, Show how to construct a PDA
Eg: 
sigma
## Given a PDA, Show how to construct a CFG
