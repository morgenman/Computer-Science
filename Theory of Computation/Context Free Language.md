# Context Free Language

L = $0^n1^n$ is not regular
However, it is a Context Free Language

This means:
1. We can construct a [[Push Down Automata]] for language L
2. we can also come up with a [[Context Free Language]]
	* [{()}] => CFG

# Context Free Grammar
* The following grammar has only one variable (S)
	* S is also the start variable
	* Each rule specifies that the variable on the left can be replaced with 
* Example: Language of strings of form L = $0^n1^n$ 
	* S -> 0 S 1
	* S -> $\varepsilon$ 
	* $0^n1^n | n = 3$: Fill in s until it's like 000 $\varepsilon$ 111	
		* 0S1->00S11->000S111->000 $\varepsilon$ 111=000111


* 