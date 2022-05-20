---
updated: 2022-05-20_09:28:52-04:00
---

# Review
* BST vs. Heap
	* How to search, delete
	* What is the difference?
	* Performance Analysis
* Proof of lower bounds
	* Make sure you can replicate this
* P vs. NP
	* at least one question about this

## List Implementation Review

* Sorted array based list vs sorted linked list
	* Time Complexity
		* Unless I tell you otherwise, you don't have to consider resizing for the array based list
		* Insert on a Sorted array list has cost O(n) to put data in the right place
			* Best case O(1)
		* Search cost can be improved by binary search (log(n))
		* There is NO performance increase in using a linkedlist to search, insert, delete
	* Storage Overhead
		* If we don't know how much data we need to store, the act of resizing our array is costly
		* Break even point is when the array becomes more storage efficient
		* If the size of the list has to change a lot, LL is better

## Binary Search Tree Review
* For our implementation, = is on the right
* A heap is simply a complete or 'full' binary search tree
	* We mainly use Max Heaps
	* Partially ordered
	* Building a heap
	* Sift up is for inserting new values
	* Sift down is for creating the heap from an array

* Insertion - n^2
* Bubble - n^2
* Selection - n^2

- Merge, twice the space - nlogn
- Quick - nlogn -> n^2
- Heap - n to build, 

nlogn is lower bound for COMPARISON

Proof:

TBP $\Omega$(n log n) is the lower bound for comparison based sorting

1. Sorting Comparison decisions can be modelled as a binary tree
2. n! leaves in the decision tree, with each being a permutation of list
3. minimum depth is n log n due to the following facts:
	1. Binary tree of height h can have at most 2$^{h}$ - 1 nodes
	2. Any tree with n nodes requires a height of log(n+1)
4. Therefore... 2$^{h}$ -1 =



![[studyGuideFinalS22.pdf]]
