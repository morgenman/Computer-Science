# Theory of Computation
* ^^ Fundamental Capabilities and limitations of computers
	* Also known as [[Automata Theory]] 
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

*![[Closure]]

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
