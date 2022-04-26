---
updated: 2022-04-26_10:19:18-04:00
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


# Binary Tree
## Basics
* Root
	* two subtrees per each node
	* edge connects them
* If there is a sequence of nodes n1...nk such that ni is parent of ni+1, it is a **path** from ni to nk
* length of path:k-1
* depth is length of the path from root to the node
* level is depth
* height is depth+1
* leaf has 2 empty children
	* each node is structured so it has data and two pointers L&R, 
* Internal nodes have one non-empty child

## Types of Trees
* Oak 🤣
* Full Binary Tree
	* each node is either (an internal node with exactly two non empty children) or (a leaf)
* Complete binary tree
	* shape is restricted and obtained by starting at the root and filling the tree levels from left to right
	
## Analysis
* Ratio of internal nodes to leaf nodes?
	* Upper bound will occur when each internal node has 2 non-empty children
	* This doesn't tell us what shape of tree will give the highest percentage of non-empty leaves
	* *all full binary trees with n internal nodes have the same number of leaves*
	* we can use this to compute space requirements
	
## Full Binary Tree Theorem

***MIDTERM***

* The number of leaves in a non-empty full binary tree is one more than the number of internal nodes

> TBP The number of leaves in a FBT is one more than the number of internal nodes
> Proof: By induction, the number of internal nodes
> Basis:  0 internal nodes 1 leaf node $\checkmark$
> 1 internal node, 2 leaf nodes $\checkmark$
> Inductive Hypothesis: Assume and FBT, T containing k+1 internal nodes has k leaf nodes for some k $\geq$ 1
> Inductive Step: We must show  that the theorem holds for $\mathbb{k}$+1->(k-1)+1
> a) Tree T has (k-1)+1 = k internal nodes, by the IH
> See tree T: Select internal node i whose children are leaves
> b) remove i's children. i is now a leaf node. 
> See Tree T' : T' has k-1 internal nodes so it has k leave by IH
> c) Restore I's children. 
> We again have tree T with k internal nodes
> How many leaves in T
> T' had K leaves
> Restoring to T gives k+2
> BUT 
> i was counted as a leave in T' and in T is an internal node. 
> $\therefore$ the number of leaves in T is k+2-1 = k+1
> $\therefore$ Tree T has k internal nodes and k+1 leaf nodes
> $\therefore$  Theorem is true by PMI for n $\geq$ 0 


```nomnoml
#direction:down
[0]
```
```nomnoml
#direction:down
[0]-[1]
[0]-[2]
```

```nomnoml
#direction:down
Tree T
[0]-[1]
[0]-[2]
[1]-[3]
[1]-[i]
[i]-[5]
[i]-[6]
```

```nomnoml
#direction:down
Tree T'
[0]-[1]
[0]-[2]
[1]-[3]
[1]-[i]
```

If you take an arbitrary binary tree T, replace every empty subtree with a leaf

**The number of empty subtrees in T is one more than the number of nodes in T.**

---

Every node in a binary tree has 2 children for a total of 2n children in a tree of n nodes
Every node by the root has one parent for a total of n-1 nodes with parents. 
There are n-1 non-empty children. 
2n total children, so n+1 children are empty

```java
public interface BinNode<E>{
	// return and set element value
	public E element();
	public void setElement(E v);

	// return the left child
	public BinNode<E> left();

	// return the right child
	public BinNode<E> right();

	// return true if is leaf
	public boolean isLeaf();
}
```

Traversal: process for visiting all nodes in some order.
Three types we will cover:
* **Pre order**: left side (root left right starting at root)
* **In order**: bottom  (left to right on a tree ignoring level)
* **Post order**: right side (left right root starting at leftmost leaf)
![[Pasted image 20220411192548.png]]
Trace a path around the tree. As you pass a node on the proper side, process it

```java
void preorder (BinNode rt){
	if (rt == null) return; // empty subtree
	visit(rt);
	preorder(rt.left());
	preorder(rt.right());
}
void preorder2(BinNode rt){
	visit(rt); // if root is null, we might have a problem
	if (rt.left() != null) preorder2(rt.left());
	if (rt.right() != null) preorder2(rt.right());
}

void inorder (BinNode rt){
	if (rt == null) return; // empty subtree
	inorder(rt.left());
	visit(rt);
	inorder(rt.right());
}

void postorder (BinNode rt){
	if (rt == null) return; // empty subtree
	postorder(rt.left());
	postorder(rt.right());
	visit(rt);
}
int count (BinNode rt){
	if (rt == null) return 0; // empty subtree
	int n = 1;
	n += count(rt.left());
	n += count(rt.right());
	return n;
}
boolean checkBST (BinNode<integer> rt, int low, int high){
	if (rt == null) return true;
	int rootKey = rt.element();
	if (rt.element() < low || rt.element() > high) return false;
	if (!checkBST(rt.left(), low, rt.element())) return false;
	return checkBST(rt.right(), rootKey, high);
}
```

## Overhead fraction/ratio:
* Space requirements (simple pointer based implementation):
	* n(2P+D)
	* n = number of nodes
	* P = size of pointer
	* D = size of data
* Total overhead space for entire tree: 2Pn
* Total overhead fraction = $\frac{2Pn}{n(2P+D)}=\frac{2P}{2P+D}$
	* if P=D, a full tree has about 2/3 of it's total storage taken up in overhead! 
	* AND 1/2 of the pointers are NULL (theorem 5.2)

* What if we remove pointers on leaf nodes
	* half of nodes are leaf nodes, so that gives us n/2 pointers
	* $\frac{P}{P+D}$
* What if we we have internal nodes with pointers but no data, and leaf nodes with no pointers?
	* 2Pn+D(n+1) units of space
	* overhead is about $\frac{2P}{2P+D}=\frac{2}{3}$

EG: 
all nodes store:
*  data  (4B)
* parent pointer (4B)
* 2 child pointers (4B each)

Overhead ratio is $\frac{Ptrs}{Data}=\frac{3(4B)}{3(4B)+4B}=\frac{12B}{16B}=\frac{3}{4}$

If you can fully fill it up, an array is most efficient. 
We can use an array to store the tree, since the shape of the tree is static. 



## Binary Search Tree
* Way of storing a collection of elements so that inserting and searching for records can be done quickly?
* unsorted list is quick insertion, searching is $\Theta$(n) average case
* sorted list
	* no speed up in searching ll
	* array based list: use binary search, so search becomes $\Theta$(n)
* For every node in the tree
	* left node has key value less than node
	* right node has greater or equal to node
* In-order traversal prints them in order

* Node can be implemented with separate key value and data element as in the books code
* Finding a record with key value K in BST:
	* begin at root
	* if root stores record with key value K, you're done
	* otherwise search appropriate subtree
		* if K < root node's key, left
		* if K > root node's key, right
* Deleting is much harder
	* Find value in R's subtrees that is most like R (least key value >= R or greatest < R)
	* if no duplicates, it doesn't matter
	* if there are dupes, must use R subtree
	* We want to replace the node with this node
### Cost
* finding/inserting/removing is depth of node
* height of tree 
	* log(n)
* Balanced Tree
	* Average operations are $\Theta$(log(n))
	* if we insert n nodes it's $\Theta$(nlog(n))
* Unbalanced
	* height can be as much as n
	* Worst case $\Theta$(n)
	* inserting n nodes is $\Theta$(n$^2$)
* Traversal 
	* $\Theta$(n) regardless of the shape


Simple to implement, efficient when balanced. 
Unbalanced is a problem


## AVL Tree
* named after adelson-velskii and landis
* With each insertion or deletion that the depth of each subtree at each node does not differ by more than once
* Need to be able to maintain balance in $\Theta$(log(n))
* Example: adding 10 -> 6 -> 4
	* to fix this, we are going to rotate grandparent right to the child of the parent
	* 4 <- 6 -> 10
	* Left imbalance, right rotation etc.
* We are taking three elements and rearranging the tree so the median element is on top
* Example: adding 4 -> 8 -> 6
	* we want to right rotate to 4 -> 6 -> 8
	* then we can fix it
## Splay
* don't maintain balance, but improve balance when tree is accessed


# Heaps
* A complete binary tree
* values are partially ordered
* Used to implement a priority queue
## Types:
* Max Heap
	* every node stores value >= values of children
	* root has biggest value
* Min Heap
	* every node stores value <= values of children
	* root has smallest value
	
## Insertion:
* If heap has n items, insert to n+1, then sift to proper place
	* Height: $\mathbb{\Theta}(logn)$ 
	* Cost for ONE insertion is  $\mathbb{\Theta}(logn)$  worst case. 
	* so nlogn for n values
![[Pasted image 20220407095640.png]]

![[Pasted image 20220407100446.png]]
## Sift down
![[Pasted image 20220407100943.png]]
* Used 
## Sift up
![[Pasted image 20220407101637.png]]
* do left subtree, then right subtree, then root
* when receiving values one at a time to build, or adding a new one

## Only delete from root
* Replace with right most leaf
* sift down
* $\mathbb{\Theta}(log(n))$

---
Cutoff for midterm
# Sorting
* Let's use dictionary structure, with each record containing a *key*
* Measures of cost: comparisons & swaps
* n$^2$ algorithms:
	* Why do we have n^2 for swap? n(n-1)/2 unique pairs. 
		* any sort that limits to comparing adjacent elements will cost at least n(n-1)/4 on average or O(n^2)
	* insertion
		* Best case is 0 swaps, n-1 comparisons
		* Useful if we have an almost sorted list
		* Worst: n^2/2 swaps and comparisons
		* Avg: n^2/4
	* bubble
		* bubble smallest remaining unsorted value
		* Best: 0 swaps, n^2/2 comparisons
		* Worst: n^2 swaps & comparisons
		* Average: n^2/4 swaps and n^2/2 comparisons
	* selection
		* Best: 0 swaps, n^2/2 comparisons
		* Worst: n-1 swaps  n^2/2 comparisons
		* Average: n swaps n^2/2 comparisons
* nlogn algorithms
	* Merge Sort
		* Requires twice the space
		* Cost: $\Theta$(n log n)
		* At each level, $\Theta$(n) work is done to merge
		* Good for sorting LL
	* Quick Sort (F/L or R/L)
		* How do you choose the pivot?
		* The cost for partition is $\Theta$(n)
		* Procedure:
			* Set Pivot to first element 
			* F: we want to set this to values that are greater than pivot 
				* initially set to first element after pivot
			* l: looking for values less than the pivot
				* initially set to last element
			* F scan left to right
			* L scan right to left
			* scan until:
				* they both find their values
				* they cross
				* they run out of things to scan
			* If they both found values, swap
			* Do it again
			* Once they cross/meet/reach the end, stop scanning
				* If l found a value, swap l value with pivot
			* Recursively call partition on each partition
		* Time Complexity:
			* Best performance when we have well balanced partitions
			* Best case: Always partition in half $\Theta$(nlogn)
			* Worst case: Always get a partition of 0 on one side $\Theta$(n^2)
			* Average case: big formula
				* basically $\Theta$(nlogn)
				* Better performance by a linear factor compared to merge sort
				* ![[Pasted image 20220414100644.png]]
		* Heap sort 
			* Recursively call remove max
			* Almost always implemented with array
			* Make heap, sift down, sift up etc etc
			* Cost:
				* Time to build: $\Theta$(n)
				* Time to remove n elements: $\Theta$(nlogn)
				* Time to find K largest elements: $\Theta$(n+klogn)
## Lower Bound for Comparison Based Sorting
* Goal: understanding and being able to prove the lower bound for all sorting algorithms
* Cost of the sorting problem:
	* Upper Bound for the problem
		* the asymptotic cost of the fastest known algorithm
	* Lower Bound for the problem
		* The best possible efficiency for *any* algorithm, including algorithms not yet invented
	* Once they meet, we know that no future algorithm can be asymptotically more efficient
* Sorting is **O(n log n)** (average, worst cases) because we know of algorithms with this upper bound
* Sorting **I/O takes $\Omega$(n)** time (it takes at least this long to just print values)
* We will now prove **$\Omega$(n log n)** lower bound for sorting

Lower Bound for any problem that solves our problem is $\Theta$(n log n)

P = sorting
Upper bound: P is in O (n log n)
Lower bound: P is in $\Omega$(n)

Should we keep looking? Or can we prove that there is no faster algorithm

> Proof: 
>  **$\Omega$(n log n)** lower bound for sorting
>  Theorem: No sorting algorithm based on key comparisons can possibly be faster than n log n
>  That is, P = sorting $\in$  $\Omega$ (nlogn)
>  1. Sorting comparison decisions (for any sort), can be modeled as branches in binary decision tree
>  2. There must be at least n! leaves in the decision tree (each leaf is a possible permutation of the n values)
>  3. minimum depth of this tree is n log n
> ![[Pasted image 20220419102410.png]]
> ![[Pasted image 20220419103424.png]]
> .
> Upper and lower bounds are nlog n (within a constant factor)
> Theta nlogn for comparison based sorting

---
For Midterm:

- Know break even point (array/ll)
- Pick a data structure
- for sorted adt, at the end of every operation, the list is sorted
- BST: pointers (like a linked list)
	- assume base design:
		- spot for data and two pointers in *every* node
	- They use a lot of storage
- small data, huge amount of searches = consider a BST
- What does it mean to have uniformly distributed values?
	* this does not mean inserting into BST will result in balance
* We need solid explanations for choices and rejections
* Concerned with finding min/max is the only reason to keep the LL sorted
--- 
## Non-comparison based sorts
### Binsort
Make each bin the head of a list
allow more keys than records
![[Pasted image 20220426094246.png]]
* $\Theta$(n + max_key_value)
* Bucketsort is a variation

### Radix Sort
* Tiered Binsort
* Can be implemented using any base
	* Each 'bin' is a linked list
	* Go from least significant to most significant
* Cost: $\Theta$(nk+rk)
	* n numbers, k passes, base r
	* How do n, k, and r relate
	* If key range is small, then this can be $\Theta$(n)
	* If there are n distinct keys, then the length of a key must be at least log n
	* **General case:** $\Theta$(n log n)
	* As long as the max 
* There are k digits in base r, so we need:
$r^{k}\geq n$ or $k\geq log_{r}n$ 
* So $O(kn) = O(n log_{r} n)$

![[Pasted image 20220426100536.png]]
[VisuAlgo Site](https://visualgo.net/en)

TL;DR: Quicksort



# Search
* Exact match: for a specific pair
* Range query: for all records in range

Three general approaches:

1. Sequential
2. Hashing
3. Tree Indexing
4. (sort first & binary sort)


## Linear
* Search n elements, average access time T(n)
* ![[Pasted image 20220426102225.png]]
* 