---
updated: 2022-01-23_12:32:31-05:00
---
# Finite Automata
* A 5-tuple denoted by:
	* Q, $\Sigma$, $\delta$, $V_o$ , F
* Q is a finite set called state
* $\Sigma$ is a finite set called alphabet
* $\delta:\emptyset\times\Sigma$->$\emptyset$: state looking at a symbol.. goes to a new state. **transition function**
* $q_0$ is the start state
* F is the set of accept states
* A [[DFA]] is a type of Finite Automata


Example:
![[Pasted image 20210906100213.png]]


## Examples:


1.

![[AutomataExample1.svg]]

* Accepts: Any string that ends in 1; Any string that ends with an even number of 0's following the last 1
* Does it stop?
	