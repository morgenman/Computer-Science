---
updated: 2022-05-05_10:07:10-04:00
---
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


![[Sorting]]