## Combining DFA's to become NFA
* See: ![[RL Closure under Concatenation#NFA Example]]
* NFA does not need to comply to the rule that each input can only have one path. 
* $\mathcal{E}$:  [[Epsilon Transition]] 

## Example: Finite Automata that accepts all strings of form $0^k$ where k is a multiple of 2 or 3
* ![[Pasted image 20210915095411.png]]
## Example: the language of strings of length at least 2 that begin with 0 and end in 1:
![[Pasted image 20210915100049.png]]

* NOTE: When a state has no transitions, if you have more inputs it will fail automatically