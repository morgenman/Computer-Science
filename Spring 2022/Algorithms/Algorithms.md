---
updated: 2022-05-12_09:35:45-04:00
---
# Algorithms
Thursdays one minute before midnight
25% off monday

[[Midterm 1 Study Guide]]

# Introduction
Three Goals:
1. learn how to measure, test, and analyze the effectiveness of algorithm, program, or data structure
2. present commonly used data structures
3. reinforce the idea of tradeoffs

## Efficiency
* an **efficient** solution is one that solves the problem within the stated resource constraints
* the **cost** of a solution is the amount of resources consumed (space and time)

## Problem
* a **problem** is a task to be performed subject to resource constraints
* the problem definition should not contain any constraints on how the problem should be solved
* problems can be viewed as a specification of inputs and outputs like a math function
* a specific set of inputs is an **instance** of the problem

## Algorithm
* an **algorithm** is a process followed to solve a problem
* Properties:

1. **Correctness**: the algorithm implements the intended function
2. It is composed of **concrete steps**. *concrete: each step is well defined and doable*
3. The determination of the next step is **unambiguous**
4. The number of steps is **finite**
5. It must **terminate**


## Program
* a **program** is an instantiation of an algorithm

## Data Structure
* a **data structure** is a collection of data items with a particular organization and operations
* it is always possible to process data in structure
* using a suitable one can mean the difference between seconds and days in processing
* in order to choose one we need to analyze the problem to determine performance goals

1. Analyze the problem to determine the operations that must be supported (add/delete/search)
2. Quantify resource constraints for each operation
3. Select the data structure that meets the constraints

* How often will the data be searched?
* Can data be deleted?
* Each structure has costs and benefits

## Data Types
* a representation (set of values) together with operations
* Values + Operations

### Abstract Data Type
* The implementation of a logical data type as a software component with a physical form
* Example: lists, stacks, queues
* ADT does not reveal how the data type is implemented
* data structure is used to implement the ADT

# Putting the Science in Computer Science
* Science or Engineering?
* Hypothesis not just a prediction, must be testable, verifiable, and testable


# Proofs
* A proof is an argument
	* structure, completion
	* state what you will prove, then state what you proved
	
## Direct
* shows a conditional statement p -> q
* if p is true q is also tru
* combination p true and q false never happens
* Usually presented in paragraph form
* Outline:
1. State assumption "we assume p is true"
2. State what we are prove
3. Present the steps of your argument
4. State what you proved


## Contradiction
Is we want to prove p is true, and we can find a contradiction, q, such that not p -> q is true
because q is false

1. State the proposition
2. Suppose $\neg$ p is true, and state what that means
3. Set up the contradiction
4. Show the contradiction 
5. State what was proven 

## Mathematical Induction
* Used to prove statements that assert P(n) is true for all positive integers n, where P(n) is a propositional function

1. State what you are proving
2. Basis: Verify P(1) is true
3. Induction assumption (inductive hypothesis): assume P(k) is true for some arbitrary positive integer k (pick a k, not all k's)
4. Inductive step: show that P(k) -> P(k+1) is true for all positive integers k
5. State what you proved

(alternate)
1. State what you will prove
2. State what parameter you are doing the induction on
3. Decide the base case for the parameter, show that the theorem is true for this base case
4. State your induction assumption bounded from below by you base case\
5. State what you are going to prove in inductive step
6. Start with the new case and restate it in terms of your induction assumption from step 4 
7. State what you proved

(Example)
**Prove: The number of empty subtrees in a non-empty binary tree is one more than the number of nodes in the tree**

1. **State what you are proving:** We must prove the theorem that the number of empty subtrees in a non-empty binary tree is one more than the number of nodes in the tree.
2. **State what parameter you are doing the induction on:** Proof by induction on n, the number of nodes in the tree
3. **Decide on the base case for the parameter and show that the theorem is true for this base case:** Base case n = 1. A binary tree with 1 node has 2 empty subtrees. The theorem is true for the base case
4. **State your induction assumption (hypothesis) bounded from below by your base case:** Assume that the theorem is true for a tree T with k nodes, where k >= 1. That is, tree T has k nodes and k+1 empty subtrees
5. **State what you are going to prove:** We must show that the theorem is true for a tree T' with k+1 nodes. That is T' has k+2 empty subtrees. 
6. **Start with the new case and restate it in terms of your induction assumption from step 3:** Consider T' with k+1 nodes. If we remove a node from T', we now have a tree T with k nodes. By our induction assumption, this tree has k+1 empty subtrees. Now, add a node onto tree T, thus restoring tree T'. This removes an empty subtree of T, but adds on 2 more empty subtrees to the restored node, so T' has a total of k+1-1+2 empty subtrees (k+2) ... and k+1 nodes.
7. **State what you proved:** Thus, we have shown that a tree of n nodes has n + 1 empty subtrees. Therefore, the theorem is true by process of mathematical induction


# Recurrence Relations
What is Recursion?
Induction vs. Recursion

T(n) = ... 

* Induction works from the base case, recursion works to the base case
* A **recurrence relation** for the sequence {$a_n$} is an equation that expresses $a_n$ in terms of one or more of the previous terms of the sequence, namely a0, a1, ..., an-1 for all integers n with n>=n0 where n0 is a nonnegative integer
* A sequence is called a **solution** of a recurrence relation if its terms satisfy the recurrence relation


## Counting Problems
* eg Time cost of an algorithm..
* Simple counting methods:
	* Summations (sum for function)
	* Permutations (ordered arrangement of a distinct set)
	* Combinations

![[Pasted image 20220208112850.png]]


> **Modelling with Recurrence Relations**
> 
> A pair of rabbits 1m1f placed on island
> Rabbits don't breed until 2months
> after, each produce another pair of rabbits each month
> recurrence relation for number of rabbit pairs on island after n months, assuming none die
> 
> $f_{n}$ = number of pairs after n months
> $f_{1}$ = 1
> $f_{2}$ = 1
> $f_{n} = f_{n-1} + f_{n-2}$ 
> 
> *Fibonacci Sequence*
> 

![[Pasted image 20220210094229.png]]
## Solving Recurrence Relations
*Solving a recurrence relation is finding a closed form of a recurrence relation*

* Closed form is an algebraic equation with the same value as the recurrence relation

### Backwards Substitution/Iteration (only for simplest sequences with only one term)
 1. Replace occurrence of T on rhs with it's definition
	 * repeatedly substitute until you see a pattern
	 * write a formula for T(n) in terms of n and the number of substitutions, which we commonly call k
 2. **Goal:** detect a pattern that will let us rewrite the recurrence in terms of summation (expand recurrence as many steps as you need to see the pattern)
 3. Ideally, we end up with a summation we can give in a closed form
 4. We have *not* proven we have the correct closed form -- just that we guessed the pattern. We **need** to use an induction proof

 > Example 1:
 > T(n) = T(n-1) + 1 ; T(1) = 0
 > 
 > a. *expand*
 > **K = 1** 
 > T(n) = T(n-1) + 1
	 > T(n-1) = T(n-1-1) + 1 = T(n-2) + 1
 > T(n) = T(n-2) + 1 + 1 
 > T(n) = T(n-2) + 2
 > **K = 2**
 > T(n) = T(n-2) + 2
	 > T(n-2) = T(n-2-1) + 1 = T(n-3) + 1
 > T(n) = T(n-3) + 2 + 1
 > **K = 3**
 > T(n) = T(n-3) + 3
	 > T(n-3) = T(n-3-1) + 1 = T(n-4) + 1
 > 
 > b. *generalize using n + k* 
 > T(n) = T(n-k) + k
 > 
 > c. *use base case to define k* 
 > T(1), k = ?
 > n-k = 1 (we are setting this based on what we know of base case)
 > T(n-(n-1)) = T(1)
 > 
 > d. *substitute new definition of k into general RR form*
 > T(n) = T(n-(n-1)) + (n-1)
 > T(n) = T(1) + (n-1)
 > T(n) = n-1

> Example 1 Proof of Correctness:
> TBP:
> The closed form for the recurrence relation 
> T(n) = T(n-1) + 1 ; T(1) = 0 
> is T(n) = n-1 for n $\geq$ 1
> 
> Proof by Mathematical Induction on n
> **Basis:**  (use solution)
> T(1)=1-1=0 $\checkmark$
> 
> **Inductive Hypothesis:**
> Suppose T(k)=k-1 for some k $\geq$ 1
> 
> **Inductive Step:**
> We must show that the statement is true for T(k+1). 
> That is.. 
> T(k+1)=T(k+1-1)+1
> T(k+1)=T(k)+1
> now we want the rhs to reflect the original rr
> By our inductive hypothesis T(k)=k-1
> T(k+1)=(k-1)+1
> T(k+1)=k
> which is true since T(k)=k-1
> $\therefore$ T(n)=n-1 has been shown true and the closed form T(n)=n-1 is correct for the RR T(n)=T(n-1)+1,T(1)=0 for n $\geq$ 1

 > Example 2:
 > T(n) = T(n-1) + n ; T(1) = 1
 > 
 > a. *expand*
 > **K = 1**
 > T(n) = T(n-1) + n
	 > T(n-1) = T((n-1)-1)+(n-1) = T(n-2) + (n-1)
 > **K = 2**
 > T(n) = T(n-2) + (n-1) + n
	 > T(n-2) = T((n-2)-1) + (n-2) = T(n-3) + (n-2)
 > **K = 3**
 > T(n) = T(n-3) + (n-2) + (n-1) + n
 > 
 > b. *generalize*
 > T(n) = 1 + ... + (n-2) + (n-1) + n
 > T(n) = 1 + 2 + 3 + ... + n
 > 
 > $\sum_{i=1}^{n}i = \frac{n(n+1)}{2}$  
 > 

 > Example 3:
 > T(n) = 2T(n-1) + 1; T(1) = 1
 > 
 > a. *expand*
 > **k=1**
 > T(n)=2T(n-1)+1
	 > T(n-1)=2T(n-2)+1
>  T(n)=2(2T(n-2)+1)+1
>  
>  **k=2**
 > T(n)=2$^2$T(n-2)+2+1
	 > T(n-2)=2T(n-3)+1
>  T(n)=2$^2$(2T(n-3)+1)+2+1
>  
>  **k=3**
>  T(n)=2$^3$T(n-3)+4+2+1
>  T(n)=2$^3$T(n-3)+$2^2+2^1+2^0$
>  
>  b. *generalize*
>  T(n)= 2$^k$T(n-k)+$2^{k-1}+2^{k-2}+\dots+2^{2}+2^{1}+2^0$
>  let k=n-1
>  T(n)=2$^k$T(n-(n-1))+$2^{k-1}+2^{k-2}+\dots+2^{2}+2^{1}+2^0$
>  T(n)=2$^k$T(1)+$2^{k-1}+2^{k-2}+\dots+2^{2}+2^{1}+2^0$
>  T(n)=2$^k$+$2^{k-1}+2^{k-2}+\dots+2^{2}+2^{1}+2^0$
>  
>  c. put in terms of n
>  T(n)=2$^{n-1}$+$2^{n-2}+2^{n-3}+\dots+2^{2}+2^{1}+2^0$
 > T(n)=$\sum_{i=0}^{n-1}2^{i}$
 > 
 > d. known closed form
 > T(n)=$\sum_{i=0}^{n-1}2^{i}=2^{(n-1)+1}-1=2^{n}-1$
 > 
 > $\therefore$ T(n)=$2^{n}$-1
 > 

>  Example 3 Proof of Correctness:
>  
>  TBP: The closed form of T(n) = 2T(n-1)+1; T(1) = 1 
>  is T(n)=$2^{n}$-1
>  
>  Proof by Mathematical Induction on n:
>
>  **Basis:**
>  n = 1; T(1) = 2$^1$-1 = 1 $\checkmark$
>  
>  **Inductive Hypothesis:**
>  Suppose T(k)=2$^k$-1 is true for some k $\geq$ 1
>  
>  **Inductive Step:**
>  Need to show that T(k+1) $\stackrel{?}{=}$ 2T((k+1)-1)+1
>  T(k+1) $\stackrel{?}{=}$ 2T(k)+1
>  T(k+1) $\stackrel{?}{=}$  2(2$^k$-1)+1
>  T(k+1) $\stackrel{?}{=}$ 2$^{k+1}$-2+1
>  T(k+1) $\stackrel{?}{=}$ 2$^{k+1}$-1
>  
>  $\therefore$ CF is equivalent
>  $\therefore$ True, T(n)=$2^n$-1 for n $\geq$ 1
>  

 
 ![[Pasted image 20220212114505.png]]


# Asymptotic Analysis
* measure efficiency of an algorithm as input size grows
* estimation technique
* Time & Space 
## Known Time Costs
### T(n) = C
```java
static int largest(int[] A){
	int first = A[0];
	return first;
}
```
### T(n) = n

### T(n) = n^2
```Java
int foo(int n){
	int sum = 0;
	for (int i = 1; i <= n; i++){   // n
		for (int j = 1; j <= n; j++){ // n
			sum++
		}
	}
}
```

# Big O, Big Omega, Big Theta
$\Omega$ (f(n)) : lower bound
$\mathbb{O}$ (f(n)) : upper bound
$\Theta$ (f(n)) : when they meet with a constant factor

cases deal with particular size of input
Lower bound is maximum lower bound

![[Pasted image 20220222101141.png]]
![[Pasted image 20220222101152.png]]

# Space Requirements
* If an array of n integer requires c bytes per n, $\Theta$(n)
* Overhead: need to store extra information about the data structure itself
* Lookup table: using space to reduce computations



# Polynomial Time
* we can get an exact solution to these problems within some 'reasonable' amount of time
* O(n^k)
* considered *tractable*
	* a solution may exist, but it would take a prohibitively long time to compute


* A *hard* problem is one where the lower bound is defined by $\Omega$(c$^n$) (exponential)

# Non-determinism
* a Non-deterministic computer is one that can...
	* 'guess' the correct solutions to a problem from among all possible solutions
	* OR widely parallel computer that can simultaneously test all possible solutions (must be in polynomial time)
* A Non-deterministic algorithm is one that runs on a non-deterministic machine in polynomial time
	* a problem in **NP: Non-deterministic Polynomial**
* Solving?
	* Two step process
		* 1. non deterministic process that generates a possible solution
		* 2. look at outcome of the first step and decide if it's a real solution to the problem

## Sorting
* Sorting is NP 
* $P\subseteq NP$
* Problems in P like sorting have a *deterministic algorithm*
## NP Complete problems
* If we can find a deterministic polynomial solution to one NP complete problem, we have a solution to all of the NP complete problems
* Used to describe the hardest problems of NP
* Problem reduction: reduce a known problem to an unknown problem.
* Proof of NP completeness:
	* show problem is in NP
	* show it is NP complete by reducing a known NP Complete problem to your problem



# Data Structures
## Lists
* Finite, ordered
* ADT Operations:
	* clear
	* insert
	* append
	* remove
	* movetostart
	* movetoend
	* previous
	* next
	* length
	* currpos
	* move
	* getvalue

### List implementation comparison
* *n  number of elements*
* *P  size of pointer*
* E  size of an element in storage unit
* D  max number of elements that can be store
* Array Based: DE
* LL : n(P+E)
* when n > DE/(P+E) array becomes more efficient
* *if P = E break even point is D/2*

Generalizations:
if we don't know the size of the data, LL is probably the way to go
arraybased lists are more space efficient if the size is known and stable
array provides faster access by position
singly linked lists provide sequential access (O(n))
insertion/deletion in LL is O(1), but getting to the node is most likely O(n)
insertion/deletion in Array is O(n), but getting to the node is O(1)

![[Pasted image 20220320162551.png]]


* Double linked lists

## Lists, Stacks, Queues
* List: most generalized
	* adding and removing can happen anywhere
* Stack: 
	* adding and removing can happen in one place, the top of the list
	* Push, Pop, Top
* Queue: 
	* adding happens at tail, removing happens in front (FIFO)

Search & Sort are only supported by list


### Array based stack
* push/pop O(n)
* if n+1, O(1)
### Linked Stack
* top pointer, just needs to be updated

For both, operations are O(1)


### Deque
* queue where you can add and remove from the front and back

### Array Based Queue
* circular is cool

* array vs linked queue
	* both provide constant time for enqueue and dequeue
	* space are the same as for linked list
	* avoid arrays

### Dictionaries
* not a data structure, but an ADT
* interface to a collection to store and retrieve data efficiently
* key/value
* implementations:
	* array based list unsorted
		* unsorted, inserting is constant
		* finding and removing is $\Theta$(n) (sequential search)
	* Linked
		* same cost as array
	* Sorted Array
		* finding is $\Theta$(logn)
		* insert & remove now is $\Theta$(n)


![[Binary Tree]]


![[Heaps]]


---
Cutoff for midterm

# Search
* Exact match: for a specific pair
* Range query: for all records in range

Three general approaches:

1. Sequential
2. [[Hashing]]
3. Tree Indexing
4. (sort first & binary sort)


## Linear
* Search n elements, average access time T(n)
* ![[Pasted image 20220426102225.png]]
![[Hashing]]


 ![[Graphs]]




# [[Algo Final Exam Prep]]