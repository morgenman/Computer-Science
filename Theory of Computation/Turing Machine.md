# Turing Machine

Simple model of computation

```nomnoml
[Turing Machine|Stats|
	[<table> S| . |. ||. |. ]
]
[Turing Machine]->[Memory|0|1|...]


```

Input is stored in an unbounded memory
You can change what's in memory, move left or right
write what you can't remember

DFA $\delta$ (q1,0) = q2
TM $\delta$(q1,0)=(q2,1,L|R) {1 is the symbol, L|R is direction }

if no transition on dfa, go to failure state (reject state)

For a Turing machine, it *has* to either have transition or be in accept/reject state

## Halting states:
{q$_{accept}$,q$_{reject}$}

Is there any guarantee that on a given input the TM will enter either qaccept or qreject? No!

This will become the [[Halting Problem]]

Eg: Strings of length >=2 and start and end with same symbol
$\Sigma$ = {0,1}

Input:
`01101100`

Infinite memory, so we need to know end of input (tape symbol)

| 0   | 1   | 1   | 0   | 1   | 1   | 0   | 0 | $\textvisiblespace$   |
| --- | --- | --- | --- | --- | --- | --- | --- | ----------------- |
| ^ |   |  |  | |  ||  | |


reject = false;
while(!reject)
	if first symbol in tape is $\textvisiblespace$, reject=true;
	else move right, remember first symbol
		if symbol is $\textvisiblespace$ reject
		else ? something something, once you see one, move left
		
		
		
State diagram

we are at a
a->b,D
a is input reading
changing b to a, move D
```nomnoml
[<hidden>Blank]-> [q0]
[q0]->0->R[q1]
[q0]->_[q_reject]
[q1]->_[q_reject]
[q1]->0,1->R[q2]
[q2]->0,1->R[q2]
[q2]->_->L[q3]
[q3]->0[q_accept]
[q0]->1->1,R[q4]
[q4]->_[q_reject]
[q4]->0,1->R[q5]
[q5]->0,1->R[q5]
[q5]->_->L[q6]
[q6]->1[q_accept]
[q3]->1[q_reject]
[q6]->0[q_reject]
```

An Algorithm is a *turing machine that always halts*
```nomnoml
[TM|[CFL|[RL]]]
```

## Example: a^n b^n c^n
Not CFL, but is TM
aaabbbccc$\textvisiblespace$ 
replace

### Steps:
1. Add input to tape
2. add $\textvisiblespace$ to end of input
	1. first symbol $\textvisiblespace$ -> Reject
	2. first symbol b or c -> Reject
	3. first symbol a, change to x and move right
		1. keep moving right until you see a b
		2. if you see a b, change it to a y 
			1. keep moving right until you see a c
			2. if you see a c change it to a z
				1. keep moving left until you see an x
				2. move right & repeat back to 
	4. ^^here
	5. check if all a's are marked, b's are marked, c's are marked
	6. accept or reject
		

## Example: L = {0^2^n | n >= 0}
0's where length is power of 2

mark first element as blank. 
add blank at end
mark every other 0 until blank

| 0   | 0   | 0   | 0   | 0   | 0   | 0   | 0   | _   |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| _   | x   | 0   | x   | 0   | x   | 0   | x   | _   |
| _   | x   | x   | x   | x   | x   | x   | x   | _   |


