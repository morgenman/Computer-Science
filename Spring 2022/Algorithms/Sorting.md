---
updated: 2022-05-05_10:06:02-04:00
---
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