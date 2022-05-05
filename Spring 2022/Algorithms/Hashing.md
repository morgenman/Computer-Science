---
updated: 2022-05-05_10:18:50-04:00
---
# Hashing Implementations
* Balanced binary search tree
	* effective but not instantaneous
* Hashing gives us direct access O(c) by key value
* h(K) = i in the array
	* h is a hash function
	* array holds values is called Hash Table HT
* We want a big table, small amount of keys
### Mid Square Method (square number and take middle r bits)
* We are trying to minimize the number of collisions


**Folding**: equal weight to all characters, folding all chars together

* Open Hashing 
	* store collisions outside the HT
	* Each slot is head of a linked list
* Closed Hashing
	* store collisions at another slot in the HT
	* All records are in the HT
	* $h(k_{R})$: home position for record R with key $k_{R}$
	* ***Collision Resolution Policy*** - for deciding where to store R (should the slot be occupied) 
	* Same policy must be followed to retrieve record R


### Bucket Hashing
* closed
* divided into M/B 
* (Prof. did not like bucket hashing)

### Probing
* closed
* Collision Resolution Strategy must provide a probe sequence
* p(K,i) - the probe function that provides this sequence 
	* K: key
	* i: probe i

* Always use the first available slot
![[Pasted image 20220428102342.png]]

Linear Probing
p(K,i) = i

* good: all slots are candidates
* bad: not ever slot is equally likely to be chosen

* if slot is already occupied, probability is 0 for next filled

* Probability of slot 6 is 1/|HT| + each contiguous filled slot 

## Problem: Primary Clustering 
* This is caused by linear probing causing the records to clump
* Possible fix: cycle through all slots before returning to home
* we multiply the value by a factor called **c**
* p(k,i)=ci
* for this to work, c must be relatively prime to M (Table size)

## Pseudo-random probing
* p(k,i) = Perm[i-1]
	* where Perm is an array of length M-1 containing a random permutation of the values of 1 to M-1
![[Pasted image 20220503094555.png]]
* EG: M = 101, Perm[1] = 5, Perm[2] = 2, Perm[3] = 32
	* p(k$_{1}$)=30,35,32,62
	* p(k$_{2}$)=35,40,37,67
	* This didn't make sense


## Better Pseudorandom Example
![[Pasted image 20220503093622.png]]
| Table | = 10
Perm = [2,6,5,1,7,9,3,8,4]
We use permutation for the offset
Slot 0 is the home slot
keys = 2, 22,42,32,12
p(k,i) = Perm[i-1]

first is 2, 2 mod 10 is 2
22? (home is 2)

42 mod 10 = 2. 
2 is occupied
Collision resolution mode
home is 2, i = 1, first one in sequence
P(k,i) = 

32 mod 10 = 2
start process over, i = 1
p[0]=2
2 + home = 4, 4 mod 10 is 4, do it again
i = 2
home is still 2
p(k,i)=p[1]=6
6+2 = 8, 8 is full,
i = 3
home is still 2 
p[2] = 5
2+5 = 7
7 mod 10 is 7, 7 is open



| Slot | Value Stored | Prob. Next         | Probe Seg.    |
| ---- | ------------ | ------------------ | ------------- |
| 0    |              | 1/10 + 1/10        |               |
| 1    |              | 1/10               |               |
| 2    | 2            | 0 so sending to 9  | 4,8,7,3,**9** |
| 3    | 12           | 0 so sending to 5  | **5**,9,8,4,0 |
| 4    | 22           | 0 so sending to 6  | **6**,0,9,5,1 |
| 5    |              | 1/10 + 1/10        |               |
| 6    |              | 1/10 + 1/10        |               |
| 7    | 32           | 0 so sending to 9  | **9**,3,2,4,6 |
| 8    | 42           | 0 so sending to 0  | **0**,4,3,9,5 |
| 9    |              | 1/10 + 1/10 + 1/10 |               |


## Quadratic Hashing
![[Pasted image 20220503101337.png]]
Basically, add i^2 to the home slot

## Collision Resolution
* Primary clustering is a problem
	* pseudo/quadradic help, but clustering still occurs 
* Secondary Clustering
	* when two keys are assigned to the same home slot

## Double Hashing
* Helps solve secondary clustering
* A return to linear probing where the constant is determined using the key K

* p(K,i) = i * h_2 (K)

***Example:***

h(K) = K % M
     = K % 7
p(K,i) = i * h$_{2}$(K)
h$_{2}$(K) = REV (K) % 5
For this second hash function we chose reverse mod 5. We have to use the key somehow for double hashing

Keys: 2, 15, 14, 23, 81

2 - 2 mod 7 is 2
First collsion is 23:
1. H(K) = 23%7 = 2; collision
   H$_{2}$(K) = REV(23)%5 = 32%5 = 2
   so, p(K,i) = i * 2 = {2,4,6, ... }
2. H(K) = 81%7 = 4; collision
   H$_{2}$(K) = REV(81)%5 = 18%5 = 3
   P(K,i) = i * H$_{2}$(K) = {3,6,9, ... }
   Base slot = 4, we add the P(K,i) to it
   4+3%7=0, collision
   4+6%7=3, N.C.

| Slot | Value Stored | Explanation                  |
| ---- | ------------ | ---------------------------- |
| 0    | 14           | h(K) = 14%7 = 0; N.C.        |
| 1    | 15           | h(K) = 15%7 = 1; N.C.        |
| 2    | 2            | h(K) = 2%7 = 2; no collision |
| 3    | 81           | See #2                       | 
| 4    | 23           | See #1                       |
| 5    |              |                              |
| 6    |              |                              |


# Performance Analysis
* *a fast method of storing and retrieving keys*
* All searches require constant time
* How full the hash table is is the best metric of performance
## Size considerations

Load Factor: n/k where:
n = number of entries
k = number of buckets

As load factor increases, hash table performance slows

* In general, 70 - 75 % fullness is best

## Deletion
* No duplicate records stored in the table
* deletion cannot undermine later searches
	* soluti

