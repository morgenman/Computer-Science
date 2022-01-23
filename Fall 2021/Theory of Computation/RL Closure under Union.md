---
updated: 2022-01-23_12:32:30-05:00
---
# RL Closure under Union
Let A and B be two regular languages, then 
$A\cup B=\{x|x\in A$ or $x\in B\}$
if   A->DFA and  B->DFA  then  A$\cup$B->DFA

Example:![[Pasted image 20210913094442.png]]

## Proof by construction

* Suppose $A_1$ and $A_2$ are regular languages
	* Then $M_1$ and $M_2$ are DFAs for $A_1$ and $A_2$
* Construct a DFA $M$ that recognizes $A_1\cup A_2$
	* let $M_i=(Q_2,\Sigma,\delta_2, q_2,f_2)$
* Construct M to recognize  $A_1\cup A_2$
	* $M=Q,\Sigma,\delta,q_0,f)$
1. $Q=\{(r_1,r_2)|r_1\in Q,$and $r_2\in Q\}$
	* $Q_1\times Q_2$
2. $\Sigma$, the alphabet is same as $A_1$ and $A_2$
3. $\delta$: for each $(r_1,r_2)\in Q$ and each $a\in \Sigma$ 
	* $\delta((r_1,r_2),a)=(\delta(r_1,a),\delta(r_2,a))$
4. $q_0$ is the pair $(q_1,q_2)$
5. $F$ is the set of pairs in which either member is an accepting state of $M$ or $M_2$
	* $f=\{(r_1,r_2|r_1\in f_1$ or $r_2 \in f_2\}$
	* $F=(F_1 \times Q_2)\cup (Q_1 \times F_2)$ <-- for union
	* NOT F= F_1 X F_2

![[Pasted image 20210913095713.png]]

