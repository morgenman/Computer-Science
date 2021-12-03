---
updated: 2021-12-03_09:24:12-05:00
---
# Theory of Computation
* ^^ Fundamental Capabilities and limitations of computers
	* Also known as [[Automata Theory]] 


If a language is regular, it is also Context free, and Turing recognizable

If it is a non-regular language, some may be context free, some may be not context free
* [[Complexity]] --> Why are some problems harder than others?
* [[Computability]] --> Are there problems that cannot be solved by computers?
* What is an [[Automata Theory]]?
	* A mathematical model of computation which could be used to address the two above questions
* [[Complexity]] example:
	* Problem: Sorting a deck of 100 uniquely numbered cards
		* Easy, Computable
	* Problem: Checking whether such a deck exists
		* What is the input? Given a box of cards? or? 
		* This is why we need to know the [[Domain]]
	* Problem (Complex): Scheduling 100 unique classes with 25 instructors into 9 class rooms with 3 time slots a day 4 days a week
		* Constraint: Avoiding room or instructor conflicts
		* Computable but complex
* How do we deal with [[complexity]]?
	* Abstraction and simplification
	* 1. Alter the root of difficulty
	* 2. Settle for a less than perfect solution
	* 3. Only hard in the worst case situation
* History Lesson:
	* 1900: David Hilbert proposed in Paris 23 mathematical problems for the century
		* \# 10: test if a polynomial has an integral root 
* In order to study this we will be reviewing [[Set Theory]]

## Functions and Relations
* f(a) = b
	* f maps a to b
* Add function.. Domain is the set of ordered pairs
* **Binary Function**: A function with two arguments
* **Relation:** A property who's domain is a set of k-tuples

**Special Binary Relation:** ![[Equivalence Relation]]

Theorem: [[DeMorgans Law]]

Theorem: ![[sqrt(2) is irrational]]


## Building Blocks of TOC
### Symbol: a,b,\*, etc
### From symbols, we can form an alphabet: $\Sigma$  
* collection of symbols

### String: a sequence of symbols

* Consider an alphabet $\Sigma$ = {a,b}
* how many strings of length n?
	* 2^n strings
* if the alphabet is $\Sigma$ then a number of symbols in $\Sigma$ = |$\Sigma$|
* the number of strings over $\Sigma$ is $|\Sigma|^n$ 

### Language is a collection of Strings
### Powers of $\Sigma$
* \* = 0 union 1 union 2 etc (set of all possible strings)
	* universal set
* 0 = {$\epsilon$}
* 1 = set of all strings of length 1
* n = all strings of length n
* etc..


How do we describe Automatas?

## Computational Model
### ![[State Diagram]]

* State diagrams usually describe [[DFA]]s, which are a type of ![[Finite Automata]]

* Any Language that can be represented by a [[DFA]] is called a [[Regular Language]]

## ![[Regular Language]]

## Formal Definition of Computation
let $M=(Q,\Sigma,\delta,q_0,f)$ be a finite automata 
	and let $w_1...w_n$ be a string where $w_i\in\Sigma$
then $M$ accepts $w$ if a sequence of states $r_0,r_1...r_n$ in $Q$ exists such that 
	$r_0=q_0$
	$\delta(r_i,w_{i+1})=r_{i+1}$ for $i=0...n-1$
	$r_n\in f$
$M$ recognizes language $A$ if $A=\{w|M$ accepts $w\}$

* ![[Closure]]

## Regular Language [[Closure]]:
* Regular Languages are closed under:
	* [[RL Closure under Complement|Complementation]] (NOT) 
	* [[RL Closure under Union|Union]]
	* [[RL Closure under Intersection|Intersection]]
	* [[RL Closure under Concatenation|Concatenation]]

![[DFA Multiple of 4.svg]]
## Generalized form for multiple of M
* Sum of digits is a multiple of m
* $(Q,\Sigma,\delta,q_0,f)$
* $Q=\{q_0...q_{m-1}\}$
* $\Sigma = \{0,1,2,3,4,5,6,7,8,9\}$
* $q_0=q_0$
* $\delta(q_2,3)=q_1$
* $(i+d)mod(m)$

## Looking at NFA's: 
![[Nondeterministic Finite Automata#Example Finite Automata that accepts all strings of form 0 k where k is a multiple of 2 or 3]] 
![[Nondeterministic Finite Automata#Example the language of strings of length at least 2 that begin with 0 and end in 1]]]
![[Nondeterministic Finite Automata#Example the language of strings of length at least 2 that have a 1 in the second to last position]]

* * includes empty set


# NFA to DFA
* Why?
	* NFA is not serial, making it a DFA you can predict runtime etc

## Every NFA has a DFA
* For every ambiguous transition (where it goes to 2 or more states), unify them as a 'combo state'
	* instead of 0 going to q0 and q1, it goes to q0q1
	* Table method
	* Only read epsilon symbol after character (on transition table)
	* Start state can be different
* Domain of DFA includes the powerset of the sets in the NFA (think epsilon transitions)
* How to simplify states
	* if no input states, remove state


# ![[Regular Language]]

We are now going to learn about:
# ![[Regular Expression]]

# Converting R into an NFA
![[Pasted image 20210922095823.png]]




# ![[DFA to Regular Expression]]

## Example: NFA->DFA
* States without incoming transitions can be ignored
* ![[Pasted image 20210927095841.png]]
* ![[Pasted image 20210927100027.png]]
* 

# Exam 1
* shouldn't take more than the class time. 
* can start 5m early
* Closed book
* Everything we have learned so far


# ![[Non-Regular Language]]


# ![[Pumping Lemma]]



# Context free stuff
* [[Context Free Language]]
	* has a [[Context Free Language#Context Free Grammar]]
* [[Push Down Automata]]



# ![[Chomsky Normal Form]]


Let's do another example for ada? pda? didn't hear her right... :

![[Pasted image 20211020100213.png]]

# Closure properties of CFL
*Regular languages are closed under $\cup$,$\cap$,-,$\cdot$,\* *

1. The class of context free languages is closed under union, concatenation, and star operations. 
	* L1 and L2 are two CFL then L1 $\cup$ L2 is also CFL (L1 L2 => CFL)
	* L1$^*$ or L2$^*$ is also CFL
	* You could do this with PDA, but let's do it with CFG
	**Union**:
	* S -> S1 | S2
	  CFG of L1
	  CFG of L2
	**Concatenation**:
	* L1 and L2 are CFLs
	  let s1 be the start variable for L1's grammar
	  let s2 be the start variable for L2  
	  L = L1 L2
	* S -> S1 S2
	  CFG of L1
	  CFG of L2  
	**Star**: 
	* S -> S S1 | e
	  CFG of L1
	* L = L$^{*}$  CFG  
2. The class of CFL are *not* closed under intersection or compliment (one implies the other)
	* Easiest to do this as an example, rather than a proper proof (proof by example)
	**Intersection**:
	* Consider the language L1= {$a^nb^nc^i|i,n\geq0$}
	  S -> TU
	  T -> aTb | e
	  U -> cU | e
	* Now consider the language L2 = {$a^ib^nc^{n}|i,n\geq 0$}
	* Both are CFG
	* L1 $\cap$ L2 = {$a^nb^nc^n|n\geq0$}
	* **this is not a CFG**
	* *we will go over this next class*
	**Complementation**:
	* if it were, then it would be closed under intersection because of DeMorgan's Law
	* A$\cap$B = $\overline{\overline{A}\cup\overline{B}}$


* a^i b^j c^k | i =/= j or j=/=k 
	* **find the grammar for this**

![[Non-Context Free Languages]]
![[Non-Context Free Languages#Theorem]]
![[Non-Context Free Languages#Pumping Lemma]]


![[Exam Prep]]



# ![[Turing Machine]]

HW (sorta, for practice)

TM
C = {a^i b^j c^k | i x j = k and i,j,k >= 1}

L = {a^2i b^i c^2i | i>0}


## Theorem: If a language is regular then it is decidable
* Approach, come up with turing machine

### Proof: Suppose M is a DFA for a given regular language
A TM can simulate M by reading the input from left to right while going through the same states as M
Once you reach the end of input, the TM enters the accept state if M is in accept state

Let M = (Q $\Sigma$ $\delta$ q0 f)
M' (Q $\Sigma$ $\rho$ $\delta'$ q0 qa qr)
where Q' = Q $\cup$ {qa,qr}
$\rho$ = $\Sigma$ $\cup$ {\_}
$\delta'$(q,a) = ($\delta$(q,a),a,R)
(a is some input not \_) ($a\in\Sigma$) 
if q $\in$ Q & a $\ne$ _
$\delta$(q,\_) = {
| (qa,\_,R)  | if q $\in$ F  |
| ---------- | ------------- |
| (qR,\_,R ) | if q$\notin$F |
}

## Theorem: If a language is context free then it is decidable
### Proof: Simulate a TM by using a PDA if PDA goes to accept state at the end of the input then the TM will go to the accept state, otherwise TM will go to reject

## Claim: the class of languages accepted by deterministic TM's and Non-deterministic TM's are equal


# Closure Properties of decidable and turing recognizable languages

| Operation     | Decidable    | Turing Recognizable |
| ------------- | ------------ | ------------------- |
| Union         | $\checkmark$ | $\checkmark$        |
| Concatenation | $\checkmark$ | $\checkmark$        |
| Intersection  | $\checkmark$ | $\checkmark$        |
| Star          | $\checkmark$ | $\checkmark$        |
| Complement    |  $\checkmark$             |   NO               |



Are decidable and recognizable languages closed under union?

** * Reference for Non-determinism in TM: * ** [[Turing Machine#Multitape Turing Machine]]

## Union
### Decidable
> let l1 and l2 be decidable languages via halting TMs M1 & M2 respectively (both halt)
> is L1 $\cup$ L2 decidable
> *yes*... Given input x; x $\in$ L'; L' = L1 $\cup$ L2
> 1. Simulate M1 on x ... if M1 accepts then accept else 
> 2. Simulate M2 on x ... if M2 accepts then accept else
> 3. Reject

### Recognizable (harder to prove, start with this)
>let L1 and L2 be turing recognizable languages
>is L1 $\cup$ L2 turing recognizable
>M1 is  TM for L1 and 
>M2 is a TM for L2
>M1 and M2 may accept or loop
>(overall x $\in$ L1 $\cup$ L2)
>Say x $\in$ L2  
>if we run x on M1 it may loop
>***Non-determinism***...
>1. Run them simultaneously on x.
>2. If either accept, accept, else
>3. loop or reject
>.
>If it is turing recognizable $\therefore$ it is also turing decidable

## Concatenation
### Recognizable
> L1 and L2 are TR via TMs M1 and M2 respectively
> is L1.L2 TR?
> given input x, where x $\in$ L1.L2
> First partition x into L1 and L2
> ***Nondeterministically***... (ie: try every possible split)
> 1. Partition x as  x1.x2
> 2. Simulate M1 on x1, if M1 rejects, then reject
> 3. if M1 accepts, simulate M2 on x2
>	 * if M2 accepts; accept
>	 * if M2 rejects; reject
>	 * if M2 loops; loop (implies x2 $\notin$ L2)
> 4. if M1 loops;loop (implies x1 $\notin$ L1)
### Decidable: If it is turing recognizable $\therefore$ it is also turing decidable

## Intersection
### Recognizable
> L1 and L2 are turing recognizable via TMs M1 and M2 respectively
> is L1 $\cap$ L2 TR?
> Given x $\in$ L1 $\cap$ L2
> 1. Simulate M1 on x, if M1 rejects, then reject
> 2. If M1 accepts, simulate M2 on x, if M2 accepts; accept; else reject
> 3. If M1 loop (x $\notin$ L1 and $\therefore$ will loop)

## Star 
### Recognizable 
> L1 is TR via Turing Machine M1
> Proof: 
> Given input x where x in L1*
> 1. Nondeterministically guess a number t
> 2. partition x as x1.x2 ... xt
> 3. Simulate the machine M1  on the strings x1,x2 ... xt in sequence
	> if M1 accepts, accept....etc

## Complement
### Decidable
> L is decidable via halting TM M
> given input x where x $\in \bar{L}$
> 1. Simulate M on x; 
> 2. If M accepts, reject; else accept

### Recognizable? No
> If it doesn't reject (but loops), this will not accept
> so it can't be recognizable

## *L is decidable iff L and $\bar{L}$ are turing recognizable*
1. if L is decidable, by closure properties, L and $\bar{L}$  are decidable
2. if L and $\bar{L}$ are turing recognizable, is L decidable?
> let L be TR via M
> $\bar{L}$ be TR via M1
> construct a machine...
> 1. Simulate M on x and M1 on x simultaneously
> 2. if M accepts, accept; if M1 accepts, reject
> 3. for every x you will halt


# Decidable properties of RLs and CFLs
*we are looking at RLs and CFLs*

1. Is A<sub>DFA</sub> decidable?
* A<sub>DFA</sub> = {<D,w>| D is a DFA and w $\in$ L(D)}
* <D,W> encoding of a DFA and a string w
* is A<sub>DFA</sub> decidable? yes
* Machine M:
* given input <D,w>
* 1. Simulate D on w
* 2. If D accepts then accept; else reject
2. E_DFA (empty DFA)
* is it decidable?
* E_DFA = { < D >|D is a DFA and L(D)=0}
* 1. Check to see if there is a path from start state to an accept state
* 2. If no path exists then accept; else reject
	
Is EQ<sub>DFA</sub> = {< D1, D2 > | D1 and D2 are DFA's and L(D1) = L(D2) }
(they accept the same language) *this is only possible if...*
L(D1)=L(D2) *iff* {(L(D1)/L(D2)) $\cup$ (L(D2)/L(D1))} = ∅

Using closure properties:
* $\exists$ a regular language L such that L = ({(L(D1)/L(D2)) $\cup$ (L(D2)/L(D1))} = ∅)
	* L1 = L(DFA1) (implies regular language)
	* L2 = L(DFA2) (implies regular language)
	* L is regular because regularity is closed under union	
* This implies $\exists$ DFA D such that L(D) = L
	* This DFA accepts only empty strings
	* Check if D $\in$ E<sub>DFA</sub>
* $\therefore$ EQ_DFA is decidable 

---

A<sub>CFG</sub> = { < G, w > | G is CFG and w $\in$ L(G) }
is A<sub>CFG</sub> decidable?
We need to figure out how many number of steps...
Use [[Chomsky Normal Form]]
1. if w = $\epsilon$ then $\exists$ a derivation of w with respect to G' having 1 step
	1. if w $\ne$ $\epsilon$ then $\exists$ a derivation of w with respect to G' having 2 |w| - 1 steps
2. list all derivations of length 2 |w| - 1 
	1. if w is generated by one such derivation then accept; otherwise reject
3. A<sub>CFG</sub> is decidable 

# Quiz: E_CFG = { < G > | G is a CFG and L(G) = null} 
