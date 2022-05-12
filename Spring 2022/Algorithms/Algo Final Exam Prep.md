---
updated: 2022-05-12_10:07:25-04:00
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
* 



![[studyGuideFinalS22.pdf]]
