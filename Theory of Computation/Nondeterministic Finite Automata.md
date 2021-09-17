# Nondeterministic Finite Automata
## Formal Definition:
* A nondeterministic finite automaton is a 5-tuple $(Q,\Sigma, \delta, q_0,f)$ where 
	1. Q is a finite set of states
	2. $\Sigma$ is a finite alphabet
	3. $\delta:Q\times {\Sigma}_e\rightarrow P(Q)$
	 * $\Sigma _e=\Sigma \cup \{e\}$
	4. $q_0 \in Q$ is the start state
	5. $f\leq Q$ is set of accept states

^ e is $\epsilon$

## Combining DFA's to become NFA
* See: ![[RL Closure under Concatenation#NFA Example]]
* NFA does not need to comply to the rule that each input can only have one path. 
* $\mathcal{E}$:  [[Epsilon Transition]] 

# Closure Properties of regular languages using NFA:

1. Union:
	* given two regular languages l1 and l2
	* two NFA for then 2 regular languages n1 and n2
	* construct L1 $\cup$ L2 -> n1, $\cup$ n2 
	* Epsilon transitions to each
		* ![[Pasted image 20210917093804.png]]
	* Proof:
		* 



# Examples
## Example: Writing a NFA formally:
![[Pasted image 20210917093136.png]]

## Example: Finite Automata that accepts all strings of form $0^k$ where k is a multiple of 2 or 3
* ![[Pasted image 20210915095411.png]]
## Example: the language of strings of length at least 2 that begin with 0 and end in 1:
![[Pasted image 20210915100049.png]]

* NOTE: When a state has no transitions, if you have more inputs it will fail automatically


## Example: the language of strings of length at least 2 that have a 1 in the second to last position
![[Pasted image 20210917091923.png]]
