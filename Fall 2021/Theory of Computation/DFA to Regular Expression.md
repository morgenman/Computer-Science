# DFA to Regular Expression

* Empty  Set & Sigma star (simple)
## 2 State DFA 
* Ends in a 1 DFA 
	1. trace the input string to leave and return to the start state (how we get to start state from other nodes)
		*  0, 11* 0
			* ways of getting to the start state, * indicates a loop
		* Can write it as $(0\cup 11^* 0)$ 
	2. start state to accept state
		* How do we get from start state to accept state?
		* $11^*$  
	3. Answer: just concatenate it... $(0\cup 11^* 0)^* 11^*$
* if there is more than one character for a transition... treat it like $(0\cup 1)$
* Generalized form:
	* ![[Pasted image 20210924092933.png]]

## Dealing with more states
* Combining states:
	* Find all the paths in between two states
	* ![[Pasted image 20210924094213.png]]

## to do this with more than one accept state, make a new accept state and point all accept states using epsilon transitions at it

* 	

## 
	