---
updated: 2022-01-23_12:32:31-05:00
---
# Join
## AKA Natural Join or Theta Join
### Natural Join only shows rows where matching attributes are the same in both tables
![[Pasted image 20210909133030.png]]
* Essentially a [[Cartesian Product]] which matches [[Primary Key]] using [[Select]]
* ![[Pasted image 20210909134115.png]]
* The difference is this is more computationally intense but uses less memory, queries both tables before merging vs merging and filtering


## There are two kinds: Natural and Theta
* natural join does not have duplicate attributes
* theta is natural join with a condition, BUT it does not remove duplicate attributes 
* Theta is basically the [[Cartesian Product]] with a condition
* ![[Pasted image 20210913161827.png]]
* 
