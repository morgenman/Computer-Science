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
| 0   | 1   | 1   | 0   | 1   | 1   | 0   | 0   | $\textvisiblespace$ |
| --- | --- | --- | --- | --- | --- | --- | --- | ------------------- |
| ^   |     |     |     |     |     |     |     |                     | 	

1. if first symbol in tape is $\textvisiblespace$, reject
2. else move right