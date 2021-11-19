---
updated: 2021-11-19_09:55:40-05:00
---
# Turing Machine

Simple model of computation

A *turing recognizable language* is recognized by some turing machine
* recognizable only if it ends in accept state

A *turing decidable language* is decided by some turing machine
* has to go to accept/reject state, should not loop
* if a language loops, it is not decidable

---
## Definition
A turing  machine is a 7-tuple (Q, $\Sigma$, $\rho$,$\delta$, q0, qA, qR)
where Q, $\Sigma$, $\rho$ are finite sets and 
1. Q is the set of states
2. $\Sigma$ is the input alphabet not including blank symbol _
3. $\delta$ is the tape symbol where _ $\in$ $\rho$ and $\Sigma \subseteq \rho$ 
4. .... Just gonna take a pic
5. .
6. .
7. .
![[Pasted image 20211112095636.png]]
As a TM computes, changes occur in [Current state|Current Tape|Head location]

Configuration of a TM:
(q,u,i) where 
q $\in$ Q
u is a semi-infinite string over $\rho$
i $\in$ Z+ head location starts at 1

Initial Configuration:
(q0,w_, 1)
Accepting Configuration:
(q_accept, ... , ...)
Reject:
(q_reject, ... , ...)

---

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

| 0   | 1   | 1   | 0   | 1   | 1   | 0   | 0 | _   |
| --- | --- | --- | --- | --- | --- | --- | --- | ----------------- |
| ^ |  |  |  | |  ||  | |


reject = false;
while(!reject)
	if first symbol in tape is _ , reject=true;
	else move right, remember first symbol
		if symbol is _ reject
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
aaabbbccc_ 
replace

### Steps:
1. Add input to tape
2. add _ to end of input
	1. first symbol _ -> Reject
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
| _   | x   | x   | x   | 0   | x   | x   | x   | _   |
| _   | x   | x   | x   | x   | x   | x   | x   | _   |

![[Pasted image 20211112093703.png]]

## Example L = {w # w| w in 0,1}



![[Pasted image 20211112094944.png]]


# Multitape Turing Machine
## 3 Tape

> Theorem: *Every Multitape TM has an equivalent single tape TM*

1. Need to store all tapes input into a single tape
2. Each tape has to be noted

Deliminator here is chosen to be # 

| #   | a   | a   | b   | _   | _   | _   | #   | x   | y   | x   | x   | _   | _   | _   | #   | 1   | 0   | 0   | 1   | 0   | _   | _   | _   | #   |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|     |     |     | ^   |     |     |     |     |     | ^   |     |     |     |     |     |     |     |     | ^   |     |     |     |     |     |     |

we could keep track of various heads with underline
to make more space, move all characters right of #

transition

by1 -> ax0, RLR

## 2 Stack
1. Put data into two stacks
2. What does the transititon mean (L,R)
3. Keep track of head position
	
Top of stack 2 is current head


Left...
* replace ai+1 with whatever transition says 

## Queue
* Pop from front, push to back

Pop is bottom most element, push to end


---

## Nondeterministic FA as a turing machine

L = {0$^{k}$| k is a composite number (non prime)}

1. pick 2 numbers n1 and n2 such that 2 < n1 ... n2 ... < k 
2. write n1 number of 0's and n2 number of 1's to TM tape 
3. check if n1 * n2 = k; if yes accept; else reject

How do we do multiplication on a Turing Machine?

at some point we have n1 = 3 and n2 = 5

k number of 0s ; # ; n1 (000) # n2 (11111) # 
mark first 0 as b;
 copy 

Nondeterminism comes from picking n1 and n2

